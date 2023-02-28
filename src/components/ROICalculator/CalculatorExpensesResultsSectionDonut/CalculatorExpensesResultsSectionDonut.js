import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./CalculatorExpensesResultsSectionDonutStyles.css"

function CalculatorExpensesResultsSectionDonut({formValues, mortgagePayments}) {


    ChartJS.register(ArcElement, Tooltip, Legend);


    const calculatorData = {
        labels: ['Mortgage', 'Property Tax', 'Insurance', 'Maintenance', 'HOA'],
        datasets: [
            {
                data: [mortgagePayments ?? 0, formValues.propertyTax ?? 0, formValues.totalInsurance ?? 0, formValues.monthlyMaintenance ?? 0, formValues.hoaFees ?? 0],

                backgroundColor: [
                    'rgba(22, 101, 216, 1)',
                    'rgba(1, 204, 116, 1)',
                    'rgba(255, 73, 152, 1)',
                    'rgba(255, 203, 98, 1)',
                    'rgba(122, 134, 153, 1)',
                ],
                borderColor: [
                    'rgba(22, 101, 216, 1)',
                    'rgba(1, 204, 116, 1)',
                    'rgba(255, 73, 152, 1)',
                    'rgba(255, 203, 98, 1)',
                    'rgba(122, 134, 153, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const options = {
        plugins: {
            tooltip: {
                backgroundColor: "#333333",
                displayColors: false,
                bodyAlign: "center",
                titleAlign: "center",
                callbacks: {
                    label: function(tooltipItem, data) {
                        return "$" + tooltipItem.formattedValue
                    }}
            },
            legend: {
                display: false
            }
        },
    }



    return (
        <div className="calculator-results-section-wrapper">
            <h2 className="calculator-section-heading">
                Expenses
                <hr />
            </h2>
            <div className="calculator-results-donut-with-legend">
                <div className="calculator-results-legend">
                    <div className="calculator-results-legend-inner">
                        <h3>
                            <div className="color-swatch" style={{backgroundColor:'rgba(22, 101, 216, 1)'}}></div>Estimated Mortgage: ${parseFloat(mortgagePayments).toFixed(2) || 0}</h3>
                        <h3>
                            <div className="color-swatch" style={{backgroundColor:'rgba(1, 204, 116, 1)'}}></div>Property Tax: ${parseFloat(formValues.propertyTax).toFixed(2) || 0}</h3>
                        <h3>
                            <div className="color-swatch" style={{backgroundColor: 'rgba(255, 73, 152, 1)'}}></div>Insurance: ${parseFloat(formValues.totalInsurance).toFixed(2) || 0}</h3>
                        <h3>
                            <div className="color-swatch" style={{backgroundColor:'rgba(255, 203, 98, 1)'}}></div>Maintenance: ${parseFloat(formValues.monthlyMaintenance).toFixed(2) || 0 }</h3>
                        <h3>
                            <div className="color-swatch" style={{backgroundColor:'rgba(122, 134, 153, 1)'}}></div>HOA: ${(parseFloat(formValues.hoaFees).toFixed(2)) || 0}</h3>

                        <h3>
                            Total Monthly Expenses: ${parseFloat((parseFloat(mortgagePayments) || 0) + (parseInt(formValues.propertyTax) || 0) + (parseInt(formValues.totalInsurance) || 0) + (parseInt(formValues.monthlyMaintenance) || 0) + (parseInt(formValues.hoaFees) || 0)).toFixed(2)}

                        </h3>
                    </div>


                </div>
                <Doughnut data={calculatorData} options={options} className="donut-results-chart"/>
            </div>
        </div>
    );
}

export default CalculatorExpensesResultsSectionDonut;