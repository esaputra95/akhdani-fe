import { Autocomplete, Grid, TextField, Typography } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';

const FilterReport = ({ dataWarehouse, filter, handleOnChangeSelect, handleOnFilter, dataMember, dataUser, dataItem }) => {
    return (
        <>
            <Typography variant="h5">Filter Laporan</Typography>
            <Grid style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 2 }}>
                <Grid style={{ marginTop: 12 }}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            label="Periode"
                            sx={{ width: 260 }}
                            defaultValue={moment(moment().startOf('month').format('YYYY-MM-DD'))}
                            // value={moment().startOf('month').format('YYYY-MM-DD')}
                            onChange={(value) => handleOnFilter('startDate', value)}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid style={{ marginTop: 12 }}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            label="s/d Tanggal "
                            sx={{ width: 260 }}
                            defaultValue={moment(moment().endOf('month').format('YYYY-MM-DD'))}
                            // value={moment().startOf('month').format('YYYY-MM-DD')}
                            onChange={(value) => handleOnFilter('finishDate', value)}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid style={{ marginTop: 12 }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={dataWarehouse}
                        sx={{ width: 260 }}
                        onChange={(e, val) => handleOnFilter('warehouse', val)}
                        value={filter?.warehouse?.label ?? ''}
                        renderInput={(params) => (
                            <TextField onChange={(val) => handleOnChangeSelect('warehouse', val)} {...params} name="name" label="Cabang" />
                        )}
                    />
                </Grid>
                <Grid style={{ marginTop: 12 }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={dataMember}
                        onChange={(e, val) => handleOnFilter('member', val)}
                        sx={{ width: 260 }}
                        value={filter?.member?.label ?? ''}
                        renderInput={(params) => (
                            <TextField onChange={(val) => handleOnChangeSelect('member', val)} {...params} name="name" label="Pelanggan" />
                        )}
                    />
                </Grid>
                <Grid style={{ marginTop: 12 }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={[
                            { label: 'Tanggal', value: 'date' },
                            { label: 'No Invoice', value: 'serialNumber' }
                        ]}
                        sx={{ width: 260 }}
                        onChange={(e, val) => handleOnFilter('sortBy', val)}
                        renderInput={(params) => <TextField {...params} label="Sort Dari" />}
                    />
                </Grid>
                <Grid style={{ marginTop: 12 }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={[
                            { label: 'A - Z', value: 'asc' },
                            { label: 'Z - A', value: 'desc' }
                        ]}
                        sx={{ width: 260 }}
                        onChange={(e, val) => handleOnFilter('sort', val)}
                        renderInput={(params) => <TextField {...params} label="Sort" />}
                    />
                </Grid>
                <Grid style={{ marginTop: 12 }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={dataItem}
                        onChange={(e, val) => handleOnFilter('item', val)}
                        sx={{ width: 260 }}
                        value={filter?.item?.label ?? ''}
                        renderInput={(params) => (
                            <TextField onChange={(val) => handleOnChangeSelect('item', val)} {...params} name="name" label="Item" />
                        )}
                    />
                </Grid>
                <Grid style={{ marginTop: 12 }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={dataUser}
                        sx={{ width: 260 }}
                        onChange={(e, val) => handleOnFilter('user', val)}
                        value={filter?.user?.label ?? ''}
                        renderInput={(params) => (
                            <TextField onChange={(val) => handleOnChangeSelect('user', val)} {...params} name="name" label="User" />
                        )}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default FilterReport;
