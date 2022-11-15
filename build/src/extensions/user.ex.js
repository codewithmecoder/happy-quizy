"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userToUserDto = void 0;
function userToUserDto(user) {
    if (!user)
        return null;
    return {
        createdAt: user.createdAt,
        displayName: user.displayName,
        email: user.email,
        id: user.id,
        phoneNumber: user.phoneNumber,
        photo: user.photo,
        updatedAt: user.updatedAt,
        username: user.username,
    };
}
exports.userToUserDto = userToUserDto;
//# sourceMappingURL=user.ex.js.map