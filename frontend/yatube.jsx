
import React from "react";
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchVideos } from './util/video_api_util';

document.addEventListener('DOMContentLoaded', () => {

    let store;
    const root = document.getElementById('root');
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.fetchVideos = fetchVideos;
    window.store = store;
    window.dispatch = store.dispatch;
    window.getState = store.getState;

    ReactDOM.render(<Root store={store}/>, root);
})

// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById('root');
//   let preloadedState = undefined;
//   if (window.currentUser) {
//     preloadedState = {
//       session: {
//         currentUser: window.currentUser
//       }
//     };
//   }
//   const store = configureStore(preloadedState);

//   ReactDOM.render(<Root store={store} />, root);
// })
