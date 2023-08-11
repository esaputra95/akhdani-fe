import { object, string } from 'yup';

export const citySchema = object({
    label: string().required('Data tidak boleh kosong'),
    latitude: string().required('Data tidak boleh kosong'),
    longitude: string().required('Data tidak boleh kosong'),
    province: string().required('Data tidak boleh kosong'),
    country: string().required('Data tidak boleh kosong'),
    island: string().required('Data tidak boleh kosong')
});
