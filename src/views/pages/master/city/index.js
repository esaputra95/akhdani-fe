import { useFormik } from 'formik';
import { useState } from 'react';
import { Alert, Button, Card, Dialog, DialogTitle } from '@mui/material';
import { IconCirclePlus } from '@tabler/icons';
import MainCard from 'ui-component/cards/MainCard';
import FormCity from './form';
import TableCity from './table';
import Loader from 'ui-component/Loader';
import { Stack } from '@mui/system';
import { useFetch } from 'hooks/useFetch';
import { useEffect } from 'react';
import { cityDummy } from 'dummy/master/cityDummy';
import { cityGet, cityPost, cityDelete, cityGetOne, cityPut } from 'services/endPoint';
import AlertDialog from 'ui-component/atoms/confirmDialog';
import { useCallback } from 'react';
import { citySchema } from 'utils/citySchema';

const MasterCity = () => {
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ severity: '', status: false, message: '' });
    const [idDelete, setIdDelete] = useState(false);
    const [idUpdate, setIdUpdate] = useState(false);
    const [visibleDelete, setVisibleDelete] = useState(false);
    const {
        data: dataCity,
        errorMessage,
        isLoading,
        totalData,
        page,
        sort,
        queryForm,
        rowsPerPage,
        sortField,
        setPage,
        setQueryForm,
        setRowsPerPage,
        setSort,
        setSortField,
        useGet: getCity,
        usePost: postCity,
        useDelete: deletePostServer,
        useGetOne: getOneCity,
        usePut: putCity
    } = useFetch();

    useEffect(() => {
        getData(cityGet);
    }, [page, rowsPerPage, sortField, sort]);

    useEffect(() => {
        if (errorMessage) {
            setAlert({ severity: 'error', status: true, message: errorMessage });
        }
    }, [errorMessage]);

    const getData = async (url) => {
        await getCity(url);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        if (idUpdate) {
            setIdUpdate(false);
            cityFormik.setValues({ ...cityDummy });
        }
    };

    const handleChangeForm = (e) => {
        cityFormik.setValues({ ...cityFormik.values, [e.target.name]: e.target.value });
    };

    const handleOnAction = useCallback(
        async (value) => {
            console.log('ayam');
            if (!idUpdate) {
                delete value.id;
                const fetch = await postCity(cityPost, { ...value });
                if (fetch) {
                    getData(cityGet);
                    setOpen(false);
                    cityFormik.setValues({ ...cityDummy });
                    setAlert({ severity: 'success', status: true, message: 'Data City berhasil ditambah' });
                    resetAlert();
                }
            } else {
                const fetch = await putCity(cityPut, idUpdate, { ...value });
                if (fetch) {
                    getData(cityGet);
                    setOpen(false);
                    cityFormik.setValues({ ...cityDummy });
                    setAlert({ severity: 'success', status: true, message: 'Data City berhasil diubah' });
                    resetAlert();
                }
            }
        },
        [idUpdate]
    );

    const cityFormik = useFormik({
        initialValues: {
            ...cityDummy
        },
        onSubmit: async (value, helper) => {
            console.log('disni');
            await handleOnAction(value);
            helper.resetForm({ ...cityDummy });
        },
        validationSchema: citySchema,
        validateOnChange: false
    });

    const handleConfirmDelete = useCallback(
        async (status) => {
            if (status) {
                setVisibleDelete(false);
                const fetch = await deletePostServer(cityDelete, idDelete);
                if (fetch) {
                    getData(cityGet);
                    setAlert({ severity: 'success', status: true, message: 'Data City berhasil dihapus' });
                    resetAlert();
                }
            } else {
                setVisibleDelete(false);
            }
        },
        [idDelete]
    );

    const handleOnDelete = (id) => {
        setVisibleDelete(true);
        setIdDelete(id);
    };

    const handleOnPut = async (id) => {
        try {
            setIdUpdate(id);
            const data = await getOneCity(cityGetOne, id);
            cityFormik.setValues({ ...data });
            setOpen(true);
        } catch (error) {}
    };

    const resetAlert = () => {
        setInterval(() => {
            setAlert({ status: false, severity: '', message: '' });
        }, 2500);
    };

    const handleOnSort = (key) => {
        let newSort = sort === 'asc' ? 'desc' : 'asc';
        setSortField(key);
        setSort(newSort);
    };

    const handleOnQuery = (e) => {
        setQueryForm({ ...queryForm, [e.target.name]: e.target.value });
    };

    const handleOnKeyDownQuery = (e) => {
        if (e.keyCode === 13) {
            getData(cityGet);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <MainCard title="Data City" sx={{ width: '100%', overflow: 'hidden' }}>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {alert.status ? (
                    <Alert sx={{ marginBottom: 4 }} severity={alert.severity}>
                        {alert.message}
                    </Alert>
                ) : null}
            </Stack>
            <AlertDialog
                status={visibleDelete}
                type="warning"
                label="Ya, Hapus"
                title="Anda yakin akan meghapus data ini?"
                message="Data akan dihapus secara permanent, dan tidak dapat dikembalikan lagi"
                handleConfirm={handleConfirmDelete}
            />
            <Card sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Button sx={{ borderRadius: 2 }} onClick={handleClickOpen} variant="contained" startIcon={<IconCirclePlus />} size="large">
                    Tambah Kota
                </Button>
            </Card>
            <TableCity
                data={dataCity}
                handleOnDelete={handleOnDelete}
                handleOnPut={handleOnPut}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                page={page}
                rowsPerPage={rowsPerPage}
                handleChangePage={handleChangePage}
                totalData={totalData}
                handleOnSort={handleOnSort}
                sort={sort}
                sortField={sortField}
                queryForm={queryForm}
                handleOnQuery={handleOnQuery}
                handleOnKeyDownQuery={handleOnKeyDownQuery}
            />
            <Dialog
                maxWidth="sm"
                open={open}
                sx={{ width: '100%' }}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{ fontSize: 16 }}>
                    Tambah Data Kota
                </DialogTitle>
                <FormCity
                    cityFormik={cityFormik}
                    handleChangeForm={handleChangeForm}
                    handleOnAction={handleOnAction}
                    handleClose={handleClose}
                />
            </Dialog>
        </MainCard>
    );
};

export default MasterCity;
