import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Taskboard from '../Taskboard/index';
import theme from './../../commons/Theme';
import styles from './styles';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import GlobalLoading from './../../components/GlobalLoading/index';
import Modal from '../../components/Modal/index';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Taskboard />
          <GlobalLoading />
          <Modal />
        </ThemeProvider>
      </Provider>
    );
  }
}

// export default App

export default withStyles(styles)(App);
