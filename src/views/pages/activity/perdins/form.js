/* eslint-disable prettier/prettier */
import { Autocomplete, Button, DialogActions, DialogContent, Grid, TextField, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';

const FormPerdin = ({ handleChangeForm, perdinFormik, handleClose, dataCity }) => {
    return (
        <>
            <form onSubmit={perdinFormik.handleSubmit}>
                <DialogContent sx={{justifyContent: 'center', padding:8}}>
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                value={perdinFormik.values.originCity}
                                onChange={(e, val) => handleChangeForm('originCity', val.id??'')}
                                options={dataCity}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="Kota Asal" />}
                            />
                            <Typography color="red">{perdinFormik.errors.originCity}</Typography>
                        </Grid>
                        <Grid xs={6}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                value={perdinFormik.values.destinationCity}
                                onChange={(e, val) => handleChangeForm('destinationCity', val.id??'')}
                                options={dataCity}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="Kota Tujuan" />}
                            />
                            <Typography color="red">{perdinFormik.errors.destinationCity}</Typography>
                        </Grid>
                        <Grid xs={6} style={{marginTop: 12}}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Tanggal Awal"
                                    sx={{ width: '100%' }}
                                    name='goDate'
                                    value={perdinFormik.values.goDate}
                                    onChange={(value) => handleChangeForm('goDate', value)}
                                />
                            </LocalizationProvider>
                            <Typography color="red">{perdinFormik.errors.goDate}</Typography>
                        </Grid>
                        <Grid xs={6} style={{marginTop: 12}}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Tanggal Selesai"
                                    sx={{ width: '100%' }}
                                    name='returnDate'
                                    value={perdinFormik.values.returnDate}
                                    onChange={(value) => handleChangeForm('returnDate', value)}
                                />
                            </LocalizationProvider>
                            <Typography color="red">{perdinFormik.errors.goDate}</Typography>
                        </Grid>
                        <Grid xs={12} style={{marginTop: 24}}>
                            <TextField
                                placeholder="Keterangan"
                                multiline
                                style={{width:'100%'}}
                                value={perdinFormik.values.description}
                                onChange={(value) => handleChangeForm('description', value.target.value)}
                                rows={2}
                            />
                            <Typography color="red">{perdinFormik.errors.description}</Typography>
                        </Grid>
                        <Grid xs={12} style={{flexDirection:'column', justifyContent: 'center', textAlign:'center', marginTop:8, backgroundColor: '#dbd9d9', padding: 16}}>
                            <Typography>Total Perjalanan Dinas</Typography>
                            <Typography style={{fontSize:28}}>{Math.ceil(moment.duration(moment(perdinFormik.values.returnDate).diff(moment(perdinFormik.values.goDate))).asDays())} Hari</Typography>
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

export default FormPerdin;
