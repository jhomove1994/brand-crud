import { v4 as uuid } from 'uuid';

export const generateRandomPassword = (): string => {
    return uuid().split('-')[0];
};
