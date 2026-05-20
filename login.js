// ============================================
// ATHOS ADS - Login System
// Google Identity Services + Social Login
// ============================================

// Google OAuth Client ID
// Para usar em produção, crie seu Client ID em: https://console.cloud.google.com/apis/credentials
const GOOGLE_CLIENT_ID = '379935474528-gh8u89plauushulpohnjf5hcqe6fssou.apps.googleusercontent.com';

// ============================================
// PARTICLES BACKGROUND
// ============================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const count = 30;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (8 + Math.random() * 12) + 's';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.width = (2 + Math.random() * 3) + 'px';
        p.style.height = p.style.width;
        p.style.opacity = 0.2 + Math.random() * 0.4;
        container.appendChild(p);
    }
}
createParticles();

// ============================================
// STATE MANAGEMENT
// ============================================
function showLogin(e) {
    if (e) e.preventDefault();
    document.getElementById('loginState').style.display = 'block';
    document.getElementById('registerState').style.display = 'none';
    document.getElementById('forgotState').style.display = 'none';
    reanimateState('loginState');
}

function showRegister(e) {
    if (e) e.preventDefault();
    document.getElementById('loginState').style.display = 'none';
    document.getElementById('registerState').style.display = 'block';
    document.getElementById('forgotState').style.display = 'none';
    reanimateState('registerState');
}

function showForgotPassword(e) {
    if (e) e.preventDefault();
    document.getElementById('loginState').style.display = 'none';
    document.getElementById('registerState').style.display = 'none';
    document.getElementById('forgotState').style.display = 'block';
    reanimateState('forgotState');
}

function reanimateState(id) {
    const el = document.getElementById(id);
    el.style.animation = 'none';
    el.offsetHeight; // trigger reflow
    el.style.animation = 'fadeIn 0.35s ease';
}

// ============================================
// PASSWORD VISIBILITY TOGGLE
// ============================================
function togglePasswordVisibility(btn) {
    const input = btn.parentElement.querySelector('input');
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
    }
}

// ============================================
// PASSWORD STRENGTH CHECKER
// ============================================
const regPassword = document.getElementById('regPassword');
if (regPassword) {
    regPassword.addEventListener('input', function () {
        const val = this.value;
        const fill = document.getElementById('strengthFill');
        const text = document.getElementById('strengthText');
        if (!fill || !text) return;

        let score = 0;
        if (val.length >= 8) score++;
        if (val.length >= 12) score++;
        if (/[A-Z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;

        const levels = [
            { width: '0%', color: 'transparent', label: '' },
            { width: '20%', color: '#ef4444', label: 'Fraca' },
            { width: '40%', color: '#f59e0b', label: 'Razoável' },
            { width: '60%', color: '#f59e0b', label: 'Média' },
            { width: '80%', color: '#22c55e', label: 'Forte' },
            { width: '100%', color: '#22c55e', label: 'Excelente' }
        ];

        const level = levels[score] || levels[0];
        fill.style.width = level.width;
        fill.style.background = level.color;
        text.textContent = level.label;
        text.style.color = level.color;
    });
}

// ============================================
// GOOGLE LOGIN - Google Identity Services
// ============================================
function initGoogleLogin() {
    if (typeof google === 'undefined' || !google.accounts) {
        console.log('Google Identity Services não carregado ainda.');
        return;
    }

    google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: true
    });
}

function handleGoogleCredentialResponse(response) {
    // O response.credential é um JWT token com as informações do usuário
    const token = response.credential;

    // Decodificar o JWT para obter os dados do usuário
    const payload = parseJwt(token);

    if (payload) {
        const userData = {
            provider: 'google',
            name: payload.name,
            email: payload.email,
            picture: payload.picture,
            token: token
        };

        handleSuccessfulLogin(userData);
    }
}

function loginWithGoogle() {
    // Método 1: Usar Google Identity Services prompt
    if (typeof google !== 'undefined' && google.accounts) {
        google.accounts.id.prompt((notification) => {
            if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                // Se o prompt não funcionar, usar popup OAuth
                googleOAuthPopup();
            }
        });
    } else {
        // Fallback: abrir popup OAuth diretamente
        googleOAuthPopup();
    }
}

