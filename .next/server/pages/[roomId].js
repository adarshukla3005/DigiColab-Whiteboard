"use strict";
(() => {
var exports = {};
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 13494:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57182);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13162);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44178);
/* harmony import */ var private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17878);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/[roomId]",
        pathname: "/[roomId]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_roomId_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ CANVAS_SIZE)
/* harmony export */ });
const CANVAS_SIZE = {
    width: 4000,
    height: 2000
};


/***/ }),

/***/ 9389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ DEFAULT_MOVE)
/* harmony export */ });
const DEFAULT_MOVE = {
    circle: {
        cX: 0,
        cY: 0,
        radiusX: 0,
        radiusY: 0
    },
    rect: {
        width: 0,
        height: 0
    },
    path: [],
    options: {
        shape: "line",
        mode: "draw",
        lineWidth: 1,
        lineColor: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
        },
        fillColor: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
        },
        selection: null
    },
    id: "",
    img: {
        base64: ""
    },
    timestamp: 0
};


/***/ }),

/***/ 90107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ useViewportSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useViewportSize = ()=>{
    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleResize = ()=>{
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return {
        width,
        height
    };
};


/***/ }),

/***/ 62563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ getPos)
/* harmony export */ });
const getPos = (pos, motionValue)=>pos - motionValue.get();


/***/ }),

/***/ 6111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ optimizeImage)
});

;// CONCATENATED MODULE: external "react-image-file-resizer"
const external_react_image_file_resizer_namespaceObject = require("react-image-file-resizer");
var external_react_image_file_resizer_default = /*#__PURE__*/__webpack_require__.n(external_react_image_file_resizer_namespaceObject);
;// CONCATENATED MODULE: ./common/lib/optimizeImage.ts

const optimizeImage = (file, callback)=>{
    external_react_image_file_resizer_default().imageFileResizer(file, 700, 700, "WEBP", 100, 0, (uri)=>{
        callback(uri.toString());
    }, "base64");
};


/***/ }),

