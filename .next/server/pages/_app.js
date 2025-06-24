/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./common/components/modal/animations/ModalManager.animations.ts":
/*!***********************************************************************!*\
  !*** ./common/components/modal/animations/ModalManager.animations.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bgAnimation: () => (/* binding */ bgAnimation),\n/* harmony export */   modalAnimation: () => (/* binding */ modalAnimation)\n/* harmony export */ });\n/* harmony import */ var _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common/constants/easings */ \"(pages-dir-node)/./common/constants/easings.ts\");\n\nconst transition = {\n    ease: _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_EASE\n};\nconst bgAnimation = {\n    closed: {\n        opacity: 0,\n        transition\n    },\n    opened: {\n        opacity: 1,\n        transition\n    }\n};\nconst modalAnimation = {\n    closed: {\n        y: -100,\n        transition\n    },\n    opened: {\n        y: 0,\n        transition\n    },\n    exited: {\n        y: 100,\n        transition\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbnMvTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBEO0FBRTFELE1BQU1DLGFBQWE7SUFBRUMsTUFBTUYsbUVBQVlBO0FBQUM7QUFFakMsTUFBTUcsY0FBYztJQUN6QkMsUUFBUTtRQUFFQyxTQUFTO1FBQUdKO0lBQVc7SUFDakNLLFFBQVE7UUFBRUQsU0FBUztRQUFHSjtJQUFXO0FBQ25DLEVBQUU7QUFFSyxNQUFNTSxpQkFBaUI7SUFDNUJILFFBQVE7UUFBRUksR0FBRyxDQUFDO1FBQUtQO0lBQVc7SUFDOUJLLFFBQVE7UUFBRUUsR0FBRztRQUFHUDtJQUFXO0lBQzNCUSxRQUFRO1FBQUVELEdBQUc7UUFBS1A7SUFBVztBQUMvQixFQUFFIiwic291cmNlcyI6WyJEOlxcUmVhbC1UaW1lLUNvbGxhYm9yYXRpdmUtV2hpdGVib2FyZC0tbWFpblxcY29tbW9uXFxjb21wb25lbnRzXFxtb2RhbFxcYW5pbWF0aW9uc1xcTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgREVGQVVMVF9FQVNFIH0gZnJvbSBcIkAvY29tbW9uL2NvbnN0YW50cy9lYXNpbmdzXCI7XG5cbmNvbnN0IHRyYW5zaXRpb24gPSB7IGVhc2U6IERFRkFVTFRfRUFTRSB9O1xuXG5leHBvcnQgY29uc3QgYmdBbmltYXRpb24gPSB7XG4gIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB0cmFuc2l0aW9uIH0sXG4gIG9wZW5lZDogeyBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbW9kYWxBbmltYXRpb24gPSB7XG4gIGNsb3NlZDogeyB5OiAtMTAwLCB0cmFuc2l0aW9uIH0sXG4gIG9wZW5lZDogeyB5OiAwLCB0cmFuc2l0aW9uIH0sXG4gIGV4aXRlZDogeyB5OiAxMDAsIHRyYW5zaXRpb24gfSxcbn07XG4iXSwibmFtZXMiOlsiREVGQVVMVF9FQVNFIiwidHJhbnNpdGlvbiIsImVhc2UiLCJiZ0FuaW1hdGlvbiIsImNsb3NlZCIsIm9wYWNpdHkiLCJvcGVuZWQiLCJtb2RhbEFuaW1hdGlvbiIsInkiLCJleGl0ZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/components/modal/animations/ModalManager.animations.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./common/components/modal/components/ModalManager.tsx":
