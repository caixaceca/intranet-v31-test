import { kebabCase } from 'es-toolkit';

import { _id, _postTitles } from 'src/_mock/assets';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const MOCK_TITLE = _postTitles[2];

const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
};

// ----------------------------------------------------------------------

export const paths = {
  root: '',
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  // AUTH
  auth: {
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
  },
  authDemo: {
    split: {
      signIn: `${ROOTS.AUTH_DEMO}/split/sign-in`,
      signUp: `${ROOTS.AUTH_DEMO}/split/sign-up`,
      resetPassword: `${ROOTS.AUTH_DEMO}/split/reset-password`,
      updatePassword: `${ROOTS.AUTH_DEMO}/split/update-password`,
      verify: `${ROOTS.AUTH_DEMO}/split/verify`,
    },
    centered: {
      signIn: `${ROOTS.AUTH_DEMO}/centered/sign-in`,
      signUp: `${ROOTS.AUTH_DEMO}/centered/sign-up`,
      resetPassword: `${ROOTS.AUTH_DEMO}/centered/reset-password`,
      updatePassword: `${ROOTS.AUTH_DEMO}/centered/update-password`,
      verify: `${ROOTS.AUTH_DEMO}/centered/verify`,
    },
  },

  mail: `/mail`,
  chat: `/chat`,
  blank: `/blank`,
  kanban: `/kanban`,
  calendar: `/calendar`,
  fileManager: `/file-manager`,
  permission: `/permission`,
  general: {
    app: `/app`,
    ecommerce: `/ecommerce`,
    analytics: `/analytics`,
    banking: `/banking`,
    booking: `/booking`,
    file: `/file`,
    course: `/course`,
  },
  user: {
    root: `/user`,
    new: `/user/new`,
    list: `/user/list`,
    cards: `/user/cards`,
    profile: `/user/profile`,
    account: `/user/account`,
    edit: (id) => `/user/${id}/edit`,
    demo: {
      edit: `/user/${MOCK_ID}/edit`,
    },
  },
  product: {
    root: `/product`,
    new: `/product/new`,
    details: (id) => `/product/${id}`,
    edit: (id) => `/product/${id}/edit`,
    demo: {
      details: `/product/${MOCK_ID}`,
      edit: `/product/${MOCK_ID}/edit`,
    },
  },
  invoice: {
    root: `/invoice`,
    new: `/invoice/new`,
    details: (id) => `/invoice/${id}`,
    edit: (id) => `/invoice/${id}/edit`,
    demo: {
      details: `/invoice/${MOCK_ID}`,
      edit: `/invoice/${MOCK_ID}/edit`,
    },
  },
  post: {
    root: `/post`,
    new: `/post/new`,
    details: (title) => `/post/${kebabCase(title)}`,
    edit: (title) => `/post/${kebabCase(title)}/edit`,
    demo: {
      details: `/post/${kebabCase(MOCK_TITLE)}`,
      edit: `/post/${kebabCase(MOCK_TITLE)}/edit`,
    },
  },
  order: {
    root: `/order`,
    details: (id) => `/order/${id}`,
    demo: {
      details: `/order/${MOCK_ID}`,
    },
  },
  job: {
    root: `/job`,
    new: `/job/new`,
    details: (id) => `/job/${id}`,
    edit: (id) => `/job/${id}/edit`,
    demo: {
      details: `/job/${MOCK_ID}`,
      edit: `/job/${MOCK_ID}/edit`,
    },
  },
  tour: {
    root: `/tour`,
    new: `/tour/new`,
    details: (id) => `/tour/${id}`,
    edit: (id) => `/tour/${id}/edit`,
    demo: {
      details: `/tour/${MOCK_ID}`,
      edit: `/tour/${MOCK_ID}/edit`,
    },
  },
};
