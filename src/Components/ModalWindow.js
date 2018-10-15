import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModalWindow extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let selectedItem = this.props.selectedItem;
        let modalOpen = false
        if (selectedItem) {
            modalOpen = true;
        }

        return (
            <React.Fragment>
                {
                    modalOpen &&
                    <div onClick={this.props.modalClose} id={'environment'} style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        width: '100vw',
                        display: 'flex',
                        position: 'fixed',
                        zIndex: '10',
                        top: '0',
                        right: '0',
                        left: '0',
                        bottom: '0'
                    }} >
                        <img style={{ height: '70vh', display: 'inline-block', marginLeft: '5vw', marginTop: '15vh' }}
                            src={selectedItem.image_url} />
                        <div style={{ display: 'inline', margin: 'auto 5vw auto 3vw', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                            <div>{`Description: ${selectedItem.description}`}</div>
                            <div>{`Tagline: ${selectedItem.tagline}`}</div>
                            <button onClick={this.props.modalClose} id={'ExitButton'}>OK</button>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

let ConnectedModalWindow = connect(
    state => ({
        items: state.beerItems,
        selectedItem: state.selectedItem
    }),
    dispatch => ({
        modalClose: (event) => {
            if (event.target.id === 'environment' || event.target.id === 'ExitButton') {
                dispatch({
                    type: 'CHANGE_SELECTED',
                    beer: null
                })
            }
        }
    })
)(ModalWindow);

export default ConnectedModalWindow;