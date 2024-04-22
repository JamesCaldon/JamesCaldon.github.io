import{Q as u}from"./QIcon.b9df0830.js";import{c as v,h as y}from"./render.a0a231db.js";import{i as m,e as s,c as h,h as w,l as S,a as _,g as b,_ as C,y as x,A as P,r as k,o as A,m as E,s as T,t as I,u as z,B as e,v as p,z as J,C as N,D as Q,E as g}from"./index.d232b2d0.js";var D=v({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:l}){const{proxy:{$q:i}}=b(),n=m(S,s);if(n===s)return console.error("QPage needs to be a deep child of QLayout"),s;if(m(_,s)===s)return console.error("QPage needs to be child of QPageContainer"),s;const d=h(()=>{const o=(n.header.space===!0?n.header.size:0)+(n.footer.space===!0?n.footer.size:0);if(typeof t.styleFn=="function"){const f=n.isContainer.value===!0?n.containerHeight.value:i.screen.height;return t.styleFn(o,f)}return{minHeight:n.isContainer.value===!0?n.containerHeight.value-o+"px":i.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":i.screen.height-o+"px"}}),c=h(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>w("main",{class:c.value,style:d.value},y(l.default))}}),M="/assets/profile.0ba0b1a2.jpg";const a=t=>(N("data-v-1d936f1d"),t=t(),Q(),t),L={class:"resume row"},F=a(()=>e("header",{class:"title grid"},[e("section",{class:"grid-item column",style:{"justify-content":"center"}},[e("img",{src:M,style:{width:"100%","aspect-ratio":"1 / 1"}})]),e("section",{class:"grid-item"},[e("h1",null,"James Caldon"),e("h2",{style:{color:"dimgrey"}},"Software Engineer & Data Scientist"),e("p",null,[g("Full Stack Software Developer specialising in .NET C# with ~2 years of commercial software development experience, supported by ~5 years of commercial experience in IT and 4 years of study, focused on algorithms, software architecture, cloud computing (AWS, Docker), of which are the foundation for many personal hobby projects over the past decade. Capable of producing clean, efficient, and readable code in a variety of languages not limited to: "),e("ul",null,[e("li",null," high-level languages/frameworks such as .NET C#, ASP.NET, SQL, HTML/JavaScript/Typescript/CSS, React JS, Vue JS and Electron. "),e("li",null," low-level system languages such as C, C++ and experience with the windows API (win32) and NodeJS native addons. ")])]),e("p",null,"Significant machine learning experience (TensorFlow, Keras; PyTorch) specialising in convolutional neural networks resulting in a First-Class Honours dissertation mark of > 80.")])],-1)),R={class:"main grid"},W={class:"grid-item"},j=a(()=>e("h3",null,"Contact",-1)),q={class:"contact"},B=a(()=>e("span",null,[e("b",null," Email "),e("p",null,[e("a",{href:"mailto:james.caldon@outlook.com"},"james.caldon@outlook.com")])],-1)),H=a(()=>e("span",null,[e("b",null," Github "),e("p",null,[e("a",{href:"https://github.com/JamesCaldon"},"https://github.com/JamesCaldon")])],-1)),V=a(()=>e("span",null,[e("b",null," LinkedIn "),e("p",null,[e("a",{href:"https://www.linkedin.com/in/james-caldon/"},"https://www.linkedin.com/in/james-caldon/")])],-1)),$=a(()=>e("h3",null,"Languages and Libraries",-1)),O=a(()=>e("section",{class:"skills"},[e("p",null,".NET C#"),e("meter",{value:"0.95"}),e("p",null,"ASP.NET C#"),e("meter",{value:"0.95"}),e("p",null,"Javascript/Typescript"),e("meter",{value:"0.95"}),e("p",null,"T-SQL"),e("meter",{value:"0.9"}),e("p",null,"Python"),e("meter",{value:"0.9"}),e("p",null,"Vue JS"),e("meter",{value:"0.8"}),e("p",null,"React"),e("meter",{value:"0.7"}),e("p",null,"Electron"),e("meter",{value:"0.75"}),e("p",null,"NodeJS"),e("meter",{value:"0.6"}),e("p",null,"NodeJS Native Addons"),e("meter",{value:"0.8"}),e("p",null,"MongoDB"),e("meter",{value:"0.5"}),e("p",null,"C"),e("meter",{value:"0.5"}),e("p",null,"C++"),e("meter",{value:"0.6"}),e("p",null,"WinAPI"),e("meter",{value:"0.55"})],-1)),G=a(()=>e("section",{class:"grid-item"},[e("h3",null,"Education"),e("div",{class:"education row"},[e("div",null,[e("b",null,"BSc in Computer Science (Honours) WAM > 80"),e("div",null,"University of Western Australia"),e("div",{class:"date"},"2017 - 2021")]),e("div",null,[e("b",null,"WACE as School Dux of Computer Science"),e("div",null,"Wesley College"),e("div",{class:"date"},"2016")])]),e("h3",null,"Experience"),e("div",{style:{"background-color":"#d3d3d3",padding:"1em"}},[e("div",{class:"date"},"2022 - Current"),e("div",null,[e("i",null,"Ascora")]),e("b",null,"Full Stack Developer"),e("p",null,"Employed expertise in C#, ASP.NET, Razor, JavaScript, KendoUI, JQuery, ORMs and SQL to architect, scope, and implement new features, and integrate performance and bugfixes to existing feature sets;"),e("ul",null,[e("li",null," Designed, scoped and implemented a feature rich Case (Ticket) Management System which integrates with multiple distinct third-party APIs, including Zoom, Microsoft Exchange, Graph, POP, SMTP, IMAP. "),e("li",null," Completely reworked from the ground up an existing implementation of a product and service-based shop for our SAAS customers, which integrated with email notifications, AHA cards and third-party secure credit card processing. "),e("li",null," Developed from conception to delivery a Global Search and Saved Searches feature which allowed for easy access to all relevant entities (Jobs, Quotes, Enquiries, Invoices etc.) in the SAAS product. Global Search sub-features include hotkey support and virtual scrolling supported by performant queries and indexes. Saved Searches was designed with a page agnostic implementation, which could be added to any page with any search filters, grid sorts, toggleable visibility grid columns, via the use of adapters. "),e("li",null," Architected and implemented a financially robust in-depth nested Progress Claim (Partial Invoicing) for Jobs, which cleanly supported various different financial requirements, including standard, sliding-scale, and banded sliding-scale retentions, plus variations and specific tax considerations. ")]),g(" Performance/maintainability enhancements include: "),e("ul",null,[e("li",null," Decreased Invoice generation time from ~30+ seconds to <1 second via many technical optimizations. "),e("li",null," Optimized an internal shop order page by identifying and refactoring queries which suffered from N+1 issues and missing indices, resulting in loading times decreasing from 30 minutes to a few seconds. ")])]),e("div",null,[e("div",{class:"date"},"2017 - 2022"),e("div",null,[e("i",null,"Wesley College")]),e("b",null,"ILT Support Officer"),e("p",null,"Front desk technician providing technical support to teachers, administration staff and students. This involved fixing various IT related issues including software, hardware, infrastructure (office/classroom setup i.e., installation involving in and out of wall data cabling, woodworking etc.), and the usual end-user issues."),e("p",null,"When not answering tickets via ManageEngine ServiceDesk Plus, duties involved managing the imaging system, OS environment and applications and their respective licensing (with SCCM). In house solutions/augmentations to out of external support legacy applications were created. Developed software to extend to functionality of SCCM with the use of various technologies.")]),e("div",null,[e("div",{class:"date"},"2014"),e("div",null,[e("i",null,"Thales")]),e("b",null,"Software Tester and Presenter"),e("p",null,"Prepared and delivered presentations, debugged software and took part in collaborative work.")])],-1)),K=x({__name:"ResumePage",setup(t){P(n=>({"4f198ba4":J(l)}));let l=k(1);const i=n=>{const r=window.getComputedStyle(document.documentElement).getPropertyValue("font-size"),d=Number(r.substring(0,r.length-2)),c=window.innerWidth;l.value=c>=794?1:c/(50*d)};return A(()=>{window.addEventListener("resize",i)}),E(()=>{window.removeEventListener("resize",i)}),i(),(n,r)=>(T(),I(D,{class:"resume-container"},{default:z(()=>[e("section",L,[F,e("section",R,[e("section",W,[j,e("address",q,[p(u,{name:"email",size:"2em"}),B,p(u,{name:"hub",size:"2em"}),H,p(u,{name:"link",size:"2em"}),V]),$,O]),G])])]),_:1}))}});var Y=C(K,[["__scopeId","data-v-1d936f1d"]]);export{Y as default};
