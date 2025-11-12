self.addEventListener('install', () => {
  console.log('Service Worker instalado.');
});

self.addEventListener('activate', () => {
  console.log('Service Worker ativado.');
});

self.addEventListener('fetch', (event) => {
  console.log('Requisição interceptada:', event.request.url);
});
