import { ValidationError } from "./errors.js"

export const validateUser = ({name, email, age} = {}) => {
    if (!name) throw new ValidationError('name is required');
    if (typeof name !== 'string') throw new ValidationError('name must be a String');
    if (!age && age !== 0) throw new ValidationError('age is required');
    if (typeof age !== 'number' || !Number.isInteger(age)) throw new ValidationError('age must be an integer');
    if (age < 18 || age > 99) throw new ValidationError('age must be between 18 and 99');
    if (!email) throw new ValidationError('email is required');
    if (typeof email !== 'string') throw new ValidationError('email must be a string');
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) throw new ValidationError('email format is invalid');
}