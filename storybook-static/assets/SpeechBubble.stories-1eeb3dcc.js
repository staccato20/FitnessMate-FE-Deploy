import{j as r}from"./jsx-runtime-2aae9559.js";import{a as T}from"./Icon-d5118378.js";import{p as a}from"./styled-components.browser.esm-442cc764.js";import{t as s,f as M}from"./theme-003d45ab.js";import"./index-ff614419.js";const y=({children:e})=>e,_=a.div`
  position: relative;
  padding: ${({$isMultiline:e})=>e?"20px 38px":"16px 28px"};
  display: flex;
  flex-direction: column;
  gap: ${({$isIcon:e})=>e?"8px":"3px"};
  justify-content: center;
  align-items: center;
  border-radius: 66px;
  border: 1px solid ${s.Netural800};
  background: ${s.Netural0};
  border-collapse: collapse;
  .tooltip {
    position: absolute;
    top: -10px;
  }
`,N=a.span`
  color: ${s.Netural900};
  ${M.h4};
`,g=a.span`
  color: ${s.Netural600};
  ${M.b6};
`,B=({children:e})=>r.jsx(N,{children:e});B.__docgenInfo={description:"",methods:[],displayName:"MainText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const j=({children:e})=>r.jsx(g,{children:e});j.__docgenInfo={description:"",methods:[],displayName:"SubText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const f=({children:e,isIcon:I=!0})=>r.jsxs(_,{$isMultiline:Array.isArray(e),$isIcon:Array.isArray(e)&&typeof e[0].props.children=="object",children:[I&&r.jsx(T,{icon:"Tooltip",className:"tooltip"}),e]}),t=Object.assign(f,{MainText:B,SubText:j,Icon:y});f.__docgenInfo={description:"",methods:[],displayName:"SpeechBubbleMain",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},isIcon:{defaultValue:{value:"true",computed:!1},required:!1}}};const X={title:"components/SpeechBubble",component:t,tags:["autodocs"],parameters:{layout:"centered",componentSubtitle:"SpeechBubble은 가이드를 제공해주는 컴포넌트입니다.",docs:{description:{component:`
  - 다음과 같은 컴포넌트를 children으로 사용할 수 있습니다.
        - <SpeechBubble.MainText> 메인이되는 텍스트를 나타냅니다. 렌더링되는 부분이 2줄일 경우 상단의 텍스트를 나타냅니다.
        - <SpeechBubble.SubText> 렌더링되는 부분이 2줄일 경우 하단의 텍스트를 나타냅니다.
        - <SpeechBubble.Icon> 렌더링되는 부분이 2줄일 경우 상단의 아이콘을 나타냅니다.
        `}}}},o={render:()=>r.jsx(t,{children:r.jsx(t.MainText,{children:p})})},n={render:()=>r.jsxs(t,{children:[r.jsx(t.MainText,{children:p}),r.jsx(t.SubText,{children:p})]})},c={render:()=>r.jsxs(t,{children:[r.jsx(t.Icon,{children:r.jsx(T,{icon:$})}),r.jsx(t.MainText,{children:p})]})},p="여기에 대화를 입력해 주세요",$="Star";var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <SpeechBubble>\r
      <SpeechBubble.MainText>{DUMMY_TEXT}</SpeechBubble.MainText>\r
    </SpeechBubble>
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var b,d,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <SpeechBubble>\r
      <SpeechBubble.MainText>{DUMMY_TEXT}</SpeechBubble.MainText>\r
      <SpeechBubble.SubText>{DUMMY_TEXT}</SpeechBubble.SubText>\r
    </SpeechBubble>
}`,...(x=(d=n.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var h,m,S;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <SpeechBubble>\r
      <SpeechBubble.Icon>\r
        <Icon icon={DUMMY_ICON} />\r
      </SpeechBubble.Icon>\r
      <SpeechBubble.MainText>{DUMMY_TEXT}</SpeechBubble.MainText>\r
    </SpeechBubble>
}`,...(S=(m=c.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};const q=["Primary","WithSubtext","WithIcon"];export{o as Primary,c as WithIcon,n as WithSubtext,q as __namedExportsOrder,X as default};
