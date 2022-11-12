// Create Type Question //
/**
 * @openapi
 * components:
 *    schemas:
 *      CreateTypeQuestion:
 *        type: object
 *        properties:
 *          type:
 *            type: string
 *          photo:
 *            type: string
 *          createdAt:
 *            type: string
 *            format: date
 *          updatedAt:
 *            type: string
 *            format: date
 *      CreateTypeQuestionResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *          data:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *              type:
 *                type: string
 *              photo:
 *                type: string
 *              createdAt:
 *                type: string
 *                format: date
 *              updatedAt:
 *                type: string
 *                format: date
 *      TypeQuestionsResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *          data:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                id:
 *                  type: number
 *                type:
 *                  type: string
 *                photo:
 *                  type: string
 *                createdAt:
 *                  type: string
 *                  format: date
 *                updatedAt:
 *                  type: string
 *                  format: date
 */
