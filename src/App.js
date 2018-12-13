import React, { Component } from 'react';
import ReactDOM from 'react';
import { Provider, conncet } from 'react-redux';
import { createStore } from 'redux';
import counter from './reducers';
import './App.css';
import Counter from './Counter';

const store = createStore(counter);
const mapStateToProps = state => {
    return {
        value:state
    }
}
const mapDispatchToProps = state => {
    return{
        onIncrement:()=>{
            store.dispatch({
                type:"INCREMENT"
            })
        },
         onDecrement:()=>{
            store.dispatch({
                type:"DECREMENT"
            })
        }
    }
}

const App = conncet(mapStateToProps, mapDispatchToProps)(Counter);
export default App;

