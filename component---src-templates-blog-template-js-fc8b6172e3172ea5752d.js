(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{255:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(278),c=(n(275),n(316)),i=n(269),u=n(121),l=n.n(u),s=(n(49),n(553)),f=n.n(s),p=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var d={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},g={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},y=["style","script"],h=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,k=/mailto:/i,v=/\n{2,}$/,b=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,x=/^ *> ?/gm,S=/^ {2,}\n/,w=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,E=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,O=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,$=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,j=/^(?:\n *)*\n/,A=/\r\n?/g,B=/^\[\^(.*)\](:.*)\n/,C=/^\[\^(.*)\]/,z=/\f/g,I=/^\s*?\[(x|\s)\]/,_=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,L=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,T=/^ *<([A-Za-z][^ >\/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/,N=/&([a-z]+);/g,P=/^<!--.*?-->/,M=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,R=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,Z=/^\{.*\}$/,D=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,F=/^<([^ >]+@[^ >]+)>/,U=/^<([^ >]+:\/[^ >]+)>/,q=/ *\n+$/,G=/(?:^|\n)( *)$/,J=/-([a-z])?/gi,Q=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,V=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,W=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,H=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,K=/^\[([^\]]*)\] ?\[([^\]]*)\]/,X=/(\[|\])/g,Y=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,ee=/\t/g,te=/(^ *\||\| *$)/g,ne=/^ *:-+: *$/,re=/^ *:-+ *$/,ae=/^ *-+: *$/,oe=/ *\| */,ce=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ie=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ue=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,le=/^\\([^0-9A-Za-z\s])/,se=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,fe=/(^\n+|(\n|\s)+$)/g,pe=/^([ \t]*)/,me=/\\([^0-9A-Z\s])/gi,de=/^( *)((?:[*+-]|\d+\.)) +/,ge=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,ye=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,he=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ke=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ve=[b,O,E,_,L,T,P,R,ge,ye,Q,V];function be(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function xe(e){return ae.test(e)?"right":ne.test(e)?"center":re.test(e)?"left":null}function Se(e,t,n){n.inline=!0;var r=function(e,t,n){return e[1].replace(te,"").trim().split(oe).map(function(e){return t(e,n)})}(e,t,n),a=function(e){return e[2].replace(te,"").trim().split(oe).map(xe)}(e),o=function(e,t,n){return e[3].replace(te,"").trim().split("\n").map(function(e){return e.replace(te,"").split(oe).map(function(e){return t(e.trim(),n)})})}(e,t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function we(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Ee(e){function t(r,a){for(var o=[],c="";r;)for(var i=0;i<n.length;){var u=n[i],l=e[u],s=l.match(r,a,c);if(s){var f=s[0];r=r.substring(f.length);var p=l.parse(s,t,a);null==p.type&&(p.type=u),o.push(p),c=f;break}i++}return o}var n=Object.keys(e);return n.sort(function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a}),function(e,n){return t(function(e){return e.replace(A,"\n").replace(z,"").replace(ee,"    ")}(e),n)}}function Oe(e){return function(t,n){return n.inline?e.exec(t):null}}function $e(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function je(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Ae(e){return function(t){return e.exec(t)}}function Be(e){try{if(decodeURIComponent(e).match(/^\s*javascript:/i))return null}catch(e){return null}return e}function Ce(e){return e.replace(me,"$1")}function ze(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ie(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function _e(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function Le(e,t,n){return{content:ze(t,e[1],n)}}function Te(){return{}}function Ne(){return null}function Pe(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Me(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Re(e,t){var n=Me(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":m(n))&&"render"in n?n:Me(t,e+".component",e):e}var Ze=1,De=2,Fe=3,Ue=4,qe=5;function Ge(e,t){function n(e,n){for(var r=Me(t.overrides,e+".props",{}),a=arguments.length,o=Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];return c.apply(void 0,[Re(e,t.overrides),p({},r,n,{className:Pe(n&&n.className,r.className)||void 0})].concat(o))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===Y.test(e));var a=m(s(r?e:e.replace(fe,"")+"\n\n",{inline:r})),o=void 0;return a.length>1?o=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(o=a[0])&&(o=n("span",{key:"outer"},o)):o=n("span",{key:"outer"}),o}function o(e){var t=e.match(h);return t?t.reduce(function(e,t,n){var o=t.indexOf("=");if(-1!==o){var c=function(e){return-1!==e.indexOf("-")&&null===e.match(M)&&(e=e.replace(J,function(e,t){return t.toUpperCase()})),e}(t.slice(0,o)).trim(),i=f()(t.slice(o+1).trim()),u=d[c]||c,l=e[u]=function(e,t){return"style"===e?t.split(/;\s?/).reduce(function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,function(e){return e[1].toUpperCase()});return e[r]=t.slice(n.length+1).trim(),e},{}):(t.match(Z)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(c,i);(T.test(l)||R.test(l))&&(e[u]=a.a.cloneElement(r(l.trim()),{key:n}))}else e[d[t]||t]=!0;return e},{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||be;var c=t.createElement||a.a.createElement;var i=[],u={},l={blockQuote:{match:je(b),order:De,parse:function(e,t,n){return{content:t(e[0].replace(x,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Ae(S),order:De,parse:Te,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:je(w),order:De,parse:Te,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:je(O),order:Ze,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:je(E),order:Ze,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:$e($),order:Ue,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:je(B),order:Ze,parse:function(e){return i.push({footnote:e[2],identifier:e[1]}),{}},react:Ne},footnoteReference:{match:Oe(C),order:De,parse:function(e){return{content:e[1],target:"#"+e[1]}},react:function(e,t,r){return n("a",{key:r.key,href:Be(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:Oe(I),order:De,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:je(_),order:De,parse:function(e,n,r){return{content:ze(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:je(L),order:Ze,parse:function(e,t,n){return{content:ze(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlBlock:{match:Ae(T),order:De,parse:function(e,t,n){var r=e[3].match(pe)[1],a=new RegExp("^"+r,"gm"),c=e[3].replace(a,""),i=function(e){return ve.some(function(t){return t.test(e)})}(c)?_e:ze,u=-1!==y.indexOf(e[1]);return{attrs:o(e[2]),content:u?e[3]:i(t,c,n),noInnerParse:u,tag:e[1]}},react:function(e,t,r){return n(e.tag,p({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},htmlComment:{match:Ae(P),order:De,parse:function(){return{}},react:Ne},htmlSelfClosing:{match:Ae(R),order:De,parse:function(e){return{attrs:o(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,p({},e.attrs,{key:r.key}))}},image:{match:$e(ke),order:De,parse:function(e){return{alt:e[1],target:Ce(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Be(e.target)})}},link:{match:Oe(he),order:Ue,parse:function(e,t,n){return{content:Ie(t,e[1],n),target:Ce(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Be(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:Oe(U),order:Ze,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:Oe(D),order:Ze,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:Oe(F),order:Ze,parse:function(e){var t=e[1],n=e[1];return k.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=G.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,ye.exec(e)):null},order:De,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,c=e[0].replace(v,"\n").match(ge),i=!1;return{items:c.map(function(e,r){var a=de.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),u=e.replace(o,"").replace(de,""),l=r===c.length-1,s=-1!==u.indexOf("\n\n")||l&&i;i=s;var f,p=n.inline,m=n._list;n._list=!0,s?(n.inline=!1,f=u.replace(q,"\n\n")):(n.inline=!0,f=u.replace(q,""));var d=t(f,n);return n.inline=p,n._list=m,d}),ordered:a,start:o}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map(function(e,a){return n("li",{key:a},t(e,r))}))}},newlineCoalescer:{match:je(j),order:Ue,parse:Te,react:function(){return"\n"}},paragraph:{match:je(V),order:Ue,parse:Le,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:Oe(W),order:Ze,parse:function(e){return u[e[1]]={target:e[2],title:e[4]},{}},react:Ne},refImage:{match:$e(H),order:Ze,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Be(u[e.ref].target),title:u[e.ref].title})}},refLink:{match:Oe(K),order:Ze,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(X,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return u[e.ref]?n("a",{key:r.key,href:Be(u[e.ref].target),title:u[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:je(Q),order:De,parse:Se,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map(function(a,o){return n("th",{key:o,style:we(e,o)},t(a,r))}))),n("tbody",null,e.cells.map(function(a,o){return n("tr",{key:o},a.map(function(a,o){return n("td",{key:o,style:we(e,o)},t(a,r))}))})))}},text:{match:Ae(se),order:qe,parse:function(e){return{content:e[0].replace(N,function(e,t){return g[t]?g[t]:e})}},react:function(e){return e.content}},textBolded:{match:$e(ce),order:Fe,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:$e(ie),order:Ue,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:$e(le),order:De,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:$e(ue),order:Ue,parse:Le,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}},s=Ee(l),m=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,o=[],c=!1,i=0;i<n.length;i++){r.key=i;var u=t(n[i],r),l="string"==typeof u;l&&c?o[o.length-1]+=u:o.push(u),c=l}return r.key=a,o}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(l)),A=r(e);return i.length&&A.props.children.push(n("footer",{key:"footer"},i.map(function(e){return n("div",{id:e.identifier,key:e.identifier},e.identifier,m(s(e.footnote,{inline:!0})))}))),A}function Je(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return a.a.cloneElement(Ge(t,n),r)}var Qe=n(75),Ve=n(258),We=n.n(Ve),He={overrides:{h1:{component:function(e){return a.a.createElement(We.a,Object.assign({gutterBottom:!0,variant:"h4"},e))}},h2:{component:function(e){return a.a.createElement(We.a,Object.assign({gutterBottom:!0,variant:"h6"},e))}},h3:{component:function(e){return a.a.createElement(We.a,Object.assign({gutterBottom:!0,variant:"subtitle1"},e))}},h4:{component:function(e){return a.a.createElement(We.a,Object.assign({gutterBottom:!0,variant:"caption",paragraph:!0},e))}},p:{component:function(e){return a.a.createElement(We.a,Object.assign({paragraph:!0},e))}},li:{component:Object(Qe.withStyles)(function(e){return{listItem:{marginTop:e.spacing.unit}}})(function(e){var t=e.classes,n=l()(e,["classes"]);return a.a.createElement("li",{className:t.listItem},a.a.createElement(We.a,Object.assign({component:"span"},n)))})}}};var Ke=function(e){return a.a.createElement(Je,Object.assign({options:He},e))};function Xe(e){var t=e.data.markdownRemark,n=t.frontmatter,r=t.html;return a.a.createElement(o.a,null,a.a.createElement("div",{style:{minWidth:"300px",width:"75%",margin:"80px auto"}},a.a.createElement(i.a,{variant:"h5",gutterBottom:!0,marked:"center",align:"center"},n.title),a.a.createElement(Ke,null,r)),a.a.createElement(c.a,null))}n.d(t,"default",function(){return Xe}),n.d(t,"pageQuery",function(){return Ye});var Ye="2375692172"},553:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-fc8b6172e3172ea5752d.js.map