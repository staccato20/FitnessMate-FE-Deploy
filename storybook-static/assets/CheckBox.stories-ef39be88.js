import{j as n}from"./jsx-runtime-2aae9559.js";import{p as t,c as s}from"./styled-components.browser.esm-442cc764.js";import{a as b}from"./Icon-d5118378.js";import{t as o,f as y}from"./theme-003d45ab.js";import"./index-ff614419.js";t.button`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 6px 18px;
  align-items: center;
  border-radius: 12px;
  border: ${({$isChecked:e})=>e?"1px solid #0b98ff":"1px solid #A2B2C2"};
  background: ${({$isChecked:e})=>e?"#ecf7ff":"#fff"};
  height: 50px;
`;t.img`
  width: ${({$isChecked:e})=>e?"24px":"20px"};
  height: ${({$isChecked:e})=>e?"24px":"20px"};
  margin: ${({$isChecked:e})=>e?"0px":"2px"};
`;t.span`
  color: var(--Neutral-950, #272e38);
  text-align: center;
  font-size: 16px;
`;t.button`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 6px 18px;
  align-items: center;
  border-radius: 12px;
  background: ${({$isChecked:e})=>e?"#f2f4f6":"#fff"};
  height: 50px;
  &:hover {
    background: ${({$isChecked:e})=>e?"#f2f4f6":`${o.Netural200}`};
  }
`;t.span`
  color: ${({$isChecked:e})=>e?"#272e38":"#6b7684"};
  text-align: center;
  font-size: 14px;
`;const S=t.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  ${({$sizeStyle:e})=>e};
  svg {
    position: absolute;
  }
`,$=t.img`
  width: 100%;
  z-index: -1;
  border-radius: 14px;
  ${({$borderStyle:e})=>e};
  aspect-ratio: 1 / 1;
`,k=t.span`
  color: ${o.Netural600};
  ${y.b3};
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,w=(e,r)=>{switch(e){case"big":return{sizeStyle:s`
          gap: 12px;
          width: 169px;
        `,borderStyle:s`
          border: 3.5px solid ${r?o.Brand600:o.Netural300};
        `};case"small":return{sizeStyle:s`
          gap: 8px;
          width: 114px;
        `,borderStyle:s`
          border: 3px solid ${r?o.Brand600:o.Netural300};
        `};default:return{sizeStyle:s``,borderStyle:s``}}},c=({variant:e,src:r,alt:l,isSelected:a,handleToggle:x,children:m,...f})=>{const{sizeStyle:h,borderStyle:u}=w(e,a);return n.jsxs(S,{$sizeStyle:h,onClick:x,...f,children:[n.jsx($,{$borderStyle:u,src:r,alt:l}),a&&n.jsx(b,{icon:"CircleChecked"}),n.jsx(k,{children:m})]})};c.__docgenInfo={description:"",methods:[],displayName:"ImgCheckBox",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const{useArgs:I}=__STORYBOOK_MODULE_PREVIEW_API__,B={src:"https://github.com/user-attachments/assets/6711e495-0014-42d3-9afd-490015d3adf5",alt:"테스트 이미지를 설명"},T={component:c,title:"components/ImgCheckBox",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:{type:"radio"},options:["big","small"]}}},i={args:{variant:"big",...B,isSelected:!1,children:"기구 이름이 너무 길어서 두줄이 넘어가는 경우"},render:e=>{const[{isSelected:r},l]=I(),a=()=>{l({isSelected:!r})};return n.jsx(c,{...e,isSelected:r,handleToggle:a,children:e.children})}};var d,p,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "big",
    ...DUMMY,
    isSelected: false,
    children: "기구 이름이 너무 길어서 두줄이 넘어가는 경우"
  },
  render: args => {
    const [{
      isSelected
    }, setArgs] = useArgs();
    const handleToggle = () => {
      setArgs({
        isSelected: !isSelected
      });
    };
    return <ImgCheckBox {...args} isSelected={isSelected} handleToggle={handleToggle}>\r
        {args.children}\r
      </ImgCheckBox>;
  }
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const A=["Primary"];export{i as Primary,A as __namedExportsOrder,T as default};
