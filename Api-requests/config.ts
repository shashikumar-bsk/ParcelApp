// src/config.ts

const isProduction = process.env.NODE_ENV === 'production';

const LOCAL_API_URL = 'http://192.168.175.82:3000';
const PROD_API_URL = 'https://yourdomain.com';

const API_DOMAIN_URL = isProduction ? PROD_API_URL : LOCAL_API_URL;

const config = {
  API_DOMAIN_URL,
  SOCKET_IO_URL: API_DOMAIN_URL,
  GOOGLE_API_KEY: isProduction 
    ? process.env.GOOGLE_API_KEY || '' 
    : 'AIzaSyA9qviqi7tO8nndT6WAP_O5qr3NrfpILl0',
  ENV: isProduction ? 'production' : 'development',
  userCookie: 'userToken',
};

export default config;

// ✅ This is needed for your API call file
export const origin = API_DOMAIN_URL;
