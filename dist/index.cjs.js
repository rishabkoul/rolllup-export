'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var img = "data:image/png;base64,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";

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".MfReport_container__nO-Ay {\n  text-align: center;\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n.MfReport_container__nO-Ay .MfReport_title__fnOYV {\n  color: #3498db;\n  font-size: 24px;\n}";
var styles = {"container":"MfReport_container__nO-Ay","title":"MfReport_title__fnOYV"};
styleInject(css_248z);

var MfReport = function MfReport() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React__default["default"].createElement("h1", {
    className: styles.title
  }, "Hello from MF Report"), /*#__PURE__*/React__default["default"].createElement("img", {
    src: img,
    alt: "Sample"
  }));
};

exports.MfReport = MfReport;
//# sourceMappingURL=index.cjs.js.map
