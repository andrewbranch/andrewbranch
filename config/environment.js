/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'andrewbranch',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    typekitID: 'cyb7wcx',

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' use.typekit.net",
      'font-src': "'self' data: use.typekit.net",
      'connect-src': "'self'",
      'img-src': "'self' p.typekit.net www.gravatar.com about:",
      'style-src': "'self' 'unsafe-inline' use.typekit.net",
      'media-src': "'self'",
      'object-src': "'self'"
    },

    contentSecurityPolicyHeader: 'Content-Security-Policy',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy['script-src'] = ENV.contentSecurityPolicy['script-src'] + ' lab.maltewassermann.com ajax.googleapis.com';
    ENV.contentSecurityPolicy['style-src'] = ENV.contentSecurityPolicy['style-src'] + ' lab.maltewassermann.com'
    ENV.contentSecurityPolicy['font-src'] = ENV.contentSecurityPolicy['font-src'] + ' lab.maltewassermann.com'
    ENV.contentSecurityPolicy['frame-src'] = "'self'";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
