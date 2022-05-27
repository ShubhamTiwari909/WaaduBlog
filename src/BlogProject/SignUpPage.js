import React from 'react';


function DarkMode(props){
    return(
        <div>
            <button className="dark-btn" onClick={props.onClick}>Dark </button>
        </div>
    );
}

function LightMode(props){
    return(
        <div>
            <button className="light-btn" onClick={props.onClick}>Light</button>
        </div>
    );
}


function DarkLogin(props){
    return(
        <div>
            <form className="Dark-form-page">
                <div class="form-group">                  
                <label htmlFor="">UserName</label><input type="text" className="form-control"  id="" aria-describedby="helpId" placeholder="Enter your name..." />
                </div>

                <div class="form-group">                  
                <label htmlFor="">Email</label><input type="text" className="form-control"  id="" aria-describedby="helpId" placeholder="Enter your email..." />
                </div>

                <div class="form-group">                  
                <label htmlFor="">Password</label><input type="text" className="form-control"  id="" aria-describedby="helpId" placeholder="Enter your password..." />
                </div>

                <div class="form-group">                  
                <label htmlFor="">Confirm Password</label><input type="text" className="form-control"  id="" aria-describedby="helpId" placeholder="Enter your confirm password..." />
                
                <button className="btn btn-primary mt-4" >Submit</button>
                
                </div>
            </form>
        </div>
    );
}

function LightLogin(props){
    return(
        <div>
            <form className="Light-form-page">
                <div class="form-group">                  
                <label htmlFor="">UserName</label><input type="text" className="form-control"  id="" aria-describedby="helpId" placeholder="Enter your name..." />
                </div>

                <div class="form-group">                  
                <label htmlFor="">Email</label><input type="text" className="form-control"  id="" aria-describedby="helpId" placeholder="Enter your email..." />
                </div>

                <div class="form-group">                  
                <label htmlFor="">Password</label><input type="text" className="form-control"  id="" aria-describedby="helpId" placeholder="Enter your password..." />
                </div>

                <div class="form-group">                  
                <label htmlFor="">Confirm Password</label><input type="text" className="form-control"  id="" aria-describedby="helpId" placeholder="Enter your confirm password..." />
                
                <button className="btn btn-primary mt-4" >Submit</button>
                
                </div>
            </form>
        </div>
    );
}


function Login(props){
    const isMode = props.isMode;
    if(isMode){
        return <DarkLogin />
    }
    return <LightLogin />

}


class SignUpPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleDark = this.handleDark.bind(this);
        this.handleLight = this.handleLight.bind(this);
        this.state = {isMode : false};
    }

    handleDark() {
        this.setState(
            {
                isMode:true,
            }
        );
    }

    handleLight(){
        this.setState(
            {
            isMode:false,
            }
        );
    }

    render()
    {
        const isMode = this.state.isMode;
        let button;

        if(isMode)
        {
            button = <LightMode onClick={this.handleLight} />;
        }
        else
        {
            button = <DarkMode onClick={this.handleDark} />;
        }

        return(
            <div className="main-login-page">

            <div className="main">
                <div className="text-center mb-2">{button}</div>
                    <Login isMode={isMode} />
                </div>
            </div>
        );
    }
}

export default SignUpPage;