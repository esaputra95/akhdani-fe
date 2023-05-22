/* eslint-disable prettier/prettier */
import { Button, DialogActions, DialogContent, FormControl, Grid, TextField, Typography } from '@mui/material';
import { Form } from 'formik';

const FormStoreServer = ({ handleChangeForm, storeFormik, handleClose }) => {
    return (
        <>
            <form onSubmit={storeFormik.handleSubmit}>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField 
                                label="Nama" 
                                id="name"
                                sx={{ width: '100%', marginTop: 1 }} 
                                onChange={handleChangeForm} 
                                value={storeFormik.values.name}
                                name="name"
                            />
                            <Typography color="red">{storeFormik.errors.name}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Nama Owner"
                                sx={{ width: '100%', marginTop: 1 }}
                                onChange={handleChangeForm}
                                value={storeFormik.values.pic}
                                name="pic"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                label="Telepon" 
                                sx={{ width: '100%', marginTop: 1 }} 
                                value={storeFormik.values.hp}
                                onChange={handleChangeForm}
                                name="hp"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                label="Email"
                                type="email"
                                sx={{ width: '100%', marginTop: 1 }}
                                value={storeFormik.values.email}
                                onChange={handleChangeForm}
                                name="email"
                            />
                            <Typography color="red">{storeFormik.errors.email}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Alamat" 
                                sx={{ width: '100%', marginTop: 1 }} 
                                value={storeFormik.values.address}
                                onChange={handleChangeForm}
                                name="address"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Username"
                                type="text" sx={{ width: '100%', marginTop: 1 }}
                                value={storeFormik.values.username}
                                onChange={handleChangeForm}
                                name="username"
                            />
                            <Typography color="red">{storeFormik.errors.username}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Password"
                                type="password"
                                sx={{ width: '100%', marginTop: 1 }}
                                value={storeFormik.values.password}
                                onChange={handleChangeForm}
                                name="password"
                            />
                            <Typography color="red">{storeFormik.errors.password}</Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ marginRight: 2, marginBottom: 2 }}>
                    <Button onClick={handleClose}>Batal</Button>
                    <Button variant="contained" type='submit'>
                        Simpan
                    </Button>
                </DialogActions>
            </form>
        </>
    );
};

export default FormStoreServer;
