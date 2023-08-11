/* eslint-disable prettier/prettier */
import { Button, DialogActions, DialogContent, Grid, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import moment from 'moment';
import { money } from 'utils/moneyFormat';

const ApprovePerdin = ({ previewApprove, handleSubmitApprove }) => {
    return (
        <>
            <DialogContent sx={{justifyContent: 'center', minHeight:400, width: 800}}>
                <Grid container >
                    <Grid xs={12} style={{ marginBottom:12, marginTop:12, width:'100%' }}>
                        <TextField disabled value={previewApprove?.user?.name ?? ''} label='Name' style={{width:'100%'}}/>
                    </Grid>
                    <Grid xs={6} style={{ marginBottom:12, marginTop:12, width:'100%' }}>
                        <TextField disabled value={previewApprove?.originCity?.label ?? ''} label='Kota Asal' style={{width:'100%'}}/>
                    </Grid>
                    <Grid xs={6} style={{ marginBottom:12, marginTop:12, width:'100%' }}>
                        <TextField disabled value={previewApprove?.destinationCity?.label ?? ''} label='Kota Tujuan' style={{width:'100%'}}/>
                    </Grid>
                    <Grid xs={6} style={{ marginBottom:12, marginTop:12, width:'100%' }}>
                        <TextField disabled value={ moment(previewApprove?.goDate?? '').format('DD MMMM YYYY')} label='Tanggal Mulai' style={{width:'100%'}}/>
                    </Grid>
                    <Grid xs={6} style={{ marginBottom:12, marginTop:12, width:'100%' }}>
                        <TextField disabled value={ moment(previewApprove?.returnDate?? '').format('DD MMMM YYYY')} label='Tanggal Selesai' style={{width:'100%'}}/>
                    </Grid>
                    <Grid xs={12} style={{ marginBottom:12, marginTop:12, width:'100%' }}>
                        <TextField disabled value={ previewApprove?.description?? ''} multiline rows={3} label='Keterangan' style={{width:'100%'}}/>
                    </Grid>
                    <Grid xs={12}>
                        <Table style={{width:'100%'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Total Hari</TableCell>
                                    <TableCell align="center">Jarak Tempuh</TableCell>
                                    <TableCell align="center">Total Uang Perdin</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">{moment.duration(moment(previewApprove.returnDate).diff(moment(previewApprove.goDate))).asDays()}</TableCell>
                                    <TableCell align="center">{money.format(previewApprove.distance)}</TableCell>
                                    <TableCell align="center">{previewApprove.currency??''} - {money.format(previewApprove.pocketMoney)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions sx={{ marginRight: 2, marginBottom: 2 }}>
                <Button variant='contained' color='error' onClick={()=> handleSubmitApprove(previewApprove.id, 'reject')}>Reject</Button>
                <Button variant="contained" onClick={()=>handleSubmitApprove(previewApprove.id, 'approve')} type='submit'>
                    Approve
                </Button>
            </DialogActions>
        </>
    );
};

export default ApprovePerdin;
