"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireUser = void 0;
const requireUser = (req, res, next) => {
    const user = res.locals.user;
    if (!user) {
        return res.json({
            success: false,
            data: { message: "please login to access this action!" },
        });
    }
    return next();
};
exports.requireUser = requireUser;
//# sourceMappingURL=requireUser.middleware.js.map