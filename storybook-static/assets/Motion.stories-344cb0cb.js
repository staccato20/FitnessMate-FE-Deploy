import{j as e}from"./jsx-runtime-2aae9559.js";import{r as i}from"./index-ff614419.js";import{p as c}from"./styled-components.browser.esm-442cc764.js";import{B as f}from"./Button-64786b45.js";import{m as g}from"./motion-16d45a39.js";import{a as y}from"./theme-003d45ab.js";const o=({isExecute:a,motionValue:t})=>{const r={width:"200px",height:"200px",borderRadius:"50%",background:"blue"},s={initial:{x:-200},execute:{x:200}};return e.jsx(e.Fragment,{children:e.jsx(g.div,{style:r,variants:s,animate:a?"execute":"initial",transition:{type:"spring",...t}})})};o.__docgenInfo={description:"",methods:[],displayName:"Motion",props:{isExecute:{required:!0,tsType:{name:"boolean"},description:""},motionValue:{required:!0,tsType:{name:"signature",type:"object",raw:"{ stiffness: number; damping: number }",signature:{properties:[{key:"stiffness",value:{name:"number",required:!0}},{key:"damping",value:{name:"number",required:!0}}]}},description:""}}};const M={component:o,title:"components/Motion",tags:["autodocs"],parameters:{layout:"centered"}},n={args:{},render:a=>{const[t,r]=i.useState(!1),[s,d]=i.useState({stiffness:100,damping:100});return e.jsxs(b,{children:[e.jsx(o,{isExecute:t,motionValue:s}),e.jsx(E,{children:Object.entries(y).map(([l,x])=>e.jsx(f,{onClick:()=>{r(!t),d(x)},children:l}))})]})}},b=c.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`,E=c.div`
  display: flex;
  gap: 5px;
`;var u,p,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: _ => {
    const [isExecute, setExecute] = useState(false);
    const [motionValue, setMotionValue] = useState({
      stiffness: 100,
      damping: 100
    });
    return <Wrapper>\r
        <Motion isExecute={isExecute} motionValue={motionValue} />\r
        <ButtonWrapper>\r
          {Object.entries(animation).map(([key, value]) => <Button onClick={() => {
          setExecute(!isExecute);
          setMotionValue(value);
        }}>\r
              {key}\r
            </Button>)}\r
        </ButtonWrapper>\r
      </Wrapper>;
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const W=["Primary"];export{n as Primary,W as __namedExportsOrder,M as default};
