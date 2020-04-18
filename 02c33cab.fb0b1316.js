(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(6),r=(n(0),n(145)),o=n(147),s={title:"Responsive style \ud83d\udc57"},c={id:"usage/responsive-style0.9.0",title:"Responsive style \ud83d\udc57",description:'import useBaseUrl from "@docusaurus/useBaseUrl";',source:"@site/docs\\usage\\responsive-style0.9.0.mdx",permalink:"/muuri-react/docs/usage/responsive-style0.9.0",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/usage/responsive-style0.9.0.mdx"},l=[{value:"Utility: getResponsiveStyle \ud83d\udce6",id:"utility-getresponsivestyle-",children:[]},{value:"Utility: getStaticStyle \ud83d\udce6",id:"utility-getstaticstyle-",children:[]},{value:"Examples \ud83d\udcd6",id:"examples-",children:[]},{value:"Gotchas: overflow \ud83d\udd25",id:"gotchas-overflow-",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Thanks to the Muuri layout engine, you can create any type of ",Object(r.b)("inlineCode",{parentName:"p"},"layout")," and size the Items as desired simply by setting the CSS style ",Object(r.b)("em",{parentName:"p"},"(width, height, margin and padding)"),"."),Object(r.b)("div",null,Object(r.b)("img",{src:Object(o.a)("gifs/dashboard.gif"),style:{width:"45%"}}),Object(r.b)("img",{style:{width:"4%"}}),Object(r.b)("img",{src:Object(o.a)("gifs/mediaquery.gif"),style:{width:"44%",paddingBottom:"1%"}})),Object(r.b)("p",null,"A very common case is to use the MuuriComponent as a ",Object(r.b)("inlineCode",{parentName:"p"},"grid")," divided into equal cells, and to position each Item in one or more cells. The implementation would be very simple:"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you need ",Object(r.b)("inlineCode",{parentName:"p"},"4 columns"),", and an Item on each column, just use ",Object(r.b)("inlineCode",{parentName:"p"},"width: 25%;")," in the style of the Items. Very simple and effective."))),Object(r.b)("p",null,"If you want to create more dynamic styles by managing them directly in the component, Muuri-react provides two extremely simple ",Object(r.b)("inlineCode",{parentName:"p"},"utilities")," to generate the style of the Items in these cases."),Object(r.b)("h2",{id:"utility-getresponsivestyle-"},"Utility: getResponsiveStyle \ud83d\udce6"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { getResponsiveStyle } from "muuri-react";\n')),Object(r.b)("p",null,"With this utility you can virtually divide the MuuriComponent into ",Object(r.b)("inlineCode",{parentName:"p"},"columns")," and set the Item to be as wide as ",Object(r.b)("inlineCode",{parentName:"p"},"n")," of these columns. In addition you can also set the ",Object(r.b)("strong",{parentName:"p"},"margin")," ",Object(r.b)("em",{parentName:"p"},"(static or dynamic)"),", the ",Object(r.b)("strong",{parentName:"p"},"ratio")," ",Object(r.b)("em",{parentName:"p"},"(dynamic)")," between width and height or the ",Object(r.b)("strong",{parentName:"p"},"height")," ",Object(r.b)("em",{parentName:"p"},"(static)"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// The responsive style.\nconst responsiveStyle = getResponsiveStyle({\n  // The Muuri component is virtually divided into 8 columns,\n  // the width of the item will be 3 columns (minus the margin).\n  column: 3 / 8,\n  // The margin of the item, it can be any CSS values\n  // valid for the margin expressed in "px" or "%".\n  margin: "5%",\n  // The width/height ratio. If you want to set a static\n  // height just set the "height" option in px and remove the "ratio".\n  ratio: 1.5\n});\n')),Object(r.b)("p",null,"So you just need to apply the style. The inner element must have ",Object(r.b)("inlineCode",{parentName:"p"},"position: absolute;"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// The Item component.\nconst Item = ({ text }) => (\n  <div style={responsiveStyle}>\n    <div\n      style={{\n        position: "absolute",\n        left: 0,\n        top: 0,\n        right: 0,\n        bottom: 0\n      }}\n    >\n      I\'m an item.\n    </div>\n  </div>\n);\n')),Object(r.b)("p",null,"The utility does not take into account the ",Object(r.b)("strong",{parentName:"p"},"border")," for the outer element, you can use the border in a ",Object(r.b)("strong",{parentName:"p"},"descending")," element (or change ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"}),"box-sizing"),")."),Object(r.b)("h2",{id:"utility-getstaticstyle-"},"Utility: getStaticStyle \ud83d\udce6"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { getStaticStyle } from "muuri-react";\n')),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"dragging")," an Item with dimensions relative to the MuuriComponent (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"width: 25%"),"), the ",Object(r.b)("inlineCode",{parentName:"p"},"dragFixed")," prop is used to fix its dimensions (see more ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../usage/items-dimensions#dimensions-when-dragging-"}),"here"),")."),Object(r.b)("p",null,"This utility offers more ",Object(r.b)("inlineCode",{parentName:"p"},"flexibility")," than dragFixed and can be useful in cases where the Item has to be dragged between different MuuriComponents and assume different ",Object(r.b)("inlineCode",{parentName:"p"},"sizes")," (as in the gif)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// The Item component.\nconst Item = () => {\n  // Get the Muuri instance.\n  const { grid } = useGrid();\n  // If the item is dragging.\n  const isDragging = useDrag();\n\n  // Item dimensions.\n  const column = 3 / 8;\n  const margin = "5%";\n  const ratio = 1.5;\n\n  // If the item is dragging the style\n  // has to be static.\n  const style = !isDragging\n    ? getResponsiveStyle({ column, margin, ratio })\n    : getStaticStyle({ grid, column, margin, ratio });\n\n  return (\n    <div style={style}>\n      <div className="item-content" />\n    </div>\n  );\n};\n')),Object(r.b)("h2",{id:"examples-"},"Examples \ud83d\udcd6"),Object(r.b)("p",null,"Check the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://codesandbox.io/s/muuri-react-media-query-q6sy6"}),"media query")," example and the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://codesandbox.io/s/muuri-react-dashboard-penbe"}),"dashboard")," example on codesandbox."),Object(r.b)("h2",{id:"gotchas-overflow-"},"Gotchas: overflow \ud83d\udd25"),Object(r.b)("p",null,"Let's say you have a ",Object(r.b)("inlineCode",{parentName:"p"},"overflow-y: auto;")," element, which you use as a scroll container. The MuuriComponent is as wide as the container, the items have ",Object(r.b)("inlineCode",{parentName:"p"},"width: 25%;"),". In each row there should be ",Object(r.b)("strong",{parentName:"p"},"4")," Items."),Object(r.b)("p",null,"When the app starts, this happens:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The MuuriComponent is ",Object(r.b)("strong",{parentName:"li"},"initially")," 100px wide, the Items will be 25px wide."),Object(r.b)("li",{parentName:"ul"},"The Items are many and the MuuriComponent do not fit in the container, the ",Object(r.b)("strong",{parentName:"li"},"scrollbar")," appears."),Object(r.b)("li",{parentName:"ul"},"The width of the MuuriComponent ",Object(r.b)("strong",{parentName:"li"},"decreases")," because of the scrollbar, let's say about 90px."),Object(r.b)("li",{parentName:"ul"},"The CSS engine does ",Object(r.b)("strong",{parentName:"li"},"NOT")," update the Items size which remain at 25px, causing an unwanted layout.")),Object(r.b)("p",null,"The size of the Items will be updated (by the CSS engine) to 22.5px only after a window ",Object(r.b)("strong",{parentName:"p"},"resizing event"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"When")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This problem occurs when relative sizes are used (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"width: 25%;"),") and the ",Object(r.b)("inlineCode",{parentName:"p"},"scrollbar")," appears / disappears."))),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Be careful that the problem does ",Object(r.b)("inlineCode",{parentName:"p"},"not")," arise ",Object(r.b)("inlineCode",{parentName:"p"},"immediately"),", in fact the first layout is calculated correctly before the scrollbar appears. However, when the layout is recalculated with the scrollbar present, for example following a drag, the Muuri engine will find the Muuricomponent 90px wide and the items 25px wide. In the new layout there will therefore be 3 items per row."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"solution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To solve the problem simply use ",Object(r.b)("inlineCode",{parentName:"p"},"overflox-y: scroll")," to make the scroll bar fixed."))))}p.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return n?i.a.createElement(u,s({ref:t},l,{components:n})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},146:function(e,t,n){"use strict";var a=n(0),i=n(35);t.a=function(){return Object(a.useContext)(i.a)}},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(146);function i(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);