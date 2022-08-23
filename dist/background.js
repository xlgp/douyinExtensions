(function () {
	'use strict';

	chrome.action.onClicked.addListener(e=>{e.id&&chrome.tabs.sendMessage(e.id,{key:"create",value:""});});chrome.runtime.onMessage.addListener((e,n,d)=>{console.log(e),d(e);});

})();
