(this.webpackJsonpfilters=this.webpackJsonpfilters||[]).push([[0],{44:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var r=c(0),i=c.n(r),a=c(19),l=c.n(a),n=c(31),s=c(11),o=(c(44),c(2)),u=function(){return Object(o.jsx)("div",{className:"emptyView-wrap",children:Object(o.jsx)("img",{src:"/images/gif/empty.gif",alt:""})})},d=[{id:1,value:"M",label:"Men"},{id:2,value:"W",label:"Women"}],g=[{id:1,value:"1",label:"1\ud83c\udf1f"},{id:2,value:"2",label:"2\ud83c\udf1f"},{id:3,value:"3",label:"3\ud83c\udf1f"},{id:4,value:"4",label:"4\ud83c\udf1f"},{id:5,value:"5",label:"5\ud83c\udf1f"}],j=[{id:1,title:"Mid Formal Shirt",category:"M",color:"blue",rating:5,price:2500,coverSrc:"images/list/img1.jpg"},{id:2,title:"Bandhgala",category:"M",color:"blue",rating:4,price:1e3,coverSrc:"/images/list/img1.webp"},{id:3,title:"Slim Fit Tshirt",category:"M",color:"blue",rating:3,price:2e3,coverSrc:"/images/list/img2.png"},{id:4,title:"Casual Grey Tshirt",category:"M",color:"grey",rating:1,price:1800,coverSrc:"/images/list/img3.jpg"},{id:5,title:"Lavender Tshirt",category:"W",color:"purple",rating:2,price:4100,coverSrc:"/images/list2/w3.jpg"},{id:6,title:"Casual Blue Tshirt",category:"M",color:"blue",rating:5,price:2e3,coverSrc:"/images/list/img4.jpg"},{id:7,title:"lose fit tshirt",category:"M",color:"blue",rating:5,price:3500,coverSrc:"/images/list/img5.png"},{id:8,title:"Full Sleeves tshirt",category:"M",color:"grey",rating:2,price:2200,coverSrc:"/images/list/img6.jpeg"},{id:9,title:"Black Full Sleeves",category:"M",color:"black",rating:1,price:1900,coverSrc:"/images/list/img7.jpg"},{id:10,title:"Red Casual Tshirt",category:"M",color:"red",rating:4,price:2750,coverSrc:"/images/list/img8.jpg"},{id:11,title:"Army Print Tshirt",category:"W",color:"green",rating:2,price:4350,coverSrc:"/images/list2/w5.webp"},{id:12,title:"Women yellow casual",category:"W",color:"yellow",rating:3,price:3300,coverSrc:"/images/list2/w2.jpg"}],b=c(86),h=c(83),p=c(88),m=Object(h.a)({root:{"&$checked":{color:"#000"}},checked:{},wrap:{width:"100%",display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center",marginLeft:0},label:{fontSize:".8rem",fontFamily:"'Raleway', sans-serif"}}),f=function(e){var t=e.changeChecked,c=e.color,r=m(),i=c.checked,a=c.label,l=c.id;return Object(o.jsx)("div",{children:Object(o.jsx)(p.a,{classes:{label:r.label,root:r.wrap},control:Object(o.jsx)(b.a,{classes:{checked:r.checked,root:r.root},size:"small",checked:i,onChange:function(){return t(l)},inputProps:{"aria-label":"checkbox with small size"}}),label:a})})},v=c(85),O=c(89),x=Object(h.a)({root:{width:"100%",justifyContent:"space-between"},toggle:{fontFamily:"'Raleway', sans-serif",fontSize:".8rem",border:"1px solid rgba(0, 0, 0, 0.12)",borderRadius:"10px","&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)":{borderRadius:"10px"},"&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)":{borderRadius:"10px",border:"1px solid rgba(0, 0, 0, 0.12)"},"&.Mui-selected":{borderRadius:"10px",background:"#000",color:"#fff"},"&.MuiToggleButton-root":{"&:hover":{background:"#000",color:"#fff"}}}}),y=function(e){var t=e.options,c=e.value,r=e.selectToggle,i=x();return Object(o.jsx)(O.a,{value:c,exclusive:!0,onChange:r,className:i.root,children:t.map((function(e){var t=e.label,c=e.id,r=e.value;return Object(o.jsx)(v.a,{className:i.toggle,value:r,children:t},c)}))})},w=c(87),S=Object(h.a)({root:{width:"100%"},thumb:{color:"#000"},rail:{color:"rgba(0, 0, 0, 0.26)"},track:{color:"#000"}}),k=function(e){var t=e.value,c=e.changePrice,r=S();return Object(o.jsx)("div",{className:r.root,children:Object(o.jsx)(w.a,{value:t,onChange:c,valueLabelDisplay:"on",min:1e3,max:5e3,classes:{thumb:r.thumb,rail:r.rail,track:r.track}})})},C=(c(52),function(e){var t=e.selectedCategory,c=e.selectCategory,r=e.selectedRating,i=e.selectedPrice,a=e.selectRating,l=e.colors,n=e.changeChecked,s=e.changePrice;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("p",{className:"label",children:"Category"}),Object(o.jsx)(y,{options:d,value:t,selectToggle:c})]}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("p",{className:"label",children:"Colors"}),l.map((function(e){return Object(o.jsx)(f,{color:e,changeChecked:n},e.id)}))]}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("p",{className:"label-range",children:"Price Range"}),Object(o.jsx)(k,{value:i,changePrice:s})]}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("p",{className:"label",children:"Star Rating"}),Object(o.jsx)(y,{options:g,value:r,selectToggle:a})]})]})}),N=(c(53),function(e){var t=e.item,c=t.coverSrc,r=t.title,i=t.price,a=t.rating;return Object(o.jsxs)("div",{className:"listItem-wrap",children:[Object(o.jsx)("img",{src:c,alt:""}),Object(o.jsxs)("header",{children:[Object(o.jsx)("h4",{children:r}),Object(o.jsxs)("span",{children:["\ud83c\udf1f",a]})]}),Object(o.jsx)("footer",{children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:["Rs",i]})})})]})}),M=(c(54),function(e){var t=e.list;return Object(o.jsx)("div",{className:"list-wrap",children:t.map((function(e){return Object(o.jsx)(N,{item:e},e.id)}))})}),R=(c(55),c(34)),T=c.n(R),B=function(e){var t=e.value,c=e.changeInput;return Object(o.jsxs)("div",{className:"searchBar-wrap",children:[Object(o.jsx)(T.a,{className:"searchBar-icon"}),Object(o.jsx)("input",{type:"text",placeholder:"Supertails Cloth Store",value:t,onChange:c})]})},P=(c(60),function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),c=t[0],i=t[1],a=Object(r.useState)(null),l=Object(s.a)(a,2),d=l[0],g=l[1],b=Object(r.useState)([1e3,5e3]),h=Object(s.a)(b,2),p=h[0],m=h[1],f=Object(r.useState)([{id:1,checked:!1,label:"Blue"},{id:2,checked:!1,label:"Black"},{id:3,checked:!1,label:"Yellow"},{id:4,checked:!1,label:"Green"},{id:5,checked:!1,label:"Purple"}]),v=Object(s.a)(f,2),O=v[0],x=v[1],y=Object(r.useState)(j),w=Object(s.a)(y,2),S=w[0],k=w[1],N=Object(r.useState)(!0),R=Object(s.a)(N,2),T=R[0],P=R[1],I=Object(r.useState)(""),L=Object(s.a)(I,2),z=L[0],F=L[1];return Object(r.useEffect)((function(){!function(){var e=j;d&&(e=e.filter((function(e){return parseInt(e.rating)===parseInt(d)}))),c&&(e=e.filter((function(e){return e.category===c})));var t=O.filter((function(e){return e.checked})).map((function(e){return e.label.toLowerCase()}));t.length&&(e=e.filter((function(e){return t.includes(e.color)}))),z&&(e=e.filter((function(e){return-1!==e.title.toLowerCase().search(z.toLowerCase().trim())})));var r=p[0],i=p[1];e=e.filter((function(e){return e.price>=r&&e.price<=i})),k(e),e.length?P(!0):P(!1)}()}),[d,c,O,z,p]),Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(B,{value:z,changeInput:function(e){return F(e.target.value)}}),Object(o.jsxs)("div",{className:"home_panelList-wrap",children:[Object(o.jsx)("div",{className:"home_panel-wrap",children:Object(o.jsx)(C,{selectedCategory:c,selectCategory:function(e,t){return t?i(t):null},selectedRating:d,selectedPrice:p,selectRating:function(e,t){return t?g(t):null},colors:O,changeChecked:function(e){var t=O.map((function(t){return t.id===e?Object(n.a)(Object(n.a)({},t),{},{checked:!t.checked}):t}));x(t)},changePrice:function(e,t){m(t)}})}),Object(o.jsx)("div",{className:"home_list-wrap",children:T?Object(o.jsx)(M,{list:S}):Object(o.jsx)(u,{})})]})]})}),I=(c(61),function(){return Object(o.jsx)(P,{})});l.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.69dbd439.chunk.js.map