import React, {Component} from 'react';

import BookListItem from '../book-list-item';

export default class BooksList extends Component {
    render() {
        const { books } = this.props;
        return (
            <ul>
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