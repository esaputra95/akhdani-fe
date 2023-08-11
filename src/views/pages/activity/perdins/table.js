/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import {
    Table,
    TableContainer,
    TablePagination
} from '@mui/material';
import TableFilter_ from './tableFilter';
import TableHeader_ from './tableHeader';
import TableBody_ from './tableBody';

const TableStoreServer = ({
    data,
    handleOnDelete,
    handleOnPut,
    handleOnApprove,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    totalData,
    handleOnSort,
    sort,
    sortField
}) => {
    return (
        <>
            <TableContainer style={{overflow:'auto'}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHeader_
                        handleOnSort={handleOnSort}
                        sortField={sortField}
                        sort={sort}
                        key={1}
                    />
                    <TableBody_ 
                        data={data} 
                        handleOnPut={handleOnPut} 
                        handleOnDelete={handleOnDelete} 
                        handleOnApprove={handleOnApprove}
                        key={3}
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
