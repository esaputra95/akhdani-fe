import { TableCell, TableHead, TableRow, TextField } from '@mui/material';
import React from 'react';

const TableFilter_ = ({ queryForm, handleOnQuery, handleOnKeyDownQuery }) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="right"></TableCell>
                <TableCell>
                    <TextField
                        size="small"
                        name="name"
                        value={queryForm.name ?? ''}
                        onChange={(e) => handleOnQuery(e)}
                        onKeyDown={(e) => handleOnKeyDownQuery(e)}
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        size="small"
                        name="pic"
                        value={queryForm.pic ?? ''}
                        onChange={(e) => handleOnQuery(e)}
                        onKeyDown={(e) => handleOnKeyDownQuery(e)}
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        size="small"
                        name="hp"
                        value={queryForm.hp ?? ''}
                        onChange={(e) => handleOnQuery(e)}
                        onKeyDown={(e) => handleOnKeyDownQuery(e)}
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        size="small"
                        name="email"
                        value={queryForm.email ?? ''}
                        onChange={(e) => handleOnQuery(e)}
                        onKeyDown={(e) => handleOnKeyDownQuery(e)}
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        size="small"
                        name="username"
                        value={queryForm.username ?? ''}
                        onChange={(e) => handleOnQuery(e)}
                        onKeyDown={(e) => handleOnKeyDownQuery(e)}
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        size="small"
                        name="address"
                        value={queryForm.address ?? ''}
                        onChange={(e) => handleOnQuery(e)}
                        onKeyDown={(e) => handleOnKeyDownQuery(e)}
                    />
                </TableCell>
                <TableCell align="right"></TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableFilter_;
