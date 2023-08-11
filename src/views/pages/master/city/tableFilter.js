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
                        name="label"
                        style={{ width: '100%' }}
                        value={queryForm.label ?? ''}
                        onChange={(e) => handleOnQuery(e)}
                        onKeyDown={(e) => handleOnKeyDownQuery(e)}
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        size="small"
                        name="province"
                        style={{ width: '100%' }}
                        value={queryForm.province ?? ''}
                        onChange={(e) => handleOnQuery(e)}
                        onKeyDown={(e) => handleOnKeyDownQuery(e)}
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        size="small"
                        name="island"
                        style={{ width: '100%' }}
                        value={queryForm.island ?? ''}
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