/***/ 10014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ getStringFromRgba)
/* harmony export */ });
const getStringFromRgba = (rgba)=>`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;


/***/ }),

/***/ 10731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ho: () => (/* reexport */ useBackground),
  zt: () => (/* reexport */ useSetBackground)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(29755);
;// CONCATENATED MODULE: ./common/recoil/background/background.atom.ts

const background_atom_backgroundAtom = (0,external_recoil_.atom)({
    key: "bg",
    default: {
        mode: "light",
        lines: true
    }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./common/recoil/background/background.hooks.ts



const useBackground = ()=>{
    const bg = (0,external_recoil_.useRecoilValue)(background_atom_backgroundAtom);
    (0,external_react_.useEffect)(()=>{
        const root = window.document.documentElement;
        if (bg.mode === "dark") {
            root.classList.remove("light");
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
            root.classList.add("light");
        }
    }, [
        bg.mode
    ]);
    return bg;
};
const useSetBackground = ()=>{
    const setBg = (0,external_recoil_.useSetRecoilState)(background_atom_backgroundAtom);
    const setBackground = (mode, lines)=>{
        setBg({
            mode,
            lines
        });
    };
    return setBackground;
};

;// CONCATENATED MODULE: ./common/recoil/background/index.ts


/* harmony default export */ const background = ((/* unused pure expression or super */ null && (backgroundAtom)));



/***/ }),

/***/ 6664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D2: () => (/* reexport safe */ _options_hooks__WEBPACK_IMPORTED_MODULE_1__.D2),
/* harmony export */   Nb: () => (/* reexport safe */ _options_hooks__WEBPACK_IMPORTED_MODULE_1__.Nb),
/* harmony export */   iO: () => (/* reexport safe */ _options_hooks__WEBPACK_IMPORTED_MODULE_1__.iO)
/* harmony export */ });
/* harmony import */ var _options_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(650);
/* harmony import */ var _options_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97626);
/* eslint-disable import/no-cycle */ 

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (optionsAtom)));



/***/ }),

/***/ 650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ optionsAtom)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const optionsAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "options",
    default: {
        lineColor: {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        },
        fillColor: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
        },
        lineWidth: 5,
        mode: "draw",
        shape: "line",
        selection: null
    }
});


/***/ }),

/***/ 97626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D2: () => (/* binding */ useOptions),
/* harmony export */   Nb: () => (/* binding */ useSetSelection),
/* harmony export */   iO: () => (/* binding */ useOptionsValue)
/* harmony export */ });
/* unused harmony export useSetOptions */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _options_atom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(650);


const useOptionsValue = ()=>{
    const options = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(_options_atom__WEBPACK_IMPORTED_MODULE_1__/* .optionsAtom */ .Q);
    return options;
};
const useSetOptions = ()=>{
    const setOptions = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(_options_atom__WEBPACK_IMPORTED_MODULE_1__/* .optionsAtom */ .Q);
    return setOptions;
};
const useOptions = ()=>{
    const options = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(_options_atom__WEBPACK_IMPORTED_MODULE_1__/* .optionsAtom */ .Q);
    return options;
};
const useSetSelection = ()=>{
    const setOptions = useSetOptions();
    const setSelection = (rect)=>{
        setOptions((prev)=>({
                ...prev,
                selection: rect
            }));
    };
    const clearSelection = ()=>{
        setOptions((prev)=>({
                ...prev,
                selection: null
            }));
    };
    return {
        setSelection,
        clearSelection
    };
};


/***/ }),

/***/ 71678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u5: () => (/* reexport */ useSavedMoves),
  c9: () => (/* reexport */ useSetSavedMoves)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(29755);
;// CONCATENATED MODULE: ./common/recoil/savedMoves/savedMoves.atom.ts

const savedMoves_atom_savedMovesAtom = (0,external_recoil_.atom)({
    key: "saved_moves",
    default: []
});

;// CONCATENATED MODULE: ./common/recoil/savedMoves/savedMoves.hooks.ts


const useSetSavedMoves = ()=>{
    const setSavedMoves = (0,external_recoil_.useSetRecoilState)(savedMoves_atom_savedMovesAtom);
    const addSavedMove = (move)=>{
        if (move.options.mode === "select") return;
        setSavedMoves((prevMoves)=>[
                move,
                ...prevMoves
            ]);
    };
    const removeSavedMove = ()=>{
        let move;
        setSavedMoves((prevMoves)=>{
            move = prevMoves.at(0);
            return prevMoves.slice(1);
        });
        return move;
    };
    const clearSavedMoves = ()=>{
        setSavedMoves([]);
    };
    return {
        addSavedMove,
        removeSavedMove,
        clearSavedMoves
    };
};
const useSavedMoves = ()=>{
    const savedMoves = (0,external_recoil_.useRecoilValue)(savedMoves_atom_savedMovesAtom);
    return savedMoves;
};

;// CONCATENATED MODULE: ./common/recoil/savedMoves/index.ts


/* harmony default export */ const savedMoves = ((/* unused pure expression or super */ null && (savedMovesAtom)));



/***/ }),

/***/ 82107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ EntryAnimation)
/* harmony export */ });
/* harmony import */ var _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66694);

const EntryAnimation = {
    from: {
        y: -30,
        opacity: 0,
        transition: {
            ease: _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_EASE */ .n,
            duration: 0.2
        }
    },
    to: {
        y: 0,
        opacity: 1,
        transition: {
            ease: _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_EASE */ .n,
            duration: 0.2
        }
    }
};


/***/ }),

/***/ 21874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99283);
/* harmony import */ var _common_recoil_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14922);
/* harmony import */ var _common_recoil_room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45323);
/* harmony import */ var _modules_home_modals_NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9477);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_lib_socket__WEBPACK_IMPORTED_MODULE_4__]);
_common_lib_socket__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const NameInput = ()=>{
    const setRoomId = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_6__/* .useSetRoomId */ .u4)();
    const { openModal } = (0,_common_recoil_modal__WEBPACK_IMPORTED_MODULE_5__/* .useModal */ .d)();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const roomId = (router.query.roomId || "").toString();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!roomId) return;
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .W.emit("check_room", roomId);
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .W.on("room_exists", (exists)=>{
            if (!exists) {
                router.push("/");
            }
        });
        // eslint-disable-next-line consistent-return
        return ()=>{
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .W.off("room_exists");
        };
    }, [
        roomId,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleJoined = (roomIdFromServer, failed)=>{
            if (failed) {
                router.push("/");
                openModal(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_home_modals_NotFound__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    id: roomIdFromServer
                }));
            } else setRoomId(roomIdFromServer);
        };
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .W.on("joined", handleJoined);
        return ()=>{
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .W.off("joined", handleJoined);
        };
    }, [
        openModal,
        router,
        setRoomId
    ]);
    const handleJoinRoom = (e)=>{
        e.preventDefault();
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .W.emit("join_room", roomId, name);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-4 w-full max-w-md rounded-3xl bg-white p-8 shadow-xl",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "flex flex-col items-center",
                onSubmit: handleJoinRoom,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-6 flex items-center justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary-100",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiEdit3, {
                                className: "h-8 w-8 text-primary-600"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-4xl font-bold text-secondary-800 sm:text-5xl",
                        children: "DigiColab"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "mt-2 text-lg text-secondary-500 sm:text-xl",
                        children: "Real-time whiteboard"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-8 w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "mb-2 block text-sm font-medium text-secondary-700",
                                children: "Enter your name to join"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "w-full rounded-xl border border-gray-200 p-3 shadow-sm focus:border-primary-500 focus:ring-primary-500",
                                id: "room-id",
                                placeholder: "Your name...",
                                value: name,
                                onChange: (e)=>setName(e.target.value.slice(0, 15)),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn mt-6 w-full",
                        type: "submit",
                        disabled: !name.trim(),
                        children: "Join Whiteboard"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NameInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _common_recoil_room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45323);
/* harmony import */ var _context_Room_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60852);
/* harmony import */ var _board_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19664);
/* harmony import */ var _board_MousePosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3646);
/* harmony import */ var _board_MousesRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50716);
/* harmony import */ var _board_MoveImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75676);
/* harmony import */ var _board_SelectionBtns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63046);
/* harmony import */ var _chat_Chat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(579);
/* harmony import */ var _NameInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21874);
/* harmony import */ var _toolbar_ToolBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2145);
/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30685);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_Room_context__WEBPACK_IMPORTED_MODULE_2__, _board_Canvas__WEBPACK_IMPORTED_MODULE_3__, _board_MousePosition__WEBPACK_IMPORTED_MODULE_4__, _board_MousesRenderer__WEBPACK_IMPORTED_MODULE_5__, _board_MoveImage__WEBPACK_IMPORTED_MODULE_6__, _board_SelectionBtns__WEBPACK_IMPORTED_MODULE_7__, _chat_Chat__WEBPACK_IMPORTED_MODULE_8__, _NameInput__WEBPACK_IMPORTED_MODULE_9__, _toolbar_ToolBar__WEBPACK_IMPORTED_MODULE_10__]);
([_context_Room_context__WEBPACK_IMPORTED_MODULE_2__, _board_Canvas__WEBPACK_IMPORTED_MODULE_3__, _board_MousePosition__WEBPACK_IMPORTED_MODULE_4__, _board_MousesRenderer__WEBPACK_IMPORTED_MODULE_5__, _board_MoveImage__WEBPACK_IMPORTED_MODULE_6__, _board_SelectionBtns__WEBPACK_IMPORTED_MODULE_7__, _chat_Chat__WEBPACK_IMPORTED_MODULE_8__, _NameInput__WEBPACK_IMPORTED_MODULE_9__, _toolbar_ToolBar__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Room = ()=>{
    const room = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_1__/* .useRoom */ .NW)();
    if (!room.id) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NameInput__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_Room_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative h-full w-full overflow-hidden bg-gradient-to-br from-secondary-50 to-secondary-100",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 bg-primary-100/5 backdrop-blur-[2px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-full w-full p-4 md:p-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative h-full w-full rounded-3xl bg-white/80 shadow-xl backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserList__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_toolbar_ToolBar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_board_SelectionBtns__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_board_MoveImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_board_Canvas__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_board_MousePosition__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_board_MousesRenderer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chat_Chat__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Room);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _common_recoil_room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45323);


const UserList = ()=>{
    const room = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_1__/* .useRoom */ .NW)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute right-5 top-5 z-50 flex flex-col items-end gap-2",
        children: [
            ...room.users.entries()
        ].map(([userId, user])=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-md backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-sm font-medium text-secondary-800",
                        children: user.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-3 w-3 rounded-full",
                        style: {
                            background: user.color
                        }
                    })
                ]
            }, userId))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);


/***/ }),

/***/ 29492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9252);
/* harmony import */ var _common_recoil_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10731);
/* harmony import */ var _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Background = ({ bgRef })=>{
    const bg = (0,_common_recoil_background__WEBPACK_IMPORTED_MODULE_4__/* .useBackground */ .ho)();
    const { x, y } = (0,_hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_5__/* .useBoardPosition */ .R)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const ctx = bgRef.current?.getContext("2d");
        if (ctx) {
            // Set background color based on mode
            const bgColor = bg.mode === "dark" ? "#1e293b" : "#f8fafc";
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__/* .CANVAS_SIZE */ .h.width, _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__/* .CANVAS_SIZE */ .h.height);
            document.body.style.backgroundColor = bgColor;
            if (bg.lines) {
                // Draw grid lines with a more subtle appearance
                ctx.lineWidth = 1;
                // Subtle grid lines based on mode
                const lineColor = bg.mode === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)";
                ctx.strokeStyle = lineColor;
                // Draw horizontal lines
                for(let i = 0; i < _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__/* .CANVAS_SIZE */ .h.height; i += 25){
                    ctx.beginPath();
                    ctx.moveTo(0, i);
                    ctx.lineTo(ctx.canvas.width, i);
                    ctx.stroke();
                }
                // Draw vertical lines
                for(let i = 0; i < _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__/* .CANVAS_SIZE */ .h.width; i += 25){
                    ctx.beginPath();
                    ctx.moveTo(i, 0);
                    ctx.lineTo(i, ctx.canvas.height);
                    ctx.stroke();
                }
                // Add subtle dots at intersections for a more modern look
                const dotColor = bg.mode === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.09)";
                ctx.fillStyle = dotColor;
                for(let x = 0; x < _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__/* .CANVAS_SIZE */ .h.width; x += 25){
                    for(let y = 0; y < _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__/* .CANVAS_SIZE */ .h.height; y += 25){
                        ctx.beginPath();
                        ctx.arc(x, y, 1, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
        }
    }, [
        bgRef,
        bg
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.canvas, {
        ref: bgRef,
        width: _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__/* .CANVAS_SIZE */ .h.width,
        height: _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__/* .CANVAS_SIZE */ .h.height,
        className: "absolute top-0 rounded-lg shadow-inner-lg",
        style: {
            x,
            y
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9252);
/* harmony import */ var _common_hooks_useViewportSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90107);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99283);
/* harmony import */ var _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99616);
/* harmony import */ var _hooks_useCtx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72858);
/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25860);
/* harmony import */ var _hooks_useMovesHandlers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40026);
/* harmony import */ var _hooks_useRefs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4538);
/* harmony import */ var _hooks_useSocketDraw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62974);
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29492);
/* harmony import */ var _Minimap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12516);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _common_lib_socket__WEBPACK_IMPORTED_MODULE_6__, _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_7__, _hooks_useCtx__WEBPACK_IMPORTED_MODULE_8__, _hooks_useDraw__WEBPACK_IMPORTED_MODULE_9__, _hooks_useMovesHandlers__WEBPACK_IMPORTED_MODULE_10__, _hooks_useRefs__WEBPACK_IMPORTED_MODULE_11__, _hooks_useSocketDraw__WEBPACK_IMPORTED_MODULE_12__, _Background__WEBPACK_IMPORTED_MODULE_13__, _Minimap__WEBPACK_IMPORTED_MODULE_14__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _common_lib_socket__WEBPACK_IMPORTED_MODULE_6__, _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_7__, _hooks_useCtx__WEBPACK_IMPORTED_MODULE_8__, _hooks_useDraw__WEBPACK_IMPORTED_MODULE_9__, _hooks_useMovesHandlers__WEBPACK_IMPORTED_MODULE_10__, _hooks_useRefs__WEBPACK_IMPORTED_MODULE_11__, _hooks_useSocketDraw__WEBPACK_IMPORTED_MODULE_12__, _Background__WEBPACK_IMPORTED_MODULE_13__, _Minimap__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Canvas = ()=>{
    const { canvasRef, bgRef, undoRef, redoRef } = (0,_hooks_useRefs__WEBPACK_IMPORTED_MODULE_11__/* .useRefs */ .v)();
    const { width, height } = (0,_common_hooks_useViewportSize__WEBPACK_IMPORTED_MODULE_5__/* .useViewportSize */ .n)();
    const { x, y } = (0,_hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_7__/* .useBoardPosition */ .R)();
    const ctx = (0,_hooks_useCtx__WEBPACK_IMPORTED_MODULE_8__/* .useCtx */ .e)();
    const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { handleEndDrawing, handleDraw, handleStartDrawing, drawing, clearOnYourMove } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_9__/* .useDraw */ .r)(dragging);
    (0,_hooks_useSocketDraw__WEBPACK_IMPORTED_MODULE_12__/* .useSocketDraw */ .p)(drawing);
    const { handleUndo, handleRedo } = (0,_hooks_useMovesHandlers__WEBPACK_IMPORTED_MODULE_10__/* .useMovesHandlers */ .N)(clearOnYourMove);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setDragging(false);
    }, []);
    // SETUP
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleKey = (e)=>{
            setDragging(e.ctrlKey);
        };
        window.addEventListener("keyup", handleKey);
        window.addEventListener("keydown", handleKey);
        const undoBtn = undoRef.current;
        const redoBtn = redoRef.current;
        undoBtn?.addEventListener("click", handleUndo);
        redoBtn?.addEventListener("click", handleRedo);
        return ()=>{
            window.removeEventListener("keyup", handleKey);
            window.removeEventListener("keydown", handleKey);
            undoBtn?.removeEventListener("click", handleUndo);
            redoBtn?.removeEventListener("click", handleRedo);
        };
    }, [
        canvasRef,
        dragging,
        handleRedo,
        handleUndo,
        redoRef,
        undoRef
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (ctx) _common_lib_socket__WEBPACK_IMPORTED_MODULE_6__/* .socket */ .W.emit("joined_room");
    }, [
        ctx
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative h-full w-full overflow-hidden canvas-container p-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.canvas, {
                // SETTINGS
                ref: canvasRef,
                width: _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_4__/* .CANVAS_SIZE */ .h.width,
                height: _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_4__/* .CANVAS_SIZE */ .h.height,
                className: `absolute top-0 z-10 ${dragging && "cursor-move"} rounded-lg shadow-md`,
                style: {
                    x,
                    y
                },
                // DRAG
                drag: dragging,
                dragConstraints: {
                    left: -(_common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_4__/* .CANVAS_SIZE */ .h.width - width),
                    right: 0,
                    top: -(_common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_4__/* .CANVAS_SIZE */ .h.height - height),
                    bottom: 0
                },
                dragElastic: 0,
                dragTransition: {
                    power: 0,
                    timeConstant: 0
                },
                // HANDLERS
                onMouseDown: (e)=>handleStartDrawing(e.clientX, e.clientY),
                onMouseUp: handleEndDrawing,
                onMouseMove: (e)=>{
                    handleDraw(e.clientX, e.clientY, e.shiftKey);
                },
                onTouchStart: (e)=>handleStartDrawing(e.changedTouches[0].clientX, e.changedTouches[0].clientY),
                onTouchEnd: handleEndDrawing,
                onTouchMove: (e)=>handleDraw(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Background__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                bgRef: bgRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Minimap__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                dragging: dragging
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `absolute bottom-14 right-5 z-10 rounded-full md:bottom-5 ${dragging ? "bg-accent-500 shadow-lg" : "bg-primary-200 text-primary-800"} p-3 text-lg text-white transition-all hover:shadow-md`,
                onClick: ()=>setDragging((prev)=>!prev),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsArrowsMove, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12516:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9252);
/* harmony import */ var _common_hooks_useViewportSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90107);
/* harmony import */ var _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99616);
/* harmony import */ var _hooks_useRefs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_5__, _hooks_useRefs__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_5__, _hooks_useRefs__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const MiniMap = ({ dragging })=>{
    const { minimapRef } = (0,_hooks_useRefs__WEBPACK_IMPORTED_MODULE_6__/* .useRefs */ .v)();
    const boardPos = (0,_hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_5__/* .useBoardPosition */ .R)();
    const { width, height } = (0,_common_hooks_useViewportSize__WEBPACK_IMPORTED_MODULE_4__/* .useViewportSize */ .n)();
    const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [y, setY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [draggingMinimap, setDraggingMinimap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!draggingMinimap) {
            const unsubscribe = boardPos.x.onChange(setX);
            return unsubscribe;
        }
        return ()=>{};
    }, [
        boardPos.x,
        draggingMinimap
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!draggingMinimap) {
            const unsubscribe = boardPos.y.onChange(setY);
            return unsubscribe;
        }
        return ()=>{};
    }, [
        boardPos.y,
        draggingMinimap
    ]);
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const miniX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    const miniY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    const divider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (width > 1600) return 7;
        if (width > 1000) return 10;
        if (width > 600) return 14;
        return 20;
    }, [
        width
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        miniX.onChange((newX)=>{
            if (!dragging) boardPos.x.set(Math.floor(-newX * divider));
        });
        miniY.onChange((newY)=>{
            if (!dragging) boardPos.y.set(Math.floor(-newY * divider));
        });
        return ()=>{
            miniX.clearListeners();
            miniY.clearListeners();
        };
    }, [
        boardPos.x,
        boardPos.y,
        divider,
        dragging,
        miniX,
        miniY
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "absolute right-10 top-10 z-30 overflow-hidden rounded-xl bg-white/90 shadow-lg backdrop-blur-sm",
        style: {
            width: _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__/* .CANVAS_SIZE */ .h.width / divider,
            height: _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__/* .CANVAS_SIZE */ .h.height / divider,
            padding: "2px",
            border: "1px solid rgba(203, 213, 225, 0.5)"
        },
        ref: containerRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                ref: minimapRef,
                width: _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__/* .CANVAS_SIZE */ .h.width,
                height: _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_3__/* .CANVAS_SIZE */ .h.height,
                className: "h-full w-full rounded-lg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                drag: true,
                dragConstraints: containerRef,
                dragElastic: 0,
                dragTransition: {
                    power: 0,
                    timeConstant: 0
                },
                onDragStart: ()=>setDraggingMinimap(true),
                onDragEnd: ()=>setDraggingMinimap(false),
                className: "absolute top-0 left-0 cursor-grab rounded-lg border-2 border-primary-500 bg-primary-100/20",
                style: {
                    width: width / divider,
                    height: height / divider,
                    x: miniX,
                    y: miniY
                },
                animate: {
                    x: -x / divider,
                    y: -y / divider
                },
                transition: {
                    duration: 0
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniMap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_lib_getPos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62563);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99283);
/* harmony import */ var _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__, _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__, _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const MousePosition = ()=>{
    const { x, y } = (0,_hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_5__/* .useBoardPosition */ .R)();
    const prevPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        x: 0,
        y: 0
    });
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { docX, docY } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__.useMouse)(ref);
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;
    (0,react_use__WEBPACK_IMPORTED_MODULE_3__.useInterval)(()=>{
        if ((prevPosition.current.x !== docX || prevPosition.current.y !== docY) && !touchDevice) {
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .W.emit("mouse_move", (0,_common_lib_getPos__WEBPACK_IMPORTED_MODULE_6__/* .getPos */ .l)(docX, x), (0,_common_lib_getPos__WEBPACK_IMPORTED_MODULE_6__/* .getPos */ .l)(docY, y));
            prevPosition.current = {
                x: docX,
                y: docY
            };
        }
    }, 150);
    if (touchDevice) return null;
    const posX = (0,_common_lib_getPos__WEBPACK_IMPORTED_MODULE_6__/* .getPos */ .l)(docX, x).toFixed(0);
    const posY = (0,_common_lib_getPos__WEBPACK_IMPORTED_MODULE_6__/* .getPos */ .l)(docY, y).toFixed(0);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        ref: ref,
        className: "pointer-events-none absolute top-0 left-0 z-50 select-none transition-colors",
        animate: {
            x: docX + 15,
            y: docY + 15
        },
        transition: {
            duration: 0.05,
            ease: "linear"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-secondary-800 shadow-sm backdrop-blur-sm",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-primary-600",
                    children: posX
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "mx-1 text-secondary-400",
                    children: "|"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-primary-600",
                    children: posY
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MousePosition);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99283);
/* harmony import */ var _common_recoil_room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45323);
/* harmony import */ var _UserMouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58727);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_lib_socket__WEBPACK_IMPORTED_MODULE_1__, _UserMouse__WEBPACK_IMPORTED_MODULE_3__]);
([_common_lib_socket__WEBPACK_IMPORTED_MODULE_1__, _UserMouse__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const MousesRenderer = ()=>{
    const { users } = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_2__/* .useRoom */ .NW)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            ...users.keys()
        ].map((userId)=>{
            if (userId === _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__/* .socket */ .W.id) return null;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserMouse__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                userId: userId
            }, userId);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MousesRenderer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75676:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constants_defaultMove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9389);
/* harmony import */ var _common_lib_getPos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62563);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99283);
/* harmony import */ var _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99616);
/* harmony import */ var _hooks_useMoveImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3298);
/* harmony import */ var _hooks_useRefs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__, _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_6__, _hooks_useMoveImage__WEBPACK_IMPORTED_MODULE_7__, _hooks_useRefs__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__, _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_6__, _hooks_useMoveImage__WEBPACK_IMPORTED_MODULE_7__, _hooks_useRefs__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const MoveImage = ()=>{
    const { canvasRef } = (0,_hooks_useRefs__WEBPACK_IMPORTED_MODULE_8__/* .useRefs */ .v)();
    const { x, y } = (0,_hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_6__/* .useBoardPosition */ .R)();
    const { moveImage, setMoveImage } = (0,_hooks_useMoveImage__WEBPACK_IMPORTED_MODULE_7__/* .useMoveImage */ .E)();
    const imageX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(moveImage.x || 50);
    const imageY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(moveImage.y || 50);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (moveImage.x) imageX.set(moveImage.x);
        else imageX.set(50);
        if (moveImage.y) imageY.set(moveImage.y);
        else imageY.set(50);
    }, [
        imageX,
        imageY,
        moveImage.x,
        moveImage.y
    ]);
    const handlePlaceImage = ()=>{
        const [finalX, finalY] = [
            (0,_common_lib_getPos__WEBPACK_IMPORTED_MODULE_9__/* .getPos */ .l)(imageX.get(), x),
            (0,_common_lib_getPos__WEBPACK_IMPORTED_MODULE_9__/* .getPos */ .l)(imageY.get(), y)
        ];
        const move = {
            ..._common_constants_defaultMove__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_MOVE */ .z,
            img: {
                base64: moveImage.base64
            },
            path: [
                [
                    finalX,
                    finalY
                ]
            ],
            options: {
                ..._common_constants_defaultMove__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_MOVE */ .z.options,
                selection: null,
                shape: "image"
            }
        };
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__/* .socket */ .W.emit("draw", move);
        setMoveImage({
            base64: ""
        });
        imageX.set(50);
        imageY.set(50);
    };
    if (!moveImage.base64) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        drag: true,
        dragConstraints: canvasRef,
        dragElastic: 0,
        dragTransition: {
            power: 0.03,
            timeConstant: 50
        },
        className: "absolute top-0 z-20 cursor-grab",
        style: {
            x: imageX,
            y: imageY
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute bottom-full mb-2 flex gap-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "rounded-full bg-gray-200 p-2",
                        onClick: handlePlaceImage,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineCheck, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "rounded-full bg-gray-200 p-2",
                        onClick: ()=>setMoveImage({
                                base64: ""
                            }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineClose, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: "pointer-events-none",
                alt: "image to place",
                src: moveImage.base64
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoveImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_recoil_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6664);
/* harmony import */ var _hooks_useRefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useRefs__WEBPACK_IMPORTED_MODULE_5__]);
_hooks_useRefs__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SelectionBtns = ()=>{
    const { selection } = (0,_common_recoil_options__WEBPACK_IMPORTED_MODULE_4__/* .useOptionsValue */ .iO)();
    const { selectionRefs } = (0,_hooks_useRefs__WEBPACK_IMPORTED_MODULE_5__/* .useRefs */ .v)();
    let top;
    let left;
    if (selection) {
        const { x, y, width, height } = selection;
        top = Math.min(y, y + height) - 50;
        left = Math.min(x, x + width);
    } else {
        left = -100;
        top = -100;
    }
    const buttons = [
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsArrowsMove, {}),
            title: "Move",
            index: 0
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiCopy, {}),
            title: "Copy",
            index: 1
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineDelete, {}),
            title: "Delete",
            index: 2
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute top-0 left-0 z-50 flex items-center justify-center gap-2 transition-all duration-200",
        style: {
            top,
            left
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex gap-1 rounded-full bg-white/90 p-1 shadow-lg backdrop-blur-sm",
            children: buttons.map((button)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn-icon h-8 w-8 bg-transparent text-secondary-700 hover:bg-primary-50",
                    ref: (ref)=>{
                        if (ref && selectionRefs.current) selectionRefs.current[button.index] = ref;
                    },
                    title: button.title,
                    children: button.icon
                }, button.index))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectionBtns);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58727:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99283);
/* harmony import */ var _common_recoil_room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45323);
/* harmony import */ var _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__, _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__, _hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const UserMouse = ({ userId })=>{
    const { users } = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_5__/* .useRoom */ .NW)();
    const boardPos = (0,_hooks_useBoardPosition__WEBPACK_IMPORTED_MODULE_6__/* .useBoardPosition */ .R)();
    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(boardPos.x.get());
    const [y, setY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(boardPos.y.get());
    const [pos, setPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        x: -1,
        y: -1
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .W.on("mouse_moved", (newX, newY, socketIdMoved)=>{
            if (socketIdMoved === userId) {
                setPos({
                    x: newX,
                    y: newY
                });
            }
        });
        const handleNewMsg = (msgUserId, newMsg)=>{
            if (msgUserId === userId) {
                setMsg(newMsg);
                setTimeout(()=>{
                    setMsg("");
                }, 3000);
            }
        };
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .W.on("new_msg", handleNewMsg);
        return ()=>{
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .W.off("mouse_moved");
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .W.off("new_msg", handleNewMsg);
        };
    }, [
        userId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = boardPos.x.onChange(setX);
        return unsubscribe;
    }, [
        boardPos.x
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = boardPos.y.onChange(setY);
        return unsubscribe;
    }, [
        boardPos.y
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: `pointer-events-none absolute top-0 left-0 z-20 text-blue-800 ${pos.x === -1 && "hidden"}`,
        style: {
            color: users.get(userId)?.color
        },
        animate: {
            x: pos.x + x,
            y: pos.y + y
        },
        transition: {
            duration: 0.2,
            ease: "linear"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsCursorFill, {
                className: "-rotate-90"
            }),
            msg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "absolute top-full left-5 max-h-20 max-w-[15rem] overflow-hidden text-ellipsis rounded-md bg-zinc-900 p-1 px-3 text-white",
                children: msg
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "ml-2",
                children: users.get(userId)?.name || "Anonymous"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserMouse);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 579:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_constants_easings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66694);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99283);
/* harmony import */ var _common_recoil_room__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45323);
/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48259);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68661);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _common_lib_socket__WEBPACK_IMPORTED_MODULE_6__, _ChatInput__WEBPACK_IMPORTED_MODULE_8__, _Message__WEBPACK_IMPORTED_MODULE_9__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _common_lib_socket__WEBPACK_IMPORTED_MODULE_6__, _ChatInput__WEBPACK_IMPORTED_MODULE_8__, _Message__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Chat = ()=>{
    const room = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_7__/* .useRoom */ .NW)();
    const msgList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [newMsg, setNewMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [msgs, handleMsgs] = (0,react_use__WEBPACK_IMPORTED_MODULE_5__.useList)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleNewMsg = (userId, msg)=>{
            const user = room.users.get(userId);
            handleMsgs.push({
                userId,
                msg,
                id: msgs.length + 1,
                username: user?.name || "Anonymous",
                color: user?.color || "#000"
            });
            msgList.current?.scroll({
                top: msgList.current?.scrollHeight
            });
            if (!opened) setNewMsg(true);
        };
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_6__/* .socket */ .W.on("new_msg", handleNewMsg);
        return ()=>{
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_6__/* .socket */ .W.off("new_msg", handleNewMsg);
        };
    }, [
        handleMsgs,
        msgs,
        opened,
        room.users
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute bottom-0 z-50 flex h-[300px] w-full flex-col overflow-hidden rounded-t-xl shadow-xl sm:left-36 sm:w-[30rem]",
        animate: {
            y: opened ? 0 : 260
        },
        transition: {
            ease: _common_constants_easings__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_EASE */ .n,
            duration: 0.2
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "flex w-full cursor-pointer items-center justify-between bg-primary-600 py-3 px-6 font-medium text-white",
                onClick: ()=>{
                    setOpened((prev)=>!prev);
                    setNewMsg(false);
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsChatSquareFill, {
                                className: "text-primary-200"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm",
                                children: "Team Chat"
                            }),
                            newMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "flex h-5 w-5 items-center justify-center rounded-full bg-accent-400 text-xs font-semibold text-white",
                                children: "!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        animate: {
                            rotate: opened ? 0 : 180
                        },
                        transition: {
                            ease: _common_constants_easings__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_EASE */ .n,
                            duration: 0.2
                        },
                        className: "text-primary-200",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaChevronDown, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-1 flex-col justify-between bg-white p-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "h-[190px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent",
                        ref: msgList,
                        children: [
                            msgs.map((msg)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    ...msg
                                }, msg.id)),
                            msgs.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex h-full items-center justify-center text-sm text-secondary-400",
                                children: "No messages yet. Start the conversation!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99283);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_lib_socket__WEBPACK_IMPORTED_MODULE_3__]);
_common_lib_socket__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ChatInput = ()=>{
    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!msg.trim()) return;
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_3__/* .socket */ .W.emit("send_msg", msg);
        setMsg("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "flex w-full items-center gap-2 mt-2",
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "w-full rounded-full border border-gray-200 py-2 px-4 text-sm shadow-sm focus:border-primary-400 focus:ring-primary-400",
                value: msg,
                onChange: (e)=>setMsg(e.target.value),
                placeholder: "Type your message..."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn-icon h-10 w-10 bg-primary-600 text-white disabled:bg-primary-300",
                type: "submit",
                disabled: !msg.trim(),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoSendSharp, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99283);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_lib_socket__WEBPACK_IMPORTED_MODULE_1__]);
_common_lib_socket__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Message = ({ userId, msg, username, color })=>{
    const me = _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__/* .socket */ .W.id === userId;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `my-2 flex flex-col ${me ? "items-end" : "items-start"}`,
        children: [
            !me && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-1.5 mb-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-2.5 w-2.5 rounded-full",
                        style: {
                            backgroundColor: color
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "text-xs font-medium text-secondary-600",
                        children: username
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `max-w-[85%] rounded-xl px-3 py-2 text-sm ${me ? "bg-primary-100 text-primary-800" : "bg-secondary-100 text-secondary-800"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    style: {
                        wordBreak: "break-all"
                    },
                    children: msg
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ BackgoundPicker)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "react-icons/cg"
var cg_ = __webpack_require__(27865);
// EXTERNAL MODULE: ./common/recoil/modal/index.ts + 2 modules
var modal = __webpack_require__(14922);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(99847);
// EXTERNAL MODULE: ./common/recoil/background/index.ts + 2 modules
var background = __webpack_require__(10731);
;// CONCATENATED MODULE: ./modules/room/modals/BackgroundModal.tsx





