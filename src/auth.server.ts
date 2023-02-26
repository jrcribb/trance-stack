import { Auth0RemixServer } from '~/lib/auth0-remix/Auth0Remix.server';
import { getSessionStorage } from '~/sessionStorage.server';
const DOMAIN = 'http://localhost:3000';

export const authenticator = new Auth0RemixServer({
  clientDetails: {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET
  },
  callbackURL: 'https://cssemgcw0b.execute-api.us-east-1.amazonaws.com/auth/callback',
  refreshTokenRotationEnabled: true,
  failedLoginRedirect: '/',
  session: {
    store: getSessionStorage()
  }
});

