import style from '../styles/pages/login/Login.module.css'
import {Button} from '../components/Button'
export function Login(){
    return(
        <div className={style.container}>
            <div className={style.containerPhoto}>
                <img src="./celular.gif" alt="instagram celular" />
            </div>
            <div className={style.loginWrapper}>
                <div className={style.group}>
                    <img src="./instagram-logo.png" alt="logo Instagram" />
                    <input type="text" placeholder="Phone number , username , or email" name="login" id="login" />
                    <input type="password" placeholder="Password" name="pwd" id="pwd" />
                    <Button name="Log In" background="#b1dffc"/>

                    <div className={style.lineOr}>
                        <p>OR</p>
                    </div>
                    <a href="# ok" className={style.logInFacebook}>Log in with Facebook</a>
                    <a href="# ok" className={style.forgotPassword}>Forgot password?</a>
                    
                </div>
                <div className={style.group}>
                    <h2>Don't have an account? <a href="# ok">Sign up</a></h2>

                </div>
                <div className={style.getTheApp}>
                    <p>Get the app.</p>
                    <div>
                        <img src="./googleplay-button.png" alt="botão da google play" />
                        <img src="./apple-button.png" alt="botão da apple" />

                    </div>
                </div>
            </div>
           
        </div>
    )
}