
import { createRoot } from 'react-dom/client';
import { Suspense, lazy } from 'react';
import './index.css';

// Lazy load the main app component
const App = lazy(() => import('./App.tsx'));

// Create a loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="w-16 h-16 border-4 border-tranzkit-blue rounded-full border-t-transparent animate-spin"></div>
  </div>
);

// Mount the app with Suspense for code-splitting benefits
createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);

// Register service worker for PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(error => {
      console.error('Service Worker registration failed:', error);
    });
  });
}
