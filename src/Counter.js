import React, { Component } from 'react';
import './Counter.less';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }
    incrementIfOdd() {
        if (this.props.value % 2 === 0) {
            this.props.onIncrement();
        }
    }
    incrementAsync() {
        setTimeout(this.props.onIncrement(), 1000)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <div>
                <p>Clicked:{value}times</p>
                <br />
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
                <button onClick={this.incrementAsync}>Increment async</button>
            </div>

        )
    }
}
export default Counter