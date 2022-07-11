import { LoadMoreBtn } from 'components/MainPlace/LoadMoreBtn/LoadMoreBtn';
import { Component } from "react";
import { ListOfPictures } from './ListOfPictures/ListOfPictures';
import PropTypes from 'prop-types';

export default class MainPlace extends Component {
    render() {
        const { data, onLoadMoreClick } = this.props;
        return (
            <div>
                <ListOfPictures data={data}/>  
                <LoadMoreBtn data={data} onLoadMoreClick={onLoadMoreClick} />
            </div>
        )
    }
}

MainPlace.propTypes = {
    data: PropTypes.object.isRequired,
    onLoadMoreClick: PropTypes.func.isRequired,
}