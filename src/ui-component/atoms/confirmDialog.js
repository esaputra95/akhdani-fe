import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconAlertCircle } from '@tabler/icons';
import { Typography } from '@mui/material';

const AlertDialog = ({ status, type, title, message, handleConfirm, label }) => {
    return (
        <Dialog open={status} maxWidth="xs" aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle style={{ display: 'flex', alignItems: 'center' }} id="alert-dialog-title">
                <IconAlertCircle color="orange" style={{ marginRight: 4 }} />
                <Typography>{title}</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleConfirm(false)} color="inherit">
                    Batal
                </Button>
                {type === 'warning' ? (
                    <Button color="error" onClick={() => handleConfirm(true)} variant="contained">
                        {label}
                    </Button>
                ) : (
                    <Button color="primary" variant="contained">
                        {label}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default AlertDialog;
