import{j as r}from"./jsx-runtime-2aae9559.js";import{c as t,p as f}from"./styled-components.browser.esm-442cc764.js";import{a as i}from"./Icon-d5118378.js";import{t as e,f as s}from"./theme-003d45ab.js";const g={black:t`
    color: ${e.Netural0};
    background-color: ${e.Netural900};
    &:disabled {
      background-color: ${e.Netural500};
    }
  `,blue:t`
    color: ${e.Netural0};
    background-color: ${e.Brand600};
    &:disabled {
      background-color: ${e.Netural450};
    }
  `,grey:t`
    color: ${e.Netural800};
    background-color: ${e.Netural300};
    &:disabled {
      color: ${e.Netural500};
      background-color: ${e.Netural200};
      path {
        fill: ${e.Netural500};
      }
    }
  `},x={big:t`
    padding: 14px 20px 14px 24px;
    ${s.b2};
    gap: 8px;
    svg {
      width: 24px;
      height: 24px;
    }
  `,small:t`
    padding: 10px 16px 10px 12px;
    ${s.b7};
    gap: 4px;
    svg {
      width: 20px;
      height: 20px;
    }
  `},y=f.button`
  ${({$variantStyle:a})=>a};
  ${({$sizeStyle:a})=>a};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  border-radius: 56px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:disabled {
    cursor: default;
  }
  font-weight: 500;
`,v=({disabled:a=!1,variant:o="black",children:u,onClick:c,leftIcon:n,rightIcon:l,size:d="big",...p})=>{const m=g[o],b=x[d];return r.jsxs(y,{disabled:a,$variantStyle:m,$sizeStyle:b,$variant:o,onClick:c,...p,children:[n&&r.jsx(i,{icon:n}),u,l&&r.jsx(i,{icon:l})]})};v.__docgenInfo={description:"",methods:[],displayName:"RoundButton",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"black" | "blue" | "grey"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"grey"'}]},description:"",defaultValue:{value:'"black"',computed:!1}},children:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},leftIcon:{required:!1,tsType:{name:"union",raw:'IconPropsType["icon"]'},description:""},rightIcon:{required:!1,tsType:{name:"union",raw:'IconPropsType["icon"]'},description:""},size:{required:!1,tsType:{name:"union",raw:'"big" | "small"',elements:[{name:"literal",value:'"big"'},{name:"literal",value:'"small"'}]},description:"",defaultValue:{value:'"big"',computed:!1}}},composes:["ButtonHTMLAttributes"]};export{v as R};
