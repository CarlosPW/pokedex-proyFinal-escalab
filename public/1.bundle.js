(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: setFavorite, deleteFavorite, searchButton, login, startGoogleLogin, startLogout, logout, setHeaderLoading, pokedexLoading, favoriteFirebase, getFavoriteFirebase, clearPokemonsLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFavorite", function() { return setFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFavorite", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchButton", function() { return searchButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGoogleLogin", function() { return startGoogleLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLogout", function() { return startLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHeaderLoading", function() { return setHeaderLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokedexLoading", function() { return pokedexLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoriteFirebase", function() { return favoriteFirebase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteFirebase", function() { return getFavoriteFirebase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearPokemonsLogout", function() { return clearPokemonsLogout; });
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase/firebase-config */ "./src/firebase/firebase-config.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var setFavorite = function setFavorite(payload) {
  return {
    type: "SET_FAVORITE",
    payload: payload
  };
};
var deleteFavorite = function deleteFavorite(payload) {
  return {
    type: "DELETE_FAVORITE",
    payload: payload
  };
};
var searchButton = function searchButton(payload) {
  return {
    type: "SEARCH_BUTTON_STATE",
    payload: payload
  };
};
var login = function login(uid, displayName, photoURL) {
  return {
    type: "LOGIN_STATE",
    payload: {
      uid: uid,
      displayName: displayName,
      photoURL: photoURL
    }
  };
};
var startGoogleLogin = function startGoogleLogin() {
  return function (dispatch) {
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_0__["firebase"].auth().signInWithPopup(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_0__["googleAuthProvider"]).then(function (_ref) {
      var user = _ref.user;
      dispatch(login(user.uid, user.displayName, user.photoURL));
    });
  };
};
var startLogout = function startLogout() {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_0__["firebase"].auth().signOut();

            case 2:
              dispatch(logout());

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var logout = function logout() {
  return {
    type: "LOGOUT"
  };
};
var setHeaderLoading = function setHeaderLoading(payload) {
  return {
    type: "HEADER_LOADING",
    payload: payload
  };
};
var pokedexLoading = function pokedexLoading(payload) {
  return {
    type: "POKEDEX_LOADING",
    payload: payload
  };
};
var favoriteFirebase = function favoriteFirebase() {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState) {
      var uid, favorite, docRef;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              uid = getState().uid;
              favorite = _objectSpread({}, getState().favoritePokemons);
              _context2.next = 4;
              return _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_0__["db"].collection("".concat(uid)).doc("favorites").set(favorite);

            case 4:
              docRef = _context2.sent;
              return _context2.abrupt("return", docRef);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var getFavoriteFirebase = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(uid, dispatch) {
    var snapRef, array;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_0__["db"].collection("".concat(uid)).doc("favorites").get();

          case 2:
            snapRef = _context3.sent;
            array = Object.values(snapRef.data()); // console.log(array);

            return _context3.abrupt("return", array);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getFavoriteFirebase(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();
var clearPokemonsLogout = function clearPokemonsLogout(payload) {
  return {
    type: "CLEAR_POKEMONS",
    payload: payload
  };
};

/***/ }),

/***/ "./src/assets/img/img_home/logo.png":
/*!******************************************!*\
  !*** ./src/assets/img/img_home/logo.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5d654c2ebc217dcbd6a57469789af3a2.png");

/***/ }),

/***/ "./src/assets/img/img_home/pokedex_footer_icon.png":
/*!*********************************************************!*\
  !*** ./src/assets/img/img_home/pokedex_footer_icon.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "06762d9de18e5232c19d6591c8a5a860.png");

/***/ }),

/***/ "./src/assets/img/img_home/pokedex_icon.png":
/*!**************************************************!*\
  !*** ./src/assets/img/img_home/pokedex_icon.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "07cc54ac82ff4d8a194c77f13b7cdb9e.png");

/***/ }),