/*!*************************************************************!*\
  !*** ./common/components/modal/components/ModalManager.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_recoil_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/recoil/modal */ \"(pages-dir-node)/./common/recoil/modal/index.ts\");\n/* harmony import */ var _portal_components_Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/components/Portal */ \"(pages-dir-node)/./common/components/portal/components/Portal.ts\");\n/* harmony import */ var _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/ModalManager.animations */ \"(pages-dir-node)/./common/components/modal/animations/ModalManager.animations.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst ModalManager = ()=>{\n    const [{ opened, modal }, setModal] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_common_recoil_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const [portalNode, setPortalNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ModalManager.useEffect\": ()=>{\n            if (!portalNode) {\n                const node = document.getElementById(\"portal\");\n                if (node) setPortalNode(node);\n                return;\n            }\n            if (opened) {\n                portalNode.style.pointerEvents = \"all\";\n            } else {\n                portalNode.style.pointerEvents = \"none\";\n            }\n        }\n    }[\"ModalManager.useEffect\"], [\n        opened,\n        portalNode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portal_components_Portal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"absolute z-40 flex min-h-full w-full items-center justify-center bg-black/80\",\n            onClick: ()=>setModal({\n                    modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    opened: false\n                }),\n            variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__.bgAnimation,\n            initial: \"closed\",\n            animate: opened ? \"opened\" : \"closed\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: opened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__.modalAnimation,\n                    initial: \"closed\",\n                    animate: \"opened\",\n                    exit: \"exited\",\n                    onClick: (e)=>e.stopPropagation(),\n                    className: \"p-6\",\n                    children: modal\n                }, void 0, false, {\n                    fileName: \"D:\\\\Real-Time-Collaborative-Whiteboard--main\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Real-Time-Collaborative-Whiteboard--main\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Real-Time-Collaborative-Whiteboard--main\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Real-Time-Collaborative-Whiteboard--main\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalManager);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvTW9kYWxNYW5hZ2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFFWTtBQUNoQjtBQUVNO0FBRU07QUFJTDtBQUUvQyxNQUFNUyxlQUFlO0lBQ25CLE1BQU0sQ0FBQyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxFQUFFQyxTQUFTLEdBQUdSLHNEQUFjQSxDQUFDQyw0REFBU0E7SUFFOUQsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQTtJQUU1Q0QsZ0RBQVNBO2tDQUFDO1lBQ1IsSUFBSSxDQUFDYSxZQUFZO2dCQUNmLE1BQU1FLE9BQU9DLFNBQVNDLGNBQWMsQ0FBQztnQkFDckMsSUFBSUYsTUFBTUQsY0FBY0M7Z0JBQ3hCO1lBQ0Y7WUFFQSxJQUFJTCxRQUFRO2dCQUNWRyxXQUFXSyxLQUFLLENBQUNDLGFBQWEsR0FBRztZQUNuQyxPQUFPO2dCQUNMTixXQUFXSyxLQUFLLENBQUNDLGFBQWEsR0FBRztZQUNuQztRQUNGO2lDQUFHO1FBQUNUO1FBQVFHO0tBQVc7SUFFdkIscUJBQ0UsOERBQUNQLGlFQUFNQTtrQkFDTCw0RUFBQ0gsaURBQU1BLENBQUNpQixHQUFHO1lBQ1RDLFdBQVU7WUFDVkMsU0FBUyxJQUFNVixTQUFTO29CQUFFRCxxQkFBTztvQkFBT0QsUUFBUTtnQkFBTTtZQUN0RGEsVUFBVWhCLDRFQUFXQTtZQUNyQmlCLFNBQVE7WUFDUkMsU0FBU2YsU0FBUyxXQUFXO3NCQUU3Qiw0RUFBQ1IsMERBQWVBOzBCQUNiUSx3QkFDQyw4REFBQ1AsaURBQU1BLENBQUNpQixHQUFHO29CQUNURyxVQUFVZiwrRUFBY0E7b0JBQ3hCZ0IsU0FBUTtvQkFDUkMsU0FBUTtvQkFDUkMsTUFBSztvQkFDTEosU0FBUyxDQUFDSyxJQUFNQSxFQUFFQyxlQUFlO29CQUNqQ1AsV0FBVTs4QkFFVFY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0FBRUEsaUVBQWVGLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxSZWFsLVRpbWUtQ29sbGFib3JhdGl2ZS1XaGl0ZWJvYXJkLS1tYWluXFxjb21tb25cXGNvbXBvbmVudHNcXG1vZGFsXFxjb21wb25lbnRzXFxNb2RhbE1hbmFnZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5cbmltcG9ydCBtb2RhbEF0b20gZnJvbSBcIkAvY29tbW9uL3JlY29pbC9tb2RhbFwiO1xuXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi8uLi9wb3J0YWwvY29tcG9uZW50cy9Qb3J0YWxcIjtcbmltcG9ydCB7XG4gIGJnQW5pbWF0aW9uLFxuICBtb2RhbEFuaW1hdGlvbixcbn0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnNcIjtcblxuY29uc3QgTW9kYWxNYW5hZ2VyID0gKCkgPT4ge1xuICBjb25zdCBbeyBvcGVuZWQsIG1vZGFsIH0sIHNldE1vZGFsXSA9IHVzZVJlY29pbFN0YXRlKG1vZGFsQXRvbSk7XG5cbiAgY29uc3QgW3BvcnRhbE5vZGUsIHNldFBvcnRhbE5vZGVdID0gdXNlU3RhdGU8SFRNTEVsZW1lbnQ+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXBvcnRhbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcnRhbFwiKTtcbiAgICAgIGlmIChub2RlKSBzZXRQb3J0YWxOb2RlKG5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvcGVuZWQpIHtcbiAgICAgIHBvcnRhbE5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcnRhbE5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSwgW29wZW5lZCwgcG9ydGFsTm9kZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBvcnRhbD5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHotNDAgZmxleCBtaW4taC1mdWxsIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2svODBcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbCh7IG1vZGFsOiA8PjwvPiwgb3BlbmVkOiBmYWxzZSB9KX1cbiAgICAgICAgdmFyaWFudHM9e2JnQW5pbWF0aW9ufVxuICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgICAgYW5pbWF0ZT17b3BlbmVkID8gXCJvcGVuZWRcIiA6IFwiY2xvc2VkXCJ9XG4gICAgICA+XG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAge29wZW5lZCAmJiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICB2YXJpYW50cz17bW9kYWxBbmltYXRpb259XG4gICAgICAgICAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgICAgICAgICBhbmltYXRlPVwib3BlbmVkXCJcbiAgICAgICAgICAgICAgZXhpdD1cImV4aXRlZFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTZcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bW9kYWx9XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9Qb3J0YWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbE1hbmFnZXI7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJ1c2VSZWNvaWxTdGF0ZSIsIm1vZGFsQXRvbSIsIlBvcnRhbCIsImJnQW5pbWF0aW9uIiwibW9kYWxBbmltYXRpb24iLCJNb2RhbE1hbmFnZXIiLCJvcGVuZWQiLCJtb2RhbCIsInNldE1vZGFsIiwicG9ydGFsTm9kZSIsInNldFBvcnRhbE5vZGUiLCJub2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwiZXhpdCIsImUiLCJzdG9wUHJvcGFnYXRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/components/modal/components/ModalManager.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./common/components/portal/components/Portal.ts":