const BackgroundModal = ()=>{
    const { closeModal } = (0,modal/* useModal */.d)();
    const setBackground = (0,background/* useSetBackground */.zt)();
    const bg = (0,background/* useBackground */.ho)();
    (0,external_react_.useEffect)(()=>closeModal, [
        bg,
        closeModal
    ]);
    const renderBg = (ref, mode, lines)=>{
        const ctx = ref?.getContext("2d");
        if (ctx) {
            ctx.fillStyle = mode === "dark" ? "#222" : "#fff";
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            if (lines) {
                ctx.lineWidth = 1;
                ctx.strokeStyle = mode === "dark" ? "#444" : "#ddd";
                for(let i = 0; i < ctx.canvas.height; i += 10){
                    ctx.beginPath();
                    ctx.moveTo(0, i);
                    ctx.lineTo(ctx.canvas.width, i);
                    ctx.stroke();
                }
                for(let i = 0; i < ctx.canvas.width; i += 10){
                    ctx.beginPath();
                    ctx.moveTo(i, 0);
                    ctx.lineTo(i, ctx.canvas.height);
                    ctx.stroke();
                }
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative flex flex-col items-center rounded-md bg-white p-10",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                onClick: closeModal,
                className: "absolute top-5 right-5",
                children: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineClose, {})
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                className: "mb-4 text-2xl font-bold",
                children: "Choose background"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid gap-5 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("canvas", {
                        className: "h-48 w-64 cursor-pointer rounded-md border-2",
                        tabIndex: 0,
                        width: 256,
                        height: 192,
                        onClick: ()=>setBackground("dark", true),
                        ref: (ref)=>renderBg(ref, "dark", true)
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("canvas", {
                        className: "h-48 w-64 cursor-pointer rounded-md border-2",
                        tabIndex: 0,
                        width: 256,
                        height: 192,
                        onClick: ()=>setBackground("light", true),
                        ref: (ref)=>renderBg(ref, "light", true)
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("canvas", {
                        className: "h-48 w-64 cursor-pointer rounded-md border-2",
                        tabIndex: 0,
                        width: 256,
                        height: 192,
                        onClick: ()=>setBackground("dark", false),
                        ref: (ref)=>renderBg(ref, "dark", false)
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("canvas", {
                        className: "h-48 w-64 cursor-pointer rounded-md border-2",
                        tabIndex: 0,
                        width: 256,
                        height: 192,
                        onClick: ()=>setBackground("light", false),
                        ref: (ref)=>renderBg(ref, "light", false)
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const modals_BackgroundModal = (BackgroundModal);

;// CONCATENATED MODULE: ./modules/room/components/toolbar/BackgoundPicker.tsx




const BackgroundPicker = ()=>{
    const { openModal } = (0,modal/* useModal */.d)();
    return /*#__PURE__*/ jsx_runtime.jsx("button", {
        className: "btn-icon",
        onClick: ()=>openModal(/*#__PURE__*/ jsx_runtime.jsx(modals_BackgroundModal, {})),
        children: /*#__PURE__*/ jsx_runtime.jsx(cg_.CgScreen, {})
    });
};
/* harmony default export */ const BackgoundPicker = (BackgroundPicker);


/***/ }),

/***/ 13178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var react_colorful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69559);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_recoil_options_options_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97626);
/* harmony import */ var _animations_Entry_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82107);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, react_colorful__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, react_colorful__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ColorPicker = ()=>{
    const [options, setOptions] = (0,_common_recoil_options_options_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useOptions */ .D2)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react_use__WEBPACK_IMPORTED_MODULE_5__.useClickAway)(ref, ()=>setOpened(false));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center",
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "btn-icon relative",
                onClick: ()=>setOpened(!opened),
                disabled: options.mode === "select",
                title: "Color Picker",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoColorPaletteOutline, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute bottom-0 right-0 h-3 w-3 rounded-full border border-white",
                        style: {
                            backgroundColor: `rgba(${options.lineColor.r}, ${options.lineColor.g}, ${options.lineColor.b}, ${options.lineColor.a})`
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                children: opened && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: "absolute left-10 mt-24 rounded-xl bg-white p-4 shadow-xl sm:left-14",
                    variants: _animations_Entry_animations__WEBPACK_IMPORTED_MODULE_7__/* .EntryAnimation */ .y,
                    initial: "from",
                    animate: "to",
                    exit: "from",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "mb-2 text-sm font-medium text-secondary-700",
                                    children: "Line Color"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_colorful__WEBPACK_IMPORTED_MODULE_3__.RgbaColorPicker, {
                                    color: options.lineColor,
                                    onChange: (e)=>{
                                        setOptions({
                                            ...options,
                                            lineColor: e
                                        });
                                    },
                                    className: "mb-2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-1 h-6 w-full rounded-md border border-gray-200",
                                    style: {
                                        backgroundColor: `rgba(${options.lineColor.r}, ${options.lineColor.g}, ${options.lineColor.b}, ${options.lineColor.a})`
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border-t border-gray-100 pt-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "mb-2 text-sm font-medium text-secondary-700",
                                    children: "Fill Color"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_colorful__WEBPACK_IMPORTED_MODULE_3__.RgbaColorPicker, {
                                    color: options.fillColor,
                                    onChange: (e)=>{
                                        setOptions({
                                            ...options,
                                            fillColor: e
                                        });
                                    },
                                    className: "mb-2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-1 h-6 w-full rounded-md border border-gray-200",
                                    style: {
                                        backgroundColor: `rgba(${options.fillColor.r}, ${options.fillColor.g}, ${options.fillColor.b}, ${options.fillColor.a})`
                                    }
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorPicker);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_recoil_room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45323);
/* harmony import */ var _common_recoil_savedMoves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71678);
/* harmony import */ var _hooks_useRefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useRefs__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_useRefs__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const HistoryBtns = ()=>{
    const { redoRef, undoRef } = (0,_hooks_useRefs__WEBPACK_IMPORTED_MODULE_4__/* .useRefs */ .v)();
    const { myMoves } = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_2__/* .useMyMoves */ .av)();
    const savedMoves = (0,_common_recoil_savedMoves__WEBPACK_IMPORTED_MODULE_3__/* .useSavedMoves */ .u5)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full justify-center gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn-icon text-xl",
                ref: undoRef,
                disabled: !myMoves.length,
                title: "Undo",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaUndo, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn-icon text-xl",
                ref: redoRef,
                disabled: !savedMoves.length,
                title: "Redo",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaRedo, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoryBtns);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11431:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_lib_optimizeImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6111);
/* harmony import */ var _hooks_useMoveImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3298);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useMoveImage__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_useMoveImage__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ImagePicker = ()=>{
    const { setMoveImage } = (0,_hooks_useMoveImage__WEBPACK_IMPORTED_MODULE_4__/* .useMoveImage */ .E)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handlePaste = (e)=>{
            const items = e.clipboardData?.items;
            if (items) {
                // eslint-disable-next-line no-restricted-syntax
                for (const item of items){
                    if (item.type.includes("image")) {
                        const file = item.getAsFile();
                        if (file) (0,_common_lib_optimizeImage__WEBPACK_IMPORTED_MODULE_3__/* .optimizeImage */ .H)(file, (uri)=>setMoveImage({
                                base64: uri
                            }));
                    }
                }
            }
        };
        document.addEventListener("paste", handlePaste);
        return ()=>{
            document.removeEventListener("paste", handlePaste);
        };
    }, [
        setMoveImage
    ]);
    const handleImageInput = ()=>{
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.click();
        fileInput.addEventListener("change", ()=>{
            if (fileInput && fileInput.files) {
                const file = fileInput.files[0];
                (0,_common_lib_optimizeImage__WEBPACK_IMPORTED_MODULE_3__/* .optimizeImage */ .H)(file, (uri)=>setMoveImage({
                        base64: uri
                    }));
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "btn-icon text-xl",
        onClick: handleImageInput,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsFillImageFill, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagePicker);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50905:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44152);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_tb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_recoil_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6664);
/* harmony import */ var _animations_Entry_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82107);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const LineWidthPicker = ()=>{
    const [options, setOptions] = (0,_common_recoil_options__WEBPACK_IMPORTED_MODULE_5__/* .useOptions */ .D2)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react_use__WEBPACK_IMPORTED_MODULE_4__.useClickAway)(ref, ()=>setOpened(false));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center",
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "btn-icon relative",
                onClick: ()=>setOpened(!opened),
                disabled: options.mode === "select",
                title: "Line Width",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_3__.TbLine, {
                        className: "rotate-45",
                        strokeWidth: options.lineWidth > 10 ? 3 : options.lineWidth > 5 ? 2 : 1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary-100 text-[8px] font-semibold text-primary-800",
                        children: options.lineWidth
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                children: opened && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: "absolute top-[6px] left-14 w-48 rounded-xl bg-white p-4 shadow-xl",
                    variants: _animations_Entry_animations__WEBPACK_IMPORTED_MODULE_6__/* .EntryAnimation */ .y,
                    initial: "from",
                    animate: "to",
                    exit: "from",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "mb-2 text-sm font-medium text-secondary-700",
                            children: [
                                "Line Width: ",
                                options.lineWidth,
                                "px"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xs text-secondary-500",
                                    children: "1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "range",
                                    min: 1,
                                    max: 20,
                                    value: options.lineWidth,
                                    onChange: (e)=>setOptions((prev)=>({
                                                ...prev,
                                                lineWidth: parseInt(e.target.value, 10)
                                            })),
                                    className: "h-2 w-full cursor-pointer appearance-none rounded-lg bg-primary-100"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xs text-secondary-500",
                                    children: "20"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-3 flex justify-between",
                            children: [
                                2,
                                5,
                                10,
                                15
                            ].map((width)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: `h-8 w-8 rounded-md ${options.lineWidth === width ? "bg-primary-100 text-primary-800" : "bg-gray-100 text-secondary-600"}`,
                                    onClick: ()=>setOptions((prev)=>({
                                                ...prev,
                                                lineWidth: width
                                            })),
                                    children: width
                                }, width))
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineWidthPicker);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_recoil_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6664);






const ModePicker = ()=>{
    const [options, setOptions] = (0,_common_recoil_options__WEBPACK_IMPORTED_MODULE_5__/* .useOptions */ .D2)();
    const { clearSelection } = (0,_common_recoil_options__WEBPACK_IMPORTED_MODULE_5__/* .useSetSelection */ .Nb)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        clearSelection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        options.mode
    ]);
    const modes = [
        {
            id: "draw",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsPencilFill, {}),
            title: "Draw"
        },
        {
            id: "eraser",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaEraser, {}),
            title: "Eraser"
        },
        {
            id: "select",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineSelect, {
                className: "text-xl"
            }),
            title: "Select"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col gap-2",
        children: modes.map((mode)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: `btn-icon relative ${options.mode === mode.id ? "bg-primary-600 text-white ring-2 ring-primary-200" : "bg-gray-100 text-secondary-600 hover:bg-gray-200"}`,
                onClick: ()=>{
                    setOptions((prev)=>({
                            ...prev,
                            mode: mode.id
                        }));
                },
                title: mode.title,
                children: [
                    mode.icon,
                    options.mode === mode.id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "relative inline-flex h-2 w-2 rounded-full bg-primary-500"
                            })
                        ]
                    })
                ]
            }, mode.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModePicker);


