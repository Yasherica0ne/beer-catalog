import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParamEnum from './ParamEnum';
import Requester from './Requester';

function GetSelectList(onChangeFunc, item) {
    const isDisabled = item.value === '';
    const selected = item.added;
    const select = (
        <select disabled={isDisabled} value={selected} onChange={onChangeFunc}>
            <option value={ParamEnum.ValueNone} disabled hidden>Choose option</option>
            <option value={ParamEnum.ValueLower}>Lower</option>
            <option value={ParamEnum.ValueGreater}>Greater</option>
        </select>
    )
    return select;
}

class BeerFilterForm extends Component {
    constructor(props) {
        super(props);

        this.Sendrequest = () => {
            const requester = new Requester().requester;
            requester(1, this.props.requestObject, this.props.loadItems);
            this.props.resetPageNumber();
        }
        this.getRandomBeer = () => {
            const request = new Requester().getRandomBeer;
            request(this.props.changeSelected);
        }
    }

    render() {
        const request = this.props.requestObject;
        return (
            <div style={{ display: 'inline-block', position: 'absolute', width: '28vw', top: '2vh' }}>
                <input value={request.ABV.value} onChange={this.props.onABVChange} style={{ width: '18vw' }} placeholder={'ABV'} />
                {GetSelectList(this.props.onABVOptionChange, request.ABV)}

                <input value={request.IBU.value} onChange={this.props.onIBUChange} style={{ width: '18vw' }} placeholder={'IBU'} />
                {GetSelectList(this.props.onIBUOptionChange, request.IBU)}

                <input value={request.EBC.value} onChange={this.props.onEBCChange} style={{ width: '18vw' }} placeholder={'EBC'} />
                {GetSelectList(this.props.onEBCOptionChange, request.EBC)}

                <input value={request.beerName.value} onChange={this.props.onBeerNameChange} style={{ width: '18vw' }} placeholder={'Beer name'} />
                <input value={request.yeast.value} onChange={this.props.onYeastChange} style={{ width: '18vw' }} placeholder={'Yeast'} />
                <input value={request.brewed.value} onChange={this.props.onBrewedChange} style={{ width: '18vw' }} placeholder={'Brewed date (mm-yyyy)'} />
                {GetSelectList(this.props.onBrewedOptionChange, request.brewed)}

                <input value={request.hops.value} onChange={this.props.onHopsChange} style={{ width: '18vw' }} placeholder={'Hops'} />
                <input value={request.malt.value} onChange={this.props.onMaltChange} style={{ width: '18vw' }} placeholder={'Malt'} />
                <input value={request.food.value} onChange={this.props.onFoodChange} style={{ width: '18vw' }} placeholder={'Food'} />
                <br />
                <button onClick={this.Sendrequest}>Find beer</button>
                <br />
                <button onClick={this.getRandomBeer}>Get random beer</button>
            </div>
        )
    }
}

const ConnectedBeerFilterForm = connect(
    state => ({
        items: state.beerItems,
        requestObject: state.requestObject,
        page: state.page
    }),
    dispatch => ({
        onABVChange: (event) => dispatch({
            type: 'CHANGE_ABV_VALUE',
            value: event.target.value
        }),
        onIBUChange: (event) => dispatch({
            type: 'CHANGE_IBU_VALUE',
            value: event.target.value
        }),
        onEBCChange: (event) => dispatch({
            type: 'CHANGE_EBC_VALUE',
            value: event.target.value
        }),
        onABVOptionChange: (event) => dispatch({
            type: 'CHANGE_ABV_OPTION',
            added: event.target.value
        }),
        onIBUOptionChange: (event) => dispatch({
            type: 'CHANGE_IBU_OPTION',
            added: event.target.value
        }),
        onEBCOptionChange: (event) => dispatch({
            type: 'CHANGE_EBC_OPTION',
            added: event.target.value
        }),
        onBrewedOptionChange: (event) => dispatch({
            type: 'CHANGE_BREWED_OPTION',
            added: event.target.value
        }),
        onBeerNameChange: (event) => dispatch({
            type: 'CHANGE_BEER_NAME',
            value: event.target.value
        }),
        onBrewedChange: (event) => dispatch({
            type: 'CHANGE_BREWED_DATE',
            value: event.target.value
        }),
        onHopsChange: (event) => dispatch({
            type: 'CHANGE_HOPS',
            value: event.target.value
        }),
        onMaltChange: (event) => dispatch({
            type: 'CHANGE_MALT',
            value: event.target.value
        }),
        onFoodChange: (event) => dispatch({
            type: 'CHANGE_FOOD',
            value: event.target.value
        }),
        onYeastChange: (event) => dispatch({
            type: 'CHANGE_YEAST',
            value: event.target.value
        }),
        loadItems: (data) => dispatch({
            type: 'ADD_ITEMS',
            items: data
        }),
        changeSelected: (item) => dispatch({
            type: 'CHANGE_SELECTED',
            beer: item.shift()
        }),
        resetPageNumber: () => dispatch({
            type: 'RESET_PAGE_NUMBER'
        })
    })
)(BeerFilterForm);

export default ConnectedBeerFilterForm;