function googleOAuthPopup() {
    // OAuth 2.0 popup flow
    const redirectUri = window.location.origin + window.location.pathname;
    const scope = 'openid email profile';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${encodeURIComponent(GOOGLE_CLIENT_ID)}` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&response_type=token` +
        `&scope=${encodeURIComponent(scope)}` +
        `&prompt=select_account`;

    const width = 500, height = 600;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    const popup = window.open(authUrl, 'googleAuth',
        `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no`);

    if (!popup) {
        showToast('Erro', 'Habilite popups para fazer login com Google.', 'error');
        return;
    }

    // Monitorar o popup para capturar o token
    const pollTimer = setInterval(() => {
        try {
            if (popup.closed) {
                clearInterval(pollTimer);
                return;
            }
            if (popup.location.href.includes('access_token')) {
                const hash = popup.location.hash;
                const params = new URLSearchParams(hash.substring(1));
                const accessToken = params.get('access_token');
                popup.close();
                clearInterval(pollTimer);

                if (accessToken) {
                    fetchGoogleUserInfo(accessToken);
                }
            }
        } catch (e) {
            // Cross-origin error is expected until redirect
        }
    }, 500);
}

async function fetchGoogleUserInfo(accessToken) {
    try {
        const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        const data = await response.json();

        const userData = {
            provider: 'google',
            name: data.name,
            email: data.email,
            picture: data.picture,
            token: accessToken
        };

        handleSuccessfulLogin(userData);
    } catch (error) {
        console.error('Erro ao buscar info do Google:', error);
        // Demo mode: simulate login
        simulateLogin('Google', 'google');
    }
}

// ============================================
// FACEBOOK LOGIN
// ============================================
function initFacebookLogin() {
    if (typeof FB === 'undefined') {
        console.log('Facebook SDK não carregado ainda.');
        return;
    }

    FB.init({
        appId: 'YOUR_FACEBOOK_APP_ID',
        cookie: true,
        xfbml: true,
        version: 'v19.0'
    });
}

function loginWithFacebook() {
    if (typeof FB !== 'undefined') {
        FB.login(function (response) {
            if (response.authResponse) {
                FB.api('/me', { fields: 'name,email,picture.width(200)' }, function (userData) {
                    handleSuccessfulLogin({
                        provider: 'facebook',
                        name: userData.name,
                        email: userData.email,
                        picture: userData.picture?.data?.url,
                        token: response.authResponse.accessToken
                    });
                });
            } else {
                showToast('Login cancelado', 'Login com Facebook foi cancelado.', 'error');
            }
        }, { scope: 'email,public_profile' });
    } else {
        // Demo mode
        simulateLogin('Facebook', 'facebook');
    }
}

// ============================================
// APPLE LOGIN (Simulated)
// ============================================
function loginWithApple() {
    // Apple Sign In requer configuração em developer.apple.com
    // Para demo, simular o login
    simulateLogin('Apple', 'apple');
}

// ============================================
// GITHUB LOGIN (Simulated)
// ============================================
function loginWithGithub() {
    // GitHub OAuth requer uma Client ID do developer settings
    // Para demo, simular o login
    simulateLogin('GitHub', 'github');
}

// ============================================
// EMAIL/PASSWORD LOGIN
// ============================================
function handleEmailLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const btn = e.target.querySelector('.btn-login');

    if (!email || !password) {
        showToast('Erro', 'Preencha todos os campos.', 'error');
        return;
    }

    // Show loading state
    setButtonLoading(btn, true);

    // Simular validação de login
    setTimeout(() => {
        setButtonLoading(btn, false);

        // Demo: aceitar qualquer credencial
        const userData = {
            provider: 'email',
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            email: email,
            picture: null,
            token: 'demo_token_' + Date.now()
        };

        handleSuccessfulLogin(userData);
    }, 1500);
}

// ============================================
// REGISTRATION
// ============================================
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const terms = document.getElementById('acceptTerms').checked;
    const btn = e.target.querySelector('.btn-login');

    if (!name || !email || !password) {
        showToast('Erro', 'Preencha todos os campos.', 'error');
        return;
    }

    if (!terms) {
        showToast('Atenção', 'Aceite os termos de uso para continuar.', 'error');
        return;
    }

    if (password.length < 8) {
        showToast('Erro', 'A senha deve ter pelo menos 8 caracteres.', 'error');
        return;
    }

    setButtonLoading(btn, true);

    setTimeout(() => {
        setButtonLoading(btn, false);

        const userData = {
            provider: 'email',
            name: name,
            email: email,
            picture: null,
            token: 'demo_token_' + Date.now()
        };

        handleSuccessfulLogin(userData);
    }, 1500);
}

