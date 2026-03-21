/* ============================================
   Portfolio Password Gate
   Simple client-side lock for draft/preview.
   Remove this script (and its <script> tags)
   from all HTML files when ready to go public.
   ============================================ */

(function () {
  // --- Configuration ---
  // Change this passphrase to whatever you like.
  // Note: this is NOT secure encryption — it's a
  // casual gate to keep random visitors out.
  const PASSPHRASE = 'wardfolio2026';
  const STORAGE_KEY = 'portfolio_unlocked';

  // If already unlocked this session, skip the gate
  if (sessionStorage.getItem(STORAGE_KEY) === 'true') return;

  // --- Build the gate UI ---
  const gate = document.createElement('div');
  gate.id = 'password-gate';
  gate.innerHTML = `
    <style>
      #password-gate {
        position: fixed;
        inset: 0;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: oklch(99% 0.003 240);
        font-family: 'DM Sans', system-ui, sans-serif;
      }
      #password-gate .gate-box {
        text-align: center;
        max-width: 360px;
        padding: 48px 32px;
      }
      #password-gate .gate-logo {
        width: 56px;
        height: 56px;
        margin: 0 auto 24px;
      }
      #password-gate h2 {
        font-family: 'Quicksand', system-ui, sans-serif;
        font-size: 1.4rem;
        font-weight: 600;
        color: oklch(20% 0.015 240);
        margin: 0 0 8px;
      }
      #password-gate p {
        font-size: 0.9rem;
        color: oklch(45% 0.01 240);
        margin: 0 0 24px;
      }
      #password-gate input {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid oklch(85% 0.01 240);
        border-radius: 10px;
        font-size: 1rem;
        font-family: inherit;
        outline: none;
        transition: border-color 0.2s ease;
        box-sizing: border-box;
      }
      #password-gate input:focus {
        border-color: oklch(42% 0.12 240);
      }
      #password-gate .gate-btn {
        width: 100%;
        margin-top: 12px;
        padding: 12px;
        background: oklch(42% 0.12 240);
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        font-family: inherit;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s ease;
      }
      #password-gate .gate-btn:hover {
        background: oklch(35% 0.11 240);
      }
      #password-gate .gate-error {
        color: oklch(50% 0.15 25);
        font-size: 0.85rem;
        margin-top: 12px;
        min-height: 1.2em;
      }
    </style>
    <div class="gate-box">
      <svg class="gate-logo" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="10" fill="#1a5a8a"/>
        <text x="18" y="24" text-anchor="middle" fill="white" font-size="18" font-weight="bold" font-family="system-ui">W</text>
      </svg>
      <h2>This site is under construction</h2>
      <p>Enter the password to preview.</p>
      <form id="gate-form">
        <input type="password" id="gate-input" placeholder="Password" autocomplete="off" autofocus>
        <button type="submit" class="gate-btn">Enter</button>
        <div class="gate-error" id="gate-error"></div>
      </form>
    </div>
  `;

  // Hide page content while gate is showing
  document.body.style.overflow = 'hidden';
  document.body.appendChild(gate);

  // --- Handle submit ---
  document.getElementById('gate-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('gate-input');
    if (input.value === PASSPHRASE) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      gate.remove();
      document.body.style.overflow = '';
    } else {
      document.getElementById('gate-error').textContent = 'Incorrect password';
      input.value = '';
      input.focus();
    }
  });
})();
