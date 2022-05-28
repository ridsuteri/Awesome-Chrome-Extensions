//apps/drive/frontend/browser/chrome/extensions/save_to_drive/extension/js/elementposition.js
// This script is injected to the current tab's page when the extension icon is
// clicked. It receives a message from the capture tab, find a DOM element at
// the position specified by the message, and send the information back to the
// capture page.

if (!window['loaded']) {
  window['loaded'] = true;

  /**
   * Elements smaller than this size are ignored by getElementAt().
   * @const @type {number}
   */
  const MIN_SIZE = 24;

  /**
   * The maximum number of outer elements to check in order to find an element
   * with width and height >= MIN_SIZE.
   * @const @type {number}
   */
  const MAX_ELEMENT_DEPTH = 10;

  /**
   * @param {!HTMLElement} elem The element to check.
   * @return {{CaptureSelectPage.Rect}} The size and position of the given
   *     element.
   */
  function getPosition(elem) {
    const r = elem.getBoundingClientRect();
    // The position of the element can be negative if the element is beyond the
    // top or the left window border. If that's the case, we make them 0 and
    // adjust the width and the height.
    const offx = -Math.min(0, r.left);
    const offy = -Math.min(0, r.top);
    return {
      x: r.left + offx,
      y: r.top + offy,
      width: r.width - offx,
      height: r.height - offy,
    };
  }

  /**
   * Finds the topmost element at the X and Y coordinates that is
   * greater that MIN_SIZE in size, or is nested more than
   * MAX_ELEMENT_DEPTH deep, whichever comes first.
   *
   * @param {number} x The horizontal coordinate of the point.
   * @param {number} y The vertical coordinate of the point.
   * @param {number} depth
   * @return {?Element} The element.
   */
  function getElementAt(x, y, depth) {
    const elem = document.elementFromPoint(x, y);
    if (!elem || depth > MAX_ELEMENT_DEPTH) {
      return elem;
    }
    const r = elem.getBoundingClientRect();
    if (r.width >= MIN_SIZE && r.height >= MIN_SIZE) {
      return elem;
    }
    const orig = elem.style.pointerEvents;
    elem.style.pointerEvents = 'none';
    const retval = getElementAt(x, y, depth + 1);
    elem.style.pointerEvents = orig;
    return retval;
  }

  /**
   * @param {number} x The horizontal coordinate of the point.
   * @param {number} y The vertical coordinate of the point.
   * @return {?{CaptureSelectPage.Rect}} The size and position of
   *     the given element, or null if the element could not be found.
   */
  function getElementPositionAt(x, y) {
    const elem = getElementAt(x, y, 0);
    return elem ? getPosition(/** @type {!HTMLElement} */ (elem)) : null;
  }


  /**
   * Handles the callback when CaptureSelectPage sends us messages.
   *
   * @param {*} request The request sent by the calling script.
   * @param {!MessageSender} sender The request sender.
   * @param {function(?Object)} responseFn the function to call with the
   *     the response.
   */
  function onMessageHandler(request, sender, responseFn) {
    request = /** @type {{msg: string, x: number, y:number}} */ (request);
    if (request.msg == 'getPosition') {
      const pos = getElementPositionAt(request.x, request.y);
      if (pos) {
        responseFn(pos);
      }
    }
  }

  chrome.extension.onMessage.addListener(onMessageHandler);
}

