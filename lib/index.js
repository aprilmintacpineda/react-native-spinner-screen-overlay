"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @format */
var dimensions = _reactNative.Dimensions.get('window');

var styles = _reactNative.StyleSheet.create({
  modal: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    width: dimensions.width,
    height: dimensions.height
  },
  modalSpinnerContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20
  }
});

function RNScreenOverlaySpinner(props) {
  var _this = this;

  this.props = props;

  this.hideKeyboard = function () {
    if (_this.props.visible) _reactNative.Keyboard.dismiss();
  };

  this.componentDidMount = this.hideKeyboard;
  this.componentDidUpdate = this.hideKeyboard;

  this.render = function () {
    if (!_this.props.visible) return null;
    return _react["default"].createElement(_reactNative.View, {
      style: [styles.modal, {
        backgroundColor: _this.props.modalBackground || 'rgba(0, 0, 0, 0.3)'
      }]
    }, _react["default"].createElement(_reactNative.View, {
      style: _this.props.spinnerContainerStyles ? [styles.modalSpinnerContainer, _this.props.spinnerContainerStyles] : styles.modalSpinnerContainer
    }, _react["default"].createElement(_reactNative.ActivityIndicator, {
      size: "large",
      color: _this.props.spinnerColor || '#000'
    })));
  };

  return this;
}

RNScreenOverlaySpinner.prototype = _react["default"].PureComponent.prototype;
RNScreenOverlaySpinner.prototype.constructor = RNScreenOverlaySpinner;
var _default = RNScreenOverlaySpinner;
exports["default"] = _default;