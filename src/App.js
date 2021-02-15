import React, { Component } from 'react'

export default class App extends Component {
    componentDidMount(){
        console.log("App Mount");
    }
    componentWillUnmount(){
        console.log("App Unmount");
    }
    render() {
        console.log("App rendered");
        return (
            <h1>Hello App Component</h1>
        )
    }
}
