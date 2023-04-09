import React from 'react'
import {  MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';
import { useState, useContext } from 'react';

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;
const  HeaderMenu = () => {

    const [open, setOpen] = useState(false);
    // const [openDrawer, setOpenDrawer] = useState(false);
    
    // const { setAccount, setShowloginButton, showlogoutButton, setShowlogoutButton } = useContext(AccountContext);
    // const { setPerson } = useContext(UserContext);


    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

  return (
    <>
    <MoreVert onClick={handleClick} />
    <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
    >
       <MenuItem onClick={handleClose}>Profile</MenuItem>
       <MenuItem onClick={handleClose}>My Account</MenuItem>
       <MenuItem onClick={handleClose}>Logout</MenuItem>

    </Menu>
    {/*  <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} /> */}
</>
  )
}

export default HeaderMenu