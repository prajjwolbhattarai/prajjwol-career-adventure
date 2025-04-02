// To enable GA4 tracking, replace 'G-XXXXXXXXXX' with your Measurement ID

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export function initGA() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}
