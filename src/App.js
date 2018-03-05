import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { Router, Route } from 'react-router';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;



class App extends React.Component {
    // constructor(props) {
    //     super(props);




    //     // const { dispatch } = this.props;

    // }

    render() {
        // const basePath = '/' + location.pathname.split('/')[1];
        // const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className=" col-sm-offset-2 col-sm-8">
                        {/* {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        } */}
                        <Router>
                            <div>
                                <PrivateRoute exact path='/' component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
// function mapStateToProps(state) {
//     return {
//         visibleTodos: state.todos
//      }
//   }


// const connectedApp = connect(mapStateToProps)(App);
// export { connectedApp as App };
