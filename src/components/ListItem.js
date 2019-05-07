import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        return(
            <CardSection>
                <Text style={styles.textStyle}>{this.props.data.title}</Text>
            </CardSection>
        );
    }
}

const styles = {
    textStyle: {
        paddingLeft: 5,
        fontSize: 18
    }
}

export default ListItem;