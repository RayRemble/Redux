import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  }

  handleDecrement = () => {
    this.props.decrement();
  }
  
  render() {
    const { handleIncrement, handleDecrement } = this;
    const { number } = this.props;

    return (
      <Counter 
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        number={number}
      />
    );
  }
}

export default connect(
    (state) => ({
      number: state.counter.number
    }), 
    (dispatch) => bindActionCreators(counterActions, dispatch)
  )(CounterContainer);