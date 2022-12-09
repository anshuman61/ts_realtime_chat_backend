var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_express = __toModule(require("express"));
var import_http = __toModule(require("http"));
var import_path = __toModule(require("path"));
var import_socket = __toModule(require("socket.io"));
var import_routes = __toModule(require("./routes"));
const app = (0, import_express.default)();
const server = import_http.default.createServer(app);
const io = new import_socket.Server(server);
app.get("/", (req, res) => {
  res.sendFile(import_path.default.resolve("./views/index.html"));
});
io.on("connection", (socket) => {
  socket.on("GET", (data) => {
    (0, import_routes.routes)("GET", data);
  });
  socket.on("POST", (data) => {
    (0, import_routes.routes)("POST", data);
  });
  socket.on("PATCH", (data) => {
    (0, import_routes.routes)("PATCH", data);
  });
  socket.on("DELETE", (data) => {
    (0, import_routes.routes)("DELETE", data);
  });
});
server.listen(3e3, () => {
  console.log("listening on :3000");
});
//# sourceMappingURL=index.js.map
