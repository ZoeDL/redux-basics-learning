import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibrarayList from './components/LibraryList';

const App = () => {
    return(
        <Provider store={createStore(reducers)}>
            <View>
                <Header title="Tech Stack"/>
                <LibrarayList />
            </View>
        </Provider>
    );
};

export default App;