/*!*******************************************************!*\
  !*** ./common/components/portal/components/Portal.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Portal = ({ children })=>{\n    const [portal, setPortal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)({\n        \"Portal.useEffect\": ()=>{\n            const node = document.getElementById(\"portal\");\n            if (node) setPortal(node);\n        }\n    }[\"Portal.useEffect\"], []);\n    if (!portal) return null;\n    return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, portal);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9jb21wb25lbnRzL3BvcnRhbC9jb21wb25lbnRzL1BvcnRhbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUVIO0FBRXpDLE1BQU1HLFNBQVMsQ0FBQyxFQUFFQyxRQUFRLEVBQTZDO0lBQ3JFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUE7SUFFcENELGdEQUFTQTs0QkFBQztZQUNSLE1BQU1PLE9BQU9DLFNBQVNDLGNBQWMsQ0FBQztZQUNyQyxJQUFJRixNQUFNRCxVQUFVQztRQUN0QjsyQkFBRyxFQUFFO0lBRUwsSUFBSSxDQUFDRixRQUFRLE9BQU87SUFFcEIsT0FBT0gsdURBQVlBLENBQUNFLFVBQVVDO0FBQ2hDO0FBRUEsaUVBQWVGLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxSZWFsLVRpbWUtQ29sbGFib3JhdGl2ZS1XaGl0ZWJvYXJkLS1tYWluXFxjb21tb25cXGNvbXBvbmVudHNcXHBvcnRhbFxcY29tcG9uZW50c1xcUG9ydGFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5jb25zdCBQb3J0YWwgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10gfSkgPT4ge1xuICBjb25zdCBbcG9ydGFsLCBzZXRQb3J0YWxdID0gdXNlU3RhdGU8SFRNTEVsZW1lbnQ+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0YWxcIik7XG4gICAgaWYgKG5vZGUpIHNldFBvcnRhbChub2RlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghcG9ydGFsKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBwb3J0YWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlUG9ydGFsIiwiUG9ydGFsIiwiY2hpbGRyZW4iLCJwb3J0YWwiLCJzZXRQb3J0YWwiLCJub2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/components/portal/components/Portal.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./common/constants/easings.ts":
/*!*************************************!*\
  !*** ./common/constants/easings.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_EASE: () => (/* binding */ DEFAULT_EASE)\n/* harmony export */ });\nconst DEFAULT_EASE = [\n    0.6,\n    0.01,\n    -0.05,\n    0.9\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9jb25zdGFudHMvZWFzaW5ncy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsZUFBZTtJQUFDO0lBQUs7SUFBTSxDQUFDO0lBQU07Q0FBSSxDQUFDIiwic291cmNlcyI6WyJEOlxcUmVhbC1UaW1lLUNvbGxhYm9yYXRpdmUtV2hpdGVib2FyZC0tbWFpblxcY29tbW9uXFxjb25zdGFudHNcXGVhc2luZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IERFRkFVTFRfRUFTRSA9IFswLjYsIDAuMDEsIC0wLjA1LCAwLjldO1xuIl0sIm5hbWVzIjpbIkRFRkFVTFRfRUFTRSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/constants/easings.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./common/recoil/modal/index.ts":
/*!**************************************!*\
  !*** ./common/recoil/modal/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useModal: () => (/* reexport safe */ _modal_hooks__WEBPACK_IMPORTED_MODULE_1__.useModal)\n/* harmony export */ });\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.atom */ \"(pages-dir-node)/./common/recoil/modal/modal.atom.tsx\");\n/* harmony import */ var _modal_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.hooks */ \"(pages-dir-node)/./common/recoil/modal/modal.hooks.tsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_modal_atom__WEBPACK_IMPORTED_MODULE_0__.modalAtom);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9yZWNvaWwvbW9kYWwvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QztBQUNBO0FBRXpDLGlFQUFlQSxrREFBU0EsRUFBQztBQUVMIiwic291cmNlcyI6WyJEOlxcUmVhbC1UaW1lLUNvbGxhYm9yYXRpdmUtV2hpdGVib2FyZC0tbWFpblxcY29tbW9uXFxyZWNvaWxcXG1vZGFsXFxpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RhbEF0b20gfSBmcm9tIFwiLi9tb2RhbC5hdG9tXCI7XG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gXCIuL21vZGFsLmhvb2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsQXRvbTtcblxuZXhwb3J0IHsgdXNlTW9kYWwgfTtcbiJdLCJuYW1lcyI6WyJtb2RhbEF0b20iLCJ1c2VNb2RhbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/recoil/modal/index.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./common/recoil/modal/modal.atom.tsx":
