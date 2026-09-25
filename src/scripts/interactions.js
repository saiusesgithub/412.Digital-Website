      // Navigation Mobile
      const menuBtn = document.getElementById('mobile-menu-btn');
      const closeBtn = document.getElementById('mobile-menu-close');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      function openMenu() {
        if (mobileMenu) {
          mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
          mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
          document.body.style.overflow = 'hidden';
          menuIcon?.classList.add('opacity-0');
          closeIcon?.classList.remove('opacity-0');
          menuBtn?.setAttribute('aria-expanded', 'true');
          menuBtn?.setAttribute('aria-label', 'Close menu');
          mobileMenu.setAttribute('aria-hidden', 'false');
          mobileMenu.removeAttribute('inert');
          closeBtn?.focus();
        }
      }

      function closeMenu() {
        if (mobileMenu) {
          mobileMenu.classList.add('opacity-0', 'pointer-events-none');
          mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
          document.body.style.overflow = '';
          menuIcon?.classList.remove('opacity-0');
          closeIcon?.classList.add('opacity-0');
          menuBtn?.setAttribute('aria-expanded', 'false');
          menuBtn?.setAttribute('aria-label', 'Open menu');
          mobileMenu.setAttribute('aria-hidden', 'true');
          mobileMenu.setAttribute('inert', '');
        }
      }

      if (menuBtn && mobileMenu) menuBtn.addEventListener('click', () => {
        if (mobileMenu.classList.contains('opacity-0')) {
          openMenu();
        } else {
          closeMenu();
        }
      });

      if (closeBtn) closeBtn.addEventListener('click', closeMenu);
      mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('opacity-0')) {
          closeMenu();
          menuBtn?.focus();
        }
      });

      // Cookie Management System Logic
      const cookieManager = {
          banner: document.getElementById('cookie-banner'),
          modal: document.getElementById('cookie-settings-modal'),
          checkboxes: {
              analytics: document.getElementById('cookie-analytics'),
              marketing: document.getElementById('cookie-marketing')
          },

          init: function() {
              // Check if consent is already stored
              const consent = localStorage.getItem('412_cookie_consent');
              if (!consent) {
                  this.showBanner();
              } else {
                  this.applyConsent(JSON.parse(consent));
              }
          },

          showBanner: function() {
              if (this.banner) {
                  // Small delay for animation entrance
                  setTimeout(() => {
                      this.banner.classList.remove('translate-y-24', 'opacity-0');
                  }, 1000);
              }
          },

          hideBanner: function() {
              if (this.banner) {
                  this.banner.classList.add('translate-y-24', 'opacity-0');
                  // Remove from DOM after animation if needed, or just hide
                  setTimeout(() => this.banner.style.display = 'none', 500);
              }
          },

          openSettings: function() {
              // Pre-fill checkboxes based on current saved state (or default false)
              const consent = JSON.parse(localStorage.getItem('412_cookie_consent') || '{"analytics": false, "marketing": false}');
              if (this.checkboxes.analytics) this.checkboxes.analytics.checked = consent.analytics;
              if (this.checkboxes.marketing) this.checkboxes.marketing.checked = consent.marketing;

              if (this.modal) {
                  this.modal.classList.remove('hidden');
                  document.body.style.overflow = 'hidden'; // Prevent scrolling
              }
          },

          closeSettings: function() {
              if (this.modal) {
                  this.modal.classList.add('hidden');
                  document.body.style.overflow = '';
              }
          },

          acceptAll: function() {
              const consent = { necessary: true, analytics: true, marketing: true };
              localStorage.setItem('412_cookie_consent', JSON.stringify(consent));
              this.applyConsent(consent);
              this.hideBanner();
          },

          refuseAll: function() {
              const consent = { necessary: true, analytics: false, marketing: false };
              localStorage.setItem('412_cookie_consent', JSON.stringify(consent));
              this.applyConsent(consent);
              this.hideBanner();
          },

          savePreferences: function() {
              const consent = {
                  necessary: true,
                  analytics: this.checkboxes.analytics ? this.checkboxes.analytics.checked : false,
                  marketing: this.checkboxes.marketing ? this.checkboxes.marketing.checked : false
              };
              localStorage.setItem('412_cookie_consent', JSON.stringify(consent));
              this.applyConsent(consent);
              this.closeSettings();
              this.hideBanner();
          },

          applyConsent: function(consent) {
              console.log('Applying cookie consent:', consent);

              // Logic to enable scripts based on consent
              if (consent.analytics) {
                  // Example: Enable Google Analytics
                  // window.dataLayer = window.dataLayer || [];
                  // function gtag(){dataLayer.push(arguments);}
                  // gtag('js', new Date());
                  // gtag('config', 'UA-XXXXX-Y');
                  console.log('Analytics scripts enabled');
              }

              if (consent.marketing) {
                  // Example: Enable Meta Pixel
                  console.log('Marketing scripts enabled');
              }
          }
      };

      // Initialize Cookie Manager on load
      window.addEventListener('DOMContentLoaded', () => {
          cookieManager.init();
      });

window.cookieManager = cookieManager;
if (window.lucide) window.lucide.createIcons();
