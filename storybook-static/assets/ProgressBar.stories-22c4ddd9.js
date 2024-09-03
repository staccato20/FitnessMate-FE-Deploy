import{j as s}from"./jsx-runtime-2aae9559.js";import{p,c as a}from"./styled-components.browser.esm-442cc764.js";import{t as o}from"./theme-003d45ab.js";import"./index-ff614419.js";const c=p.div`
  position: relative;
  ${({$variantStyle:r})=>r}
`,l=p.div`
  position: absolute;
  width: ${({$progress:r})=>`${100/4*r}%`};
  background: ${o.Brand600};
  height: 100%;

  ${({$variant:r,$progress:e})=>r==="round"&&a`
    border-radius: 24px;
      width: {(100 / 4) * ${e}%;
    `}
`,g={default:a`
    height: 4px;
    background: ${o.Brand300};
    margin-bottom: 24px;
  `,round:a`
    width: 100%;
    height: 10px;
    background: ${o.Netural300};
    border-radius: 24px;
  `},u=({progress:r,variant:e="default"})=>{const m=g[e];return s.jsx(c,{$variantStyle:m,children:s.jsx(l,{$variant:e,$progress:r})})};u.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "round"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"round"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},progress:{required:!0,tsType:{name:"number"},description:""}}};const y={component:u,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{progress:{control:{type:"range",min:1,max:4,step:1}}},decorators:[r=>s.jsx("div",{style:{width:"474px"},children:s.jsx(r,{})})]},t={args:{progress:1}};var n,d,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    progress: 1
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,y as default};
