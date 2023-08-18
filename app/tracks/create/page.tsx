"use client"
import FileUpload from "@/components/FileUpload";
import Navbar from "@/components/Navbar";
import StepWrapper from "@/components/StepWrapper";
import { Button, Grid } from "@mui/material";
import React, { useState } from 'react';

const Page = () => {

    const [activeStep, setActiveStep] = useState(0)

    const next = () => {
        setActiveStep(prev => prev + 1)
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
    }


    return (
        <div>
            <Navbar />
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && <h1>1</h1>}
                {activeStep === 1 && <FileUpload file={''} setFile={() => ({})} />}
                {activeStep === 2 && <h1>3</h1>}
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button disabled={activeStep === 3} onClick={next}>Next</Button>
            </Grid>
        </div>
    );
};

export default Page;