"use strict";
/**
 * @openapi
 * components:
 *    schemas:
 *      CreateQuestion:
 *        type: object
 *        properties:
 *          content:
 *            type: string
 *          typeQuestionId:
 *            type: number
 *          createdAt:
 *            type: string
 *            format: date
 *          updatedAt:
 *            type: string
 *            format: date
 *      CreateQuestionResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *          data:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *              typeQuestionId:
 *                type: number
 *              content:
 *                type: string
 *              createdAt:
 *                type: string
 *                format: date
 *              updatedAt:
 *                type: string
 *                format: date
 *      QuestionsResponse:
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
 *                typeQuestionId:
 *                  type: number
 *                content:
 *                  type: string
 *                createdAt:
 *                  type: string
 *                  format: date
 *                updatedAt:
 *                  type: string
 *                  format: date
 */
//# sourceMappingURL=question.schema.js.map