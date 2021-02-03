module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/client-side.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/client-side.js":
/*!******************************!*\
  !*** ./pages/client-side.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/matyldamadej/code/topolino-app/pages/client-side.js\";\n\n\nconst url = 'https://pokeapi.co/api/v2/pokemon?limit=151';\nconst headers = {\n  'Cache-Control': 'no-cache'\n};\n\nconst ClientSide = () => {\n  const {\n    0: pokemon,\n    1: setPokemon\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    const fetchPokemon = async () => {\n      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url, {\n        headers\n      }); // console.log(response);\n\n      const promises = response.data.results.map(result => {\n        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(result.url, {\n          headers\n        });\n      });\n      const responses = await Promise.all(promises);\n      console.log(responses);\n      const pokeData = responses.map(r => {\n        return {\n          name: r.data.name,\n          imgUrl: r.data.sprites.front_default\n        };\n      });\n      setPokemon(pokeData);\n    };\n\n    fetchPokemon();\n  }, []);\n  console.log(pokemon);\n  return pokemon.map(poke => {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: poke.imgUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: poke.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, undefined)]\n    }, poke.name, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, undefined);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientSide);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbGllbnQtc2lkZS5qcz9iYjAwIl0sIm5hbWVzIjpbInVybCIsImhlYWRlcnMiLCJDbGllbnRTaWRlIiwicG9rZW1vbiIsInNldFBva2Vtb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoUG9rZW1vbiIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJwcm9taXNlcyIsImRhdGEiLCJyZXN1bHRzIiwibWFwIiwicmVzdWx0IiwicmVzcG9uc2VzIiwiUHJvbWlzZSIsImFsbCIsImNvbnNvbGUiLCJsb2ciLCJwb2tlRGF0YSIsInIiLCJuYW1lIiwiaW1nVXJsIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJwb2tlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLDZDQUFaO0FBQ0EsTUFBTUMsT0FBTyxHQUFHO0FBQ2QsbUJBQWlCO0FBREgsQ0FBaEI7O0FBSUEsTUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDdkIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsWUFBWSxHQUFHLFlBQVk7QUFDL0IsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVVYsR0FBVixFQUFlO0FBQUVDO0FBQUYsT0FBZixDQUF2QixDQUQrQixDQUUvQjs7QUFDQSxZQUFNVSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxPQUFkLENBQXNCQyxHQUF0QixDQUEyQkMsTUFBRCxJQUFZO0FBQ3JELGVBQU9OLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUssTUFBTSxDQUFDZixHQUFqQixFQUFzQjtBQUFFQztBQUFGLFNBQXRCLENBQVA7QUFDRCxPQUZnQixDQUFqQjtBQUdBLFlBQU1lLFNBQVMsR0FBRyxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsUUFBWixDQUF4QjtBQUNBUSxhQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWjtBQUNBLFlBQU1LLFFBQVEsR0FBR0wsU0FBUyxDQUFDRixHQUFWLENBQWNRLENBQUMsSUFBSTtBQUNsQyxlQUFPO0FBQ0xDLGNBQUksRUFBRUQsQ0FBQyxDQUFDVixJQUFGLENBQU9XLElBRFI7QUFFTEMsZ0JBQU0sRUFBRUYsQ0FBQyxDQUFDVixJQUFGLENBQU9hLE9BQVAsQ0FBZUM7QUFGbEIsU0FBUDtBQUtELE9BTmdCLENBQWpCO0FBUUF0QixnQkFBVSxDQUFDaUIsUUFBRCxDQUFWO0FBQ0QsS0FqQkQ7O0FBa0JBZCxnQkFBWTtBQUNiLEdBcEJRLEVBb0JOLEVBcEJNLENBQVQ7QUFxQkFZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZakIsT0FBWjtBQUVBLFNBQU9BLE9BQU8sQ0FBQ1csR0FBUixDQUFZYSxJQUFJLElBQUk7QUFDekIsd0JBQ0U7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRUEsSUFBSSxDQUFDSDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLGtCQUFJRyxJQUFJLENBQUNKO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQSxPQUFVSSxJQUFJLENBQUNKLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQU9ELEdBUk0sQ0FBUDtBQVNELENBbENEOztBQXNDZXJCLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2xpZW50LXNpZGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHVybCA9ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MTUxJ1xuY29uc3QgaGVhZGVycyA9IHtcbiAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXG59XG5cbmNvbnN0IENsaWVudFNpZGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtwb2tlbW9uLCBzZXRQb2tlbW9uXSA9IHVzZVN0YXRlKFtdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUG9rZW1vbiA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwgeyBoZWFkZXJzIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBjb25zdCBwcm9taXNlcyA9IHJlc3BvbnNlLmRhdGEucmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHJlc3VsdC51cmwsIHsgaGVhZGVycyB9KVxuICAgICAgfSlcbiAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VzKVxuICAgICAgY29uc3QgcG9rZURhdGEgPSByZXNwb25zZXMubWFwKHIgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IHIuZGF0YS5uYW1lLFxuICAgICAgICAgIGltZ1VybDogci5kYXRhLnNwcml0ZXMuZnJvbnRfZGVmYXVsdFxuXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHNldFBva2Vtb24ocG9rZURhdGEpXG4gICAgfVxuICAgIGZldGNoUG9rZW1vbigpXG4gIH0sIFtdKVxuICBjb25zb2xlLmxvZyhwb2tlbW9uKVxuXG4gIHJldHVybiBwb2tlbW9uLm1hcChwb2tlID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e3Bva2UubmFtZX0+XG4gICAgICAgIDxpbWcgc3JjPXtwb2tlLmltZ1VybH0gLz5cbiAgICAgICAgPHA+e3Bva2UubmFtZX08L3A+XG4gICAgICAgIDxociAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9KVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50U2lkZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/client-side.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });