function T(e){const o=document.querySelector(".croc-audio-controls");o&&o.remove();const t=document.createElement("div");t.className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-lg p-4 text-gray-100",t.style.cssText=`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgb(31 41 55);
      border-top: 1px solid rgb(55 65 81);
      padding: 1rem;
      color: rgb(243 244 246);
      box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1);
      z-index: 10000;
    `;const n=document.createElement("div");n.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    `;const r=new SpeechSynthesisUtterance(e);r.rate=1;let i=!0;speechSynthesis.speak(r);const c=document.createElement("button");c.style.cssText=`
      padding: 0.5rem;
      border-radius: 9999px;
      background: transparent;
      border: none;
      color: rgb(243 244 246);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    `,c.innerHTML=`
    <svg style="width: 24px; height: 24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `;const a=document.createElement("div");a.style.cssText=`
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,[.5,.75,1,1.25,1.5].forEach(d=>{const s=document.createElement("button");s.textContent=`${d}x`,s.style.cssText=`
        padding: 0.25rem 0.5rem;
        border-radius: 0.375rem;
        background: ${d===1?"rgb(37 99 235)":"transparent"};
        border: none;
        color: rgb(243 244 246);
        cursor: pointer;
        transition: background-color 0.2s;
      `,s.addEventListener("mouseover",()=>{r.rate!==d&&(s.style.background="rgb(55 65 81)")}),s.addEventListener("mouseout",()=>{r.rate!==d&&(s.style.background="transparent")}),s.onclick=()=>{r.rate=d,a.querySelectorAll("button").forEach(u=>{u.style.background="transparent"}),s.style.background="rgb(37 99 235)",i&&(speechSynthesis.cancel(),speechSynthesis.speak(r))},a.appendChild(s)});const l=document.createElement("button");l.style.cssText=`
      padding: 0.5rem;
      border-radius: 9999px;
      background: transparent;
      border: none;
      color: rgb(243 244 246);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    `,l.innerHTML=`
    <svg style="width: 24px; height: 24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  `,c.onclick=()=>{i?(speechSynthesis.pause(),c.innerHTML=`
        <svg style="width: 24px; height: 24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `):(speechSynthesis.paused?speechSynthesis.resume():speechSynthesis.speak(r),c.innerHTML=`
        <svg style="width: 24px; height: 24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `),i=!i},l.onclick=()=>{speechSynthesis.cancel(),t.remove()},r.onend=()=>{i=!1,c.innerHTML=`
          <svg style="width: 24px; height: 24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        `},n.appendChild(c),n.appendChild(a),n.appendChild(l),t.appendChild(n),document.body.appendChild(t)}function q(){console.log("TTS initialized"),chrome.runtime.onMessage.addListener(e=>{e.type==="readAloud"&&e.text&&(console.log("Creating audio controls for:",e.text),T(e.text))})}const k={"medium.com":"article","nytimes.com":'article[data-testid="block-stream"]',"theguardian.com":"article","hindustantimes.com":"p","timesofindia.indiatimes.com":'div[data-articlebody="1"].js_tbl_article',"hashnode.dev":'div[class*="prose"]'};console.log("Content script loaded for:",window.location.href);const B=(e,o=5e3)=>new Promise(t=>{if(document.querySelector(e))return t(document.querySelector(e));const n=new MutationObserver(()=>{document.querySelector(e)&&(n.disconnect(),t(document.querySelector(e)))});n.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{n.disconnect(),t(document.querySelector(e))},o)}),S=e=>{for(const[o,t]of Object.entries(k))if(e.includes(o))return t;return"article"},j=()=>{var r;const e=window.location.hostname;if(e.includes("hindustantimes.com")){console.log("hindustan times detected");const i=Array.from(document.querySelectorAll("p")).map(c=>{var a;return(a=c.textContent)==null?void 0:a.trim()}).join(`
