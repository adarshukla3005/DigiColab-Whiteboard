"use strict";
exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 25650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ COLORS_ARRAY)
/* harmony export */ });
/* unused harmony export COLORS */
const COLORS = {
    PURPLE: "#6B32F3",
    BLUE: "#408FF8",
    RED: "#F32D27",
    GREEN: "#6FCB12",
    GOLD: "#A89D6C",
    PINK: "#EB29DA",
    MINT: "#19CB87",
    RED_LIGHT: "#ED7878",
    CYAN: "#02CBF6",
    RED_DARK: "#BA1555",
    ORANGE: "#FF7300"
};
const COLORS_ARRAY = [
    ...Object.values(COLORS)
];


/***/ }),

/***/ 99283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ socket)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_0__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NW: () => (/* reexport safe */ _room_hooks__WEBPACK_IMPORTED_MODULE_1__.NW),
/* harmony export */   av: () => (/* reexport safe */ _room_hooks__WEBPACK_IMPORTED_MODULE_1__.av),
/* harmony export */   bo: () => (/* reexport safe */ _room_hooks__WEBPACK_IMPORTED_MODULE_1__.bo),
/* harmony export */   u4: () => (/* reexport safe */ _room_hooks__WEBPACK_IMPORTED_MODULE_1__.u4)
/* harmony export */ });
/* harmony import */ var _room_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12305);
/* harmony import */ var _room_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75222);


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (roomAtom)));



/***/ }),

/***/ 12305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ roomAtom),
/* harmony export */   p: () => (/* binding */ DEFAULT_ROOM)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_ROOM = {
    id: "",
    users: new Map(),
    usersMoves: new Map(),
    movesWithoutUser: [],
    myMoves: []
};
const roomAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "room",
    default: DEFAULT_ROOM
});


/***/ }),

/***/ 75222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  av: () => (/* binding */ useMyMoves),
  NW: () => (/* binding */ useRoom),
  bb: () => (/* binding */ useSetRoom),
  u4: () => (/* binding */ useSetRoomId),
  bo: () => (/* binding */ useSetUsers)
});

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(29755);
// EXTERNAL MODULE: ./common/constants/colors.ts
var colors = __webpack_require__(25650);
;// CONCATENATED MODULE: ./common/lib/getNextColor.ts

const getNextColor = (color)=>{
    const index = colors/* COLORS_ARRAY */.r.findIndex((colorArr)=>colorArr === color);
    if (index === -1) return colors/* COLORS_ARRAY */.r[0];
    return colors/* COLORS_ARRAY */.r[(index + 1) % colors/* COLORS_ARRAY */.r.length];
};

// EXTERNAL MODULE: ./common/recoil/room/room.atom.ts
var room_atom = __webpack_require__(12305);
;// CONCATENATED MODULE: ./common/recoil/room/room.hooks.ts



const useRoom = ()=>{
    const room = (0,external_recoil_.useRecoilValue)(room_atom/* roomAtom */.X);
    return room;
};
const useSetRoom = ()=>{
    const setRoom = (0,external_recoil_.useSetRecoilState)(room_atom/* roomAtom */.X);
    return setRoom;
};
const useSetRoomId = ()=>{
    const setRoomId = (0,external_recoil_.useSetRecoilState)(room_atom/* roomAtom */.X);
    const handleSetRoomId = (id)=>{
        setRoomId({
            ...room_atom/* DEFAULT_ROOM */.p,
            id
        });
    };
    return handleSetRoomId;
};
const useSetUsers = ()=>{
    const setRoom = (0,external_recoil_.useSetRecoilState)(room_atom/* roomAtom */.X);
    const handleAddUser = (userId, name)=>{
        setRoom((prev)=>{
            const newUsers = prev.users;
            const newUsersMoves = prev.usersMoves;
            const color = getNextColor([
                ...newUsers.values()
            ].pop()?.color);
            newUsers.set(userId, {
                name,
                color
            });
            newUsersMoves.set(userId, []);
            return {
                ...prev,
                users: newUsers,
                usersMoves: newUsersMoves
            };
        });
    };
    const handleRemoveUser = (userId)=>{
        setRoom((prev)=>{
            const newUsers = prev.users;
            const newUsersMoves = prev.usersMoves;
            const userMoves = newUsersMoves.get(userId);
            newUsers.delete(userId);
            newUsersMoves.delete(userId);
            return {
                ...prev,
                users: newUsers,
                usersMoves: newUsersMoves,
                movesWithoutUser: [
                    ...prev.movesWithoutUser,
                    ...userMoves || []
                ]
            };
        });
    };
    const handleAddMoveToUser = (userId, moves)=>{
        setRoom((prev)=>{
            const newUsersMoves = prev.usersMoves;
            const oldMoves = prev.usersMoves.get(userId);
            newUsersMoves.set(userId, [
                ...oldMoves || [],
                moves
            ]);
            return {
                ...prev,
                usersMoves: newUsersMoves
            };
        });
    };
    const handleRemoveMoveFromUser = (userId)=>{
        setRoom((prev)=>{
            const newUsersMoves = prev.usersMoves;
            const oldMoves = prev.usersMoves.get(userId);
            oldMoves?.pop();
            newUsersMoves.set(userId, oldMoves || []);
            return {
                ...prev,
                usersMoves: newUsersMoves
            };
        });
    };
    return {
        handleAddUser,
        handleRemoveUser,
        handleAddMoveToUser,
        handleRemoveMoveFromUser
    };
};
const useMyMoves = ()=>{
    const [room, setRoom] = (0,external_recoil_.useRecoilState)(room_atom/* roomAtom */.X);
    const handleAddMyMove = (move)=>{
        setRoom((prev)=>{
            if (prev.myMoves[prev.myMoves.length - 1]?.options.mode === "select") return {
                ...prev,
                myMoves: [
                    ...prev.myMoves.slice(0, prev.myMoves.length - 1),
                    move
                ]
            };
            return {
                ...prev,
                myMoves: [
                    ...prev.myMoves,
                    move
                ]
            };
        });
    };
    const handleRemoveMyMove = ()=>{
        const newMoves = [
            ...room.myMoves
        ];
        const move = newMoves.pop();
        setRoom((prev)=>({
                ...prev,
                myMoves: newMoves
            }));
        return move;
    };
    return {
        handleAddMyMove,
        handleRemoveMyMove,
        myMoves: room.myMoves
    };
};


/***/ }),

/***/ 9477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_recoil_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14922);



const NotFoundModal = ({ id })=>{
    const { closeModal } = (0,_common_recoil_modal__WEBPACK_IMPORTED_MODULE_2__/* .useModal */ .d)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex flex-col items-center rounded-md bg-white p-10 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: closeModal,
                className: "absolute top-5 right-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineClose, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "text-lg font-bold",
                children: [
                    'Room with id "',
                    id,
                    '" does not exist or is full!'
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Try to join room later."
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundModal);


/***/ })

};
;