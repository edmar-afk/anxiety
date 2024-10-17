function BotPress() {	return (
	<>
		<iframe
			className="h-screen mt-8 pb-8"
			srcDoc="<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Talk with me, Im always here',
                  'botConversationDescription': 'This chatbot was built surprisingly fast with Botpress',
                  'botName': 'Anxiety Ally',
                  'botId': '4ace55c4-0288-43b9-8c4e-e3c801599a7e',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': '4ace55c4-0288-43b9-8c4e-e3c801599a7e',
                  'enableConversationDeletion': true,
                  'showPoweredBy': false,
                  'className': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                  'hideWidget': true,
                  'showCloseButton': true,
                  'disableAnimations': false,
                  'closeOnEscape': false,
                  'showConversationsButton': true,
                  'enableTranscriptDownload': false,
                  'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/8315adcf-40cb-42f5-aa58-1d3f73baea43/v23239/style.css'
                  
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>"
			width="100%"
			height="100%"></iframe>
	</>
);
}

export default BotPress;
