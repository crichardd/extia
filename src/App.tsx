import React from 'react';
import "./css/Login.css";
import "./Login.js"
//import { showLogin, showForgotPassword, showSubscribe, showContactUs } from "./Login";

function showSignin() {
  let prism = document.querySelector(".rec-prism") as HTMLElement;
  if (prism) {
    prism.style.transform = "translateZ(-100px)";
  }
}

function showSignup() {
  let prism = document.querySelector(".rec-prism") as HTMLElement;
  if (prism) {
    prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
  }
}

function showForgotPassword() {
  let prism = document.querySelector(".rec-prism") as HTMLElement;
  if (prism) {
    prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
  }
}

function showSubscribe() {
  let prism = document.querySelector(".rec-prism") as HTMLElement;
  if (prism) {
    prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
  }
}

function showContactUs() {
  let prism = document.querySelector(".rec-prism") as HTMLElement;
  if (prism) {
    prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
  }
}

function showThankYou() {
  let prism = document.querySelector(".rec-prism") as HTMLElement;
  if (prism) {
    prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <ul className="nav">
          <li onClick={showSignin}>Connexion</li>
          <li onClick={showSignup}>Inscription</li>
          <li onClick={showSubscribe}>News Letter</li>
          <li onClick={showContactUs}>Contactez-nous</li>
        </ul>
        <div className="wrapper">
          <div className="rec-prism">
            <div className="face face-top">
              <div className="content">
              <h2>News Letter</h2>
              <small>Entrez votre e-mail pour recevoir les dernières mises à jour !</small>
              <form onSubmit={(event) => event.preventDefault()}>
                <div className="field-wrapper">
                  <input type="text" name="email" placeholder="e-mail"/>
                  <label>e-mail</label>
                </div>
                <div className="field-wrapper">
                  <input type="submit" onClick={showThankYou}/>
                </div>
                </form>
              </div>
            </div>
            <div className="face face-front">
              <div className="content">
                <h2>Connexion</h2>
                <form onSubmit={(event) => event.preventDefault()}>
                  <div className="field-wrapper">
                    <input type="text" name="username" placeholder="nom d'utilisateur"/>
                    <label>nom d'utilisateur</label>
                  </div>
                  <div className="field-wrapper">
                    <input type="password" name="password" placeholder="mot de passe" autoComplete="new-password"/>
                    <label>mot de passe</label>
                  </div>
                  <div className="field-wrapper">
                    <input type="submit" onClick={showThankYou}/>
                  </div>
                  <span className="psw" onClick={showForgotPassword}>Mot de passe oublié ? </span>
                  <span className="signup" onClick={showSignup}>Pas encore de compte ? Inscrivez-vous</span>
                </form>
              </div>
            </div>
            <div className="face face-back">
              <div className="content">
                <h2>Mot de passe oublié ?</h2>
                <small>Entrez votre e-mail pour recevoir un lien de réinitialisation de votre mot de passe</small>
                <form onSubmit={(event) => event.preventDefault()}>
                  <div className="field-wrapper">
                    <input type="text" name="email" placeholder="e-mail"/>
                    <label>e-mail</label>
                  </div>
                  <div className="field-wrapper">
                    <input type="submit" onClick={showThankYou}/>
                  </div>
              </form>
              </div>
            </div>
            <div className="face face-right">
              <div className="content">
                <h2>Inscription</h2>
                <form onSubmit={(event) => event.preventDefault()}>
                  <div className="field-wrapper">
                    <input type="text" name="email" placeholder="email"/>
                    <label>E-mail</label>
                  </div>
                  <div className="field-wrapper">
                    <input type="password" name="password" placeholder="password" autoComplete="new-password"/>
                    <label>Mot de passe</label>
                  </div>
                  <div className="field-wrapper">
                    <input type="password" name="password2" placeholder="password" autoComplete="new-password"/>
                    <label>Entrer à nouveau votre mot de passe</label>
                  </div>
                  <div className="field-wrapper">
                    <input type="submit" onClick={showThankYou}/>
                  </div>
                  <span className="singin" onClick={showSignin}>Déjà utilisateur ? Connexion</span>
                </form>
              </div>
            </div>
            <div className="face face-left">
              <div className="content">
                <h2>Contactez-nous</h2>
                <form onSubmit={(event) => event.preventDefault()}>
                  <div className="field-wrapper">
                    <input type="text" name="name" placeholder="name"/>
                    <label>Nom</label>
                  </div>
                  <div className="field-wrapper">
                    <input type="text" name="email" placeholder="email"/>
                    <label>E-mail</label>
                  </div>
                  <div className="field-wrapper">
                    <textarea placeholder="your message"></textarea>
                    <label>Votre message</label>
                  </div>
                  <div className="field-wrapper">
                    <input type="submit" onClick={showThankYou}/>
                  </div>
                </form>
              </div>
            </div>
            <div className="face face-bottom">
              <div className="content">
                <div className="thank-you-msg">
                  Thank you!
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
