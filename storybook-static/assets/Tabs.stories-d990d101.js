import{j as r}from"./jsx-runtime-2aae9559.js";import{T as d,a as p,u as m}from"./Tab-a950acb5.js";import{p as t}from"./styled-components.browser.esm-442cc764.js";import"./index-ff614419.js";import"./theme-003d45ab.js";const u=t.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`,b=t.div`
  display: flex;
  gap: 2px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`,h=t.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,e=({children:a})=>r.jsx(p,{children:r.jsx(u,{children:a})}),T=({children:a})=>r.jsx(b,{children:a}),P=({children:a})=>r.jsx(h,{children:a}),x=({children:a,index:l})=>{const{activeTab:c}=m();return l===c?a:null};e.TabList=T;e.TabPanel=x;e.TabPanels=P;e.Tab=d;e.__docgenInfo={description:"",methods:[{name:"TabList",docblock:null,modifiers:["static"],params:[{name:"{ children }: StrictPropsWithChildren",optional:!1,type:{name:"intersection",raw:`P & {\r
  children: ReactNode\r
}`,elements:[{name:"P"},{name:"signature",type:"object",raw:`{\r
  children: ReactNode\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}],alias:"StrictPropsWithChildren"}}],returns:null},{name:"TabPanel",docblock:null,modifiers:["static"],params:[{name:`{\r
  children,\r
  index,\r
}: StrictPropsWithChildren<TabPanelProps>`,optional:!1,type:{name:"intersection",raw:`P & {\r
  children: ReactNode\r
}`,elements:[{name:"TabPanelProps"},{name:"signature",type:"object",raw:`{\r
  children: ReactNode\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}],alias:"StrictPropsWithChildren"}}],returns:null},{name:"TabPanels",docblock:null,modifiers:["static"],params:[{name:"{ children }: StrictPropsWithChildren",optional:!1,type:{name:"intersection",raw:`P & {\r
  children: ReactNode\r
}`,elements:[{name:"P"},{name:"signature",type:"object",raw:`{\r
  children: ReactNode\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}],alias:"StrictPropsWithChildren"}}],returns:null},{name:"Tab",docblock:null,modifiers:["static"],params:[{name:"{ children, index, variant, count, ...props }: TabProps",optional:!1,type:{name:"TabProps",alias:"TabProps"}}],returns:null}],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const f=r.jsxs(e,{children:[r.jsxs(e.TabList,{children:[r.jsx(e.Tab,{index:0,variant:"line",count:3,children:"상체"}),r.jsx(e.Tab,{index:1,variant:"line",count:8,children:"하체"})]}),r.jsxs(e.TabPanels,{children:[r.jsx(e.TabPanel,{index:0,children:"상체 운동목록"}),r.jsx(e.TabPanel,{index:1,children:"하체 운동목록"})]})]}),R={component:e,title:"components/Tabs",tags:["autodocs"],parameters:{layout:"centered"}},n={render:()=>f};var s,i,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    return DUMMY_DATA;
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const w=["Primary"];export{n as Primary,w as __namedExportsOrder,R as default};
