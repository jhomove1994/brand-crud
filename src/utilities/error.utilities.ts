import { ValidationError } from 'class-validator';
import { Response } from 'express';
import { ERROR } from './messages.utilities';
import { ApiResponse } from '../models/general.model';

export const handleError = (
    error: any,
    res: Response,
): Response<ApiResponse<unknown>> => {
    if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
    }
    if (error instanceof Array && error[0] instanceof ValidationError) {
        const errors: unknown[] | undefined = [];
        error.forEach((e: ValidationError) => {
            errors.push(e.constraints);
        });
        return res.status(400).json({ message: errors });
    }
    return res.status(400).json({ message: ERROR.UNEXPECTED });
};
