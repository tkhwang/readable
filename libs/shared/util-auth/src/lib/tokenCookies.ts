import cookies from 'js-cookie';
import { JWT_TOKEN } from './constants';

export const getTokenCookie = () => cookies.get(JWT_TOKEN);

export const setTokenCookie = (token: string) => {
  cookies.set(JWT_TOKEN, token, { expires: 1 / 24 });
};

export const removeTokenCookie = () => cookies.remove(JWT_TOKEN);
