/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const labelTabel = ['No', 'Nama', 'Merek', 'Jenis', 'Satuan', 'Harga Beli', 'Harga Jual'];

const TableReport = ({ data, filter }) => {
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
                            let stock = value.stocks.find((a) => a.warehousId - filter.warehouseId);
                            let conversi = value.unit_conversions.sort((a, b) => a.quantity - b.quantity);
                            return (
                                <TableRow>
                                    <TableCell>{key + 1}</TableCell>
                                    <TableCell>{value.name}</TableCell>
                                    <TableCell>{value?.product_brand?.name ?? ''}</TableCell>
                                    <TableCell>{value?.product_type?.name ?? ''}</TableCell>
                                    <TableCell>{conversi.map((val) => val?.unit?.name ?? '')}</TableCell>
                                    <TableCell>
                                        {conversi.map((val) => val.buy_prices.find((a) => a.storeId === filter.warehouseId)?.price ?? 0)}
                                    </TableCell>
                                    <TableCell>
                                        {conversi.map((val) => val.sell_prices.find((a) => a.storeId === filter.warehouseId)?.price ?? 0)}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableReport;