// ============================================
// FORGOT PASSWORD
// ============================================
function handleForgotPassword(e) {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value;
    const btn = e.target.querySelector('.btn-login');

    if (!email) {
        showToast('Erro', 'Informe seu email.', 'error');
        return;
    }

    setButtonLoading(btn, true);

    setTimeout(() => {
        setButtonLoading(btn, false);
        showToast('Email enviado!', `Link de redefinição enviado para ${email}`, 'success');

        setTimeout(() => showLogin(), 2000);
    }, 1500);
}

// ============================================
// SIMULATE LOGIN (Demo Mode)
// ============================================
function simulateLogin(providerName, provider) {
    showToast('Conectando...', `Autenticando com ${providerName}...`, 'success');

    setTimeout(() => {
        const userData = {
            provider: provider,
            name: 'Pedro Alves',
            email: 'pedro@athosads.com',
            picture: null,
            token: 'demo_' + provider + '_' + Date.now()
        };

        handleSuccessfulLogin(userData);
    }, 1200);
}

// ============================================
// HANDLE SUCCESSFUL LOGIN
// ============================================
function handleSuccessfulLogin(userData) {
    // Salvar dados do usuário no localStorage
    localStorage.setItem('athosUser', JSON.stringify(userData));
    localStorage.setItem('athosLoggedIn', 'true');

    // Mostrar animação de sucesso
    showSuccessAnimation(userData.name);

    // Redirecionar para o dashboard após animação
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// ============================================
// SUCCESS ANIMATION
// ============================================
function showSuccessAnimation(name) {
    const overlay = document.createElement('div');
    overlay.className = 'login-success-overlay';
    overlay.innerHTML = `
        <div class="success-check"><i class="fas fa-check"></i></div>
        <div class="success-text">Bem-vindo, ${name}!</div>
        <div class="success-subtext">Redirecionando para o dashboard...</div>
    `;
    document.body.appendChild(overlay);
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(title, message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastIcon = toast.querySelector('.toast-icon');
    const toastTitle = document.getElementById('toastTitle');
    const toastMessage = document.getElementById('toastMessage');

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    if (type === 'error') {
        toastIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        toastIcon.className = 'toast-icon error';
    } else {
        toastIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        toastIcon.className = 'toast-icon';
    }

    toast.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(hideToast, 4000);
}

function hideToast() {
    document.getElementById('toast').classList.remove('show');
}

// ============================================
// UTILITIES
// ============================================
function setButtonLoading(btn, loading) {
    if (!btn) return;
    const text = btn.querySelector('.btn-text');
    const loader = btn.querySelector('.btn-loader');
    if (loading) {
        text.style.display = 'none';
        loader.style.display = 'inline-flex';
        btn.disabled = true;
        btn.style.opacity = '0.7';
    } else {
        text.style.display = 'inline-flex';
        loader.style.display = 'none';
        btn.disabled = false;
        btn.style.opacity = '1';
    }
}

function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64));
    } catch (e) {
        return null;
    }
}

// ============================================
// CHECK IF ALREADY LOGGED IN
// ============================================
// Verificar autenticação ao carregar a página
function checkAuth() {
    const params = new URLSearchParams(window.location.search);
    const isSwitching = params.get('switch') === 'true';

    if (isSwitching) {
        // Se estiver trocando de conta, garante que está deslogado e mostra aviso
        localStorage.removeItem('athosLoggedIn');
        localStorage.removeItem('athosUser');

        // Pequeno delay para o toast aparecer após o carregamento
        setTimeout(() => {
            showToast('Trocar Conta', 'Por favor, selecione ou digite os dados da sua outra conta.', 'success');
        }, 500);
        return;
    }

    const isLoggedIn = localStorage.getItem('athosLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = 'index.html';
    }
}

checkAuth();

// ============================================
// INITIALIZE SDKs
// ============================================
window.addEventListener('load', () => {
    // Inicializar Google após carregar
    setTimeout(() => {
        initGoogleLogin();
        initFacebookLogin();
    }, 1000);
});
