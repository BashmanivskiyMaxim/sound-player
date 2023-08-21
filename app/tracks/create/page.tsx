"use client";
import FileUpload from "@/components/upload/FileUpload";
import Navbar from "@/components/layout/Navbar";
import StepWrapper from "@/components/upload/StepWrapper";
import { Button, Grid } from "@mui/material";
import React, { useState } from "react";

const Page = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null)
  const [audio, setAudio] = useState(null)

  const next = () => {
    setActiveStep((prev) => prev + 1);
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <div>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && <h1>1</h1>}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Upload track cover</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Upload track</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button disabled={activeStep === 3} onClick={next}>
          Next
        </Button>
      </Grid>
    </div>
  );
};

export default Page;
