import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConnectedBeerItem from './BeerItem';
import ConnectedModalWindow from './ModalWindow';

class BeerViewer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ display: 'inline-block', width: '70vw' }} >
                <ConnectedModalWindow />
                {
                    this.props.items.map(item => <ConnectedBeerItem item={item} key={item.id} />)
                }
                <br />
                <div style={{ margin: '3vh 0 5vh 41vw' }}>
                    <button style={{ fontSize: '3vh' }}>Previous page</button><button  style={{ fontSize: '3vh' }}>Next page</button>
                </div>
            </div>
        )
    }
}

const ConnectedBeerViewer = connect(
    state => ({
        items: state.beerItems
    })
)(BeerViewer);

export default ConnectedBeerViewer;