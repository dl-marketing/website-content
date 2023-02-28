import React from 'react';
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== "focusColor"
})((p) => ({

    "& label.Mui-focused": {
        color: "black",
        fontSize: "30px"
    },

    "& .MuiOutlinedInput-root:hover": {
        "& > fieldset": {
            borderColor: "#1665D8"
        }
    },

    "& .MuiInput-underline:after": {
        borderBottomColor: "#1665D8"
    },

    "& .MuiFilledInput-underline:after": {
        borderBottomColor: "#1665D8"
    },

    "& .MuiOutlinedInput-root": {
        borderRadius: 8,
        boxShadow: "0px 0px 0px 2px rgba(239,245,254,1)",
        padding: "0 15px 0 15px",
        "&.Mui-focused fieldset": {
            borderColor: "#1665D8"
        }
    }
}));

export default CssTextField;