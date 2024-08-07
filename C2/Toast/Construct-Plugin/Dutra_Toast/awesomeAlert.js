const awesomeAlert = ({
    type = 'success',
    img = '',
    title = 'Success',
    message = 'Success Action!',
    buttonOK = 'OK!',
    closeStyle = 'default',
    buttonConfirm = 'Confirm!',
    buttonCancel = 'Cancel.',
    placeholderInput = 'write...',
    bgColor = '#2dd284',
    header = true,
    playSound = null
}) => {
    return new Promise(resolve => {

        // Variable that takes the "body" element to inject the alert.
        const bodyEl = document.querySelector('body')

        // Alert template variables.
        let templateTitle = `<span class="alert-body-title">${title}</span>`

        let templateMessage = `<span class="alert-body-message">${message}</span>`

        let templateClose = `<span class='alert-close alert-close-style-${closeStyle}'>X</span>`

        let templateImage = `<img src=${img} class="alert-img" alt="">`


        let templateButtons = `<button class="alert-body-button ${type}-bg">${buttonOK}</button>`

        // Make sure it's a question type alert.
        if (type === 'question') {
            templateButtons = `
                <div class="buttons-question">
                    <button class="alert-body-button btn-confirm">${buttonConfirm}</button>
                    <button class="alert-body-button btn-cancel">${buttonCancel}</button>
                </div>
                `
        }

        // Make sure it's a opinion type alert.
        if (type === 'opinion') {
            templateButtons = `
                <div class="buttons-question">
                    <button class="alert-body-button btn-confirm">${buttonConfirm}</button>
                    <button class="alert-body-button ${type}-bg">${buttonOK}</button>
                    <button class="alert-body-button btn-cancel">${buttonCancel}</button>
                </div>
                `
        }

        //Custom button colors.
        if (type === 'custom') {
            templateButtons = `<button class="alert-body-button bg-global">${buttonOK}</button>`
        }

        let templateHeader = `
            <div class="alert-header ${type}-bg">
                ${templateClose}
                ${templateImage}
            </div>`

        //Custom header colors.
        if (type == 'custom') {
            templateHeader = `
                <div class="alert-header bg-global">
                    ${templateClose}
                    ${templateImage}
                </div>`

        }


        let templateBody = `
            <div class="alert-body">
                        ${templateTitle}
                        ${templateMessage}
                        ${templateButtons}
                    </div>`

        // Body model for Input exclusive use
        if (type === 'input') {
            templateBody = `
            <div class="alert-body">
                ${templateTitle}
                <input type="text" value="" class="alert-input" placeholder="${placeholderInput}" >
                ${templateButtons}
            </div>
            `
        }

        if (playSound !== null) {
            let sound = new Audio(playSound)
            sound.play()
        }

        let templateAlert = `
            <div class="alert-wallpaper">
                <div class="alert-frame">
                    ${templateHeader}
                    ${templateBody}
                </div>
            </div>
            `

        if (!header) {
            templateAlert = `
            <div class="alert-wallpaper">
                <div class="alert-frame">
                    ${templateBody}
                </div>
            </div>
            `
        }

        // Inject the alert into the "body".
        bodyEl.insertAdjacentHTML('beforeend', templateAlert)

        //////////////////////////////////////////////////////////////////////////

        // Variables to use user actions.
        const AlertWallpaper = document.querySelector('.alert-wallpaper')

        const AlertButtonOK = document.querySelector('.alert-body-button')


        // Actions to be performed.

        // I leave this action disabled as I expect the user to do one of the other actions, rather than simply ignoring it when clicking outside. But if you want to activate, just uncomment.
        /*     AlertWallpaper.addEventListener('click', () =>{
                AlertWallpaper.remove()
            }) */

        // Action that closes the alert on Close.
        if (header) {
            const AlertClose = document.querySelector('.alert-close')
            AlertClose.addEventListener('click', () => {
                resolve('Close')
                AlertWallpaper.remove()
            })
        }

        // Actions that will be used from the question alert.
        if (type === 'question') {
            const AlertButtonConfirm = document.querySelector('.btn-confirm')
            const AlertButtonCancel = document.querySelector('.btn-cancel')

            AlertButtonConfirm.addEventListener('click', () => {
                resolve('Confirm')
                AlertWallpaper.remove()
            })

            AlertButtonCancel.addEventListener('click', () => {
                resolve('Cancel')
                AlertWallpaper.remove()
            })
        }

        // Actions that will be used from the opinion alert.
        if (type === 'opinion') {
            const AlertButtonOpinion = document.querySelectorAll('.opinion-bg')
            const AlertButtonConfirm = document.querySelector('.btn-confirm')
            const AlertButtonCancel = document.querySelector('.btn-cancel')

            header ? AlertButtonOpinion[1].addEventListener('click', () => {
                resolve('OK')
                AlertWallpaper.remove()
            })
                :
                AlertButtonOpinion[0].addEventListener('click', () => {
                    resolve('OK')
                    AlertWallpaper.remove()
                })

            AlertButtonConfirm.addEventListener('click', () => {
                resolve('Confirm')
                AlertWallpaper.remove()
            })

            AlertButtonCancel.addEventListener('click', () => {
                resolve('Cancel')
                AlertWallpaper.remove()
            })
        }

        // Alert actions the user passes a value
        if (type === 'input') {
            AlertButtonOK.addEventListener('click', () => {
                const AlertInput = document.querySelector('.alert-input').value
                resolve(AlertInput)
                AlertWallpaper.remove()
            })
        }

        // Action that gives an OK to the button.
        AlertButtonOK.addEventListener('click', () => {
            resolve('OK')
            AlertWallpaper.remove()
        })

        // Background color application
        if (type === 'custom') {
            const ColorBGs = document.querySelectorAll('.bg-global')
            ColorBGs[0].style.backgroundColor = bgColor
            ColorBGs[1].style.backgroundColor = bgColor
        }

    })
}