/***/ }),

/***/ 47383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27865);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_cg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_recoil_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6664);
/* harmony import */ var _animations_Entry_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82107);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const ShapeSelector = ()=>{
    const [options, setOptions] = (0,_common_recoil_options__WEBPACK_IMPORTED_MODULE_7__/* .useOptions */ .D2)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react_use__WEBPACK_IMPORTED_MODULE_6__.useClickAway)(ref, ()=>setOpened(false));
    const handleShapeChange = (shape)=>{
        setOptions((prev)=>({
                ...prev,
                shape
            }));
        setOpened(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center",
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "btn-icon text-2xl",
                disabled: options.mode === "select",
                onClick: ()=>setOpened((prev)=>!prev),
                children: [
                    options.shape === "circle" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsCircle, {}),
                    options.shape === "rect" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiRectangle, {}),
                    options.shape === "line" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_5__.CgShapeZigzag, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                children: opened && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: "absolute left-14 z-10 flex gap-1 rounded-lg border bg-zinc-900 p-2 md:border-0",
                    variants: _animations_Entry_animations__WEBPACK_IMPORTED_MODULE_8__/* .EntryAnimation */ .y,
                    initial: "from",
                    animate: "to",
                    exit: "from",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn-icon text-2xl",
                            onClick: ()=>handleShapeChange("line"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_5__.CgShapeZigzag, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn-icon text-2xl",
                            onClick: ()=>handleShapeChange("rect"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiRectangle, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn-icon text-2xl",
                            onClick: ()=>handleShapeChange("circle"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsCircle, {})
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShapeSelector);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2145:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70924);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9252);
/* harmony import */ var _common_constants_easings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(66694);
/* harmony import */ var _common_hooks_useViewportSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90107);
/* harmony import */ var _common_recoil_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14922);
/* harmony import */ var _hooks_useRefs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4538);
/* harmony import */ var _modals_ShareModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7052);
/* harmony import */ var _BackgoundPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47141);
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13178);
/* harmony import */ var _HistoryBtns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(44448);
/* harmony import */ var _ImagePicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11431);
/* harmony import */ var _LineWidthPicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50905);
/* harmony import */ var _ModePicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(49892);
/* harmony import */ var _ShapeSelector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _hooks_useRefs__WEBPACK_IMPORTED_MODULE_11__, _ColorPicker__WEBPACK_IMPORTED_MODULE_14__, _HistoryBtns__WEBPACK_IMPORTED_MODULE_15__, _ImagePicker__WEBPACK_IMPORTED_MODULE_16__, _LineWidthPicker__WEBPACK_IMPORTED_MODULE_17__, _ShapeSelector__WEBPACK_IMPORTED_MODULE_19__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _hooks_useRefs__WEBPACK_IMPORTED_MODULE_11__, _ColorPicker__WEBPACK_IMPORTED_MODULE_14__, _HistoryBtns__WEBPACK_IMPORTED_MODULE_15__, _ImagePicker__WEBPACK_IMPORTED_MODULE_16__, _LineWidthPicker__WEBPACK_IMPORTED_MODULE_17__, _ShapeSelector__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const ToolBar = ()=>{
    const { canvasRef, bgRef } = (0,_hooks_useRefs__WEBPACK_IMPORTED_MODULE_11__/* .useRefs */ .v)();
    const { openModal } = (0,_common_recoil_modal__WEBPACK_IMPORTED_MODULE_10__/* .useModal */ .d)();
    const { width } = (0,_common_hooks_useViewportSize__WEBPACK_IMPORTED_MODULE_9__/* .useViewportSize */ .n)();
    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (width >= 1024) setOpened(true);
        else setOpened(false);
    }, [
        width
    ]);
    const handleExit = ()=>router.push("/");
    const handleDownload = ()=>{
        const canvas = document.createElement("canvas");
        canvas.width = _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_8__/* .CANVAS_SIZE */ .h.width;
        canvas.height = _common_constants_canvasSize__WEBPACK_IMPORTED_MODULE_8__/* .CANVAS_SIZE */ .h.height;
        const tempCtx = canvas.getContext("2d");
        if (tempCtx && canvasRef.current && bgRef.current) {
            tempCtx.drawImage(bgRef.current, 0, 0);
            tempCtx.drawImage(canvasRef.current, 0, 0);
        }
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "canvas.png";
        link.click();
    };
    const handleShare = ()=>openModal(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modals_ShareModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
                className: "btn-icon absolute bottom-1/2 -left-2 z-50 h-12 w-12 rounded-full bg-primary-600 text-2xl shadow-lg transition-none lg:hidden",
                animate: {
                    rotate: opened ? 0 : 180
                },
                transition: {
                    duration: 0.2,
                    ease: _common_constants_easings__WEBPACK_IMPORTED_MODULE_20__/* .DEFAULT_EASE */ .n
                },
                onClick: ()=>setOpened(!opened),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronRight, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "toolbar-container absolute left-10 top-[50%] z-50 grid grid-cols-2 items-center gap-5 p-6 text-secondary-800",
                animate: {
                    x: opened ? 0 : -160,
                    y: "-50%"
                },
                transition: {
                    duration: 0.2,
                    ease: _common_constants_easings__WEBPACK_IMPORTED_MODULE_20__/* .DEFAULT_EASE */ .n
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-span-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HistoryBtns__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "toolbar-divider col-span-2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ShapeSelector__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ColorPicker__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LineWidthPicker__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModePicker__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImagePicker__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "toolbar-divider col-span-2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BackgoundPicker__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn-icon text-2xl",
                        onClick: handleShare,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosShareAlt, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn-icon text-2xl",
                        onClick: handleDownload,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineDownload, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn-icon text-xl",
                        onClick: handleExit,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImExit, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ roomContext),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25650);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99283);
