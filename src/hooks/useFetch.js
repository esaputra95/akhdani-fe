import { useState } from 'react';
import { api } from 'services';

export const useFetch = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [sort, setSort] = useState('asc');
    const [sortField, setSortField] = useState('id');
    const [queryForm, setQueryForm] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);
    const [totalData, setTotalData] = useState(0);

    const useGet = async (url, querys) => {
        try {
            let query = {
                page: page ? page + 1 : 1,
                limit: rowsPerPage ?? 20,
                sort: sort ?? 'asc',
                sortfield: sortField ?? 'name',
                ...queryForm,
                ...querys
            };
            setData([]);
            setLoading(true);
            const model = await api.get(url, { params: { ...query } });
            console.log('data : ', model.data.data.model);
            setLoading(false);
            setData(model.data.data.model);
            setTotalData(model?.data?.data?.meta?.total ?? 0);
            return 1;
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.message ?? `${error}`);
            return 0;
        }
    };

    const usePost = async (url, data) => {
        try {
            setLoading(true);
            await api.post(url, { ...data });
            setLoading(false);
            return 1;
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.message ?? `${error}`);
            return 0;
        }
    };

    const useDelete = async (url, id) => {
        try {
            setLoading(true);
            await api.delete(`${url}/${id}`);
            setLoading(false);
            return 1;
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.message ?? `${error}`);
        }
    };

    const useGetOne = async (url, id) => {
        try {
            setLoading(true);
            const model = await api.get(`${url}/${id}`);
            setLoading(false);
            return model.data.data.model;
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.message ?? `${error}`);
            return 0;
        }
    };

    const usePut = async (url, id, data) => {
        try {
            setLoading(true);
            await api.put(`${url}/${id}`, { ...data });
            setLoading(false);
            return 1;
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.message ?? `${error}`);
            return 0;
        }
    };

    return {
        isLoading,
        data,
        errorMessage,
        totalData,
        page,
        rowsPerPage,
        sort,
        sortField,
        queryForm,
        setLoading,
        setPage,
        setRowsPerPage,
        setQueryForm,
        setSortField,
        setSort,
        useGet,
        usePost,
        useDelete,
        useGetOne,
        usePut
    };
};