const awesomeToast = ({
    type = 'success',
    title = 'Success',
    message = 'Success Action!',
    img = '',
    timer = 2000,
    bgColor = '#2dd284',
    position = 'right',
    playSound = null
}) => {
    return new Promise(resolve => {
        const bodyEl = document.querySelector('body')

        // Function that passes its own id to toast
        const id = () => {
            return '_' + Math.random().toString(36).substr(2, 9);
        }

        // Div mother of toasts.
        let templateMain = document.querySelector('.toast-main')

        if (!templateMain) {
            bodyEl.insertAdjacentHTML(
                'beforeend', `<div class="toast-main toast-${position}"></div>`
            )
            templateMain = document.querySelector('.toast-main')
        }

        // ID Toast
        const toastId = id()

        if (playSound !== null) {
            let sound = new Audio(playSound)
            sound.play()
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
        `

        // Customizable gift template
        if (type === 'custom') {
            templateToast = `
            <div class="toast-frame bg-global" id="${toastId}-toast-frame">
                <div class="toast-content">
                <span class="toast-title">${title}</span>
                <span class="toast-message">${message}</span>
                </div>
                <img src=${img} class="toast-img">
                <span class="toast-close" id="${toastId}-toast-close">X</span>
            </div>
            `
        }


        // All toasts
        const toasts = document.querySelectorAll('.toast-frame')

        if (toasts.length) {
            toasts[0].insertAdjacentHTML('beforebegin', templateToast);
        } else {
            templateMain.innerHTML = templateToast;
        }

        // Variable responsible for each gift.
        const ToastFrame = document.querySelector(`#${toastId}-toast-frame`)

        // Toast timer.
        setTimeout(() => {
            ToastFrame.remove()
            resolve('endtime')
        }, timer)

        // Close Toast.
        const ToastClose = document.querySelector(`#${toastId}-toast-close`)
        ToastClose.addEventListener('click', () => {
            ToastFrame.remove()
            resolve('close')
        })

        // Background color application
        if (type === 'custom') {
            const ColorBGs = document.querySelector('.bg-global')
            ColorBGs.style.backgroundColor = bgColor
        }
    })
}

const awesomeHorizontal = ({
    type = 'success',
    img = '',
    title = 'Success',
    message = 'Success Action!',
    buttonOK = 'OK!',
    bgColor = '#2dd284',
    header = true,
    playSound = null
}) => {
    return new Promise(resolve => {

        // Variable that takes the "body" element to inject the alert.
        const bodyEl = document.querySelector('body')

        let templateHeader = `
        <div class="horizontal-header ${type}-bg">
            <img src=${img} class="horizontal-img" alt="">
        </div>`

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
        `

        if (type === 'custom') {
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
        `
        }

        if (playSound !== null) {
            let sound = new Audio(playSound)
            sound.play()
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
            `
        }

        // Inject the alert into the "body".
        bodyEl.insertAdjacentHTML('beforeend', TemplateHorizontal)

        const AlertWallpaper = document.querySelector('.alert-wallpaper')


        const ButtomOKAlert = document.querySelector('.horizontal-body-button')
        ButtomOKAlert.addEventListener('click', () => {
            AlertWallpaper.remove()
            resolve('ok')
        })

        // Background color application
        if (type === 'custom') {
            const ColorBGs = document.querySelectorAll('.bg-global')
            ColorBGs[0].style.backgroundColor = bgColor
            ColorBGs[1].style.backgroundColor = bgColor
        }

    })
}