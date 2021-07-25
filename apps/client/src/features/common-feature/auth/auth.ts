import { JWT_TOKEN } from '@readable/src/config/constants';
import { AuthErrorCode } from '@readable/src/errors/auth';

export function logout() {
  localStorage.removeItem(JWT_TOKEN);
  console.log('🛂 clearAuthToken = ', null);
}

export function loadAuthToken(): string {
  if (!localStorage) {
    throw new Error(AuthErrorCode.LOCAL_STORAGE_NOT_AVAILABLE);
  }

  const token = localStorage.getItem(JWT_TOKEN);
  console.log('🛂 loadAuthToken = ', token);

  return token;
}

export function setAuthToken(token: string): string {
  if (!localStorage) return;

  localStorage.setItem(JWT_TOKEN, token);
  console.log('🛂 setAuthToken = ', token);

  return token;
}

export function clearAuthToken(): void {
  if (!localStorage) return;

  localStorage.removeItem(JWT_TOKEN);
  console.log('🛂 clearAuthToken = ', null);
}
