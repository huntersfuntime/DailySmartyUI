import React, { Component } from 'react';
import Logo from './logo';
import Searchbar from './searchBar';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fetchPostsWithQuery(query);
    }
    render() {
        return (
            <div>
                <Logo size={55}/>
                <Searchbar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
            </div>
        )
    }
}

export default connect(null, actions)(Results);