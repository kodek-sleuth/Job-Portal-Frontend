import React, { Component } from 'react'
import Auth from '../Containers/Auth/Auth';

interface loginState {
    login: boolean
}

class Login extends Component<{}, loginState> {
    state = {
        login: true
    }

    render() {
        const { login } = this.state;
        return (
            <div>
                <Auth login={login} />
            </div>
        )
    }
}

export default Login;