/***/ "./src/assets/img/img_home/pokedex_led.png":
/*!*************************************************!*\
  !*** ./src/assets/img/img_home/pokedex_led.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fbc3ba5733fd1f48922ec63e3e9cb1e4.png");

/***/ }),

/***/ "./src/assets/img/img_home/pokemon_home.png":
/*!**************************************************!*\
  !*** ./src/assets/img/img_home/pokemon_home.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "547bf540fd10baade5598a36b9119dbe.png");

/***/ }),

/***/ "./src/components/HomeScreen.jsx":
/*!***************************************!*\
  !*** ./src/components/HomeScreen.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_img_home_pokemon_home_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/img/img_home/pokemon_home.png */ "./src/assets/img/img_home/pokemon_home.png");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetch */ "./src/hooks/useFetch.js");
/* harmony import */ var _constants_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/Header */ "./src/components/constants/Header.jsx");
/* harmony import */ var _Pokedex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pokedex */ "./src/components/Pokedex.jsx");
/* harmony import */ var _constants_PokedexLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/PokedexLayout */ "./src/components/constants/PokedexLayout.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../actions */ "./src/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PokedexSearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PokedexSearch */ "./src/components/PokedexSearch.jsx");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants_ErrorBoundary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/ErrorBoundary */ "./src/components/constants/ErrorBoundary.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-error-boundary */ "./node_modules/react-error-boundary/dist/react-error-boundary.umd.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _constants_ModalScreen__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./constants/ModalScreen */ "./src/components/constants/ModalScreen.jsx");
/* harmony import */ var _hooks_useModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/useModal */ "./src/hooks/useModal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var HomeScreen = function HomeScreen() {
  var searchButtonState = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.searchButtonState;
  });
  var pokedexLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.pokedexLoading;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var handleSetButtonState = function handleSetButtonState(state) {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["searchButton"])(state));
  };

  var initialState;

  if (window.localStorage.getItem("url") === null) {
    initialState = "https://pokeapi.co/api/v2/pokemon/";
  } else {
    initialState = window.localStorage.getItem("url");
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useFetch = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__["useFetch"])(url),
      data = _useFetch.data,
      loading = _useFetch.loading;

  var _useModal = Object(_hooks_useModal__WEBPACK_IMPORTED_MODULE_14__["default"])(false),
      isOpen = _useModal.isOpen,
      setIsOpen = _useModal.setIsOpen,
      idToModal = _useModal.idToModal,
      setidToModal = _useModal.setidToModal,
      openModal = _useModal.openModal,
      afterOpenModal = _useModal.afterOpenModal,
      closeModal = _useModal.closeModal; // const [idToModal, setidToModal] = useState();


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeScreen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeScreen__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_constants_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeScreen__box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeScreen__left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_img_home_pokemon_home_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_error_boundary__WEBPACK_IMPORTED_MODULE_12__["ErrorBoundary"], {
    FallbackComponent: _constants_ErrorBoundary__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_constants_PokedexLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data,
    loading: loading,
    setUrl: setUrl,
    handleSetButtonState: handleSetButtonState,
    state: searchButtonState
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "#ffe500"
  })) : pokedexLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "#ffe500"
  })) : searchButtonState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PokedexSearch__WEBPACK_IMPORTED_MODULE_9__["PokedexSearch"], null) : data.results.map(function (poke) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pokedex__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: poke.url.split("/").reverse()[1],
      pokemonName: poke.name,
      key: poke.url.split("/").reverse()[1],
      openModal: openModal,
      setidToModal: setidToModal,
      onClick: function onClick() {
        setidToModal(poke.url.split("/").reverse()[1]);
      }
    });
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_constants_ModalScreen__WEBPACK_IMPORTED_MODULE_13__["default"], {
    isOpen: isOpen,
    afterOpenModal: afterOpenModal,
    closeModal: closeModal,
    setIsOpen: setIsOpen,
    id: idToModal
  }));
};

HomeScreen.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (HomeScreen);

/***/ }),

