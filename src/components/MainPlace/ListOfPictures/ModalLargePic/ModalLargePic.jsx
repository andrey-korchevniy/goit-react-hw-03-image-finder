import { Backdrop, PictureContainer, LargePic } from './ModalLargePic.styled';
import { Component } from "react";
import PropTypes from 'prop-types';

export default class ModalLargePic extends Component {

    // create listenet on ESC
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };

    // stop listener on ESC
    componentWillUnmount() {
       window.removeEventListener('keydown', this.handleKeyDown);
    }

    // close modal by ESC press
    handleKeyDown = e => {
            if (e.key === 'Escape') {
                this.props.onClose()
            }
        }

    render() {
        const { url, onClose } = this.props;
        return (
            <Backdrop onClick={onClose}>
                <PictureContainer>
                    <LargePic src={url} alt='result of search' />
                </PictureContainer>
            </Backdrop>
        )
    }
}

ModalLargePic.propTypes = {
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}