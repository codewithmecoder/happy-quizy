/**
 * @openapi
 * components:
 *    schemas:
 *      CurrentUserResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *            default: false
 *          data:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *              displayName:
 *                type: string
 *              username:
 *                type: string
 *              photo:
 *                type: string
 *              isAdmin:
 *                type: boolean
 *              iat:
 *                type: number
 *              exp:
 *                type: number
 *      UpdateUserInput:
 *        type: object
 *        properties:
 *          username:
 *            type: string
 *          displayName:
 *            type: string
 *          email:
 *            type: string
 *          phoneNumber:
 *            type: string
 *          photo:
 *            type: string
 *          isAdmin:
 *            type: boolean
 *      UpdateAnyUserInput:
 *        type: object
 *        properties:
 *          id:
 *            type: number
 *          username:
 *            type: string
 *          displayName:
 *            type: string
 *          email:
 *            type: string
 *          phoneNumber:
 *            type: string
 *          photo:
 *            type: string
 *          isAdmin:
 *            type: boolean
 *      UsersResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *            default: false
 *          data:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                id:
 *                  type: int
 *                  default: 0,
 *                username:
 *                  type: string
 *                displayName:
 *                  type: string
 *                email:
 *                  type: string
 *                phoneNumber:
 *                  type: string
 *                photo:
 *                  type: string
 *                isAdmin:
 *                  type: boolean
 *                createdAt:
 *                  type: string
 *                  format: date
 *                updatedAt:
 *                  type: string
 *                  format: date
 */
export type CurrentUserLogin = {
    id: number;
    displayName: string;
    username: string;
    photo: string;
    isAdmin: boolean;
    iat: number;
    exp: number;
};
export type UpdateUserInputModel = {
    username: string;
    displayName: string;
    email: string;
    phoneNumber: string;
    photo: string;
    isAdmin: boolean;
};
export type UpdateAnyUserInputModel = {
    id: number;
} & UpdateUserInputModel;
