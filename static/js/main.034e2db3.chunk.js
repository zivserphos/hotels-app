(this["webpackJsonphotels-app"]=this["webpackJsonphotels-app"]||[]).push([[0],{46:function(e,t,r){},53:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(21),o=r.n(n),s=r(9),l=r(10),j=r(14),i=r(13),h=r(19),b=r(5),d=r(1),O=function(e){Object(j.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).state={},a}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return Object(d.jsx)("button",{style:{backgroundColor:this.props.color},onClick:function(){return e.props.changeColor(e.props.color)}})}}]),r}(a.Component),p=(r(46),r(47),r(55)),u=r(60),x=function(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()},m=function(e){Object(j.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).state={},a}return Object(l.a)(r,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(p.a,{children:Object(d.jsxs)(u.a,{id:this.props.key,children:[Object(d.jsx)(u.a.Img,{variant:"top",src:"./images/contact.png"}),Object(d.jsxs)(u.a.Body,{children:[Object(d.jsx)(u.a.Title,{children:this.props.name}),Object(d.jsxs)(u.a.Text,{children:["\u05d8\u05dc\u05e4\u05d5\u05df=",this.props.telephone," ",Object(d.jsx)("br",{}),"\u05e8\u05d7\u05d5\u05d1=",this.props.street," ",Object(d.jsx)("br",{}),"\u05db\u05ea\u05d5\u05d1\u05ea=",this.props.address," ",Object(d.jsx)("br",{}),"\u05d1\u05d9\u05ea=",this.props.house," ",Object(d.jsx)("br",{})]})]}),Object(d.jsxs)(u.a.Footer,{children:[" ",Object(d.jsx)(h.b,{to:{pathname:"/hotel/".concat(encodeURI(x(this.props.name)))},children:"\u05dc\u05d0\u05ea\u05e8 \u05d4\u05d1\u05d9\u05ea"})]})]})})})}}]),r}(a.Component),k=r(56),y=r(57),g=function(e){Object(j.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).state={},a}return Object(l.a)(r,[{key:"render",value:function(){var e=v.map((function(e){return Object(d.jsx)(m,{img:"",name:e["\u05e9\u05dd"],address:e["\u05db\u05ea\u05d5\u05d1\u05ea"],street:e["\u05e8\u05d7\u05d5\u05d1"],telephone:e["\u05d8\u05dc\u05e4\u05d5\u05df"],house:e["\u05d1\u05d9\u05ea"]},e.key)}));return Object(d.jsx)(k.a,{children:Object(d.jsx)(y.a,{className:"g-4",xs:2,md:4,children:e})})}}]),r}(a.Component),v=[{key:"marom-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05de\u05e8\u05d5\u05dd","\u05e8\u05d7\u05d5\u05d1":"\u05e4\u05dc\u05de\u05d7","\u05d1\u05d9\u05ea":"051","\u05d8\u05dc\u05e4\u05d5\u05df":"8254355"},{key:"Elish-hotel","\u05e9\u05dd":"\u05d0\u05dc\u05d9\u05e9\u05e2 \u05d1\u05e2\u05de","\u05e8\u05d7\u05d5\u05d1":"\u05db\u05e5 \u05d9\u05d0\u05d9\u05e8","\u05d1\u05d9\u05ea":"012","\u05d8\u05dc\u05e4\u05d5\u05df":"8309009"},{key:"mount-carmel host","\u05e9\u05dd":"\u05d0\u05d9\u05e8\u05d5\u05d7 \u05d4\u05e8 \u05d4\u05db\u05e8\u05de\u05dc","\u05e8\u05d7\u05d5\u05d1":"\u05d3\u05e8\u05da \u05d4\u05d9\u05dd","\u05d1\u05d9\u05ea":"103","\u05d8\u05dc\u05e4\u05d5\u05df":"8381414"},{key:"mount-carmel hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05d4\u05e8 \u05d4\u05db\u05e8\u05de\u05dc","\u05e8\u05d7\u05d5\u05d1":"\u05e9\u05d5\u05e9\u05e0\u05ea \u05d4\u05db\u05e8\u05de\u05dc","\u05d1\u05d9\u05ea":"067","\u05d8\u05dc\u05e4\u05d5\u05df":"8381414"},{key:"krown-plaza hotel","\u05e9\u05dd":"\u05e7\u05e8\u05d0\u05d5\u05df \u05e4\u05dc\u05d6\u05d4 \u05d7\u05d9\u05e4\u05d4","\u05e8\u05d7\u05d5\u05d1":"\u05d9\u05e4\u05d4 \u05e0\u05d5\u05e3","\u05d1\u05d9\u05ea":"111","\u05d8\u05dc\u05e4\u05d5\u05df":"8350800"},{key:"dvir-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05d3\u05d1\u05d9\u05e8","\u05e8\u05d7\u05d5\u05d1":"\u05d9\u05e4\u05d4 \u05e0\u05d5\u05e3","\u05d1\u05d9\u05ea":"124","\u05d8\u05dc\u05e4\u05d5\u05df":"8389139"},{key:"nof-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05e0\u05d5\u05e3","\u05e8\u05d7\u05d5\u05d1":"\u05e9\u05d3\u05e8\u05d5\u05ea \u05d4\u05e0\u05e9\u05d9\u05d0","\u05d1\u05d9\u05ea":"101","\u05d8\u05dc\u05e4\u05d5\u05df":"8354311"},{key:"dan-panorama-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05d3\u05df \u05e4\u05e0\u05d5\u05e8\u05de\u05d4","\u05e8\u05d7\u05d5\u05d1":"\u05e9\u05d3\u05e8\u05d5\u05ea \u05d4\u05e0\u05e9\u05d9\u05d0","\u05d1\u05d9\u05ea":"105","\u05d8\u05dc\u05e4\u05d5\u05df":"8334510"},{key:"carmel-house-of-peace","\u05e9\u05dd":"\u05d1\u05d9\u05ea \u05e9\u05dc\u05d5\u05dd \u05db\u05e8\u05de\u05dc","\u05e8\u05d7\u05d5\u05d1":"\u05e9\u05d3\u05e8\u05d5\u05ea \u05d4\u05e0\u05e9\u05d9\u05d0","\u05d1\u05d9\u05ea":"110","\u05d8\u05dc\u05e4\u05d5\u05df":"8377481"},{key:"yeearot-hakarmel-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05d9\u05e2\u05e8\u05d5\u05ea \u05d4\u05db\u05e8\u05de\u05dc","\u05e8\u05d7\u05d5\u05d1":"\u05d9\u05e2\u05e8\u05d5\u05ea \u05d4\u05db\u05e8\u05de\u05dc","\u05d1\u05d9\u05ea":"31900","\u05d8\u05dc\u05e4\u05d5\u05df":"1809442791"},{key:"vila-carmel-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05d5\u05d9\u05dc\u05d4 \u05db\u05e8\u05de\u05dc","\u05e8\u05d7\u05d5\u05d1":"\u05d4\u05d9\u05d9\u05e0\u05e8\u05d9\u05da \u05d4\u05d9\u05d9\u05e0\u05d4","\u05d1\u05d9\u05ea":"1","\u05d8\u05dc\u05e4\u05d5\u05df":"8375777/8"},{key:"gallery-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05d2\u05dc\u05e8\u05d9 \u05d7\u05d9\u05e4\u05d4","\u05e8\u05d7\u05d5\u05d1":"\u05d4\u05e8\u05e6\u05dc","\u05d1\u05d9\u05ea":"061","\u05d8\u05dc\u05e4\u05d5\u05df":"8616161"},{key:"leonardo-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05dc\u05d9\u05d0\u05d5\u05e0\u05e8\u05d3\u05d5","\u05e8\u05d7\u05d5\u05d1":"\u05d3\u05d5\u05d3 \u05d0\u05dc\u05e2\u05d6\u05e8","\u05d1\u05d9\u05ea":"10","\u05d8\u05dc\u05e4\u05d5\u05df":"8508888"}],f=r(58),C=r(59),w=function(e){Object(j.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).state={},a}return Object(l.a)(r,[{key:"render",value:function(){return Object(d.jsx)(f.a,{class:"navbar",collapseOnSelect:!0,fixed:"top",expand:"lg",bg:"dark",variant:"dark",children:Object(d.jsxs)(k.a,{children:[Object(d.jsx)(f.a.Brand,{children:"Hotels App"}),Object(d.jsx)(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(f.a.Collapse,{children:Object(d.jsxs)(C.a,{className:"me-auto",children:[Object(d.jsx)(h.b,{class:"link",to:"/",children:"Home"}),Object(d.jsx)(h.b,{class:"link",to:"/hotelHome",children:"Contacts"})]})})]})})}}]),r}(a.Component),B=function(e){var t=e.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)(w,{})}),Object(d.jsx)("main",{children:t})]})},T=function(e){Object(j.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).changeColor=function(e){e!==a.state.backgroundColor&&a.setState({backgroundColor:e})},a.state={backgroundColor:"white",hotel:"hara"},a}return Object(l.a)(r,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",style:{backgroundColor:this.state.backgroundColor},children:Object(d.jsxs)(B,{children:["Boker Tov Olam!",Object(d.jsxs)("div",{className:"button",children:[Object(d.jsx)(O,{color:"grey",changeColor:this.changeColor}),Object(d.jsx)(O,{color:"white",changeColor:this.changeColor})]}),Object(d.jsxs)("nav",{style:{borderBottom:"solid 1px",paddingBottom:"1rem"},children:[Object(d.jsx)(h.b,{to:"/"})," "]}),Object(d.jsx)(b.a,{}),Object(d.jsx)(g,{})]})})}}]),r}(a.Component),N=function(e){Object(j.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).state={},a}return Object(l.a)(r,[{key:"render",value:function(){return Object(d.jsx)(p.a,{className:"HotelPageCardPadding",children:Object(d.jsxs)(u.a,{style:{width:"18rem",margin:"auto"},children:[Object(d.jsx)(u.a.Img,{variant:"top",src:"/images/contact.png"}),Object(d.jsxs)(u.a.Body,{children:[Object(d.jsx)(u.a.Title,{children:this.props.hotel["\u05e9\u05dd"]}),Object(d.jsxs)(u.a.Text,{className:"align-right",children:["\u05d8\u05dc\u05e4\u05d5\u05df: ",this.props.hotel["\u05d1\u05d9\u05ea"],"-",this.props.hotel["\u05d8\u05dc\u05e4\u05d5\u05df"]," ",Object(d.jsx)("br",{}),"\u05db\u05ea\u05d5\u05d1\u05ea: ",this.props.hotel["\u05e9\u05dd \u05e8\u05d7\u05d5\u05d1"]]})]}),Object(d.jsx)(u.a.Footer,{children:"Call Me!"})]})})}}]),r}(a.Component);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h.a,{children:Object(d.jsx)(B,{children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{path:"/",element:Object(d.jsx)(T,{})}),[{key:"marom-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05de\u05e8\u05d5\u05dd","\u05e8\u05d7\u05d5\u05d1":"\u05e4\u05dc\u05de\u05d7","\u05d1\u05d9\u05ea":"051","\u05d8\u05dc\u05e4\u05d5\u05df":"8254355"},{key:"Elish-hotel","\u05e9\u05dd":"\u05d0\u05dc\u05d9\u05e9\u05e2 \u05d1\u05e2\u05de","\u05e8\u05d7\u05d5\u05d1":"\u05db\u05e5 \u05d9\u05d0\u05d9\u05e8","\u05d1\u05d9\u05ea":"012","\u05d8\u05dc\u05e4\u05d5\u05df":"8309009"},{key:"mount-carmel host","\u05e9\u05dd":"\u05d0\u05d9\u05e8\u05d5\u05d7 \u05d4\u05e8 \u05d4\u05db\u05e8\u05de\u05dc","\u05e8\u05d7\u05d5\u05d1":"\u05d3\u05e8\u05da \u05d4\u05d9\u05dd","\u05d1\u05d9\u05ea":"103","\u05d8\u05dc\u05e4\u05d5\u05df":"8381414"},{key:"mount-carmel hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05d4\u05e8 \u05d4\u05db\u05e8\u05de\u05dc","\u05e8\u05d7\u05d5\u05d1":"\u05e9\u05d5\u05e9\u05e0\u05ea \u05d4\u05db\u05e8\u05de\u05dc","\u05d1\u05d9\u05ea":"067","\u05d8\u05dc\u05e4\u05d5\u05df":"8381414"},{key:"krown-plaza hotel","\u05e9\u05dd":"\u05e7\u05e8\u05d0\u05d5\u05df \u05e4\u05dc\u05d6\u05d4 \u05d7\u05d9\u05e4\u05d4","\u05e8\u05d7\u05d5\u05d1":"\u05d9\u05e4\u05d4 \u05e0\u05d5\u05e3","\u05d1\u05d9\u05ea":"111","\u05d8\u05dc\u05e4\u05d5\u05df":"8350800"},{key:"dvir-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05d3\u05d1\u05d9\u05e8","\u05e8\u05d7\u05d5\u05d1":"\u05d9\u05e4\u05d4 \u05e0\u05d5\u05e3","\u05d1\u05d9\u05ea":"124","\u05d8\u05dc\u05e4\u05d5\u05df":"8389139"},{key:"nof-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05e0\u05d5\u05e3","\u05e8\u05d7\u05d5\u05d1":"\u05e9\u05d3\u05e8\u05d5\u05ea \u05d4\u05e0\u05e9\u05d9\u05d0","\u05d1\u05d9\u05ea":"101","\u05d8\u05dc\u05e4\u05d5\u05df":"8354311"},{key:"dan-panorama-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05d3\u05df \u05e4\u05e0\u05d5\u05e8\u05de\u05d4","\u05e8\u05d7\u05d5\u05d1":"\u05e9\u05d3\u05e8\u05d5\u05ea \u05d4\u05e0\u05e9\u05d9\u05d0","\u05d1\u05d9\u05ea":"105","\u05d8\u05dc\u05e4\u05d5\u05df":"8334510"},{key:"carmel-house-of-peace","\u05e9\u05dd":"\u05d1\u05d9\u05ea \u05e9\u05dc\u05d5\u05dd \u05db\u05e8\u05de\u05dc","\u05e8\u05d7\u05d5\u05d1":"\u05e9\u05d3\u05e8\u05d5\u05ea \u05d4\u05e0\u05e9\u05d9\u05d0","\u05d1\u05d9\u05ea":"110","\u05d8\u05dc\u05e4\u05d5\u05df":"8377481"},{key:"yeearot-hakarmel-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05d9\u05e2\u05e8\u05d5\u05ea \u05d4\u05db\u05e8\u05de\u05dc","\u05e8\u05d7\u05d5\u05d1":"\u05d9\u05e2\u05e8\u05d5\u05ea \u05d4\u05db\u05e8\u05de\u05dc","\u05d1\u05d9\u05ea":"31900","\u05d8\u05dc\u05e4\u05d5\u05df":"1809442791"},{key:"vila-carmel-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05d5\u05d9\u05dc\u05d4 \u05db\u05e8\u05de\u05dc","\u05e8\u05d7\u05d5\u05d1":"\u05d4\u05d9\u05d9\u05e0\u05e8\u05d9\u05da \u05d4\u05d9\u05d9\u05e0\u05d4","\u05d1\u05d9\u05ea":"1","\u05d8\u05dc\u05e4\u05d5\u05df":"8375777/8"},{key:"gallery-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05d2\u05dc\u05e8\u05d9 \u05d7\u05d9\u05e4\u05d4","\u05e8\u05d7\u05d5\u05d1":"\u05d4\u05e8\u05e6\u05dc","\u05d1\u05d9\u05ea":"061","\u05d8\u05dc\u05e4\u05d5\u05df":"8616161"},{key:"leonardo-hotel","\u05e9\u05dd":"\u05de\u05dc\u05d5\u05df \u05dc\u05d9\u05d0\u05d5\u05e0\u05e8\u05d3\u05d5","\u05e8\u05d7\u05d5\u05d1":"\u05d3\u05d5\u05d3 \u05d0\u05dc\u05e2\u05d6\u05e8","\u05d1\u05d9\u05ea":"10","\u05d8\u05dc\u05e4\u05d5\u05df":"8508888"}].map((function(e){return Object(d.jsx)(b.b,{path:"/hotel/".concat(encodeURI(x(e["\u05e9\u05dd"]))),element:Object(d.jsx)(N,{hotel:e})})})),Object(d.jsx)(b.b,{path:"*",element:Object(d.jsx)("main",{style:{padding:"1rem"},children:Object(d.jsx)("p",{children:"There's nothing here!"})})})]})})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.034e2db3.chunk.js.map