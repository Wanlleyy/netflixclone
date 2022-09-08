/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://gkpb.com.br/wp-content/uploads/2016/06/logo-netflix-2014-vs-icone-2016-blog-gkpb.jpg" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/564x/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.jpg" alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}