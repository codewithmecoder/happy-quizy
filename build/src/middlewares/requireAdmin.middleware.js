"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdmin = void 0;
const requireAdmin = (req, res, next) => {
    const user = res.locals.user;
    if (!user || !user.isAdmin) {
        return res.json({
            success: false,
            data: { message: "Admin access only!" },
        });
    }
    return next();
};
exports.requireAdmin = requireAdmin;
//# sourceMappingURL=requireAdmin.middleware.js.map