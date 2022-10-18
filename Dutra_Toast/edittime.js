function GetPluginSettings() {
	return {
		'name':			'Toast',
		'id':			'Dutra_Toast',
		'version':		'0.2.0',
		'description':	'Faz aparecer Toasts, Alertas e Apresentações do Browser',
		'author':		'Gabriel Dutra',
		'help url':		'https://github.com/DutraGames/Plugin_C2_Toast',
		'category':		'Diálogos e Notificações',
		'type':			'object',
		'flags':		pf_singleglobal,
		'dependency': 'style.css;awesomeAlert.js'
	}
}



////////////////////////////////////////
// Actions

AddAnyTypeParam('Mensagem', 'Escreva alguma mensagem para alerta.', '""')
AddAction(0, af_none, 'Alerta', 'Notificações', 'Alerta <b>{0}</b>', 'Esta ação chamará um alerta', 'alertmsg')

AddStringParam('ID', 'Escreva o ID de seu app.', '""')
AddComboParamOption('Nova Guia')
AddComboParamOption('Nesta Guia')
AddComboParam('Tipo', 'Tipo abertura da Página', 0)
AddAction(1, af_none, 'Página APP', 'Navegação', 'App <b>{0}</b>', 'Abrirá a página de seu APP na google play', 'appStore')


AddStringParam('@', 'Escreva o seu nome', '""')
AddComboParamOption('Nova Guia')
AddComboParamOption('Nesta Guia')
AddComboParam('Tipo', 'Tipo abertura do Instagram', 0)
AddAction(2, af_none, 'Perfil Instagram', 'Social', 'Instagram de <b>{0}</b>', 'Irá para a página de seu perfil do instagram', 'instaGo')

AddStringParam('@', 'Escreva o seu nome', '""')
AddComboParamOption('Nova Guia')
AddComboParamOption('Nesta Guia')
AddComboParam('Tipo', 'Tipo abertura do Twitter', 0)
AddAction(3, af_none, 'Perfil Twitter', 'Social', 'Twitter de <b>{0}</b>', 'Irá para a página de seu perfil do Twitter', 'twitterGo')

AddStringParam('Telefone', 'Escreva o seu telefone', '"+00XXYYYYYYYYY"')
AddComboParamOption('Nova Guia')
AddComboParamOption('Nesta Guia')
AddComboParam('Tipo', 'Tipo abertura do Chat do WhatsApp', 0)
AddAction(4, af_none, 'Chat WhatsApp', 'Social', 'Chat whatsApp com <b>{0}</b>', 'Irá iniciar automáticamente uma conversa com o número informado', 'whatsGo')

AddStringParam('Nome de Usuário', 'Escreva o seu Nome de Usuário', '""')
AddComboParamOption('Nova Guia')
AddComboParamOption('Nesta Guia')
AddComboParam('Tipo', 'Tipo abertura do Chat Telegram', 0)
AddAction(5, af_none, 'Chat Telegram', 'Social', 'Chat Telegram com <b>{0}</b>', 'Irá para uma pa´gina para iniciar uma conversa com o usuário informado', 'telegramGo')

AddStringParam('Login', 'Escreva o seu Login', '""')
AddComboParamOption('Nova Guia')
AddComboParamOption('Nesta Guia')
AddComboParam('Tipo', 'Tipo abertura do Github', 0)
AddAction(6, af_none, 'Perfil Github', 'Social', 'Github de <b>{0}</b>', 'Abrirá a página do perfil no github', 'githubGo')

AddStringParam('UserID', 'Escreva o seu Usuário', '""')
AddComboParamOption('Nova Guia')
AddComboParamOption('Nesta Guia')
AddComboParam('Tipo', 'Tipo abertura do Facebook', 0)
AddAction(7, af_none, 'Perfil Facebook', 'Social', 'Facebook de <b>{0}</b>', 'Abrirá a página do perfil no Facebook', 'faceGo')

AddStringParam('Usuário', 'Escreva o seu Usuário', '""')
AddComboParamOption('Nova Guia')
AddComboParamOption('Nesta Guia')
AddComboParam('Tipo', 'Tipo abertura do Itch.io', 0)
AddAction(8, af_none, 'Perfil itch.io', 'Social', 'itch.io de <b>{0}</b>', 'Abrirá a página do perfil no itch.io', 'itchGo')

