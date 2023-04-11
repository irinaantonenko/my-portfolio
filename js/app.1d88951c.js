(function(){var e={8242:function(e,t,a){"use strict";var n=a(9242),i=a(3396);function o(e,t,a,n,o,s){const r=(0,i.up)("main-page"),c=(0,i.up)("about-me-page"),p=(0,i.up)("experience-page"),l=(0,i.up)("projects-page"),g=(0,i.up)("contact-page");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r),(0,i.Wm)(c),(0,i.Wm)(p),(0,i.Wm)(l),(0,i.Wm)(g)])}var s=a(1728);const r={class:"main-page"},c=(0,i.uE)('<div class="main-page__content"><h2 class="main-page__subtitle">portfolio</h2><h1 class="main-page__title">Iryna Antonenko</h1><div class="main-page__text"><p class="main-page__position">FRONT-END DEVELOPER</p><a href="mailto:antonenkoirina1706@gmail.com" class="main-page__mail">email me</a></div></div><div class="main-page__image-wrap"><img src="'+s+'" alt="main-photo" class="main-page__image"></div>',2),p=[c];function l(e,t,a,n,o,s){return(0,i.wg)(),(0,i.iD)("div",r,p)}var g={name:"MainPage"},u=a(89);const _=(0,u.Z)(g,[["render",l]]);var m=_,d=a(4673);const f={class:"about-page"},h=(0,i.uE)('<div class="about-page__image-wrap"><img class="about-page__image" src="'+d+'" alt="about-photo"></div><div class="about-page__content"><h2 class="about-page__subtitle">Hello! I&#39;m an enthusiastic frontend developer.</h2><p class="about-page__text">I&#39;m fond of creating web sites from the process of writing the code to getting the finished product. </p><p class="about-page__text">Looking to be part of a friendly and professional team where I could develop my skills to achieve team results. </p></div>',2),v=[h];function b(e,t,a,n,o,s){return(0,i.wg)(),(0,i.iD)("div",f,v)}var x={name:"AboutMePage"};const j=(0,u.Z)(x,[["render",b]]);var k=j,w=a(4307);const y={class:"experience-page"},P=(0,i.uE)('<div class="experience-page__content"><h2 class="experience-page__subtitle">Background</h2><h3 class="experience-page__company">Freelance</h3><p class="experience-page__text">Front-end developer, 2022-2023</p><h3 class="experience-page__company">Moma Gifts</h3><p class="experience-page__text">Front-end developer, 2021-2022</p></div><div class="experience-page__content"><h2 class="experience-page__subtitle">Professional Skills</h2><ul class="experience-page__list" type="disc"><li class="experience-page__text">HTML&amp;CSS</li><li class="experience-page__text">Javascript</li><li class="experience-page__text">Experience with Vue.js Framework</li><li class="experience-page__text">Experience with CSS preprocessors</li><li class="experience-page__text">Experience with Bootstrap Framework</li><li class="experience-page__text">Knowledge of Git</li><li class="experience-page__text">Experience with Webpack, Gulp</li><li class="experience-page__text">Knowledge of Photoshop Adobe, Figma</li><li class="experience-page__text">Node.js</li></ul></div><div class="experience-page__image-wrap"><img class="experience-page__image" src="'+w+'" alt="about-photo"></div>',3),O=[P];function E(e,t,a,n,o,s){return(0,i.wg)(),(0,i.iD)("div",y,O)}var D={name:"AboutMePage"};const F=(0,u.Z)(D,[["render",E]]);var M=F,C=a(4095);const I={class:"contact-page"},W=(0,i.uE)('<div class="contact-page__image-wrap"><img src="'+C+'" alt="contact" class="contact-page__image"></div><div class="contact-page__content"><h2 class="contact-page__title">Contact me</h2><div class="contact-page__btns"><a href="https://www.linkedin.com/in/iryna-antonenko-75521521b/" target="_blank" class="contact-page__link"><span class="icon-linkedin"></span><p class="contact-page__text">LinkedIn</p></a><a href="https://t.me/irynaantonenko" target="_blank" class="contact-page__link"><span class="icon-telegram"></span><p class="contact-page__text">Telegram</p></a><a href="mailto:antonenkoirina1706@gmail.com" target="_blank" class="contact-page__link"><span class="icon-gmail"></span><p class="contact-page__text">Gmail</p></a><a href="https://www.youtube.com/@irynaantonenko/" target="_blank" class="contact-page__link"><span class="icon-youtube"></span><p class="contact-page__text">YouTube</p></a></div><a href="https://github.com/irinaantonenko/my-portfolio/blob/main/src/assets/resume/Iryna%20Antonenko_Front-end_developer.pdf" download="" target="_blank" class="contact-page__resume">Find my resume here</a></div>',2),T=[W];function A(e,t,a,n,o,s){return(0,i.wg)(),(0,i.iD)("div",I,T)}var Z={name:"ContactPage"};const S=(0,u.Z)(Z,[["render",A]]);var L=S;const N={class:"projects-page"},G=(0,i._)("h2",{class:"projects-page__title"},"My projects",-1),H=(0,i._)("h3",{class:"projects-page__subtitle"},"Here are some of the projects I worked on",-1),B={class:"projects-page__content"};function K(e,t,a,n,o,s){const r=(0,i.up)("projects-page-item");return(0,i.wg)(),(0,i.iD)("div",N,[G,H,(0,i._)("div",B,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.projects,(e=>((0,i.wg)(),(0,i.j4)(r,{key:e.id,project:e},null,8,["project"])))),128))])])}var V=a(7139);const R=["href"],U={class:"projects-item__image-wrap"},Y=["src"],z={class:"projects-item__subtitle"};function J(e,t,n,o,s,r){return(0,i.wg)(),(0,i.iD)("a",{target:"_blank",href:n.project.link,class:"projects-item"},[(0,i._)("div",U,[(0,i._)("img",{class:"projects-item__image",src:a(990)("./"+n.project.image),alt:"projects-photo"},null,8,Y)]),(0,i._)("p",z,(0,V.zw)(n.project.title),1)],8,R)}var q={name:"ProjectsPageItem",props:{project:{type:Object,default(){return{}}}}};const Q=(0,u.Z)(q,[["render",J]]);var X=Q,$={name:"ProjectsPage",data:()=>({projects:[{title:'Website of the creative studio "Diart"',image:"diart.jpg",id:1,link:"https://irinaantonenko.github.io/diart/templates/"},{title:"Online-shop project on Vue.js",image:"online-shop.jpg",id:2,link:"https://irinaantonenko.github.io/online-shop/#/"},{title:"Website of a psychologist",image:"psycholog.jpg",id:3,link:"https://irinaantonenko.github.io/my_project/project_CBD/dist/index.html#/homepage"},{title:'Website "Tokyo Sushi"',image:"sushi.jpg",id:4,link:"https://irinaantonenko.github.io/tokyosushibar_ua/main.html"}]}),components:{ProjectsPageItem:X}};const ee=(0,u.Z)($,[["render",K]]);var te=ee,ae={name:"App",components:{MainPage:m,AboutMePage:k,ExperiencePage:M,ContactPage:L,ProjectsPage:te}};const ne=(0,u.Z)(ae,[["render",o]]);var ie=ne;(0,n.ri)(ie).mount("#app")},990:function(e,t,a){var n={"./aboutme.jpg":4673,"./contact.jpg":4095,"./diart.jpg":530,"./experience.jpg":4307,"./main-photo.jpg":1728,"./online-shop.jpg":2228,"./psycholog.jpg":3286,"./sushi.jpg":1873};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=990},4673:function(e,t,a){"use strict";e.exports=a.p+"img/aboutme.fe62969e.jpg"},4095:function(e,t,a){"use strict";e.exports=a.p+"img/contact.7883d6ef.jpg"},530:function(e,t,a){"use strict";e.exports=a.p+"img/diart.57db9a30.jpg"},4307:function(e,t,a){"use strict";e.exports=a.p+"img/experience.b617816b.jpg"},1728:function(e,t,a){"use strict";e.exports=a.p+"img/main-photo.943ffd3d.jpg"},2228:function(e,t,a){"use strict";e.exports=a.p+"img/online-shop.4a89168e.jpg"},3286:function(e,t,a){"use strict";e.exports=a.p+"img/psycholog.a70ac549.jpg"},1873:function(e,t,a){"use strict";e.exports=a.p+"img/sushi.d7a09690.jpg"}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,o){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],o=e[l][2];for(var r=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(r=!1,o<s&&(s=o));if(r){e.splice(l--,1);var p=i();void 0!==p&&(t=p)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,i,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/my-portfolio/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,s=n[0],r=n[1],c=n[2],p=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(c)var l=c(a)}for(t&&t(n);p<s.length;p++)o=s[p],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(8242)}));n=a.O(n)})();
//# sourceMappingURL=app.1d88951c.js.map