/* harmony import */ var _common_recoil_room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45323);
/* harmony import */ var _common_recoil_room_room_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75222);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const roomContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const RoomContextProvider = ({ children })=>{
    const setRoom = (0,_common_recoil_room_room_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useSetRoom */ .bb)();
    const { users } = (0,_common_recoil_room_room_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useRoom */ .NW)();
    const { handleAddUser, handleRemoveUser } = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_6__/* .useSetUsers */ .bo)();
    const undoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const redoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const bgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const minimapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const selectionRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const [moveImage, setMoveImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        base64: ""
    });
    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__/* .socket */ .W.on("room", (room, usersMovesToParse, usersToParse)=>{
            const usersMoves = new Map(JSON.parse(usersMovesToParse));
            const usersParsed = new Map(JSON.parse(usersToParse));
            const newUsers = new Map();
            usersParsed.forEach((name, id)=>{
                if (id === _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__/* .socket */ .W.id) return;
                const index = [
                    ...usersParsed.keys()
                ].indexOf(id);
                const color = _common_constants_colors__WEBPACK_IMPORTED_MODULE_4__/* .COLORS_ARRAY */ .r[index % _common_constants_colors__WEBPACK_IMPORTED_MODULE_4__/* .COLORS_ARRAY */ .r.length];
                newUsers.set(id, {
                    name,
                    color
                });
            });
            setRoom((prev)=>({
                    ...prev,
                    users: newUsers,
                    usersMoves,
                    movesWithoutUser: room.drawed
                }));
        });
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__/* .socket */ .W.on("new_user", (userId, username)=>{
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(`${username} has joined the room.`, {
                position: "top-center",
                theme: "colored"
            });
            handleAddUser(userId, username);
        });
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__/* .socket */ .W.on("user_disconnected", (userId)=>{
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(`${users.get(userId)?.name || "Anonymous"} has left the room.`, {
                position: "top-center",
                theme: "colored"
            });
            handleRemoveUser(userId);
        });
        return ()=>{
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__/* .socket */ .W.off("room");
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__/* .socket */ .W.off("new_user");
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_5__/* .socket */ .W.off("user_disconnected");
        };
    }, [
        handleAddUser,
        handleRemoveUser,
        setRoom,
        users
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(roomContext.Provider, {
        value: {
            x,
            y,
            bgRef,
            undoRef,
            redoRef,
            canvasRef,
            setMoveImage,
            moveImage,
            minimapRef,
            selectionRefs
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomContextProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mu: () => (/* binding */ drawRect),
/* harmony export */   pS: () => (/* binding */ drawLine),
/* harmony export */   xE: () => (/* binding */ drawCircle)
/* harmony export */ });
const getWidthAndHeight = (x, y, from, shift)=>{
    let width = x - from[0];
    let height = y - from[1];
    if (shift) {
        if (Math.abs(width) > Math.abs(height)) {
            if (width > 0 && height < 0 || width < 0 && height > 0) width = -height;
            else width = height;
        } else if (height > 0 && width < 0 || height < 0 && width > 0) height = -width;
        else height = width;
    } else {
        width = x - from[0];
        height = y - from[1];
    }
    return {
        width,
        height
    };
};
const drawCircle = (ctx, from, x, y, shift)=>{
    ctx.beginPath();
    const { width, height } = getWidthAndHeight(x, y, from, shift);
    const cX = from[0] + width / 2;
    const cY = from[1] + height / 2;
    const radiusX = Math.abs(width / 2);
    const radiusY = Math.abs(height / 2);
    ctx.ellipse(cX, cY, radiusX, radiusY, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    return {
        cX,
        cY,
        radiusX,
        radiusY
    };
};
const drawRect = (ctx, from, x, y, shift, fill)=>{
    ctx.beginPath();
    const { width, height } = getWidthAndHeight(x, y, from, shift);
    if (fill) ctx.fillRect(from[0], from[1], width, height);
    else ctx.rect(from[0], from[1], width, height);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    return {
        width,
        height
    };
};
const drawLine = (ctx, from, x, y, shift)=>{
    if (shift) {
        ctx.beginPath();
        ctx.lineTo(from[0], from[1]);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();
        return;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
};


/***/ }),

/***/ 99616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useBoardPosition)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_Room_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60852);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_Room_context__WEBPACK_IMPORTED_MODULE_1__]);
_context_Room_context__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useBoardPosition = ()=>{
    const { x, y } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_Room_context__WEBPACK_IMPORTED_MODULE_1__/* .roomContext */ .B);
    return {
        x,
        y
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72858:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useCtx)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useRefs__WEBPACK_IMPORTED_MODULE_1__]);
_useRefs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useCtx = ()=>{
    const { canvasRef } = (0,_useRefs__WEBPACK_IMPORTED_MODULE_1__/* .useRefs */ .v)();
    const [ctx, setCtx] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const newCtx = canvasRef.current?.getContext("2d");
        if (newCtx) {
            newCtx.lineJoin = "round";
            newCtx.lineCap = "round";
            setCtx(newCtx);
        }
    }, [
        canvasRef
    ]);
    return ctx;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ useDraw)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants_defaultMove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9389);
