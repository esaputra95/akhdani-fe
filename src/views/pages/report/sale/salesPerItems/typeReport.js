/* eslint-disable no-unused-vars */
import { Button, Grid, Typography } from '@mui/material';
import { IconArrowBigRightLine } from '@tabler/icons';
import React from 'react';

const labelTypeReport = [{ label: 'Laporan Per Item', value: 'faktur' }];

const TypeReport = ({ typeReport, handleOnClickTypeReport }) => (
    <>
        <Typography variant="h5">Tipe Leporan</Typography>
        <Grid
            sx={{
                display: 'grid',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                marginTop: 2
            }}
        >
            {labelTypeReport.map((value) => {
                let bgColor = typeReport === value.value ? { backgroundColor: 'primary' } : { backgroundColor: '#eef2f6' };
                return (
                    <>
                        <Button
                            variant="contained"
                            onClick={() => handleOnClickTypeReport(value.value)}
                            sx={{
                                display: 'flex',
                                marginTop: 2,
                                textAlign: 'center',
                                alignItems: 'center',
                                width: 200,
                                height: 72,
                                padding: 1,
                                borderRadius: 2,
                                ...bgColor
                            }}
                        >
                            <IconArrowBigRightLine />
                            <label>{value.label}</label>
                        </Button>
                    </>
                );
            })}
        </Grid>
    </>
);

export default TypeReport;
