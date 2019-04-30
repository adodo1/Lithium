(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["IconSidebar"] = factory();
	else
		root["IconSidebar"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconSidebarWidget = exports.IconSidebarControl = undefined;

var _IconSidebarControl = __webpack_require__(/*! ./src/IconSidebarControl */ "./src/IconSidebarControl.js");

var _IconSidebarControl2 = _interopRequireDefault(_IconSidebarControl);

var _IconSidebarWidget = __webpack_require__(/*! ./src/IconSidebarWidget */ "./src/IconSidebarWidget.js");

var _IconSidebarWidget2 = _interopRequireDefault(_IconSidebarWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.IconSidebarControl = _IconSidebarControl2.default;
exports.IconSidebarWidget = _IconSidebarWidget2.default;

/***/ }),

/***/ "./node_modules/scanex-event-target/dist/bundle.js":
/*!*********************************************************!*\
  !*** ./node_modules/scanex-event-target/dist/bundle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventTarget = function () {
    function EventTarget() {
        _classCallCheck(this, EventTarget);

        this.listeners = {};
    }

    _createClass(EventTarget, [{
        key: 'addEventListener',
        value: function addEventListener(type, callback) {
            if (!(type in this.listeners)) {
                this.listeners[type] = [];
            }
            this.listeners[type].push(callback);
        }
    }, {
        key: 'removeEventListener',
        value: function removeEventListener(type, callback) {
            if (!(type in this.listeners)) {
                return;
            }
            var stack = this.listeners[type];
            for (var i = 0, l = stack.length; i < l; i++) {
                if (stack[i] === callback) {
                    stack.splice(i, 1);
                    return this.removeEventListener(type, callback);
                }
            }
        }
    }, {
        key: 'dispatchEvent',
        value: function dispatchEvent(event) {
            if (!(event.type in this.listeners)) {
                return;
            }
            var stack = this.listeners[event.type];
            Object.defineProperty(event, 'target', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: this
            });
            for (var i = 0, l = stack.length; i < l; i++) {
                stack[i].call(this, event);
            }
        }
    }]);

    return EventTarget;
}();

exports.default = EventTarget;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FdmVudFRhcmdldC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRXZlbnRUYXJnZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRXZlbnRUYXJnZXQvLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJFdmVudFRhcmdldCIsImxpc3RlbmVycyIsInR5cGUiLCJjYWxsYmFjayIsInB1c2giLCJzdGFjayIsImkiLCJsIiwibGVuZ3RoIiwic3BsaWNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGTUEsVztBQUNGLDJCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNIOzs7O3lDQUNnQkMsSSxFQUFNQyxRLEVBQVU7QUFDN0IsZ0JBQUcsRUFBRUQsUUFBUSxLQUFLRCxTQUFmLENBQUgsRUFBOEI7QUFDMUIscUJBQUtBLFNBQUwsQ0FBZUMsSUFBZixJQUF1QixFQUF2QjtBQUNIO0FBQ0QsaUJBQUtELFNBQUwsQ0FBZUMsSUFBZixFQUFxQkUsSUFBckIsQ0FBMEJELFFBQTFCO0FBQ0g7Ozs0Q0FDb0JELEksRUFBTUMsUSxFQUFVO0FBQ2pDLGdCQUFHLEVBQUVELFFBQVEsS0FBS0QsU0FBZixDQUFILEVBQThCO0FBQzFCO0FBQ0g7QUFDRCxnQkFBSUksUUFBUSxLQUFLSixTQUFMLENBQWVDLElBQWYsQ0FBWjtBQUNBLGlCQUFJLElBQUlJLElBQUksQ0FBUixFQUFXQyxJQUFJRixNQUFNRyxNQUF6QixFQUFpQ0YsSUFBSUMsQ0FBckMsRUFBd0NELEdBQXhDLEVBQTZDO0FBQ3pDLG9CQUFHRCxNQUFNQyxDQUFOLE1BQWFILFFBQWhCLEVBQXlCO0FBQ3JCRSwwQkFBTUksTUFBTixDQUFhSCxDQUFiLEVBQWdCLENBQWhCO0FBQ0EsMkJBQU8sS0FBS0ksbUJBQUwsQ0FBeUJSLElBQXpCLEVBQStCQyxRQUEvQixDQUFQO0FBQ0g7QUFDSjtBQUNKOzs7c0NBQ2FRLEssRUFBTztBQUNqQixnQkFBRyxFQUFFQSxNQUFNVCxJQUFOLElBQWMsS0FBS0QsU0FBckIsQ0FBSCxFQUFvQztBQUNoQztBQUNIO0FBQ0QsZ0JBQUlJLFFBQVEsS0FBS0osU0FBTCxDQUFlVSxNQUFNVCxJQUFyQixDQUFaO0FBQ0hVLG1CQUFPQyxjQUFQLENBQXNCRixLQUF0QixFQUE2QixRQUE3QixFQUF1QztBQUNoQ0csNEJBQVksS0FEb0I7QUFFaENDLDhCQUFjLEtBRmtCO0FBR2hDQywwQkFBVSxLQUhzQjtBQUloQ0MsdUJBQU87QUFKeUIsYUFBdkM7QUFNRyxpQkFBSSxJQUFJWCxJQUFJLENBQVIsRUFBV0MsSUFBSUYsTUFBTUcsTUFBekIsRUFBaUNGLElBQUlDLENBQXJDLEVBQXdDRCxHQUF4QyxFQUE2QztBQUN6Q0Qsc0JBQU1DLENBQU4sRUFBU1ksSUFBVCxDQUFjLElBQWQsRUFBb0JQLEtBQXBCO0FBQ0g7QUFDSjs7Ozs7O2tCQUdVWCxXIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkV2ZW50VGFyZ2V0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkV2ZW50VGFyZ2V0XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgRXZlbnRUYXJnZXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcclxuICAgIH1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZighKHR5cGUgaW4gdGhpcy5saXN0ZW5lcnMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lciAodHlwZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZighKHR5cGUgaW4gdGhpcy5saXN0ZW5lcnMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0YWNrID0gdGhpcy5saXN0ZW5lcnNbdHlwZV07XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHN0YWNrLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBpZihzdGFja1tpXSA9PT0gY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgc3RhY2suc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgaWYoIShldmVudC50eXBlIGluIHRoaXMubGlzdGVuZXJzKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdGFjayA9IHRoaXMubGlzdGVuZXJzW2V2ZW50LnR5cGVdO1xyXG5cdCAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHN0YWNrLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBzdGFja1tpXS5jYWxsKHRoaXMsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50VGFyZ2V0OyJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./node_modules/scanex-object-extensions/dist/bundle.js":
/*!**************************************************************!*\
  !*** ./node_modules/scanex-object-extensions/dist/bundle.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var copy = function copy(source) {
    switch (typeof source === 'undefined' ? 'undefined' : _typeof(source)) {
        case 'number':
        case 'string':
        case 'function':
        default:
            return source;
        case 'object':
            if (source === null) {
                return null;
            } else if (Array.isArray(source)) {
                return source.map(function (item) {
                    return copy(item);
                });
            } else if (source instanceof Date) {
                return source;
            } else {
                return Object.keys(source).reduce(function (a, k) {
                    a[k] = copy(source[k]);
                    return a;
                }, {});
            }
    }
};

var extend = function extend(target, source) {
    if (target === source) {
        return target;
    } else {
        return Object.keys(source).reduce(function (a, k) {
            var value = source[k];
            if (_typeof(a[k]) === 'object' && k in a) {
                a[k] = extend(a[k], value);
            } else {
                a[k] = copy(value);
            }
            return a;
        }, copy(target));
    }
};

exports.copy = copy;
exports.extend = extend;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb3B5Iiwic291cmNlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsIkRhdGUiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYSIsImsiLCJleHRlbmQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sU0FBVTtBQUNuQixtQkFBY0MsTUFBZCx5Q0FBY0EsTUFBZDtBQUNJLGFBQUssUUFBTDtBQUNBLGFBQUssUUFBTDtBQUNBLGFBQUssVUFBTDtBQUNBO0FBQ0ksbUJBQU9BLE1BQVA7QUFDSixhQUFLLFFBQUw7QUFDSSxnQkFBSUEsV0FBVyxJQUFmLEVBQXFCO0FBQ2pCLHVCQUFPLElBQVA7QUFDSCxhQUZELE1BR0ssSUFBSUMsTUFBTUMsT0FBTixDQUFjRixNQUFkLENBQUosRUFBMkI7QUFDNUIsdUJBQU9BLE9BQU9HLEdBQVAsQ0FBWTtBQUFBLDJCQUFRSixLQUFNSyxJQUFOLENBQVI7QUFBQSxpQkFBWixDQUFQO0FBQ0gsYUFGSSxNQUdBLElBQUlKLGtCQUFrQkssSUFBdEIsRUFBNEI7QUFDN0IsdUJBQU9MLE1BQVA7QUFDSCxhQUZJLE1BR0E7QUFDRCx1QkFBT00sT0FBT0MsSUFBUCxDQUFZUCxNQUFaLEVBQW9CUSxNQUFwQixDQUEyQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN4Q0Qsc0JBQUVDLENBQUYsSUFBT1gsS0FBS0MsT0FBT1UsQ0FBUCxDQUFMLENBQVA7QUFDQSwyQkFBT0QsQ0FBUDtBQUNILGlCQUhNLEVBR0osRUFISSxDQUFQO0FBSUg7QUFyQlQ7QUF1QkgsQ0F4QkQ7O0FBMEJBLElBQU1FLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxNQUFELEVBQVNaLE1BQVQsRUFBb0I7QUFDL0IsUUFBSVksV0FBV1osTUFBZixFQUF1QjtBQUN0QixlQUFPWSxNQUFQO0FBQ0EsS0FGRCxNQUdLO0FBQ0QsZUFBT04sT0FBT0MsSUFBUCxDQUFZUCxNQUFaLEVBQW9CUSxNQUFwQixDQUEyQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN4QyxnQkFBSUcsUUFBUWIsT0FBT1UsQ0FBUCxDQUFaO0FBQ0EsZ0JBQUcsUUFBT0QsRUFBRUMsQ0FBRixDQUFQLE1BQWdCLFFBQWhCLElBQTZCQSxLQUFLRCxDQUFyQyxFQUF3QztBQUNwQ0Esa0JBQUVDLENBQUYsSUFBT0MsT0FBUUYsRUFBRUMsQ0FBRixDQUFSLEVBQWNHLEtBQWQsQ0FBUDtBQUNILGFBRkQsTUFHSztBQUNGSixrQkFBRUMsQ0FBRixJQUFPWCxLQUFLYyxLQUFMLENBQVA7QUFDRjtBQUNELG1CQUFPSixDQUFQO0FBQ0gsU0FUTSxFQVNKVixLQUFNYSxNQUFOLENBVEksQ0FBUDtBQVVIO0FBQ0osQ0FoQkQ7O1FBbUJRYixJLEdBQUFBLEk7UUFBTVksTSxHQUFBQSxNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJjb25zdCBjb3B5ID0gc291cmNlID0+IHtcclxuICAgIHN3aXRjaCh0eXBlb2Ygc291cmNlKSB7XHJcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5tYXAgKGl0ZW0gPT4gY29weSAoaXRlbSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKChhLCBrKSA9PiB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBhW2tdID0gY29weShzb3VyY2Vba10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBleHRlbmQgPSAodGFyZ2V0LCBzb3VyY2UpID0+IHtcclxuICAgIGlmICh0YXJnZXQgPT09IHNvdXJjZSkge1xyXG5cdCAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKChhLCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHNvdXJjZVtrXTtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGFba10gPT09ICdvYmplY3QnICYmIChrIGluIGEpKXtcclxuICAgICAgICAgICAgICAgIGFba10gPSBleHRlbmQgKGFba10sIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgYVtrXSA9IGNvcHkodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH0sIGNvcHkgKHRhcmdldCkpO1xyXG4gICAgfSAgICBcclxufTtcclxuXHJcblxyXG5leHBvcnQge2NvcHksIGV4dGVuZH07Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/IconSidebarControl.css":
/*!************************************!*\
  !*** ./src/IconSidebarControl.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/IconSidebarControl.js":
/*!***********************************!*\
  !*** ./src/IconSidebarControl.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(/*! ./IconSidebarControl.css */ "./src/IconSidebarControl.css");