/* harmony import */ var _common_lib_getPos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62563);
/* harmony import */ var _common_lib_rgba__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10014);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99283);
/* harmony import */ var _common_recoil_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6664);
/* harmony import */ var _common_recoil_options_options_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97626);
/* harmony import */ var _common_recoil_room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45323);
/* harmony import */ var _common_recoil_savedMoves__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71678);
/* harmony import */ var _helpers_Canvas_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14722);
/* harmony import */ var _useBoardPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99616);
/* harmony import */ var _useCtx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72858);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_lib_socket__WEBPACK_IMPORTED_MODULE_2__, _useBoardPosition__WEBPACK_IMPORTED_MODULE_7__, _useCtx__WEBPACK_IMPORTED_MODULE_8__]);
([_common_lib_socket__WEBPACK_IMPORTED_MODULE_2__, _useBoardPosition__WEBPACK_IMPORTED_MODULE_7__, _useCtx__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












let tempMoves = [];
let tempCircle = {
    cX: 0,
    cY: 0,
    radiusX: 0,
    radiusY: 0
};
let tempSize = {
    width: 0,
    height: 0
};
let tempImageData;
const useDraw = (blocked)=>{
    const options = (0,_common_recoil_options__WEBPACK_IMPORTED_MODULE_3__/* .useOptionsValue */ .iO)();
    const boardPosition = (0,_useBoardPosition__WEBPACK_IMPORTED_MODULE_7__/* .useBoardPosition */ .R)();
    const { clearSavedMoves } = (0,_common_recoil_savedMoves__WEBPACK_IMPORTED_MODULE_6__/* .useSetSavedMoves */ .c9)();
    const { handleAddMyMove } = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_5__/* .useMyMoves */ .av)();
    const { setSelection, clearSelection } = (0,_common_recoil_options_options_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSetSelection */ .Nb)();
    const movedX = boardPosition.x;
    const movedY = boardPosition.y;
    const [drawing, setDrawing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const ctx = (0,_useCtx__WEBPACK_IMPORTED_MODULE_8__/* .useCtx */ .e)();
    const setupCtxOptions = ()=>{
        if (ctx) {
            ctx.lineWidth = options.lineWidth;
            ctx.strokeStyle = (0,_common_lib_rgba__WEBPACK_IMPORTED_MODULE_9__/* .getStringFromRgba */ .M)(options.lineColor);
            ctx.fillStyle = (0,_common_lib_rgba__WEBPACK_IMPORTED_MODULE_9__/* .getStringFromRgba */ .M)(options.fillColor);
            if (options.mode === "eraser") ctx.globalCompositeOperation = "destination-out";
            else ctx.globalCompositeOperation = "source-over";
        }
    };
    const drawAndSet = ()=>{
        if (!tempImageData) tempImageData = ctx?.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
        if (tempImageData) ctx?.putImageData(tempImageData, 0, 0);
    };
    const handleStartDrawing = (x, y)=>{
        if (!ctx || blocked || blocked) return;
        const [finalX, finalY] = [
            (0,_common_lib_getPos__WEBPACK_IMPORTED_MODULE_10__/* .getPos */ .l)(x, movedX),
            (0,_common_lib_getPos__WEBPACK_IMPORTED_MODULE_10__/* .getPos */ .l)(y, movedY)
        ];
        setDrawing(true);
        setupCtxOptions();
        drawAndSet();
        if (options.shape === "line" && options.mode !== "select") {
            ctx.beginPath();
            ctx.lineTo(finalX, finalY);
            ctx.stroke();
        }
        tempMoves.push([
            finalX,
            finalY
        ]);
    };
    const handleDraw = (x, y, shift)=>{
        if (!ctx || !drawing || blocked) return;
        const [finalX, finalY] = [
            (0,_common_lib_getPos__WEBPACK_IMPORTED_MODULE_10__/* .getPos */ .l)(x, movedX),
            (0,_common_lib_getPos__WEBPACK_IMPORTED_MODULE_10__/* .getPos */ .l)(y, movedY)
        ];
        drawAndSet();
        if (options.mode === "select") {
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
            (0,_helpers_Canvas_helpers__WEBPACK_IMPORTED_MODULE_11__/* .drawRect */ .Mu)(ctx, tempMoves[0], finalX, finalY, false, true);
            tempMoves.push([
                finalX,
                finalY
            ]);
            setupCtxOptions();
            return;
        }
        switch(options.shape){
            case "line":
                if (shift) tempMoves = tempMoves.slice(0, 1);
                (0,_helpers_Canvas_helpers__WEBPACK_IMPORTED_MODULE_11__/* .drawLine */ .pS)(ctx, tempMoves[0], finalX, finalY, shift);
                tempMoves.push([
                    finalX,
                    finalY
                ]);
                break;
            case "circle":
                tempCircle = (0,_helpers_Canvas_helpers__WEBPACK_IMPORTED_MODULE_11__/* .drawCircle */ .xE)(ctx, tempMoves[0], finalX, finalY, shift);
                break;
            case "rect":
                tempSize = (0,_helpers_Canvas_helpers__WEBPACK_IMPORTED_MODULE_11__/* .drawRect */ .Mu)(ctx, tempMoves[0], finalX, finalY, shift);
                break;
            default:
                break;
        }
    };
    const clearOnYourMove = ()=>{
        drawAndSet();
        tempImageData = undefined;
    };
    const handleEndDrawing = ()=>{
        if (!ctx || blocked) return;
        setDrawing(false);
        ctx.closePath();
        let addMove = true;
        if (options.mode === "select" && tempMoves.length) {
            clearOnYourMove();
            let x = tempMoves[0][0];
            let y = tempMoves[0][1];
            let width = tempMoves[tempMoves.length - 1][0] - x;
            let height = tempMoves[tempMoves.length - 1][1] - y;
            if (width < 0) {
                width -= 4;
                x += 2;
            } else {
                width += 4;
                x -= 2;
            }
            if (height < 0) {
                height -= 4;
                y += 2;
            } else {
                height += 4;
                y -= 2;
            }
            if ((width < 4 || width > 4) && (height < 4 || height > 4)) setSelection({
                x,
                y,
                width,
                height
            });
            else {
                clearSelection();
                addMove = false;
            }
        }
        const move = {
            ..._common_constants_defaultMove__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_MOVE */ .z,
            rect: {
                ...tempSize
            },
            circle: {
                ...tempCircle
            },
            path: tempMoves,
            options
        };
        tempMoves = [];
        tempCircle = {
            cX: 0,
            cY: 0,
            radiusX: 0,
            radiusY: 0
        };
        tempSize = {
            width: 0,
            height: 0
        };
        if (options.mode !== "select") {
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_2__/* .socket */ .W.emit("draw", move);
            clearSavedMoves();
        } else if (addMove) handleAddMyMove(move);
    };
    return {
        handleEndDrawing,
        handleDraw,
        handleStartDrawing,
        drawing,
        clearOnYourMove
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3298:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useMoveImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_Room_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60852);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_Room_context__WEBPACK_IMPORTED_MODULE_1__]);
_context_Room_context__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useMoveImage = ()=>{
    const { moveImage, setMoveImage } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_Room_context__WEBPACK_IMPORTED_MODULE_1__/* .roomContext */ .B);
    return {
        moveImage,
        setMoveImage
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40026:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useMovesHandlers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_lib_rgba__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10014);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99283);
/* harmony import */ var _common_recoil_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10731);
/* harmony import */ var _common_recoil_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6664);
/* harmony import */ var _common_recoil_room__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45323);
/* harmony import */ var _common_recoil_savedMoves__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71678);
/* harmony import */ var _useCtx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72858);
/* harmony import */ var _useRefs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4538);
/* harmony import */ var _useSelection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39168);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_lib_socket__WEBPACK_IMPORTED_MODULE_1__, _useCtx__WEBPACK_IMPORTED_MODULE_6__, _useRefs__WEBPACK_IMPORTED_MODULE_7__, _useSelection__WEBPACK_IMPORTED_MODULE_8__]);
([_common_lib_socket__WEBPACK_IMPORTED_MODULE_1__, _useCtx__WEBPACK_IMPORTED_MODULE_6__, _useRefs__WEBPACK_IMPORTED_MODULE_7__, _useSelection__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










let prevMovesLength = 0;
const useMovesHandlers = (clearOnYourMove)=>{
    const { canvasRef, minimapRef, bgRef } = (0,_useRefs__WEBPACK_IMPORTED_MODULE_7__/* .useRefs */ .v)();
    const room = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_4__/* .useRoom */ .NW)();
    const { handleAddMyMove, handleRemoveMyMove } = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_4__/* .useMyMoves */ .av)();
    const { addSavedMove, removeSavedMove } = (0,_common_recoil_savedMoves__WEBPACK_IMPORTED_MODULE_5__/* .useSetSavedMoves */ .c9)();
    const ctx = (0,_useCtx__WEBPACK_IMPORTED_MODULE_6__/* .useCtx */ .e)();
    const bg = (0,_common_recoil_background__WEBPACK_IMPORTED_MODULE_2__/* .useBackground */ .ho)();
    const { clearSelection } = (0,_common_recoil_options__WEBPACK_IMPORTED_MODULE_3__/* .useSetSelection */ .Nb)();
    const sortedMoves = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const { usersMoves, movesWithoutUser, myMoves } = room;
        const moves = [
            ...movesWithoutUser,
            ...myMoves
        ];
        usersMoves.forEach((userMoves)=>moves.push(...userMoves));
        moves.sort((a, b)=>a.timestamp - b.timestamp);
        return moves;
    }, [
        room
    ]);
    const copyCanvasToSmall = ()=>{
        if (canvasRef.current && minimapRef.current && bgRef.current) {
            const smallCtx = minimapRef.current.getContext("2d");
            if (smallCtx) {
                smallCtx.clearRect(0, 0, smallCtx.canvas.width, smallCtx.canvas.height);
                smallCtx.drawImage(bgRef.current, 0, 0, smallCtx.canvas.width, smallCtx.canvas.height);
                smallCtx.drawImage(canvasRef.current, 0, 0, smallCtx.canvas.width, smallCtx.canvas.height);
            }
        }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>copyCanvasToSmall(), [
        bg
    ]);
    const drawMove = (move, image)=>{
        const { path } = move;
        if (!ctx || !path.length) return;
        const moveOptions = move.options;
        if (moveOptions.mode === "select") return;
        ctx.lineWidth = moveOptions.lineWidth;
        ctx.strokeStyle = (0,_common_lib_rgba__WEBPACK_IMPORTED_MODULE_9__/* .getStringFromRgba */ .M)(moveOptions.lineColor);
        ctx.fillStyle = (0,_common_lib_rgba__WEBPACK_IMPORTED_MODULE_9__/* .getStringFromRgba */ .M)(moveOptions.fillColor);
        if (moveOptions.mode === "eraser") ctx.globalCompositeOperation = "destination-out";
        else ctx.globalCompositeOperation = "source-over";
        if (moveOptions.shape === "image" && image) ctx.drawImage(image, path[0][0], path[0][1]);
        switch(moveOptions.shape){
            case "line":
                {
                    ctx.beginPath();
                    path.forEach(([x, y])=>{
                        ctx.lineTo(x, y);
                    });
                    ctx.stroke();
                    ctx.closePath();
                    break;
                }
            case "circle":
                {
                    const { cX, cY, radiusX, radiusY } = move.circle;
                    ctx.beginPath();
                    ctx.ellipse(cX, cY, radiusX, radiusY, 0, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.fill();
                    ctx.closePath();
                    break;
                }
            case "rect":
                {
                    const { width, height } = move.rect;
                    ctx.beginPath();
                    ctx.rect(path[0][0], path[0][1], width, height);
                    ctx.stroke();
                    ctx.fill();
                    ctx.closePath();
                    break;
                }
            default:
                break;
        }
        copyCanvasToSmall();
    };
    const drawAllMoves = async ()=>{
        if (!ctx) return;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const images = await Promise.all(sortedMoves.filter((move)=>move.options.shape === "image").map((move)=>{
            return new Promise((resolve)=>{
                const img = new Image();
                img.src = move.img.base64;
                img.id = move.id;
                img.addEventListener("load", ()=>resolve(img));
            });
        }));
        sortedMoves.forEach((move)=>{
            if (move.options.shape === "image") {
                const img = images.find((image)=>image.id === move.id);
                if (img) drawMove(move, img);
            } else drawMove(move);
        });
        copyCanvasToSmall();
    };
    (0,_useSelection__WEBPACK_IMPORTED_MODULE_8__/* .useSelection */ .c)(drawAllMoves);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__/* .socket */ .W.on("your_move", (move)=>{
            clearOnYourMove();
            handleAddMyMove(move);
            setTimeout(clearSelection, 100);
        });
        return ()=>{
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__/* .socket */ .W.off("your_move");
        };
    }, [
        clearOnYourMove,
        clearSelection,
        handleAddMyMove
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (prevMovesLength >= sortedMoves.length || !prevMovesLength) {
            drawAllMoves();
        } else {
            const lastMove = sortedMoves[sortedMoves.length - 1];
            if (lastMove.options.shape === "image") {
                const img = new Image();
                img.src = lastMove.img.base64;
                img.addEventListener("load", ()=>drawMove(lastMove, img));
            } else drawMove(lastMove);
        }
        return ()=>{
            prevMovesLength = sortedMoves.length;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        sortedMoves
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleUndo = ()=>{
        if (ctx) {
            const move = handleRemoveMyMove();
            if (move?.options.mode === "select") clearSelection();
            else if (move) {
                addSavedMove(move);
                _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__/* .socket */ .W.emit("undo");
            }
        }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleRedo = ()=>{
        if (ctx) {
            const move = removeSavedMove();
            if (move) {
                _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__/* .socket */ .W.emit("draw", move);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleUndoRedoKeyboard = (e)=>{
            if (e.key === "z" && e.ctrlKey) {
                handleUndo();
            } else if (e.key === "y" && e.ctrlKey) {
                handleRedo();
            }
        };
        document.addEventListener("keydown", handleUndoRedoKeyboard);
        return ()=>{
            document.removeEventListener("keydown", handleUndoRedoKeyboard);
        };
    }, [
        handleUndo,
        handleRedo
    ]);
    return {
        handleUndo,
        handleRedo
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useRefs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_Room_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60852);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_Room_context__WEBPACK_IMPORTED_MODULE_1__]);
_context_Room_context__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useRefs = ()=>{
    const { undoRef, bgRef, canvasRef, minimapRef, redoRef, selectionRefs } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_Room_context__WEBPACK_IMPORTED_MODULE_1__/* .roomContext */ .B);
    return {
        undoRef,
        redoRef,
        bgRef,
        canvasRef,
        minimapRef,
        selectionRefs
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39168:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useSelection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_constants_defaultMove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9389);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99283);
/* harmony import */ var _common_recoil_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6664);
/* harmony import */ var _useCtx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72858);
/* harmony import */ var _useMoveImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3298);
/* harmony import */ var _useRefs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_lib_socket__WEBPACK_IMPORTED_MODULE_3__, _useCtx__WEBPACK_IMPORTED_MODULE_5__, _useMoveImage__WEBPACK_IMPORTED_MODULE_6__, _useRefs__WEBPACK_IMPORTED_MODULE_7__]);
([_common_lib_socket__WEBPACK_IMPORTED_MODULE_3__, _useCtx__WEBPACK_IMPORTED_MODULE_5__, _useMoveImage__WEBPACK_IMPORTED_MODULE_6__, _useRefs__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








let tempSelection = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
};
const useSelection = (drawAllMoves)=>{
    const ctx = (0,_useCtx__WEBPACK_IMPORTED_MODULE_5__/* .useCtx */ .e)();
    const options = (0,_common_recoil_options__WEBPACK_IMPORTED_MODULE_4__/* .useOptionsValue */ .iO)();
    const { selection } = options;
    const { bgRef, selectionRefs } = (0,_useRefs__WEBPACK_IMPORTED_MODULE_7__/* .useRefs */ .v)();
    const { setMoveImage } = (0,_useMoveImage__WEBPACK_IMPORTED_MODULE_6__/* .useMoveImage */ .E)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const callback = async ()=>{
            if (ctx && selection) {
                await drawAllMoves();
                setTimeout(()=>{
                    const { x, y, width, height } = selection;
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = "#000";
                    ctx.setLineDash([
                        5,
                        10
                    ]);
                    ctx.globalCompositeOperation = "source-over";
                    ctx.beginPath();
                    ctx.rect(x, y, width, height);
                    ctx.stroke();
                    ctx.closePath();
                    ctx.setLineDash([]);
                }, 10);
            }
        };
        if (tempSelection.width !== selection?.width || tempSelection.height !== selection?.height || tempSelection.x !== selection?.x || tempSelection.y !== selection?.y) callback();
        return ()=>{
            if (selection) tempSelection = selection;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selection,
        ctx
    ]);
    const dimension = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (selection) {
            let { x, y, width, height } = selection;
            if (width < 0) {
                width += 4;
                x -= 2;
            } else {
                width -= 4;
                x += 2;
            }
            if (height < 0) {
                height += 4;
                y -= 2;
            } else {
                height -= 4;
                y += 2;
            }
            return {
                x,
                y,
                width,
                height
            };
        }
        return {
            width: 0,
            height: 0,
            x: 0,
            y: 0
        };
    }, [
        selection
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const makeBlob = async (withBg)=>{
        if (!selection) return null;
        const { x, y, width, height } = dimension;
        const imageData = ctx?.getImageData(x, y, width, height);
        if (imageData) {
            const tempCanvas = document.createElement("canvas");
            tempCanvas.width = width;
            tempCanvas.height = height;
            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const tempCtx = canvas.getContext("2d");
            if (tempCtx && bgRef.current) {
                const bgImage = bgRef.current.getContext("2d")?.getImageData(x, y, width, height);
                if (bgImage && withBg) tempCtx.putImageData(bgImage, 0, 0);
                const sTempCtx = tempCanvas.getContext("2d");
                sTempCtx?.putImageData(imageData, 0, 0);
                tempCtx.drawImage(tempCanvas, 0, 0);
                const blob = await new Promise((resolve)=>{
                    canvas.toBlob((blobGenerated)=>{
                        if (blobGenerated) resolve(blobGenerated);
                    });
                });
                return blob;
            }
        }
        return null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const createDeleteMove = ()=>{
        if (!selection) return null;
        let { x, y, width, height } = dimension;
        if (width < 0) {
            width += 4;
            x -= 2;
        } else {
            width -= 4;
            x += 2;
        }
        if (height < 0) {
            height += 4;
            y -= 2;
        } else {
            height -= 4;
            y += 2;
        }
        const move = {
            ..._common_constants_defaultMove__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_MOVE */ .z,
            rect: {
                width,
                height
            },
            path: [
                [
                    x,
                    y
                ]
            ],
            options: {
                ...options,
                shape: "rect",
                mode: "eraser",
                fillColor: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                }
            }
        };
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_3__/* .socket */ .W.emit("draw", move);
        return move;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleCopy = async ()=>{
        const blob = await makeBlob(true);
        if (blob) navigator.clipboard.write([
            new ClipboardItem({
                "image/png": blob
            })
        ]).then(()=>{
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Copied to clipboard!", {
                position: "top-center",
                theme: "colored"
            });
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleSelection = async (e)=>{
            if (e.key === "c" && e.ctrlKey) handleCopy();
            if (e.key === "Delete" && selection) createDeleteMove();
        };
        document.addEventListener("keydown", handleSelection);
        return ()=>{
            document.removeEventListener("keydown", handleSelection);
        };
    }, [
        bgRef,
        createDeleteMove,
        ctx,
        handleCopy,
        makeBlob,
        options,
        selection
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleSelectionMove = async ()=>{
            if (selection) {
                const blob = await makeBlob();
                if (!blob) return;
                const { x, y, width, height } = dimension;
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.addEventListener("loadend", ()=>{
                    const base64 = reader.result?.toString();
                    if (base64) {
                        createDeleteMove();
                        setMoveImage({
                            base64,
                            x: Math.min(x, x + width),
                            y: Math.min(y, y + height)
                        });
                    }
                });
            }
        };
        if (selectionRefs.current) {
            const moveBtn = selectionRefs.current[0];
            const copyBtn = selectionRefs.current[1];
            const deleteBtn = selectionRefs.current[2];
            moveBtn.addEventListener("click", handleSelectionMove);
            copyBtn.addEventListener("click", handleCopy);
            deleteBtn.addEventListener("click", createDeleteMove);
            return ()=>{
                moveBtn?.removeEventListener("click", handleSelectionMove);
                copyBtn?.removeEventListener("click", handleCopy);
                deleteBtn?.removeEventListener("click", createDeleteMove);
            };
        }
        return ()=>{};
    }, [
        createDeleteMove,
        dimension,
        handleCopy,
        makeBlob,
        selection,
        selectionRefs,
        setMoveImage
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62974:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ useSocketDraw)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99283);
/* harmony import */ var _common_recoil_room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45323);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_lib_socket__WEBPACK_IMPORTED_MODULE_1__]);
_common_lib_socket__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useSocketDraw = (drawing)=>{
    const { handleAddMoveToUser, handleRemoveMoveFromUser } = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_2__/* .useSetUsers */ .bo)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let moveToDrawLater;
        let userIdLater = "";
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__/* .socket */ .W.on("user_draw", (move, userId)=>{
            if (!drawing) {
                handleAddMoveToUser(userId, move);
            } else {
                moveToDrawLater = move;
                userIdLater = userId;
            }
        });
        return ()=>{
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__/* .socket */ .W.off("user_draw");
            if (moveToDrawLater && userIdLater) {
                handleAddMoveToUser(userIdLater, moveToDrawLater);
            }
        };
    }, [
        drawing,
        handleAddMoveToUser
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__/* .socket */ .W.on("user_undo", (userId)=>{
            handleRemoveMoveFromUser(userId);
        });
        return ()=>{
            _common_lib_socket__WEBPACK_IMPORTED_MODULE_1__/* .socket */ .W.off("user_undo");
        };
    }, [
        handleRemoveMoveFromUser
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_recoil_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14922);
/* harmony import */ var _common_recoil_room__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45323);





