/* eslint-disable prettier/prettier */
import { Autocomplete, Button, DialogActions, DialogContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Form } from 'formik';

const FormCity = ({ handleChangeForm, cityFormik, handleClose }) => {
    return (
        <>
            <form onSubmit={cityFormik.handleSubmit}>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                label="Nama" 
                                id="label"
                                sx={{ width: '100%', marginTop: 1 }} 
                                onChange={handleChangeForm} 
                                value={cityFormik.values.label}
                                name="label"
                            />
                            <Typography color="red">{cityFormik.errors.label}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Latitude"
                                type="text" sx={{ width: '100%', marginTop: 1 }}
                                value={cityFormik.values.latitude}
                                onChange={handleChangeForm}
                                name="latitude"
                            />
                            <Typography color="red">{cityFormik.errors.latitude}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Longitude"
                                type="text" sx={{ width: '100%', marginTop: 1 }}
                                value={cityFormik.values.longitude}
                                onChange={handleChangeForm}
                                name="longitude"
                            />
                            <Typography color="red">{cityFormik.errors.longitude}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Privinsi"
                                type="text" sx={{ width: '100%', marginTop: 1 }}
                                value={cityFormik.values.province}
                                onChange={handleChangeForm}
                                name="province"
                            />
                            <Typography color="red">{cityFormik.errors.province}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Pulau</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={cityFormik.values.island}
                                    label="Pulau"
                                    name="island"
                                    onChange={handleChangeForm}
                                >
                                    <MenuItem value="Sumatra">Sumatra</MenuItem>
                                    <MenuItem value="Jawa">Jawa</MenuItem>
                                    <MenuItem value="Sulawesi">Sulawesi</MenuItem>
                                    <MenuItem value="Kalimantan">Kalimantan</MenuItem>
                                    <MenuItem value="Papua">Papua</MenuItem>
                                    <MenuItem value="Malaysia">Malaysia</MenuItem>
                                </Select>
                            </FormControl>
                            <Typography color="red">{cityFormik.errors.island}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Negara</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={cityFormik.values.country}
                                    label="Negara"
                                    name="country"
                                    onChange={handleChangeForm}
                                >
                                    <MenuItem value="Indonesia">Indonesia</MenuItem>
                                    <MenuItem value="Malaysia">Malaysia</MenuItem>
                                </Select>
                            </FormControl>
                            <Typography color="red">{cityFormik.errors.country}</Typography>
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

export default FormCity;
