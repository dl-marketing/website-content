import React from 'react';
import InputAdornment from "@mui/material/InputAdornment";
import "./SplitTextFieldWithLabelStyles.css"
import CssTextField from "../CSSTextField/CSSTextField";

function TextFieldWithLabel({ label, adornment, adornmentPosition, adornmentSecondary, adornmentPositionSecondary, handleChange, formValues, name1, name2}) {



    return (
        <div className="calculator-single-field-label">
            <h3 className="calculator-field-label">
                {label}
            </h3>
            <div className="split-text-field">
                <CssTextField id="outlined-basic" value={formValues[name1]} variant="outlined" type="number" name={name1} className="split-text-field-classes-first" onChange={(e) => handleChange(e)} InputProps={{
                    startAdornment: adornmentPosition === "start" ? <InputAdornment position="start">{adornment}</InputAdornment> : "",
                    endAdornment: adornmentPosition === "end" ? <InputAdornment position="end">{adornment}</InputAdornment> : "",
                }}/>
                <CssTextField id="outlined-basic" value={formValues[name2]} variant="outlined" type="number" name={name2} className="split-text-field-classes-last" onChange={(e) => handleChange(e)} InputProps={{
                    startAdornment: adornmentPositionSecondary === "start" ? <InputAdornment position="start">{adornmentSecondary}</InputAdornment> : "",
                    endAdornment: adornmentPositionSecondary === "end" ? <InputAdornment position="end">{adornmentSecondary}</InputAdornment> : "",
                }}/>
            </div>

        </div>
    );
}

export default TextFieldWithLabel;