AddStringParam('@', 'Escreva o seu Usuário', '""')
AddComboParamOption('Nova Guia')
AddComboParamOption('Nesta Guia')
AddComboParam('Tipo', 'Tipo abertura do Game Jolt', 0)
AddAction(9, af_none, 'Perfil Game Jolt', 'Social', 'Game Jolt de <b>{0}</b>', 'Abrirá a página do perfil no Game Jolt', 'joltGo')

AddStringParam('Código de Convite', 'Escreva o seu Código de Convite', '""')
AddComboParamOption('Nova Guia')
AddComboParamOption('Nesta Guia')
AddComboParam('Tipo', 'Tipo abertura do Link de convite do Discord', 0)
AddAction(10, af_none, 'Servidor Discord', 'Social', 'Servidor <b>{0}</b>', 'Abrirá a página de convite de servidor', 'discordGO')

AddStringParam('ID', 'Escreva o ID de seu app.', '""')
AddComboParamOption('Nova Guia')
AddComboParamOption('Nesta Guia')
AddComboParam('Tipo', 'Tipo abertura da Página de desenvolvedor Play Store', 0)
AddAction(11, af_none, 'Página Dev', 'Navegação', 'Desenvolvedor <b>{0}</b>', 'Abrirá a página de desenvolvedor na google play', 'devStore')

AddStringParam('URL', 'Escreva a URL desejada.', '""')
AddComboParamOption('Nova Guia')
AddComboParamOption('Nesta Guia')
AddComboParam('Tipo', 'Tipo abertura da URL', 0)
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
AddComboParamOption('Escuro')
AddComboParamOption('Customizado')
AddComboParam('Tipo', 'Tipo do alerta', 0)
AddComboParamOption('Normal')
AddComboParamOption('Circular')
AddComboParam('X', 'Tipo do X', 0)
AddComboParamOption('Sem Header')
AddComboParamOption('Com Header')
AddComboParam('Header', 'Tipo do Header', 0)
AddStringParam('BG Color', 'Escreva a cor personalizada. (Só é ativado no customizado).', '"#2dd284"')
AddAction(14, af_none, 'Alerta incrível', 'Notificações', 'Alerta incrível do ID <b>{0}</b>', 'Esta ação mostrará um alerta mais incrível', 'alertfofo')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddStringParam('Título', 'Escreva o Título.', '"Título"')
AddStringParam('Mensagem', 'Escreva uma Mensagem.', '"Mensagem"')
AddStringParam('Imagem', 'Escreva o nome da imagem.', '""')
AddStringParam('Botão Confirmar', 'Escreva o texto do botão.', '"Confirmar"')
AddStringParam('Botão Cancelar', 'Escreva o texto do botão.', '"Cancelar"')
AddComboParamOption('Normal')
AddComboParamOption('Circular')
AddComboParam('X', 'Tipo do X', 0)
AddComboParamOption('Sem Header')
AddComboParamOption('Com Header')
AddComboParam('Header', 'Tipo do Header', 0)
AddAction(16, af_none, 'Alerta de Confirmação', 'Notificações', 'Alerta de Confirmação de ID: <b>{0}</b>', 'Esta ação mostrará um alerta de confirmação', 'alertconfirm')

AddStringParam('Título', 'Escreva o Título.', '"Título"')
AddAnyTypeParam('Mensagem', 'Escreva alguma mensagem para Mostrar.', '"Mensagem"')
AddStringParam('Imagem', 'Escreva o nome da imagem.', '""')
AddNumberParam('Tempo (ms)', 'Escreva o tempo da notificação', '1000')
AddComboParamOption('Sucesso')
AddComboParamOption('Erro')
AddComboParamOption('Info')
AddComboParamOption('Aviso')
AddComboParamOption('Escuro')
AddComboParamOption('Customizado')
AddComboParam('Tipo', 'Tipo da Notificação', 0)
AddComboParamOption('Esquerda')
AddComboParamOption('Direita')
AddComboParam('Posição', 'Posição da Notificação', 0)
AddStringParam('BG Color', 'Escreva a cor personalizada. (Só é ativado no customizado).', '"#2dd284"')
AddAction(17, af_none, 'Toast', 'Notificações', '<b>{2}</b>! Mensagem: <b>{1}</b>', 'Esta ação mostrará uma notificação Simples.', 'ToastNormal')

AddNumberParam('Tempo (ms)', 'Escreva o tempo da Vibração', '1000')
AddAction(18, af_none, 'Vibrar', 'Device', 'Vibrar <b>{0}</b> ms', 'Vibrará o aparelho', 'vibrar')

