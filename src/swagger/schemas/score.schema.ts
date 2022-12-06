/**
 * @openapi
 * components:
 *    schemas:
 *      CreateScore:
 *        type: object
 *        properties:
 *          score:
 *            type: number
 *          userId:
 *            type: number
 *          typeQuestionId:
 *            type: number
 *          questionIds:
 *            type: string
 *          createdAt:
 *            type: string
 *            format: date
 *          updatedAt:
 *            type: string
 *            format: date
 *      CreateScoreResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *          data:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *              score:
 *                type: number
 *              typeQuestionId:
 *                type: number
 *              userId:
 *                type: number
 *              questionIds:
 *                type: string
 *              createdAt:
 *                type: string
 *                format: date
 *              updatedAt:
 *                type: string
 *                format: date
 */
