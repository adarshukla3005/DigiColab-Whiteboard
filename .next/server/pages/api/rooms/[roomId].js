"use strict";
(() => {
var exports = {};
exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 90730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 43076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 96044:
/***/ ((module) => {

module.exports = require("supports-color");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 73292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 92761:
/***/ ((module) => {

module.exports = require("node:async_hooks");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 39512:
/***/ ((module) => {

module.exports = require("timers");

/***/ }),

/***/ 68670:
/***/ ((module) => {

module.exports = require("timers/promises");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 16585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Frooms_2F_5BroomId_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Frooms_2F_5BroomId_5D_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/rooms/[roomId].ts
var _roomId_namespaceObject = {};
__webpack_require__.r(_roomId_namespaceObject);
__webpack_require__.d(_roomId_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(56429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(47153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(37305);
// EXTERNAL MODULE: ./server/node_modules/mongoose/index.js
var mongoose = __webpack_require__(93324);
var mongoose_default = /*#__PURE__*/__webpack_require__.n(mongoose);
;// CONCATENATED MODULE: ./server/db/connect.ts

// Define connection options
const options = {
    bufferCommands: false
};
// Global cache
let globalCache = {};
/**
 * Connect to MongoDB
 */ async function connectDB() {
    // Get the MongoDB URI from environment variables
    const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/digicolab";
    if (!MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable");
    }
    console.log("Using URI:", MONGODB_URI.replace(/:([^:@]+)@/, ":****@"));
    // If already connected, return the existing connection
    if (globalCache.isConnected) {
        console.log("Using existing MongoDB connection");
        return (mongoose_default());
    }
    // If connection is in progress, wait for it
    if (globalCache.promise) {
        console.log("Waiting for existing MongoDB connection");
        await globalCache.promise;
        return (mongoose_default());
    }
    try {
        // Create a new connection
        console.log("Creating new MongoDB connection");
        const promise = mongoose_default().connect(MONGODB_URI, options);
        globalCache.promise = promise;
        await promise;
        globalCache.isConnected = true;
        console.log("Connected to MongoDB");
        return (mongoose_default());
    } catch (error) {
        console.error("MongoDB connection error:", error);
        globalCache = {}; // Reset on error
        throw error;
    }
}
/* harmony default export */ const connect = (connectDB);

;// CONCATENATED MODULE: ./server/models/Room.ts

const RoomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true,
        unique: true
    },
    drawed: {
        type: Array,
        default: []
    },
    isActive: {
        type: Boolean,
        default: true
    },
    maxUsers: {
        type: Number,
        default: 12
    }
}, {
    timestamps: true
});
// Set TTL index to automatically delete rooms after 7 days of inactivity
RoomSchema.index({
    updatedAt: 1
}, {
    expireAfterSeconds: 7 * 24 * 60 * 60
});
/* harmony default export */ const Room = ((mongoose_default()).models.Room || mongoose_default().model("Room", RoomSchema));

;// CONCATENATED MODULE: ./server/models/User.ts

const UserSchema = new mongoose.Schema({
    socketId: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    roomId: {
        type: String,
        required: true
    },
    joinedAt: {
        type: Date,
        default: Date.now
    },
    lastActive: {
        type: Date,
        default: Date.now
    },
    moves: {
        type: Array,
        default: []
    }
});
// Set TTL index to automatically delete users after 24 hours of inactivity
UserSchema.index({
    lastActive: 1
}, {
    expireAfterSeconds: 24 * 60 * 60
});
/* harmony default export */ const User = ((mongoose_default()).models.User || mongoose_default().model("User", UserSchema));

;// CONCATENATED MODULE: ./server/models/Session.ts

const SessionSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        default: Date.now
    },
    endTime: {
        type: Date
    },
    participants: [
        {
            type: String
        }
    ],
    messages: [
        {
            userId: String,
            username: String,
            message: String,
            timestamp: {
                type: Date,
                default: Date.now
            }
        }
    ],
    isActive: {
        type: Boolean,
        default: true
    }
});
// Set TTL index to automatically delete sessions after 30 days
SessionSchema.index({
    startTime: 1
}, {
    expireAfterSeconds: 30 * 24 * 60 * 60
});
/* harmony default export */ const Session = ((mongoose_default()).models.Session || mongoose_default().model("Session", SessionSchema));

;// CONCATENATED MODULE: ./server/db/operations.ts



/**
 * Database operations for rooms
 */ const RoomOperations = {
    // Get a room by ID
    getRoom: async (roomId)=>{
        try {
            return await Room.findOne({
                roomId
            });
        } catch (error) {
            console.error("Error getting room:", error);
            return null;
        }
    },
    // Update room data
    updateRoom: async (roomId, data)=>{
        try {
            return await Room.updateOne({
                roomId
            }, {
                $set: data
            });
        } catch (error) {
            console.error("Error updating room:", error);
            return null;
        }
    },
    // Save room drawing data
    saveDrawings: async (roomId, drawings)=>{
        try {
            return await Room.updateOne({
                roomId
            }, {
                $set: {
                    drawed: drawings
                }
            });
        } catch (error) {
            console.error("Error saving drawings:", error);
            return null;
        }
    }
};
/**
 * Database operations for users
 */ const UserOperations = {
    // Get all users in a room
    getRoomUsers: async (roomId)=>{
        try {
            return await User.find({
                roomId
            });
        } catch (error) {
            console.error("Error getting room users:", error);
            return [];
        }
    },
    // Update user activity timestamp
    updateUserActivity: async (socketId)=>{
        try {
            return await User.updateOne({
                socketId
            }, {
                $set: {
                    lastActive: new Date()
                }
            });
        } catch (error) {
            console.error("Error updating user activity:", error);
            return null;
        }
    }
};
/**
 * Database operations for sessions
 */ const SessionOperations = {
    // Get active session for a room
    getActiveSession: async (roomId)=>{
        try {
            return await Session.findOne({
                roomId,
                isActive: true
            });
        } catch (error) {
            console.error("Error getting active session:", error);
            return null;
        }
    },
    // Get chat messages for a room
    getChatMessages: async (roomId)=>{
        try {
            const session = await Session.findOne({
                roomId,
                isActive: true
            });
            return session?.messages || [];
        } catch (error) {
            console.error("Error getting chat messages:", error);
            return [];
        }
    },
    // End session
    endSession: async (roomId)=>{
        try {
            return await Session.updateOne({
                roomId,
                isActive: true
            }, {
                $set: {
                    isActive: false,
                    endTime: new Date()
                }
            });
        } catch (error) {
            console.error("Error ending session:", error);
            return null;
        }
    }
};

;// CONCATENATED MODULE: ./pages/api/rooms/[roomId].ts


async function handler(req, res) {
    // Connect to MongoDB
    await connect();
    const { roomId } = req.query;
    if (!roomId || typeof roomId !== "string") {
        return res.status(400).json({
            error: "Invalid room ID"
        });
    }
    // Handle different HTTP methods
    switch(req.method){
        case "GET":
            try {
                // Get room data
                const room = await RoomOperations.getRoom(roomId);
                if (!room) {
                    return res.status(404).json({
                        error: "Room not found"
                    });
                }
                // Get users in the room
                const users = await UserOperations.getRoomUsers(roomId);
                // Get chat messages
                const messages = await SessionOperations.getChatMessages(roomId);
                return res.status(200).json({
                    room,
                    users,
                    messages
                });
            } catch (error) {
                console.error("Error fetching room data:", error);
                return res.status(500).json({
                    error: "Failed to fetch room data"
                });
            }
        default:
            res.setHeader("Allow", [
                "GET"
            ]);
            return res.status(405).json({
                error: `Method ${req.method} not allowed`
            });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Frooms%2F%5BroomId%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Frooms%2F%5BroomId%5D.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Frooms_2F_5BroomId_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Frooms_2F_5BroomId_5D_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_roomId_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(_roomId_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/rooms/[roomId]",
        pathname: "/api/rooms/[roomId]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: _roomId_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [57], () => (__webpack_exec__(16585)));
module.exports = __webpack_exports__;

})();