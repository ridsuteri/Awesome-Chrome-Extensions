//apps/drive/frontend/browser/chrome/extensions/save_to_drive/extension/js/closuresetup.js
/**
 * @fileoverview Closure variables setup. This must be included
 * before base.js is included.
 */


/**
 * Overrides the Closure base path defined in Closure's base.js
 * @type {string}
 */
window['CLOSURE_BASE_PATH'] = 'js/';


/**
 * Overrides value in base.js to disable writing out Closure's deps file.
 * @type {boolean}
 */
window['CLOSURE_NO_DEPS'] = true;

