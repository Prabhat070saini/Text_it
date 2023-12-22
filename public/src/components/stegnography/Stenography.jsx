import React, { useContext, useState } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { Button, TextField } from "@mui/material";
import UploadButton from "./UploadButton";
import { StenographyContext } from "../../context/Stenographycontext";
import { NavLink } from "react-router-dom";
import "./stenography.css";
export default function Stenography() {
  const { decode } = useContext(StenographyContext);
  const { encode } = useContext(StenographyContext);
  const { secret, setSecret } = useContext(StenographyContext);
  const [option, setOption] = useState("home");
  // let checkEncoded = false;
  function handleClick(event) {
    const { name } = event.currentTarget;
    if (name === "home") {
      setOption("home");
      document.getElementById("encoded-image").style.display = "none";
    } else if (name === "encode") {
      setOption("encode");
    } else if (name === "decode") {
      setOption("decode");
    }
    setSecret("");
  }
  return (
    <div className="bodys">
      {/* <input type="file" /> */}
      <header className="header">
        <div className="back_btn_container ">
          <NavLink to="/">
            <AiOutlineRollback className="back_btn" />
          </NavLink>
        </div>
        <h1>
          IMAGE<span id="word"> STEGO</span>
        </h1>
      </header>
      <div>
        <div className="encode_decode">
          {option === "home" && (
            <Button
              style={{ margin: "1rem" }}
              name="encode"
              onClick={handleClick}
              variant="contained"
              className="encode"
            >
              Encode
            </Button>
          )}
          {option === "home" && (
            <Button
              style={{ margin: "1rem" }}
              name="decode"
              onClick={handleClick}
              variant="contained"
            >
              Decode
            </Button>
          )}
        </div>
        <div>
          <img
            id="encoded-image"
            alt=""
            width={450}
            height={450}
            className="imagedisplay imagedisplayshow"
          ></img>
          <canvas id="canvas" width={450} height={450}></canvas>
        </div>
        <div className="allbtn">
          <div className="text_btnup">
            {option === "encode" && (
              <TextField
                variant="outlined"
                multiline
                type="text"
                id="secret"
                name="secret"
                placeholder="Enter secret message"
              />
            )}
            {option !== "home" && <UploadButton />}
          </div>
          <div>
            {option === "encode" && (
              <Button
                style={{ margin: "1rem" }}
                onClick={encode}
                variant="contained"
              >
                Encode
              </Button>
            )}
            {option === "decode" && (
              <Button
                style={{ margin: "1rem" }}
                onClick={decode}
                variant="contained"
              >
                Decode
              </Button>
            )}
            {option !== "home" && (
              <Button
                style={{ margin: "1rem" }}
                name="home"
                onClick={handleClick}
                variant="contained"
              >
                Return
              </Button>
            )}
          </div>
          {secret !== "" ? (
            <div className="Decodedmassage_container">
              {" "}
              <p className="Decodedmassage">
                <span>Decoded Massage: </span>
                {secret}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
