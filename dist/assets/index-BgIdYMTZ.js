import{r as b,M as ke,N as we,d,b7 as X,o as s,e as F,G as T,H as Ce,i as t,f as l,h as e,m as Ne,F as E,E as K,n as m,q as u,aG as Y,j as f,t as L,p as h,A as xe,v as Te,aO as Ie}from"./index-C27tGZCI.js";const Ue={class:"app-container"},Se={class:"dialog-footer"},Fe=xe({name:"Menu"}),Re=Object.assign(Fe,{setup(qe){const{proxy:c}=Te(),{sys_show_hide:Z,sys_normal_disable:q}=c.useDict("sys_show_hide","sys_normal_disable"),O=b([]),V=b(!1),M=b(!0),U=b(!0),R=b(""),P=b([]),$=b(!1),D=b(!0),Q=b(null),ee=ke({form:{},queryParams:{menuName:void 0,visible:void 0},rules:{menuName:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],orderNum:[{required:!0,message:"菜单顺序不能为空",trigger:"blur"}],path:[{required:!0,message:"路由地址不能为空",trigger:"blur"}]}}),{queryParams:N,form:a,rules:le}=we(ee);function x(){M.value=!0,listMenu(N.value).then(r=>{O.value=c.handleTree(r.data,"menuId"),M.value=!1})}function j(){P.value=[],listMenu().then(r=>{const o={menuId:0,menuName:"主类目",children:[]};o.children=c.handleTree(r.data,"menuId"),P.value.push(o)})}function te(){V.value=!1,A()}function A(){a.value={menuId:void 0,parentId:0,menuName:void 0,icon:void 0,menuType:"M",orderNum:void 0,isFrame:"1",isCache:"0",visible:"0",status:"0"},c.resetForm("menuRef")}function ne(){Q.value.reset()}function ae(r){a.value.icon=r}function B(){x()}function oe(){c.resetForm("queryRef"),B()}function G(r){A(),j(),r!=null&&r.menuId?a.value.parentId=r.menuId:a.value.parentId=0,V.value=!0,R.value="添加菜单"}function ue(){D.value=!1,$.value=!$.value,Ie(()=>{D.value=!0})}async function de(r){A(),await j(),getMenu(r.menuId).then(o=>{a.value=o.data,V.value=!0,R.value="修改菜单"})}function se(){c.$refs.menuRef.validate(r=>{r&&(a.value.menuId!=null?updateMenu(a.value).then(o=>{c.$modal.msgSuccess("修改成功"),V.value=!1,x()}):addMenu(a.value).then(o=>{c.$modal.msgSuccess("新增成功"),V.value=!1,x()}))})}function re(r){c.$modal.confirm('是否确认删除名称为"'+r.menuName+'"的数据项?').then(function(){return delMenu(r.menuId)}).then(()=>{x(),c.$modal.msgSuccess("删除成功")}).catch(()=>{})}return x(),(r,o)=>{const C=d("el-input"),p=d("el-form-item"),me=d("el-option"),pe=d("el-select"),_=d("el-button"),z=d("el-form"),i=d("el-col"),ie=d("right-toolbar"),H=d("el-row"),g=d("el-table-column"),J=d("svg-icon"),ce=d("dict-tag"),fe=d("el-table"),_e=d("el-tree-select"),y=d("el-radio"),I=d("el-radio-group"),ye=d("search"),v=d("el-icon"),ve=d("icon-select"),be=d("el-popover"),he=d("el-input-number"),k=d("question-filled"),w=d("el-tooltip"),Ve=d("el-dialog"),S=X("hasPermi"),ge=X("loading");return s(),F("div",Ue,[T(l(z,{model:t(N),ref:"queryRef",inline:!0},{default:e(()=>[l(p,{label:"菜单名称",prop:"menuName"},{default:e(()=>[l(C,{modelValue:t(N).menuName,"onUpdate:modelValue":o[0]||(o[0]=n=>t(N).menuName=n),placeholder:"请输入菜单名称",clearable:"",style:{width:"200px"},onKeyup:Ne(B,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),l(p,{label:"状态",prop:"status"},{default:e(()=>[l(pe,{modelValue:t(N).status,"onUpdate:modelValue":o[1]||(o[1]=n=>t(N).status=n),placeholder:"菜单状态",clearable:"",style:{width:"200px"}},{default:e(()=>[(s(!0),F(E,null,K(t(q),n=>(s(),m(me,{key:n.value,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(p,null,{default:e(()=>[l(_,{type:"primary",icon:"Search",onClick:B},{default:e(()=>[u("搜索")]),_:1}),l(_,{icon:"Refresh",onClick:oe},{default:e(()=>[u("重置")]),_:1})]),_:1})]),_:1},8,["model"]),[[Ce,t(U)]]),l(H,{gutter:10,class:"mb8"},{default:e(()=>[l(i,{span:1.5},{default:e(()=>[T((s(),m(_,{type:"primary",plain:"",icon:"Plus",onClick:G},{default:e(()=>[u("新增")]),_:1})),[[S,["system:menu:add"]]])]),_:1}),l(i,{span:1.5},{default:e(()=>[l(_,{type:"info",plain:"",icon:"Sort",onClick:ue},{default:e(()=>[u("展开/折叠")]),_:1})]),_:1}),l(ie,{showSearch:t(U),"onUpdate:showSearch":o[2]||(o[2]=n=>Y(U)?U.value=n:null),onQueryTable:x},null,8,["showSearch"])]),_:1}),t(D)?T((s(),m(fe,{key:0,data:t(O),"row-key":"menuId","default-expand-all":t($),"tree-props":{children:"children",hasChildren:"hasChildren"}},{default:e(()=>[l(g,{prop:"menuName",label:"菜单名称","show-overflow-tooltip":!0,width:"160"}),l(g,{prop:"icon",label:"图标",align:"center",width:"100"},{default:e(n=>[l(J,{"icon-class":n.row.icon},null,8,["icon-class"])]),_:1}),l(g,{prop:"orderNum",label:"排序",width:"60"}),l(g,{prop:"perms",label:"权限标识","show-overflow-tooltip":!0}),l(g,{prop:"component",label:"组件路径","show-overflow-tooltip":!0}),l(g,{prop:"status",label:"状态",width:"80"},{default:e(n=>[l(ce,{options:t(q),value:n.row.status},null,8,["options","value"])]),_:1}),l(g,{label:"创建时间",align:"center",width:"160",prop:"createTime"},{default:e(n=>[f("span",null,L(r.parseTime(n.row.createTime)),1)]),_:1}),l(g,{label:"操作",align:"center",width:"210","class-name":"small-padding fixed-width"},{default:e(n=>[T((s(),m(_,{link:"",type:"primary",icon:"Edit",onClick:W=>de(n.row)},{default:e(()=>[u("修改")]),_:2},1032,["onClick"])),[[S,["system:menu:edit"]]]),T((s(),m(_,{link:"",type:"primary",icon:"Plus",onClick:W=>G(n.row)},{default:e(()=>[u("新增")]),_:2},1032,["onClick"])),[[S,["system:menu:add"]]]),T((s(),m(_,{link:"",type:"primary",icon:"Delete",onClick:W=>re(n.row)},{default:e(()=>[u("删除")]),_:2},1032,["onClick"])),[[S,["system:menu:remove"]]])]),_:1})]),_:1},8,["data","default-expand-all"])),[[ge,t(M)]]):h("",!0),l(Ve,{title:t(R),modelValue:t(V),"onUpdate:modelValue":o[16]||(o[16]=n=>Y(V)?V.value=n:null),width:"680px","append-to-body":""},{footer:e(()=>[f("div",Se,[l(_,{type:"primary",onClick:se},{default:e(()=>[u("确 定")]),_:1}),l(_,{onClick:te},{default:e(()=>[u("取 消")]),_:1})])]),default:e(()=>[l(z,{ref:"menuRef",model:t(a),rules:t(le),"label-width":"100px"},{default:e(()=>[l(H,null,{default:e(()=>[l(i,{span:24},{default:e(()=>[l(p,{label:"上级菜单"},{default:e(()=>[l(_e,{modelValue:t(a).parentId,"onUpdate:modelValue":o[3]||(o[3]=n=>t(a).parentId=n),data:t(P),props:{value:"menuId",label:"menuName",children:"children"},"value-key":"menuId",placeholder:"选择上级菜单","check-strictly":""},null,8,["modelValue","data"])]),_:1})]),_:1}),l(i,{span:24},{default:e(()=>[l(p,{label:"菜单类型",prop:"menuType"},{default:e(()=>[l(I,{modelValue:t(a).menuType,"onUpdate:modelValue":o[4]||(o[4]=n=>t(a).menuType=n)},{default:e(()=>[l(y,{label:"M"},{default:e(()=>[u("目录")]),_:1}),l(y,{label:"C"},{default:e(()=>[u("菜单")]),_:1}),l(y,{label:"F"},{default:e(()=>[u("按钮")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(a).menuType!="F"?(s(),m(i,{key:0,span:24},{default:e(()=>[l(p,{label:"菜单图标",prop:"icon"},{default:e(()=>[l(be,{placement:"bottom-start",width:540,trigger:"click"},{reference:e(()=>[l(C,{modelValue:t(a).icon,"onUpdate:modelValue":o[5]||(o[5]=n=>t(a).icon=n),placeholder:"点击选择图标",onBlur:ne,readonly:""},{prefix:e(()=>[t(a).icon?(s(),m(J,{key:0,"icon-class":t(a).icon,class:"el-input__icon",style:{height:"32px",width:"16px"}},null,8,["icon-class"])):(s(),m(v,{key:1,style:{height:"32px",width:"16px"}},{default:e(()=>[l(ye)]),_:1}))]),_:1},8,["modelValue"])]),default:e(()=>[l(ve,{ref_key:"iconSelectRef",ref:Q,onSelected:ae,"active-icon":t(a).icon},null,8,["active-icon"])]),_:1})]),_:1})]),_:1})):h("",!0),l(i,{span:12},{default:e(()=>[l(p,{label:"菜单名称",prop:"menuName"},{default:e(()=>[l(C,{modelValue:t(a).menuName,"onUpdate:modelValue":o[6]||(o[6]=n=>t(a).menuName=n),placeholder:"请输入菜单名称"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{span:12},{default:e(()=>[l(p,{label:"显示排序",prop:"orderNum"},{default:e(()=>[l(he,{modelValue:t(a).orderNum,"onUpdate:modelValue":o[7]||(o[7]=n=>t(a).orderNum=n),"controls-position":"right",min:0},null,8,["modelValue"])]),_:1})]),_:1}),t(a).menuType!="F"?(s(),m(i,{key:1,span:12},{default:e(()=>[l(p,null,{label:e(()=>[f("span",null,[l(w,{content:"选择是外链则路由地址需要以`http(s)://`开头",placement:"top"},{default:e(()=>[l(v,null,{default:e(()=>[l(k)]),_:1})]),_:1}),u("是否外链 ")])]),default:e(()=>[l(I,{modelValue:t(a).isFrame,"onUpdate:modelValue":o[8]||(o[8]=n=>t(a).isFrame=n)},{default:e(()=>[l(y,{label:"0"},{default:e(()=>[u("是")]),_:1}),l(y,{label:"1"},{default:e(()=>[u("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):h("",!0),t(a).menuType!="F"?(s(),m(i,{key:2,span:12},{default:e(()=>[l(p,{prop:"path"},{label:e(()=>[f("span",null,[l(w,{content:"访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头",placement:"top"},{default:e(()=>[l(v,null,{default:e(()=>[l(k)]),_:1})]),_:1}),u(" 路由地址 ")])]),default:e(()=>[l(C,{modelValue:t(a).path,"onUpdate:modelValue":o[9]||(o[9]=n=>t(a).path=n),placeholder:"请输入路由地址"},null,8,["modelValue"])]),_:1})]),_:1})):h("",!0),t(a).menuType=="C"?(s(),m(i,{key:3,span:12},{default:e(()=>[l(p,{prop:"component"},{label:e(()=>[f("span",null,[l(w,{content:"访问的组件路径，如：`system/user/index`，默认在`views`目录下",placement:"top"},{default:e(()=>[l(v,null,{default:e(()=>[l(k)]),_:1})]),_:1}),u(" 组件路径 ")])]),default:e(()=>[l(C,{modelValue:t(a).component,"onUpdate:modelValue":o[10]||(o[10]=n=>t(a).component=n),placeholder:"请输入组件路径"},null,8,["modelValue"])]),_:1})]),_:1})):h("",!0),t(a).menuType!="M"?(s(),m(i,{key:4,span:12},{default:e(()=>[l(p,null,{label:e(()=>[f("span",null,[l(w,{content:"控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasPermi('system:user:list')`)",placement:"top"},{default:e(()=>[l(v,null,{default:e(()=>[l(k)]),_:1})]),_:1}),u(" 权限字符 ")])]),default:e(()=>[l(C,{modelValue:t(a).perms,"onUpdate:modelValue":o[11]||(o[11]=n=>t(a).perms=n),placeholder:"请输入权限标识",maxlength:"100"},null,8,["modelValue"])]),_:1})]),_:1})):h("",!0),t(a).menuType=="C"?(s(),m(i,{key:5,span:12},{default:e(()=>[l(p,null,{label:e(()=>[f("span",null,[l(w,{content:'访问路由的默认传递参数，如：`{"id": 1, "name": "ry"}`',placement:"top"},{default:e(()=>[l(v,null,{default:e(()=>[l(k)]),_:1})]),_:1}),u(" 路由参数 ")])]),default:e(()=>[l(C,{modelValue:t(a).query,"onUpdate:modelValue":o[12]||(o[12]=n=>t(a).query=n),placeholder:"请输入路由参数",maxlength:"255"},null,8,["modelValue"])]),_:1})]),_:1})):h("",!0),t(a).menuType=="C"?(s(),m(i,{key:6,span:12},{default:e(()=>[l(p,null,{label:e(()=>[f("span",null,[l(w,{content:"选择是则会被`keep-alive`缓存，需要匹配组件的`name`和地址保持一致",placement:"top"},{default:e(()=>[l(v,null,{default:e(()=>[l(k)]),_:1})]),_:1}),u(" 是否缓存 ")])]),default:e(()=>[l(I,{modelValue:t(a).isCache,"onUpdate:modelValue":o[13]||(o[13]=n=>t(a).isCache=n)},{default:e(()=>[l(y,{label:"0"},{default:e(()=>[u("缓存")]),_:1}),l(y,{label:"1"},{default:e(()=>[u("不缓存")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):h("",!0),t(a).menuType!="F"?(s(),m(i,{key:7,span:12},{default:e(()=>[l(p,null,{label:e(()=>[f("span",null,[l(w,{content:"选择隐藏则路由将不会出现在侧边栏，但仍然可以访问",placement:"top"},{default:e(()=>[l(v,null,{default:e(()=>[l(k)]),_:1})]),_:1}),u(" 显示状态 ")])]),default:e(()=>[l(I,{modelValue:t(a).visible,"onUpdate:modelValue":o[14]||(o[14]=n=>t(a).visible=n)},{default:e(()=>[(s(!0),F(E,null,K(t(Z),n=>(s(),m(y,{key:n.value,label:n.value},{default:e(()=>[u(L(n.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):h("",!0),l(i,{span:12},{default:e(()=>[l(p,null,{label:e(()=>[f("span",null,[l(w,{content:"选择停用则路由将不会出现在侧边栏，也不能被访问",placement:"top"},{default:e(()=>[l(v,null,{default:e(()=>[l(k)]),_:1})]),_:1}),u(" 菜单状态 ")])]),default:e(()=>[l(I,{modelValue:t(a).status,"onUpdate:modelValue":o[15]||(o[15]=n=>t(a).status=n)},{default:e(()=>[(s(!0),F(E,null,K(t(q),n=>(s(),m(y,{key:n.value,label:n.value},{default:e(()=>[u(L(n.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});export{Re as default};
