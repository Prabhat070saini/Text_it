import React, { useContext } from "react";
import { Button } from "@mui/material";

import { StenographyContext } from "../../context/Stenographycontext";
// import { loadImage } from '../stenography';

export default function UploadButton() {
  const { loadImage } = useContext(StenographyContext);
  return (
    // <label htmlFor="upload-photo">
    <input
      // style={{ display: 'none' }}
      id="upload-photo"
      name="upload-photo"
      type="file"
      onChange={loadImage}
    />

    // <Button style={{ margin: '1rem' }} variant="contained" component="span">
    //     Upload Image
    // </Button>

    // </label>
  );
}
