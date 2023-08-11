/* eslint-disable prettier/prettier */
import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { IconPencil, IconTrash } from '@tabler/icons';
import React from 'react';
import { money } from 'utils/moneyFormat';

const TableBody_ = ({ data, handleOnPut, handleOnDelete }) => {
    return (
        <TableBody>
            {data?.length > 0 ? (
                data.map((row, key) => {
                    return (
                        <TableRow hover role="checkbox" sx={{ padding: -4 }} tabIndex={-1} key={row.id}>
                            <TableCell size="small">{key + 1}</TableCell>
                            <TableCell size="small">
                                {
                                    row.type==="in_province" ? 'Beda Kota dalam satu Provinsi' : row.type==="in_island" ? 'Beda Kota, beda Provinsi dalam satu Pulau' : row.type==="in_country" ? 'Beda Kota dan beda Pulau' : 'Luar Negeri' 
                                }
                            </TableCell>
                            <TableCell size="small">
                                {
                                    row.currency ==="id-IDR" ? 'Rupiah ID' : 'DOLAR USD'
                                }
                            </TableCell>
                            <TableCell align='right' size="small">{ money.format(row.distance ?? 0) }</TableCell>
                            <TableCell align='right' size="small">{ money.format(row.nominal ?? 0) }</TableCell>
                            <TableCell sx={{ width: 72 }} size="small" align="right">
                                <IconPencil
                                    cursor="pointer"
                                    height={16}
                                    width={16}
                                    style={{ marginRight: 2 }}
                                    color="#00b341"
                                    onClick={() => handleOnPut(row.id)}
                                />
                                <IconTrash
                                    cursor="pointer"
                                    height={16}
                                    width={16}
                                    color="#ff4500"
                                    onClick={() => handleOnDelete(row.id)}
                                />
                            </TableCell>
                        </TableRow>
                    );
                })
            ) : (
                <Typography>Data Kosong</Typography>
            )}
        </TableBody>
    );
};

export default TableBody_