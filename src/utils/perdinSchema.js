import { number, object, string } from 'yup';

export const perdinSchema = object({
    goDate: string().required('Tanggal mulai harus di isi'),
    returnDate: string().required('Tanggal mulai harus di isi'),
    originCity: number().required(),
    destinationCity: number().required(),
    description: string().required()
});
