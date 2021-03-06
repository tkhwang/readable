import { JWT_TOKEN } from './constants';

enum AuthErrorCode {
  LOCAL_STORAGE_NOT_AVAILABLE = 'LOCAL_STORAGE_NOT_AVAILABLE',
}

export function logout() {
  localStorage.removeItem(JWT_TOKEN);
  console.log('🛂 clearAuthToken = ', null);
}

export function loadAuthToken(): string | null {
  if (!localStorage) {
    throw new Error(AuthErrorCode.LOCAL_STORAGE_NOT_AVAILABLE);
  }

  const token = localStorage.getItem(JWT_TOKEN);
  console.log('🛂 loadAuthToken = ', token);

  return token;
}

export function setAuthToken(token: string): string | null {
  if (!localStorage) return null;

  localStorage.setItem(JWT_TOKEN, token);
  console.log('🛂 setAuthToken = ', token);

  return token;
}

export function clearAuthToken(): void {
  if (!localStorage) return;

  localStorage.removeItem(JWT_TOKEN);
  console.log('🛂 clearAuthToken = ', null);
}
