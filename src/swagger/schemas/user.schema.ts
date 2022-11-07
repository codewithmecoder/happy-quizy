// Start User //

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
