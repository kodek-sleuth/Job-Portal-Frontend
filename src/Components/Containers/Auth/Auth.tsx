import React, { Component } from 'react'
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                                <div className="auth-form-input">
                                    <div><img src="https://image.flaticon.com/icons/svg/126/126516.svg" alt="" /></div>
                                    <input placeholder="Email" onChange={this.handleInput} name="email" />
                                </div>
                                <div className="auth-error-handling">
                                    <span>{ emailError }</span>
                                </div>
                                <div className="auth-form-input">
                                    <div><img src="https://image.flaticon.com/icons/svg/481/481195.svg" alt="" /></div>
                                    <input placeholder="Password" onChange={this.handleInput} name="password" />
                                </div>
                                <div className="auth-error-handling">
                                    <span>{ passwordError }</span>
                                </div>
                                <div className="auth-form-section-two">
                                    <button type="submit" style={ !email || !password ? { cursor: 'not-allowed', backgroundColor: 'rgba(36,28,21,0.3)', boxShadow: 'none' } : { cursor: 'pointer' }}>Login</button>
                                    <span>Forgot Password?</span>
                                </div>
                                <div className="auth-social-btns">
                                    <span className="auth-google"><img src="https://image.flaticon.com/icons/svg/60/60786.svg" className="auth-btn-color" alt="" /></span>
                                    <input type="button" className="auth-google" value="Sign in with Google"/>
                                </div>
                                <div className="auth-social-btns">
                                    <span className="auth-linkedIn" style={{ backgroundColor: "#20638a" }}><img src="https://image.flaticon.com/icons/svg/152/152815.svg" className="auth-btn-color" alt="" /></span>
                                    <input type="button" className="auth-linkedIn" value="Sign in with LinkedIn"/>
                                </div>
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
                            <div className="auth-form-input">
                                <div><img src="https://image.flaticon.com/icons/svg/1250/1250645.svg" alt="" /></div>
                                <input placeholder="Name/Company" onChange={this.handleInput} name="name" />
                            </div>
                            <div className="auth-error-handling">
                                <span>{ nameError }</span>
                            </div>
                            <div className="auth-form-input">
                                <div><img src="https://image.flaticon.com/icons/svg/126/126516.svg" alt="" /></div>
                                <input placeholder="Email" onChange={this.handleInput} name="email" />
                            </div>
                            <div className="auth-error-handling">
                                <span>{ emailError }</span>
                            </div>
                            <div className="auth-form-input">
                                <div><img src="https://image.flaticon.com/icons/svg/481/481195.svg" alt="" /></div>
                                <input placeholder="Password" onChange={this.handleInput} name="password" />
                            </div>
                            <div className="auth-error-handling">
                                <span>{ passwordError }</span>
                            </div>
                            <div className="auth-form-section-two">
                                <button type="submit" style={ !email || !password || !name ? { cursor: 'not-allowed', backgroundColor: 'rgba(36,28,21,0.3)', boxShadow: 'none' } : { cursor: 'pointer' }}>Login</button>
                                <span>Forgot Password?</span>
                            </div>
                            <div className="auth-social-btns">
                                <span className="auth-google"><img src="https://image.flaticon.com/icons/svg/60/60786.svg" className="auth-btn-color" alt="" /></span>
                                <input placeholder="Email or Username" type="button" className="auth-google" value="Sign in with Google"/>
                            </div>
                            <div className="auth-social-btns">
                                <span className="auth-linkedIn" style={{ backgroundColor: "#20638a" }}><img src="https://image.flaticon.com/icons/svg/152/152815.svg" className="auth-btn-color" alt="" /></span>
                                <input placeholder="Email or Username" type="button" className="auth-linkedIn" value="Sign in with LinkedIn "/>
                            </div>
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
