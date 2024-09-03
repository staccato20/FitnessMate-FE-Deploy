import{j as t}from"./jsx-runtime-2aae9559.js";import{T as e}from"./Title-e67b3418.js";import"./index-ff614419.js";import"./styled-components.browser.esm-442cc764.js";import"./theme-003d45ab.js";const P={title:"components/Title",component:e,tags:["autodocs"],parameters:{layout:"centered",componentSubtitle:"Title 가이드를 제공해주는 컴포넌트입니다.",docs:{description:{component:`
  - 다음과 같은 컴포넌트를 children으로 사용할 수 있습니다.
        - <Title.TopSubTtile> 상단의 텍스트를 나타냅니다.
        - <Title.BottomSubTitle> 하단의 텍스트를 나타냅니다.
        `}},argTypes:{variant:{control:{type:"radio"},options:typeof e}}}},r={render:()=>t.jsx(e,{variant:"big",children:"메인 타이틀"})},i={render:()=>t.jsxs(e,{variant:"big",children:[t.jsx(e.SubTopTitle,{children:"보조 타이틀이에요"}),"헤드 타이틀이에요",t.jsx(e.SubBottomTitle,{children:"보조 타이틀이에요"})]})},o={render:()=>t.jsxs(e,{variant:"midA",children:[t.jsx(e.SubTopTitle,{children:"보조 타이틀이에요"}),"헤드 타이틀이에요",t.jsx(e.SubBottomTitle,{children:"보조 타이틀이에요"})]})},a={render:()=>t.jsxs(e,{variant:"midB",children:["헤드 타이틀이에요",t.jsx(e.SubBottomTitle,{children:"보조 타이틀이에요"})]})},s={render:()=>t.jsxs(e,{variant:"small",children:[t.jsx(e.SubTopTitle,{children:"보조 타이틀이에요"}),"헤드 타이틀이에요",t.jsx(e.SubBottomTitle,{children:"보조 타이틀이에요"})]})};var n,l,T;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Title variant="big">메인 타이틀</Title>
}`,...(T=(l=r.parameters)==null?void 0:l.docs)==null?void 0:T.source}}};var m,c,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Title variant="big">\r
      <Title.SubTopTitle>보조 타이틀이에요</Title.SubTopTitle>\r
      헤드 타이틀이에요\r
      <Title.SubBottomTitle>보조 타이틀이에요</Title.SubBottomTitle>\r
    </Title>
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,S;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Title variant="midA">\r
      <Title.SubTopTitle>보조 타이틀이에요</Title.SubTopTitle>\r
      헤드 타이틀이에요\r
      <Title.SubBottomTitle>보조 타이틀이에요</Title.SubBottomTitle>\r
    </Title>
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var b,B,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Title variant="midB">\r
      헤드 타이틀이에요\r
      <Title.SubBottomTitle>보조 타이틀이에요</Title.SubBottomTitle>\r
    </Title>
}`,...(x=(B=a.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var j,g,h;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Title variant="small">\r
      <Title.SubTopTitle>보조 타이틀이에요</Title.SubTopTitle>\r
      헤드 타이틀이에요\r
      <Title.SubBottomTitle>보조 타이틀이에요</Title.SubBottomTitle>\r
    </Title>
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const _=["Primary","Big","midA","midB","small"];export{i as Big,r as Primary,_ as __namedExportsOrder,P as default,o as midA,a as midB,s as small};
