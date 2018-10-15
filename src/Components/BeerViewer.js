import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConnectedBeerItem from './BeerItem';
import ConnectedModalWindow from './ModalWindow';
import Requester from './Requester';

class BeerViewer extends Component {
    constructor(props) {
        super(props);

        const requester = new Requester().requester;
        requester(this.props.page, this.props.requestObject, this.props.loadItems);

        this.onNextPageButtonClick = () => {
            const requester = new Requester().requester;
            requester(this.props.page + 1, this.props.requestObject, this.props.loadItems);
            this.props.onNextPageButtonClick();
        }

        this.onPrevPageButtonClick = () => {
            if (this.props.page - 1 < 1) return;
            const requester = new Requester().requester;
            requester(this.props.page - 1, this.props.requestObject, this.props.loadItems);
            this.props.onPrevPageButtonClick();
        }
    }

    render() {
        const itemsLength = this.props.items.length;
        return (
            <div style={{ display: 'inline-block', width: '70vw' }} >
                {itemsLength != 0 &&
                    <React.Fragment>
                        <ConnectedModalWindow />
                        {
                            this.props.items.map(item => <ConnectedBeerItem item={item} key={item.id} />)
                        }
                        <br />
                    </React.Fragment>
                }
                <div style={{ margin: '3vh 0 5vh 41vw' }}>
                    <button onClick={this.onPrevPageButtonClick} style={{ fontSize: '3vh' }}>Previous page</button><button onClick={this.onNextPageButtonClick} style={{ fontSize: '3vh' }}>Next page</button>
                </div>
            </div>
        )
    }
}

const ConnectedBeerViewer = connect(
    state => ({
        items: state.beerItems,
        requestObject: state.requestObject,
        page: state.page
    }),
    dispatch => ({
        onNextPageButtonClick: () => dispatch({
            type: 'NEXT_PAGE'
        }),
        onPrevPageButtonClick: () => dispatch({
            type: 'PREV_PAGE'
        }),
        loadItems: (data) => dispatch({
            type: 'ADD_ITEMS',
            items: data
        })
    })
)(BeerViewer);

export default ConnectedBeerViewer;