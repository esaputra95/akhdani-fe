import { object, string, number } from 'yup';

export const pocketMoneySchema = object({
    type: string().required('Tipe tidak boleh kosong'),
    currency: string().required(),
    distance: number().required(),
    nominal: number().required().positive()
});
