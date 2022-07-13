import nothing from 'images/nothing.png';
import React, { Component } from "react";
import typeword from 'images/search.png';
import { FindBlock, FindText, Img, Li, Ul, Margin } from './ListOfPictures.styled';
import ModalLargePic from './ModalLargePic/ModalLargePic';
import PropTypes from 'prop-types';

export class ListOfPictures extends Component {

    state = {
        url: '',
        isModalOpen: false,
    }
// open modal window
    openModal = (e) => {
        this.setState({isModalOpen: true, url: e.target.id})
    }
// close modal window
    closeModal = () => {
        this.setState({isModalOpen: false})
    }
// set scroll to end of the page
    componentDidUpdate() {
        window.scrollTo(0, 100000);
    }

    render() {
        const { data } = this.props;
        const { total, photos, isLoaded } = data;
        const { url, isModalOpen } = this.state;

        switch (total) {
// processing option if there has been nothing found 
            case 0:                         
                if (!isLoaded) {
                    return (
                        <FindBlock>
                            <FindText>
                                Nothing has been found
                            </FindText>
                            <img src={nothing} alt='nothing is found'></img>
                        </FindBlock>
                    )
                }
                break;
    // processing option before first searching
            case null:                 
                if (!isLoaded) {
                    return (
                        <FindBlock>
                            <FindText>
                                Type any word to find pictures
                            </FindText>
                            <img src={typeword} alt='nothing is found'></img>
                        </FindBlock>
                    )
                } break;
    // processing option is case when error was get from server
            case -1:                 
                if (!isLoaded) {
                    return (
                        <FindBlock>
                            <FindText>
                                Somesing wrong is happening with server
                            </FindText>
                            <img src={nothing} alt='somesing wrong'></img>
                        </FindBlock>
                    )
                } break;     
 // processing option if there is a set of pictures
            default:                  
                return (
                <>
                    <Ul>
                        {photos.map(pic =>
                            <Li key={pic.id} onClick={this.openModal}>
                                <Img src={pic.previewURL} alt={pic.tags} id={pic.largeImageURL}></Img>
                            </Li>
                        )}
                        {isModalOpen && <ModalLargePic url={url} onClose={this.closeModal} />}
                        <Margin></Margin>
                    </Ul>
                    </>
                )
        };
    }; 
}

ListOfPictures.propTypes = {
    data: PropTypes.object.isRequired,
}
