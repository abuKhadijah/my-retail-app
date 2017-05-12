import React, { Component } from "react";
import MdRemove from "react-icons/lib/md/remove";
import MdAdd from "react-icons/lib/md/add";
export class QuantitySelector extends Component {
    constructor() {
        super();
        this.state = {
            currentValue: 1
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }
    handleIncrement() {
        this.setState({
            currentValue: this.state.currentValue + 1
        });
    }
    handleDecrement() {
        this.setState({
            currentValue: Math.max(0, this.state.currentValue - 1)
        });
    }
    render() {
        return <div className="quantity-selector grid-container">
            <label className="quantity-label grid-align-self-center grid-justify-self-start">quantity: </label>
            <div className="quantity-controls-container flex-container">
                <button className="decrement grid-align-self-center grid-justify-self-end circular-button" onClick={this.handleDecrement}><MdRemove fill="white" /></button>
                <span className="quantity-value grid-align-self-center grid-justify-self-end ">{ this.state.currentValue }</span>
                <button className="increment grid-align-self-center grid-justify-self-end circular-button" onClick={this.handleIncrement}><MdAdd fill="white"/></button>
            </div>
        </div>
    }
}
