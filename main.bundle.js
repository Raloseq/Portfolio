!function(n){var t={};function e(p){if(t[p])return t[p].exports;var a=t[p]={i:p,l:!1,exports:{}};return n[p].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=n,e.c=t,e.d=function(n,t,p){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:p})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var p=Object.create(null);if(e.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)e.d(p,a,function(t){return n[t]}.bind(null,a));return p},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=7)}([function(n,t){const e=document.querySelector(".app-nav--burger"),p=document.querySelector(".app-nav"),a=document.querySelectorAll(".app-nav--item"),i=document.querySelectorAll("span");e.addEventListener("click",()=>{e.classList.toggle("app-nav--burger__active"),p.classList.toggle("active"),a.forEach(n=>{n.classList.toggle("active-item")})}),window.addEventListener("scroll",()=>{let n=window.scrollY;n>50?p.classList.add("menuColorScroll"):p.classList.remove("menuColorScroll"),n>550?i.forEach(n=>{n.classList.add("black")}):i.forEach(n=>{n.classList.remove("black")}),p.classList.contains("active")&&i.forEach(n=>{n.classList.remove("black")})})},function(n,t){new Typed("#typed",{stringsElement:"#typed-strings",backSpeed:50,typeSpeed:50,loop:!0})},function(n,t,e){var p=e(3);"string"==typeof p&&(p=[[n.i,p,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(5)(p,a);p.locals&&(n.exports=p.locals)},function(n,t,e){(n.exports=e(4)(!1)).push([n.i,".app-nav {\n  position: fixed;\n  width: 100%;\n  font-size: 25px;\n  top: -200%;\n  z-index: 99999;\n  background-color: rgba(0, 0, 0, 0.8);\n  transition: .4s; }\n  .app-nav .app-nav--list {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    padding: 25px;\n    list-style-type: none; }\n    .app-nav .app-nav--list .app-nav--item {\n      margin: 15px 50px;\n      opacity: 0; }\n      .app-nav .app-nav--list .app-nav--item.active-item {\n        animation: show-item .5s .8s forwards; }\n        .app-nav .app-nav--list .app-nav--item.active-item:nth-child(2) {\n          animation: show-item .5s 1s forwards; }\n        .app-nav .app-nav--list .app-nav--item.active-item:nth-child(3) {\n          animation: show-item .5s 1.2s forwards; }\n        .app-nav .app-nav--list .app-nav--item.active-item:nth-child(4) {\n          animation: show-item .5s 1.4s forwards; }\n        .app-nav .app-nav--list .app-nav--item.active-item:nth-child(5) {\n          animation: show-item .5s 1.6s forwards; }\n      .app-nav .app-nav--list .app-nav--item .app-nav--link {\n        text-decoration: none;\n        color: white;\n        position: relative; }\n        .app-nav .app-nav--list .app-nav--item .app-nav--link::before {\n          content: '';\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          border-bottom: 2px solid white;\n          width: 0;\n          margin: -5px 0;\n          transition: width 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); }\n        .app-nav .app-nav--list .app-nav--item .app-nav--link:hover::before {\n          width: 100%; }\n  .app-nav .app-nav--burger {\n    position: fixed;\n    top: 20px;\n    right: 5px;\n    width: 50px;\n    height: 35px;\n    margin: 0 10px;\n    cursor: pointer;\n    transition: .2s; }\n    .app-nav .app-nav--burger span {\n      position: absolute;\n      width: 100%;\n      height: 5px;\n      background-color: white;\n      transition: top .2s .2s, bottom .2s .2s, opacity .2s .3s, transform .2s .4s; }\n      .app-nav .app-nav--burger span:nth-child(1) {\n        top: 0; }\n      .app-nav .app-nav--burger span:nth-child(2) {\n        top: calc(50% - 2.5px); }\n      .app-nav .app-nav--burger span:nth-child(3) {\n        bottom: 0; }\n      .app-nav .app-nav--burger span.black {\n        background-color: black; }\n  .app-nav .app-nav--burger__active {\n    transform: rotate(-90deg); }\n    .app-nav .app-nav--burger__active span {\n      background-color: white; }\n      .app-nav .app-nav--burger__active span:nth-child(1) {\n        top: calc(50% - 2.5px);\n        transform: rotate(45deg); }\n      .app-nav .app-nav--burger__active span:nth-child(2) {\n        opacity: 0; }\n      .app-nav .app-nav--burger__active span:nth-child(3) {\n        bottom: calc(50% - 2.5px);\n        transform: rotate(-45deg); }\n      .app-nav .app-nav--burger__active span.black {\n        background-color: black; }\n  .app-nav.active {\n    top: 0; }\n  .app-nav.menuColorScroll {\n    background-color: rgba(0, 0, 0, 0.8); }\n\n@keyframes show-item {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px); }\n  100% {\n    opacity: 1;\n    transform: translateX(-10px); } }\n\n@media (min-width: 1024px) {\n  .app-nav {\n    position: fixed;\n    width: 100%;\n    font-size: 20px;\n    top: 0;\n    z-index: 99999;\n    background-color: transparent; }\n    .app-nav .app-nav--list {\n      display: flex;\n      flex-direction: row;\n      padding: 15px;\n      list-style-type: none; }\n      .app-nav .app-nav--list .app-nav--item {\n        opacity: 1; }\n        .app-nav .app-nav--list .app-nav--item .app-nav--link {\n          color: white; }\n    .app-nav .app-nav--burger {\n      display: none; } }\n\n.app-header {\n  height: 100vh;\n  background: url(../images/hero-image.jpg) no-repeat center;\n  background-size: cover;\n  background-attachment: fixed;\n  color: white;\n  font-size: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative; }\n  .app-header .app-header--text {\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    padding: 5px;\n    top: 35%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; }\n    .app-header .app-header--text .app-header--h1 {\n      font-size: 40px; }\n  .app-header .fas {\n    font-size: 50px;\n    position: absolute;\n    bottom: 7%;\n    animation: up-down-arrow linear 1s infinite; }\n\n@keyframes up-down-arrow {\n  0% {\n    transform: translateY(-30%); }\n  50% {\n    transform: translateY(30%); }\n  100% {\n    transform: translateY(-30%); } }\n\n@media (min-width: 768px) and (orientation: portrait) {\n  .app-header .app-header--text .app-header--h1 {\n    font-size: 80px; }\n  .app-header .app-header--typing #typed-strings {\n    font-size: 50px; } }\n\n@media (min-width: 1024px) {\n  .app-header .app-header--text .app-header--h1 {\n    font-size: 80px; } }\n\n@media (min-width: 320px) and (orientation: landscape) {\n  .app-header .app-header--text .app-header--h1 {\n    font-size: 50px; }\n  .app-header .fas {\n    font-size: 30px; }\n  .app-header .app-header--typing {\n    position: absolute;\n    top: 60%; } }\n\n@media (min-width: 1024px) and (orientation: landscape) {\n  .app-header .fas {\n    font-size: 50px; }\n  .app-header .app-header--typing {\n    position: absolute;\n    top: 50%; } }\n\n.app-about {\n  height: 90vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 20px; }\n  .app-about .app-about--h1 {\n    font-family: 'Ubuntu', sans-serif;\n    position: relative;\n    margin: 100px 0 30px;\n    font-size: 30px;\n    opacity: 0;\n    transition: .5s;\n    transform: translateX(-20px); }\n    .app-about .app-about--h1::before {\n      position: absolute;\n      content: '';\n      bottom: -5px;\n      left: 0;\n      padding: 20px;\n      width: 20%;\n      border-bottom: 2px solid black; }\n    .app-about .app-about--h1::after {\n      position: absolute;\n      content: '';\n      bottom: 0;\n      height: 70px;\n      left: -10%;\n      padding: 20px;\n      width: 30%;\n      background-color: #50C878;\n      z-index: -1; }\n  .app-about .app-about--p {\n    letter-spacing: 2px;\n    font-family: 'Roboto', sans-serif;\n    transition: .5s;\n    opacity: 0;\n    transform: translateX(20px);\n    padding: 20px; }\n    .app-about .app-about--p .app-about--p__bold {\n      font-weight: bold; }\n  .app-about .app-about--h1__active {\n    opacity: 1;\n    transform: translateX(0); }\n  .app-about .app-about--p__active {\n    opacity: 1;\n    transform: translateX(0); }\n\n@media (min-width: 321px) {\n  .app-about {\n    height: 70vh; } }\n\n@media (min-width: 361px) {\n  .app-about {\n    height: 60vh; } }\n\n@media (min-width: 768px) {\n  .app-about {\n    height: 60vh; }\n    .app-about .app-about--h1 {\n      font-size: 50px;\n      margin: 0; }\n    .app-about .app-about--p {\n      padding: 60px;\n      margin: 0 auto;\n      font-size: 20px; } }\n\n@media (min-width: 321px) and (orientation: landscape) {\n  .app-about {\n    height: 80vh; } }\n\n@media (min-width: 768px) and (orientation: landscape) {\n  .app-about {\n    height: 120vh; } }\n\n@media (min-width: 1024px) and (orientation: landscape) {\n  .app-about {\n    height: 70vh; } }\n\n.app-skills {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 20px; }\n  .app-skills .h1--primary {\n    font-family: 'Ubuntu', sans-serif;\n    position: relative;\n    margin: 100px 0 30px;\n    font-size: 30px; }\n    .app-skills .h1--primary::before {\n      position: absolute;\n      content: '';\n      bottom: -5px;\n      left: 0;\n      padding: 20px;\n      width: 20%;\n      border-bottom: 2px solid black; }\n    .app-skills .h1--primary::after {\n      position: absolute;\n      content: '';\n      bottom: 0;\n      height: 70px;\n      left: -10%;\n      padding: 20px;\n      width: 30%;\n      background-color: #50C878;\n      z-index: -1; }\n  .app-skills .app-skills--h1 {\n    opacity: 0;\n    transition: .7s;\n    transform: translateY(30px); }\n    .app-skills .app-skills--h1.app-skills--h1__active {\n      opacity: 1;\n      transform: translateY(0); }\n  .app-skills .app-skills--container {\n    display: flex;\n    flex-wrap: wrap; }\n    .app-skills .app-skills--container .app-skills--div {\n      flex-basis: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      opacity: 0; }\n      .app-skills .app-skills--container .app-skills--div .app-skills--div_row {\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n      .app-skills .app-skills--container .app-skills--div.skills-div__active {\n        opacity: 1;\n        transform: translateY(0); }\n      .app-skills .app-skills--container .app-skills--div:nth-of-type(1) {\n        transition: .3s; }\n      .app-skills .app-skills--container .app-skills--div:nth-of-type(2) {\n        transition: .5s; }\n      .app-skills .app-skills--container .app-skills--div:nth-of-type(3) {\n        transition: .7s; }\n      .app-skills .app-skills--container .app-skills--div:nth-of-type(4) {\n        transition: .9s; }\n      .app-skills .app-skills--container .app-skills--div:nth-of-type(5) {\n        transition: 1.1s; }\n      .app-skills .app-skills--container .app-skills--div:nth-of-type(6) {\n        transition: 1.3s; }\n      .app-skills .app-skills--container .app-skills--div img {\n        width: 70px;\n        margin: 15px 8px; }\n      .app-skills .app-skills--container .app-skills--div .vue-width {\n        width: 200px; }\n      .app-skills .app-skills--container .app-skills--div .app-skills--p {\n        font-family: 'Roboto', sans-serif;\n        letter-spacing: 1px;\n        text-align: center; }\n\n@media (min-width: 321px) {\n  .app-skills .h1--primary {\n    font-size: 40px; } }\n\n@media (min-width: 361px) {\n  .app-skills .h1--primary {\n    font-size: 50px; }\n  .app-skills .app-skills--knowledge {\n    font-size: 30px; } }\n\n@media (min-width: 768px) {\n  .app-skills .app-skills--container .app-skills--div {\n    flex-basis: 50%;\n    justify-content: flex-start;\n    padding: 30px; }\n    .app-skills .app-skills--container .app-skills--div img {\n      width: 70px;\n      margin: 15px 8px; } }\n\n@media (min-width: 1024px) {\n  .app-skills {\n    padding: 50px; }\n    .app-skills .h1--primary {\n      font-size: 50px;\n      margin: 0 0 80px; }\n    .app-skills .app-skills--knowledge {\n      font-size: 30px; }\n    .app-skills .app-skills--container {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center; }\n      .app-skills .app-skills--container .app-skills--div {\n        flex-basis: 30%;\n        display: flex;\n        flex-direction: column; }\n        .app-skills .app-skills--container .app-skills--div img {\n          width: 100px;\n          margin: 15px;\n          filter: grayscale(100%);\n          transition: .2s; }\n        .app-skills .app-skills--container .app-skills--div:hover img {\n          filter: grayscale(0); }\n        .app-skills .app-skills--container .app-skills--div .app-skills--div_row {\n          margin: 0 auto; }\n        .app-skills .app-skills--container .app-skills--div .app-skills--p {\n          padding: 40px; } }\n\n@media (min-width: 320px) and (orientation: landscape) {\n  .app-skills .app-skills--container .app-skills--div {\n    padding: 50px;\n    text-align: center; } }\n\n@media (min-width: 1024px) and (orientation: landscape) {\n  .app-skills .app-skills--container .app-skills--div {\n    padding: 0;\n    flex-basis: 40%;\n    text-align: justify; } }\n\n.app-projects {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n  .app-projects .h1--primary {\n    font-family: 'Ubuntu', sans-serif;\n    position: relative;\n    margin: 100px 0 30px;\n    font-size: 30px;\n    margin: 90px auto;\n    font-size: 50px; }\n    .app-projects .h1--primary::before {\n      position: absolute;\n      content: '';\n      bottom: -5px;\n      left: 0;\n      padding: 20px;\n      width: 20%;\n      border-bottom: 2px solid black; }\n    .app-projects .h1--primary::after {\n      position: absolute;\n      content: '';\n      bottom: 0;\n      height: 70px;\n      left: -10%;\n      padding: 20px;\n      width: 30%;\n      background-color: #50C878;\n      z-index: -1; }\n  .app-projects .app-projects--h1 {\n    opacity: 0;\n    transform: scale(0.5);\n    transition: 1s; }\n    .app-projects .app-projects--h1.app-projects--h1__active {\n      opacity: 1;\n      transform: scale(1); }\n  .app-projects .app-projects--container .app-projects--div {\n    position: relative;\n    width: 80%;\n    height: 40vh;\n    box-shadow: 0 0 15px black;\n    border-radius: 10px;\n    overflow: hidden;\n    margin: 30px auto;\n    opacity: 0;\n    transform: scale(0.4);\n    background-size: cover; }\n    .app-projects .app-projects--container .app-projects--div.app-projects--div__active {\n      opacity: 1;\n      transform: scale(1); }\n    .app-projects .app-projects--container .app-projects--div:nth-child(1) {\n      background: url(../images/first-site.png) center no-repeat;\n      background-size: cover;\n      transition: .5s; }\n    .app-projects .app-projects--container .app-projects--div:nth-child(2) {\n      background: url(../images/hero-image.jpg) center no-repeat;\n      background-size: cover;\n      transition: 1s; }\n    .app-projects .app-projects--container .app-projects--div:nth-child(3) {\n      background: url(../images/hqz-front.png) center no-repeat;\n      background-size: cover;\n      transition: 1.5s; }\n    .app-projects .app-projects--container .app-projects--div:nth-child(4) {\n      background: url(../images/coming+soon.jpg) center no-repeat;\n      background-size: cover;\n      transition: 2s; }\n    .app-projects .app-projects--container .app-projects--div:hover .app-projects--div__overlay {\n      height: 100%;\n      opacity: 1; }\n    .app-projects .app-projects--container .app-projects--div .app-projects--div__overlay {\n      position: relative;\n      background-color: rgba(0, 0, 0, 0.8);\n      color: white;\n      font-family: 'Roboto', sans-serif;\n      width: 100%;\n      height: 0;\n      opacity: 0;\n      transition: .3s; }\n      .app-projects .app-projects--container .app-projects--div .app-projects--div__overlay .app-projects--p {\n        position: absolute;\n        top: 20%;\n        left: 50%;\n        transform: translateX(-50%);\n        font-size: 15px; }\n      .app-projects .app-projects--container .app-projects--div .app-projects--div__overlay .app-projects--link {\n        position: absolute;\n        width: 60%;\n        top: 80%;\n        left: 50%;\n        transform: translateX(-30%); }\n        .app-projects .app-projects--container .app-projects--div .app-projects--div__overlay .app-projects--link .app-projects--button {\n          font-size: 15px;\n          width: 60%;\n          margin: 0 auto;\n          border: none;\n          border: 1px solid white;\n          padding: 5px;\n          border-radius: 10px;\n          color: white;\n          cursor: pointer;\n          background-color: transparent;\n          transition: .3s; }\n          .app-projects .app-projects--container .app-projects--div .app-projects--div__overlay .app-projects--link .app-projects--button:hover {\n            color: black;\n            background-color: white; }\n\n@media (min-width: 768px) {\n  .app-projects .h1--primary {\n    font-size: 60px; }\n  .app-projects .app-projects--container {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap; }\n    .app-projects .app-projects--container .app-projects--div {\n      flex-basis: 40%;\n      height: 30vh; }\n      .app-projects .app-projects--container .app-projects--div .app-projects--div__overlay .app-projects--p {\n        font-size: 18px; } }\n\n@media (min-width: 1024px) {\n  .app-projects .h1--primary {\n    margin-bottom: 40px; }\n  .app-projects .app-projects--container .app-projects--div {\n    flex-basis: 30%; }\n    .app-projects .app-projects--container .app-projects--div .app-projects--div__overlay .app-projects--link {\n      top: 70%; }\n      .app-projects .app-projects--container .app-projects--div .app-projects--div__overlay .app-projects--link .app-projects--button {\n        padding: 10px;\n        font-size: 20px;\n        border-radius: 20px; } }\n\n@media (min-width: 320px) and (orientation: landscape) {\n  .app-projects .app-projects--container .app-projects--div {\n    flex-basis: 60%;\n    height: 60vh; } }\n\n@media (min-width: 768px) and (orientation: landscape) {\n  .app-projects .app-projects--container .app-projects--div {\n    flex-basis: 40%; } }\n\n@media (min-width: 1024px) and (orientation: landscape) {\n  .app-projects .app-projects--container .app-projects--div {\n    flex-basis: 40%;\n    height: 30vh; } }\n\n.app-footer {\n  height: 50vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 15px; }\n  .app-footer .h1--primary {\n    font-family: 'Ubuntu', sans-serif;\n    position: relative;\n    margin: 100px 0 30px;\n    font-size: 30px; }\n    .app-footer .h1--primary::before {\n      position: absolute;\n      content: '';\n      bottom: -5px;\n      left: 0;\n      padding: 20px;\n      width: 20%;\n      border-bottom: 2px solid black; }\n    .app-footer .h1--primary::after {\n      position: absolute;\n      content: '';\n      bottom: 0;\n      height: 70px;\n      left: -10%;\n      padding: 20px;\n      width: 30%;\n      background-color: #50C878;\n      z-index: -1; }\n  .app-footer .app-footer--h1 {\n    opacity: 0;\n    transition: .8s; }\n    .app-footer .app-footer--h1.app-footer--h1__active {\n      opacity: 1; }\n  .app-footer .app-footer--div {\n    display: flex; }\n    .app-footer .app-footer--div .app-footer--link {\n      text-decoration: none;\n      cursor: pointer;\n      opacity: 0;\n      transition: .8s; }\n      .app-footer .app-footer--div .app-footer--link .fa-github {\n        color: black; }\n      .app-footer .app-footer--div .app-footer--link .fa-linkedin {\n        color: #0077b5; }\n      .app-footer .app-footer--div .app-footer--link .fa-envelope {\n        color: black; }\n      .app-footer .app-footer--div .app-footer--link .app-footer--icons {\n        margin: 30px;\n        font-size: 40px; }\n        .app-footer .app-footer--div .app-footer--link .app-footer--icons:hover {\n          animation: shake-icons 1s linear infinite; }\n      .app-footer .app-footer--div .app-footer--link.app-footer--link__active {\n        opacity: 1; }\n\n@keyframes shake-icons {\n  0% {\n    transform: rotate(0deg); }\n  25% {\n    transform: rotate(30deg); }\n  50% {\n    transform: rotate(0deg); }\n  75% {\n    transform: rotate(-30deg); }\n  100% {\n    transform: rotate(0deg); } }\n\n@media (min-width: 360px) {\n  .app-footer {\n    height: 50vh; }\n    .app-footer .h1--primary {\n      font-size: 40px; } }\n\n@media (min-width: 768px) {\n  .app-footer {\n    height: 40vh; }\n    .app-footer .h1--primary {\n      font-size: 50px; }\n    .app-footer .app-footer--div .app-footer--link .app-footer--icons {\n      font-size: 60px; } }\n\n*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box; }\n\nhtml {\n  scroll-behavior: smooth; }\n\nmain {\n  width: 100%; }\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",p=n[3];if(!p)return e;if(t&&"function"==typeof btoa){var a=(o=p,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=p.sources.map(function(n){return"/*# sourceURL="+p.sourceRoot+n+" */"});return[e].concat(i).concat([a]).join("\n")}var o;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var p={},a=0;a<this.length;a++){var i=this[a][0];null!=i&&(p[i]=!0)}for(a=0;a<n.length;a++){var o=n[a];null!=o[0]&&p[o[0]]||(e&&!o[2]?o[2]=e:e&&(o[2]="("+o[2]+") and ("+e+")"),t.push(o))}},t}},function(n,t,e){var p,a,i={},o=(p=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=p.apply(this,arguments)),a}),r=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var p=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&p instanceof window.HTMLIFrameElement)try{p=p.contentDocument.head}catch(n){p=null}t[n]=p}return t[n]}}(),s=null,l=0,c=[],d=e(6);function f(n,t){for(var e=0;e<n.length;e++){var p=n[e],a=i[p.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](p.parts[o]);for(;o<p.parts.length;o++)a.parts.push(x(p.parts[o],t))}else{var r=[];for(o=0;o<p.parts.length;o++)r.push(x(p.parts[o],t));i[p.id]={id:p.id,refs:1,parts:r}}}}function u(n,t){for(var e=[],p={},a=0;a<n.length;a++){var i=n[a],o=t.base?i[0]+t.base:i[0],r={css:i[1],media:i[2],sourceMap:i[3]};p[o]?p[o].parts.push(r):e.push(p[o]={id:o,parts:[r]})}return e}function h(n,t){var e=r(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var p=c[c.length-1];if("top"===n.insertAt)p?p.nextSibling?e.insertBefore(t,p.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),c.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=r(n.insertAt.before,e);e.insertBefore(t,a)}}function v(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=c.indexOf(n);t>=0&&c.splice(t,1)}function m(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var p=function(){0;return e.nc}();p&&(n.attrs.nonce=p)}return b(t,n.attrs),h(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function x(n,t){var e,p,a,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var o=l++;e=s||(s=m(t)),p=k.bind(null,e,o,!1),a=k.bind(null,e,o,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),h(n,t),t}(t),p=function(n,t,e){var p=e.css,a=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||i)&&(p=d(p));a&&(p+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var o=new Blob([p],{type:"text/css"}),r=n.href;n.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}.bind(null,e,t),a=function(){v(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(t),p=function(n,t){var e=t.css,p=t.media;p&&n.setAttribute("media",p);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),a=function(){v(e)});return p(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;p(n=t)}else a()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=u(n,t);return f(e,t),function(n){for(var p=[],a=0;a<e.length;a++){var o=e[a];(r=i[o.id]).refs--,p.push(r)}n&&f(u(n,t),t);for(a=0;a<p.length;a++){var r;if(0===(r=p[a]).refs){for(var s=0;s<r.parts.length;s++)r.parts[s]();delete i[r.id]}}}};var g,y=(g=[],function(n,t){return g[n]=t,g.filter(Boolean).join("\n")});function k(n,t,e,p){var a=e?"":p.css;if(n.styleSheet)n.styleSheet.cssText=y(t,a);else{var i=document.createTextNode(a),o=n.childNodes;o[t]&&n.removeChild(o[t]),o.length?n.insertBefore(i,o[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,p=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var a,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(a=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:p+i.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(n,t,e){"use strict";e.r(t);const p=n=>{let t=n.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},a=document.querySelector(".app-about--h1"),i=document.querySelector(".app-about--p");window.addEventListener("scroll",()=>{p(a)&&p(i)&&(a.classList.add("app-about--h1__active"),i.classList.add("app-about--p__active"))});const o=document.querySelector(".app-footer--h1"),r=document.querySelectorAll(".app-footer--link");window.addEventListener("scroll",()=>{p(o)&&o.classList.add("app-footer--h1__active"),p(...r)&&r.forEach(n=>{n.classList.add("app-footer--link__active")})});e(0);const s=document.querySelector(".app-projects--h1"),l=document.querySelectorAll(".app-projects--div");window.addEventListener("scroll",()=>{p(s)&&s.classList.add("app-projects--h1__active"),p(...l)&&l.forEach(n=>{n.classList.add("app-projects--div__active")})});const c=document.querySelectorAll(".app-skills--div"),d=document.querySelector(".app-skills--h1");window.addEventListener("scroll",()=>{p(d)&&d.classList.add("app-skills--h1__active"),p(...c)&&c.forEach(n=>{n.classList.add("skills-div__active")})});e(1),e(2)}]);