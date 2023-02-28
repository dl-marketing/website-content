import React, {useState} from 'react';
import "./PurchaseComponentDetailsStyles.css"
import OptionalFieldsTrigger from "../../OptionalFieldsTrigger/OptionalFieldsTrigger";
import TextFieldWithLabel from "../../TextFieldWithLabel/TextFieldWithLabel";
import SplitTextFieldWithLabel from "../../SplitTextFieldWIthLabel/SplitTextFieldWithLabel";

function PurchaseDetailsComponent({formValues, setFormValues, handleChange}) {

    const [optionalFieldsShown, setOptionalFieldsShown] = useState(false)

    function handleOptionalFieldsClick() {
        if(optionalFieldsShown){
            setOptionalFieldsShown(false)
            document.getElementById("calculator-optional-fields-arrow").classList.remove("calculator-optional-fields-arrow-opened")
        }else{
            setOptionalFieldsShown(true)
            document.getElementById("calculator-optional-fields-arrow").classList.add("calculator-optional-fields-arrow-opened")
        }
    }

    return (
        <div className="calculator-purchase-details-fields">
            <h2 className="calculator-section-heading">
                Purchase Details
                <hr />
            </h2>
            <div className="calculator-two-column-layout">
                <TextFieldWithLabel label="Purchase Price" name="purchasePrice" adornment="$" adornmentPosition="start" handleChange={handleChange} formValues={formValues}/>
                <TextFieldWithLabel label="Interest Rate" name="interestRate" adornment="%" adornmentPosition="end" handleChange={handleChange} formValues={formValues}/>
                <SplitTextFieldWithLabel label="Down Payment" name1="downPaymentAmount" name2="downPaymentPercent" adornment="$" adornmentPosition="start" adornmentSecondary="%" adornmentPositionSecondary="end"  handleChange={handleChange} formValues={formValues}/>
                <TextFieldWithLabel label="Loan Term" name="loanTerm" adornment="Years" adornmentPosition="end" handleChange={handleChange} formValues={formValues}/>
            </div>
            <OptionalFieldsTrigger handleOptionalFieldsClick={handleOptionalFieldsClick} />
            {optionalFieldsShown ?
                <div className="calculator-two-column-layout">
                        <TextFieldWithLabel label="Property Tax" name="propertyTax" adornment="$" adornmentPosition="start" handleChange={handleChange} formValues={formValues}/>
                        <TextFieldWithLabel label="Total Insurance" name="totalInsurance" adornment="$" adornmentPosition="start" handleChange={handleChange} formValues={formValues}/>
                        <TextFieldWithLabel label="Monthly Maintenance" name="monthlyMaintenance" adornment="$" adornmentPosition="start" handleChange={handleChange} formValues={formValues}/>
                        <TextFieldWithLabel label="HOA Fees" name="hoaFees" adornment="$" adornmentPosition="start" handleChange={handleChange} formValues={formValues}/>
                </div>

                : <></>

            }


        </div>
    );
}

export default PurchaseDetailsComponent;