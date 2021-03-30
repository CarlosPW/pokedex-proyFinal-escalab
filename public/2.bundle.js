(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/assets/img/img_login/imgPokemon_login.png":
/*!*******************************************************!*\
  !*** ./src/assets/img/img_login/imgPokemon_login.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b17811cd3895af1b45b6da3a6d83481c.png");

/***/ }),

/***/ "./src/components/FavoritesScreen.jsx":
/*!********************************************!*\
  !*** ./src/components/FavoritesScreen.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/Header */ "./src/components/constants/Header.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../actions */ "./src/actions/index.js");
/* harmony import */ var _Pokedex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pokedex */ "./src/components/Pokedex.jsx");
/* harmony import */ var _constants_ModalScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/ModalScreen */ "./src/components/constants/ModalScreen.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var FavoritesScreen = function FavoritesScreen(props) {
  var favoritePokemons = props.favoritePokemons;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "favorites__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_constants_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "favorites__listcontainer"
  }, !favoritePokemons.length ? null : favoritePokemons.map(function (poke) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pokedex__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: poke.id,
      pokemonName: poke.pokemonName,
      key: poke.id,
      openModal: openModal,
      setidToModal: setidToModal,
      onClick: function onClick() {
        setidToModal(poke.id);
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_constants_ModalScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isOpen: isOpen,
    afterOpenModal: afterOpenModal,
    closeModal: closeModal,
    setIsOpen: setIsOpen,
    id: idToModal
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    favoritePokemons: state.favoritePokemons
  };
};

var mapDispatchToProps = {
  setFavorite: _actions__WEBPACK_IMPORTED_MODULE_3__["setFavorite"],
  deleteFavorite: _actions__WEBPACK_IMPORTED_MODULE_3__["deleteFavorite"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(FavoritesScreen));

/***/ }),

/***/ "./src/components/LoginScreen.jsx":
/*!****************************************!*\
  !*** ./src/components/LoginScreen.jsx ***!
  \****************************************/
/*! exports provided: LoginScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginScreen", function() { return LoginScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _assets_img_img_login_imgPokemon_login_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets/img/img_login/imgPokemon_login.png */ "./src/assets/img/img_login/imgPokemon_login.png");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var LoginScreen = function LoginScreen() {
  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(),
      push = _useHistory.push;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var handleGoogleLogin = function handleGoogleLogin() {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["startGoogleLogin"])());
  };

  var handleLogout = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["clearPokemonsLogout"])());
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["startLogout"])());

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLogout() {
      return _ref.apply(this, arguments);
    };
  }();

  var name = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.name;
  });
  var photo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.photo;
  });
  var headerLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.headerLoading;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loginScreen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loginScreen__container"
  }, headerLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "header__info"
  }, "...") : name === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loginScreen__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loginScreen__login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Log In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "google-btn",
    onClick: handleGoogleLogin
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "google-icon-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "google-icon",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
    alt: "google button"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "btn-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Sign in with google"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loginScreen__form_active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome ", name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: photo,
    alt: "profile_img"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loginScreen__buttonLogout",
    onClick: handleLogout
  }, "LOGOUT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loginScreen__right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      push("/");
    },
    className: "loginScreen__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-arrow-alt-circle-left"
  }), "Go Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_img_login_imgPokemon_login_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: ""
  }))));
};

/***/ }),

/***/ "./src/components/constants/NotFound404.jsx":
/*!**************************************************!*\
  !*** ./src/components/constants/NotFound404.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var NotFound404 = function NotFound404() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeScreen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeScreen__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Page Not Found")));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound404);

/***/ }),

/***/ "./src/routes/AppRouter.js":
/*!*********************************!*\
  !*** ./src/routes/AppRouter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppRouter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _components_constants_NotFound404__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/constants/NotFound404 */ "./src/components/constants/NotFound404.jsx");
/* harmony import */ var _components_FavoritesScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FavoritesScreen */ "./src/components/FavoritesScreen.jsx");
/* harmony import */ var _components_HomeScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HomeScreen */ "./src/components/HomeScreen.jsx");
/* harmony import */ var _components_LoginScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LoginScreen */ "./src/components/LoginScreen.jsx");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase/firebase-config */ "./src/firebase/firebase-config.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










function AppRouter() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_8__["firebase"].auth().onAuthStateChanged( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {
        var fav;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(user !== null && user !== void 0 && user.uid)) {
                  _context.next = 6;
                  break;
                }

                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["login"])(user.uid, user.displayName, user.photoURL));
                _context.next = 4;
                return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["getFavoriteFirebase"])(user.uid);

              case 4:
                fav = _context.sent;

                if (fav.length > 0) {
                  fav.forEach(function (item) {
                    return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setFavorite"])(item));
                  });
                }

              case 6:
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["pokedexLoading"])(false));
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setHeaderLoading"])(false));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }, [dispatch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LoginScreen__WEBPACK_IMPORTED_MODULE_7__["LoginScreen"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/favorites"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FavoritesScreen__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomeScreen__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    component: _components_constants_NotFound404__WEBPACK_IMPORTED_MODULE_4__["default"]
  }))));
}

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map