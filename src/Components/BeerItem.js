import React, { Component } from 'react';
import { connect } from 'react-redux';

class BeerItem extends Component {
    constructor(props) {
        super(props);

        this.OnBeerIconClick = () => {
            const item = this.props.item;
            this.props.changeSelected(item);
        }
    }

    render() {
        const item = this.props.item;
        return (
            <div onClick={this.OnBeerIconClick} style={{ display: 'inline-block', border: '1px solid gray', width: '17vw' }}>
                <div>{item.name}</div>
                <img style={{ width: '2.5vw', height: '8vw' }} src={item.image_url} />
                <div>{item.tagline}</div>
            </div>
        )
    }
}

const ConnectedBeerItem = connect(
    state => ({
    }),
    dispatch => ({
        changeSelected: (item) => dispatch({
            type: 'CHANGE_SELECTED',
            beer: item
        })
    })
)(BeerItem);

export default ConnectedBeerItem;