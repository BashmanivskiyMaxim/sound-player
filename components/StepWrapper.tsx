import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";
import React, { ReactElement, ReactNode } from 'react';

interface StepWrapperProps {
    activeStep: number;
    children: ReactNode
}

const steps = ['Info about track', 'Upload track cover', 'Upload track']

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step key={step} completed={activeStep > index}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent={"center"}>
                <Card>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;