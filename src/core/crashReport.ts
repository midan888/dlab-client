import * as Sentry from '@sentry/browser';

export const init = () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  Sentry.init({ dsn: process.env.SENTRY_URL });
};
