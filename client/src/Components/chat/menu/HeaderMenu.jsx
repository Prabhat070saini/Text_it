import React from "react";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";
import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;
const HeaderMenu = ({ setOpenDrawer }) => {
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

  const toggleDrawer = () => {
    setOpenDrawer(true);
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
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption
          onClick={() => {
            handleClose();
            toggleDrawer();
          }}
        >
          Profile
        </MenuOption>
        <Link to="/Stenography" style={{ textDecoration: "none" }}>
          {" "}
          <MenuOption>Stenography</MenuOption>
        </Link>
        <MenuOption
          onClick={() => {
            handleClose();
          }}
        >
          {/* { showlogoutButton ?
                    <Logout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onSignoutSuccess}
                    >
                    </Logout> : null
                } */}
        </MenuOption>
      </Menu>
      {/*  <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} /> */}
    </>
  );
};

export default HeaderMenu;
