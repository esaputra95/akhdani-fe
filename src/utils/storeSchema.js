import { object, string } from 'yup';

export const storeSchema = object({
    name: string().required('Store Name is a required field'),
    username: string().required(),
    email: string().email('Invalid email format').required(),
    password: string().required()
});
