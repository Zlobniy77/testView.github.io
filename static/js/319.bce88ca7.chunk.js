"use strict";(self.webpackChunkqsyrys_frontend=self.webpackChunkqsyrys_frontend||[]).push([[319],{4319:function(e,a,s){s.r(a);var r=s(7586),t=(s(4676),s(4432),s(6605)),l=s(1087),i=s(9073),o=s(2791),n=s(6086),c=s(948),d=s(8678),p=s(9230),m=s(184);a.default=function(e){var a=e.data,s=e.title,h=(0,o.useContext)(n.T),x=h.setImages,j=(h.addToFavorites,h.compare),y=h.toggleCompare,v=(0,p.$G)().t;return(0,m.jsx)("section",{style:{paddingTop:s?"10px":"0px"},className:"elementor-section elementor-top-section elementor-element elementor-element-6242cc14d278c elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default",children:(0,m.jsx)("div",{className:"elementor-container elementor-column-gap-default",children:(0,m.jsx)("div",{className:"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-eead392",children:(0,m.jsx)("div",{className:"elementor-widget-wrap elementor-element-populated",children:(0,m.jsx)("div",{className:"elementor-element elementor-element-d90bc31 elementor-widget elementor-widget-beyot-property","data-element_type":"widget","data-widget_type":"beyot-property.default",children:(0,m.jsx)("div",{className:"elementor-widget-container",children:(0,m.jsx)("div",{className:"ube-property",children:(0,m.jsx)("div",{className:"ere-property-wrap",children:(0,m.jsxs)("div",{className:"ere-property clearfix property-carousel  owl-move-nav-par-with-heading","data-view-all-link":"#",children:[(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{style:{marginTop:s?"5px":""},className:"ere-heading ere-item-wrap heading-contain-owl-nav mt-16",children:[(0,m.jsx)("h2",{children:s||v("find_a_property")}),(0,m.jsxs)("div",{className:"owl-nav has-view-all owl-nav-top-right",children:[(0,m.jsx)("div",{className:"owl-prev",children:(0,m.jsx)("i",{className:"fa fa-angle-left"})}),(0,m.jsx)("div",{className:"owl-next",children:(0,m.jsx)("i",{className:"fa fa-angle-right"})}),!s&&(0,m.jsx)("div",{className:"view-all-link",children:(0,m.jsx)("a",{href:"#",className:"btn btn-xs btn-dark btn-classic",children:v("view_all")})})]}),!s&&(0,m.jsx)("p",{children:v("dream_house")})]})}),(0,m.jsx)(r.tq,{spaceBetween:30,slidesPerView:1,breakpoints:{640:{slidesPerView:2,spaceBetween:6},1e3:{slidesPerView:4,spaceBetween:0},1450:{slidesPerView:6,spaceBetween:0}},pagination:{clickable:!0},navigation:{prevEl:".owl-prev",nextEl:".owl-next"},modules:[t.W_],className:"property-content owl-carousel manual owl-nav-top-right owl-loaded owl-drag","data-callback":"owl_callback",children:a.map((function(e,a){var s,t,o,n,p=e.status,h=e.propertytype,N=e.description,g=(e.images,e.selectedImg),f=JSON.parse(p),u=JSON.parse(e.images),w=(null===u||void 0===u?void 0:u[g])||u[0],b=JSON.parse(h),k=(new Date(e.created_at).getTime()-(new Date).getTime())/1e3/2592e3,_="Some time ago";_=k<1?"Less than a month ago":k<12?"".concat(Math.floor(k)," month(s) ago"):"".concat(Math.floor(k/12)," year(s) ago");var T=(0,i.Vt)(N);return(0,m.jsx)(r.o5,{className:"item h-48",children:(0,m.jsx)("div",{className:"ere-item-wrap property-item ere-property-featured",children:(0,m.jsxs)("div",{className:"property-inner",children:[(0,m.jsxs)("div",{className:"property-image",children:[(0,m.jsx)("img",{decoding:"async",loading:"lazy",width:"150",height:"340",src:w,alt:e.name,title:e.name,style:{height:"150px",width:"340px",objectFit:"cover"}}),(0,m.jsxs)("div",{className:"property-action block-center",children:[(0,m.jsxs)("div",{className:"block-center-inner",children:[(0,m.jsx)(d.Z,{arrow:!0,title:v("photos",{photos:u.length}),children:(0,m.jsx)("div",{onClick:function(){return x(u)},className:"property-view-gallery-wrap","data-toggle":"tooltip",children:(0,m.jsx)("a",{"data-property-id":"8381",href:"javascript:void(0)",className:"property-view-gallery",children:(0,m.jsx)("i",{className:"fa fa-camera"})})})}),(0,m.jsx)(d.Z,{arrow:!0,title:v("compare"),children:(0,m.jsx)("a",{className:"compare-property",href:"javascript:void(0)",onClick:function(){return y({id:e.id,image:w})},"data-property-id":"8381","data-toggle":"tooltip","data-original-title":"Compare",children:(0,m.jsx)("i",{className:"fa ".concat(j.map((function(e){return e.id})).includes(e.id)?"fa-minus":"fa-plus")})})})]}),(0,m.jsx)(l.rU,{className:"property-link",to:"/property/".concat(e.id),title:e.name})]}),(0,m.jsx)("div",{className:"property-label property-featured",children:(0,m.jsx)("p",{className:"label-item",children:(0,m.jsxs)("span",{className:"property-label-bg",children:[v("featured")," ",(0,m.jsx)("span",{className:"property-arrow"})]})})}),(0,m.jsx)("div",{className:"property-status",children:(0,m.jsx)("p",{className:"status-item",children:(0,m.jsxs)("span",{className:"property-status-bg",style:{backgroundColor:"#dd3333"},children:[null===(s=f[0])||void 0===s?void 0:s.label,(0,m.jsx)("span",{className:"property-arrow",style:{borderLeftColor:"#dd3333",borderRightColor:"#dd3333"}})]})})})]}),(0,m.jsxs)("div",{className:"property-item-content",children:[(0,m.jsxs)("div",{className:"property-heading",children:[(0,m.jsx)("h2",{className:"property-title",children:(0,m.jsx)(l.rU,{to:"/property/".concat(e.id),title:e.title,children:e.name})}),(0,m.jsx)("div",{className:"property-price",children:(0,m.jsx)("span",{children:"true"==e.callforprice?v("call_for_price"):(0,m.jsx)(c.h3,{thousandSeparator:!0,displayType:"text",value:Number(e.price),prefix:e.beforepricelabel})})})]}),(0,m.jsxs)("div",{className:"property-location",title:"SYRYS INVESTMENT LTD",children:[(0,m.jsx)("i",{className:"fa fa-map-marker",style:{stroke:2}}),(0,m.jsx)("a",{target:"_blank",href:"http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD",children:(0,m.jsx)("span",{children:"SYRYS INVESTMENT LTD"})})]}),(0,m.jsxs)("div",{className:"property-element-inline",children:[(0,m.jsxs)("div",{className:"property-type-list",children:[(0,m.jsx)("i",{className:"fa fa-tag",style:{stroke:2}}),(0,m.jsx)("a",{href:"https://www.qsyrys.com/property-type/".concat(null===(t=b[0])||void 0===t?void 0:t.value),title:null===(o=b[0])||void 0===o?void 0:o.label,children:(0,m.jsx)("span",{children:null===(n=b[0])||void 0===n?void 0:n.label})})]}),(0,m.jsxs)("div",{className:"property-agent",children:[(0,m.jsxs)("a",{href:"#",title:v("syrys_group"),children:[" ",(0,m.jsx)("i",{className:"fa fa-user"}),(0,m.jsx)("span",{className:"uppercase",children:v("syrys_group")})]})," "]}),(0,m.jsxs)("div",{className:"property-date",children:[(0,m.jsx)("i",{className:"fa fa-calendar"}),_]})]}),(0,m.jsx)("div",{className:"property-excerpt",children:(0,m.jsxs)("p",{children:[T.result.substring(0,660)," [\u2026]"]})}),(0,m.jsx)("div",{className:"property-info",children:(0,m.jsxs)("div",{className:"property-info-inner",children:[(0,m.jsx)("div",{className:"property-area",children:(0,m.jsxs)("div",{className:"property-area-inner property-info-item-tooltip","data-toggle":"tooltip",title:"","data-original-title":"Size",children:[(0,m.jsx)("span",{className:"fa fa-arrows"}),(0,m.jsxs)("span",{className:"property-info-value",children:[e.area," m",(0,m.jsx)("sup",{children:"2"})," "]})]})}),(0,m.jsx)("div",{className:"property-bedrooms",children:(0,m.jsxs)("div",{className:"property-bedrooms-inner property-info-item-tooltip","data-toggle":"tooltip",title:"","data-original-title":"".concat(e.bedrooms," ").concat(v("bedroom")),children:[(0,m.jsx)("span",{className:"fa fa-hotel"}),(0,m.jsx)("span",{className:"property-info-value",children:e.bedrooms})]})}),(0,m.jsx)("div",{className:"property-bathrooms",children:(0,m.jsxs)("div",{className:"property-bathrooms-inner property-info-item-tooltip","data-toggle":"tooltip",title:"","data-original-title":"".concat(e.bathrooms," ").concat(v("bathroom")),children:[(0,m.jsx)("span",{className:"fa fa-bath"}),(0,m.jsx)("span",{className:"property-info-value",children:e.bathrooms})]})})]})})]})]})})},a)}))})]})})})})})})})})})}}}]);
//# sourceMappingURL=319.bce88ca7.chunk.js.map