import React from "react";
import RegisterForm from "./RegisterForm";
import { Box, Modal } from "@mui/material";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // 90% of the screen width for mobile
  maxWidth: 500, // Max width for larger screens
  bgcolor: 'background.paper',
 
  outline: 'none',
  boxShadow: 24,
  p: 2, // Reduce padding on smaller screens
  display: 'flex',
  flexDirection: 'column', // Make sure form is stacked
  gap: 2, // Spacing between form fields
};
const AuthModal = ({handleClose, open}) => {

  const location = useLocation();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname==="/register"? <RegisterForm /> : <LoginForm/> }
          
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
