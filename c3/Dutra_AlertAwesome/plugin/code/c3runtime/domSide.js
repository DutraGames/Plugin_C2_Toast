"use strict";
{
  // CSS for the alert awesome
  var styleElement = document.createElement("style");

  styleElement.textContent = `
  /* RESET CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@keyframes AlertAnimate {
    0% {
        scale: 0;
    }

    25% {
        scale: .5;
    }

    50% {
        scale: .7;
    }

    75% {
        scale: 1.2;
    }

    100% {
        scale: 1;
    }
}

@keyframes BodyAlert {
    0% {
        opacity: 0;
        transform: translate(0px, 100px);
    }

    50% {
        opacity: 0;
    }

    75% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

/* WALLPAPER ALERT */
.alert-wallpaper {
    background-color: rgba(0, 0, 0, .5);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
}

/* THE FRAME MODAL ALERT */
.alert-frame {
    animation: AlertAnimate .5s ease;
    border-radius: 10px;
    background-color: #fff;
    min-width: 250px;
    max-width: 350px;
    
    max-height: 90vh;
}

/* HEADER MODAL ALERT */
.alert-header {
    padding: 5px;
    position: relative;
    top: 0%;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

/* CLOSE BUTTOM */
.alert-close {
    position: absolute;
    font-weight: bold;
    cursor: pointer;
}

.alert-close-style-default {
    top: 0;
    right: 5px;
    color: #aaa;
    transition: all .5s;
}

.alert-close-style-default:hover {
    color: #000;
}

.alert-close-style-circle {
    width: 25px;
    height: 25px;
    top: -10px;
    right: -10px;
    color: #ccc;
    background-color: #fff;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s;
}

.alert-close-style-circle:hover {
    background-color: rgba(255, 255, 255, .9);
    color: #000;
}

/* IMAGE HEADER ALERT */
.alert-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

/* BODY ALERT */
.alert-body {
    animation: BodyAlert 1s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10px 20px 10px 20px;
}

.alert-body-title {
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
}

.alert-body-message {
    padding-top: 5px;
    color: #aaa;
    font-size: 1.1rem;
    text-align: justify;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
}

.alert-body-button {
    width: 40%;
    margin-top: 15px;
    font-size: large;
    padding: 10px;
    border: none;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
    transition: all .4s;
}

.alert-body-button:hover {
    opacity: .5;
}

/* BUTTONS QUESTION */

.btn-cancel {
    background-color: #d85261;
}

.btn-cancel:hover {
    opacity: .5;
}

.btn-confirm {
    background-color: #2dd284;
}

.btn-confirm:hover {
    opacity: .5;
}

.buttons-question {
    display: flex;
    gap: 10px;
    width: 100%;
}

/* INPUT ALERT */

.alert-input {
    outline: none;
    border: 0;
    border-bottom: 1px solid #065535;
    font-size: 1.2rem;
    width: 100%;
    margin-top: 10px;
}

/* TOAST */

@keyframes Toast-right {
    0% {
        transform: translateX(500px);
    }

    25% {
        transform: translateX(375px);
    }

    50% {
        transform: translateX(250px);
    }

    75% {
        transform: translateX(125px);
    }

    100% {
        transform: translateX(0px);
    }
}

@keyframes Toast-left {
    0% {
        transform: translateX(-500px);
    }

    25% {
        transform: translateX(-375px);
    }

    50% {
        transform: translateX(-250px);
    }

    75% {
        transform: translateX(-125px);
    }

    100% {
        transform: translateX(0px);
    }

}

.toast-main {
    position: fixed;
    z-index: 99999;
    display: flex;
    flex-direction: column;
}

.toast-right {
    top: 15px;
    right: 15px;
}

.toast-left {
    top: 15px;
    left: 15px;
}

.toast-frame {
    min-width: 100px;
    height: 70px;
    display: flex;
    border-radius: 20px;
    padding: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgb(0, 0, 0, 0.2);
}

.toast-frame+.toast-frame {
    margin-top: 10px;
}

.toast-img {
    object-fit: cover;
}

.toast-close {
    color: #ccc;
    font-size: 10px;
    cursor: pointer;
    transition: all .3s;
    width: 10px;
    height: 10px;
}

.toast-close:hover {
    color: #fff;
}

.toast-content {
    padding-right: 10px;
    max-width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.toast-title {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
}

.toast-message {
    color: #eee;
    font-size: .9rem;
    text-align: justify;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
}

/* HORIZONTAL ALERT */

@keyframes AlertHorizontalAnimate {
    0% {
        scale: 0;
    }

    25% {
        scale: .5;
    }

    50% {
        scale: .7;
    }

    75% {
        scale: 1.2;
    }

    100% {
        scale: 1;
    }
}

@keyframes BodyAlertHorizontal {
    0% {
        opacity: 0;
        transform: translate(0px, 100px);
    }

    50% {
        opacity: 0;
    }

    75% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.horizontal-frame{
    display: flex;
    border-radius: 10px;
    background-color: #fff;
    min-width: 300px;
    max-width: 90vw;
    min-height: 250px;
    max-height: 80vh;
    animation: AlertHorizontalAnimate .5s ease;
}

.horizontal-header{
    min-height: 100%;
    width: 150px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

}

.horizontal-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

.horizontal-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 10px;
    animation: BodyAlertHorizontal 1s linear;
}

.horizontal-body-title{
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
}

.horizontal-body-message{
    padding-top: 5px;
    color: #aaa;
    font-size: 1.1rem;
    text-align: justify;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
}

.horizontal-body-button{
    width: 40%;
    margin-top: 15px;
    font-size: large;
    padding: 10px;
    border: none;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
    transition: all .4s;
}

.horizontal-body-button:hover{
    opacity: .5;
}


/* BACKGROUNDS COLORS HEADERS, BUTTONS AND TOASTS */

.success-bg {
    background-color: #2dd284;
}

.error-bg {
    background-color: #d85261;
}

.warning-bg {
    background-color: #fada5e;
}

.info-bg {
    background-color: #88cef7;
}

.question-bg {
    background-color: #779ecb;
}

.opinion-bg {
    background-color: #5c5d57;
}

.dark-bg {
    background-color: #111;
}

.input-bg {
    background-color: #065535
}

.bg-global {
    background-color: #fff;
}
  `;

  document.head.appendChild(styleElement);

  const DOM_COMPONENT_ID = "dutra_alertawesome";

  // Hellper functions to show the alert awesome

  const awesomeAlert = ({
    type = "success",
    img = "",
    title = "Success",
    message = "Success Action!",
    buttonOK = "OK!",
    closeStyle = "default",
    buttonConfirm = "Confirm!",
    buttonCancel = "Cancel.",
    placeholderInput = "write...",
    bgColor = "#2dd284",
    header = true,
    playSound = null,
  }) => {
    return new Promise((resolve) => {
      // Variable that takes the "body" element to inject the alert.
      const bodyEl = document.querySelector("body");

      // Alert template variables.
      let templateTitle = `<span class="alert-body-title">${title}</span>`;

      let templateMessage = `<span class="alert-body-message">${message}</span>`;

      let templateClose = `<span class='alert-close alert-close-style-${closeStyle}'>X</span>`;

      let templateImage = `<img src=${img} class="alert-img" alt="">`;

      let templateButtons = `<button class="alert-body-button ${type}-bg">${buttonOK}</button>`;

      // Make sure it's a question type alert.
      if (type === "question") {
        templateButtons = `
                <div class="buttons-question">
                    <button class="alert-body-button btn-confirm">${buttonConfirm}</button>
                    <button class="alert-body-button btn-cancel">${buttonCancel}</button>
                </div>
                `;
      }

      // Make sure it's a opinion type alert.
      if (type === "opinion") {
        templateButtons = `
                <div class="buttons-question">
                    <button class="alert-body-button btn-confirm">${buttonConfirm}</button>
                    <button class="alert-body-button ${type}-bg">${buttonOK}</button>
                    <button class="alert-body-button btn-cancel">${buttonCancel}</button>
                </div>
                `;
      }

      //Custom button colors.
      if (type === "custom") {
        templateButtons = `<button class="alert-body-button bg-global">${buttonOK}</button>`;
      }

      let templateHeader = `
            <div class="alert-header ${type}-bg">
                ${templateClose}
                ${templateImage}
            </div>`;

      //Custom header colors.
      if (type == "custom") {
        templateHeader = `
                <div class="alert-header bg-global">
                    ${templateClose}
                    ${templateImage}
                </div>`;
      }

      let templateBody = `
            <div class="alert-body">
                        ${templateTitle}
                        ${templateMessage}
                        ${templateButtons}
                    </div>`;

      // Body model for Input exclusive use
      if (type === "input") {
        templateBody = `
            <div class="alert-body">
                ${templateTitle}
                <input type="text" value="" class="alert-input" placeholder="${placeholderInput}" >
                ${templateButtons}
            </div>
            `;
      }

      if (playSound !== null) {
        let sound = new Audio(playSound);
        sound.play();
      }

      let templateAlert = `
            <div class="alert-wallpaper">
                <div class="alert-frame">
                    ${templateHeader}
                    ${templateBody}
                </div>
            </div>
            `;

      if (!header) {
        templateAlert = `
            <div class="alert-wallpaper">
                <div class="alert-frame">
                    ${templateBody}
                </div>
            </div>
            `;
      }

      // Inject the alert into the "body".
      bodyEl.insertAdjacentHTML("beforeend", templateAlert);

      //////////////////////////////////////////////////////////////////////////

      // Variables to use user actions.
      const AlertWallpaper = document.querySelector(".alert-wallpaper");

      const AlertButtonOK = document.querySelector(".alert-body-button");

      // Actions to be performed.

      // I leave this action disabled as I expect the user to do one of the other actions, rather than simply ignoring it when clicking outside. But if you want to activate, just uncomment.
      /*     AlertWallpaper.addEventListener('click', () =>{
                AlertWallpaper.remove()
            }) */

      // Action that closes the alert on Close.
      if (header) {
        const AlertClose = document.querySelector(".alert-close");
        AlertClose.addEventListener("click", () => {
          resolve("Close");
          AlertWallpaper.remove();
        });
      }

      // Actions that will be used from the question alert.
      if (type === "question") {
        const AlertButtonConfirm = document.querySelector(".btn-confirm");
        const AlertButtonCancel = document.querySelector(".btn-cancel");

        AlertButtonConfirm.addEventListener("click", () => {
          resolve("Confirm");
          AlertWallpaper.remove();
        });

        AlertButtonCancel.addEventListener("click", () => {
          resolve("Cancel");
          AlertWallpaper.remove();
        });
      }

      // Actions that will be used from the opinion alert.
      if (type === "opinion") {
        const AlertButtonOpinion = document.querySelectorAll(".opinion-bg");
        const AlertButtonConfirm = document.querySelector(".btn-confirm");
        const AlertButtonCancel = document.querySelector(".btn-cancel");

        header
          ? AlertButtonOpinion[1].addEventListener("click", () => {
              resolve("OK");
              AlertWallpaper.remove();
            })
          : AlertButtonOpinion[0].addEventListener("click", () => {
              resolve("OK");
              AlertWallpaper.remove();
            });

        AlertButtonConfirm.addEventListener("click", () => {
          resolve("Confirm");
          AlertWallpaper.remove();
        });

        AlertButtonCancel.addEventListener("click", () => {
          resolve("Cancel");
          AlertWallpaper.remove();
        });
      }

      // Alert actions the user passes a value
      if (type === "input") {
        AlertButtonOK.addEventListener("click", () => {
          const AlertInput = document.querySelector(".alert-input").value;
          resolve(AlertInput);
          AlertWallpaper.remove();
        });
      }

      // Action that gives an OK to the button.
      AlertButtonOK.addEventListener("click", () => {
        resolve("OK");
        AlertWallpaper.remove();
      });

      // Background color application
      if (type === "custom") {
        const ColorBGs = document.querySelectorAll(".bg-global");
        ColorBGs[0].style.backgroundColor = bgColor;
        ColorBGs[1].style.backgroundColor = bgColor;
      }
    });
  };

  const awesomeToast = ({
    type = "success",
    title = "Success",
    message = "Success Action!",
    img = "",
    timer = 2000,
    bgColor = "#2dd284",
    position = "right",
    playSound = null,
  }) => {
    return new Promise((resolve) => {
      const bodyEl = document.querySelector("body");

      // Function that passes its own id to toast
      const id = () => {
        return "_" + Math.random().toString(36).substr(2, 9);
      };

      // Div mother of toasts.
      let templateMain = document.querySelector(".toast-main");

      if (!templateMain) {
        bodyEl.insertAdjacentHTML(
          "beforeend",
          `<div class="toast-main toast-${position}"></div>`
        );
        templateMain = document.querySelector(".toast-main");
      }

      // ID Toast
      const toastId = id();

      if (playSound !== null) {
        let sound = new Audio(playSound);
        sound.play();
      }

      // Model that Toast will follow.
      let templateToast = `
        <div class="toast-frame ${type}-bg" style="animation: Toast-${position} 1s ease-in;" id="${toastId}-toast-frame">
            <div class="toast-content">
                <span class="toast-title">${title}</span>
                <span class="toast-message">${message}</span>
            </div>
            <img src=${img} class="toast-img" alt="">
            <span class="toast-close" id="${toastId}-toast-close">X</span>
        </div>
        `;

      if (img === "") {
        templateToast = `
            <div class="toast-frame ${type}-bg" style="animation: Toast-${position} 1s ease-in;" id="${toastId}-toast-frame">
                <div class="toast-content">
                    <span class="toast-title">${title}</span>
                    <span class="toast-message">${message}</span>
                </div>
                
                <span class="toast-close" id="${toastId}-toast-close">X</span>
            </div>
            `;
      }

      // Customizable gift template
      if (type === "custom") {
        templateToast = `
            <div class="toast-frame bg-global" id="${toastId}-toast-frame">
                <div class="toast-content">
                <span class="toast-title">${title}</span>
                <span class="toast-message">${message}</span>
                </div>
                <img src=${img} class="toast-img">
                <span class="toast-close" id="${toastId}-toast-close">X</span>
            </div>
            `;

        if (img === "") {
          templateToast = `
          <div class="toast-frame bg-global" id="${toastId}-toast-frame">
              <div class="toast-content">
              <span class="toast-title">${title}</span>
              <span class="toast-message">${message}</span>
              </div>
              <span class="toast-close" id="${toastId}-toast-close">X</span>
          </div>
          `;
        }
      }

      // All toasts
      const toasts = document.querySelectorAll(".toast-frame");

      if (toasts.length) {
        toasts[0].insertAdjacentHTML("beforebegin", templateToast);
      } else {
        templateMain.innerHTML = templateToast;
      }

      // Variable responsible for each gift.
      const ToastFrame = document.querySelector(`#${toastId}-toast-frame`);

      // Toast timer.
      setTimeout(() => {
        ToastFrame.remove();
        resolve("endtime");
      }, timer);

      // Close Toast.
      const ToastClose = document.querySelector(`#${toastId}-toast-close`);
      ToastClose.addEventListener("click", () => {
        ToastFrame.remove();
        resolve("close");
      });

      // Background color application
      if (type === "custom") {
        const ColorBGs = document.querySelector(".bg-global");
        ColorBGs.style.backgroundColor = bgColor;
      }
    });
  };

  const awesomeHorizontal = ({
    type = "success",
    img = "",
    title = "Success",
    message = "Success Action!",
    buttonOK = "OK!",
    bgColor = "#2dd284",
    header = true,
    playSound = null,
  }) => {
    return new Promise((resolve) => {
      // Variable that takes the "body" element to inject the alert.
      const bodyEl = document.querySelector("body");

      let templateHeader = `
        <div class="horizontal-header ${type}-bg">
            <img src=${img} class="horizontal-img" alt="">
        </div>`;

      let TemplateHorizontal = `
        <div class="alert-wallpaper">
            <div class="horizontal-frame">
                ${templateHeader}
                <div class="horizontal-body">
                    <span class="horizontal-body-title">${title}</span>
                    <span class="horizontal-body-message">${message}</span>
                    <button class="horizontal-body-button ${type}-bg">${buttonOK}</button>
                </div>
            </div>
        </div>
        `;

      if (type === "custom") {
        TemplateHorizontal = `
        <div class="alert-wallpaper">
            <div class="horizontal-frame">
                <div class="horizontal-header bg-global">
                    <img src=${img} class="horizontal-img">
                </div>
                <div class="horizontal-body">
                    <span class="horizontal-body-title">${title}</span>
                    <span class="horizontal-body-message">${message}</span>
                    <button class="horizontal-body-button bg-global">${buttonOK}</button>
                </div>
            </div>
        </div>
        `;
      }

      if (playSound !== null) {
        let sound = new Audio(playSound);
        sound.play();
      }

      if (!header) {
        TemplateHorizontal = `
            <div class="alert-wallpaper">
                <div class="horizontal-frame">
                    <div class="horizontal-body">
                        <span class="horizontal-body-title">${title}</span>
                        <span class="horizontal-body-message">${message}</span>
                        <button class="horizontal-body-button ${type}-bg">${buttonOK}</button>
                    </div>
                </div>
            </div>
            `;
      }

      // Inject the alert into the "body".
      bodyEl.insertAdjacentHTML("beforeend", TemplateHorizontal);

      const AlertWallpaper = document.querySelector(".alert-wallpaper");

      const ButtomOKAlert = document.querySelector(".horizontal-body-button");
      ButtomOKAlert.addEventListener("click", () => {
        AlertWallpaper.remove();
        resolve("ok");
      });

      // Background color application
      if (type === "custom") {
        const ColorBGs = document.querySelectorAll(".bg-global");
        ColorBGs[0].style.backgroundColor = bgColor;
        ColorBGs[1].style.backgroundColor = bgColor;
      }
    });
  };

  const HANDLER_CLASS = class ExampleDOMHandler extends globalThis.DOMHandler {
    constructor(iRuntime) {
      super(iRuntime, DOM_COMPONENT_ID);

      this.AddRuntimeMessageHandlers([
        [
          "show-awesome-alert",
          ({
            type,
            img,
            title,
            message,
            buttonOK,
            closeStyle,
            buttonConfirm,
            buttonCancel,
            placeholderInput,
            bgColor,
            header,
            playSound,
          }) =>
            this._ShowAwesomeAlert({
              type,
              img,
              title,
              message,
              buttonOK,
              closeStyle,
              buttonConfirm,
              buttonCancel,
              placeholderInput,
              bgColor,
              header,
              playSound,
            }),
        ],
        [
          "show-confirm-alert",
          ({
            type,
            title,
            message,
            img,
            buttonConfirm,
            buttonCancel,
            closeStyle,
            header,
          }) =>
            this._ShowConfirmAlert({
              type,
              title,
              message,
              img,
              buttonConfirm,
              buttonCancel,
              closeStyle,
              header,
            }),
        ],
        [
          "show-input-alert",
          ({
            type,
            title,
            img,
            buttonOK,
            closeStyle,
            header,
            placeholderInput,
          }) =>
            this._ShowInputAlert({
              type,
              title,
              img,
              buttonOK,
              closeStyle,
              header,
              placeholderInput,
            }),
        ],
        [
          "show-toast",
          ({
            type,
            title,
            message,
            img,
            timer,
            bgColor,
            position,
            playSound,
          }) =>
            this._AwesomeToast({
              type,
              title,
              message,
              img,
              timer,
              bgColor,
              position,
              playSound,
            }),
        ],
      ]);
    }

    async _ShowAwesomeAlert({
      type,
      img,
      title,
      message,
      buttonOK,
      closeStyle,
      buttonConfirm,
      buttonCancel,
      placeholderInput,
      bgColor,
      header,
      playSound,
    }) {
      const res = await awesomeAlert({
        type,
        img,
        title,
        message,
        buttonOK,
        closeStyle,
        buttonConfirm,
        buttonCancel,
        placeholderInput,
        bgColor,
        header,
        playSound,
      });

      this.PostToRuntime("on-awesome-alert", res);
    }

    async _ShowConfirmAlert({
      type,
      title,
      message,
      img,
      buttonConfirm,
      buttonCancel,
      closeStyle,
      header,
    }) {
      const res = await awesomeAlert({
        type,
        title,
        message,
        img,
        buttonConfirm,
        buttonCancel,
        closeStyle,
        header,
      });

      this.PostToRuntime("on-awesome-alert", res);
    }

    async _ShowInputAlert({
      type,
      title,
      img,
      buttonOK,
      closeStyle,
      header,
      placeholderInput,
    }) {
      const res = await awesomeAlert({
        type,
        title,
        img,
        buttonOK,
        closeStyle,
        header,
        placeholderInput,
      });

      this.PostToRuntime("on-awesome-alert", {
        type: "Input",
        value: res,
      });
    }

    async _AwesomeToast({
      type,
      title,
      message,
      img,
      timer,
      bgColor,
      position,
      playSound,
    }) {
      const res = await awesomeToast({
        type,
        title,
        message,
        img,
        timer,
        bgColor,
        position,
        playSound,
      });
      this.PostToRuntime("on-awesome-toast", res);
    }
  };

  globalThis.RuntimeInterface.AddDOMHandlerClass(HANDLER_CLASS);
}
