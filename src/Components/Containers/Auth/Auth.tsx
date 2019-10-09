import React, { Component } from 'react'
import '../../../Assets/Sass/App.scss'

interface checkAuth {
    login?: boolean,
    signup?: boolean
}

export class Auth extends Component<checkAuth> {
    render() {
        const { login, signup } = this.props
        if(login){
            return (
                <div>
                    <h1>Hello Login</h1>
                </div>
            )   
        }

        if(signup) {
            return (
                <div>
                    <h1>Hello Signup</h1>
                </div>
            )  
        }

        else {
            return (
                <h1>404 NOT FOUND</h1>
            )
        }
    }
}

export default Auth;
