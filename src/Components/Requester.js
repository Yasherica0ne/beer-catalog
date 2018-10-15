import React, { Component } from 'react';
import { connect } from 'react-redux';

const requester = () => {
    
}

const ConnectedBeerFilterForm = connect(
    state => ({
        items: state.beerItems,
    }),
    // dispatch => ({
    //     loadItems: () => dispatch(loadItems)
    // })
)(BeerFilterForm);

export default ConnectedBeerFilterForm;