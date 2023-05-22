/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import moment from 'moment';
import { money } from 'utils/moneyFormat';

const labelTabel = [
    { label: 'No', align: 'left' },
    { label: 'Invoice', align: 'left' },
    { label: 'tanggal', align: 'left' },
    { label: 'Cabang', align: 'left' },
    { label: 'Supplier', align: 'left' },
    { label: 'Jumlah', align: 'rigth' },
    { label: 'Sub Total', align: 'right' },
    { label: 'Pajak', align: 'right' },
    { label: 'Potongan', align: 'right' },
    { label: 'Total', align: 'right' }
];

const TableReport = ({ data, filter, typeReport }) => {
    let footer = [
        { label: 'Quantity item', value: 0 },
        { label: 'Sub Total', value: 0 },
        { label: 'Potongan', value: 0 },
        { label: 'Pajak', value: 0 },
        { label: 'total', value: 0 }
    ];
    return (
        <TableContainer component={Paper}>
            <Table aria-label="sticky table" sx={{ minWidth: 1200 }}>
                <TableHead>
                    <TableRow>
                        {labelTabel.map((value) => {
                            if (value.align === 'left') {
                                return <TableCell>{value.label}</TableCell>;
                            } else {
                                return <TableCell align="right">{value.label}</TableCell>;
                            }
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data &&
                        data.map((value, key) => {
                            footer[0].value += parseFloat(value.quantity) ?? 0;
                            footer[1].value += parseFloat(value.subTotal) ?? 0;
                            footer[2].value += parseFloat(value.nominalDiscount) ?? 0;
                            footer[3].value += parseFloat(value.nominalTax) ?? 0;
                            footer[4].value += parseFloat(value.total) ?? 0;
                            let detail = value.purchase_details;
                            return (
                                <>
                                    <TableRow>
                                        <TableCell>{key + 1}</TableCell>
                                        <TableCell>{value.invoice}</TableCell>
                                        <TableCell>{moment(value.date ?? '').format('DD-MM-YYYY')}</TableCell>
                                        <TableCell>{value?.warehouse?.name ?? ''}</TableCell>
                                        <TableCell>{value?.supplier?.name ?? ''}</TableCell>
                                        <TableCell align="right">{money.format(value?.quantity ?? 0)}</TableCell>
                                        <TableCell align="right">{money.format(value?.subTotal ?? 0)}</TableCell>
                                        <TableCell align="right">{money.format(value?.nominalTax ?? 0)}</TableCell>
                                        <TableCell align="right">{money.format(value?.nominalDiscount ?? 0)}</TableCell>
                                        <TableCell align="right">{money.format(value?.total ?? 0)}</TableCell>
                                    </TableRow>
                                    {typeReport === 'detail'
                                        ? detail.map((valueDetail) => (
                                              <TableRow>
                                                  <TableCell></TableCell>
                                                  <TableCell></TableCell>
                                                  <TableCell></TableCell>
                                                  <TableCell>{valueDetail?.product?.code ?? ''}</TableCell>
                                                  <TableCell>{valueDetail?.product?.name ?? ''}</TableCell>
                                                  <TableCell>{valueDetail.unit_conversion?.unit?.name ?? ''}</TableCell>
                                                  <TableCell align="right">{money.format(valueDetail?.quantity ?? 0)}</TableCell>
                                                  <TableCell align="right">{money.format(valueDetail?.price ?? 0)}</TableCell>
                                                  <TableCell align="right">{money.format(valueDetail?.nominalDiscount ?? 0)}</TableCell>
                                                  <TableCell align="right">{money.format(valueDetail?.total ?? 0)}</TableCell>
                                              </TableRow>
                                          ))
                                        : null}
                                </>
                            );
                        })}
                    {footer.map((valueFooter) => (
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell sx={{ fontWeight: 'medium' }} colSpan={8}>
                                {valueFooter.label}
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'medium' }} align="right">
                                {money.format(valueFooter.value ?? 0)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableReport;
