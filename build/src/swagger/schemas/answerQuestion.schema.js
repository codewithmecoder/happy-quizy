"use strict";
/**
 * @openapi
 * components:
 *    schemas:
 *      CreateAnswerQuestion:
 *        type: array
 *        items:
 *          type: object
 *          properties:
 *            answer:
 *              type: string
 *            questionId:
 *              type: number
 *            typeQuestionId:
 *              type: number
 *            iscorrect:
 *              type: boolean
 *            createdAt:
 *              type: string
 *              format: date
 *            updatedAt:
 *              type: string
 *              format: date
 *      CreateSingalAnswerQuestion:
 *        type: object
 *        properties:
 *          answer:
 *            type: string
 *          questionId:
 *            type: number
 *          typeQuestionId:
 *            type: number
 *          iscorrect:
 *            type: boolean
 *          createdAt:
 *            type: string
 *            format: date
 *          updatedAt:
 *            type: string
 *            format: date
 *      UpdateAnswerQuestion:
 *        type: array
 *        items:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *            answer:
 *              type: string
 *            questionId:
 *              type: number
 *            typeQuestionId:
 *              type: number
 *            iscorrect:
 *              type: boolean
 *            createdAt:
 *              type: string
 *              format: date
 *            updatedAt:
 *              type: string
 *              format: date
 *      UpdateSingleAnswerQuestion:
 *        type: object
 *        properties:
 *          id:
 *            type: number
 *          answer:
 *            type: string
 *          questionId:
 *            type: number
 *          typeQuestionId:
 *            type: number
 *          iscorrect:
 *            type: boolean
 *          createdAt:
 *            type: string
 *            format: date
 *          updatedAt:
 *            type: string
 *            format: date
 *      AnswerQuestionResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *          data:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *              iscorrect:
 *                type: boolean
 *              typeQuestionId:
 *                type: number
 *              questionId:
 *                type: number
 *              answer:
 *                type: string
 *              createdAt:
 *                type: string
 *                format: date
 *              updatedAt:
 *                type: string
 *                format: date
 *      AnswerQuestionsResponse:
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
 *                iscorrect:
 *                  type: boolean
 *                typeQuestionId:
 *                  type: number
 *                questionId:
 *                  type: number
 *                answer:
 *                  type: string
 *                createdAt:
 *                  type: string
 *                  format: date
 *                updatedAt:
 *                  type: string
 *                  format: date
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=answerQuestion.schema.js.map