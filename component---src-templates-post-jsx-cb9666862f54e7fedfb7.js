(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"88r8":function(e,t,a){},"T/ZZ":function(e,t,a){var n,r,o;o=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var o=t.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=o():void 0===(r="function"==typeof(n=o)?n.call(t,a,t,e):n)||(e.exports=r)},"TG/k":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w})),a.d(t,"pageQuery",(function(){return b}));var n=a("dI71"),r=a("N1om"),o=a.n(r),i=a("q1tI"),s=a.n(i),l=a("qhky"),c=a("Wbzz"),m=a("IpnI"),p=a.n(m),u=a("jwng"),g=a("hpys"),d=a("mRRs"),f=a.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.tags;return e?s.a.createElement("div",{className:f.a.tagContainer},e.map((function(e){return s.a.createElement(c.Link,{key:e,to:"/tags/"+o()(e),className:f.a.tag},"#"+e)}))):null},t}(i.Component),y=a("okzv"),E=(a("88r8"),a("kQ/l")),v=a.n(E),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext.slug,n=t.markdownRemark,r=n.frontmatter;return r.id||(r.id=a),s.a.createElement(g.a,null,s.a.createElement(l.a,null,s.a.createElement("title",null,r.title+" | "+p.a.siteTitle)),s.a.createElement(y.a,{postPath:a,postNode:n,postSEO:!0}),s.a.createElement("div",{className:v.a.postContainer},s.a.createElement("div",{className:v.a.titleContainer},s.a.createElement("h1",{className:v.a.title},r.title),r.category&&s.a.createElement(c.Link,{className:v.a.category,to:"/categories/"+o()(r.category)},r.category),r.summary&&s.a.createElement("div",{className:v.a.summary},r.summary),s.a.createElement("time",{className:v.a.date},Object(u.a)(n.fields.date).format(p.a.dateFormat))),s.a.createElement("div",{className:v.a.content,dangerouslySetInnerHTML:{__html:n.html}}),s.a.createElement(h,{tags:r.tags})))},t}(s.a.Component),b="405463244"},"kQ/l":function(e,t,a){e.exports={postContainer:"post-module--postContainer--ETnUp",titleContainer:"post-module--titleContainer--21MSY",summary:"post-module--summary--1osDj",category:"post-module--category--3HOTO",date:"post-module--date--2uDW8",content:"post-module--content--J5WVo"}},mRRs:function(e,t,a){e.exports={tagContainer:"PostTags-module--tagContainer--18xmh",tag:"PostTags-module--tag--2s29v"}},okzv:function(e,t,a){"use strict";var n=a("dI71"),r=a("q1tI"),o=a.n(r),i=a("qhky"),s=a("T/ZZ"),l=a.n(s),c=a("jwng"),m=a("IpnI"),p=a.n(m),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,s=r.postNode,m=r.postPath,u=r.postSEO;if(u){var g=s.frontmatter;e=g.title,t=g.description?g.description:s.excerpt,a=g.cover?g.cover:p.a.siteLogo,n=l()(p.a.siteUrl,p.a.pathPrefix,m)}else e=p.a.siteTitle,t=p.a.siteDescription,a=p.a.siteLogo;var d=function(e){return e.match("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]")?e:l()(p.a.siteUrl,p.a.pathPrefix,e)};a=d(a);var f=s&&s.frontmatter&&s.frontmatter.date?Object(c.a)(s.frontmatter.date,p.a.dateFromFormat).toDate():null,h={"@type":"Person",name:p.a.userName,email:p.a.userEmail,address:p.a.userLocation},y={"@type":"ImageObject",url:d(p.a.siteLogo)},E=l()(p.a.siteUrl,p.a.pathPrefix),v=[{"@context":"http://schema.org","@type":"WebSite",url:E,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:""}];return u&&v.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:E,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},author:h,publisher:Object.assign({},h,{"@type":"Organization",logo:y}),datePublished:f,description:t}),o.a.createElement(i.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(v)),o.a.createElement("meta",{property:"og:url",content:u?n:E}),u?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:p.a.siteFBAppID?p.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:p.a.userTwitter?p.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(r.Component);t.a=u}}]);
//# sourceMappingURL=component---src-templates-post-jsx-cb9666862f54e7fedfb7.js.map