import { PublicClientApplication } from '@azure/msal-browser';

import { paths } from 'src/routes/paths';

import packageJson from '../package.json';

// ----------------------------------------------------------------------

export const msalConfig = {
  auth: {
    clientId: '1f73fdec-54e5-4bd5-9a39-ae5b8174e16e',
    authority: 'https://login.microsoftonline.com/353efa45-1c51-4b33-a7e4-b129dc92beb4',
    redirectUri: 'http://localhost:3000',
    // redirectUri: 'https://intraneteste.caixa.cv/inicio',
    // redirectUri: 'https://intranet.caixa.cv/inicio',
  },
  cache: { cacheLocation: 'localStorage', storeAuthStateInCookie: false },
  system: { loggerOptions: {} },
};

export const CONFIG = {
  appName: 'Minimal UI',
  appVersion: packageJson.version,
  serverUrl: import.meta.env.VITE_SERVER_URL ?? '',
  assetsDir: import.meta.env.VITE_ASSETS_DIR ?? '',
  auth: {
    method: 'jwt',
    skip: false,
    redirectPath: paths.dashboard.root,
  },
  /**
   * Mapbox
   */
  mapboxApiKey: import.meta.env.VITE_MAPBOX_API_KEY ?? '',
  msalInstance: new PublicClientApplication(msalConfig),
};
