import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// const App = React.createClass({
//     render: function() {
//         return <h1>Hello World！</h1>;
//     }
// });


ReactDOM.render(<App name="chai" />, document.getElementById('root'));
registerServiceWorker();
