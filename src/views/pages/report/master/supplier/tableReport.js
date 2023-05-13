/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const labelTabel = ['No', 'Nama', 'Alamat', 'Kota', 'Provinsi', 'Negara', 'Telepon', 'Pos', 'Email'];

const TableReport = ({ data }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="sticky table" sx={{ minWidth: 1200 }}>
                <TableHead>
                    <TableRow>
                        {labelTabel.map((value) => (
                            <TableCell>{value}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data &&
                        data.map((value, key) => {
                            return (
                                <TableRow>
                                    <TableCell>{key + 1}</TableCell>
                                    <TableCell>{value.name ?? ''}</TableCell>
                                    <TableCell>{value.address ?? ''}</TableCell>
                                    <TableCell>{value.city ?? ''}</TableCell>
                                    <TableCell>{value.provincy ?? ''}</TableCell>
                                    <TableCell>{value.country ?? ''}</TableCell>
                                    <TableCell>{value.phoneNumber ?? ''}</TableCell>
                                    <TableCell>{value.postalCode ?? ''}</TableCell>
                                    <TableCell>{value.email ?? ''}</TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableReport;
