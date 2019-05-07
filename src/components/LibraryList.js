import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        console.log(this.props.libraries);
        return(
            <View />
        )
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);