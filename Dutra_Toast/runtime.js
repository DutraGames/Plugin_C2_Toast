﻿"use strict";

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

		appStore(ID, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://play.google.com/store/apps/details?id=${ID}`, open)
		},

		instaGo(name, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://www.instagram.com/${name}`, open)
		},

		twitterGo(name, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://twitter.com/${name}`, open)
		},
		twitterGo(name, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://twitter.com/${name}`, open)
		},
		twitterGo(name, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://twitter.com/${name}`, open)
		},

		twitterGo(name, type){	
			const open = ['_blank', '_self'][type]
			window.open(`https://twitter.com/${name}`, open)
		},
		
		whatsGo(phone, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://api.whatsapp.com/send?phone=${phone}`, open)
		},
		
		telegramGo(user, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://t.me/${user}`, open)
		},
		
		githubGo(login, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://github.com/${login}`, open)
		},
		
		faceGo(UserID, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://www.facebook.com/${UserID}`, open)
		},
		
		itchGo(user, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://itch.io/profile/${user}`, open)
		},
		
		joltGo(user, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://gamejolt.com/@${user}`, open)
		},
		
		discordGO(code, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://discord.gg/invite/${code}`, open)
		},
		
		devStore(ID, type){
			const open = ['_blank', '_self'][type]
			window.open(`https://play.google.com/store/apps/dev?id=${ID}`, open)
		},

		openURL(URL, type){
			const open = ['_blank', '_self'][type]
			window.open(URL, open)
		},

		closeApp(){
			close()
		},

		alertfofo(ID,title, message, img, buttonText, typeindex, closeindex, headerindex) {
			this.closeID = ID
			const type = ['success', 'error', 'info', 'warning', 'dark'][typeindex]
			const closeStyle = ['default', 'circle', ''][closeindex]
			const header = ['default', '', 'hidden'][headerindex]
			cuteAlert({ type, title, message, img, buttonText, closeStyle, header})
			.then(e => {
				if (e === 'close'){
					this.runtime.trigger(Conditions.onCloseAlert, this)
				}else{
					this.runtime.trigger(Conditions.onDone, this)
				}
			})
		},
		
		alertper(ID,title, message, img, buttonText, confirmText, cancelText, typeindex, closeindex, headerindex) {
			this.closeID = ID
			const closeStyle = ['default', 'circle', ''][closeindex]
			const header = ['default', '', 'hidden'][headerindex]
			const type = ['success', 'error', 'info', 'warning', 'dark', 'question'][typeindex]
			if(type !== 'question'){
				cuteAlert({ type, title, message, img, buttonText, closeStyle, header})
				.then(e => {
					if (e === 'close'){
						this.runtime.trigger(Conditions.onCloseAlertPer, this)
					}else{
						this.runtime.trigger(Conditions.onDonePer, this)
					}
				})
			}else{
				cuteAlert({ type, title, message, img, confirmText, cancelText, closeStyle, header})
				.then(e => {
					if(e === 'confirm'){
						this.runtime.trigger(Conditions.onConfirmPer, this)
					}else if(e === 'close'){
						this.runtime.trigger(Conditions.onCloseConfirmPer, this)
					}
					else{
						this.runtime.trigger(Conditions.onCancelPer, this)
					}
				})
			}
		},
		
		alertconfirm(ID, title, message, img, confirmText, cancelText, closeindex, headerindex){
			this.confirmID = ID
			this.closeID = ID
			const closeStyle = ['default', 'circle', ''][closeindex]
			const header = ['default', '', 'hidden'][headerindex]
			cuteAlert({ type: 'question', title, message, img, confirmText, cancelText, closeStyle, header})
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
			const type = ['success', 'error', 'info', 'warning', 'dark'][typeindex]
			cuteToast({ type, title, message, img, timer})
		},

		vibrar(){
			navigator.vibrate(5000)
		},

		ShareWhats(msg){
			window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank')
		},
		
		ShareFace(msg){
			window.open(`https://www.facebook.com/sharer/sharer.php?u=${msg}`, '_blank')
		},
		
		ShareTelegram(msg, url){
			window.open(`https://telegram.me/share/url?url=${url}&text=${msg}`, '_blank')
		},
		
		ShareTwitter(msg, url){
			window.open(`https://twitter.com/intent/tweet?url=${url}&text=${msg}`, '_blank')
		},

		SharePinter(msg, url, img){
			window.open(`https://pinterest.com/pin/create/button/?url=${url}&media=${img}&description=${msg}`, '_blank')
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

		  onConfirmPer(ID){
			if(this.confirmID === ID) return true
		},

		onCancelPer(ID){
		  if(this.confirmID === ID) return true
		},

		onCloseConfirmPer(ID){
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