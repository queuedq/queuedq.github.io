(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+DWa":function(t,e,a){"use strict";a.r(e),a.d(e,"listingQuery",(function(){return L}));var r=a("KQm4"),n=a("dI71"),o=a("q1tI"),i=a.n(o),s=a("qhky"),c=a("Wbzz"),l=a("TSYQ"),p=a.n(l),m=a("hpys"),u=a("1wty"),g=a("okzv"),f=a("IpnI"),d=a.n(f),y=a("1iwc"),h=a.n(y),v=function(t){var e=t.pageNum,a=e===t.currentPageNum;return i.a.createElement(c.Link,{key:e,to:1===e?"/":"/"+e+"/",className:p()([h.a.page,a&&h.a.current])},e)},E=function(t){function e(){return t.apply(this,arguments)||this}Object(n.a)(e,t);var a=e.prototype;return a.renderPagination=function(){var t=this.props.pageContext,e=t.currentPageNum,a=t.pageCount,n=e-1==1?"/":"/"+(e-1)+"/",o="/"+(e+1)+"/",s=1===e,l=e===a;return i.a.createElement("nav",{"aria-label":"pagination",className:h.a.pagination},!s&&i.a.createElement(c.Link,{to:n,className:h.a.page},"Previous"),Object(r.a)(Array(a)).map((function(t,a){return i.a.createElement(v,{pageNum:a+1,currentPageNum:e})})),!l&&i.a.createElement(c.Link,{to:o,className:h.a.page},"Next"))},a.render=function(){var t=this.props.data.allMarkdownRemark.edges;return i.a.createElement(m.a,null,i.a.createElement(s.a,{title:d.a.siteTitle}),i.a.createElement(g.a,null),i.a.createElement(u.a,{postEdges:t}),this.renderPagination())},e}(i.a.Component);e.default=E;var L="3049972218"},"1iwc":function(t,e,a){t.exports={pagination:"listing-module--pagination--SPJLG",page:"listing-module--page--2NgA1",current:"listing-module--current--WAhOl"}},"1wty":function(t,e,a){"use strict";var r=a("dI71"),n=a("N1om"),o=a.n(n),i=a("q1tI"),s=a.n(i),c=a("Wbzz"),l=a("IpnI"),p=a.n(l),m=a("jwng"),u=a("TMeN"),g=a.n(u),f=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var a=e.prototype;return a.getPostList=function(){var t=[];return this.props.postEdges.forEach((function(e){t.push({path:e.node.fields.slug,category:e.node.frontmatter.category,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,summary:e.node.frontmatter.summary,date:Object(m.a)(e.node.fields.date).format(p.a.dateFormat),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})})),t},a.render=function(){var t=this.getPostList();return s.a.createElement("ul",{className:g.a.postList},t.map((function(t){return s.a.createElement("li",{className:g.a.postCard,key:t.title},s.a.createElement("h3",{className:g.a.postTitle},s.a.createElement(c.Link,{to:t.path},t.title)),t.category?s.a.createElement(c.Link,{className:g.a.postCategory,to:"/categories/"+o()(t.category)},t.category):null,s.a.createElement("time",{className:g.a.postDate},t.date),t.summary?s.a.createElement("div",{className:g.a.postSummary},t.summary):null)})))},e}(s.a.Component);e.a=f},"T/ZZ":function(t,e,a){var r,n,o;o=function(){function t(t){var e=[];if(0===t.length)return"";if("string"!=typeof t[0])throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var a=t.shift();t[0]=a+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<t.length;r++){var n=t[r];if("string"!=typeof n)throw new TypeError("Url must be a string. Received "+n);""!==n&&(r>0&&(n=n.replace(/^[\/]+/,"")),n=r<t.length-1?n.replace(/[\/]+$/,""):n.replace(/[\/]+$/,"/"),e.push(n))}var o=e.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return t("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},t.exports?t.exports=o():void 0===(n="function"==typeof(r=o)?r.call(e,a,e,t):r)||(t.exports=n)},TMeN:function(t,e,a){t.exports={postList:"PostListing-module--postList--UNOnL",postCard:"PostListing-module--postCard--1vEJh",postTitle:"PostListing-module--postTitle--3kS42",postCategory:"PostListing-module--postCategory--19QUM",postDate:"PostListing-module--postDate--L8PHH",postSummary:"PostListing-module--postSummary--2Ezsf"}},TSYQ:function(t,e,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&t.push(i)}else if("object"===o)for(var s in r)a.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0===(r=function(){return n}.apply(e,[]))||(t.exports=r)}()},okzv:function(t,e,a){"use strict";var r=a("dI71"),n=a("q1tI"),o=a.n(n),i=a("qhky"),s=a("T/ZZ"),c=a.n(s),l=a("jwng"),p=a("IpnI"),m=a.n(p),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t,e,a,r,n=this.props,s=n.postNode,p=n.postPath,u=n.postSEO;if(u){var g=s.frontmatter;t=g.title,e=g.description?g.description:s.excerpt,a=g.cover?g.cover:m.a.siteLogo,r=c()(m.a.siteUrl,m.a.pathPrefix,p)}else t=m.a.siteTitle,e=m.a.siteDescription,a=m.a.siteLogo;var f=function(t){return t.match("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]")?t:c()(m.a.siteUrl,m.a.pathPrefix,t)};a=f(a);var d=s&&s.frontmatter&&s.frontmatter.date?Object(l.a)(s.frontmatter.date,m.a.dateFromFormat).toDate():null,y={"@type":"Person",name:m.a.userName,email:m.a.userEmail,address:m.a.userLocation},h={"@type":"ImageObject",url:f(m.a.siteLogo)},v=c()(m.a.siteUrl,m.a.pathPrefix),E=[{"@context":"http://schema.org","@type":"WebSite",url:v,name:t,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:""}];return u&&E.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:t,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:v,name:t,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:a},author:y,publisher:Object.assign({},y,{"@type":"Organization",logo:h}),datePublished:d,description:e}),o.a.createElement(i.a,null,o.a.createElement("meta",{name:"description",content:e}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(E)),o.a.createElement("meta",{property:"og:url",content:u?r:v}),u?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:e}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:m.a.userTwitter?m.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:description",content:e}),o.a.createElement("meta",{name:"twitter:image",content:a}))},e}(n.Component);e.a=u}}]);
//# sourceMappingURL=component---src-templates-listing-jsx-1352b475dd4001d7d674.js.map