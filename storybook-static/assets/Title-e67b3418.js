import{j as i}from"./jsx-runtime-2aae9559.js";import{p as a,c as r}from"./styled-components.browser.esm-442cc764.js";import{t,f as e}from"./theme-003d45ab.js";const s=a.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  ${({$variantStyle:o})=>o}
`,p=a.span`
  color: ${t.Brand750};
`,d=a.span`
  color: ${t.Netural800};
`,m={big:r`
    color: ${t.Netural900};
    ${e.h1};
    .topTitleText {
      color: ${t.Brand750};
      ${e.b6};
    }

    .bottomTitleText {
      color: ${t.Netural800};
      ${e.b4};
      padding-top: 8px;
    }
  `,midA:r`
    color: ${t.Netural990};
    ${e.h2};
    .topTitleText {
      color: ${t.Brand750};
      ${e.d1};
    }
    .bottomTitleText {
      color: ${t.Netural800};
      ${e.b4};
      padding-top: 4px;
    }
  `,midB:r`
    color: ${t.Netural990};
    ${e.h2};
    .topTitleText {
      color: ${t.Brand750};
      ${e.d1};
    }
    .bottomTitleText {
      color: ${t.Brand600};
      ${e.b5};
    }
  `,small:r`
    color: ${t.Netural990};
    ${e.h3};
    gap: 2px;

    .topTitleText {
      color: ${t.Brand750};
      ${e.d2};
    }
    .bottomTitleText {
      color: ${t.Netural800};
      ${e.b6};
      padding-top: 6px;
    }
  `},n=({variant:o,children:l})=>{const c=m[o];return i.jsx(s,{$variantStyle:c,children:l})},T=({children:o})=>i.jsx(p,{className:"topTitleText",children:o}),u=({children:o,...l})=>i.jsx(d,{className:"bottomTitleText",...l,children:o});n.SubTopTitle=T;n.SubBottomTitle=u;n.__docgenInfo={description:"",methods:[{name:"SubTopTitle",docblock:null,modifiers:["static"],params:[{name:"{ children }: StrictPropsWithChildren",optional:!1,type:{name:"intersection",raw:`P & {\r
  children: ReactNode\r
}`,elements:[{name:"P"},{name:"signature",type:"object",raw:`{\r
  children: ReactNode\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}],alias:"StrictPropsWithChildren"}}],returns:null},{name:"SubBottomTitle",docblock:null,modifiers:["static"],params:[{name:"{ children, ...props }: StrictPropsWithChildren",optional:!1,type:{name:"intersection",raw:`P & {\r
  children: ReactNode\r
}`,elements:[{name:"P"},{name:"signature",type:"object",raw:`{\r
  children: ReactNode\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}],alias:"StrictPropsWithChildren"}}],returns:null}],displayName:"Title",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{n as T};
