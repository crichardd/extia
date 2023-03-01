import React from "react";

const prism = document.querySelector(".rec-prism");

export const showSignup = React.memo(() => {
  prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
});

export const showLogin = React.memo(() => {
  prism.style.transform = "translateZ(-100px)";
});

export const showForgotPassword = React.memo(() => {
  prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
});

export const showSubscribe = React.memo(() => {
  prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
});

export const showContactUs = React.memo(() => {
  prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
});

export const showThankYou = React.memo(() => {
  prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
});
