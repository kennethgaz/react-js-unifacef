import { configureScope, init } from '@sentry/browser'
import { configs } from '../configs';

(() => {
 
  // Desativa o plugin localhost
  if(window.location.hostname === 'localhost' || 
    window.location.hostname === '127.0.0.1') {
    return;
  }

  const { sentry } = configs;
  
  init({dsn: sentry });
  
  configureScope(scope => {
  });
  
})();
