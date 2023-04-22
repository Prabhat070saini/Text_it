
import React, { useContext, useState } from 'react';
import { Button, TextField } from "@mui/material"
import UploadButton from './UploadButton';
import { StenographyContext } from '../../context/Stenographycontext';
import { NavLink } from 'react-router-dom';
export default function Stenography() {
    const { decode } = useContext(StenographyContext);
    const { encode } = useContext(StenographyContext)
    const { secret } = useContext(StenographyContext);
    const [option, setOption] = useState('home');
    // let checkEncoded = false;
    function handleClick(event) {

        const { name } = event.currentTarget;
        if (name === 'home') {
            setOption('home');
            document.getElementById('encoded-image').style.display = 'none';
        } else if (name === 'encode') {
            setOption('encode');
        } else if (name === 'decode') {
            setOption('decode');
        }
    }
    return (
        <div>
            {/* <input type="file" /> */}
            <div>
                <NavLink to="/"><button>Back</button></NavLink>
                <h1>IMAGE<span id="word"> STEGO</span></h1>
            </div>
            {option === 'home' && <Button style={{ margin: '1rem' }} name='encode' onClick={handleClick} variant="contained" className='encode'>Encode</Button>}
            {option === 'home' && <Button style={{ margin: '1rem' }} name='decode' onClick={handleClick} variant="contained">Decode</Button>}
            {option === 'encode' && <TextField variant="outlined" multiline type="text" id="secret" name="secret" placeholder="Enter secret message" />}
            {option !== 'home' && <UploadButton />}
            {option === 'encode' && <Button style={{ margin: '1rem' }} onClick={encode} variant="contained">Encode</Button>}
            {option === 'decode' && <Button style={{ margin: '1rem' }} onClick={decode} variant="contained">Decode</Button>}
            {option !== 'home' && <Button style={{ margin: '1rem' }} name='home' onClick={handleClick} variant="contained">Return</Button>}
            {
                secret !== " " && <p>{secret}</p>
            }
            <img id="encoded-image" alt='' width={450} height={450}></img>
            <canvas id="canvas" width={450} height={450}></canvas>
        </div>
    )
}

