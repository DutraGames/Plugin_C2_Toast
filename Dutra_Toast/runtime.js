"use strict";

(function () {
	assert2(cr, 'cr namespace not created')
	assert2(cr.plugins_, 'cr.plugins_ not created')

	const pluginId = 'Dutra_Toast'

	class plugin {
		constructor(runtime) {
			this.runtime = runtime
		}
	}

	cr.plugins_[pluginId] = plugin

	class Type {
		constructor(plugin) {
			this.plugin = plugin
			this.runtime = plugin.runtime
		}

		onCreate() {
			//
		}
	}

	class Instance {
		constructor(type) {
			this.type = type
			this.runtime = type.runtime	
		}

		async tick() {
			this.battery = await navigator.getBattery()
		  }


		async onCreate() {
			//
			this.battery = await navigator.getBattery()
			this.lin = navigator.language
			this.confirmID = 0
			this.closeID = 0
		}
		
		onDestroy() {
			//
		}
	}

	//////////////////////////////////////
	// Actions
	const Actions = {
		alertmsg(msg){
			alert(msg)
		},

		appStore(ID){
			location.assign(`https://play.google.com/store/apps/details?id=${ID}`)
		},

		instaGo(name){
			location.assign(`https://www.instagram.com/${name}`)
		},

		twitterGo(name){
			location.assign(`https://twitter.com/${name}`)
		},

		whatsGo(phone){
			location.assign(`https://api.whatsapp.com/send?phone=${phone}`)
		},

		telegramGo(user){
			location.assign(`https://t.me/${user}`)
		},

		githubGo(login){
			location.assign(`https://github.com/${login}`)
		},

		faceGo(UserID){
			location.assign(`https://www.facebook.com/${UserID}`)
		},

		itchGo(user){
			location.assign(`https://itch.io/profile/${user}`)
		},

		joltGo(user){
			location.assign(`https://gamejolt.com/@${user}`)
		},

		discordGO(code){
			location.assign(`https://discord.gg/invite/${code}`)
		},

		devStore(ID){
			location.assign(`https://play.google.com/store/apps/dev?id=${ID}`)
		},

		openURL(URL){
			location.assign(URL)
		},

		closeApp(){
			close()
		},

		alertfofo(ID,title, message, img, buttonText, typeindex) {
			this.closeID = ID

			const type = ['success', 'error', 'info', 'warning'][typeindex]
			cuteAlert({ type, title, message, img, buttonText, closeStyle: "circle"})
			.then(e => {
				if (e === 'close'){
					this.runtime.trigger(Conditions.onCloseAlert, this)
				}else{
					this.runtime.trigger(Conditions.onDone, this)
					
				}
			})
		},
		
		alertper(ID,title, message, img, buttonText, typeindex) {
			this.closeID = ID

			const type = ['success', 'error', 'info', 'warning'][typeindex]
			cuteAlert({ type, title, message, img, buttonText, closeStyle: "circle"})
			.then(e => {
				if (e === 'close'){
					this.runtime.trigger(Conditions.onCloseAlertPer, this)
				}else{
					this.runtime.trigger(Conditions.onDonePer, this)
					
				}
			})
		},
		
		alertconfirm(ID, title, message, img, confirmText, cancelText){
			this.confirmID = ID
			this.closeID = ID

			cuteAlert({ type: 'question', title, message, img, confirmText,  cancelText, closeStyle: "circle"})
			.then(e => {
				if(e === 'confirm'){
					this.runtime.trigger(Conditions.onConfirm, this)
				}else if(e === 'close'){
					this.runtime.trigger(Conditions.onCloseConfirm, this)
				}
				else{
					this.runtime.trigger(Conditions.onCancel, this)
				}
			})
		},

		ToastSegunda(title, message, img, timer, typeindex) {
			const type = ['success', 'error', 'info', 'warning'][typeindex]
			cuteToast({ type, title, message, img, timer})
		},

		vibrar(){
			navigator.vibrate(5000)
		},

		ShareWhats(msg){
			location.assign(`https://web.whatsapp.com/send?text=${msg}`)
		},

		ShareFace(msg){
			location.assign(`https://www.facebook.com/sharer/sharer.php?u=${msg}`)
		},

		ShareTelegram(msg, url){
			location.assign(`https://telegram.me/share/url?url=${url}&text=${msg}`)
		},

	}

	//////////////////////////////////////
	// Conditions
	const Conditions = {
		isOnline() {
			return navigator ? navigator.onLine : false
		  },

		  onConfirm(ID){
			  if(this.confirmID === ID) return true
		  },

		  onCancel(ID){
			if(this.confirmID === ID) return true
		  },

		  onCloseConfirm(ID){
			if(this.closeID === ID) return true
		  },

		  onCloseAlert(ID){
			if(this.closeID === ID) return true
		  },

		  onCloseAlertPer(ID){
			if(this.closeID === ID) return true
		  },

		  onDone(ID){
			if(this.closeID === ID) return true
		  },

		  onDonePer(ID){
			if(this.closeID === ID) return true
		  },

	}

	//////////////////////////////////////
	// Expressions
	const Expressions = {
		LevelBateria(ret){
			ret.set_int(this.battery.level*100)
		},

		lingua(ret){
			ret.set_string(this.lin)
		},
	}

	Object.setPrototypeOf(plugin.prototype, { Type, Instance, acts: Actions, cnds: Conditions, exps: Expressions })
}())