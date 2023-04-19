import React from 'react';
import ReactDOM from'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const root2 = ReactDOM.createRoot(document.getElementById('root-notifications'));
// root2.render(
//   <React.StrictMode>
//     <Notifications />
//   </React.StrictMode>
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
    <div id="root-notifications">
      <Notifications />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);