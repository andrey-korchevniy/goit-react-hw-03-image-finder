import { Button, ButtonWrapper, Input, SearchForm, FormikWrapper, Error } from './Searchbar.styled';
import * as yup from 'yup';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const schema = yup.object().shape({
    query: yup.string().min(3, 'Too Short! Minimum 3 letters is requred').required('Requred!').trim()
});

export const Searchbar = ({ onSearch }) => {
    return (
        <Formik
            initialValues={{query: ''}}
            validationSchema={schema}
            onSubmit={onSearch}>
            <FormikWrapper>
                <SearchForm>
                    <Input name='query' type="text" autoComplete="off" autoFocus placeholder="Search images and photos" />
                    <Error name='query' component='div' />
                    <ButtonWrapper>
                        <Button type="submit">Search</Button>
                    </ButtonWrapper>
                </SearchForm>
            </FormikWrapper>
        </Formik>
)}

Searchbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
}