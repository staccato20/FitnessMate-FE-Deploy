import{j as i}from"./jsx-runtime-2aae9559.js";import{p as d,c as s}from"./styled-components.browser.esm-442cc764.js";import{f as c,t}from"./theme-003d45ab.js";import{r as l}from"./index-ff614419.js";const v=d.button`
  border: none;
  ${r=>r.$variantStyle}
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,f=d.span`
  ${c.b7}
  color:${t.Brand700}
`,h=(r,e)=>{switch(r){case"fill":return s`
        color: ${e?t.Netural0:t.Netural800};
        background: ${e?t.Brand600:t.Netural0};
        padding: 10px 14px;
        ${c.b4};
        border-radius: 34px;
        &:hover {
          background-color: ${!e&&t.Netural200};
        }
      `;case"line":return s`
        color: ${e?t.Netural950:t.Netural700};
        position: relative;
        padding: 10px;
        ${c.b2};
        border-radius: 8px;
        &:hover {
          background: ${t.Netural200};
        }

        ${e&&s`
          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: calc(100% - 20px);
            border-radius: 2px;
            border-bottom: 3px solid ${t.Netural900};
          }
        `}
      `}},p=0,u=l.createContext({activeTab:p,switchTab:r=>{}}),y=()=>l.useContext(u),$=({children:r})=>{const[e,o]=l.useState(p),a=n=>{o(n)};return i.jsx(u.Provider,{value:{activeTab:e,switchTab:a},children:r})};$.__docgenInfo={description:"",methods:[],displayName:"TabsProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const N=({children:r,index:e,variant:o,count:a,...n})=>{const{activeTab:b,switchTab:m}=y(),T=h(o,b===e),x=()=>{m(e)};return i.jsxs(v,{onClick:x,$variantStyle:T,...n,children:[r,o==="line"&&i.jsx(f,{children:a})]})};N.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"union",raw:'"fill" | "line"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"line"'}]},description:""},index:{required:!0,tsType:{name:"number"},description:""},count:{required:!1,tsType:{name:"number"},description:""}},composes:["ButtonHTMLAttributes"]};export{N as T,$ as a,y as u};
