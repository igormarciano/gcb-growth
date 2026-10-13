(function () {
  var GA_ID = 'G-8B1REYK08Z';
  var host = location.hostname;
  var isPreview = /^gcb-growth-(git-.+|[a-z0-9]{8,})-gcb9\.vercel\.app$/.test(host);
  if (location.protocol === 'file:' || host === 'localhost' || host === '127.0.0.1' || isPreview) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
})();
