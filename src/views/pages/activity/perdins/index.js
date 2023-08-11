import { useFormik } from 'formik';
import { useState } from 'react';
import { Alert, Button, Card, Dialog, DialogTitle } from '@mui/material';
import { IconCirclePlus } from '@tabler/icons';
import MainCard from 'ui-component/cards/MainCard';
import FormPerdin from './form';
import TablePerdin from './table';
import Loader from 'ui-component/Loader';
import { Stack } from '@mui/system';
import { useFetch } from 'hooks/useFetch';
import { useEffect } from 'react';
import { perdinDummy } from 'dummy/master/perdinDummy';
import { perdinGet, perdinPost, perdinDelete, perdinGetOne, perdinPut, perdinApprove, cityGet } from 'services/endPoint';
import AlertDialog from 'ui-component/atoms/confirmDialog';
import { useCallback } from 'react';
import { perdinSchema } from 'utils/perdinSchema';
import ApprovePerdin from './approve';
import moment from 'moment';

const Perdin = () => {
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ severity: '', status: false, message: '' });
    const [idDelete, setIdDelete] = useState(false);
    const [idUpdate, setIdUpdate] = useState(false);
    const [idApprove, setIdApprove] = useState(false);
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [previewApprove, setPreviewApprove] = useState();
    const {
        data: dataPerdin,
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
        useGet: getPerdin,
        usePost: postPerdin,
        useDelete: deletePostServer,
        useGetOne: getOnePerdin,
        usePut: putPerdin
    } = useFetch();
    const { data: dataCity, useGet: getCity } = useFetch();

    useEffect(() => {
        getData(perdinGet);
    }, [page, rowsPerPage, sortField, sort]);

    useEffect(() => {
        getCity(cityGet);
    }, []);

    useEffect(() => {
        if (errorMessage) {
            setAlert({ severity: 'error', status: true, message: errorMessage });
        }
    }, [errorMessage]);

    const getData = async (url) => {
        await getPerdin(url);
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
            perdinFormik.setValues({ ...perdinDummy });
        }
    };

    const handleChangeForm = (name, value) => {
        perdinFormik.setValues({ ...perdinFormik.values, [name]: value });
    };

    const handleOnApprove = async (id) => {
        try {
            setIdApprove(id);
            const data = await getOnePerdin(perdinGetOne, id);
            setPreviewApprove({ ...data });
        } catch (error) {}
    };

    const handleSubmitApprove = async (id, action) => {
        try {
            await postPerdin(perdinApprove, { id: id, action: action });
            setAlert({ severity: 'success', status: true, message: 'Data Perdin berhasil disimpan' });
            resetAlert();
            getData(perdinGet);
            setIdApprove(false);
        } catch (error) {
            setAlert({ severity: 'error', status: true, message: 'Data Perdin gagal disimpan' });
            resetAlert();
        }
    };

    const handleOnAction = useCallback(
        async (value) => {
            if (!idUpdate) {
                delete value.id;
                const fetch = await postPerdin(perdinPost, { ...value });
                if (fetch) {
                    getData(perdinGet);
                    setOpen(false);
                    perdinFormik.setValues({ ...perdinDummy });
                    setAlert({ severity: 'success', status: true, message: 'Data Toko berhasil ditambah' });
                    resetAlert();
                }
            } else {
                const fetch = await putPerdin(perdinPut, idUpdate, { ...value });
                if (fetch) {
                    getData(perdinGet);
                    setOpen(false);
                    perdinFormik.setValues({ ...perdinDummy });
                    setAlert({ severity: 'success', status: true, message: 'Data Toko berhasil diubah' });
                    resetAlert();
                }
            }
        },
        [idUpdate]
    );

    const perdinFormik = useFormik({
        initialValues: {
            ...perdinDummy
        },
        onSubmit: async (value, helper) => {
            await handleOnAction(value);
            helper.resetForm({ ...perdinDummy });
        },
        validationSchema: perdinSchema,
        validateOnChange: false
    });

    const handleConfirmDelete = useCallback(
        async (status) => {
            if (status) {
                setVisibleDelete(false);
                const fetch = await deletePostServer(perdinDelete, idDelete);
                if (fetch) {
                    getData(perdinGet);
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
            const data = await getOnePerdin(perdinGetOne, id);
            perdinFormik.setValues({
                goDate: moment(data.goDate).toDate(),
                returnDate: moment(data.returnDate).toDate(),
                originCity: data.originCity.id,
                destinationCity: data.destinationCity.id,
                description: data.description
            });
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

    if (isLoading) return <Loader />;

    return (
        <MainCard title="Perjalan Dinas" sx={{ width: '100%', overflow: 'hidden' }}>
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
                    Tambah Perdin
                </Button>
            </Card>
            <TablePerdin
                data={dataPerdin}
                handleOnDelete={handleOnDelete}
                handleOnPut={handleOnPut}
                handleOnApprove={handleOnApprove}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                page={page}
                rowsPerPage={rowsPerPage}
                handleChangePage={handleChangePage}
                totalData={totalData}
                handleOnSort={handleOnSort}
                sort={sort}
                sortField={sortField}
            />
            <Dialog
                maxWidth="xl"
                open={open}
                sx={{ width: '100%' }}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{ fontSize: 16 }}>
                    Tambah Perjalan Dinas
                </DialogTitle>
                <FormPerdin
                    perdinFormik={perdinFormik}
                    dataCity={dataCity}
                    handleChangeForm={handleChangeForm}
                    handleOnAction={handleOnAction}
                    handleClose={handleClose}
                />
            </Dialog>
            <Dialog
                maxWidth="xl"
                open={idApprove}
                sx={{ width: '100%' }}
                onClose={() => setIdApprove(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{ fontSize: 16 }}>
                    Approval Pengajuan Dinas
                </DialogTitle>
                <ApprovePerdin previewApprove={previewApprove} handleSubmitApprove={handleSubmitApprove} />
            </Dialog>
        </MainCard>
    );
};

export default Perdin;
