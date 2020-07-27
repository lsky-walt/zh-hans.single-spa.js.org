(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{264:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var a=t(1),o=t(9),i=(t(0),t(308)),r={id:"layout-overview",title:"Layout Engine",sidebar_label:"Overview"},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[{value:"Project status",id:"project-status",children:[]},{value:"Browser support",id:"browser-support",children:[]},{value:"Requirements",id:"requirements",children:[]}]},{value:"Basic usage",id:"basic-usage",children:[]}],s={rightToc:l},p="wrapper";function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-layout/"}),"Github repository")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa-layout")," npm package is an optional add-on to single-spa. The layout engine provides a routing API that controls your top level routes, applications, and dom elements. Using single-spa-layout makes it easier to accomplish the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"DOM placement and ordering of applications."),Object(i.b)("li",{parentName:"ul"},"Loading UIs when applications are downloaded."),Object(i.b)("li",{parentName:"ul"},"Default routes for Not Found / 404 pages."),Object(i.b)("li",{parentName:"ul"},"Transitions between routes (implementation pending).")),Object(i.b)("p",null,"The layout engine performs two major tasks:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Generate ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/#configuration-object"}),"single-spa registration config")," from an HTML Element and/or JSON object."),Object(i.b)("li",{parentName:"ol"},"Listen to ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/#events"}),"routing events")," to ensure that all DOM elements are laid out correctly before the single-spa applications are mounted.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"single-spa-layout")," is 3.2kb gzipped (9kb ungzipped)."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"You only need to install the layout engine into your ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/"}),"root config")," (not in any other application)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-layout@beta\n\n# or\nyarn add single-spa-layout@beta\n")),Object(i.b)("h3",{id:"project-status"},"Project status"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"single-spa-layout")," is new and currently released under the ",Object(i.b)("inlineCode",{parentName:"p"},"beta")," dist-tag on npm. We are gathering feedback and improving the layout engine in preparation for a stable release. Although we do not expect the layout engine to change drastically, we do not recommend using it in a production setting until it is released as stable."),Object(i.b)("h3",{id:"browser-support"},"Browser support"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"single-spa-layout")," works in all browsers supported by single-spa, including IE11."),Object(i.b)("h3",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"You must use single-spa@>=5.4.0 in order for the layout engine to work. Additionally, you may not provide custom ",Object(i.b)("inlineCode",{parentName:"p"},"domElementGetter")," functions for any of your single-spa applications, as those override the configuration within single-spa-layout."),Object(i.b)("h2",{id:"basic-usage"},"Basic usage"),Object(i.b)("p",null,"In your root html file, add a ",Object(i.b)("inlineCode",{parentName:"p"},"<template>")," element to the head. It should have a ",Object(i.b)("inlineCode",{parentName:"p"},"<single-spa-router>")," element that contains ",Object(i.b)("inlineCode",{parentName:"p"},"<route>")," elements, ",Object(i.b)("inlineCode",{parentName:"p"},"<application>")," elements, and any other dom elements:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<html>\n  <head>\n    <template id="single-spa-layout">\n      <single-spa-router>\n        <nav class="topnav">\n          <application name="@organization/nav"></application>\n        </nav>\n        <div class="main-content">\n          <route path="settings">\n            <application name="@organization/settings"></application>\n          </route>\n          <route path="clients">\n            <application name="@organization/clients"></application>\n          </route>\n        </div>\n        <footer>\n          <application name="@organization/footer"></application>\n        </footer>\n      </single-spa-router>\n    </template>\n  </head>\n</html>\n')),Object(i.b)("p",null,"Then inside of your root-config's JavaScript code, add the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { registerApplication, start } from 'single-spa';\nimport {\n  constructApplications,\n  constructRoutes,\n  constructLayoutEngine,\n} from 'single-spa-layout';\n\nconst routes = constructRoutes(document.querySelector('#single-spa-layout'));\nconst applications = constructApplications({\n  routes,\n  loadApp({ name }) {\n    return System.import(name);\n  },\n});\nconst layoutEngine = constructLayoutEngine({ routes, applications });\n\napplications.forEach(registerApplication);\nstart();\n")))}c.isMDXComponent=!0},308:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a),i=o.a.createContext({}),r=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=r(e.components);return o.a.createElement(i.Provider,{value:n},e.children)};var s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},c=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),c=r(t),u=a,b=c[l+"."+u]||c[u]||p[u]||i;return t?o.a.createElement(b,Object.assign({},{ref:n},s,{components:t})):o.a.createElement(b,Object.assign({},{ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=t[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);