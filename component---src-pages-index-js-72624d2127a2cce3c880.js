"use strict";(self.webpackChunknutrigenomics=self.webpackChunknutrigenomics||[]).push([[678],{3204:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return E},P:function(){return v},S:function(){return R},_:function(){return l},a:function(){return s},b:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,l,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],u=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(u,s({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=l(e,g);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=l(e,h);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,s({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const b=["fallback"],v=function(e){let{fallback:t}=e,a=l(e,b);return t?r.createElement(y,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,s({},e)),r.createElement("noscript",null,r.createElement(y,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const k=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:k},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],x=new Set;let S,_;const I=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:m,onStartLoad:u,onLoad:p,onError:g}=e,h=l(e,L);const{width:f,height:y,layout:w}=n,b=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,y,w),{style:v,className:E}=b,k=l(b,C),N=(0,r.useRef)(),I=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const T=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,f,y);return(0,r.useEffect)((()=>{S||(S=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void x.add(I);if(_&&x.has(I))return;let t,r;return S.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;N.current&&(N.current.innerHTML=a(s({isLoading:!0,isLoaded:x.has(I),image:n},h)),x.has(I)||(t=requestAnimationFrame((()=>{N.current&&(r=l(N.current,I,x,i,u,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{x.has(I)&&_&&(N.current.innerHTML=_(s({isLoading:x.has(I),isLoaded:x.has(I),image:n},h)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},k,{style:s({},v,i,{backgroundColor:c}),className:E+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));T.propTypes=N,T.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],j=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),A={src:i().string.isRequired,alt:k,width:j,height:j,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(z=T,function(e){let{src:t,__imageData:a,__error:n}=e,i=l(e,O);return n&&console.warn(n),a?r.createElement(z,s({image:a},i)):(console.warn("Image not loaded",t),null)});var z;R.displayName="StaticImage",R.propTypes=A},6563:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c},default:function(){return o}});var r=a(7294),n=a(3723),i=a(3614),s=a.n(i),l=a.p+"static/bgindex-9d1b025b212eaf4612b1aa0bb4b26bf7.mp4";var o=()=>{const e=(0,r.useRef)(null),t=(0,r.useRef)(null);return(0,r.useEffect)((()=>(t.current=new(s())(e.current,{strings:["...",'I\'m <span class="highlight">Sirisak Chantanate</span>',"Nutrigenomics Lover",'Also I\'m <span class="highlight">Networker</span> <i class="fas fa-globe-asia"></i>','I love <span class="highlight">sharing health knowledge <3</span>'],typeSpeed:45,backSpeed:50,loop:!0}),()=>{t.current.destroy()})),[]),r.createElement(r.Fragment,null,r.createElement("div",{className:"overflow-wrap"},r.createElement("section",{id:"home",className:"flex section--dark"},r.createElement("div",{className:"bg-video"},r.createElement("video",{className:"bg-video__content",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},r.createElement("source",{src:l,type:"video/mp4"}))),r.createElement("div",{className:"flex"},r.createElement("div",{className:"profile"},r.createElement("a",{"data-a11y":"false","aria-label":"Link to https://openmymai.github.io/nutrigenomics",href:"https://openmymai.github.io/nutrigenomics",className:""},r.createElement(n.S,{className:"profile__image",src:"../images/me.jpeg",__imageData:a(7069)})),r.createElement("div",{className:"profile__social-group"},r.createElement("span",{className:"profile__social-network"},r.createElement("a",{"data-a11y":"false","aria-label":"Link to https://www.instagram.com/neutronix/",href:"https://www.instagram.com/neutronix/",className:""},r.createElement("i",{className:"fab fa-instagram"}))),r.createElement("span",{className:"profile__social-network"},r.createElement("a",{"data-a11y":"false","aria-label":"Link to https://www.linkedin.com/in/sirisak-chantanate-b0b786111/",href:"https://www.linkedin.com/in/sirisak-chantanate-b0b786111/",className:""},r.createElement("i",{className:"fab fa-linkedin"}))),r.createElement("span",{className:"profile__social-network"},r.createElement("a",{"data-a11y":"false","aria-label":"Link to https://github.com/openmymai",href:"https://github.com/openmymai",className:""},r.createElement("i",{className:"fab fa-github"}))),r.createElement("span",{className:"profile__social-network"},r.createElement("a",{"data-a11y":"false","aria-label":"Link to https://openmymai.github.io/nutrigenomics",href:"https://protandimth.gtsb.io/",className:""},r.createElement("i",{className:"fas fa-globe-asia"}))))),r.createElement("h1",null,r.createElement("div",{className:"text"},"Hello,")),r.createElement("h1",null,r.createElement("div",{className:"text"},r.createElement("span",{style:{whiteSpace:"pre"},ref:e})))))))};const c=()=>r.createElement(r.Fragment,null,r.createElement("title",null,"I am Sirisak Chantanate"),r.createElement("meta",{itemprop:"name",content:"Sirisak Chantanate"}),r.createElement("meta",{name:"Description",content:"Nutrigenomics lover, I really love share the health knowledge."}),r.createElement("meta",{name:"twitter:title",content:"Sirisak Chantanate"}),r.createElement("meta",{name:"twitter:description",content:"Nutrigenomics lover, I really love share the health knowledge."}),r.createElement("meta",{property:"og:title"}),r.createElement("meta",{property:"og:url",content:"https://openmymai.github.io/"}),r.createElement("meta",{property:"og:description",content:"Nutrigenomics lover, I really love share the health knowledge."}))},7069:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8a898","images":{"fallback":{"src":"/static/9421663537978634f65d4e046575a4d7/19822/me.jpg","srcSet":"/static/9421663537978634f65d4e046575a4d7/aa131/me.jpg 262w,\\n/static/9421663537978634f65d4e046575a4d7/556c1/me.jpg 523w,\\n/static/9421663537978634f65d4e046575a4d7/19822/me.jpg 1046w","sizes":"(min-width: 1046px) 1046px, 100vw"},"sources":[{"srcSet":"/static/9421663537978634f65d4e046575a4d7/2e514/me.webp 262w,\\n/static/9421663537978634f65d4e046575a4d7/1ee7f/me.webp 523w,\\n/static/9421663537978634f65d4e046575a4d7/6741f/me.webp 1046w","type":"image/webp","sizes":"(min-width: 1046px) 1046px, 100vw"}]},"width":1046,"height":1043}')}}]);
//# sourceMappingURL=component---src-pages-index-js-72624d2127a2cce3c880.js.map