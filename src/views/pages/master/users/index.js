import { useFormik } from 'formik';
import { useState } from 'react';
import { Alert, Button, Card, Dialog, DialogTitle } from '@mui/material';
import { IconCirclePlus } from '@tabler/icons';
import MainCard from 'ui-component/cards/MainCard';
import FormUser from './form';
import TableUser from './table';
import Loader from 'ui-component/Loader';
import { Stack } from '@mui/system';
import { useFetch } from 'hooks/useFetch';
import { useEffect } from 'react';
import { userDummy } from 'dummy/master/userDummy';
import { userGet, userPost, userDelete, userGetOne, userPut } from 'services/endPoint';
import AlertDialog from 'ui-component/atoms/confirmDialog';
import { useCallback } from 'react';
import { userSchema } from 'utils/userSchema';

const MasterUser = () => {
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ severity: '', status: false, message: '' });
    const [idDelete, setIdDelete] = useState(false);
    const [idUpdate, setIdUpdate] = useState(false);
    const [visibleDelete, setVisibleDelete] = useState(false);
    const {
        data: dataUser,
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
        useGet: getUser,
        usePost: postUser,
        useDelete: deletePostServer,
        useGetOne: getOneUser,
        usePut: putUser
    } = useFetch();

    useEffect(() => {
        getData(userGet);
    }, [page, rowsPerPage, sortField, sort]);

    useEffect(() => {
        if (errorMessage) {
            setAlert({ severity: 'error', status: true, message: errorMessage });
        }
    }, [errorMessage]);

    const getData = async (url) => {
        await getUser(url);
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
            userFormik.setValues({ ...userDummy });
        }
    };

    const handleChangeForm = (e) => {
        userFormik.setValues({ ...userFormik.values, [e.target.name]: e.target.value });
    };

    const handleOnAction = useCallback(
        async (value) => {
            if (!idUpdate) {
                delete value.id;
                const fetch = await postUser(userPost, { ...value });
                if (fetch) {
                    getData(userGet);
                    setOpen(false);
                    userFormik.setValues({ ...userDummy });
                    setAlert({ severity: 'success', status: true, message: 'Data User berhasil ditambah' });
                    resetAlert();
                }
            } else {
                const fetch = await putUser(userPut, idUpdate, { ...value });
                if (fetch) {
                    getData(userGet);
                    setOpen(false);
                    userFormik.setValues({ ...userDummy });
                    setAlert({ severity: 'success', status: true, message: 'Data User berhasil diubah' });
                    resetAlert();
                }
            }
        },
        [idUpdate]
    );

    const userFormik = useFormik({
        initialValues: {
            ...userDummy
        },
        onSubmit: async (value, helper) => {
            await handleOnAction(value);
            helper.resetForm({ ...userDummy });
        },
        validationSchema: userSchema,
        validateOnChange: false
    });

    const handleConfirmDelete = useCallback(
        async (status) => {
            if (status) {
                setVisibleDelete(false);
                const fetch = await deletePostServer(userDelete, idDelete);
                if (fetch) {
                    getData(userGet);
                    setAlert({ severity: 'success', status: true, message: 'Data User berhasil dihapus' });
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
            const data = await getOneUser(userGetOne, id);
            userFormik.setValues({ ...data });
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
            getData(userGet);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <MainCard title="Data User" sx={{ width: '100%', overflow: 'hidden' }}>
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
                    Tambah User
                </Button>
            </Card>
            <TableUser
                data={dataUser}
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
                    Tambah Data User
                </DialogTitle>
                <FormUser
                    userFormik={userFormik}
                    handleChangeForm={handleChangeForm}
                    handleOnAction={handleOnAction}
                    handleClose={handleClose}
                />
            </Dialog>
        </MainCard>
    );
};

export default MasterUser;
