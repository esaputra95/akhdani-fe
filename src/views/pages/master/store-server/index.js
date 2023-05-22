/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { api } from 'services';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Alert, Button, Card, Dialog, DialogTitle } from '@mui/material';
import { IconCirclePlus } from '@tabler/icons';
import MainCard from 'ui-component/cards/MainCard';
import FormStoreServer from './form';
import TableStoreServer from './table';
import Loader from 'ui-component/Loader';
import { Stack } from '@mui/system';
import { useFetch } from 'hooks/useFetch';
import { useEffect } from 'react';
import { storeServerDummy } from 'dummy/master/storeServerDummy';
import { storeServerGet, storeServerPost, storeServerDelete, storeServerGetOne, storeServerPut } from 'services/endPoint';
import AlertDialog from 'ui-component/atoms/confirmDialog';
import { useCallback } from 'react';
import { storeSchema } from 'utils/storeSchema';

const MasterStoreServer = () => {
    const [open, setOpen] = useState(false);
    const [formStoreServer, setFormStoreServer] = useState({ ...storeServerDummy });
    const [alert, setAlert] = useState({ severity: '', status: false, message: '' });
    const [idDelete, setIdDelete] = useState(false);
    const [idUpdate, setIdUpdate] = useState(false);
    const [visibleDelete, setVisibleDelete] = useState(false);
    const {
        data: dataStoreServer,
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
        useGet: getStoreServer,
        usePost: postStoreServer,
        useDelete: deletePostServer,
        useGetOne: getOneStoreServer,
        usePut: putStoreServer
    } = useFetch();

    useEffect(() => {
        getData(storeServerGet);
    }, [page, rowsPerPage, sortField, sort]);

    useEffect(() => {
        if (errorMessage) {
            setAlert({ severity: 'error', status: true, message: errorMessage });
        }
    }, [errorMessage]);

    const getData = async (url) => {
        await getStoreServer(url);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        console.log({ event });
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
            setFormStoreServer({ ...storeServerDummy });
        }
    };

    const handleChangeForm = (e) => {
        formik.setValues({ ...formik.values, [e.target.name]: e.target.value });
    };

    const handleOnAction = useCallback(async () => {
        if (!idUpdate) {
            delete formStoreServer.id;
            const fetch = await postStoreServer(storeServerPost, { ...formStoreServer });
            if (fetch) {
                getData(storeServerGet);
                setOpen(false);
                setFormStoreServer({ ...storeServerDummy });
                setAlert({ severity: 'success', status: true, message: 'Data Toko berhasil ditambah' });
                resetAlert();
            }
        } else {
            const fetch = await putStoreServer(storeServerPut, idUpdate, { ...formStoreServer });
            if (fetch) {
                getData(storeServerGet);
                setOpen(false);
                setFormStoreServer({ ...storeServerDummy });
                setAlert({ severity: 'success', status: true, message: 'Data Toko berhasil diubah' });
                resetAlert();
            }
        }
    }, [idUpdate, formStoreServer]);

    const storeFormik = useFormik({
        initialValues: {
            ...storeServerDummy
        },
        onSubmit: () => handleOnAction,
        validationSchema: () => storeSchema,
        validateOnChange: false
    });

    const handleConfirmDelete = useCallback(
        async (status) => {
            if (status) {
                setVisibleDelete(false);
                const fetch = await deletePostServer(storeServerDelete, idDelete);
                if (fetch) {
                    getData(storeServerGet);
                    setAlert({ severity: 'success', status: true, message: 'Data Toko berhasil dihapus' });
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
            const data = await getOneStoreServer(storeServerGetOne, id);
            setFormStoreServer({ ...data });
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
            getData(storeServerGet);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <MainCard title="Data Toko" sx={{ width: '100%', overflow: 'hidden' }}>
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
                    Tambah Toko
                </Button>
            </Card>
            <TableStoreServer
                data={dataStoreServer}
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
                    Tambah Data Toko
                </DialogTitle>
                <FormStoreServer
                    storeFormik={storeFormik}
                    formStoreServer={formStoreServer}
                    handleChangeForm={handleChangeForm}
                    handleOnAction={handleOnAction}
                    handleClose={handleClose}
                />
            </Dialog>
        </MainCard>
    );
};

export default MasterStoreServer;
