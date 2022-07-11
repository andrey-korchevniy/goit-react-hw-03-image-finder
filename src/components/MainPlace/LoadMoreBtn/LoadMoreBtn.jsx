import { Button, ButtonWrapper, Spinner } from './LoadMoreBtn.styled';
import { Grid } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ data, onLoadMoreClick }) => {
    const { isLoaded, total, page } = data;
// show spinner if loadins is in process
    if (isLoaded) {
        return(
            <ButtonWrapper>
                <Spinner>
                    <Grid color="#0591ba" height={35} width={35} />
                </Spinner>
            </ButtonWrapper>
        )
    }
// show button 'load more'
    if ((total / 12 - page) > 0) { 
        return (
            <ButtonWrapper>
                <Button type="submit" onClick={onLoadMoreClick}>
                </Button >
            </ButtonWrapper>
        )
    }
} 

LoadMoreBtn.propTypes = {
    data: PropTypes.object.isRequired,
    onLoadMoreClick: PropTypes.func.isRequired,
}
