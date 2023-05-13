/* eslint-disable prettier/prettier */
import { Button, DialogActions, DialogContent, Grid, TextField } from '@mui/material';

const FormStoreServer = ({ formStoreServer, handleChangeForm, handleOnAction, handleClose }) => {
    return (
        <>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField 
                            label="Nama" 
                            sx={{ width: '100%', marginTop: 1 }} 
                            onChange={handleChangeForm} 
                            value={formStoreServer.name}
                            name="name"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Nama Owner"
                            sx={{ width: '100%', marginTop: 1 }}
                            onChange={handleChangeForm}
                            value={formStoreServer.pic}
                            name="pic"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            label="Telepon" 
                            sx={{ width: '100%', marginTop: 1 }} 
                            value={formStoreServer.hp}
                            onChange={handleChangeForm}
                            name="hp"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            label="Email"
                            type="email"
                            sx={{ width: '100%', marginTop: 1 }}
                            value={formStoreServer.email}
                            onChange={handleChangeForm}
                            name="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Alamat" 
                            sx={{ width: '100%', marginTop: 1 }} 
                            value={formStoreServer.address}
                            onChange={handleChangeForm}
                            name="address"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Username"
                            type="text" sx={{ width: '100%', marginTop: 1 }}
                            value={formStoreServer.username}
                            onChange={handleChangeForm}
                            name="username"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Password"
                            type="password"
                            sx={{ width: '100%', marginTop: 1 }}
                            onChange={handleChangeForm}
                            name="password"
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions sx={{ marginRight: 2, marginBottom: 2 }}>
                <Button onClick={handleClose}>Batal</Button>
                <Button variant="contained" onClick={handleOnAction}>
                    Simpan
                </Button>
            </DialogActions>
        </>
    );
};

export default FormStoreServer;
