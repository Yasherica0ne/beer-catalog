import React, { Component } from 'react';
import { connect } from 'react-redux';

class BeerFilterForm extends Component {
    constructor(props) {
        super(props);

        function onABVChange(event) {
            dispatch => {
                dispatch({ 
                    type: 'CHANGE_ABV_VALUE',
                    value: event.target.value
                 });
            }
        }
        
        function onIBUChange(event) {
            dispatch => {
                dispatch({ 
                    type: 'CHANGE_IBU_VALUE',
                    value: event.target.value
                 });
            }
        }
        
        this.onEBCChange(event) {
            dispatch => {
                dispatch({ 
                    type: 'CHANGE_EBC_VALUE',
                    value: event.target.value
                 });
            }
        }
        
        this.onBeerNameChange = (event) => {
            dispatch => {
                dispatch({ 
                    type: 'CHANGE_BEER_NAME',
                    value: event.target.value
                 });
            }
        }
        
        this.onYeastChange = (event) => {
            dispatch => {
                dispatch({ 
                    type: 'CHANGE_YEAST',
                    value: event.target.value
                 });
            }
        }
        
        this.onBrewedChange = (event) => {
            dispatch => {
                dispatch({ 
                    type: 'CHANGE_BREWED_DATE',
                    value: event.target.value
                 });
            }
        }
        
        this.onHopsChange = (event) => {
            dispatch => {
                dispatch({ 
                    type: 'CHANGE_HOPS',
                    value: event.target.value
                 });
            }
        }
        
        this.onMaltChange = (event) => {
            dispatch => {
                dispatch({ 
                    type: 'CHANGE_MALT',
                    value: event.target.value
                 });
            }
        }
        
        this.onFoodChange = (event) => {
            dispatch => {
                dispatch({ 
                    type: 'CHANGE_FOOD',
                    value: event.target.value
                 });
            }
        }

    }

    render() {
        const request = this.props.requestObject;
        return (
            <div style={{ display: 'inline-block', position: 'absolute', width: '28vw', top: '2vh' }}>
                <input value={request.ABV.value} style={{ width: '22vw' }} placeholder={'ABV'} />
                <input value={request.IBU.value} style={{ width: '22vw' }} placeholder={'IBU'} />
                <input value={request.EBC.value} style={{ width: '22vw' }} placeholder={'EBC'} />
                <input value={request.beerName.value} style={{ width: '22vw' }} placeholder={'Beer name'} />
                <input value={request.yeast.value} style={{ width: '22vw' }} placeholder={'Yeast'} />
                <input value={request.brewed.value} style={{ width: '22vw' }} placeholder={'Brewed'} />
                <input value={request.hops.value} style={{ width: '22vw' }} placeholder={'Hops'} />
                <input value={request.malt.value} style={{ width: '22vw' }} placeholder={'Malt'} />
                <input value={request.food.value} style={{ width: '22vw' }} placeholder={'Food'} />
                <br />
                <button>Find beer</button>
            </div>
        )
    }
}

const ConnectedBeerFilterForm = connect(
    state => ({
        items: state.beerItems,
        requestObject: state.requestObject
    }),
    dispatch => ({
        onABVChange: (event) => dispatch(onABVChange),
        onIBUChange: (event) => dispatch(onIBUChange),
        onEBCChange: (event) => dispatch(onEBCChange),
        onBeerNameChange: (event) => dispatch(onBeerNameChange),
        onBrewedChange: (event) => dispatch(onBrewedChange),
        onHopsChange: (event) => dispatch(onHopsChange),
        onMaltChange: (event) => dispatch(onMaltChange),
        onFoodChange: (event) => dispatch(onFoodChange),
        onYeastChange: (event) => dispatch(onYeastChange)
    })
)(BeerFilterForm);

export default ConnectedBeerFilterForm;