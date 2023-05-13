/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Autocomplete, Grid, TextField } from '@mui/material';
import { spacing } from '@mui/system';

const FilterReport = ({ handleOnFilter, dataMemberLevel }) => {
    return (
        <Grid style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            <Grid style={{ marginTop: 12 }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={dataMemberLevel}
                    sx={{ width: 260 }}
                    onChange={(e, val) => handleOnFilter('memberLevel', val)}
                    renderInput={(params) => <TextField name="name" {...params} label="Level Pelanggan" />}
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
