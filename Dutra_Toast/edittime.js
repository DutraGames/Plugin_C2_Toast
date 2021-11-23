function GetPluginSettings() {
	return {
		'name':			'Toast',
		'id':			'Dutra_Toast',
		'version':		'0.1',
		'description':	'Faz aparecer Toasts, Alertas e Apresentações do Browser',
		'author':		'Gabriel Dutra',
		'help url':		'https://github.com/DutraGames',
		'category':		'Diálogos e Notificações',
		'type':			'object',
		'flags':		pf_singleglobal,
		'dependency': 'style.css;cute-alert.js'
	}
}



////////////////////////////////////////
// Actions

AddAnyTypeParam('Mensagem', 'Escreva alguma mensagem para alerta.', '""')
AddAction(0, af_none, 'Alerta', 'Notificações', 'Alerta <b>{0}</b>', 'Esta ação chamará um alerta', 'alertmsg')

AddStringParam('ID', 'Escreva o ID de seu app.', '""')
AddAction(1, af_none, 'Página APP', 'Navegação', 'App <b>{0}</b>', 'Abrirá a página de seu APP na google play', 'appStore')


AddStringParam('@', 'Escreva o seu nome', '""')
AddAction(2, af_none, 'Perfil Instagram', 'Social', 'Instagram de <b>{0}</b>', 'Irá para a página de seu perfil do instagram', 'instaGo')

AddStringParam('@', 'Escreva o seu nome', '""')
AddAction(3, af_none, 'Perfil Twitter', 'Social', 'Twitter de <b>{0}</b>', 'Irá para a página de seu perfil do Twitter', 'twitterGo')

AddStringParam('Telefone', 'Escreva o seu telefone', '"+00XXYYYYYYYYY"')
AddAction(4, af_none, 'Chat WhatsApp', 'Social', 'Chat whatsApp com <b>{0}</b>', 'Irá iniciar automáticamente uma conversa com o número informado', 'whatsGo')

AddStringParam('Nome de Usuário', 'Escreva o seu Nome de Usuário', '""')
AddAction(5, af_none, 'Chat Telegram', 'Social', 'Chat Telegram com <b>{0}</b>', 'Irá para uma pa´gina para iniciar uma conversa com o usuário informado', 'telegramGo')

AddStringParam('Login', 'Escreva o seu Login', '""')
AddAction(6, af_none, 'Perfil Github', 'Social', 'Github de <b>{0}</b>', 'Abrirá a página do perfil no github', 'githubGo')

AddStringParam('UserID', 'Escreva o seu Usuário', '""')
AddAction(7, af_none, 'Perfil Facebook', 'Social', 'Facebook de <b>{0}</b>', 'Abrirá a página do perfil no Facebook', 'faceGo')

AddStringParam('Usuário', 'Escreva o seu Usuário', '""')
AddAction(8, af_none, 'Perfil itch.io', 'Social', 'itch.io de <b>{0}</b>', 'Abrirá a página do perfil no itch.io', 'itchGo')

AddStringParam('@', 'Escreva o seu Usuário', '""')
AddAction(9, af_none, 'Perfil Game Jolt', 'Social', 'Game Jolt de <b>{0}</b>', 'Abrirá a página do perfil no Game Jolt', 'joltGo')

AddStringParam('Código de Convite', 'Escreva o seu Código de Convite', '""')
AddAction(10, af_none, 'Servidor Discord', 'Social', 'Servidor <b>{0}</b>', 'Abrirá a página de convite de servidor', 'discordGO')

AddStringParam('ID', 'Escreva o ID de seu app.', '"8839749224794353014"')
AddAction(11, af_none, 'Página Dev', 'Navegação', 'Desenvolvedor <b>{0}</b>', 'Abrirá a página de desenvolvedor na google play', 'devStore')

AddStringParam('URL', 'Escreva a URL desejada.', '"https://google.com"')
AddAction(12, af_none, 'URL', 'Navegação', 'URL <b>{0}</b>', 'Abrirá a página da URL informada', 'openURL')

AddAction(13, af_none, 'Fechar', 'Device', 'Fechar Aplicação', 'Fechará a aplicação', 'closeApp')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddStringParam('Título', 'Escreva o Título.', '"Título"')
AddStringParam('Mensagem', 'Escreva uma Mensagem.', '"Mensagem"')
AddStringParam('Imagem', 'Escreva o nome da imagem.', '""')
AddStringParam('Botão', 'Escreva o texto do botão.', '"OK"')
AddComboParamOption('Sucesso')
AddComboParamOption('Erro')
AddComboParamOption('Info')
AddComboParamOption('Aviso')
AddComboParam('Tipo', 'Tipo do alerta', 0)
AddAction(14, af_none, 'Alerta Bonito', 'Notificações', 'Alerta Bonito do ID <b>{0}</b>', 'Esta ação mostrará um alerta mais bonito', 'alertfofo')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddStringParam('Título', 'Escreva o Título.', '"Título"')
AddStringParam('Mensagem', 'Escreva uma Mensagem.', '"Mensagem"')
AddStringParam('Imagem', 'Escreva o nome da imagem.', '""')
AddStringParam('Botão', 'Escreva o texto do botão.', '"OK"')
AddNumberParam('Tipo', '0 = Sucesso  2 = Info \n 1 = Erro  3 = Aviso')
AddAction(15, af_none, 'Alerta Personalizado', 'Notificações', 'Alerta Personalizado do ID <b>{0}</b>', 'Esta ação mostrará um alerta Personalizado', 'alertper')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddStringParam('Título', 'Escreva o Título.', '"Título"')
AddStringParam('Mensagem', 'Escreva uma Mensagem.', '"Mensagem"')
AddStringParam('Imagem', 'Escreva o nome da imagem.', '""')
AddStringParam('Botão Confirmar', 'Escreva o texto do botão.', '"Confirmar"')
AddStringParam('Botão Cancelar', 'Escreva o texto do botão.', '"Cancelar"')
AddAction(16, af_none, 'Alerta de Confirmação', 'Notificações', 'Alerta de Confirmação de ID: <b>{0}</b>', 'Esta ação mostrará um alerta de confirmação', 'alertconfirm')

