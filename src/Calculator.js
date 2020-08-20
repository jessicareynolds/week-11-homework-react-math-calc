import React from 'react'

class Calculator extends React.Component {
    constructor () {
        super()

        this.state= {
            firstOperand: 0,
            operator: '+',
            secondOperand: 0,
            result: '0'
        }

    }
    /* Event target is the element that had the event
        in this case the firstOperand input had a "change" event */
    onfirstOperandChange = (event) => {
        const newValue = event.target.value;
        this.setState({
            firstOperand: newValue
        })
        
    }

    onsecondOperandChange = (event) => {
        const newValue = event.target.value;
        this.setState({
            secondOperand: newValue
        })
        
    }

    onOperatorChange = (event) => {
        const operator = event.target.value;
        this.setState({
            operator
        })
    }

    calculate = () => {
        let result = 0;
        const {firstOperand, secondOperand, operator} = this.state;

        switch (operator) {
            case '+':
                result = parseInt(firstOperand) + parseInt(secondOperand);
                break;
            case '-':
                result = parseInt(firstOperand) - parseInt(secondOperand);
                break;
            case '*':
                result = parseInt(firstOperand) * parseInt(secondOperand);
                break;
            case '/':
                result = parseInt(firstOperand) / parseInt(secondOperand);
                break;
            default:
                result = 0;
        }
        this.setState({
            result
        })
    }


    render () {
        return (
            <div>

                {/* first operand */}
                <input type="number" onChange={this.onfirstOperandChange} />

                <select onChange={this.onOperatorChange}>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>

                {/* second operand */}
                <input type="number" onChange={this.onsecondOperandChange} />

                <button onClick={this.calculate}>=</button>

                <input value={this.state.result} type="text" disabled />
            </div>
        )
    }

}

export default Calculator;