import React from 'react';
import "./CalculateButtonStyles.css"

function CalculateButton() {
    return (
        <div className="calculator-submit-button-wrapper">
            <button
                type="submit"
                className="calculator-submit-button"
            >
                <span className="calculator-submit-button-text">Calculate</span>
            </button>
        </div>

    );
}

export default CalculateButton;