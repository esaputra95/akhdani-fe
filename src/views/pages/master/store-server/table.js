/* eslint-disable prettier/prettier */
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    TextField,
    Typography
} from '@mui/material';
import { IconPencil, IconTrash } from '@tabler/icons';
import TableFilter_ from './tableFilter';
import TableHeader_ from './tableHeader';
import TableBody_ from './tableBody';

const TableStoreServer = ({
    data,
    handleOnDelete,
    handleOnPut,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    totalData,
    handleOnSort,
    sort,
    sortField,
    queryForm,
    handleOnQuery,
    handleOnKeyDownQuery
}) => {
    return (
        <>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHeader_
                        handleOnSort={handleOnSort}
                        sortField={sortField}
                        sort={sort}
                    />
                    <TableFilter_ 
                        queryForm={queryForm}
                        handleOnQuery={handleOnQuery}
                        handleOnKeyDownQuery={handleOnKeyDownQuery} 
                    />
                    <TableBody_ 
                        data={data} 
                        handleOnPut={handleOnPut} 
                        handleOnDelete={handleOnDelete} 
                    />
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={totalData}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
};

export default TableStoreServer;
