import React, { Component } from 'react'
import { faVideo, faEnvelope, faKey, faCity } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button, SocialButton} from '../../Common/Elements/Button'
import FormInput from '../../Common/Elements/FormInput'
import Input from '../../Common/Elements/Input'
import validateForm from '../../../Helpers/validateForm'
import logo from '../../../Assets/Icons/logo.png'
import '../../../Assets/Scss/Auth.scss'

interface checkAuth {
    login?: boolean,
    signup?: boolean
}

interface authState {
    name?: string,
    nameError?: string,
    email?: string,
    emailError?: string,
    password?: any,
    passwordError?: string
}

export class Auth extends Component<checkAuth, authState> {
    constructor(props: any){
        super(props);
        this.state = {
            name: '',
            nameError: '',
            email: '',
            emailError: '',
            password: '',
            passwordError: ''
        }
    }

    handleInput = (e: any):void => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmitLogin = (e: any):boolean => {
        e.preventDefault();
        const { email, password } = this.state;

        if (!email || !password) {
            return false
        }

        if (validateForm(this.state) !== true) {
            Object.keys(validateForm(this.state)).forEach((key) => {
              Object.values(validateForm(this.state)).forEach((value) => {
                if (key && value) {
                  this.setState({ [key]: value });
                }
              });
            });
            return false;
          } 
        return true
    }

    handleSubmitSignup = (e: any):boolean => {
        e.preventDefault();
        const { email, password , name} = this.state;

        if (!email || !password || !name) {
            return false
        }

        if (validateForm(this.state) !== true) {
            Object.keys(validateForm(this.state)).forEach((key) => {
              Object.values(validateForm(this.state)).forEach((value) => {
                if (key && value) {
                  this.setState({ [key]: value });
                }
              });
            });
            return false;
          } 
        return true
    }

    render() {
        const { login, signup } = this.props;
        const { email, password, emailError, passwordError, name, nameError } = this.state;
        if(login){
            return (
                <div className="auth-wrapper">
                    <div className="auth-left">
                        <span id="auth-logo"><img src={logo} alt="" /></span>
                        <span className="auth-subtitle">Need an account?<a href="/signup"> Create an account!</a></span>
                        <div className="auth-form">
                            <form onSubmit={this.handleSubmitLogin}>
                                <FormInput 
                                    divClassName="auth-form-input"
                                    inputValue="Email"
                                    formIcon={faEnvelope}
                                    inputType="email"
                                    errorClassName="auth-error-handling"
                                    error={emailError}
                                 />
                                <FormInput 
                                    divClassName="auth-form-input"
                                    inputValue="Password"
                                    formIcon={faKey}
                                    inputType="password"
                                    errorClassName="auth-error-handling"
                                    error={passwordError}
                                 />
                                <div className="auth-form-section-two">
                                    <span>Forgot Password?</span>
                                    <Input action="submit" value="Login" />
                                </div>
                                <SocialButton
                                    divClassName="auth-social-btns"
                                    spanClassName="auth-google"
                                    buttonIcon={faGoogle}
                                    buttonValue="Login with Google"
                                />
                                <SocialButton
                                    divClassName="auth-social-btns"
                                    spanClassName="auth-linkedIn"
                                    buttonIcon={faLinkedinIn}
                                    buttonValue="Login with LinkedIn"
                                />
                            </form>
                            <span className="auth-copyright">©2019–20-- All Rights Reserved. Workhaven® is a registered trademark. Privacy and Terms apply.</span>
                        </div>
                    </div>
                    <div className="auth-right">
                        <div><FontAwesomeIcon icon={faVideo} className="auth-video-icon" /></div>
                        <span>Start Working Today</span>
                        <span>Considered number one Job portal</span>
                    </div>
                </div>
            )   
        }

        if(signup) {
            return (
                <div className="auth-wrapper">
                <div className="auth-left">
                    <span id="auth-logo"><img src={logo} alt="" /></span>
                    <span className="auth-subtitle">Have an account<a href="/login"> Login!</a></span>
                    <div className="auth-form">
                        <form onSubmit={this.handleSubmitSignup}>
                            <FormInput 
                                divClassName="auth-form-input"
                                inputValue="Name/Company"
                                formIcon={faCity}
                                inputType="text"
                                errorClassName="auth-error-handling"
                                error={nameError}
                            />
                            <FormInput 
                                divClassName="auth-form-input"
                                inputValue="Email"
                                formIcon={faEnvelope}
                                inputType="email"
                                errorClassName="auth-error-handling"
                                error={emailError}
                            />
                            <FormInput 
                                divClassName="auth-form-input"
                                inputValue="Password"
                                formIcon={faKey}
                                inputType="password"
                                errorClassName="auth-error-handling"
                                error={passwordError}
                            />
                            <div className="auth-form-section-two">
                                <span>Forgot Password?</span>
                                <Input action="submit" value="Login" />
                            </div>
                            <SocialButton
                                divClassName="auth-social-btns"
                                spanClassName="auth-google"
                                buttonIcon={faGoogle}
                                buttonValue="Signup with Google"
                            />
                            <SocialButton
                                divClassName="auth-social-btns"
                                spanClassName="auth-linkedIn"
                                buttonIcon={faLinkedinIn}
                                buttonValue="Signup with LinkedIn"
                            />
                        </form>
                        <span className="auth-copyright">©2019–20-- All Rights Reserved. Workhaven® is a registered trademark. Privacy and Terms apply.</span>
                    </div>
                </div>
                <div className="auth-right">
                    <div><FontAwesomeIcon icon={faVideo} className="auth-video-icon" /></div>
                    <span>Start Working Today</span>
                    <span>Considered number one Job portal</span>
                </div>
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
