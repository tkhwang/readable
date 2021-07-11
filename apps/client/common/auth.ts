import { AuthErrorCode } from '@readable/errors/auth';
import { globalIsLoggedIn, globalToken } from '@readable/pages/_app';

export function loadAuthToken(key: string) {
  if (!localStorage) {
    throw new Error(AuthErrorCode.LOCAL_STORAGE_NOT_AVAILABLE);
  }

  const token = localStorage.getItem(key);
  console.log('🛂 loadAuthToken = ', token);

  globalToken(token);
  globalIsLoggedIn(Boolean(token));
}

export function setAuthToken(key: string, token: string) {
  if (!localStorage) return;

  localStorage.setItem(key, token);
  console.log('🛂 setAuthToken = ', token);

  globalToken(token);
  globalIsLoggedIn(Boolean(token));
}

export function clearAuthToken(key: string) {
  if (!localStorage) return;

  localStorage.removeItem(key);
  console.log('🛂 clearAuthToken = ', null);

  globalToken('');
  globalIsLoggedIn(false);
}
