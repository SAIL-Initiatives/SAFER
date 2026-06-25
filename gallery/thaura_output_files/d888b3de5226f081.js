(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,94862,t=>{"use strict";var e=t.i(66723),o=t.i(46650);t.i(30133);var r=t.i(1760),i=t.i(41904),a=t.i(25820),n=t.i(48408);let l=`
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
`;async function s(t,e={}){let{title:o="Artifact"}=e,r=document.title;document.title=o;let i=t.cloneNode(!0);i.querySelectorAll("button").forEach(t=>t.remove()),i.querySelectorAll("[data-copy-button], .copy-button, [data-interactive]").forEach(t=>t.remove()),i.querySelectorAll('[style*="animation"]').forEach(t=>{t.style.animation="none"}),i.querySelectorAll("[style]").forEach(t=>{t.style.removeProperty("height"),t.style.removeProperty("max-height"),t.style.removeProperty("overflow"),t.style.removeProperty("overflow-y"),t.style.removeProperty("overflow-x")}),i.querySelectorAll('mjx-container, mjx-container *, [class*="MathJax"], [class*="mjx"]').forEach(t=>{t.removeAttribute("style")});for(let t of[i,...Array.from(i.querySelectorAll("[class]"))]){let e=(t.getAttribute("class")?.split(/\s+/)||[]).filter(t=>t.startsWith("hljs")||t.startsWith("MathJax")||t.startsWith("mjx")||t.startsWith("math-"));e.length>0?t.setAttribute("class",e.join(" ")):t.removeAttribute("class")}let a=function(){let t=[];for(let e of Array.from(document.styleSheets))try{if(e.cssRules)for(let o of Array.from(e.cssRules)){let e=o.cssText;(e.includes(".hljs")||e.includes("mjx-")||e.includes(".MathJax")||e.includes("@font-face"))&&t.push(e)}}catch{}return t.join("\n")}(),n=`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${o}</title>
    <!-- Load Bricolage Grotesque (app font) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap" rel="stylesheet">
    <style>
      /* Essential styles (syntax highlighting, MathJax) */
      ${a}

      /* Print-specific styles (provides all typography) */
      ${l}
    </style>
  </head>
  <body>
    <div class="print-content">
      ${i.innerHTML}
    </div>
  </body>
</html>
`,c=document.createElement("iframe");c.style.cssText="position:fixed;left:-9999px;top:0;width:800px;height:600px;border:0;visibility:hidden;",document.body.appendChild(c);let m=c.contentDocument||c.contentWindow?.document;if(!m)throw document.body.removeChild(c),Error("Failed to access iframe document");m.open(),m.write(n),m.close();let p=!1,d=()=>{if(!p){p=!0;try{c.contentWindow?.focus(),c.contentWindow?.print()}catch(t){console.error("Print error:",t)}}};await new Promise(t=>{c.onload=()=>{setTimeout(()=>{d(),t()},300)},setTimeout(()=>{d(),t()},800)}),setTimeout(()=>{document.title=r,c.parentNode&&document.body.removeChild(c)},2e3)}var c=t.i(8796),m=t.i(39843),p=t.i(17473),d=t.i(44229),h=t.i(64158),x=t.i(37593),f=t.i(26782),g=t.i(31628),u=t.i(15458),b=t.i(73039),y=t.i(72033),j=t.i(94498);let k=({artifactId:t,artifactTitle:l,onClose:k,streamingContent:w,isStreaming:v=!1,isIncognito:T=!1})=>{let{t:C}=(0,b.useTranslation)(),N=(0,y.useCapacitor)(),[A,S]=(0,o.useState)("loading"),[E,M]=(0,o.useState)(""),[P,z]=(0,o.useState)(!1),[q,W]=(0,o.useState)(!1),[L,B]=(0,o.useState)(!1),[F,V]=(0,o.useState)(!1),J=(0,o.useRef)(null),R=(0,o.useRef)(null),H=(0,o.useRef)(null),D=(0,o.useRef)(0),{scrollRef:O,isScrolledFromTop:I}=(0,u.useScrollEdges)();(0,o.useEffect)(()=>{let e=++D.current;if(void 0!==w){M(w),S("loaded");return}if(!t)return;let o=n.streamingArtifactStore.getArtifact(t);if(o?.content){M(o.content),S("loaded");return}S("loading"),M(""),z(!1),(async()=>{try{let o=await (0,a.getArtifactContent)(t);if(e!==D.current)return;M("string"==typeof o?o:""),S("loaded")}catch(t){if(e!==D.current)return;console.error("Error loading artifact content:",t),S("error")}})()},[t,w]),(0,o.useEffect)(()=>{if("loaded"!==A)return void z(!1);let t=window.requestAnimationFrame(()=>{z(!0)});return()=>{window.cancelAnimationFrame(t)}},[A]),(0,o.useEffect)(()=>()=>{J.current&&clearTimeout(J.current),R.current&&clearTimeout(R.current)},[]);let U=async()=>{try{await navigator.clipboard.writeText(E),W(!0),J.current&&clearTimeout(J.current),J.current=setTimeout(()=>W(!1),2e3)}catch(t){console.error("Failed to copy text:",t)}},$=async()=>{if(t)try{let e=await (0,a.generateShareLink)(t);if(N)return void await j.Share.share({title:C("common.share"),url:e});await navigator.clipboard.writeText(e),B(!0),R.current&&clearTimeout(R.current),R.current=setTimeout(()=>B(!1),2e3)}catch(t){"AbortError"!==t.name&&console.error("Failed to generate share link:",t)}},_=async()=>{if(H.current&&!v){V(!0);try{await s(H.current,{title:l||"Artifact"})}catch(t){console.error("Failed to generate PDF:",t)}finally{V(!1)}}},G="loaded"===A;return(0,e.jsxs)("div",{className:"h-full flex flex-col bg-background md:bg-white dark:bg-background-dark md:dark:bg-[#30302e]",children:[(0,e.jsx)("div",{className:"flex-shrink-0 relative w-full h-14",children:(0,e.jsx)(g.TooltipProvider,{children:(0,e.jsxs)("div",{className:"absolute top-4 right-4 flex items-center gap-2",children:[(0,e.jsxs)(g.Tooltip,{children:[(0,e.jsx)(g.TooltipTrigger,{asChild:!0,children:(0,e.jsxs)(c.Button,{variant:"ghost",size:"icon",className:"h-9 w-9 md:h-8 md:w-8 md:hover:bg-primary md:dark:hover:bg-primary-dark",onClick:U,disabled:v,children:[q?(0,e.jsx)(d.Check,{className:"text-black dark:text-textWarm"}):(0,e.jsx)(p.Copy,{className:"text-black dark:text-textWarm"}),(0,e.jsx)("span",{className:"sr-only",children:q?C("markdownViewer.copied"):C("markdownViewer.copy")})]})}),(0,e.jsx)(g.TooltipContent,{side:"bottom",className:"hidden md:block",children:(0,e.jsx)("p",{children:q?C("markdownViewer.copied"):C("markdownViewer.copy")})})]}),(0,e.jsxs)(g.Tooltip,{children:[(0,e.jsx)(g.TooltipTrigger,{asChild:!0,children:(0,e.jsxs)(c.Button,{variant:"ghost",size:"icon",className:"h-9 w-9 md:h-8 md:w-8 md:hover:bg-primary md:dark:hover:bg-primary-dark",onClick:$,disabled:v,children:[L?(0,e.jsx)(d.Check,{className:"text-black dark:text-textWarm"}):(0,e.jsx)(h.Link,{className:"text-black dark:text-textWarm"}),(0,e.jsx)("span",{className:"sr-only",children:L?C("shareChat.linkCopied"):C("common.share")})]})}),(0,e.jsx)(g.TooltipContent,{side:"bottom",className:"hidden md:block",children:(0,e.jsx)("p",{children:L?C("shareChat.linkCopied"):C("shareChat.shareViaLink")})})]}),(0,e.jsxs)(g.Tooltip,{children:[(0,e.jsx)(g.TooltipTrigger,{asChild:!0,children:(0,e.jsxs)(c.Button,{variant:"ghost",size:"icon",className:"hidden md:flex h-9 w-9 md:h-8 md:w-8 md:hover:bg-primary md:dark:hover:bg-primary-dark",onClick:_,disabled:v||F,children:[F?(0,e.jsx)(i.Spinner,{size:"sm"}):(0,e.jsx)(x.DownloadSimple,{className:"text-black dark:text-textWarm"}),(0,e.jsx)("span",{className:"sr-only",children:C("markdownViewer.downloadPdf")})]})}),(0,e.jsx)(g.TooltipContent,{side:"bottom",className:"hidden md:block",children:(0,e.jsx)("p",{children:F?C("markdownViewer.generating"):C("markdownViewer.downloadPdf")})})]}),k&&(0,e.jsxs)(g.Tooltip,{children:[(0,e.jsx)(g.TooltipTrigger,{asChild:!0,children:(0,e.jsxs)(c.Button,{variant:"ghost",size:"icon",className:"h-9 w-9 md:h-8 md:w-8 md:hover:bg-primary md:dark:hover:bg-primary-dark",onClick:()=>{k&&k()},children:[(0,e.jsx)(m.X,{className:"text-black dark:text-textWarm"}),(0,e.jsx)("span",{className:"sr-only",children:C("artifact.closeArtifact")})]})}),(0,e.jsx)(g.TooltipContent,{side:"bottom",className:"hidden md:block",children:(0,e.jsx)("p",{children:C("artifact.closeArtifact")})})]})]})})}),G?(0,e.jsxs)("div",{className:"relative flex-1 min-h-0 overflow-hidden flex flex-col [--scroll-fade-bg:var(--color-background)] md:[--scroll-fade-bg:#ffffff] dark:[--scroll-fade-bg:var(--color-background-dark)] md:dark:[--scroll-fade-bg:#30302e]",children:[(0,e.jsx)(u.ScrollEdgeFade,{edge:"top",visible:I}),(0,e.jsx)("div",{ref:O,className:(0,f.cn)("flex-1 min-h-0 overflow-y-auto transition-opacity duration-200 ease-out",P?"opacity-100":"opacity-0"),style:{WebkitOverflowScrolling:"touch",touchAction:"auto",overscrollBehavior:"contain",userSelect:"text",WebkitUserSelect:"text"},children:(0,e.jsx)("div",{ref:H,dir:"auto",children:(0,e.jsx)(r.Markdown,{content:E,className:"px-4 md:px-[max(64px,calc(50%-350px))] pt-4 pb-72",animated:v})})})]}):"error"===A?(0,e.jsx)("div",{className:"flex-1 flex items-center justify-center",children:(0,e.jsx)("p",{className:"text-red-500 dark:text-red-400",children:C("artifact.failedToLoad")})}):(0,e.jsx)("div",{className:"flex-1 relative",children:(0,e.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,e.jsx)(i.Spinner,{size:"lg"})})})]})};k.displayName="MarkdownViewer",t.s(["MarkdownViewer",0,k],94862)}]);