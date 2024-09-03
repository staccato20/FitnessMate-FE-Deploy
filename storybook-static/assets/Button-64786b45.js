import{j as c}from"./jsx-runtime-2aae9559.js";import{p as m,c as a}from"./styled-components.browser.esm-442cc764.js";import{f as t,t as e}from"./theme-003d45ab.js";const p=m.button`
  ${({$sizeStyle:r})=>r};
  ${({$variantStyle:r})=>r};
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  border-radius: 10px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  &:disabled {
    cursor: default;
  }
`,g={sm:a`
    padding: 10px 12px;
    ${t.b7}
  `,md:a`
    padding: 14px 24px;
    ${t.b5}
  `,lg:a`
    padding: 17px 24px;
    ${t.b2}
  `},b={main:a`
    background: ${e.Brand600};
    color: ${e.Netural0};
    &:hover {
      background: ${e.Brand750};
    }
    &:disabled {
      background-color: ${e.Netural450};
    }
  `,weak:a`
    background: ${e.Brand200};
    color: ${e.Brand700};
    &:hover {
      background: linear-gradient(
          0deg,
          rgba(34, 37, 46, 0.06) 0%,
          rgba(34, 37, 46, 0.06) 100%
        ),
        var(--Brand-Light, #d9eefe);
    }
    &:disabled {
      background-color: ${e.Brand200};
    }
  `,grey:a`
    color: ${e.Netural800};
    background-color: ${e.Netural300};
    &:hover {
      background-color: ${e.Netural400};
    }
    &:disabled {
      background-color: ${e.Netural200};
    }
  `,text:a`
    color: ${e.Netural800};
    background: none;
    &:hover {
      background-color: ${e.Netural200};
    }
    &:disabled {
      color: ${e.Netural500};
    }
  `},f=({disabled:r=!1,size:n="md",variant:o="main",children:l,onClick:i,...d})=>{const s=g[n],u=b[o];return c.jsx(p,{disabled:r,$sizeStyle:s,$variantStyle:u,onClick:i,...d,children:l})};f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"main" | "weak" | "grey" | "text"',elements:[{name:"literal",value:'"main"'},{name:"literal",value:'"weak"'},{name:"literal",value:'"grey"'},{name:"literal",value:'"text"'}]},description:"",defaultValue:{value:'"main"',computed:!1}},children:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""}},composes:["ButtonHTMLAttributes"]};export{f as B};
