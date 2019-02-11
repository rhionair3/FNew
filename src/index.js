import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './Dashboard/views/Dashboard';
import FormRegister from './Franchise/views/FranchiseForm';
import Franchiselist from './Franchise/views/Franchiselist';
import FranchiseDetails from './Franchise/views/FranchiseDetails';
import Cartlist from './Cart/views/Cartlist';
import FormCart from './Cart/views/Cartform';
import Cheflist from './Chef/views/Cheflist';
import Login from './Auth/views/Login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router>
                    <div>
                        <Route exact path='/' component={Dashboard} />
                        <Route exact path='/franchise' component={Franchiselist} />
                        <Route exact path='/franchise/registration/:id' component={FormRegister} />
                        <Route exact path='/franchise/details/:id' component={FranchiseDetails} />
                        <Route exact path='/cart' component={Cartlist} />
                        <Route exact path='/cart/formcart/:id' component={FormCart} />
                        <Route exact path='/chef' component={Cheflist} />
                        <Route exact path='/login' component={Login} />
                    </div>
                </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
