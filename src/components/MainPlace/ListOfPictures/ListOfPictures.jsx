import nothing from 'images/nothing.png';
import typeword from 'images/search.png';
import React, { Component } from "react";
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
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data.photos.length !== this.props.data.photos.length) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
         });
        }
    }

    render() {
        const { data } = this.props;
        const { total, photos, isLoaded } = data;
        const { url, isModalOpen } = this.state;
        let message = 'Type any word to find pictures';
        let picture = typeword;

        if (total === 0) { message = 'Nothing has been found'; picture = nothing };
        if (total === -1) { message = 'Somesing wrong is happening with server'; picture = nothing };

        if (total > 0) {
            return (
                <Ul>
                    {photos.map(pic =>
                        <Li key={pic.id} onClick={this.openModal}>
                            <Img src={pic.previewURL} alt={pic.tags} id={pic.largeImageURL}></Img>
                        </Li>
                    )}
                    {isModalOpen && <ModalLargePic url={url} onClose={this.closeModal} />}
                    <Margin></Margin>
                </Ul>
            )
        } else {
            return (
                <FindBlock>
                    <FindText>
                        {message}
                    </FindText>
                    <img src={picture} alt='nothing is found'></img>
                </FindBlock>
                    )
            }
        }
      
}

ListOfPictures.propTypes = {
    data: PropTypes.object.isRequired,
}
