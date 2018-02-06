import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Bundle from './Bundle'
import Loading from 'components/Loading/loading'

import Home from 'bundle-loader?lazy&name=home!pages/home/index'
import About from 'bundle-loader?lazy&name=about!pages/about/index'
import Counter from 'bundle-loader?lazy&name=counter!pages/counter/index'
import UserInfo from 'bundle-loader?lazy&name=user!pages/user/index'
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/index'




const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading />
        }
    </Bundle>
)

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Home)} />
            <Route path="/about" component={createComponent(About)} />
            <Route path="/counter" component={createComponent(Counter)} />
            <Route path="/user" component={createComponent(UserInfo)} />
            <Route component={createComponent(NotFound)} />
        </Switch>
    </div>
)
