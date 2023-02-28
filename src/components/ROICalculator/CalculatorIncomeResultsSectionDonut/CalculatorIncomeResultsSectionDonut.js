import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./CalculatorIncomeResultsSectionDonutStyles.css"

function CalculatorIncomeResultsSectionDonut({formValues, mortgagePayments}) {


    ChartJS.register(ArcElement, Tooltip, Legend);


    const calculatorData = {
        labels: ['Rental Income', 'Other Income'],
        datasets: [
            {
                data: [(parseInt(formValues.monthlyIncome) || 0),(parseInt(formValues.monthlyIncome) || 0)],

                backgroundColor: [
                    'rgba(22, 101, 216, 1)',
                    'rgba(1, 204, 116, 1)',
                ],
                borderColor: [
                    'rgba(22, 101, 216, 1)',
                    'rgba(1, 204, 116, 1)',
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
                        return "$" + Number(parseInt(tooltipItem.formattedValue)).toFixed(0).replace(/./g, function(c, i, a) {
                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                        });
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
                Income
                <hr />
            </h2>
            <div className="calculator-results-donut-with-legend">
                <div className="calculator-results-legend">
                    <div className="calculator-results-legend-inner">
                        <h3>
                            <div className="color-swatch" style={{backgroundColor:'rgba(22, 101, 216, 1)'}}></div>Rental Income: ${parseFloat(formValues.monthlyRent).toFixed(2) || 0}</h3>
                        <h3>
                            <div className="color-swatch" style={{backgroundColor:'rgba(1, 204, 116, 1)'}}></div>Other Income: ${parseFloat(formValues.monthlyIncome).toFixed(2) || 0}</h3>

                        <h3>
                            Total Monthly Income: ${parseFloat((parseInt(formValues.monthlyIncome) || 0) + (parseInt(formValues.monthlyRent) || 0)).toFixed(2)}

                        </h3>
                    </div>


                </div>
                <Doughnut data={calculatorData} options={options} className="donut-results-chart"/>
            </div>
        </div>
    );
}

export default CalculatorIncomeResultsSectionDonut;