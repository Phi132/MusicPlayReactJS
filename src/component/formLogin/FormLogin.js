import React,{useContext, useState} from 'react'
import { Auth } from '../context/Auth';

//import './FormLogin.scss';

const FormLogin = () => {
    const {isAuthencated, toggleAuth} = useContext(Auth);
    const [showPassword, setshowPassword] = useState(false);
    const handleClickBtnLogin = () => {
        toggleAuth();
    }
    const handleShowPass = () => {
        setshowPassword(!showPassword);
    }

    return (
        <>
            <div className="login-wrapper">
                <div className="login-container">
                    <form 
                        //onSubmit={this.onSubmitForm}
                    >
                        <div className="form_login">
                            <div className="title">Login</div>
                            <div className="input-user-pass">
                                <div className="user-name">
                                    <div className="user-name-title">
                                        <label>Username</label>
                                    </div>

                                    <input className="input_user"
                                        type="text"
                                        placeholder="Nhập Tài Khoản"
                                        name="username"
                                        //value={this.state.username}
                                        //onChange={(e) => this.handleChangeUser(e)}
                                    >

                                    </input>

                                </div>
                                <div className="password">

                                    <div className="password-title">
                                        <label>Password</label>
                                    </div>
                                    <div className="input_pass_container">
                                        <input className="input_pass"
                                            type={ showPassword ? "text" : "password"}
                                            placeholder="Nhập Mật Khẩu"
                                            name="password"
                                            //onChange={(e) => this.handleChangePassword(e)}
                                        >

                                        </input>
                                    </div>
                                    <div className="showPass"
                                        onClick={handleShowPass}
                                    >
                                        {/* <i className="fas fa-eye icon-eye"></i> */}
                                        <i className={ showPassword ?
                                            "fas fa-eye-slash icon-eye" : "fas fa-eye icon-eye"}

                                        ></i>
                                        


                                    </div>

                                    <div className="forgot_pass">
                                        <div>
                                            Forgot password?
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="error-mess" style={{ color: 'red', marginTop: 20 }}>
                                {/* {this.state.errorMess} */}
                            </div>

                            <div className="btn-login">
                                <div className="btn-login-container">
                                    <div className="btn-login-text"
                                        onClick={handleClickBtnLogin}>
                                        <button
                                            type="submit"
                                        
                                        >
                                            LOGIN
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}


export default FormLogin;
