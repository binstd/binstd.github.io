(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{254:function(e,n,t){"use strict";t.r(n);t(397);var r=t(317),a=t.n(r),i=t(0),o=t.n(i),l=t(293),c=t.n(l),s=t(363),u=t(294),d=t(256),h=t.n(d);function m(){var e=a()(["\n  margin: 0 0 1em 0;\n  padding: 0;\n  font-weight: 600;\n  "," a {\n    color: inherit;\n    text-decoration: none;\n\n    &.active {\n      color: ",";\n      font-weight: 600;\n    }\n  }\n"]);return m=function(){return e},e}function p(){var e=a()(["\n  list-style: none;\n  padding: 0;\n  margin-top: ",";\n"]);return p=function(){return e},e}function f(){var e=a()(["\n  position: fixed;\n  padding: 0 2em 4em 2em;\n  height: 100vh;\n  width: 20%;\n  overflow: auto;\n  border-right: 1px solid #f0f0f0;\n\n  @media "," {\n    width: 100%;\n    position: relative;\n    height: auto;\n    border-right: 0;\n    border-bottom: 1px solid #f0f0f0;\n  }\n"]);return f=function(){return e},e}var g=u.b.nav(f(),function(e){return e.theme.mobile}),b=u.b.ul(p(),function(e){return e.inner?"1em":"2em"}),v=u.b.li(m(),function(e){return e.inner?"\n  font-weight: 400;\n  font-size: .9rem;\n  margin-left: 1em;\n  margin-bottom: .75em;":""},function(e){return e.theme.colors.primary}),y=function(e){var n=e.currentPath,t=e.nav;return o.a.createElement(g,null,o.a.createElement(b,null,t.map(function(e){return o.a.createElement(v,{key:e.path},o.a.createElement("a",{href:e.path},e.title),o.a.createElement(b,{inner:!0},e.children.map(function(e){return o.a.createElement(v,{key:e.path,inner:!0},o.a.createElement("a",{href:e.path,className:h()({active:n===e.path})},e.title))})))})))},w=t(407),E=t.n(w);function k(){var e=a()(["\n  margin: 1em 0 1em 0;\n  border-top: 2px dashed #f0f0f0;\n"]);return k=function(){return e},e}function x(){var e=a()(["\n  margin: 0 0 0.5rem ","rem;\n\n  a {\n    color: inherit;\n    font: inherit;\n    text-decoration: none;\n  }\n"]);return x=function(){return e},e}function S(){var e=a()(["\n  padding: 2rem 0;\n  display: block;\n  color: #666;\n  font-size: 0.875rem;\n  list-style: none;\n"]);return S=function(){return e},e}function O(){var e=a()(["\n  position: fixed;\n  top: 0;\n  padding: 64px 2em 2em 2em;\n  width: 20%;\n  overflow: auto;\n  right: 0;\n\n  @media "," {\n    display: none;\n  }\n"]);return O=function(){return e},e}var M=u.b.aside(O(),function(e){return e.theme.mobile}),C=u.b.ul(S()),j=u.b.li(x(),function(e){return e.depth-2});j.defaultProps={depth:2};var A=u.b.li(k()),T=function(e){var n=e.headings,t=e.extras,r=new E.a,a=n.filter(function(e){return e.depth<=3});return a.length+Object(s.keys)(t).length<3?o.a.createElement("aside",null):o.a.createElement(M,null,o.a.createElement(C,null,a.map(function(e){var n=e.value,t=e.depth,a=r.slug(n);return o.a.createElement(j,{key:a,depth:t},o.a.createElement("a",{href:"#"+a},n))}),Object(s.isEmpty)(t)?"":o.a.createElement(A,null),Object(s.map)(t,function(e,n){return o.a.createElement(j,{key:e},o.a.createElement("a",{href:"#"+e},n))})))},I=(t(409),{monospace:"'Source Code Pro', monospace",tablet:"only screen and (max-width: 800px)",mobile:"only screen and (max-width: 650px)",colors:{primary:"#2097e4",text:"#333"}}),N=function(e){var n=e.children;return o.a.createElement("div",null,o.a.createElement(c.a,{title:"HEML"}),o.a.createElement(u.a,{theme:I},n))},z=t(275),L=t(123),P=t.n(L),D=t(122),R=t.n(D),B=t(75);function J(){var e=a()(["\n  padding: 0 0 0.25em 0;\n  margin-bottom: 1.5em;\n  border-bottom: 2px solid #f0f0f0;\n\n  h1 {\n    margin-top: 0;\n    margin-bottom: 0.5em;\n  }\n"]);return J=function(){return e},e}function F(){var e=a()(["\n  /**\n   * Code 💻\n   */\n  code {\n    background: #f4f7fb;\n    padding: 0 0.25em;\n    font-size: 0.95em;\n    border-radius: 3px;\n    font-family: ",";\n  }\n\n  .gatsby-highlight pre {\n    background: #f9fbfd;\n    border: 1px solid #ececec;\n    border-radius: 3px;\n    padding: 0.5em 1em;\n    overflow: auto;\n    margin: 0 0 1em 0;\n  }\n\n  .gatsby-highlight code {\n    background: none;\n    color: inherit;\n    padding: 0;\n    border-radius: 0;\n  }\n\n  /**\n   * Tables \n   */\n  table {\n    border: 1px solid #ececec;\n    overflow: hidden;\n    border-collapse: separate;\n    border-spacing: 0;\n    width: 100%;\n    margin: 1em 0;\n    border-radius: 3px;\n  }\n\n  th {\n    font-weight: 600;\n  }\n\n  h3 {\n    margin: 0.5em 0;\n  }\n\n  th:empty {\n    display: none;\n  }\n\n  td,\n  th {\n    text-align: left;\n    padding: 0.375em 0.75em 0.375em 0.75em;\n  }\n\n  td {\n    line-height: 1.75em;\n    vertical-align: top;\n  }\n\n  .bordered-table table {\n    border-width: 0 1px 1px 0;\n  }\n\n  .bordered-table td,\n  .bordered-table th {\n    border: 1px solid #ececec;\n    border-right: 0;\n    border-bottom-width: 0;\n  }\n\n  .fixed-table table {\n    table-layout: fixed;\n  }\n\n  .attributes-table td {\n    line-height: 1.5em;\n  }\n\n  .attributes-table td:first-child {\n    text-align: right;\n    line-height: 1em;\n  }\n\n  .attributes-table strong {\n    white-space: nowrap;\n  }\n\n  small {\n    color: #888;\n    display: block;\n    margin-top: 0.25em;\n    font-size: 0.875em;\n    font-weight: 400;\n    line-height: 1em;\n  }\n\n  img {\n    display: block;\n    margin: 2rem auto;\n    max-width: 600px;\n    width: 98%;\n  }\n"]);return F=function(){return e},e}function H(){var e=a()(["\n  float: left;\n  width: 60%;\n  margin-left: 20%;\n  padding: 2em 4em;\n\n  @media "," {\n    width: 100%;\n    margin: 0;\n  }\n"]);return H=function(){return e},e}var _=u.b.main(H(),function(e){return e.theme.mobile}),K=u.b.div(F(),function(e){return e.theme.monspace}),q=u.b.header(J()),G=Object(B.createMuiTheme)({palette:{primary:{light:"#2196f3",main:"#2196f3",dark:"#2196f3",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},typography:{useNextVariants:!0},shadows:Array(25).fill("none")});n.default=function(e){var n=e.pageContext,t=e.location,r=n.page,a=n.nav,i=r.frontmatter.description?o.a.createElement("p",null,r.frontmatter.description):"",l=Object(s.pickBy)(Object(s.mapKeys)(Object(s.pick)(r.frontmatter,["tests","issues","edit"]),function(e,n){switch(n){case"tests":return"Litmus Tests";case"issues":return"Report a Bug";case"edit":return"Edit this Page";default:console.log("metamask")}}),s.identity);return o.a.createElement(N,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(R.a,null),o.a.createElement(c.a,{title:"",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(P.a,{theme:G},o.a.createElement(z.a,null),o.a.createElement("div",{style:{marginTop:"50px"}},o.a.createElement(c.a,null,o.a.createElement("title",null,r.frontmatter.title," · HEML ")),o.a.createElement(y,{nav:a,currentPath:t.pathname}),o.a.createElement(_,null,o.a.createElement(q,null,o.a.createElement("h1",null,r.frontmatter.title),i),o.a.createElement(K,{dangerouslySetInnerHTML:{__html:r.html}})),o.a.createElement(T,{headings:r.headings,extras:l})))))}},261:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r="https://api.binstd.com";r="https://api.binstd.com",console.log("server_url:",r)},268:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r,a=t(318);"undefined"!=typeof window&&(r=new a(window.ethereum||new a.HttpProvider("https://ropsten.infura.io/v3/0045c2ce288a4e649a8f39f3d19446b4")))},275:function(e,n,t){"use strict";t(53);var r=t(9),a=t.n(r),i=t(0),o=t.n(i),l=t(1),c=t.n(l),s=t(75),u=t(345),d=t.n(u),h=t(346),m=t.n(h),p=t(258),f=t.n(p),g=t(259),b=t.n(g),v=t(310),y=t.n(v),w=t(21),E=t(343),k=t.n(E),x=t(338),S=t.n(x),O=t(335),M=t.n(O),C=t(337),j=t.n(C),A=t(344),T=t.n(A),I=t(268),N=t(28),z=t.n(N),L=t(306),P=function(){function e(){this.id=Math.random(),this.uid=void 0,this.username=void 0,this.telephone=void 0,this.address=void 0,this.logintype=void 0,this.verifyed=void 0,this.auth=void 0,this.choossedmenu=void 0}var n=e.prototype;return n.allSet=function(e){e.uid&&(this.uid=e.uid),e.username&&(this.username=e.username),e.telephone&&(this.telephone=e.telephone),e.address&&(this.address=e.address),e.verifyed&&(this.verifyed=e.verifyed),e.logintype&&(this.logintype=e.logintype),e.auth&&(this.auth=e.auth)},n.uidSet=function(e){this.uid=e},n.usernameSet=function(e){this.username=e},n.telephoneSet=function(e){this.telephone=e},n.addressSet=function(e){this.address=e},n.logintypeSet=function(e){this.logintype=e},n.verifyedSet=function(e){this.verifyed=e},n.authSet=function(e){this.auth=e},n.clearAll=function(){this.uid="",this.username="",this.telephone="",this.address="",this.logintype="",this.verifyed="",this.auth=""},z()(e,[{key:"getAllData",get:function(){return{uid:this.uid,username:this.username,telephone:this.telephone,address:this.address,verifyed:this.verifyed,logintype:this.logintype,auth:this.auth}}}]),e}();Object(L.f)(P,{uid:L.k,username:L.k,telephone:L.k,address:L.k,verifyed:L.k,logintype:L.k,auth:L.k,choossedmenu:L.k});var D=new P,R=t(307),B=t(261),J=t(273),F=t.n(J),H=Object(R.a)(function(e){function n(n){var t;return(t=e.call(this,n)||this).handleProfileMenuOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleMenuClose=function(){t.setState({anchorEl:null}),t.handleMobileMenuClose()},t.handleMobileMenuOpen=function(e){t.setState({mobileMoreAnchorEl:e.currentTarget})},t.handleMobileMenuClose=function(){t.setState({mobileMoreAnchorEl:null})},t.handleSignMessage=function(e){var n=e.publicAddress,r=e.nonce,a=e.id;return t.setState({id:a}),new Promise(function(e,t){return window.web3.personal.sign(window.web3.fromUtf8("I am signing: "+r),n,function(r,a){return r?t(r):(console.log("\n signature:",a),e({publicAddress:n,signature:a}))})})},t.handleAuthenticate=function(e){var n=e.publicAddress,t=e.signature;return fetch(B.a+"/api/auth",{body:JSON.stringify({publicAddress:n,signature:t}),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()})},t.handleLoggedIn=function(e){var n={logintype:"ETH",address:window.web3.eth.accounts[0].toLowerCase(),auth:e,id:t.state.id};D.allSet(n),localStorage.setItem("userinfo",JSON.stringify(n)),console.log(D.logintype),t.setState({auth:e}),window.location.reload(!0)},t.handleLoggedOut=function(){localStorage.removeItem("userinfo"),localStorage.removeItem("userdapp"),D.clearAll(),t.setState({auth:void 0}),window.location.reload(!0)},t.handleSignup=function(e){return fetch(B.a+"/api/users",{body:JSON.stringify({publicAddress:e}),headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},method:"post"}).then(function(e){return e.json()})},t.state={userinfo:{},anchorEl:null,mobileMoreAnchorEl:null,network:"",address:""},t}a()(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this;if(void 0!==window.ethereum&&(I.a.net_version().then(function(n){e.setState({networkId:n})}),localStorage.getItem("userinfo"))){var n=JSON.parse(localStorage.getItem("userinfo"));this.setState({userinfo:n})}},t.login=function(){var e=this;void 0!==window.ethereum&&window.ethereum.enable().then(function(n){console.log(n[0]),e.setState({address:n[0]})})},t.payToken=function(){var e=this;D.address||D.logintype||console.log("没有登录"),void 0!==window.ethereum&&window.ethereum.enable().then(function(n){var t=n[0];fetch(B.a+"/api/users?publicAddress="+t).then(function(e){return e.json()}).then(function(n){return n.length?n[0]:e.handleSignup(t)}).then(e.handleSignMessage).then(e.handleAuthenticate).then(e.handleLoggedIn).catch(function(e){window.alert(e)})})},t.render=function(){var e=this,n=this.state,t=n.userinfo,r=n.anchorEl,a=n.mobileMoreAnchorEl,i=n.networkId,l=this.props.classes,c=Boolean(r),s=Boolean(a);"{}"===JSON.stringify(t)?o.a.createElement(b.a,{color:"inherit",onClick:function(){return e.payToken()}}," 登录 "):o.a.createElement("div",null,o.a.createElement("div",{className:l.sectionDesktop},o.a.createElement(b.a,{color:"inherit",onClick:function(){return Object(w.b)("/dapp/"+t.address)}}," dapp "),o.a.createElement(y.a,{"aria-owns":c?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},o.a.createElement(M.a,null))),o.a.createElement("div",{className:l.sectionMobile},o.a.createElement(y.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},o.a.createElement(j.a,null))));var u,h=o.a.createElement(S.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:this.handleMenuClose},o.a.createElement(k.a,{onClick:function(){return Object(w.b)("/userinfo")}},"个人中心"),o.a.createElement(k.a,{onClick:function(){return e.handleLoggedOut()}},"退出")),p=o.a.createElement(S.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:this.handleMobileMenuClose},o.a.createElement(k.a,{onClick:function(){return Object(w.b)("/userinfo")}},o.a.createElement("p",null,"个人中心")),o.a.createElement(k.a,{onClick:function(){return Object(w.b)("/dapp/"+t.address)}},o.a.createElement("p",null,"我的Dapp")),o.a.createElement(k.a,{onClick:function(){return e.handleLoggedOut()}},o.a.createElement("p",null,"退出"))),g="";switch(i){case"1":g=l.colorMain,u="main";break;case"2":g="",u="morden";break;case"3":g=l.colorRopsten,u="ropsten";break;case"4":g=l.colorRinkeby,u="rinkeby";break;case"42":g=l.colorKovan,u="kovan";break;default:u=" "}var v=o.a.createElement("div",null,o.a.createElement(b.a,{color:"inherit",onClick:function(){return e.login()}},o.a.createElement(T.a,{className:g,style:{fontSize:15,marginRight:"5px"}})," ",u));return o.a.createElement("div",{className:l.root},o.a.createElement(d.a,{position:"fixed",className:l.appBar},o.a.createElement(m.a,null,o.a.createElement("div",{className:l.sectionDesktop},o.a.createElement("img",{src:"https://programmerinnfile.b0.upaiyun.com/community/10001/20180814/yzdXjjAI4g.png",style:{height:30,width:108,margin:"0 35px 5px 0"}})),o.a.createElement(f.a,{variant:"h6",color:"inherit",className:l.grow},o.a.createElement(b.a,{color:"inherit",onClick:function(){return Object(w.b)("/")}},"首页"),o.a.createElement(F.a,{href:"https://www.imbit.cn/",target:"_blank",rel:"noopener",style:{color:"white",textDecoration:"none"}},o.a.createElement(b.a,{color:"inherit"},"IMbit"))),o.a.createElement("div",{className:l.sectionDesktop},v)),h,p))},n}(o.a.Component));H.propTypes={classes:c.a.object.isRequired};n.a=Object(s.withStyles)(function(e){var n,t;return{root:{width:"100%"},appBar:{zIndex:e.zIndex.drawer+1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},sectionDesktop:(n={display:"none"},n[e.breakpoints.up("md")]={display:"flex"},n),sectionMobile:(t={display:"flex"},t[e.breakpoints.up("md")]={display:"none"},t),colorMain:{color:"#1abc9c"},colorRopsten:{color:"#FF3E96"},colorRinkeby:{color:"#FFD700"},colorKovan:{color:"#690496"}}})(H)},320:function(e,n){},409:function(e,n,t){}}]);
//# sourceMappingURL=component---src-templates-documentation-js-9037630b04ec137406f5.js.map