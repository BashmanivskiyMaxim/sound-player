import { Grid, TextField } from "@mui/material";
import React from 'react';
import style from './FirstStepForm.module.scss'

const FirstStepForm = () => {
    return (
        <Grid container direction={"column"}>
            <TextField label={"Song Title"} />
            <TextField label={"Author`s Name"} />
            <TextField label={"Lyrics"} multiline rows={3} />
        </Grid>
    );
};

export default FirstStepForm;