AddStringParam('Título', 'Escreva o Título.', '"Título"')
AddAnyTypeParam('Mensagem', 'Escreva alguma mensagem para Mostrar.', '"Mensagem"')
AddStringParam('Imagem', 'Escreva o nome da imagem.', '""')
AddNumberParam('Tempo (ms)', 'Escreva o tempo da notificação', '1000')
AddComboParamOption('Sucesso')
AddComboParamOption('Erro')
AddComboParamOption('Info')
AddComboParamOption('Aviso')
AddComboParam('Tipo', 'Tipo da Notificação', 0)
AddAction(17, af_none, 'Toast', 'Notificações', '<b>{2}</b>! Mensagem: <b>{1}</b>', 'Esta ação mostrará uma notificação Simples.', 'ToastSegunda')

AddNumberParam('Tempo (ms)', 'Escreva o tempo da Vibração', '1000')
AddAction(18, af_none, 'Vibrar', 'Device', 'Vibrar <b>{0}</b> ms', 'Vibrará o aparelho', 'vibrar')

AddAnyTypeParam('Mensagem', 'Escreva a mensagem que deseja enviar', '""')
AddAction(19, af_none, 'WhatsApp', 'Compartilhamento', 'Compartilhar <b>{0}</b>', 'Compartilhará pelo WhatsApp', 'ShareWhats')

AddAnyTypeParam('URL', 'Escreva a URL que deseja enviar', '""')
AddAction(20, af_none, 'Facebook', 'Compartilhamento', 'Compartilhar <b>{0}</b>', 'Compartilhará pelo Facebook', 'ShareFace')

AddAnyTypeParam('Mensagem', 'Escreva a Mensagem que deseja enviar', '""')
AddAnyTypeParam('URL', 'Escreva a URL que deseja enviar', '""')
AddAction(21, af_none, 'Telegram', 'Compartilhamento', 'Compartilhar <b>{0}</b>', 'Compartilhará pelo Telegram', 'ShareTelegram')


////////////////////////////////////////
// Conditions

AddCondition(0, cf_none, 'Online', 'web', 'Está Online' ,'Verifica se está online', 'isOnline')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddCondition(1, cf_trigger, 'Ao Confirmar', 'Notificações', 'Ao Confirmar o ID <b>{0}</b>', 'Está condição verifica se se apertou o confirmar.', 'onConfirm')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddCondition(2, cf_trigger, 'Ao Cancelar', 'Notificações', 'Ao Cancelar o ID <b>{0}</b>', 'Está condição verifica se se apertou o Cancelar.', 'onCancel')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddCondition(3, cf_trigger, 'Ao Fechar Confirmação', 'Notificações', 'Ao Fechar o ID <b>{0}</b> de Confirmação', 'Está condição verifica se se apertou o X da Confirmação.', 'onCloseConfirm')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddCondition(4, cf_trigger, 'Ao Fechar Alerta Bonito', 'Notificações', 'Ao Fechar o ID <b>{0}</b> Bonito', 'Está condição verifica se se apertou o X dos alertas Bonitos.', 'onCloseAlert')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddCondition(5, cf_trigger, 'Ao  dar OK em Bonito', 'Notificações', 'Ao Dar OK no ID <b>{0}</b>', 'Está condição verifica se se apertou o OK do Alerta Bonito.', 'onDone')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddCondition(6, cf_trigger, 'Ao Fechar Alerta Personalizado', 'Notificações', 'Ao Fechar o ID <b>{0}</b> Personalizado', 'Está condição verifica se se apertou o X dos alertas Personalizados.', 'onCloseAlertPer')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddCondition(7, cf_trigger, 'Ao  dar OK em Personalizado', 'Notificações', 'Ao Dar OK no ID <b>{0}</b>', 'Está condição verifica se se apertou o OK do Alerta Personalizado.', 'onDonePer')



////////////////////////////////////////
// Expressions

AddExpression(0, ef_return_number, '{0}', 'Bateria', 'LevelBateria', 'Retorna a % de sua bateria.')
AddExpression(1, ef_return_string, '{0}', 'lingua', 'lingua', 'Retorna o idioma da pessoa.')



////////////////////////////////////////
ACESDone()

const property_list = []

function CreateIDEObjectType() {
	return new IDEObjectType()
}

function IDEObjectType() {
	assert2(this instanceof arguments.callee, 'Constructor called as a function')
	
	return {
		CreateInstance: function(instance)
		{
			return new IDEInstance(instance)
		}
	}
}

function IDEInstance(instance, type) {
	assert2(this instanceof arguments.callee, 'Constructor called as a function')

	this.instance = instance
	this.type = type
	this.properties = {}

	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value
}

IDEInstance.prototype = {
	OnCreate: function () {
		//
	}
}