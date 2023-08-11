/* eslint-disable prettier/prettier */
import {Button, DialogActions, DialogContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const FormUser = ({ handleChangeForm, pocketMoneyFormik, handleClose }) => {
    return (
        <>
            <form onSubmit={pocketMoneyFormik.handleSubmit}>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Jenis</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={pocketMoneyFormik.values.type}
                                    label="Jenis"
                                    name="type"
                                    onChange={handleChangeForm}
                                >
                                    <MenuItem value="in_province">Beda Kota dalam satu Provinsi</MenuItem>
                                    <MenuItem value="in_island">Beda Kota, beda Provinsi dalam satu Pulau</MenuItem>
                                    <MenuItem value="in_country">Beda Kota dan beda Pulau</MenuItem>
                                    <MenuItem value="out_country">Luar Negri</MenuItem>
                                </Select>
                                <Typography color="red">{pocketMoneyFormik.errors.type}</Typography>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Mata Uang</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={pocketMoneyFormik.values.currency}
                                    label="Mata Uang"
                                    name="currency"
                                    onChange={handleChangeForm}
                                >
                                    <MenuItem value="id-IDR">Rupiah ID</MenuItem>
                                    <MenuItem value="us-USD">Dolar AS</MenuItem>
                                </Select>
                                <Typography color="red">{pocketMoneyFormik.errors.currency}</Typography>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Jarak Minimal (KM)"
                                type="text" sx={{ width: '100%', marginTop: 1 }}
                                value={pocketMoneyFormik.values.distance}
                                onChange={handleChangeForm}
                                name="distance"
                            />
                            <Typography color="red">{pocketMoneyFormik.errors.distance}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Uang Saku"
                                type="nominal"
                                sx={{ width: '100%', marginTop: 1 }}
                                value={pocketMoneyFormik.values.nominal}
                                onChange={handleChangeForm}
                                name="nominal"
                            />
                            <Typography color="red">{pocketMoneyFormik.errors.nominal}</Typography>
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
