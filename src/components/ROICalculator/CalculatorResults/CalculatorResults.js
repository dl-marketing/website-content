import React, {useEffect, useState} from 'react';
import CalculatorExpensesResultsSectionDonut from "../CalculatorExpensesResultsSectionDonut/CalculatorExpensesResultsSectionDonut";
import "./CalculatorResultsStyles.css"
import CalculatorIncomeResultsSectionDonut
    from "../CalculatorIncomeResultsSectionDonut/CalculatorIncomeResultsSectionDonut";

function CalculatorResults({formValues, mortgagePayments}) {

    let cashFlow =  parseFloat((((parseInt(formValues.monthlyIncome) || 0) + (parseInt(formValues.monthlyRent) || 0))) - ((parseFloat(mortgagePayments) || 0) + (parseInt(formValues.propertyTax) || 0) + (parseInt(formValues.totalInsurance) || 0) + (parseInt(formValues.monthlyMaintenance) || 0) + (parseInt(formValues.hoaFees) || 0))).toFixed(2);


    return (
        <div className="calculator-results-wrapper">
            <CalculatorExpensesResultsSectionDonut formValues={formValues} mortgagePayments={mortgagePayments}/>
            <CalculatorIncomeResultsSectionDonut formValues={formValues} mortgagePayments={mortgagePayments}/>
            <h2 className="calculator-section-heading">
                Results
                <hr />
            </h2>
            <div className="calculator-two-column-layout">

                <div>
                    <h2 className="calculator-results-section-heading">
                        Monthly Cash  Flow
                    </h2>
                    <h2 className="calculator-results-section-value">
                        ${cashFlow}
                    </h2>
                </div>
                <div>
                    <h2 className="calculator-results-section-heading">
                        Cash-On-Cash Return
                    </h2>
                    <h2 className="calculator-results-section-value">
                        {parseFloat(((cashFlow * 12) / formValues.purchasePrice) * 100).toFixed(2)}%
                    </h2>
                </div>
                <div>
                    <h2 className="calculator-results-section-heading">
                        Net Operating Income (NOI)
                    </h2>
                    <h2 className="calculator-results-section-value">
                        ${parseFloat(((cashFlow * 12) * (formValues.vacancyRate / 100)) * 12).toFixed(2)}
                    </h2>
                </div>
                <div>
                    <h2 className="calculator-results-section-heading">
                        Cap Rate
                    </h2>
                    <h2 className="calculator-results-section-value">
                        {parseFloat((((cashFlow * 12) * (formValues.vacancyRate / 100)) * 12) / formValues.purchasePrice).toFixed(2) * 100}%
                    </h2>
                </div>

            </div>

        </div>

    );
}

export default CalculatorResults;