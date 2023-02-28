import React from 'react';
import { AiFillCaretDown } from "react-icons/ai"
import "./OptionalFieldsStyles.css"


function OptionalFieldsTrigger({handleOptionalFieldsClick}) {

    return (
        <div className="calculator-purchase-details-optional-fields-wrapper" onClick={() => handleOptionalFieldsClick()}>
            <h3 className="calculator-optional-fields-heading">
                Optional
            </h3>
            <AiFillCaretDown id="calculator-optional-fields-arrow" className="calculator-optional-fields-arrow"  />
        </div>
    );
}

export default OptionalFieldsTrigger;