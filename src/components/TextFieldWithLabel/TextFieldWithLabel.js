import React from 'react';
import InputAdornment from "@mui/material/InputAdornment";
import "./TextFieldWithLabelStyles.css"
import CssTextField from "../CSSTextField/CSSTextField";

function TextFieldWithLabel({ label, name, adornment, adornmentPosition, formValues, handleChange}) {

    return (
        <div className="calculator-single-field-label">
            <h3 className="calculator-field-label">
                {label}
            </h3>
            <CssTextField id="outlined-basic" variant="outlined" type="number" value={formValues[name]} name={name} onChange={(e) => handleChange(e)} InputProps={{
                endAdornment: adornmentPosition === "end" ? <InputAdornment position="end">{adornment}</InputAdornment> : "",
                startAdornment: adornmentPosition === "start" ? <InputAdornment position="start">{adornment}</InputAdornment> : "",
            }}/>
            
        </div>
    );
}

export default TextFieldWithLabel;