/*!********************************************!*\
  !*** ./common/recoil/modal/modal.atom.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalAtom: () => (/* binding */ modalAtom)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst modalAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({\n    key: \"modal\",\n    default: {\n        modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        opened: false\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9yZWNvaWwvbW9kYWwvbW9kYWwuYXRvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThCO0FBRXZCLE1BQU1DLFlBQVlELDRDQUFJQSxDQUcxQjtJQUNERSxLQUFLO0lBQ0xDLFNBQVM7UUFDUEMscUJBQU87UUFDUEMsUUFBUTtJQUNWO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsiRDpcXFJlYWwtVGltZS1Db2xsYWJvcmF0aXZlLVdoaXRlYm9hcmQtLW1haW5cXGNvbW1vblxccmVjb2lsXFxtb2RhbFxcbW9kYWwuYXRvbS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcblxuZXhwb3J0IGNvbnN0IG1vZGFsQXRvbSA9IGF0b208e1xuICBtb2RhbDogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdO1xuICBvcGVuZWQ6IGJvb2xlYW47XG59Pih7XG4gIGtleTogXCJtb2RhbFwiLFxuICBkZWZhdWx0OiB7XG4gICAgbW9kYWw6IDw+PC8+LFxuICAgIG9wZW5lZDogZmFsc2UsXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJhdG9tIiwibW9kYWxBdG9tIiwia2V5IiwiZGVmYXVsdCIsIm1vZGFsIiwib3BlbmVkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/recoil/modal/modal.atom.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./common/recoil/modal/modal.hooks.tsx":
/*!*********************************************!*\
  !*** ./common/recoil/modal/modal.hooks.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useModal: () => (/* binding */ useModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.atom */ \"(pages-dir-node)/./common/recoil/modal/modal.atom.tsx\");\n\n\n\nconst useModal = ()=>{\n    const setModal = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_modal_atom__WEBPACK_IMPORTED_MODULE_2__.modalAtom);\n    const openModal = (modal)=>setModal({\n            modal,\n            opened: true\n        });\n    const closeModal = ()=>setModal({\n            modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            opened: false\n        });\n    return {\n        openModal,\n        closeModal\n    };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9yZWNvaWwvbW9kYWwvbW9kYWwuaG9va3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFFRjtBQUV6QyxNQUFNRSxXQUFXO0lBQ2YsTUFBTUMsV0FBV0gseURBQWlCQSxDQUFDQyxrREFBU0E7SUFFNUMsTUFBTUcsWUFBWSxDQUFDQyxRQUNqQkYsU0FBUztZQUFFRTtZQUFPQyxRQUFRO1FBQUs7SUFFakMsTUFBTUMsYUFBYSxJQUFNSixTQUFTO1lBQUVFLHFCQUFPO1lBQU9DLFFBQVE7UUFBTTtJQUVoRSxPQUFPO1FBQUVGO1FBQVdHO0lBQVc7QUFDakM7QUFFb0IiLCJzb3VyY2VzIjpbIkQ6XFxSZWFsLVRpbWUtQ29sbGFib3JhdGl2ZS1XaGl0ZWJvYXJkLS1tYWluXFxjb21tb25cXHJlY29pbFxcbW9kYWxcXG1vZGFsLmhvb2tzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcblxuaW1wb3J0IHsgbW9kYWxBdG9tIH0gZnJvbSBcIi4vbW9kYWwuYXRvbVwiO1xuXG5jb25zdCB1c2VNb2RhbCA9ICgpID0+IHtcbiAgY29uc3Qgc2V0TW9kYWwgPSB1c2VTZXRSZWNvaWxTdGF0ZShtb2RhbEF0b20pO1xuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IChtb2RhbDogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdKSA9PlxuICAgIHNldE1vZGFsKHsgbW9kYWwsIG9wZW5lZDogdHJ1ZSB9KTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWwoeyBtb2RhbDogPD48Lz4sIG9wZW5lZDogZmFsc2UgfSk7XG5cbiAgcmV0dXJuIHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH07XG59O1xuXG5leHBvcnQgeyB1c2VNb2RhbCB9O1xuIl0sIm5hbWVzIjpbInVzZVNldFJlY29pbFN0YXRlIiwibW9kYWxBdG9tIiwidXNlTW9kYWwiLCJzZXRNb2RhbCIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwib3BlbmVkIiwiY2xvc2VNb2RhbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/recoil/modal/modal.hooks.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./common/styles/global.css":
/*!**********************************!*\
  !*** ./common/styles/global.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/styles/global.css */ \"(pages-dir-node)/./common/styles/global.css\");\n/* harmony import */ var _common_styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/components/modal/components/ModalManager */ \"(pages-dir-node)/./common/components/modal/components/ModalManager.tsx\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ \"(pages-dir-node)/./node_modules/react-toastify/dist/ReactToastify.min.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__]);\n_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst App = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"DigiColab | Online Whiteboard\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Real-Time-Collaborative-Whiteboard--main\\\\pages\\\\_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Real-Time-Collaborative-Whiteboard--main\\\\pages\\\\_app.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Real-Time-Collaborative-Whiteboard--main\\\\pages\\\\_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                        fileName: \"D:\\\\Real-Time-Collaborative-Whiteboard--main\\\\pages\\\\_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\Real-Time-Collaborative-Whiteboard--main\\\\pages\\\\_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Real-Time-Collaborative-Whiteboard--main\\\\pages\\\\_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Real-Time-Collaborative-Whiteboard--main\\\\pages\\\\_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUVSO0FBQ21CO0FBQ1o7QUFFeUM7QUFFMUI7QUFFbkQsTUFBTUksTUFBTSxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzdDLHFCQUNFOzswQkFDRSw4REFBQ04sa0RBQUlBOztrQ0FDSCw4REFBQ087a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNSLDhDQUFVQTs7a0NBQ1QsOERBQUNELDBEQUFjQTs7Ozs7a0NBQ2YsOERBQUNFLHdGQUFZQTs7Ozs7a0NBQ2IsOERBQUNFO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxSZWFsLVRpbWUtQ29sbGFib3JhdGl2ZS1XaGl0ZWJvYXJkLS1tYWluXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vY29tbW9uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIjtcblxuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQC9jb21tb24vY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL01vZGFsTWFuYWdlclwiO1xuXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkubWluLmNzc1wiO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRpZ2lDb2xhYiB8IE9ubGluZSBXaGl0ZWJvYXJkPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFJlY29pbFJvb3Q+XG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICA8TW9kYWxNYW5hZ2VyIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUmVjb2lsUm9vdD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiVG9hc3RDb250YWluZXIiLCJSZWNvaWxSb290IiwiTW9kYWxNYW5hZ2VyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();