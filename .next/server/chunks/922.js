"use strict";
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 7922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MyLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header.js


const linkStyle = {
    marginRight: 15
};
const Header = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                style: linkStyle,
                children: "Home"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/starships",
                style: linkStyle,
                children: "Starships"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/vehicles",
                style: linkStyle,
                children: "Vehicles"
            })
        ]
    });
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/MyLayout.js


const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #DDD"
};
const Layout = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: layoutStyle,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            props.children
        ]
    });
/* harmony default export */ const MyLayout = (Layout);


/***/ })

};
;