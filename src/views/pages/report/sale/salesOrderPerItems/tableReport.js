/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import moment from 'moment';
import { money } from 'utils/moneyFormat';

const labelTabel = [
    { label: 'No', align: 'left' },
    { label: 'Invoice', align: 'left' },
    { label: 'Kode', align: 'left' },
    { label: 'Name', align: 'left' },
    { label: 'Jenis', align: 'left' },
    { label: 'Merek', align: 'left' },
    { label: 'Supplier', align: 'left' },
    { label: 'Satuan', align: 'left' },
    { label: 'Jml Pesan', align: 'right' },
    { label: 'Jml Terima', align: 'right' },
    { label: 'Total', align: 'right' }
];

const TableReport = ({ data, filter, typeReport, isloading }) => {
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
                            footer[0].value += parseFloat(value.quantityOrder) ?? 0;
                            footer[1].value += parseFloat(value.subTotal) ?? 0;
                            footer[4].value += parseFloat(value.total) ?? 0;
                            return (
                                <>
                                    <TableRow>
                                        <TableCell>{key + 1}</TableCell>
                                        <TableCell>{value?.sales_order?.invoice ?? ''}</TableCell>
                                        <TableCell>{value?.product?.code ?? ''}</TableCell>
                                        <TableCell>{value?.product?.name ?? ''}</TableCell>
                                        <TableCell>{value?.product?.product_type?.name ?? ''}</TableCell>
                                        <TableCell>{value?.product?.product_brand?.name ?? ''}</TableCell>
                                        <TableCell>{value?.sales_order?.member?.name ?? ''}</TableCell>
                                        <TableCell>{value?.unit_conversion?.unit?.name ?? ''}</TableCell>
                                        <TableCell align="right">{money.format(value?.quantityOrder ?? 0)}</TableCell>
                                        <TableCell align="right">{money.format(value?.quantityAccept ?? 0)}</TableCell>
                                        <TableCell align="right">{money.format(value?.total ?? 0)}</TableCell>
                                    </TableRow>
                                </>
                            );
                        })}
                    {isloading === false
                        ? footer.map((valueFooter) => (
                              <TableRow>
                                  <TableCell></TableCell>
                                  <TableCell sx={{ fontWeight: 'medium' }} colSpan={9}>
                                      {valueFooter.label}
                                  </TableCell>
                                  <TableCell sx={{ fontWeight: 'medium' }} align="right">
                                      {money.format(valueFooter.value ?? 0)}
                                  </TableCell>
                              </TableRow>
                          ))
                        : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableReport;