var _IconSidebarWidget = __webpack_require__(/*! ./IconSidebarWidget.js */ "./src/IconSidebarWidget.js");

var _IconSidebarWidget2 = _interopRequireDefault(_IconSidebarWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ev.opening
// ev.opened { <String>id }
// ev.closing
// ev.closed
var IconSidebarControl = L.Control.extend({
    includes: L.Evented ? L.Evented.prototype : L.Mixin.Events,

    // options.position (left|right)
    initialize: function initialize(options) {
        this._panes = {};
        L.setOptions(this, options);
    },

    onAdd: function onAdd(map) {
        var _this = this;

        this._container = L.DomUtil.create('div');
        L.DomEvent.disableClickPropagation(this._container);
        L.DomEvent.disableScrollPropagation(this._container);

        this._widget = new _IconSidebarWidget2.default(this._container, this.options);
        this._widget.addEventListener('opening', function (e) {
            _this.fire('opening');
        });
        this._widget.addEventListener('opened', function (e) {
            _this.fire('opened', e.detail);
        });
        this._widget.addEventListener('closing', function (e) {
            _this.fire('closing');
        });
        this._widget.addEventListener('closed', function (e) {
            _this.fire('closed', e.detail);
        });
        return this._container;
    },

    onRemove: function onRemove(map) {},

    setPane: function setPane(id) {
        var paneOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this._widget.setPane(id, paneOptions);
    },

    open: function open(paneId) {
        return this._widget.open(paneId);
    },

    close: function close() {
        this._widget.close();
    },

    getActiveTabId: function getActiveTabId() {
        return this._widget.getActiveTabId();
    },

    isOpened: function isOpened() {
        return this._widget.isOpened();
    },

    enable: function enable(id, enabled) {
        this._widget.enable(id, enabled);
    },

    enabled: function enabled(id) {
        return this._widget.enabled(id);
    }
});

exports.default = IconSidebarControl;

/***/ }),

/***/ "./src/IconSidebarWidget.css":
/*!***********************************!*\
  !*** ./src/IconSidebarWidget.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/IconSidebarWidget.js":
/*!**********************************!*\
  !*** ./src/IconSidebarWidget.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scanexEventTarget = __webpack_require__(/*! scanex-event-target */ "./node_modules/scanex-event-target/dist/bundle.js");

var _scanexEventTarget2 = _interopRequireDefault(_scanexEventTarget);

var _scanexObjectExtensions = __webpack_require__(/*! scanex-object-extensions */ "./node_modules/scanex-object-extensions/dist/bundle.js");