/***/ "./src/components/Pokedex.jsx":
/*!************************************!*\
  !*** ./src/components/Pokedex.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component/src/effects/blur.css */ "./node_modules/react-lazy-load-image-component/src/effects/blur.css");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../actions */ "./src/actions/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Pokedex = function Pokedex(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      favorite = _useState2[0],
      setFavorite = _useState2[1];

  var id = props.id,
      pokemonName = props.pokemonName,
      favoritePokemons = props.favoritePokemons,
      uid = props.uid,
      openModal = props.openModal,
      setidToModal = props.setidToModal;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var handleSetFavorite = function handleSetFavorite() {
    if (uid !== null) {
      props.setFavorite({
        id: id,
        pokemonName: pokemonName
      });
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["favoriteFirebase"])());
      setFavorite(true);
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
        title: "Error!",
        text: "Please log in to save your Pokemon",
        icon: "error",
        confirmButtonText: "Cool"
      });
    }
  };

  var handleDeleteFavorite = function handleDeleteFavorite(itemId) {
    props.deleteFavorite(itemId);

    if (uid !== null) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["favoriteFirebase"])());
    }

    setFavorite(false);
  };

  var isFavorite = function isFavorite() {
    var result = favoritePokemons.filter(function (favoritePokemon) {
      return favoritePokemon.id === id;
    });

    if (result.length) {
      setFavorite(true);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    isFavorite();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pokedex__grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pokedex__name-container",
    onClick: function onClick() {
      setidToModal(id);
      openModal();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pokedex__img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImage"], {
    effect: "blur",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(id, ".png"),
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "pokedex__title"
  }, pokemonName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pokedex__icon"
  }, favorite ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    onClick: function onClick() {
      return handleDeleteFavorite(id);
    },
    className: "fas fa-star pokedex__icon_selected"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    onClick: handleSetFavorite,
    className: "far fa-star"
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    favoritePokemons: state.favoritePokemons,
    uid: state.uid
  };
};

var mapDispatchToProps = {
  setFavorite: _actions__WEBPACK_IMPORTED_MODULE_6__["setFavorite"],
  deleteFavorite: _actions__WEBPACK_IMPORTED_MODULE_6__["deleteFavorite"]
};
Pokedex.propTypes = {
  pokemonName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  favoritePokemons: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Pokedex));

/***/ }),

/***/ "./src/components/PokedexSearch.jsx":
/*!******************************************!*\
  !*** ./src/components/PokedexSearch.jsx ***!
  \******************************************/
/*! exports provided: PokedexSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokedexSearch", function() { return PokedexSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useFetch */ "./src/hooks/useFetch.js");
/* harmony import */ var _Pokedex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pokedex */ "./src/components/Pokedex.jsx");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useModal */ "./src/hooks/useModal.js");
/* harmony import */ var _constants_ModalScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/ModalScreen */ "./src/components/constants/ModalScreen.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var PokedexSearch = function PokedexSearch() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setvalue = _useState2[1];

  var urlSearch = "https://pokeapi.co/api/v2/pokemon/".concat(value);

  var _useFetch = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__["useFetch"])(urlSearch),
      data = _useFetch.data,
      loading = _useFetch.loading;

  var _useModal = Object(_hooks_useModal__WEBPACK_IMPORTED_MODULE_4__["default"])(false),
      isOpen = _useModal.isOpen,
      setIsOpen = _useModal.setIsOpen,
      idToModal = _useModal.idToModal,
      setidToModal = _useModal.setidToModal,
      openModal = _useModal.openModal,
      afterOpenModal = _useModal.afterOpenModal,
      closeModal = _useModal.closeModal;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form_pokedex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "pokedex__searchInput",
    placeholder: "search name or id",
    id: "search_input"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "loginScreen__buttonLogin",
    onClick: function onClick(e) {
      e.preventDefault();

      if (document.querySelector("#search_input").value === "") {
        setvalue(null);
      } else {
        setvalue(document.querySelector("#search_input").value);
        document.querySelector("#search_input").value = "";
      }
    }
  }, "SEARCH")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pokedex_search_body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "RESULTS: ")), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "10%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "#ffe500"
  })) : data === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "pokedex_search_body"
  }, "No Pokemon is Found with that name.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pokedex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: data.id,
    pokemonName: data.name,
    key: data.id,
    setidToModal: setidToModal,
    openModal: openModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_constants_ModalScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isOpen: isOpen,
    afterOpenModal: afterOpenModal,
    closeModal: closeModal,
    setIsOpen: setIsOpen,
    id: idToModal
  }));
};

