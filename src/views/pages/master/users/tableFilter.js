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
                        style={{ width: '100%' }}
                        value={queryForm.name ?? ''}
                        onChange={(e) => handleOnQuery(e)}
                        onKeyDown={(e) => handleOnKeyDownQuery(e)}
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        size="small"
                        name="username"
                        style={{ width: '100%' }}
                        value={queryForm.username ?? ''}
                        onChange={(e) => handleOnQuery(e)}
                        onKeyDown={(e) => handleOnKeyDownQuery(e)}
                    />
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableFilter_;
