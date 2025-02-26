let n=null;async function s(){return n||(console.log("Creating new AI session"),n=await ai.languageModel.create({systemPrompt:"You are a helpful AI assistant."}),n)}chrome.sidePanel.setPanelBehavior({openPanelOnActionClick:!0});chrome.runtime.onInstalled.addListener(async()=>{chrome.contextMenus.create({id:"explainText",title:"Explain text",contexts:["selection"]}),chrome.contextMenus.create({id:"summarizeText",title:"Summarize text",contexts:["selection"]}),chrome.contextMenus.create({id:"translateSelection",title:"Translate selection",contexts:["selection"]}),chrome.contextMenus.create({id:"readText",title:"Read text aloud",contexts:["selection"]}),chrome.contextMenus.create({id:"crocWriter",title:"Croc Writer",contexts:["editable"]}),chrome.contextMenus.create({id:"transliterateSelection",title:"Transliterate selection",contexts:["selection"]});try{await s()}catch(e){console.error("Error initializing AI session:",e)}});chrome.contextMenus.onClicked.addListener(async(e,t)=>{if(console.log("Context menu clicked:",e.menuItemId),e.menuItemId==="explainText"&&e.selectionText)console.log("Selected text:",e.selectionText),await chrome.sidePanel.open({windowId:t.windowId}),setTimeout(()=>{chrome.runtime.sendMessage({type:"explain",text:e.selectionText})},500);else if(e.menuItemId==="summarizeText"&&e.selectionText)await chrome.sidePanel.open({windowId:t.windowId}),setTimeout(()=>{chrome.runtime.sendMessage({type:"summarize",text:e.selectionText})},500);else if(e.menuItemId==="translateSelection"&&e.selectionText){const{targetLanguage:r}=await chrome.storage.local.get("targetLanguage");chrome.tabs.sendMessage(t.id,{type:"translateSelection",text:e.selectionText,targetLanguage:r})}else if(e.menuItemId==="transliterateSelection"&&e.selectionText){console.log("reached transliterate selection here");const{transliterationTargetLanguage:r}=await chrome.storage.local.get("transliterationTargetLanguage");chrome.tabs.sendMessage(t.id,{type:"transliterateSelection",text:e.selectionText,transliterationTargetLanguage:r})}else if(e.menuItemId==="readText"&&e.selectionText&&(t!=null&&t.id))try{await chrome.scripting.executeScript({target:{tabId:t.id},func:()=>!0}),chrome.tabs.sendMessage(t.id,{type:"readAloud",text:e.selectionText})}catch(r){console.error("Error injecting content script:",r)}else if(e.menuItemId==="crocWriter"&&(t!=null&&t.id))try{await chrome.scripting.executeScript({target:{tabId:t.id},func:()=>!0}),await chrome.tabs.sendMessage(t.id,{type:"showWriter",x:e.x||0,y:e.y||0})}catch(r){console.error("Error showing writer:",r)}});chrome.runtime.onStartup.addListener(async()=>{try{await s(),console.log("ai session created")}catch(e){console.error("Error initializing AI session:",e)}});
