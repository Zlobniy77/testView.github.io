"use strict";(self.webpackChunkqsyrys_frontend=self.webpackChunkqsyrys_frontend||[]).push([[925],{3925:function(e,a,s){s.r(a);var r=s(9439),t=(s(7375),s(6442),s(5382),s(2791)),i=s(1642),l=s(8371),c=s(3065),n=s(4097),o=(s(4676),s(5880),s(7689)),d=s(1087),p=s(948),m=s(8678),h=s(9073),u=s(886),v=s(6086),x=s(9572),j=s(9589),f=s(9230),g=s(184);a.default=function(){var e=(0,o.s0)(),a=(0,f.$G)().t,s=(0,t.useContext)(v.T),y=s.setImages,N=(s.addToFavorites,s.compare),b=s.toggleCompare,w=function(){for(var e=window.location.search.substring(1).split("&"),a={},s=0;s<e.length;s++){var r=e[s].split("=");a[r[0]]=r[1]}return a}().s,k=(0,t.useState)(""),S=(0,r.Z)(k,2),_=S[0],C=S[1],Z=(0,t.useState)(1),T=(0,r.Z)(Z,2),E=T[0],L=T[1],q=(0,t.useState)([]),O=(0,r.Z)(q,2),V=O[0],I=O[1],Y=(0,t.useState)([]),D=(0,r.Z)(Y,2),F=(D[0],D[1],(0,t.useState)("")),M=(0,r.Z)(F,2),R=(M[0],M[1],(0,t.useState)(0)),B=(0,r.Z)(R,2),J=B[0],z=B[1],P=(0,t.useState)("grid"),U=(0,r.Z)(P,2),G=U[0],$=U[1],A=(0,t.useState)({}),H=(0,r.Z)(A,2),K=(H[0],H[1],(0,t.useState)("default")),Q=(0,r.Z)(K,2),W=Q[0],X=Q[1],ee=(0,t.useState)(!0),ae=(0,r.Z)(ee,2),se=ae[0],re=ae[1],te=(0,t.useState)(""),ie=(0,r.Z)(te,2),le=ie[0],ce=ie[1];(0,t.useEffect)((function(){Boolean(w)?ce(w):e("/")}),[]);var ne=(0,j.d)("/api/qsyrys/properties/basic/search?page=".concat(E,"&sort=").concat(W,"&query=").concat(le)),oe=(ne.isLoading,ne.data),de=ne.error;return(0,t.useEffect)((function(){if(oe){var a=oe.properties,s=oe.total;z(s),I(a)}if(de&&!Object.keys(V).length){["Network Error","timeout exceeded"].includes(de.message)?e("/408"):e("/404")}}),[oe,de]),(0,t.useEffect)((function(){Boolean(Object.keys(V).length)&&re(!1)}),[V]),(0,t.useEffect)((function(){se||document.querySelector(".overlay-canvas-sidebar").addEventListener("click",(function(e){document.querySelector(".sidebar-mobile-canvas-icon").classList.remove("changed"),document.querySelector(".overlay-canvas-sidebar").classList.remove("changed"),document.querySelector(".primary-sidebar").classList.remove("changed")}))}),[se]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.ZP,{children:(0,g.jsxs)("title",{children:["Search Results for ",le," | Property Investment"]})}),(0,g.jsxs)("div",{className:"home page-template page-template-elementor_header_footer elementor-kit-4695 page page-id-58 wp-embed-responsive beyot-class chrome header-is-float header-sticky-fix-style elementor-default elementor-template-full-width elementor-kit-4695 elementor-page elementor-page-58 e--ua-blink e--ua-chrome e--ua-webkit elementor elementor-58",id:"wrapper",children:[(0,g.jsx)(x.Z,{deactivate:!se}),(0,g.jsx)(n.Z,{}),(0,g.jsx)(c.Z,{}),!se&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{id:"wrapper-content",className:"clearfix ",children:[(0,g.jsxs)("section",{className:"page-title page-title-background py-[120px]",children:[(0,g.jsx)("div",{className:"page-title-background page-title-parallax",style:{backgroundImage:"url(".concat(u,")")}}),(0,g.jsx)("div",{className:"vc_row-background-overlay bg-[rgba(0,0,0,0.68)]"}),(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)("div",{className:"page-title-inner",children:[(0,g.jsx)("div",{className:"page-title-main-info",children:(0,g.jsx)("h1",{children:a("search_properties")})}),(0,g.jsx)("ul",{className:"breadcrumbs",children:(0,g.jsx)("li",{children:(0,g.jsx)(d.rU,{to:"/",className:"home",children:a("home")})})})]})})]}),(0,g.jsx)("div",{id:"primary-content",className:"pd-top-100 pd-bottom-100 sm-pd-top-80 sm-pd-bottom-80",children:(0,g.jsx)("div",{className:"container clearfix",children:(0,g.jsx)("div",{className:"",children:(0,g.jsx)("div",{className:"",children:(0,g.jsx)("div",{id:"container",children:(0,g.jsx)("div",{id:"content",role:"main",children:(0,g.jsxs)("div",{className:"ere-archive-property-wrap ere-property-wrap",children:[(0,g.jsx)("div",{className:"ere-property-advanced-search clearfix tab color-dark ",children:(0,g.jsx)("div",{className:"form-search-wrap",children:(0,g.jsx)("div",{className:"form-search-inner",children:(0,g.jsx)("div",{className:"ere-search-content",children:(0,g.jsx)("div",{className:"search-properties-form",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-lg-4 col-md-6 col-12 form-group",children:(0,g.jsx)("input",{type:"text",className:"ere-property-identity form-control search-field",value:_,onChange:function(e){return C(e.target.value)},name:"property_identity",placeholder:a("propid_placeholder")})}),(0,g.jsx)("div",{className:"col-lg-4 col-md-6 col-12 form-group submit-search-form pull-right",children:(0,g.jsxs)("button",{onClick:function(){return e("/advanced-search?propertyid=".concat(_))},type:"button",className:"ere-advanced-search-btn",children:[(0,g.jsx)("i",{className:"fa fa-search mr-1"}),a("search")," "]})})]})})})})})})," ",(0,g.jsxs)("div",{className:"ere-archive-property archive-property",children:[(0,g.jsxs)("div",{className:"above-archive-property",children:[(0,g.jsx)("div",{className:"ere-heading",children:(0,g.jsxs)("h2",{children:[a("search_results_for")," `",le,"`"," ",(0,g.jsxs)("sub",{children:["(",J,")"]})]})})," ",(0,g.jsx)("div",{className:"archive-property-action property-status-filter",children:(0,g.jsxs)("div",{className:"archive-property-action-item sort-view-property",children:[(0,g.jsx)("div",{className:"sort-property property-filter",children:(0,g.jsxs)("select",{value:W,onChange:function(e){X(e.target.value),re(!0)},className:"sort-property property-filter !w-[162px] !h-[34px]",children:[(0,g.jsx)("option",{value:"",children:a("please_select")}),(0,g.jsx)("option",{value:"default",children:a("default_order")}),(0,g.jsx)("option",{value:"featured",children:a("featured")}),(0,g.jsx)("option",{value:"a_price",children:a("pricelth")}),(0,g.jsx)("option",{value:"b_price",children:a("pricehtl")}),(0,g.jsx)("option",{value:"a_date",children:a("dateotn")}),(0,g.jsx)("option",{value:"b_date",children:a("datento")})]})}),(0,g.jsxs)("div",{className:"view-as",children:[(0,g.jsx)("span",{onClick:function(){return $("list")},className:"view-as-list ".concat("list"==G&&"active"),title:a("val"),children:(0,g.jsx)("i",{className:"fa fa-list-ul"})}),(0,g.jsx)("span",{"data-view-as":"property-grid",onClick:function(){return $("grid")},className:"view-as-grid ".concat("grid"==G&&"active"),title:a("vag"),children:(0,g.jsx)("i",{className:"fa fa-th-large"})})]})]})})]}),Boolean(Object.values((null===V||void 0===V?void 0:V.data)||{}).length)?(0,g.jsxs)("div",{style:{columns:"grid"==G?"auto":"unset"},id:"ere-props",className:"".concat("grid"==G?"columns-sm-2 columns-3":"columns-sm-1 columns-1"," ere-property clearfix property-grid col-gap-30 columns-md-2 columns-xs-1 columns-mb-1"),children:[Object.values(V.data).map((function(e,s){var t=JSON.parse(e.images),i=(null===t||void 0===t?void 0:t[e.selectedImg])||t[0],l=JSON.parse(e.status)[0],c=JSON.parse(e.propertytype),n=(0,r.Z)(c,1)[0],o=(0,h.Vt)(e.description),u=(new Date(e.created_at).getTime()-(new Date).getTime())/1e3/2592e3,v=a("timeago");return v=u<1?a("timeago2"):u<12?"".concat(Math.floor(u)," ").concat(a("timeago3")):"".concat(Math.floor(u/12)," ").concat(a("timeago4")),(0,g.jsx)("div",{className:"mg-bottom-30 ere-item-wrap ere-property-featured",children:(0,g.jsxs)("div",{className:"property-inner",children:[(0,g.jsxs)("div",{className:"property-image",children:[(0,g.jsx)("img",{decoding:"async",loading:"lazy",width:"330",height:"180",src:i,onError:function(e){e.target.src="https://www.qsyrys.com/wp-content/uploads/2017/12/no-image.jpg"},alt:e.name,title:e.name}),(0,g.jsxs)("div",{className:"property-action block-center",children:[(0,g.jsxs)("div",{className:"block-center-inner",children:[(0,g.jsx)(m.Z,{arrow:!0,title:a("photos",{photos:t.length}),children:(0,g.jsx)("div",{className:"property-view-gallery-wrap",onClick:function(){return y(t)},"data-toggle":"tooltip",children:(0,g.jsx)("a",{"data-property-id":"8404",href:"javascript:void(0)",className:"property-view-gallery",children:(0,g.jsx)("i",{className:"fa fa-camera"})})})}),(0,g.jsx)(m.Z,{arrow:!0,title:a("compare"),children:(0,g.jsx)("a",{className:"compare-property",href:"javascript:void(0)","data-property-id":"8404","data-toggle":"tooltip",title:"Compare",onClick:function(){return b({id:e.id,image:i})},children:(0,g.jsx)("i",{className:"fa ".concat(N.map((function(e){return e.id})).includes(e.id)?"fa-minus":"fa-plus")})})})]}),(0,g.jsx)(d.rU,{className:"property-link",to:"/testView.github.io/property/".concat(e.id),title:e.name})]}),"second"==e.position&&(0,g.jsx)("div",{className:"property-label property-featured",children:(0,g.jsx)("p",{className:"label-item",children:(0,g.jsxs)("span",{className:"property-label-bg bg-[#624615]",children:[a("featured")," ",(0,g.jsx)("span",{className:"property-arrow border-x-[#624615]"})]})})}),(0,g.jsx)("div",{className:"property-status",children:(0,g.jsx)("p",{className:"status-item",children:(0,g.jsxs)("span",{className:"property-status-bg",style:{backgroundColor:-1!=(null===l||void 0===l?void 0:l.label).toLowerCase().indexOf("rent")?"#32b5f8":"#dd3333"},children:[null===l||void 0===l?void 0:l.label,(0,g.jsx)("span",{style:{borderLeftColor:-1!=(null===l||void 0===l?void 0:l.label).toLowerCase().indexOf("rent")?"#32b5f8":"#dd3333",borderRightColor:-1!=(null===l||void 0===l?void 0:l.label).toLowerCase().indexOf("rent")?"#32b5f8":"#dd3333"},className:"property-arrow"})]})})})]}),(0,g.jsxs)("div",{className:"property-item-content",children:[(0,g.jsxs)("div",{className:"property-heading",children:[(0,g.jsx)("h2",{className:"property-title",children:(0,g.jsx)("a",{href:"/testView.github.io/property/".concat(e.id),title:e.name,children:e.name})}),(0,g.jsx)("div",{className:"property-price",children:(0,g.jsx)("span",{children:"true"==e.callforprice?a("call_for_price"):(0,g.jsx)(p.h3,{thousandSeparator:!0,displayType:"text",value:Number(e.price),prefix:e.beforepricelabel})})})]}),(0,g.jsxs)("div",{className:"property-location",title:"SYRYS INVESTMENT LTD",children:[(0,g.jsx)("i",{className:"fa fa-map-marker"}),(0,g.jsx)("a",{target:"_blank",href:"http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD",children:(0,g.jsx)("span",{children:"SYRYS INVESTMENT LTD"})})]}),(0,g.jsxs)("div",{className:"property-element-inline",children:[(0,g.jsxs)("div",{className:"property-type-list",children:[(0,g.jsx)("i",{className:"fa fa-tag"}),(0,g.jsx)("a",{href:"/property-type/".concat(null===n||void 0===n?void 0:n.value),title:null===n||void 0===n?void 0:n.value,children:(0,g.jsxs)("span",{children:[null===n||void 0===n?void 0:n.label," "]})})]}),(0,g.jsxs)("div",{className:"property-agent",children:[(0,g.jsxs)("div",{href:"/author/syrysgmail-com/",title:a("syrys_group"),children:[" ",(0,g.jsx)("i",{className:"fa fa-user"}),(0,g.jsx)("span",{children:a("syrys_group")})]})," "]}),(0,g.jsx)("div",{className:"property-date ".concat("list"==G&&"active"),children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("i",{className:"fa fa-calendar"}),v]})})]}),(0,g.jsx)("div",{className:"property-excerpt ".concat("list"==G&&"active"),children:(0,g.jsxs)("p",{children:[o.result.substring(0,800)," ","[\u2026]"]})}),(0,g.jsx)("div",{className:"property-info",children:(0,g.jsxs)("div",{className:"property-info-inner",children:[(0,g.jsx)("div",{className:"property-area",children:(0,g.jsxs)("div",{className:"property-area-inner property-info-item-tooltip","data-toggle":"tooltip",title:"Size",children:[(0,g.jsx)("span",{className:"fa fa-arrows"}),(0,g.jsxs)("span",{className:"property-info-value",children:[e.area," m",(0,g.jsx)("sup",{children:"2"})," "]})]})}),(0,g.jsx)("div",{className:"property-bedrooms",children:(0,g.jsxs)("div",{className:"property-bedrooms-inner property-info-item-tooltip","data-toggle":"tooltip",title:"".concat(e.bedrooms," ").concat(a("bedrooms")),children:[(0,g.jsx)("span",{className:"fa fa-hotel"}),(0,g.jsx)("span",{className:"property-info-value",children:e.bedrooms})]})}),(0,g.jsx)("div",{className:"property-bathrooms",children:(0,g.jsxs)("div",{className:"property-bathrooms-inner property-info-item-tooltip","data-toggle":"tooltip",title:"".concat(e.bathrooms," ").concat(a("bathrooms")),children:[(0,g.jsx)("span",{className:"fa fa-bath"}),(0,g.jsx)("span",{className:"property-info-value",children:e.bathrooms})]})})]})})]})]})},s)})),(0,g.jsx)("div",{className:"clearfix"}),(0,g.jsx)("div",{className:"paging-navigation clearfix",children:function(){var e=!1,a=V.links.filter((function(a,s){return!(V.links.length>4)||(!e&&!a.active||(a.active?(e=!0,!0):!(e&&"Next &raquo;"!=a.label&&e&&!V.links[s-1].active)))}));return a.map((function(e,s){var r="".concat(s==V.links.length-1&&"next"," ").concat(!s&&"prev"," page-numbers ").concat(e.active&&"current");if(e.url)return e.active?(0,g.jsx)("span",{"aria-current":"page",className:r,children:(0,h.Vt)(e.label).result},s):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:r,to:"/advanced-search?page=".concat(e.label),onClick:function(){L(e.label),re(!0),window.location.href="#ere-props"},children:(0,h.Vt)(e.label).result},s),Boolean(a.length<V.links.length&s==a.length-2)&&(0,g.jsx)("span",{className:"page-numbers dots",children:"\u2026"})]})}))}()})]}):(0,g.jsx)("div",{className:"py-3",children:(0,g.jsx)("p",{children:a("no_props_found")})})]})]})})})})})})})]}),(0,g.jsx)("div",{className:"overlay-canvas-sidebar"})]}),(0,g.jsx)(l.default,{})]})]})}},5880:function(){},5382:function(){},7375:function(){},6442:function(){},886:function(e,a,s){e.exports=s.p+"static/media/page-title.6f2b43fa66dc560e52b9.webp"}}]);
//# sourceMappingURL=925.0888f055.chunk.js.map