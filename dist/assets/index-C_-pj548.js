import{A as R,B as D,u as c,c as L,b as M,r as i,C as N,D as T,w as $,o as t,e as a,f as O,h as j,F as y,E as k,j as o,G as z,H as A,p as d,I,t as S,i as F,J as H,K as U,y as G,z as J,_ as K}from"./index-C27tGZCI.js";import{i as q}from"./ic_duan-B8BCL1A9.js";const P="/assets/ic_yun-D11bycHt.png",Q="/assets/tag_new-140NM1er.png",W=l=>(G("data-v-6f074811"),l=l(),J(),l),X={class:"app-container"},Y={class:"page"},Z=["id","onClick"],ss={key:0,class:"itemImg"},es=["src"],ts=W(()=>o("div",{class:"imgT"},null,-1)),as={class:"itemView"},os={key:0,class:"cloudImg",src:P,alt:""},ns={key:1,class:"portImg",src:q,alt:""},ls={key:2,class:"labelImg",src:Q,alt:""},cs={class:"itemCenter"},is={class:"itemCenter-img"},ds={class:"img-view"},rs=["src"],us={key:1,style:{"text-align":"center","margin-top":"70px"}},_s={class:"itemCenter-details"},_="/data/thumbnail/",ms=R({__name:"index",setup(l){const x=D(),m=c(),r=L(()=>x.sideTheme),p=M(),g=i([]),v=i(!1);N(()=>{T.get("/data/menu/menuList.json").then(e=>{e.data.code==200&&(g.value=e.data.data)}),setTimeout(()=>{c().scrollTop>0&&b(c().scrollTop)},100)});const f=i(),u=i(0),w=({scrollTop:e})=>{u.value=e,c().scrollTop=u.value},b=e=>{f.value.setScrollTop(e)},C=e=>{m.isActiveIndex=e.index,m.changeMenuScrollTop(u.value),e.main?p.push(`/system/sandbox?key=${e.main}`):U.success("该实例未开放，请敬请期待！")};return $(()=>p.currentRoute.value,(e,n)=>{},{immediate:!0}),(e,n)=>(t(),a("div",X,[O(F(H),{ref_key:"scrollbarRef",ref:f,always:"",onScroll:w},{default:j(()=>[(t(!0),a(y,null,k(g.value,(V,B)=>(t(),a("div",{key:B},[o("div",Y,[(t(!0),a(y,null,k(V.children,(s,E)=>z((t(),a("div",{id:s.id,class:"pageItem",key:E,onClick:h=>C(s)},[r.value==="theme-dark"?(t(),a("div",ss,[o("img",{class:"imgO",src:_+s.thumbnail,alt:""},null,8,es),ts])):d("",!0),o("div",as,[o("div",{class:I(["itemType",r.value==="theme-dark"?"darkBackgroundImg":"defaultImg"])},[s.instanceType==1||s.instanceType==0?(t(),a("img",os)):d("",!0),s.instanceType==2||s.instanceType==0?(t(),a("img",ns)):d("",!0),s.instanceTag==1?(t(),a("img",ls)):d("",!0),o("div",{style:{width:"70%","text-align":"center"},class:I(["titleO",r.value==="theme-dark"?"titleO2":""])},S(s.name),3)],2),o("div",cs,[o("div",is,[o("div",ds,[_+s.thumbnail?(t(),a("img",{key:0,src:_+s.thumbnail,alt:"",onLoad:n[0]||(n[0]=h=>v.value=!0),onError:n[1]||(n[1]=h=>v.value=!1)},null,40,rs)):(t(),a("div",us,"图片加载中..."))]),o("div",_s,S(s.details),1)])])])],8,Z)),[[A,!s.hidden]])),128))])]))),128))]),_:1},512)]))}}),vs=K(ms,[["__scopeId","data-v-6f074811"]]);export{vs as default};