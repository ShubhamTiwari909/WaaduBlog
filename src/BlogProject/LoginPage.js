import React from 'react';
import './Waaducss.css'

function DarkMode(props) {
    return (
        <div>
            <button className="dark-btn" onClick={props.onClick}>Dark </button>
        </div>
    );
}

function LightMode(props) {
    return (
        <div>
            <button className="light-btn" onClick={props.onClick}>Light</button>
        </div>
    );
}


function DarkLoginPage(props) {
    return (
        <div>
            <form className="Dark-form-page w-shadow-large">

                <div class="form-group">
                    <label htmlFor="">Email</label><input type="text" className="form-control" id="" aria-describedby="helpId" placeholder="Enter your email..." />
                </div>

                <div class="form-group">
                    <label htmlFor="">Password</label><input type="text" className="form-control" id="" aria-describedby="helpId" placeholder="Enter your password..." />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mt-4" >Login</button>
                </div>

            </form>
        </div>
    );
}

function LightLoginPage(props) {
    return (
        <div>
            <form className="Light-form-page w-shadow-large">
                <div class="form-group">
                    <label htmlFor="">Email</label><input type="text" className="form-control" id="" aria-describedby="helpId" placeholder="Enter your email..." />
                </div>

                <div class="form-group">
                    <label htmlFor="">Password</label><input type="text" className="form-control" id="" aria-describedby="helpId" placeholder="Enter your password..." />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mt-4" >Login</button>
                </div>
            </form>
        </div>
    );
}


function Login(props) {
    const isMode = props.isMode;
    if (isMode) {
        return <DarkLoginPage />
    }
    return <LightLoginPage />

}


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleDark = this.handleDark.bind(this);
        this.handleLight = this.handleLight.bind(this);
        this.state = { isMode: false };
    }

    handleDark() {
        this.setState(
            {
                isMode: true,
            }
        );
    }

    handleLight() {
        this.setState(
            {
                isMode: false,
            }
        );
    }

    render() {
        const isMode = this.state.isMode;
        let button;

        if (isMode) {
            button = <LightMode onClick={this.handleLight} />;
        }
        else {
            button = <DarkMode onClick={this.handleDark} />;
        }

        return (
            <div className="main-login-page">

                <div className="main">
                    <div className="text-center mb-2">{button}</div>
                    <Login isMode={isMode} />
                </div>
            </div>
        );
    }
}

export default LoginPage;