import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from './ListItem';

class LibraryList extends Component {
    renderItem = (lib) => {
        return <ListItem data={lib} />
    };

    render() {
        console.log(this.props.libraries);
        return(
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={lib => lib.id}
            />
        )
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);