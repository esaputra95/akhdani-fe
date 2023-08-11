import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { NumberFormatBase } from 'react-number-format';
// import { TextField } from '@material-ui/core';
// import { NumberFormat } from 'react-number-format';

export const handleValueChange = (name, setFieldValue) => (val) => setFieldValue(name, val.floatValue);

const CurrencyFieldText = ({ currencySymbol, ...props }) => {
    const [displayValue, setDisplayValue] = useState();
    return (
        <NumberFormatBase
            customInput={TextField}
            variant="outlined"
            isNumericString={true}
            thousandSeparator={true}
            value={displayValue}
            decimalScale={2}
            onValueChange={(vals) => setDisplayValue({ value: vals.formattedValue })}
            InputProps={{
                startAdornment: <span>{currencySymbol}</span>
            }}
            {...props}
        />
    );
};

CurrencyFieldText.defaultProps = {
    currencySymbol: ''
};

export default CurrencyFieldText;