AddAnyTypeParam('Mensagem', 'Escreva a mensagem que deseja enviar', '""')
AddAction(19, af_none, 'WhatsApp', 'Compartilhamento', 'Compartilhar <b>{0}</b>', 'Compartilhará pelo WhatsApp', 'ShareWhats')

AddAnyTypeParam('URL', 'Escreva a URL que deseja enviar', '""')
AddAction(20, af_none, 'Facebook', 'Compartilhamento', 'Compartilhar <b>{0}</b>', 'Compartilhará pelo Facebook', 'ShareFace')

AddAnyTypeParam('Mensagem', 'Escreva a Mensagem que deseja enviar', '""')
AddAnyTypeParam('URL', 'Escreva a URL que deseja enviar', '""')
AddAction(21, af_none, 'Telegram', 'Compartilhamento', 'Compartilhar <b>{0}</b>', 'Compartilhará pelo Telegram', 'ShareTelegram')

AddAnyTypeParam('Mensagem', 'Escreva a Mensagem que deseja enviar', '""')
AddAnyTypeParam('URL', 'Escreva a URL que deseja enviar', '""')
AddAction(22, af_none, 'Twitter', 'Compartilhamento', 'Compartilhar <b>{0}</b>', 'Compartilhará pelo Twitter', 'ShareTwitter')

AddAnyTypeParam('Mensagem', 'Escreva a Mensagem que deseja enviar', '""')
AddAnyTypeParam('URL', 'Escreva a URL que deseja enviar', '""')
AddAnyTypeParam('Imagem', 'Escreva a URL da imagem', '""')
AddAction(23, af_none, 'Pinterest', 'Compartilhamento', 'Compartilhar <b>{0}</b>', 'Compartilhará pelo Pinterest', 'SharePinter')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddStringParam('Mensagem', 'Escreva a mensagem.', '"Mensagem"')
AddStringParam('Botão', 'Escreva o texto do botão.', '"OK"')
AddStringParam('Imagem', 'Escreva o nome da imagem.', '""')
AddComboParamOption('Normal')
AddComboParamOption('Circular')
AddComboParam('X', 'Tipo do X', 0)
AddComboParamOption('Sem Header')
AddComboParamOption('Com Header')
AddComboParam('Header', 'Tipo do Header', 0)
AddStringParam('Placeholder', 'Escreva o que terá no placeholder.', '"Digite seu Nome"')
AddAction(24, af_none, 'Alerta Input', 'Notificações', 'Alerta Input do ID <b>{0}</b>', 'Esta ação mostrará um alerta Input', 'alertnput')


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
AddCondition(11, cf_trigger, 'Ao  dar OK em Input', 'Notificações', 'Ao Dar OK no ID <b>{0}</b>', 'Está condição verifica se se apertou o OK do Alerta Input.', 'onDoneInput')

AddStringParam('ID', 'Escreva o ID.', '"1"')
AddCondition(12, cf_trigger, 'Ao Fechar Alerta Input', 'Notificações', 'Ao Fechar o ID <b>{0}</b> do alerta Input', 'Está condição verifica se se apertou o X do alerta personalizado de confirmação.', 'onCloseInput')


////////////////////////////////////////
// Expressions

AddExpression(0, ef_return_number, '{0}', 'Bateria', 'LevelBateria', 'Retorna a % de sua bateria.')

AddExpression(1, ef_return_string, '{0}', 'Lingua', 'Lingua', 'Retorna o idioma da pessoa.')

AddExpression(2, ef_return_string, '{0}', 'Texto', 'Texto', 'Retorna o texto digitado no Input.')

AddExpression(3, ef_return_any, '{0}', 'Dia', 'Dia', 'Retorna o dia de hoje.')

AddExpression(4, ef_return_any, '{0}', 'Ano', 'Ano', 'Retorna o ano atual.')

AddExpression(5, ef_return_any, '{0}', 'Minutos', 'Minutos', 'Retorna o ano atual.')

AddExpression(6, ef_return_any, '{0}', 'Mes', 'Mes', 'Retorna o mês atual.')

AddExpression(7, ef_return_any, '{0}', 'Segundos', 'Segundos', 'Retorna o segundo atual.')

AddExpression(8, ef_return_any, '{0}', 'Hora', 'Hora', 'Retorna a hora atual.')

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