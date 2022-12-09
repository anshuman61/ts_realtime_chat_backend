var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  createUser: () => createUser,
  deleteUser: () => deleteUser,
  findUser: () => findUser,
  updateUser: () => updateUser
});
const createUser = () => {
};
const findUser = (data) => {
  console.log(data);
};
const updateUser = () => {
};
const deleteUser = () => {
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createUser,
  deleteUser,
  findUser,
  updateUser
});
//# sourceMappingURL=users.js.map
