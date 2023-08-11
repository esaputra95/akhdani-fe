/* eslint-disable prettier/prettier */
import { Autocomplete, Button, DialogActions, DialogContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Form } from 'formik';

const FormUser = ({ handleChangeForm, userFormik, handleClose }) => {
    return (
        <>
            <form onSubmit={userFormik.handleSubmit}>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                label="Nama" 
                                id="name"
                                sx={{ width: '100%', marginTop: 1 }} 
                                onChange={handleChangeForm} 
                                value={userFormik.values.name}
                                name="name"
                            />
                            <Typography color="red">{userFormik.errors.name}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Username"
                                type="text" sx={{ width: '100%', marginTop: 1 }}
                                value={userFormik.values.username}
                                onChange={handleChangeForm}
                                name="username"
                            />
                            <Typography color="red">{userFormik.errors.username}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                type="password"
                                sx={{ width: '100%', marginTop: 1 }}
                                value={userFormik.values.password}
                                onChange={handleChangeForm}
                                name="password"
                            />
                            <Typography color="red">{userFormik.errors.password}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={userFormik.values.role}
                                    label="Role"
                                    name="role"
                                    onChange={handleChangeForm}
                                >
                                    <MenuItem value="Admin">Admin</MenuItem>
                                    <MenuItem value="employee">Pegawai</MenuItem>
                                </Select>
                            </FormControl>
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

export default FormUser;