const ShareModal = ()=>{
    const { id } = (0,_common_recoil_room__WEBPACK_IMPORTED_MODULE_4__/* .useRoom */ .NW)();
    const { closeModal } = (0,_common_recoil_modal__WEBPACK_IMPORTED_MODULE_3__/* .useModal */ .d)();
    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setUrl(window.location.href), []);
    const handleCopy = ()=>navigator.clipboard.writeText(url);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex flex-col items-center rounded-md bg-white p-10 pt-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: closeModal,
                className: "absolute top-5 right-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineClose, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-2xl font-bold",
                children: "Invite"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                children: [
                    "Room id: ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "inline font-bold",
                        children: id
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mt-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        value: url,
                        readOnly: true,
                        className: "input sm:w-96"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn absolute right-0 h-full",
                        onClick: handleCopy,
                        children: "Copy"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareModal);


/***/ }),

/***/ 17878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _modules_room_components_Room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30124);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_room_components_Room__WEBPACK_IMPORTED_MODULE_1__]);
_modules_room_components_Room__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const RoomPage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_room_components_Room__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 94140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 89716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 33100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 76368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 99847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 76652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 10567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 27865:
/***/ ((module) => {

module.exports = require("react-icons/cg");

/***/ }),

/***/ 16290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 92750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 61111:
/***/ ((module) => {

module.exports = require("react-icons/hi");

/***/ }),

/***/ 70924:
/***/ ((module) => {

module.exports = require("react-icons/im");

/***/ }),

/***/ 74751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 39989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 44152:
/***/ ((module) => {

module.exports = require("react-icons/tb");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 69755:
/***/ ((module) => {

module.exports = require("react-use");

/***/ }),

/***/ 29755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 66197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 69559:
/***/ ((module) => {

module.exports = import("react-colorful");;

/***/ }),

/***/ 14612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [65,163,662], () => (__webpack_exec__(13494)));
module.exports = __webpack_exports__;

})();