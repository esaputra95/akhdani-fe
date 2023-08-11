import { object, string } from 'yup';

export const userSchema = object({
    name: string().required('Store Name is a required field'),
    username: string().required(),
    password: string().required()
});