__webpack_require__(/*! ./IconSidebarWidget.css */ "./src/IconSidebarWidget.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconSidebarWidget = function (_EventTarget) {
    _inherits(IconSidebarWidget, _EventTarget);

    function IconSidebarWidget(container, options) {
        _classCallCheck(this, IconSidebarWidget);

        var _this = _possibleConstructorReturn(this, (IconSidebarWidget.__proto__ || Object.getPrototypeOf(IconSidebarWidget)).call(this));

        _this._options = options;
        _this._options.position = _this._options.position || 'left';
        _this._collapsedWidth = _this._options.collapsedWidth || 40;
        _this._extendedWidth = _this._options.extendedWidth || 400;

        _this._container = container;
        _this._container.classList.add('iconSidebarControl');
        _this._container.innerHTML = '<ul class="iconSidebarControl-tabs"></ul><div class="iconSidebarControl-content"></div>';
        _this._container.classList.add(_this._options.position.indexOf('left') !== -1 ? 'iconSidebarControl-left' : 'iconSidebarControl-right');
        _this._tabsContainer = _this._container.querySelector('.iconSidebarControl-tabs');
        _this._panesContainer = _this._container.querySelector('.iconSidebarControl-content');

        _this._onTabClick = _this._onTabClick.bind(_this);

        _this._panes = {};
        return _this;
    }

    _createClass(IconSidebarWidget, [{
        key: 'setPane',
        value: function setPane(id, paneOptions) {
            paneOptions = paneOptions || {};
            var _paneOptions = paneOptions,
                createTab = _paneOptions.createTab,
                position = _paneOptions.position,
                enabled = _paneOptions.enabled;

            var defaultPaneOptions = { position: 0, enabled: true };
            var activeTabId = this._activeTabId;

            this._panes[id] = (0, _scanexObjectExtensions.extend)((0, _scanexObjectExtensions.extend)((0, _scanexObjectExtensions.extend)({}, defaultPaneOptions), this._panes[id] || {}), paneOptions);
            if (!this._panes[id].enabled && this._activeTabId === id) {
                this.close();
            }

            this._renderTabs({ activeTabId: activeTabId });
            return this._ensurePane(id);
        }
    }, {
        key: 'enable',
        value: function enable(id, enabled) {
            var pane = this._panes[id];
            if (pane) {
                pane.enabled = enabled;
            }
        }
    }, {
        key: 'enabled',
        value: function enabled(id) {
            var pane = this._panes[id];
            if (pane) {
                return pane.enabled;
            } else {
                return false;
            }
        }
    }, {
        key: 'open',
        value: function open(paneId) {
            var _this2 = this;

            if (this._isAnimating) {
                return;
            }

            var pane = this._panes[paneId];
            if (!pane || !pane.enabled) {
                return;
            }

            this._activeTabId = paneId;

            this._setTabActive(paneId, true);
            this._setActiveClass(paneId);

            if (this._isOpened) {

                var _event = document.createEvent('Event');
                _event.initEvent('opened', false, false);
                _event.detail = { id: this._activeTabId };
                this.dispatchEvent(_event);

                return;
            }

            this._isAnimating = true;
            this._container.classList.add('iconSidebarControl_opened');
            this._container.classList.add('iconSidebarControl_expanded');

            this._isOpened = true;

            var event = document.createEvent('Event');
            event.initEvent('opening', false, false);
            this.dispatchEvent(event);

            setTimeout(function () {

                var ev = document.createEvent('Event');
                ev.initEvent('opened', false, false);
                ev.detail = { id: _this2._activeTabId };
                _this2.dispatchEvent(ev);
                _this2._isAnimating = false;
            }, 250);
        }
    }, {
        key: '_setTabActive',
        value: function _setTabActive(paneId, flag) {
            var tabs = this._tabsContainer.querySelectorAll('.iconSidebarControl-tab');
            for (var i = 0; i < tabs.length; ++i) {
                var id = tabs[i].getAttribute('data-tab-id');
                var tab = tabs[i].querySelector('.tab-icon');
                if (id === paneId) {
                    if (flag) {
                        tab.classList.add('tab-icon-active');
                    } else {
                        tab.classList.remove('tab-icon-active');
                    }
                } else {
                    tab.classList.remove('tab-icon-active');
                }
            }
        }
    }, {
        key: 'close',
        value: function close() {
            var _this3 = this;

            if (this._isAnimating) {
                return;
            }
            this._setTabActive(this._activeTabId, false);
            this._container.classList.remove('iconSidebarControl_opened');
            this._isAnimating = true;
            this._isOpened = false;

            var event = document.createEvent('Event');
            event.initEvent('closing', false, false);
            this.dispatchEvent(event);

            setTimeout(function () {
                _this3._container.classList.remove('iconSidebarControl_expanded');

                var ev = document.createEvent('Event');
                ev.detail = { id: _this3._activeTabId };
                ev.initEvent('closed', false, false);
                _this3.dispatchEvent(ev);

                _this3._isAnimating = false;
                _this3._setActiveClass('');
                _this3._activeTabId = null;
            }, 250);
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            if (this._isOpened) {
                return this._extendedWidth;
            } else {
                return this._collapsedWidth;
            }
        }
    }, {
        key: 'getActiveTabId',
        value: function getActiveTabId() {
            return this._activeTabId;
        }
    }, {
        key: 'isOpened',
        value: function isOpened() {
            return this._isOpened;
        }
    }, {
        key: '_ensurePane',
        value: function _ensurePane(id) {
            for (var i = 0; i < this._panesContainer.childNodes.length; ++i) {
                var node = this._panesContainer.childNodes[i];
                if (node.getAttribute('data-pane-id') === id) {
                    return node;
                }
            }
            var paneEl = document.createElement('div');
            paneEl.classList.add('iconSidebarControl-pane');
            paneEl.setAttribute('data-pane-id', id);
            this._panesContainer.appendChild(paneEl);
            return paneEl;
        }
    }, {
        key: '_setActiveClass',
        value: function _setActiveClass(activeId) {
            for (var i = 0; i < this._panesContainer.children.length; i++) {
                var id = this._panesContainer.children[i].getAttribute('data-pane-id');
                var pane = this._panesContainer.querySelector('[data-pane-id=' + id + ']');
                if (id === activeId) {
                    pane.classList.add('iconSidebarControl-pane-active');
                } else {
                    pane.classList.remove('iconSidebarControl-pane-active');
                }
            }
        }
    }, {
        key: '_onTabClick',
        value: function _onTabClick(e) {
            var tabId = e.currentTarget.getAttribute('data-tab-id');
            var pane = this._panes[tabId];
            if (!pane || !pane.enabled) {
                return;
            }
            if (!this._isOpened || this._activeTabId !== tabId) {
                this._renderTabs({ activeTabId: tabId });
                this.open(tabId);
            } else {
                this._renderTabs({});
                this.close();
            }
        }
    }, {
        key: '_renderTabs',
        value: function _renderTabs(options) {
            var _this4 = this;

            var getFlag = function getFlag(tabId, activeTabId, hoveredTabId, enabled) {
                if (!enabled) {
                    return 'disabled';
                } else if (hoveredTabId && tabId === hoveredTabId) {
                    return 'hover';
                } else if (activeTabId && tabId === activeTabId) {
                    return 'active';
                } else {
                    return 'default';
                }
            };

            var activeTabId = options.activeTabId;
            var hoveredTabId = options.hoveredTabId;
            this._tabsContainer.innerHTML = '';
            Object.keys(this._panes).map(function (id) {
                return (0, _scanexObjectExtensions.extend)({ id: id }, _this4._panes[id]);
            }).sort(function (a, b) {
                return a.position - b.position;
            }).forEach(function (options) {
                var id = options.id,
                    createTab = options.createTab,
                    enabled = options.enabled;

                if (!createTab) {
                    return;
                }
                var tabContainerEl = document.createElement('li');
                tabContainerEl.classList.add('iconSidebarControl-tab');
                tabContainerEl.setAttribute('data-tab-id', id);
                var tabEl = createTab(getFlag(id, activeTabId, hoveredTabId, enabled));
                tabContainerEl.addEventListener('click', _this4._onTabClick);
                tabContainerEl.appendChild(tabEl);
                _this4._tabsContainer.appendChild(tabContainerEl);
            });
        }
    }]);

    return IconSidebarWidget;
}(_scanexEventTarget2.default);

