import './public-path.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export async function bootstrap() {
    console.log('[react] react app bootstraped');
}

// @ts-ignore
export async function mount(props) {
    console.log(props);
    ReactDOM.render(
        <App />,
        props.container ? props.container.querySelector('#root') : document.getElementById('root')
    );
}
// @ts-ignore
export async function update(props) {
    console.log('update props', props);
}

// @ts-ignore
export async function unmount(props) {
    ReactDOM.unmountComponentAtNode(
        props.container ? props.container.querySelector('#root') : document.getElementById('root')
    );
}
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