`);return console.log("paragraphs are"),console.log(i),i}if(e.includes("hashnode.dev")){const i=document.querySelector('div[class*="prose"]');return i?Array.from(i.querySelectorAll("p, h1, h2, h3, h4, h5, h6")).filter(a=>!a.closest("pre")).map(a=>{var l;return(l=a.textContent)==null?void 0:l.trim()}).filter(a=>a).join(`
`):""}const o=S(e);console.log("selector for this site is: ",o);const t=document.querySelector(o);return console.log("article is: ",t),t?e.includes("timesofindia.indiatimes.com")?((r=t.textContent)==null?void 0:r.trim())||"":Array.from(t.querySelectorAll("p")).map(i=>{var c;return(c=i.textContent)==null?void 0:c.trim()}).filter(i=>i).join(`
`):""},x=()=>{const e=document.createElement("style");e.textContent=`

      .croc-button-container {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 9999;
      }
      
      .croc-button {
        background-color: #3b82f6;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
        border: none;
      }
      
      .croc-button:hover {
        background-color: #2563eb;
      }
      
      .croc-button:disabled {
        background-color: #9ca3af;
        cursor: not-allowed;
      }
      
      .croc-summary-container {
        background-color: #f3f4f6;
        padding: 1rem;
        border-radius: 0.25rem;
        margin: 1rem 0;
        color: #000000 !important; /* Force black text */
      }

      .croc-summary-text {
        font-size: 18px;
        line-height: 1.5;
        color: #000000 !important; /* Force black text */
      }
      
      .croc-summary-title {
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #000000 !important; /* Force black text */
      }
      
      .croc-summary-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .croc-speaker-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .croc-speaker-button:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .croc-audio-controls {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        border-top: 1px solid #ddd;
        padding: 1rem;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .croc-speed-controls {
        display: flex;
        gap: 8px;
      }

      .croc-speed-button {
        padding: 4px 8px;
        border-radius: 4px;
        border: 1px solid #ddd;
        cursor: pointer;
      }

      .croc-speed-button.active {
        background-color: #3b82f6;
        color: white;
        border-color: #3b82f6;
      }

      .croc-audio-controls button {
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
    `,document.head.appendChild(e)},y=async()=>{console.log("Hostname:",window.location.hostname);const e=S(window.location.hostname);console.log("Using selector:",e);const o=await B(e);if(console.log("Found article:",o),!o){console.log("Article element not found after waiting");return}const t=document.createElement("div"),n=document.createElement("button");n.textContent="Summarize Article",t.appendChild(n),document.body.appendChild(t),t.className="croc-button-container",n.className="croc-button";const r=i=>i.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/^\* (.*)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>)\n/g,"<ul>$1</ul>");n.addEventListener("click",async()=>{var i;try{n.disabled=!0,n.textContent="Summarizing...";const c=j();console.log("here is the text"),console.log(c);const a=await ai.summarizer.create(),l=await a.summarize(c);a.destroy();const d=document.createElement("div");d.className="croc-summary-container";const s=document.createElement("div");s.className="croc-summary-header";const u=document.createElement("h2");u.className="croc-summary-title",u.textContent="Summary";const p=document.createElement("button");p.className="croc-speaker-button",p.innerHTML=`
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
      `,p.setAttribute("aria-label","Read summary aloud"),s.appendChild(u),s.appendChild(p);const m=document.createElement("div");m.innerHTML=r(l),m.className="croc-summary-text",d.appendChild(s),d.appendChild(m),p.addEventListener("click",()=>{const h=m.textContent||"";if(!h.trim()){console.error("No text to speak");return}T(h)});const g=document.querySelector("h1");g?(i=g.parentNode)==null||i.insertBefore(d,g.nextSibling):document.body.appendChild(d),n.disabled=!1,n.textContent="Summarize Article"}catch(c){console.error("Summarization failed:",c),n.textContent="Error - Try Again",n.disabled=!1}})},P=()=>{const e=window.location.hostname;if(!Object.keys(k).some(t=>e.includes(t))){console.log("won't summarize ",e);return}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{console.log("content has been loaded completely"),x(),y()}):(x(),y())};async function E(e,o,t=.4){try{if(await translation.canDetect()==="no")throw console.log("language detection not available"),new Error("Language detection not available");const i=await(await translation.createDetector()).detect(e),c=i[0].detectedLanguage;console.log(c);const a=i[0].confidence;if(console.log(a),c===o||a<t)return{originalText:e,translatedText:e,sourceLanguage:c||"unknown",confidence:a};const l=await translation.canTranslate({sourceLanguage:c,targetLanguage:o});if(console.log(await l),l==="no")throw new Error("Translation not available for this language pair");console.log("it can indeed translate");const d=await translation.createTranslator({sourceLanguage:c,targetLanguage:o});console.log("translator console"),console.log(d);const s=await d.translate(e);return console.log("translated text is: "),console.log(s),{originalText:e,translatedText:s,sourceLanguage:c,confidence:a}}catch(n){throw console.error("Translation error:",n),n}}const O=new WeakMap,f=new WeakSet;async function R(e,o){var t,n;try{if(f.has(e)||!((t=e.textContent)!=null&&t.trim())||e.tagName==="SCRIPT"||e.tagName==="STYLE"||e.closest(".croc-translated"))return;const r=e.innerHTML;O.set(e,r);const c=await(async a=>{const l=a.split(/(<[^>]*>)/);return(await Promise.all(l.map(async s=>{if(s.startsWith("<"))return s;if(s.trim()){const u=await E(s,o);return u.sourceLanguage!==o&&u.confidence>=.4?u.translatedText:s}return s}))).join("")})(r);if(c!==r){e.innerHTML=c,e.classList.add("croc-translated"),f.add(e);const a=document.createElement("button");a.textContent="Show Original",a.className="croc-revert-btn";let l=!0;a.onclick=()=>{l?(e.innerHTML=r,e.classList.remove("croc-translated"),a.textContent="Show Translation"):(e.innerHTML=c,e.classList.add("croc-translated"),a.textContent="Show Original"),l=!l},(n=e.parentNode)==null||n.insertBefore(a,e.nextSibling)}}catch(r){console.error("Error translating element:",r)}}async function I(e){const t=document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, span:not(.croc-wrapper *), div:not(.croc-wrapper *)");for(const n of t)!f.has(n)&&n.childNodes.length===1&&n.childNodes[0].nodeType===Node.TEXT_NODE&&await R(n,e)}async function W(e,o){var a;const t=(a=window.getSelection())==null?void 0:a.getRangeAt(0);if(!t)return;const n=await E(e,o),r=document.createElement("span");r.textContent=n.translatedText,r.className="croc-translated";const i=document.createElement("button");i.textContent="Show Original",i.className="croc-revert-btn";let c=!0;i.onclick=()=>{c?(r.textContent=e,i.textContent="Show Translation"):(r.textContent=n.translatedText,i.textContent="Show Original"),c=!c},t.deleteContents(),t.insertNode(i),t.insertNode(r)}function D(){const e=document.createElement("style");e.textContent=`
    .croc-wrapper {
      display: inline;
      margin: 0;
      padding: 0;
    }
    
    .croc-translated {
      display: inline;
      margin: 0;
      padding: 0;
    }
    
    .croc-revert-btn {
      font-size: 11px;
      padding: 2px 8px;
      margin-left: 6px;
      cursor: pointer;
      background-color: #4285f4;
      color: white;
      border: none;
      border-radius: 12px;
      transition: all 0.2s ease;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      vertical-align: middle;
      line-height: 20px;
      font-weight: 500;
      opacity: 0.9;
    }
  
    .croc-revert-btn:hover {
      background-color: #1a73e8;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      opacity: 1;
    }
  
    .croc-revert-btn:active {
      transform: scale(0.98);
    }
  `,document.head.appendChild(e),chrome.runtime.onMessage.addListener(async o=>{o.type==="translateSelection"&&await W(o.text,o.targetLanguage)}),chrome.storage.local.get(["autoTranslateEnabled","targetLanguage"]).then(o=>{o.autoTranslateEnabled&&I(o.targetLanguage)})}function L(e){const o=e.length;let t;return o<=3?t=1:o<=6?t=2:o<=9?t=3:t=4,{bold:e.slice(0,t),rest:e.slice(t)}}function F(e){const o=e.textContent.split(/(\s+)/),t=document.createElement("span");o.forEach(n=>{if(n.trim()){const{bold:r,rest:i}=L(n),c=document.createElement("span");c.className="bionic-bold",c.textContent=r,t.appendChild(c),t.appendChild(document.createTextNode(i))}else t.appendChild(document.createTextNode(n))}),e.parentNode.replaceChild(t,e)}function N(){new MutationObserver((o,t)=>{if(!document.querySelector(".pdf-viewer"))return;const r=document.querySelectorAll(".textLayer");r.length>0&&(r.forEach(i=>{i.querySelectorAll("span").forEach(a=>{var l;if((l=a.textContent)!=null&&l.trim()){const{bold:d,rest:s}=L(a.textContent);a.innerHTML=`<strong>${d}</strong>${s}`}})}),t.disconnect())}).observe(document.body,{childList:!0,subtree:!0})}function _(){const e=document.createElement("style");e.textContent=`
    .textLayer {
      opacity: 1 !important;
    }
    .textLayer strong {
      color: inherit !important;
      font-weight: 700 !important;
    }
  `,document.head.appendChild(e)}function M(e){if(document.body.classList.contains("pdf-viewer")){N();return}if(e.nodeType===Node.ELEMENT_NODE&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT"||e.tagName==="OPTION"))return;if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()){F(e);return}Array.from(e.childNodes).forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(t.tagName==="SCRIPT"||t.tagName==="STYLE"||t.classList.contains("bionic-bold"))||M(t)})}function $(){const e=document.createElement("style");e.textContent=`
    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap');
    
    /* More specific selectors, excluding UI elements */
    article, 
    p, 
    div:not([class*="icon"]):not([class*="logo"]):not([class*="button"]):not([class*="menu"]):not([class*="nav"]) {
      font-family: 'Lexend', sans-serif !important;
    }
    .bionic-bold { 
      font-weight: 700 !important; 
    }
  `,document.head.appendChild(e),M(document.body)}function U(){document.querySelectorAll("style").forEach(o=>{var t,n;((t=o.textContent)!=null&&t.includes("bionic-bold")||(n=o.textContent)!=null&&n.includes("Lexend"))&&o.remove()}),document.querySelectorAll(".bionic-bold").forEach(o=>{var n;const t=o.parentElement;if(t){const r=t.textContent||"",i=document.createTextNode(r);(n=t.parentNode)==null||n.replaceChild(i,t)}})}function w(e){if(console.log("Toggle received in content script:",e),document.body.classList.contains("pdf-viewer")){e?(_(),N()):location.reload();return}e?(console.log("Applying bionic reading"),$()):(console.log("Removing bionic reading"),U())}function V(){chrome.storage.local.get("bionicReadingEnabled",({bionicReadingEnabled:e})=>{e&&w(!0)}),chrome.runtime.onMessage.addListener((e,o,t)=>(e.type==="toggleBionicReading"&&(w(e.enable),t({success:!0})),!0))}function v(e){if(e){const o=document.createElement("style");o.id="croc-high-contrast",o.textContent=`
      /* Base styles */
      :root {
        --high-contrast-bg: #000000;
        --high-contrast-text: #ffffff;
        --high-contrast-link: #40a9ff;
        --high-contrast-border: #ffffff;
      }

      /* Force text contrast */
      * {
        background-color: var(--high-contrast-bg) !important;
        color: var(--high-contrast-text) !important;
        border-color: var(--high-contrast-border) !important;
        text-shadow: none !important;
      }

      /* Handle text inside containers */
      [class*="text"],
      [class*="title"],
      [class*="heading"],
      [class*="label"],
      [class*="value"],
      [class*="amount"],
      [class*="price"],
      [class*="count"],
      [class*="number"] {
        color: var(--high-contrast-text) !important;
        background-color: var(--high-contrast-bg) !important;
      }

      /* Handle specific numeric displays */
      [class*="participants"],
      [class*="prize"],
      [class*="money"],
      [class*="currency"] {
        color: var(--high-contrast-text) !important;
      }

      /* Icons and SVGs */
      svg, svg * {
        fill: var(--high-contrast-text) !important;
        stroke: var(--high-contrast-text) !important;
      }

      /* Images */
      img {
        opacity: 0.9;
        filter: brightness(1.2) contrast(1.2);
      }

      /* Links */
      a, a:visited {
        color: var(--high-contrast-link) !important;
        text-decoration: underline !important;
        background-color: transparent !important;
      }

      a:hover, a:focus {
        color: var(--high-contrast-text) !important;
        background-color: var(--high-contrast-link) !important;
      }

      /* Ensure text remains visible during transition */
      * {
        transition: none !important;
      }

      /* Force visibility of specific containers */
      [class*="container"],
      [class*="wrapper"],
      [class*="content"] {
        background-color: var(--high-contrast-bg) !important;
      }

      /* Handle transparent backgrounds */
      [style*="background: transparent"],
      [style*="background-color: transparent"] {
        background-color: var(--high-contrast-bg) !important;
      }
    `,document.head.appendChild(o),document.body.classList.add("high-contrast-enabled")}else{const o=document.getElementById("croc-high-contrast");o&&o.remove(),document.body.classList.remove("high-contrast-enabled"),document.body.style.removeProperty("background-color"),document.body.style.removeProperty("color"),document.documentElement.style.removeProperty("--page-background"),document.documentElement.style.removeProperty("--text-color")}}function X(){chrome.storage.local.get("highContrastEnabled",({highContrastEnabled:e})=>{e&&v(!0)}),chrome.runtime.onMessage.addListener((e,o,t)=>(e.type==="toggleHighContrast"&&(v(e.enable),t({success:!0})),!0))}async function Y(e,o){try{if(o.mode==="rewrite"){console.log("mode is rewrite");const t=await ai.rewriter.create(),n=await t.rewrite(e);return t.destroy(),n}else{console.log("using the writer api"),console.log(o.tone);const t=await ai.writer.create({tone:o.tone==="professional"?"formal":o.tone,length:o.length,format:"plain-text"});console.log(t);const n=await t.write(e);return console.log(n),t.destroy(),n}}catch(t){throw console.error("Error in generateText:",t),t}}function G(){const e=document.createElement("style");e.textContent=`
    .croc-writer-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #1a1a1a;
        padding: 16px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        width: 400px;
    }

    .croc-writer-tabs {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;
    }

    .croc-writer-tab {
        padding: 8px 16px;
        background: #2d2d2d;
        color: #ffffff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }

    .croc-writer-tab.active {
        background: #2563eb;
    }

    .croc-writer-textarea {
        width: 100%;
        min-height: 180px;
        padding: 12px;
        background: #2d2d2d;
        color: #ffffff;
        border: none;
        border-radius: 8px;
        margin-bottom: 16px;
        resize: vertical;
        box-sizing: border-box;
    }

    .croc-writer-options {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;
    }

    .croc-writer-option {
        flex: 1;
        background: #2d2d2d;
        padding: 8px 12px;
        padding-right: 24px;
        border-radius: 6px;
        color: #ffffff;
        display: flex;
        gap: 8px;
        align-items: center;
        position: relative;
    }

    .croc-writer-option span {
        color: #ffffff;
        font-size: 14px;
    }

    .croc-writer-option select {
        flex: 1;
        background: transparent;
        border: none;
        color: #ffffff;
        outline: none;
        cursor: pointer;
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        padding: 0 16px 0 8px;
        font-size: 14px;
    }

    .croc-writer-option select option {
        background: #2d2d2d;
        color: #ffffff;
    }

    .croc-writer-submit {
        width: 100%;
        padding: 12px;
        background: #2563eb;
        color: #ffffff;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        cursor: pointer;
        box-sizing: border-box;
    }

    .croc-writer-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
    }

    .croc-writer-option::after {
        content: "";
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #ffffff;
        pointer-events: none;
    }`,document.head.appendChild(e),chrome.runtime.onMessage.addListener(o=>{if(o.type==="showWriter"){const t=document.activeElement,n=t&&(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t.hasAttribute("contenteditable")||t.closest(".editable")||t.closest('[role="textbox"]')||t.closest(".ql-editor")||t.closest(".tox-edit-area"));n&&J(t),console.log("Writer triggered for element:",{element:t,isEditable:n,tagName:t==null?void 0:t.tagName,className:t==null?void 0:t.className})}})}function J(e){const o=document.querySelector(".croc-writer-popup");o&&o.remove();const t=document.querySelector(".croc-writer-overlay");t&&t.remove();const n=document.createElement("div");n.className="croc-writer-overlay";const r=document.createElement("div");r.className="croc-writer-popup";const i=document.createElement("div");i.className="croc-writer-tabs",i.innerHTML=`
        <button class="croc-writer-tab active">Write New</button>
        <button class="croc-writer-tab">Rewrite Existing</button>
    `;const c=i.querySelectorAll(".croc-writer-tab");c.forEach(m=>{m.addEventListener("click",()=>{c.forEach(g=>g.classList.remove("active")),m.classList.add("active")})});const a=document.createElement("textarea");a.className="croc-writer-textarea";const l=e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?e.value:e.textContent||"";a.value=l;const d=document.createElement("div");d.className="croc-writer-options";const s=document.createElement("div");s.className="croc-writer-option",s.innerHTML=`
        <span>Tone</span>
        <select>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="professional">Professional</option>
        </select>
    `;const u=document.createElement("div");u.className="croc-writer-option",u.innerHTML=`
        <span>Length</span>
        <select>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
        </select>
    `,d.appendChild(s),d.appendChild(u);const p=document.createElement("button");p.className="croc-writer-submit",p.textContent="Apply",p.onclick=async()=>{var m;try{p.disabled=!0,p.textContent="Generating...";const g=i.querySelector(".active"),h=s.querySelector("select"),A=u.querySelector("select"),z={mode:(m=g.textContent)!=null&&m.toLowerCase().includes("rewrite")?"rewrite":"write_new",tone:h.value,length:A.value},H=a.value||"Write something creative",b=await Y(H,z);e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?(e.value=b,e.dispatchEvent(new Event("input",{bubbles:!0}))):(e.hasAttribute("contenteditable")||e.closest('[role="textbox"]'))&&(e.textContent=b,e.dispatchEvent(new InputEvent("input",{bubbles:!0}))),r.remove(),n.remove()}catch(g){console.error("Writer error:",g),p.textContent="Error - Try Again",p.disabled=!1}},r.appendChild(i),r.appendChild(a),r.appendChild(d),r.appendChild(p),n.onclick=m=>{m.target===n&&(r.remove(),n.remove())},document.body.appendChild(n),document.body.appendChild(r)}async function C(e,o){try{const t="en";console.log("target language is:",o);const n=await translation.createTranslator({sourceLanguage:t,targetLanguage:o});console.log("translator console"),console.log(n);const r=await n.translate(e);return console.log("transliterated text is: "),console.log(r),{originalText:e,transliteratedText:r}}catch(t){throw console.error("Transliteration error:",t),t}}async function K(e,o){var i,c;const t=(i=window.getSelection())==null?void 0:i.getRangeAt(0);if(!t)return;const n=document.activeElement,r=n==null?void 0:n.closest(".lexical-rich-text-input");if(r)try{const a=await C(e,o),l=r.querySelector('[contenteditable="true"]');if(!l)return;document.execCommand("insertText",!1,a.transliteratedText),l.focus()}catch(a){console.error("Error in transliteration:",a)}else{const a=await C(e,o),l=document.createElement("span");l.textContent=a.transliteratedText,l.className="croc-transliterated";const d=document.createElement("button");d.textContent="Show Original",d.className="croc-revert-btn";let s=!0;d.onclick=()=>{s?(l.textContent=e,d.textContent="Show Transliteration"):(l.textContent=a.transliteratedText,d.textContent="Show Original"),s=!s},t.deleteContents(),t.insertNode(l),t.insertNode(d),(c=window.getSelection())==null||c.removeAllRanges()}}function Q(){const e=document.createElement("style");e.textContent=`
    .croc-wrapper {
      display: inline;
      margin: 0;
      padding: 0;
    }
    
    .croc-translated {
      display: inline;
      margin: 0;
      padding: 0;
    }
    
    .croc-revert-btn {
      font-size: 11px;
      padding: 2px 8px;
      margin-left: 6px;
      cursor: pointer;
      background-color: #4285f4;
      color: white;
      border: none;
      border-radius: 12px;
      transition: all 0.2s ease;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      vertical-align: middle;
      line-height: 20px;
      font-weight: 500;
      opacity: 0.9;
    }
  
    .croc-revert-btn:hover {
      background-color: #1a73e8;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      opacity: 1;
    }
  
    .croc-revert-btn:active {
      transform: scale(0.98);
    }
  `,document.head.appendChild(e),chrome.runtime.onMessage.addListener(async o=>{o.type==="transliterateSelection"&&(console.log("message received transliterate"),await K(o.text,o.transliterationTargetLanguage))})}console.log("Content script loaded");P();q();D();V();X();Q();G();