exports.default = IconSidebarWidget;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JY29uU2lkZWJhci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSWNvblNpZGViYXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSWNvblNpZGViYXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9JY29uU2lkZWJhci8uL25vZGVfbW9kdWxlcy9zY2FuZXgtZXZlbnQtdGFyZ2V0L2Rpc3QvYnVuZGxlLmpzIiwid2VicGFjazovL0ljb25TaWRlYmFyLy4vbm9kZV9tb2R1bGVzL3NjYW5leC1vYmplY3QtZXh0ZW5zaW9ucy9kaXN0L2J1bmRsZS5qcyIsIndlYnBhY2s6Ly9JY29uU2lkZWJhci8uL3NyYy9JY29uU2lkZWJhckNvbnRyb2wuY3NzPzRiZWMiLCJ3ZWJwYWNrOi8vSWNvblNpZGViYXIvLi9zcmMvSWNvblNpZGViYXJDb250cm9sLmpzIiwid2VicGFjazovL0ljb25TaWRlYmFyLy4vc3JjL0ljb25TaWRlYmFyV2lkZ2V0LmNzcz80OGUxIiwid2VicGFjazovL0ljb25TaWRlYmFyLy4vc3JjL0ljb25TaWRlYmFyV2lkZ2V0LmpzIl0sIm5hbWVzIjpbIkljb25TaWRlYmFyQ29udHJvbCIsIkljb25TaWRlYmFyV2lkZ2V0IiwiTCIsIkNvbnRyb2wiLCJleHRlbmQiLCJpbmNsdWRlcyIsIkV2ZW50ZWQiLCJwcm90b3R5cGUiLCJNaXhpbiIsIkV2ZW50cyIsImluaXRpYWxpemUiLCJvcHRpb25zIiwiX3BhbmVzIiwic2V0T3B0aW9ucyIsIm9uQWRkIiwibWFwIiwiX2NvbnRhaW5lciIsIkRvbVV0aWwiLCJjcmVhdGUiLCJEb21FdmVudCIsImRpc2FibGVDbGlja1Byb3BhZ2F0aW9uIiwiZGlzYWJsZVNjcm9sbFByb3BhZ2F0aW9uIiwiX3dpZGdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaXJlIiwiZSIsImRldGFpbCIsIm9uUmVtb3ZlIiwic2V0UGFuZSIsImlkIiwicGFuZU9wdGlvbnMiLCJvcGVuIiwicGFuZUlkIiwiY2xvc2UiLCJnZXRBY3RpdmVUYWJJZCIsImlzT3BlbmVkIiwiZW5hYmxlIiwiZW5hYmxlZCIsImNvbnRhaW5lciIsIl9vcHRpb25zIiwicG9zaXRpb24iLCJfY29sbGFwc2VkV2lkdGgiLCJjb2xsYXBzZWRXaWR0aCIsIl9leHRlbmRlZFdpZHRoIiwiZXh0ZW5kZWRXaWR0aCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImluZGV4T2YiLCJfdGFic0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJfcGFuZXNDb250YWluZXIiLCJfb25UYWJDbGljayIsImJpbmQiLCJjcmVhdGVUYWIiLCJkZWZhdWx0UGFuZU9wdGlvbnMiLCJhY3RpdmVUYWJJZCIsIl9hY3RpdmVUYWJJZCIsIl9yZW5kZXJUYWJzIiwiX2Vuc3VyZVBhbmUiLCJwYW5lIiwiX2lzQW5pbWF0aW5nIiwiX3NldFRhYkFjdGl2ZSIsIl9zZXRBY3RpdmVDbGFzcyIsIl9pc09wZW5lZCIsImV2ZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJzZXRUaW1lb3V0IiwiZXYiLCJmbGFnIiwidGFicyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwidGFiIiwicmVtb3ZlIiwiY2hpbGROb2RlcyIsIm5vZGUiLCJwYW5lRWwiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJhY3RpdmVJZCIsImNoaWxkcmVuIiwidGFiSWQiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0RmxhZyIsImhvdmVyZWRUYWJJZCIsIk9iamVjdCIsImtleXMiLCJzb3J0IiwiYSIsImIiLCJmb3JFYWNoIiwidGFiQ29udGFpbmVyRWwiLCJ0YWJFbCIsIkV2ZW50VGFyZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZB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YixHQUN5QjFCLE9BRHpCLENBQ2EwQixPQURiOztBQUVWLG9CQUFJLENBQUNpQixTQUFMLEVBQWdCO0FBQ1o7QUFDSDtBQUNELG9CQUFJNEMsaUJBQWlCaEMsU0FBU2lCLGFBQVQsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDQWUsK0JBQWVyRCxTQUFmLENBQXlCQyxHQUF6QixDQUE4Qix3QkFBOUI7QUFDQW9ELCtCQUFlZCxZQUFmLENBQTRCLGFBQTVCLEVBQTJDdkQsRUFBM0M7QUFDQSxvQkFBSXNFLFFBQVE3QyxVQUFVb0MsUUFBUTdELEVBQVIsRUFBWTJCLFdBQVosRUFBeUJtQyxZQUF6QixFQUF1Q3RELE9BQXZDLENBQVYsQ0FBWjtBQUNUNkQsK0JBQWUzRSxnQkFBZixDQUFpQyxPQUFqQyxFQUEwQyxPQUFLNkIsV0FBL0M7QUFDUzhDLCtCQUFlYixXQUFmLENBQTJCYyxLQUEzQjtBQUNBLHVCQUFLbEQsY0FBTCxDQUFvQm9DLFdBQXBCLENBQWdDYSxjQUFoQztBQUNILGFBZkQ7QUFnQkg7Ozs7RUF4TzJCRSwyQjs7a0JBMk9qQm5HLGlCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkljb25TaWRlYmFyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkljb25TaWRlYmFyXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEljb25TaWRlYmFyQ29udHJvbCBmcm9tICcuL3NyYy9JY29uU2lkZWJhckNvbnRyb2wnO1xyXG5pbXBvcnQgSWNvblNpZGViYXJXaWRnZXQgZnJvbSAnLi9zcmMvSWNvblNpZGViYXJXaWRnZXQnO1xyXG5cclxuZXhwb3J0IHsgSWNvblNpZGViYXJDb250cm9sLCBJY29uU2lkZWJhcldpZGdldCB9O1xyXG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJFdmVudFRhcmdldFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJFdmVudFRhcmdldFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBFdmVudFRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudFRhcmdldCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhFdmVudFRhcmdldCwgW3tcbiAgICAgICAga2V5OiAnYWRkRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoISh0eXBlIGluIHRoaXMubGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1t0eXBlXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoISh0eXBlIGluIHRoaXMubGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGFjayA9IHRoaXMubGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdGFjay5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhY2tbaV0gPT09IGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNwYXRjaEV2ZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghKGV2ZW50LnR5cGUgaW4gdGhpcy5saXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5saXN0ZW5lcnNbZXZlbnQudHlwZV07XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdGFjay5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdGFja1tpXS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBFdmVudFRhcmdldDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRXZlbnRUYXJnZXQ7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pW1wiZGVmYXVsdFwiXTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5RmRtVnVkRlJoY21kbGRDOTNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSjNaV0p3WVdOck9pOHZSWFpsYm5SVVlYSm5aWFF2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dlJYWmxiblJVWVhKblpYUXZMaTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2V3lKRmRtVnVkRlJoY21kbGRDSXNJbXhwYzNSbGJtVnljeUlzSW5SNWNHVWlMQ0pqWVd4c1ltRmpheUlzSW5CMWMyZ2lMQ0p6ZEdGamF5SXNJbWtpTENKc0lpd2liR1Z1WjNSb0lpd2ljM0JzYVdObElpd2ljbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaUlzSW1WMlpXNTBJaXdpVDJKcVpXTjBJaXdpWkdWbWFXNWxVSEp2Y0dWeWRIa2lMQ0psYm5WdFpYSmhZbXhsSWl3aVkyOXVabWxuZFhKaFlteGxJaXdpZDNKcGRHRmliR1VpTENKMllXeDFaU0lzSW1OaGJHd2lYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clJFRkJNRU1zWjBOQlFXZERPMEZCUXpGRk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owVkJRWGRFTEd0Q1FVRnJRanRCUVVNeFJUdEJRVU5CTEhsRVFVRnBSQ3hqUVVGak8wRkJReTlFT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUkVGQmVVTXNhVU5CUVdsRE8wRkJRekZGTEhkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0QlFVTnlTVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEpRMnhHVFVFc1Z6dEJRVU5HTERKQ1FVRmpPMEZCUVVFN08wRkJRMVlzWVVGQlMwTXNVMEZCVEN4SFFVRnBRaXhGUVVGcVFqdEJRVU5JT3pzN08zbERRVU5uUWtNc1NTeEZRVUZOUXl4UkxFVkJRVlU3UVVGRE4wSXNaMEpCUVVjc1JVRkJSVVFzVVVGQlVTeExRVUZMUkN4VFFVRm1MRU5CUVVnc1JVRkJPRUk3UVVGRE1VSXNjVUpCUVV0QkxGTkJRVXdzUTBGQlpVTXNTVUZCWml4SlFVRjFRaXhGUVVGMlFqdEJRVU5JTzBGQlEwUXNhVUpCUVV0RUxGTkJRVXdzUTBGQlpVTXNTVUZCWml4RlFVRnhRa1VzU1VGQmNrSXNRMEZCTUVKRUxGRkJRVEZDTzBGQlEwZzdPenMwUTBGRGIwSkVMRWtzUlVGQlRVTXNVU3hGUVVGVk8wRkJRMnBETEdkQ1FVRkhMRVZCUVVWRUxGRkJRVkVzUzBGQlMwUXNVMEZCWml4RFFVRklMRVZCUVRoQ08wRkJRekZDTzBGQlEwZzdRVUZEUkN4blFrRkJTVWtzVVVGQlVTeExRVUZMU2l4VFFVRk1MRU5CUVdWRExFbEJRV1lzUTBGQldqdEJRVU5CTEdsQ1FVRkpMRWxCUVVsSkxFbEJRVWtzUTBGQlVpeEZRVUZYUXl4SlFVRkpSaXhOUVVGTlJ5eE5RVUY2UWl4RlFVRnBRMFlzU1VGQlNVTXNRMEZCY2tNc1JVRkJkME5FTEVkQlFYaERMRVZCUVRaRE8wRkJRM3BETEc5Q1FVRkhSQ3hOUVVGTlF5eERRVUZPTEUxQlFXRklMRkZCUVdoQ0xFVkJRWGxDTzBGQlEzSkNSU3d3UWtGQlRVa3NUVUZCVGl4RFFVRmhTQ3hEUVVGaUxFVkJRV2RDTEVOQlFXaENPMEZCUTBFc01rSkJRVThzUzBGQlMwa3NiVUpCUVV3c1EwRkJlVUpTTEVsQlFYcENMRVZCUVN0Q1F5eFJRVUV2UWl4RFFVRlFPMEZCUTBnN1FVRkRTanRCUVVOS096czdjME5CUTJGUkxFc3NSVUZCVHp0QlFVTnFRaXhuUWtGQlJ5eEZRVUZGUVN4TlFVRk5WQ3hKUVVGT0xFbEJRV01zUzBGQlMwUXNVMEZCY2tJc1EwRkJTQ3hGUVVGdlF6dEJRVU5vUXp0QlFVTklPMEZCUTBRc1owSkJRVWxKTEZGQlFWRXNTMEZCUzBvc1UwRkJUQ3hEUVVGbFZTeE5RVUZOVkN4SlFVRnlRaXhEUVVGYU8wRkJRMGhWTEcxQ1FVRlBReXhqUVVGUUxFTkJRWE5DUml4TFFVRjBRaXhGUVVFMlFpeFJRVUUzUWl4RlFVRjFRenRCUVVOb1EwY3NORUpCUVZrc1MwRkViMEk3UVVGRmFFTkRMRGhDUVVGakxFdEJSbXRDTzBGQlIyaERReXd3UWtGQlZTeExRVWh6UWp0QlFVbG9RME1zZFVKQlFVODdRVUZLZVVJc1lVRkJka003UVVGTlJ5eHBRa0ZCU1N4SlFVRkpXQ3hKUVVGSkxFTkJRVklzUlVGQlYwTXNTVUZCU1VZc1RVRkJUVWNzVFVGQmVrSXNSVUZCYVVOR0xFbEJRVWxETEVOQlFYSkRMRVZCUVhkRFJDeEhRVUY0UXl4RlFVRTJRenRCUVVONlEwUXNjMEpCUVUxRExFTkJRVTRzUlVGQlUxa3NTVUZCVkN4RFFVRmpMRWxCUVdRc1JVRkJiMEpRTEV0QlFYQkNPMEZCUTBnN1FVRkRTanM3T3pzN08ydENRVWRWV0N4WElpd2labWxzWlNJNkltSjFibVJzWlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaUIzWldKd1lXTnJWVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpaHliMjkwTENCbVlXTjBiM0o1S1NCN1hHNWNkR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlBbUppQjBlWEJsYjJZZ2JXOWtkV3hsSUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pHVm1hVzVsSUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUdSbFptbHVaUzVoYldRcFhHNWNkRngwWkdWbWFXNWxLRnRkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MFpYaHdiM0owYzF0Y0lrVjJaVzUwVkdGeVoyVjBYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObFhHNWNkRngwY205dmRGdGNJa1YyWlc1MFZHRnlaMlYwWENKZElEMGdabUZqZEc5eWVTZ3BPMXh1ZlNrb2QybHVaRzkzTENCbWRXNWpkR2x2YmlncElIdGNibkpsZEhWeWJpQWlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnWENJdUwybHVaR1Y0TG1welhDSXBPMXh1SWl3aVkyeGhjM01nUlhabGJuUlVZWEpuWlhRZ2UxeHlYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk1nUFNCN2ZUdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb2RIbHdaU3dnWTJGc2JHSmhZMnNwSUh0Y2NseHVJQ0FnSUNBZ0lDQnBaaWdoS0hSNWNHVWdhVzRnZEdocGN5NXNhWE4wWlc1bGNuTXBLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJHbHpkR1Z1WlhKelczUjVjR1ZkSUQwZ1cxMDdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YkdsemRHVnVaWEp6VzNSNWNHVmRMbkIxYzJnb1kyRnNiR0poWTJzcE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2NtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpQW9kSGx3WlN3Z1kyRnNiR0poWTJzcElIdGNjbHh1SUNBZ0lDQWdJQ0JwWmlnaEtIUjVjR1VnYVc0Z2RHaHBjeTVzYVhOMFpXNWxjbk1wS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlianRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdiR1YwSUhOMFlXTnJJRDBnZEdocGN5NXNhWE4wWlc1bGNuTmJkSGx3WlYwN1hISmNiaUFnSUNBZ0lDQWdabTl5S0d4bGRDQnBJRDBnTUN3Z2JDQTlJSE4wWVdOckxteGxibWQwYURzZ2FTQThJR3c3SUdrckt5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWh6ZEdGamExdHBYU0E5UFQwZ1kyRnNiR0poWTJzcGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1JoWTJzdWMzQnNhV05sS0drc0lERXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpaDBlWEJsTENCallXeHNZbUZqYXlrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmthWE53WVhSamFFVjJaVzUwS0dWMlpXNTBLU0I3WEhKY2JpQWdJQ0FnSUNBZ2FXWW9JU2hsZG1WdWRDNTBlWEJsSUdsdUlIUm9hWE11YkdsemRHVnVaWEp6S1NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJR3hsZENCemRHRmpheUE5SUhSb2FYTXViR2x6ZEdWdVpYSnpXMlYyWlc1MExuUjVjR1ZkTzF4eVhHNWNkQ0FnSUNCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWFpsYm5Rc0lDZDBZWEpuWlhRbkxDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnVkVzFsY21GaWJHVTZJR1poYkhObExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNW1hV2QxY21GaWJHVTZJR1poYkhObExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCM2NtbDBZV0pzWlRvZ1ptRnNjMlVzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbE9pQjBhR2x6WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnWm05eUtHeGxkQ0JwSUQwZ01Dd2diQ0E5SUhOMFlXTnJMbXhsYm1kMGFEc2dhU0E4SUd3N0lHa3JLeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEdGamExdHBYUzVqWVd4c0tIUm9hWE1zSUdWMlpXNTBLVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjFjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElFVjJaVzUwVkdGeVoyVjBPeUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIGNvcHkgPSBmdW5jdGlvbiBjb3B5KHNvdXJjZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHNvdXJjZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoc291cmNlKSkge1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29weShpdGVtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYSwgaykge1xuICAgICAgICAgICAgICAgICAgICBhW2tdID0gY29weShzb3VyY2Vba10pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIGV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmICh0YXJnZXQgPT09IHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYSwgaykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tdO1xuICAgICAgICAgICAgaWYgKF90eXBlb2YoYVtrXSkgPT09ICdvYmplY3QnICYmIGsgaW4gYSkge1xuICAgICAgICAgICAgICAgIGFba10gPSBleHRlbmQoYVtrXSwgdmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhW2tdID0gY29weSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfSwgY29weSh0YXJnZXQpKTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmNvcHkgPSBjb3B5O1xuZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NJc0luZGxZbkJoWTJzNkx5OHZMaTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2V3lKamIzQjVJaXdpYzI5MWNtTmxJaXdpUVhKeVlYa2lMQ0pwYzBGeWNtRjVJaXdpYldGd0lpd2lhWFJsYlNJc0lrUmhkR1VpTENKUFltcGxZM1FpTENKclpYbHpJaXdpY21Wa2RXTmxJaXdpWVNJc0ltc2lMQ0psZUhSbGJtUWlMQ0owWVhKblpYUWlMQ0oyWVd4MVpTSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0RVFVRXdReXhuUTBGQlowTTdRVUZETVVVN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJkMFFzYTBKQlFXdENPMEZCUXpGRk8wRkJRMEVzZVVSQlFXbEVMR05CUVdNN1FVRkRMMFE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xFUVVGNVF5eHBRMEZCYVVNN1FVRkRNVVVzZDBoQlFXZElMRzFDUVVGdFFpeEZRVUZGTzBGQlEzSkpPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEyeEdRU3hKUVVGTlFTeFBRVUZQTEZOQlFWQkJMRWxCUVU4c1UwRkJWVHRCUVVOdVFpeHRRa0ZCWTBNc1RVRkJaQ3g1UTBGQlkwRXNUVUZCWkR0QlFVTkpMR0ZCUVVzc1VVRkJURHRCUVVOQkxHRkJRVXNzVVVGQlREdEJRVU5CTEdGQlFVc3NWVUZCVER0QlFVTkJPMEZCUTBrc2JVSkJRVTlCTEUxQlFWQTdRVUZEU2l4aFFVRkxMRkZCUVV3N1FVRkRTU3huUWtGQlNVRXNWMEZCVnl4SlFVRm1MRVZCUVhGQ08wRkJRMnBDTEhWQ1FVRlBMRWxCUVZBN1FVRkRTQ3hoUVVaRUxFMUJSMHNzU1VGQlNVTXNUVUZCVFVNc1QwRkJUaXhEUVVGalJpeE5RVUZrTEVOQlFVb3NSVUZCTWtJN1FVRkROVUlzZFVKQlFVOUJMRTlCUVU5SExFZEJRVkFzUTBGQldUdEJRVUZCTERKQ1FVRlJTaXhMUVVGTlN5eEpRVUZPTEVOQlFWSTdRVUZCUVN4cFFrRkJXaXhEUVVGUU8wRkJRMGdzWVVGR1NTeE5RVWRCTEVsQlFVbEtMR3RDUVVGclFrc3NTVUZCZEVJc1JVRkJORUk3UVVGRE4wSXNkVUpCUVU5TUxFMUJRVkE3UVVGRFNDeGhRVVpKTEUxQlIwRTdRVUZEUkN4MVFrRkJUMDBzVDBGQlQwTXNTVUZCVUN4RFFVRlpVQ3hOUVVGYUxFVkJRVzlDVVN4TlFVRndRaXhEUVVFeVFpeFZRVUZEUXl4RFFVRkVMRVZCUVVsRExFTkJRVW9zUlVGQlZUdEJRVU40UTBRc2MwSkJRVVZETEVOQlFVWXNTVUZCVDFnc1MwRkJTME1zVDBGQlQxVXNRMEZCVUN4RFFVRk1MRU5CUVZBN1FVRkRRU3d5UWtGQlQwUXNRMEZCVUR0QlFVTklMR2xDUVVoTkxFVkJSMG9zUlVGSVNTeERRVUZRTzBGQlNVZzdRVUZ5UWxRN1FVRjFRa2dzUTBGNFFrUTdPMEZCTUVKQkxFbEJRVTFGTEZOQlFWTXNVMEZCVkVFc1RVRkJVeXhEUVVGRFF5eE5RVUZFTEVWQlFWTmFMRTFCUVZRc1JVRkJiMEk3UVVGREwwSXNVVUZCU1Zrc1YwRkJWMW9zVFVGQlppeEZRVUYxUWp0QlFVTjBRaXhsUVVGUFdTeE5RVUZRTzBGQlEwRXNTMEZHUkN4TlFVZExPMEZCUTBRc1pVRkJUMDRzVDBGQlQwTXNTVUZCVUN4RFFVRlpVQ3hOUVVGYUxFVkJRVzlDVVN4TlFVRndRaXhEUVVFeVFpeFZRVUZEUXl4RFFVRkVMRVZCUVVsRExFTkJRVW9zUlVGQlZUdEJRVU40UXl4blFrRkJTVWNzVVVGQlVXSXNUMEZCVDFVc1EwRkJVQ3hEUVVGYU8wRkJRMEVzWjBKQlFVY3NVVUZCVDBRc1JVRkJSVU1zUTBGQlJpeERRVUZRTEUxQlFXZENMRkZCUVdoQ0xFbEJRVFpDUVN4TFFVRkxSQ3hEUVVGeVF5eEZRVUYzUXp0QlFVTndRMEVzYTBKQlFVVkRMRU5CUVVZc1NVRkJUME1zVDBGQlVVWXNSVUZCUlVNc1EwRkJSaXhEUVVGU0xFVkJRV05ITEV0QlFXUXNRMEZCVUR0QlFVTklMR0ZCUmtRc1RVRkhTenRCUVVOR1NpeHJRa0ZCUlVNc1EwRkJSaXhKUVVGUFdDeExRVUZMWXl4TFFVRk1MRU5CUVZBN1FVRkRSanRCUVVORUxHMUNRVUZQU2l4RFFVRlFPMEZCUTBnc1UwRlVUU3hGUVZOS1ZpeExRVUZOWVN4TlFVRk9MRU5CVkVrc1EwRkJVRHRCUVZWSU8wRkJRMG9zUTBGb1FrUTdPMUZCYlVKUllpeEpMRWRCUVVGQkxFazdVVUZCVFZrc1RTeEhRVUZCUVN4Tklpd2labWxzWlNJNkltSjFibVJzWlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaUIzWldKd1lXTnJWVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpaHliMjkwTENCbVlXTjBiM0o1S1NCN1hHNWNkR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlBbUppQjBlWEJsYjJZZ2JXOWtkV3hsSUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pHVm1hVzVsSUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUdSbFptbHVaUzVoYldRcFhHNWNkRngwWkdWbWFXNWxLRnRkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCN1hHNWNkRngwZG1GeUlHRWdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RGeDBabTl5S0haaGNpQnBJR2x1SUdFcElDaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dQeUJsZUhCdmNuUnpJRG9nY205dmRDbGJhVjBnUFNCaFcybGRPMXh1WEhSOVhHNTlLU2gzYVc1a2IzY3NJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUNJc0lpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc0Z1hIUmNkSDFjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI0Z1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0lEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5d2dibUZ0WlN3Z1oyVjBkR1Z5S1NCN1hHNGdYSFJjZEdsbUtDRmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWlhod2IzSjBjeXdnYm1GdFpTa3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z2JtRnRaU3dnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCblpYUTZJR2RsZEhSbGNpQjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElGOWZaWE5OYjJSMWJHVWdiMjRnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeWtnZTF4dUlGeDBYSFJwWmloMGVYQmxiMllnVTNsdFltOXNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NwSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5MQ0I3SUhaaGJIVmxPaUFuVFc5a2RXeGxKeUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z0oxOWZaWE5OYjJSMWJHVW5MQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdZM0psWVhSbElHRWdabUZyWlNCdVlXMWxjM0JoWTJVZ2IySnFaV04wWEc0Z1hIUXZMeUJ0YjJSbElDWWdNVG9nZG1Gc2RXVWdhWE1nWVNCdGIyUjFiR1VnYVdRc0lISmxjWFZwY21VZ2FYUmNiaUJjZEM4dklHMXZaR1VnSmlBeU9pQnRaWEpuWlNCaGJHd2djSEp2Y0dWeWRHbGxjeUJ2WmlCMllXeDFaU0JwYm5SdklIUm9aU0J1YzF4dUlGeDBMeThnYlc5a1pTQW1JRFE2SUhKbGRIVnliaUIyWVd4MVpTQjNhR1Z1SUdGc2NtVmhaSGtnYm5NZ2IySnFaV04wWEc0Z1hIUXZMeUJ0YjJSbElDWWdPSHd4T2lCaVpXaGhkbVVnYkdsclpTQnlaWEYxYVhKbFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5RZ1BTQm1kVzVqZEdsdmJpaDJZV3gxWlN3Z2JXOWtaU2tnZTF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTVNrZ2RtRnNkV1VnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktIWmhiSFZsS1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURncElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBhV1lvS0cxdlpHVWdKaUEwS1NBbUppQjBlWEJsYjJZZ2RtRnNkV1VnUFQwOUlDZHZZbXBsWTNRbklDWW1JSFpoYkhWbElDWW1JSFpoYkhWbExsOWZaWE5OYjJSMWJHVXBJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwZG1GeUlHNXpJRDBnVDJKcVpXTjBMbU55WldGMFpTaHVkV3hzS1R0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUtHNXpLVHRjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0c1ekxDQW5aR1ZtWVhWc2RDY3NJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnZG1Gc2RXVTZJSFpoYkhWbElIMHBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNaUFtSmlCMGVYQmxiMllnZG1Gc2RXVWdJVDBnSjNOMGNtbHVaeWNwSUdadmNpaDJZWElnYTJWNUlHbHVJSFpoYkhWbEtTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvYm5Nc0lHdGxlU3dnWm5WdVkzUnBiMjRvYTJWNUtTQjdJSEpsZEhWeWJpQjJZV3gxWlZ0clpYbGRPeUI5TG1KcGJtUW9iblZzYkN3Z2EyVjVLU2s3WEc0Z1hIUmNkSEpsZEhWeWJpQnVjenRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR2RsZEVSbFptRjFiSFJGZUhCdmNuUWdablZ1WTNScGIyNGdabTl5SUdOdmJYQmhkR2xpYVd4cGRIa2dkMmwwYUNCdWIyNHRhR0Z5Ylc5dWVTQnRiMlIxYkdWelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG00Z1BTQm1kVzVqZEdsdmJpaHRiMlIxYkdVcElIdGNiaUJjZEZ4MGRtRnlJR2RsZEhSbGNpQTlJRzF2WkhWc1pTQW1KaUJ0YjJSMWJHVXVYMTlsYzAxdlpIVnNaU0EvWEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFJHVm1ZWFZzZENncElIc2djbVYwZFhKdUlHMXZaSFZzWlZzblpHVm1ZWFZzZENkZE95QjlJRHBjYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSTmIyUjFiR1ZGZUhCdmNuUnpLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxPeUI5TzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb1oyVjBkR1Z5TENBbllTY3NJR2RsZEhSbGNpazdYRzRnWEhSY2RISmxkSFZ5YmlCblpYUjBaWEk3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3hjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieUE5SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwSUhzZ2NtVjBkWEp1SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNodlltcGxZM1FzSUhCeWIzQmxjblI1S1RzZ2ZUdGNibHh1SUZ4MEx5OGdYMTkzWldKd1lXTnJYM0IxWW14cFkxOXdZWFJvWDE5Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y0NBOUlGd2lYQ0k3WEc1Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQmNJaTR2YVc1a1pYZ3Vhbk5jSWlrN1hHNGlMQ0pqYjI1emRDQmpiM0I1SUQwZ2MyOTFjbU5sSUQwK0lIdGNjbHh1SUNBZ0lITjNhWFJqYUNoMGVYQmxiMllnYzI5MWNtTmxLU0I3WEhKY2JpQWdJQ0FnSUNBZ1kyRnpaU0FuYm5WdFltVnlKenBjY2x4dUlDQWdJQ0FnSUNCallYTmxJQ2R6ZEhKcGJtY25PbHh5WEc0Z0lDQWdJQ0FnSUdOaGMyVWdKMloxYm1OMGFXOXVKenBjY2x4dUlDQWdJQ0FnSUNCa1pXWmhkV3gwT2x4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMjkxY21ObE8xeHlYRzRnSUNBZ0lDQWdJR05oYzJVZ0oyOWlhbVZqZENjNlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHpiM1Z5WTJVZ1BUMDlJRzUxYkd3cElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLRUZ5Y21GNUxtbHpRWEp5WVhrb2MyOTFjbU5sS1NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlITnZkWEpqWlM1dFlYQWdLR2wwWlcwZ1BUNGdZMjl3ZVNBb2FYUmxiU2twTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLSE52ZFhKalpTQnBibk4wWVc1alpXOW1JRVJoZEdVcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnpiM1Z5WTJVN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpTQjdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlFOWlhbVZqZEM1clpYbHpLSE52ZFhKalpTa3VjbVZrZFdObEtDaGhMQ0JyS1NBOVBpQjdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhXMnRkSUQwZ1kyOXdlU2h6YjNWeVkyVmJhMTBwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmhPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z2UzMHBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1amIyNXpkQ0JsZUhSbGJtUWdQU0FvZEdGeVoyVjBMQ0J6YjNWeVkyVXBJRDArSUh0Y2NseHVJQ0FnSUdsbUlDaDBZWEpuWlhRZ1BUMDlJSE52ZFhKalpTa2dlMXh5WEc1Y2RDQWdJQ0J5WlhSMWNtNGdkR0Z5WjJWME8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUU5aWFtVmpkQzVyWlhsektITnZkWEpqWlNrdWNtVmtkV05sS0NoaExDQnJLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQjJZV3gxWlNBOUlITnZkWEpqWlZ0clhUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9kSGx3Wlc5bUlHRmJhMTBnUFQwOUlDZHZZbXBsWTNRbklDWW1JQ2hySUdsdUlHRXBLWHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGYmExMGdQU0JsZUhSbGJtUWdLR0ZiYTEwc0lIWmhiSFZsS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZVnRyWFNBOUlHTnZjSGtvZG1Gc2RXVXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaE8xeHlYRzRnSUNBZ0lDQWdJSDBzSUdOdmNIa2dLSFJoY21kbGRDa3BPMXh5WEc0Z0lDQWdmU0FnSUNCY2NseHVmVHRjY2x4dVhISmNibHh5WEc1bGVIQnZjblFnZTJOdmNIa3NJR1Y0ZEdWdVpIMDdJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL0ljb25TaWRlYmFyQ29udHJvbC5jc3MnO1xuaW1wb3J0IEljb25TaWRlYmFyV2lkZ2V0IGZyb20gJy4vSWNvblNpZGViYXJXaWRnZXQuanMnO1xuXG4vLyBldi5vcGVuaW5nXG4vLyBldi5vcGVuZWQgeyA8U3RyaW5nPmlkIH1cbi8vIGV2LmNsb3Npbmdcbi8vIGV2LmNsb3NlZFxubGV0IEljb25TaWRlYmFyQ29udHJvbCA9IEwuQ29udHJvbC5leHRlbmQoe1xuICAgIGluY2x1ZGVzOiBMLkV2ZW50ZWQgPyBMLkV2ZW50ZWQucHJvdG90eXBlIDogTC5NaXhpbi5FdmVudHMsXG5cbiAgICAvLyBvcHRpb25zLnBvc2l0aW9uIChsZWZ0fHJpZ2h0KVxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fcGFuZXMgPSB7fVxuICAgICAgICBMLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7ICAgICAgICBcbiAgICB9LFxuXG4gICAgb25BZGQ6IGZ1bmN0aW9uKG1hcCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBMLkRvbVV0aWwuY3JlYXRlKCdkaXYnKTtcbiAgICAgICAgTC5Eb21FdmVudC5kaXNhYmxlQ2xpY2tQcm9wYWdhdGlvbih0aGlzLl9jb250YWluZXIpO1xuICAgICAgICBMLkRvbUV2ZW50LmRpc2FibGVTY3JvbGxQcm9wYWdhdGlvbih0aGlzLl9jb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuX3dpZGdldCA9IG5ldyBJY29uU2lkZWJhcldpZGdldCh0aGlzLl9jb250YWluZXIsIHRoaXMub3B0aW9ucyk7ICAgICAgICBcbiAgICAgICAgdGhpcy5fd2lkZ2V0LmFkZEV2ZW50TGlzdGVuZXIgKCdvcGVuaW5nJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ29wZW5pbmcnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3dpZGdldC5hZGRFdmVudExpc3RlbmVyICgnb3BlbmVkJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ29wZW5lZCcsIGUuZGV0YWlsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3dpZGdldC5hZGRFdmVudExpc3RlbmVyICgnY2xvc2luZycsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5maXJlKCdjbG9zaW5nJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl93aWRnZXQuYWRkRXZlbnRMaXN0ZW5lciAoJ2Nsb3NlZCcsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5maXJlKCdjbG9zZWQnLCBlLmRldGFpbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICAgIH0sXG5cbiAgICBvblJlbW92ZTogZnVuY3Rpb24obWFwKSB7fSxcblxuICAgIHNldFBhbmU6IGZ1bmN0aW9uKGlkLCBwYW5lT3B0aW9ucyA9IHt9KSB7ICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZGdldC5zZXRQYW5lKGlkLCBwYW5lT3B0aW9ucyk7XG4gICAgfSxcblxuICAgIG9wZW46IGZ1bmN0aW9uKHBhbmVJZCkgeyAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZGdldC5vcGVuKHBhbmVJZCk7XG4gICAgfSwgICAgXG5cbiAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldC5jbG9zZSgpO1xuICAgIH0sXG5cbiAgICBnZXRBY3RpdmVUYWJJZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93aWRnZXQuZ2V0QWN0aXZlVGFiSWQoKTtcbiAgICB9LFxuXG4gICAgaXNPcGVuZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZGdldC5pc09wZW5lZCgpO1xuICAgIH0sICBcbiAgICBcbiAgICBlbmFibGU6IGZ1bmN0aW9uIChpZCwgZW5hYmxlZCkge1xuICAgICAgICB0aGlzLl93aWRnZXQuZW5hYmxlIChpZCwgZW5hYmxlZCk7XG4gICAgfSxcblxuICAgIGVuYWJsZWQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkZ2V0LmVuYWJsZWQgKGlkKTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvblNpZGViYXJDb250cm9sO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IEV2ZW50VGFyZ2V0IGZyb20gJ3NjYW5leC1ldmVudC10YXJnZXQnO1xuaW1wb3J0IHsgZXh0ZW5kLCBjb3B5IH0gZnJvbSAnc2NhbmV4LW9iamVjdC1leHRlbnNpb25zJztcblxuaW1wb3J0ICcuL0ljb25TaWRlYmFyV2lkZ2V0LmNzcyc7XG5cbmNsYXNzIEljb25TaWRlYmFyV2lkZ2V0IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5wb3NpdGlvbiA9IHRoaXMuX29wdGlvbnMucG9zaXRpb24gfHwgJ2xlZnQnO1xuICAgICAgICB0aGlzLl9jb2xsYXBzZWRXaWR0aCA9IHRoaXMuX29wdGlvbnMuY29sbGFwc2VkV2lkdGggfHwgNDA7XG4gICAgICAgIHRoaXMuX2V4dGVuZGVkV2lkdGggPSB0aGlzLl9vcHRpb25zLmV4dGVuZGVkV2lkdGggfHwgNDAwO1xuXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ljb25TaWRlYmFyQ29udHJvbCcpO1xuICAgICAgICB0aGlzLl9jb250YWluZXIuaW5uZXJIVE1MID0gYDx1bCBjbGFzcz1cImljb25TaWRlYmFyQ29udHJvbC10YWJzXCI+PC91bD48ZGl2IGNsYXNzPVwiaWNvblNpZGViYXJDb250cm9sLWNvbnRlbnRcIj48L2Rpdj5gO1xuICAgICAgICB0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCAodGhpcy5fb3B0aW9ucy5wb3NpdGlvbi5pbmRleE9mICgnbGVmdCcpICE9PSAtMSA/ICdpY29uU2lkZWJhckNvbnRyb2wtbGVmdCcgOiAnaWNvblNpZGViYXJDb250cm9sLXJpZ2h0Jyk7XG4gICAgICAgIHRoaXMuX3RhYnNDb250YWluZXIgPSB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvciAoJy5pY29uU2lkZWJhckNvbnRyb2wtdGFicycpO1xuICAgICAgICB0aGlzLl9wYW5lc0NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yICgnLmljb25TaWRlYmFyQ29udHJvbC1jb250ZW50Jyk7XG5cbiAgICAgICAgdGhpcy5fb25UYWJDbGljayA9IHRoaXMuX29uVGFiQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9wYW5lcyA9IHt9O1xuICAgIH1cblxuICAgIHNldFBhbmUgKGlkLCBwYW5lT3B0aW9ucykge1xuICAgICAgICBwYW5lT3B0aW9ucyA9IHBhbmVPcHRpb25zIHx8IHt9O1xuICAgICAgICBsZXQgeyBjcmVhdGVUYWIsIHBvc2l0aW9uLCBlbmFibGVkIH0gPSBwYW5lT3B0aW9ucztcbiAgICAgICAgbGV0IGRlZmF1bHRQYW5lT3B0aW9ucyA9IHsgcG9zaXRpb246IDAsIGVuYWJsZWQ6IHRydWUgfTtcbiAgICAgICAgbGV0IGFjdGl2ZVRhYklkID0gdGhpcy5fYWN0aXZlVGFiSWQ7XG5cbiAgICAgICAgdGhpcy5fcGFuZXNbaWRdID0gZXh0ZW5kKGV4dGVuZCAoZXh0ZW5kKHt9LCBkZWZhdWx0UGFuZU9wdGlvbnMpLCB0aGlzLl9wYW5lc1tpZF0gfHwge30pLCBwYW5lT3B0aW9ucyk7XG4gICAgICAgIGlmICghdGhpcy5fcGFuZXNbaWRdLmVuYWJsZWQgJiYgdGhpcy5fYWN0aXZlVGFiSWQgPT09IGlkKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3JlbmRlclRhYnMoeyBhY3RpdmVUYWJJZCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Vuc3VyZVBhbmUoaWQpO1xuICAgIH1cbiAgICBlbmFibGUgIChpZCwgZW5hYmxlZCkge1xuICAgICAgICBsZXQgcGFuZSA9IHRoaXMuX3BhbmVzW2lkXTtcbiAgICAgICAgaWYgKHBhbmUpIHtcbiAgICAgICAgICAgIHBhbmUuZW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW5hYmxlZCAoaWQpIHtcbiAgICAgICAgbGV0IHBhbmUgPSB0aGlzLl9wYW5lc1tpZF07XG4gICAgICAgIGlmIChwYW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFuZS5lbmFibGVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9wZW4gKHBhbmVJZCkge1xuICAgICAgICBpZiAodGhpcy5faXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhbmUgPSB0aGlzLl9wYW5lc1twYW5lSWRdO1xuICAgICAgICBpZiAoIXBhbmUgfHwgIXBhbmUuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYWN0aXZlVGFiSWQgPSBwYW5lSWQ7XG5cbiAgICAgICAgdGhpcy5fc2V0VGFiQWN0aXZlKHBhbmVJZCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZUNsYXNzKHBhbmVJZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzT3BlbmVkKSB7XG5cblx0XHRcdGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXHRcdFx0ZXZlbnQuaW5pdEV2ZW50KCdvcGVuZWQnLCBmYWxzZSwgZmFsc2UpO1xuXHRcdFx0ZXZlbnQuZGV0YWlsID0gIHtpZDogdGhpcy5fYWN0aXZlVGFiSWR9O1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNBbmltYXRpbmcgPSB0cnVlO1xuXHRcdHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpY29uU2lkZWJhckNvbnRyb2xfb3BlbmVkJyk7XG5cdFx0dGhpcy5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ljb25TaWRlYmFyQ29udHJvbF9leHBhbmRlZCcpO1xuXG4gICAgICAgIHRoaXMuX2lzT3BlbmVkID0gdHJ1ZTtcblxuXHRcdGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXHRcdGV2ZW50LmluaXRFdmVudCgnb3BlbmluZycsIGZhbHNlLCBmYWxzZSk7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuXHRcdFx0bGV0IGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG5cdFx0XHRldi5pbml0RXZlbnQoJ29wZW5lZCcsIGZhbHNlLCBmYWxzZSk7XG5cdFx0XHRldi5kZXRhaWwgPSAge2lkOiB0aGlzLl9hY3RpdmVUYWJJZH07XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgICAgICAgICAgdGhpcy5faXNBbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICB9LCAyNTApO1xuICAgIH1cblxuICAgIF9zZXRUYWJBY3RpdmUgKHBhbmVJZCwgZmxhZykge1xuICAgICAgICBsZXQgdGFicyA9IHRoaXMuX3RhYnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmljb25TaWRlYmFyQ29udHJvbC10YWInKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSB0YWJzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS10YWItaWQnKTtcbiAgICAgICAgICAgIGxldCB0YWIgPSB0YWJzW2ldLnF1ZXJ5U2VsZWN0b3IoJy50YWItaWNvbicpO1xuICAgICAgICAgICAgaWYgKGlkID09PSBwYW5lSWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmxhZykge1xuXHRcdFx0XHRcdHRhYi5jbGFzc0xpc3QuYWRkICgndGFiLWljb24tYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG5cdFx0XHRcdFx0dGFiLmNsYXNzTGlzdC5yZW1vdmUgKCd0YWItaWNvbi1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cdFx0XHRcdHRhYi5jbGFzc0xpc3QucmVtb3ZlICgndGFiLWljb24tYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NldFRhYkFjdGl2ZSh0aGlzLl9hY3RpdmVUYWJJZCwgZmFsc2UpO1xuXHRcdHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlICgnaWNvblNpZGViYXJDb250cm9sX29wZW5lZCcpO1xuICAgICAgICB0aGlzLl9pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX2lzT3BlbmVkID0gZmFsc2U7XG5cblx0XHRsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblx0XHRldmVudC5pbml0RXZlbnQoJ2Nsb3NpbmcnLCBmYWxzZSwgZmFsc2UpO1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSAoJ2ljb25TaWRlYmFyQ29udHJvbF9leHBhbmRlZCcpO1xuXG5cdFx0XHRsZXQgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblx0XHRcdGV2LmRldGFpbCA9IHsgaWQ6IHRoaXMuX2FjdGl2ZVRhYklkIH07XG5cdFx0XHRldi5pbml0RXZlbnQoJ2Nsb3NlZCcsIGZhbHNlLCBmYWxzZSk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXYpO1xuXG4gICAgICAgICAgICB0aGlzLl9pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fc2V0QWN0aXZlQ2xhc3MoJycpO1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlVGFiSWQgPSBudWxsO1xuXG4gICAgICAgIH0sIDI1MCk7XG4gICAgfVxuXG4gICAgZ2V0V2lkdGggKCkge1xuICAgICAgICBpZiAodGhpcy5faXNPcGVuZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHRlbmRlZFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNlZFdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZlVGFiSWQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGFiSWQ7XG4gICAgfVxuXG4gICAgaXNPcGVuZWQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuZWQ7XG4gICAgfVxuXG4gICAgX2Vuc3VyZVBhbmUgKGlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGFuZXNDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLl9wYW5lc0NvbnRhaW5lci5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXBhbmUtaWQnKSA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHRcdGxldCBwYW5lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICgnZGl2Jyk7XG5cdFx0cGFuZUVsLmNsYXNzTGlzdC5hZGQgKCdpY29uU2lkZWJhckNvbnRyb2wtcGFuZScpO1xuICAgICAgICBwYW5lRWwuc2V0QXR0cmlidXRlKCdkYXRhLXBhbmUtaWQnLCBpZCk7XG4gICAgICAgIHRoaXMuX3BhbmVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhbmVFbCk7XG4gICAgICAgIHJldHVybiBwYW5lRWw7XG4gICAgfVxuXG4gICAgX3NldEFjdGl2ZUNsYXNzIChhY3RpdmVJZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3BhbmVzQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLl9wYW5lc0NvbnRhaW5lci5jaGlsZHJlbltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFuZS1pZCcpO1xuICAgICAgICAgICAgbGV0IHBhbmUgPSB0aGlzLl9wYW5lc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wYW5lLWlkPScgKyBpZCArICddJyk7XG4gICAgICAgICAgICBpZiAoaWQgPT09IGFjdGl2ZUlkKSB7XG5cdFx0XHRcdHBhbmUuY2xhc3NMaXN0LmFkZCAoJ2ljb25TaWRlYmFyQ29udHJvbC1wYW5lLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblx0XHRcdFx0cGFuZS5jbGFzc0xpc3QucmVtb3ZlICgnaWNvblNpZGViYXJDb250cm9sLXBhbmUtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25UYWJDbGljayAoZSkge1xuICAgICAgICBsZXQgdGFiSWQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhYi1pZCcpO1xuICAgICAgICBsZXQgcGFuZSA9IHRoaXMuX3BhbmVzW3RhYklkXTtcbiAgICAgICAgaWYgKCFwYW5lIHx8ICFwYW5lLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lzT3BlbmVkIHx8IHRoaXMuX2FjdGl2ZVRhYklkICE9PSB0YWJJZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyVGFicyh7IGFjdGl2ZVRhYklkOiB0YWJJZCB9KTtcbiAgICAgICAgICAgIHRoaXMub3Blbih0YWJJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJUYWJzKHt9KTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZW5kZXJUYWJzIChvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGdldEZsYWcgPSAodGFiSWQsIGFjdGl2ZVRhYklkLCBob3ZlcmVkVGFiSWQsIGVuYWJsZWQpICA9PiB7XG4gICAgICAgICAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rpc2FibGVkJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG92ZXJlZFRhYklkICYmIHRhYklkID09PSBob3ZlcmVkVGFiSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hvdmVyJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVGFiSWQgJiYgdGFiSWQgPT09IGFjdGl2ZVRhYklkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhY3RpdmVUYWJJZCA9IG9wdGlvbnMuYWN0aXZlVGFiSWQ7XG4gICAgICAgIGxldCBob3ZlcmVkVGFiSWQgPSBvcHRpb25zLmhvdmVyZWRUYWJJZDtcbiAgICAgICAgdGhpcy5fdGFic0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fcGFuZXMpXG5cdFx0Lm1hcChpZCA9PiBleHRlbmQoeyBpZCB9LCB0aGlzLl9wYW5lc1tpZF0pKVxuXHRcdC5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbilcblx0XHQuZm9yRWFjaChvcHRpb25zID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIGNyZWF0ZVRhYiwgZW5hYmxlZCB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmICghY3JlYXRlVGFiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRhYkNvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoJ2xpJyk7XG4gICAgICAgICAgICB0YWJDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkICgnaWNvblNpZGViYXJDb250cm9sLXRhYicpO1xuICAgICAgICAgICAgdGFiQ29udGFpbmVyRWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhYi1pZCcsIGlkKTtcbiAgICAgICAgICAgIGxldCB0YWJFbCA9IGNyZWF0ZVRhYihnZXRGbGFnKGlkLCBhY3RpdmVUYWJJZCwgaG92ZXJlZFRhYklkLCBlbmFibGVkKSk7XG5cdFx0XHR0YWJDb250YWluZXJFbC5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCB0aGlzLl9vblRhYkNsaWNrKTtcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lckVsLmFwcGVuZENoaWxkKHRhYkVsKTtcbiAgICAgICAgICAgIHRoaXMuX3RhYnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiQ29udGFpbmVyRWwpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25TaWRlYmFyV2lkZ2V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==