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

const TableUser = ({
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
            <TableContainer style={{overflow:'auto'}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHeader_
                        handleOnSort={handleOnSort}
                        sortField={sortField}
                        sort={sort}
                        key={1}
                    />
                    <TableFilter_ 
                        queryForm={queryForm}
                        handleOnQuery={handleOnQuery}
                        handleOnKeyDownQuery={handleOnKeyDownQuery}
                        key={2}
                    />
                    <TableBody_ 
                        data={data} 
                        handleOnPut={handleOnPut} 
                        handleOnDelete={handleOnDelete} 
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

export default TableUser;
