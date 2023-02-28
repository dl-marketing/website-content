import React from 'react';
import "./ExpectedIncomeComponentStyles.css"
import TextFieldWithLabel from "../../TextFieldWithLabel/TextFieldWithLabel";

function ExpectedIncomeComponent({formValues, setFormValues, handleChange}) {

    return (
        <div className="calculator-purchase-details-fields">
            <h2 className="calculator-section-heading">
                Expected Property Income
                <hr />
            </h2>
            <div className="calculator-two-column-layout">
                <TextFieldWithLabel label="Monthly Rent" name="monthlyRent" adornment="$" adornmentPosition="start" handleChange={handleChange} formValues={formValues} />
                <TextFieldWithLabel label="Other Monthly Income" name="monthlyIncome" adornment="$" adornmentPosition="start" handleChange={handleChange} formValues={formValues} />
                <TextFieldWithLabel label="Vacancy Rate" name="vacancyRate" adornment="%" adornmentPosition="end" handleChange={handleChange} formValues={formValues} />
            </div>


        </div>
    );
}

export default ExpectedIncomeComponent;