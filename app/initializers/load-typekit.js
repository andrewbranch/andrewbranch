/* global Typekit */

import injectScript from 'ember-inject-script';
import config from '../config/environment';

export function initialize() {
  var url = "//use.typekit.net/" + config.typekitID + ".js";
  injectScript(url).then(function() {
    Typekit.load();
  });
}

export default {
  name: 'load-typekit',
  initialize: initialize
};
