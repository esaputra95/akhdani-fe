/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Autocomplete, Grid, TextField } from '@mui/material';

const FilterReport = ({
    dataType,
    dataBrand,
    dataWarehouse,
    handleOnChangeInputBrand,
    handleOnChangeInputType,
    handleOnChangeInputWarehouse,
    handleOnFilter
}) => {
    return (
        <Grid style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <Grid style={{ marginTop: 12 }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={dataType}
                    sx={{ width: 260 }}
                    onChange={(e, val) => handleOnFilter('typeId', val)}
                    renderInput={(params) => <TextField onChange={handleOnChangeInputType} name="name" {...params} label="Jenis Item" />}
                />
            </Grid>
            <Grid style={{ marginTop: 12 }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo1"
                    options={dataBrand}
                    sx={{ width: 260 }}
                    onChange={(e, val) => handleOnFilter('brandId', val)}
                    renderInput={(params) => <TextField onChange={handleOnChangeInputBrand} {...params} name="name" label="Merek" />}
                />
            </Grid>
            <Grid style={{ marginTop: 12 }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={dataWarehouse}
                    sx={{ width: 260 }}
                    onChange={(e, val) => handleOnFilter('warehouseId', val)}
                    renderInput={(params) => <TextField onChange={handleOnChangeInputWarehouse} {...params} name="name" label="Cabang" />}
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
        </Grid>
    );
};

export default FilterReport;
