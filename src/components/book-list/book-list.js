import React, {Component} from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { booksLoaded, booksRequested } from '../../actions/actions';
import withBookstoreService from '../hoc/with-bookstore-service';
import { compose } from '../../utils';

import './book-list.css';
import Spinner from '../spinner/spinner';

class BookList extends Component {

    componentDidMount(){
        const { bookstoreService, booksLoaded, booksRequested } = this.props;

        booksRequested();
        bookstoreService.getBooks()
            .then((data) => {
                booksLoaded(data)
            })
    }

    render() {
        const { books, loading } = this.props;
        if(loading) {
            return <Spinner />
        }

        return (
            <ul className='book-list'>
                    {books.map((book) => {
                        return (
                        <li key={book.id}>
                            <BookListItem book={book}/>
                        </li>
                        )
                    })}
            </ul>
        )
    }

}

const mapStateToProps = ({ books, loading }) => {
    return {books, loading}
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
};


export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);