"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Start Register//
/**
 * @openapi
 * components:
 *    schemas:
 *      UserCreateInput:
 *        type: object
 *        required:
 *          - username
 *          - email
 *          - password
 *        properties:
 *          username:
 *            type: string
 *            default: example
 *          displayName:
 *            type: string
 *            default: example
 *          email:
 *            type: string
 *            default: example@gmail.com
 *          phoneNumber:
 *            type: string
 *            default: 094828723
 *          password:
 *            type: string
 *            default: secureme
 *          photo:
 *            type: string
 *            default:
 *          isAdmin:
 *            type: boolean
 *            default: false
 *      UserResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *            default: false
 *          data:
 *            type: object
 *            properties:
 *              id:
 *                type: int
 *                default: 0,
 *              username:
 *                type: string
 *              displayName:
 *                type: string
 *              email:
 *                type: string
 *              phoneNumber:
 *                type: string
 *              photo:
 *                type: string
 *              isAdmin:
 *                type: boolean
 *              createdAt:
 *                type: string
 *                format: date
 *              updatedAt:
 *                type: string
 *                format: date
 *      MessageResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *            default: false
 *          data:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 */
// End Register //
//Start Login//
/**
 * @openapi
 * components:
 *    schemas:
 *      LoginUser:
 *        type: object
 *        required:
 *          - username
 *          - password
 *        properties:
 *          username:
 *            type: string
 *            default: example
 *          password:
 *            type: string
 *            default: secureme
 *      UserLoginResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *            default: false
 *          data:
 *            type: object
 *            properties:
 *              accessToken:
 *                type: string
 *              refreshToken:
 *                type: string
 *              user:
 *                type: object
 *                properties:
 *                  id:
 *                    type: int
 *                    default: 0,
 *                  username:
 *                    type: string
 *                  displayName:
 *                    type: string
 *                  email:
 *                    type: string
 *                  phoneNumber:
 *                    type: string
 *                  photo:
 *                    type: string
 *                  isAdmin:
 *                    type: boolean
 *                  createdAt:
 *                    type: string
 *                    format: date
 *                  updatedAt:
 *                    type: string
 *                    format: date
 */
// End Login //
//# sourceMappingURL=auth.schema.js.map