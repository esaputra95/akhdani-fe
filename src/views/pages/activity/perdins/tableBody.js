/* eslint-disable prettier/prettier */
import { Button, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { HasAccess } from '@permify/react-role';
import { IconPencil, IconTrash, IconBookUpload } from '@tabler/icons';
import React from 'react';
import { money } from 'utils/moneyFormat';

const TableBody_ = ({ data, handleOnPut, handleOnDelete, handleOnApprove }) => {
    return (
        <TableBody>
            {data?.length > 0 ? (
                data.map((row, key) => {
                    return (
                        <TableRow hover role="checkbox" sx={{ padding: -4 }} tabIndex={-1} key={row.id}>
                            <TableCell size="small">{key + 1}</TableCell>
                            <TableCell size="small">{row.originCity?.label ?? ''}</TableCell>
                            <TableCell size="small">{row.destinationCity?.label ?? ''}</TableCell>
                            <TableCell size="small">{row.goDate ?? ''}</TableCell>
                            <TableCell size="small">{row.returnDate ?? ''}</TableCell>
                            <TableCell size="small">{row.distance ?? ''}</TableCell>
                            <TableCell size="small">{money.format(row.pocketMoney ?? 0)}</TableCell>
                            <TableCell size="small">
                                <Button variant="contained" color={`${row.status==="approve" ? "success" : row.status==="reject" ? 'error':'primary'}`}>{row.status==="approve" ? "Approved" : row.status==="reject" ? "Rejected" : "Pending" }</Button>
                            </TableCell>
                            
                            <TableCell sx={{ width: 120 }} size="small" align="right">
                                <HasAccess
                                    roles={["approve"]}
                                >
                                    <span title='Approve'>
                                        <IconBookUpload
                                            cursor="pointer"
                                            height={24}
                                            width={24}
                                            color="#2196f3"
                                            onClick={() => handleOnApprove(row.id)}
                                        />
                                    </span>
                                </HasAccess>
                                {
                                    row.status==="submit" ? 
                                    <>
                                        <span title='Update'>
                                            <IconPencil
                                                cursor="pointer"
                                                height={16}
                                                width={16}
                                                style={{ marginRight: 2 }}
                                                color="#00b341"
                                                onClick={() => handleOnPut(row.id)}
                                            />
                                        </span>
                                        <IconTrash
                                            cursor="pointer"
                                            height={16}
                                            width={16}
                                            color="#ff4500"
                                            onClick={() =>handleOnDelete(row.id)}
                                        />
                                    </>: 
                                    <>
                                        <IconPencil
                                            height={16}
                                            width={16}
                                            color="#8e9094"
                                        />
                                        <IconTrash
                                            height={16}
                                            width={16}
                                            color="#8e9094"
                                            
                                        />
                                    </>
                                    
                                }
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