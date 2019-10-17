import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../reducers/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../sagas';

// const composeEnhancers =
//     process.env.NODE_ENV !== 'production' &&
//         typeof window === 'object' &&
//         window.__REDUX_DEVTOOLS_EXTENDSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENDSION_COMPOSE__({
//             shouldHotReload: false
//         }) : compose;

const configureStore = () => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();
    const middleWares = [thunk, sagaMiddleware];
    const enhancers = applyMiddleware(...middleWares);
    const store = createStore(rootReducers, composeEnhancers(enhancers));
    // const store = createStore(rootReducers, enhancers);
    sagaMiddleware.run(rootSaga);
    return store;
};


export default configureStore;