/***/ }),

/***/ "./src/components/constants/Header.jsx":
/*!*********************************************!*\
  !*** ./src/components/constants/Header.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_img_img_home_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/img/img_home/logo.png */ "./src/assets/img/img_home/logo.png");








var Header = function Header() {
  var name = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.name;
  });
  var photo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.photo;
  });
  var headerLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.headerLoading;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header___container"
  }, headerLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "#ffe500"
  }) : name === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-user-circle"
  }), "\u2003Log In"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "header__profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: photo,
    className: "profile_image",
    alt: "profile_img"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\xA0", name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_img_home_logo_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "Pokemon Logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__home header__favorites"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-home"
  }), " Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__favorites"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/favorites"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-star"
  }), "\xA0Favorites")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__info",
    onClick: function onClick() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Proyecto final realizado por Carlos Peñaloza, para el curso de React Js en Escalab Academy");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-question-circle"
  }))));
};

Header.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  photo: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/constants/ModalScreen.jsx":
/*!**************************************************!*\
  !*** ./src/components/constants/ModalScreen.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useFetch */ "./src/hooks/useFetch.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component/src/effects/blur.css */ "./node_modules/react-lazy-load-image-component/src/effects/blur.css");






var ModalScreen = function ModalScreen(_ref) {
  var isOpen = _ref.isOpen,
      afterOpenModal = _ref.afterOpenModal,
      closeModal = _ref.closeModal,
      setIsOpen = _ref.setIsOpen,
      id = _ref.id;
  var customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      borderRadius: "50px",
      transform: "translate(-50%, -50%)",
      width: "85%",
      maxWidth: "1440px"
    }
  };
  var urlModal = "https://pokeapi.co/api/v2/pokemon/".concat(id);

  var _useFetch = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__["useFetch"])(urlModal),
      data = _useFetch.data,
      loading = _useFetch.loading;

  react_modal__WEBPACK_IMPORTED_MODULE_1___default.a.setAppElement("#modal");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isOpen: isOpen,
    afterOpenModal: afterOpenModal,
    closeModal: closeModal,
    style: customStyles
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Loading....") : data !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalScreen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "modalScreen__title"
  }, data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalScreen__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalScreen__img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImage"], {
    effect: "blur",
    src: data.sprites.other["official-artwork"].front_default,
    alt: data.name,
    className: "modal_image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalScreen__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Type: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, data.types.map(function (typ, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i
    }, typ.type.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Abilities: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, data.abilities.map(function (ab, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i
    }, ab.ability.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Stats: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, data.stats.map(function (st, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i
    }, st.stat.name, ": ", st.base_stat);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalScreen__mini_images"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mini_image_modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImage"], {
    effect: "blur",
    src: data.sprites.back_default,
    alt: data.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mini_image_modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImage"], {
    effect: "blur",
    src: data.sprites.back_shiny,
    alt: data.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mini_image_modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImage"], {
    effect: "blur",
    src: data.sprites.front_default,
    alt: data.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mini_image_modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImage"], {
    effect: "blur",
    src: data.sprites.front_shiny,
    alt: data.name
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loginScreen__button modal_button",
    onClick: function onClick() {
      setIsOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-times-circle"
  }))) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalScreen);

/***/ }),

/***/ "./src/components/constants/PokedexLayout.jsx":
/*!****************************************************!*\
  !*** ./src/components/constants/PokedexLayout.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_img_home_pokedex_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/img/img_home/pokedex_icon.png */ "./src/assets/img/img_home/pokedex_icon.png");
