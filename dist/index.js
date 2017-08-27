'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleMapReactControl = function (_React$Component) {
	_inherits(GoogleMapReactControl, _React$Component);

	function GoogleMapReactControl(props) {
		_classCallCheck(this, GoogleMapReactControl);

		var _this = _possibleConstructorReturn(this, (GoogleMapReactControl.__proto__ || Object.getPrototypeOf(GoogleMapReactControl)).call(this, props));

		_this.state = {};

		// this._reactInternalInstance = {};

		return _this;
	} // eslint-disable-line react/prefer-stateless-function

	_createClass(GoogleMapReactControl, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    map = _props.map,
			    maps = _props.maps,
			    position = _props.position;


			var renderedComponent = this && this._reactInternalInstance && this._reactInternalInstance._renderedComponent || undefined;

			var pos = position && maps.ControlPosition && maps.ControlPosition[position] && map.controls && map.controls[maps.ControlPosition[position]];

			if (pos && renderedComponent) {

				pos.push(renderedComponent._hostNode);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var other = _objectWithoutProperties(this.props, []);

			return _react2.default.createElement('div', other);
		}
	}]);

	return GoogleMapReactControl;
}(_react2.default.Component);

GoogleMapReactControl.defaultProps = {};
exports.default = GoogleMapReactControl;