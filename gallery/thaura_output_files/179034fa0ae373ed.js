(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,50923,t=>{"use strict";var e=t.i(66723),r=t.i(46650),i=t.i(90846),a=t.i(41904),o=t.i(25820),n=t.i(48408),s=t.i(8796),l=t.i(39843),c=t.i(12164),m=t.i(44229),d=t.i(64158),p=t.i(31628),h=t.i(90865),f=t.i(47222),u=t.i(9562),x=t.i(71663),g=t.i(64396),b=t.i(73039),y=t.i(72033),j=t.i(94498);let k=["shimmer.message1","shimmer.message2","shimmer.message3","shimmer.message4","shimmer.message5","shimmer.message6","shimmer.message7","shimmer.message8"],v="bg-background md:bg-white dark:bg-background-dark md:dark:bg-[#30302e]",w=({artifactId:t,onClose:w,streamingContent:T,isStreaming:C=!1,isIncognito:N=!1})=>{let{t:S}=(0,b.useTranslation)(),A=(0,y.useCapacitor)(),E=(0,i.useParams)(),M=t||E.artifactId||"",[z,P]=(0,r.useState)(""),[L,W]=(0,r.useState)(!0),[q,B]=(0,r.useState)(!1),[F,I]=(0,r.useState)(!1),[V,R]=(0,r.useState)(()=>k[Math.floor(Math.random()*k.length)]),D=(0,r.useRef)(null),J=(0,r.useRef)(null),$=(0,r.useRef)(0);(0,r.useEffect)(()=>{let t=D.current;return()=>{J.current&&clearTimeout(J.current),t&&(t.srcdoc="",t.src="about:blank")}},[]);let H=t=>{D.current&&t&&(D.current.srcdoc=t)},O=async()=>{if(M)try{let t=await (0,o.generateShareLink)(M);if(A)return void await j.Share.share({title:S("common.share"),url:t});await navigator.clipboard.writeText(t),I(!0),J.current&&clearTimeout(J.current),J.current=setTimeout(()=>I(!1),2e3)}catch(t){"AbortError"!==t.name&&console.error("Failed to generate share link:",t)}};return(0,r.useEffect)(()=>{let t=++$.current;if(C){W(!0),P(""),B(!1);return}if(void 0!==T&&!C){P(T),W(!1);return}if(!M)return;let e=n.streamingArtifactStore.getArtifact(M);if(e?.content){P(e.content),W(!1);return}W(!0),P(""),B(!1),(async()=>{try{let e=await (0,o.getArtifactContent)(M);if(t!==$.current)return;P("string"==typeof e?e:""),W(!1)}catch(e){if(t!==$.current)return;console.error("Failed to load content:",e),P(""),W(!1)}})()},[M,T,C]),(0,r.useEffect)(()=>{z&&!L&&H(z)},[z,L]),(0,r.useEffect)(()=>{if(L)return void B(!1);let t=window.requestAnimationFrame(()=>{B(!0)});return()=>{window.cancelAnimationFrame(t)}},[L]),(0,r.useEffect)(()=>{if(!C)return;let t=setInterval(()=>{R(k[Math.floor(Math.random()*k.length)])},3e3);return()=>clearInterval(t)},[C]),(0,e.jsxs)("div",{className:"h-full flex flex-col",children:[(0,e.jsx)("div",{className:`flex-shrink-0 relative w-full h-14 ${v}`,children:(0,e.jsx)("div",{className:"absolute inset-0 flex items-center justify-end px-4",children:(0,e.jsx)(p.TooltipProvider,{children:(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsxs)(p.Tooltip,{children:[(0,e.jsx)(p.TooltipTrigger,{asChild:!0,children:(0,e.jsxs)(s.Button,{variant:"ghost",size:"icon",className:"h-9 w-9 md:h-8 md:w-8 md:hover:bg-primary md:dark:hover:bg-primary-dark",onClick:()=>{D.current&&(D.current.src="about:blank",setTimeout(()=>H(z),50))},disabled:L,children:[(0,e.jsx)(c.ArrowClockwise,{className:"text-black dark:text-textWarm"}),(0,e.jsx)("span",{className:"sr-only",children:S("common.refresh")})]})}),(0,e.jsx)(p.TooltipContent,{side:"bottom",className:"hidden md:block",children:(0,e.jsx)("p",{children:S("common.refresh")})})]}),(0,e.jsxs)(p.Tooltip,{children:[(0,e.jsx)(p.TooltipTrigger,{asChild:!0,children:(0,e.jsxs)(s.Button,{variant:"ghost",size:"icon",className:"h-9 w-9 md:h-8 md:w-8 md:hover:bg-primary md:dark:hover:bg-primary-dark",onClick:O,disabled:L||C,children:[F?(0,e.jsx)(m.Check,{className:"text-black dark:text-textWarm"}):(0,e.jsx)(d.Link,{className:"text-black dark:text-textWarm"}),(0,e.jsx)("span",{className:"sr-only",children:F?S("shareChat.linkCopied"):S("common.share")})]})}),(0,e.jsx)(p.TooltipContent,{side:"bottom",className:"hidden md:block",children:(0,e.jsx)("p",{children:F?S("shareChat.linkCopied"):S("shareChat.shareViaLink")})})]}),w&&(0,e.jsxs)(p.Tooltip,{children:[(0,e.jsx)(p.TooltipTrigger,{asChild:!0,children:(0,e.jsxs)(s.Button,{variant:"ghost",size:"icon",className:"h-9 w-9 md:h-8 md:w-8 md:hover:bg-primary md:dark:hover:bg-primary-dark",onClick:w,children:[(0,e.jsx)(l.X,{className:"text-black dark:text-textWarm"}),(0,e.jsx)("span",{className:"sr-only",children:S("common.close")})]})}),(0,e.jsx)(p.TooltipContent,{side:"bottom",className:"hidden md:block",children:(0,e.jsx)("p",{children:S("artifact.closeArtifact")})})]})]})})})}),(0,e.jsx)("div",{className:"flex-1 relative",children:L?(0,e.jsx)("div",{className:`absolute inset-0 flex items-center justify-center ${v}`,children:C?(0,e.jsx)(f.LazyMotion,{features:x.domAnimation,children:(0,e.jsx)(h.AnimatePresence,{mode:"wait",children:(0,e.jsx)(u.m.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},className:"mt-[-50px]",children:(0,e.jsx)(g.TextShimmer,{className:"text-lg",duration:1.5,spread:3,children:S(V)})},V)})}):(0,e.jsx)(a.Spinner,{size:"lg"})}):(0,e.jsx)("iframe",{ref:D,className:`absolute inset-0 w-full h-full border-0 ${v} select-none transition-opacity duration-200 ease-out ${q?"opacity-100":"opacity-0"}`,title:"Code Sandbox",sandbox:"allow-scripts allow-modals allow-forms allow-popups",onLoad:()=>{D.current?.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})}})})]})};w.displayName="CodeSandbox",t.s(["CodeSandbox",0,w])},94862,t=>{"use strict";var e=t.i(66723),r=t.i(46650);t.i(30133);var i=t.i(1760),a=t.i(41904),o=t.i(25820),n=t.i(48408);let s=`
/* Page setup - margin: 0 removes browser header/footer area */
@page {
  size: A4;
  margin: 0;
}

/* Force light mode colors - margins applied here instead of @page */
body {
  background: white !important;
  color: black !important;
  font-family: 'Bricolage Grotesque', system-ui, sans-serif !important;
  font-size: 12pt;
  margin: 20mm 15mm !important;
  padding: 0 !important;
}

/* Typography - Headings (matching styles.ts: mt-4 mb-4 = 16px) */
h1 {
  font-size: 24pt !important;
  font-weight: 800 !important;
  margin-top: 16px !important;
  margin-bottom: 16px !important;
  color: black !important;
  page-break-after: avoid;
}

h2 {
  font-size: 18pt !important;
  font-weight: 800 !important;
  margin-top: 16px !important;
  margin-bottom: 16px !important;
  color: black !important;
  page-break-after: avoid;
}

h3 {
  font-size: 14pt !important;
  font-weight: 800 !important;
  margin-top: 16px !important;
  margin-bottom: 16px !important;
  color: black !important;
  page-break-after: avoid;
}

h4, h5, h6 {
  font-size: 12pt !important;
  font-weight: 700 !important;
  margin-top: 16px !important;
  margin-bottom: 16px !important;
  color: black !important;
  page-break-after: avoid;
}

/* First heading - no top margin */
h1:first-child, h2:first-child, h3:first-child {
  margin-top: 0 !important;
}

/* Paragraphs (matching styles.ts: mt-0 mb-4 = 16px) */
p {
  margin-top: 0 !important;
  margin-bottom: 16px !important;
  color: black !important;
  orphans: 3;
  widows: 3;
}

/* Bold and Italic (matching styles.ts: font-extrabold) */
strong, b {
  font-weight: 800 !important;
  color: black !important;
}

em, i {
  font-style: italic !important;
  color: black !important;
}

/* Links */
a {
  color: #0066cc !important;
  text-decoration: underline !important;
}

/* Lists (matching styles.ts: mt-0 mb-6 = 24px) */
ul, ol {
  margin-top: 0 !important;
  margin-left: 20pt !important;
  margin-bottom: 24px !important;
  padding-left: 0 !important;
}

/* List items (matching styles.ts: mt-0 mb-4 = 16px) */
li {
  margin-top: 0 !important;
  margin-bottom: 16px !important;
  color: black !important;
}

li::marker {
  color: black !important;
}

/* Blockquotes (matching styles.ts: mt-0 mb-4 = 16px) */
blockquote {
  margin: 0 0 16px 20pt !important;
  padding-left: 10pt !important;
  border-left: 3pt solid #ccc !important;
  color: #333 !important;
  font-style: italic !important;
}

/* Code blocks (matching styles.ts: mt-0 mb-4 = 16px) */
pre {
  background-color: #f5f5f5 !important;
  border: 1pt solid #ddd !important;
  border-radius: 4pt !important;
  padding: 10pt !important;
  margin: 0 0 16px 0 !important;
  overflow-x: visible !important;
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace !important;
  font-size: 10pt !important;
}

code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace !important;
  font-size: 10pt !important;
  color: black !important;
}

/* Inline code */
:not(pre) > code {
  background-color: #f0f0f0 !important;
  padding: 1pt 4pt !important;
  border-radius: 3pt !important;
  border: 0.5pt solid #ddd !important;
}

/* Syntax highlighting colors for print */
.hljs-comment, .hljs-quote { color: #6a737d !important; }
.hljs-keyword, .hljs-selector-tag { color: #d73a49 !important; }
.hljs-string, .hljs-doctag { color: #22863a !important; }
.hljs-number, .hljs-literal { color: #005cc5 !important; }
.hljs-function, .hljs-title, .hljs-section { color: #6f42c1 !important; }
.hljs-variable, .hljs-template-variable { color: #e36209 !important; }
.hljs-type, .hljs-class { color: #005cc5 !important; }
.hljs-attr, .hljs-attribute { color: #22863a !important; }
.hljs-built_in, .hljs-builtin-name { color: #005cc5 !important; }
.hljs-tag, .hljs-name { color: #22863a !important; }
.hljs-meta { color: #005cc5 !important; }
.hljs-symbol, .hljs-bullet { color: #005cc5 !important; }
.hljs-addition { color: #22863a !important; background-color: #f0fff4 !important; }
.hljs-deletion { color: #d73a49 !important; background-color: #ffeef0 !important; }

/* Tables (matching styles.ts: mt-0 mb-4 = 16px) */
table {
  width: 100% !important;
  border-collapse: collapse !important;
  margin: 0 0 16px 0 !important;
  font-size: 10pt !important;
}

th, td {
  border: 1pt solid #333 !important;
  padding: 6pt 8pt !important;
  text-align: left !important;
  color: black !important;
}

th {
  background-color: #f0f0f0 !important;
  font-weight: 700 !important;
}

tr:nth-child(even) td {
  background-color: #fafafa !important;
}

/* Horizontal rules (matching styles.ts: mt-4 mb-4 = 16px) */
hr {
  border: none !important;
  border-top: 1pt solid #ccc !important;
  margin: 16px 0 !important;
}

/* Images (matching styles.ts: mt-0 mb-4 = 16px) */
img {
  max-width: 100% !important;
  height: auto !important;
  margin: 0 0 16px 0 !important;
}

/* High-specificity MathJax clipping fixes - MUST override collected styles */
body mjx-container,
body mjx-container mjx-math,
body mjx-container mjx-mrow,
body mjx-container mjx-mfrac,
body mjx-container mjx-msup,
body mjx-container mjx-msub,
body mjx-container mjx-munder,
body mjx-container mjx-mover,
body mjx-container mjx-munderover,
body mjx-container mjx-msqrt,
body mjx-container mjx-mroot,
body mjx-container mjx-mtable,
body mjx-container mjx-mlabeledtr,
body mjx-container mjx-semantics,
body mjx-container mjx-annotation {
  overflow: visible !important;
  clip: auto !important;
  clip-path: none !important;
}

/* Force container padding with high specificity */
body .print-content mjx-container {
  padding: 16px 0 !important;
  margin: 16px 0 !important;
  display: block !important;
  min-height: auto !important;
  color: black !important;
}

/* Display math (centered equations) needs extra space */
body .print-content mjx-container[jax="CHTML"][display="true"] {
  padding: 24px 0 !important;
  margin: 20px 0 !important;
}

/* Inline math */
body .print-content mjx-container[jax="CHTML"]:not([display="true"]) {
  display: inline-block !important;
  padding: 8px 2px !important;
  margin: 0 2px !important;
  vertical-align: middle !important;
}

/* Legacy MathJax classes with high specificity */
body .MathJax,
body .MathJax_Display {
  color: black !important;
  overflow: visible !important;
  padding: 16px 0 !important;
  margin: 16px 0 !important;
}

p {
  overflow: visible !important;
}

/* Keep figures together */
figure {
  margin: 0 0 16px 0 !important;
}

/* Hide interactive elements */
button, [data-copy-button], .copy-button {
  display: none !important;
}

/* Print color adjustment */
* {
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

/* Nuclear reset for ALL clipping on print content */
/* This is critical because MathJax uses clip:rect which causes content to be cut off */
.print-content *,
.print-content mjx-container,
.print-content mjx-container * {
  clip: auto !important;
  clip-path: none !important;
}

/* Override any overflow constraints */
html, body {
  overflow: visible !important;
  height: auto !important;
  max-height: none !important;
}

/* Ensure content flows naturally for multi-page */
.print-content {
  overflow: visible !important;
  height: auto !important;
  padding-top: 10px !important;
}

/* First element needs extra top space to prevent clipping */
.print-content > *:first-child {
  margin-top: 0 !important;
  padding-top: 5px !important;
}

/* Ensure all text is visible */
span, div {
  color: black !important;
}
`;async function l(t,e={}){let{title:r="Artifact"}=e,i=document.title;document.title=r;let a=t.cloneNode(!0);a.querySelectorAll("button").forEach(t=>t.remove()),a.querySelectorAll("[data-copy-button], .copy-button, [data-interactive]").forEach(t=>t.remove()),a.querySelectorAll('[style*="animation"]').forEach(t=>{t.style.animation="none"}),a.querySelectorAll("[style]").forEach(t=>{t.style.removeProperty("height"),t.style.removeProperty("max-height"),t.style.removeProperty("overflow"),t.style.removeProperty("overflow-y"),t.style.removeProperty("overflow-x")}),a.querySelectorAll('mjx-container, mjx-container *, [class*="MathJax"], [class*="mjx"]').forEach(t=>{t.removeAttribute("style")});for(let t of[a,...Array.from(a.querySelectorAll("[class]"))]){let e=(t.getAttribute("class")?.split(/\s+/)||[]).filter(t=>t.startsWith("hljs")||t.startsWith("MathJax")||t.startsWith("mjx")||t.startsWith("math-"));e.length>0?t.setAttribute("class",e.join(" ")):t.removeAttribute("class")}let o=function(){let t=[];for(let e of Array.from(document.styleSheets))try{if(e.cssRules)for(let r of Array.from(e.cssRules)){let e=r.cssText;(e.includes(".hljs")||e.includes("mjx-")||e.includes(".MathJax")||e.includes("@font-face"))&&t.push(e)}}catch{}return t.join("\n")}(),n=`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${r}</title>
    <!-- Load Bricolage Grotesque (app font) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap" rel="stylesheet">
    <style>
      /* Essential styles (syntax highlighting, MathJax) */
      ${o}

      /* Print-specific styles (provides all typography) */
      ${s}
    </style>
  </head>
  <body>
    <div class="print-content">
      ${a.innerHTML}
    </div>
  </body>
</html>
`,c=document.createElement("iframe");c.style.cssText="position:fixed;left:-9999px;top:0;width:800px;height:600px;border:0;visibility:hidden;",document.body.appendChild(c);let m=c.contentDocument||c.contentWindow?.document;if(!m)throw document.body.removeChild(c),Error("Failed to access iframe document");m.open(),m.write(n),m.close();let d=!1,p=()=>{if(!d){d=!0;try{c.contentWindow?.focus(),c.contentWindow?.print()}catch(t){console.error("Print error:",t)}}};await new Promise(t=>{c.onload=()=>{setTimeout(()=>{p(),t()},300)},setTimeout(()=>{p(),t()},800)}),setTimeout(()=>{document.title=i,c.parentNode&&document.body.removeChild(c)},2e3)}var c=t.i(8796),m=t.i(39843),d=t.i(17473),p=t.i(44229),h=t.i(64158),f=t.i(37593),u=t.i(26782),x=t.i(31628),g=t.i(15458),b=t.i(73039),y=t.i(72033),j=t.i(94498);let k=({artifactId:t,artifactTitle:s,onClose:k,streamingContent:v,isStreaming:w=!1,isIncognito:T=!1})=>{let{t:C}=(0,b.useTranslation)(),N=(0,y.useCapacitor)(),[S,A]=(0,r.useState)("loading"),[E,M]=(0,r.useState)(""),[z,P]=(0,r.useState)(!1),[L,W]=(0,r.useState)(!1),[q,B]=(0,r.useState)(!1),[F,I]=(0,r.useState)(!1),V=(0,r.useRef)(null),R=(0,r.useRef)(null),D=(0,r.useRef)(null),J=(0,r.useRef)(0),{scrollRef:$,isScrolledFromTop:H}=(0,g.useScrollEdges)();(0,r.useEffect)(()=>{let e=++J.current;if(void 0!==v){M(v),A("loaded");return}if(!t)return;let r=n.streamingArtifactStore.getArtifact(t);if(r?.content){M(r.content),A("loaded");return}A("loading"),M(""),P(!1),(async()=>{try{let r=await (0,o.getArtifactContent)(t);if(e!==J.current)return;M("string"==typeof r?r:""),A("loaded")}catch(t){if(e!==J.current)return;console.error("Error loading artifact content:",t),A("error")}})()},[t,v]),(0,r.useEffect)(()=>{if("loaded"!==S)return void P(!1);let t=window.requestAnimationFrame(()=>{P(!0)});return()=>{window.cancelAnimationFrame(t)}},[S]),(0,r.useEffect)(()=>()=>{V.current&&clearTimeout(V.current),R.current&&clearTimeout(R.current)},[]);let O=async()=>{try{await navigator.clipboard.writeText(E),W(!0),V.current&&clearTimeout(V.current),V.current=setTimeout(()=>W(!1),2e3)}catch(t){console.error("Failed to copy text:",t)}},U=async()=>{if(t)try{let e=await (0,o.generateShareLink)(t);if(N)return void await j.Share.share({title:C("common.share"),url:e});await navigator.clipboard.writeText(e),B(!0),R.current&&clearTimeout(R.current),R.current=setTimeout(()=>B(!1),2e3)}catch(t){"AbortError"!==t.name&&console.error("Failed to generate share link:",t)}},_=async()=>{if(D.current&&!w){I(!0);try{await l(D.current,{title:s||"Artifact"})}catch(t){console.error("Failed to generate PDF:",t)}finally{I(!1)}}},G="loaded"===S;return(0,e.jsxs)("div",{className:"h-full flex flex-col bg-background md:bg-white dark:bg-background-dark md:dark:bg-[#30302e]",children:[(0,e.jsx)("div",{className:"flex-shrink-0 relative w-full h-14",children:(0,e.jsx)(x.TooltipProvider,{children:(0,e.jsxs)("div",{className:"absolute top-4 right-4 flex items-center gap-2",children:[(0,e.jsxs)(x.Tooltip,{children:[(0,e.jsx)(x.TooltipTrigger,{asChild:!0,children:(0,e.jsxs)(c.Button,{variant:"ghost",size:"icon",className:"h-9 w-9 md:h-8 md:w-8 md:hover:bg-primary md:dark:hover:bg-primary-dark",onClick:O,disabled:w,children:[L?(0,e.jsx)(p.Check,{className:"text-black dark:text-textWarm"}):(0,e.jsx)(d.Copy,{className:"text-black dark:text-textWarm"}),(0,e.jsx)("span",{className:"sr-only",children:L?C("markdownViewer.copied"):C("markdownViewer.copy")})]})}),(0,e.jsx)(x.TooltipContent,{side:"bottom",className:"hidden md:block",children:(0,e.jsx)("p",{children:L?C("markdownViewer.copied"):C("markdownViewer.copy")})})]}),(0,e.jsxs)(x.Tooltip,{children:[(0,e.jsx)(x.TooltipTrigger,{asChild:!0,children:(0,e.jsxs)(c.Button,{variant:"ghost",size:"icon",className:"h-9 w-9 md:h-8 md:w-8 md:hover:bg-primary md:dark:hover:bg-primary-dark",onClick:U,disabled:w,children:[q?(0,e.jsx)(p.Check,{className:"text-black dark:text-textWarm"}):(0,e.jsx)(h.Link,{className:"text-black dark:text-textWarm"}),(0,e.jsx)("span",{className:"sr-only",children:q?C("shareChat.linkCopied"):C("common.share")})]})}),(0,e.jsx)(x.TooltipContent,{side:"bottom",className:"hidden md:block",children:(0,e.jsx)("p",{children:q?C("shareChat.linkCopied"):C("shareChat.shareViaLink")})})]}),(0,e.jsxs)(x.Tooltip,{children:[(0,e.jsx)(x.TooltipTrigger,{asChild:!0,children:(0,e.jsxs)(c.Button,{variant:"ghost",size:"icon",className:"hidden md:flex h-9 w-9 md:h-8 md:w-8 md:hover:bg-primary md:dark:hover:bg-primary-dark",onClick:_,disabled:w||F,children:[F?(0,e.jsx)(a.Spinner,{size:"sm"}):(0,e.jsx)(f.DownloadSimple,{className:"text-black dark:text-textWarm"}),(0,e.jsx)("span",{className:"sr-only",children:C("markdownViewer.downloadPdf")})]})}),(0,e.jsx)(x.TooltipContent,{side:"bottom",className:"hidden md:block",children:(0,e.jsx)("p",{children:F?C("markdownViewer.generating"):C("markdownViewer.downloadPdf")})})]}),k&&(0,e.jsxs)(x.Tooltip,{children:[(0,e.jsx)(x.TooltipTrigger,{asChild:!0,children:(0,e.jsxs)(c.Button,{variant:"ghost",size:"icon",className:"h-9 w-9 md:h-8 md:w-8 md:hover:bg-primary md:dark:hover:bg-primary-dark",onClick:()=>{k&&k()},children:[(0,e.jsx)(m.X,{className:"text-black dark:text-textWarm"}),(0,e.jsx)("span",{className:"sr-only",children:C("artifact.closeArtifact")})]})}),(0,e.jsx)(x.TooltipContent,{side:"bottom",className:"hidden md:block",children:(0,e.jsx)("p",{children:C("artifact.closeArtifact")})})]})]})})}),G?(0,e.jsxs)("div",{className:"relative flex-1 min-h-0 overflow-hidden flex flex-col [--scroll-fade-bg:var(--color-background)] md:[--scroll-fade-bg:#ffffff] dark:[--scroll-fade-bg:var(--color-background-dark)] md:dark:[--scroll-fade-bg:#30302e]",children:[(0,e.jsx)(g.ScrollEdgeFade,{edge:"top",visible:H}),(0,e.jsx)("div",{ref:$,className:(0,u.cn)("flex-1 min-h-0 overflow-y-auto transition-opacity duration-200 ease-out",z?"opacity-100":"opacity-0"),style:{WebkitOverflowScrolling:"touch",touchAction:"auto",overscrollBehavior:"contain",userSelect:"text",WebkitUserSelect:"text"},children:(0,e.jsx)("div",{ref:D,dir:"auto",children:(0,e.jsx)(i.Markdown,{content:E,className:"px-4 md:px-[max(64px,calc(50%-350px))] pt-4 pb-72",animated:w})})})]}):"error"===S?(0,e.jsx)("div",{className:"flex-1 flex items-center justify-center",children:(0,e.jsx)("p",{className:"text-red-500 dark:text-red-400",children:C("artifact.failedToLoad")})}):(0,e.jsx)("div",{className:"flex-1 relative",children:(0,e.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,e.jsx)(a.Spinner,{size:"lg"})})})]})};k.displayName="MarkdownViewer",t.s(["MarkdownViewer",0,k],94862)},86198,t=>{"use strict";var e=t.i(66723),r=t.i(46650),i=t.i(61300),a=t.i(94862),o=t.i(41904),n=t.i(50923),s=t.i(25820),l=t.i(48408),c=t.i(73039);let m=new Set(["text","code"]);t.s(["default",0,({open:t,onOpenChange:d,artifactId:p,isIncognito:h=!1})=>{let{t:f}=(0,c.useTranslation)(),[u,x]=(0,r.useState)(null),[g,b]=(0,r.useState)("Artifact"),[y,j]=(0,r.useState)(!0),[k,v]=(0,r.useState)(void 0),[w,T]=(0,r.useState)(()=>p?l.streamingArtifactStore.getArtifact(p)?.content:void 0),[C,N]=(0,r.useState)(()=>!!p&&(l.streamingArtifactStore.getArtifact(p)?.isStreaming??!1)),S=(0,r.useRef)(0);return(0,r.useEffect)(()=>{if(!p){S.current+=1,x(null),b("Artifact"),v(void 0),j(!1);return}let t=++S.current;(async()=>{j(!0),x(null),b("Artifact"),v(void 0);try{if(t!==S.current)return;let e=l.streamingArtifactStore.getArtifact(p);if(e){if(t!==S.current)return;x(e.type),b(e.title||"Artifact"),v(e.content??"");return}let r=await (0,s.getArtifactById)(p);if(t!==S.current)return;if(r)if(x(r.type??null),b(r.title||"Artifact"),r.type&&m.has(r.type)){let e=await (0,s.getArtifactContent)(p);if(t!==S.current)return;v("string"==typeof e?e:"")}else v("")}catch(e){if(t!==S.current)return;console.error("Error fetching artifact type:",e)}finally{t===S.current&&j(!1)}})()},[p]),(0,r.useEffect)(()=>{if(!p){T(void 0),N(!1);return}let t=l.streamingArtifactStore.getArtifact(p);t&&(T(t.content),N(t.isStreaming));let e=l.streamingArtifactStore.subscribe(p,t=>{T(t.content),N(t.isStreaming)});return()=>{e()}},[p]),(0,e.jsx)(i.Drawer,{open:t,onOpenChange:d,dismissible:!0,children:(0,e.jsxs)(i.DrawerContent,{className:"h-[93dvh] flex flex-col",children:[(0,e.jsx)("div",{className:"sr-only",children:(0,e.jsx)(i.DrawerTitle,{children:f("artifact.viewer")})}),(0,e.jsx)("div",{className:"flex-1 overflow-hidden mt-3",children:y?(0,e.jsx)("div",{className:"h-full flex items-center justify-center",children:(0,e.jsx)(o.Spinner,{size:"lg"})}):"code"===u?(0,e.jsx)(n.CodeSandbox,{artifactId:p,streamingContent:w??k,isStreaming:C,isIncognito:h}):(0,e.jsx)(a.MarkdownViewer,{artifactId:p,artifactTitle:g,streamingContent:w??k,isStreaming:C,isIncognito:h})})]})})}])}]);