/* harmony import */ var _assets_img_img_home_pokedex_led_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/img/img_home/pokedex_led.png */ "./src/assets/img/img_home/pokedex_led.png");
/* harmony import */ var _assets_img_img_home_pokedex_footer_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/img/img_home/pokedex_footer_icon.png */ "./src/assets/img/img_home/pokedex_footer_icon.png");





var PokedexLayout = function PokedexLayout(_ref) {
  var children = _ref.children,
      data = _ref.data,
      loading = _ref.loading,
      setUrl = _ref.setUrl,
      handleSetButtonState = _ref.handleSetButtonState,
      state = _ref.state;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeScreen__pokedex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pokedex_header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pokedex__icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_img_home_pokedex_icon_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "icono Pokedex"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Pokedex"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pokedex__led"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_img_home_pokedex_led_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: state ? "homeScreen_searchButton_active" : "homeScreen_searchButton",
    onClick: function onClick() {
      // console.log(state);
      handleSetButtonState(!state);
    }
  }, "SEARCH")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pokedex_body"
  }, children), state ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pokedex_footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-times-circle",
    onClick: function onClick() {
      // console.log(state);
      handleSetButtonState(false);
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pokedex_footer"
  }, loading ? null : data.previous === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\xA0") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pokedex_footer_icon",
    onClick: function onClick(e) {
      e.preventDefault();
      window.localStorage.setItem("url", data.previous);
      setUrl(data.previous);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-chevron-left"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pokedex_footer_icon",
    onClick: function onClick(e) {
      e.preventDefault();
      window.localStorage.setItem("url", "https://pokeapi.co/api/v2/pokemon/");
      setUrl("https://pokeapi.co/api/v2/pokemon/");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_img_home_pokedex_footer_icon_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "icono Pokedex"
  })), loading ? null : data.next === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\xA0") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pokedex_footer_icon",
    onClick: function onClick(e) {
      e.preventDefault();
      window.localStorage.setItem("url", data.next);
      setUrl(data.next);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-chevron-right"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PokedexLayout);

/***/ }),

/***/ "./src/firebase/firebase-config.js":
/*!*****************************************!*\
  !*** ./src/firebase/firebase-config.js ***!
  \*****************************************/
/*! exports provided: db, googleAuthProvider, firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleAuthProvider", function() { return googleAuthProvider; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");



var firebaseConfig = {
  apiKey: "AIzaSyBdE3Mi4pL-rRwIpZ2DwiC9IRM3CzsNDZ8",
  authDomain: "pokemon-proyectofinal-reactjs.firebaseapp.com",
  projectId: "pokemon-proyectofinal-reactjs",
  storageBucket: "pokemon-proyectofinal-reactjs.appspot.com",
  messagingSenderId: "91715272730",
  appId: "1:91715272730:web:f3f46d53140c4ed84451a3",
  measurementId: "G-5GSXSM5F10"
};
firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
var db = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
var googleAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider();


/***/ }),

/***/ "./src/hooks/useFetch.js":
/*!*******************************!*\
  !*** ./src/hooks/useFetch.js ***!
  \*******************************/
/*! exports provided: useFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetch", function() { return useFetch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var useFetch = function useFetch(url) {
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    data: null,
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setState({
      data: null,
      loading: true,
      error: null
    });
    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      if (isMounted.current) {
        setState({
          loading: false,
          error: null,
          data: data
        });
      }
    }).catch(function () {
      setState({
        data: null,
        loading: false,
        error: "No se pudo cargar la info"
      });
    });
  }, [url]);
  return state;
};

/***/ }),

/***/ "./src/hooks/useModal.js":
/*!*******************************!*\
  !*** ./src/hooks/useModal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useModal = function useModal(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      idToModal = _useState4[0],
      setidToModal = _useState4[1];

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
    idToModal: idToModal,
    setidToModal: setidToModal,
    openModal: openModal,
    afterOpenModal: afterOpenModal,
    closeModal: closeModal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useModal);

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map