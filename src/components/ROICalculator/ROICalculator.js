import React, {useState} from 'react';
import "./ROICalculator.css"
import PurchaseDetailsComponent from "./PurchaseDetailsComponent/PurchaseDetailsComponent";
import ExpectedIncomeComponent from "./ExpectedIncomeComponent/ExpectedIncomeComponent";
import CalculateButton from "../CalculateButton/CalculateButton";
import CalculatorResults from "./CalculatorResults/CalculatorResults";


function RoiCalculator(props) {


    const [showResults, setShowResults] = useState(false)
    const [mortgagePayments, setMortgagePayments] = useState(0)
    const [formValues, setFormValues] = useState({
        purchasePrice: "",
        interestRate: "",
        downPaymentAmount: "",
        downPaymentPercent: "",
        loanTerm: "",
        propertyTax: "",
        totalInsurance: "",
        monthlyMaintenance: "",
        hoaFees: "",
        monthlyRent: "",
        monthlyIncome: "",
        vacancyRate: "",
    })

    const handleChange = (evt) => {
        evt.preventDefault()
        const value = evt.target.value;
        let downPaymentField = ""
        let downPaymentValue = 0

        if(evt.target.name === "downPaymentAmount"){
            downPaymentField = "downPaymentPercent";
            downPaymentValue = (value / (formValues.purchasePrice ?? 0)) * 100
        }else if (evt.target.name === "downPaymentPercent"){
            let percentDecimal = value / 100;
            downPaymentField = "downPaymentAmount";
            downPaymentValue = (formValues.purchasePrice ?? 0) * percentDecimal
        }

        setFormValues({
            ...formValues,
            [evt.target.name]: value,
            [downPaymentField]: downPaymentValue
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let temp = formValues

        for(let property in formValues){
            if(temp[property] === ""){
                temp[property] = 0
            }
        }

        setFormValues(temp)


        const mortgagePayments = calculateMortgage(temp.purchasePrice, temp.interestRate, temp.downPaymentAmount, temp.loanTerm)
        setMortgagePayments(mortgagePayments)
        setShowResults(true)
    }

    const calculateMortgage = (purchasePrice, interestRate, downPayment, loanTerm) => {

        const loanAmount = purchasePrice - downPayment;
        const monthlyInterestRate = (interestRate/100) / 12;
        const totalPayments = loanTerm * 12;

        return ((loanAmount * monthlyInterestRate) * (Math.pow((1 + monthlyInterestRate), totalPayments))) / (Math.pow((1 + monthlyInterestRate), totalPayments) - 1)

    }





    // useEffect(() => {
    //     console.log(formValues)
    // }, [formValues])



    return (
        <div className="calculator-wrapper">
            {!showResults ?

                <div className="calculator-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                        <PurchaseDetailsComponent formValues={formValues} setFormValues={setFormValues} handleChange={handleChange}/>
                        <ExpectedIncomeComponent formValues={formValues} setFormValues={setFormValues} handleChange={handleChange}/>
                        <CalculateButton />
                </form>
            </div>

                :

                <CalculatorResults formValues={formValues} mortgagePayments={mortgagePayments} />


            }

        </div>

        // <div className="calculator-wrapper">
        //
        //
        //         <div className="calculator-body">
        //             <form onSubmit={(e) => handleSubmit(e)}>
        //                 <PurchaseDetailsComponent formValues={formValues} setFormValues={setFormValues} handleChange={handleChange}/>
        //                 <ExpectedIncomeComponent formValues={formValues} setFormValues={setFormValues} handleChange={handleChange}/>
        //                 <CalculateButton />
        //             </form>
        //         </div>
        //
        //
        //
        //         <CalculatorResults formValues={formValues} mortgagePayments={mortgagePayments} />
        //
        //
        //
        //
        // </div>
    );
}

export default RoiCalculator;