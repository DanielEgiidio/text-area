import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

const Login = () => {
    return (
        <div id="login-page" >
            <div id="login-card" >
                <h2>Bem vindo ao TextArea!</h2>
                <div
                    className="login-button google"
                >
                    <GoogleOutlined /> Entrar Com o Google
                </div>

                <br /> <br />
                <div
                    className="login-button facebook"
                >
                    <FacebookOutlined /> Entrar Com o Facebook
                </div>

                <br /> <br />
            </div>
        </div>
    );
}

export default Login;
