import React, { Component } from 'react'
import Auth from '../Containers/Auth/Auth';

interface signupState {
    signup: boolean
}

class Signup extends Component<{}, signupState> {
    state = {
        signup: true
    }

    render() {
        const { signup } = this.state;
        return (
            <div>
                <Auth signup={signup} />
            </div>
        )
    }
}

export default Signup;