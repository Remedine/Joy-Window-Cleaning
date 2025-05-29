<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      // Define the Cal.com embed function
      const initCal = () => {
        (function (C, A, L) {
          let p = function (a, ar) { a.q.push(ar); };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement('script')).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () { p(api, arguments); };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === 'string') {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ['initNamespace', namespace]);
              } else {
                p(cal, ar);
              }
              return;
            }
            p(cal, ar);
          };
        })(window, 'https://app.cal.com/embed/embed.js', 'init');
  
        // Initialize Cal.com with the provided namespace and origin
        window.Cal('init', 'window-cleaning', { origin: 'https://cal.com' });
  
        // Configure the inline calendar
        window.Cal.ns['window-cleaning']('inline', {
          elementOrSelector: '#my-cal-inline',
          config: { layout: 'month_view', theme: 'light' },
          calLink: 'tim-hill-s9x5dk/window-cleaning',
        });
  
        // Configure UI settings
        window.Cal.ns['window-cleaning']('ui', {
          theme: 'light',
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      };
  
      // Check if the script is already loaded to avoid duplicates
      if (!window.Cal || !window.Cal.loaded) {
        initCal();
      }
  
      // Cleanup on component destroy
      return () => {
        // Optionally remove the script or clean up if needed
        const script = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
        if (script) {
          script.remove();
        }
      };
    });
  </script>
  
  <div class="p-4">
    <div id="my-cal-inline" class="w-full h-[600px]"></div>
  </div>