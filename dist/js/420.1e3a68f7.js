"use strict";(self["webpackChunkvue3_music"]=self["webpackChunkvue3_music"]||[]).push([[420],{9207:function(s,a,n){n.d(a,{Z:function(){return d}});var t=n(2041),c=n(440),e=n(4592),i=n(4804);const l={class:"back-top"};var o={__name:"back",setup(s){let a=(0,i.tv)();function n(){a.back()}return(s,a)=>{const i=t.Z;return(0,c.wg)(),(0,c.iD)("div",l,[(0,c.Wm)(i,{iconFileName:"back",width:"25",height:"25",class:"song-svg",onClick:(0,e.iM)(n,["stop"])},null,8,["onClick"])])}}},r=n(465);const u=(0,r.Z)(o,[["__scopeId","data-v-7e5f8d23"]]);var d=u},5759:function(s,a,n){n.d(a,{Z:function(){return f}});var t=n(2041),c=n(440),e=n(8643),i=n(4367),l=n(7266);const o={class:"all-song"},r={class:"songs-subtit"},u={class:"song-list"},d=["onClick"],g={class:"order"},m={class:"content"},v={class:"name"},_={class:"desc"};var p={__name:"songlist",props:["songsData"],setup(s){const{songsData:a}=s;let n=(0,l.oR)(),p=(0,c.Fl)((()=>a.length<=0));(0,c.Fl)((()=>n.state.currentIndex));function h({id:s,name:a,al:t,ar:c}){n.dispatch("addSongPlay",{id:s,name:a,picUrl:t.picUrl,ar:c})}function w(){a.forEach((s=>{h(s)})),n.commit("setcurrentIndex",n.state.currentIndex-29)}return(a,n)=>{const l=t.Z,f=t.Z,D=(0,c.Q2)("loading");return(0,c.wg)(),(0,c.iD)("section",o,[(0,c._)("p",r,[(0,c.Wm)(l,{class:"icon",width:"30",height:"30",iconFileName:"playmusic1"}),(0,c._)("span",{onClick:w},"播放全部("+(0,e.zw)(s.songsData.length)+")",1)]),(0,c.wy)(((0,c.wg)(),(0,c.iD)("ul",u,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(s.songsData,((s,a)=>((0,c.wg)(),(0,c.iD)("li",{class:"songs-item",key:a,onClick:a=>h(s)},[(0,c._)("p",g,(0,e.zw)(a+1),1),(0,c._)("div",m,[(0,c._)("p",v,(0,e.zw)(s.name),1),(0,c._)("p",_,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(s.ar,(s=>((0,c.wg)(),(0,c.iD)("span",{key:s.id},(0,e.zw)(s.name)+"  ",1)))),128))]),(0,c.Wm)(f,{iconFileName:"playmusic",width:"25",height:"25",class:"song-svg"})])],8,d)))),128))])),[[D,(0,i.SU)(p)]])])}}},h=n(465);const w=(0,h.Z)(p,[["__scopeId","data-v-1049660b"]]);var f=w},8420:function(s,a,n){n.r(a),n.d(a,{default:function(){return b}});var t=n(440),c=n(4367),e=n(8643),i=n(4804),l=n(5578),o=n(5759),r=n(9207);const u={class:"singer-detail"},d={class:"artist-info"},g=["src","alt"],m={class:"a-content"},v={class:"avatar"},_=["src","alt"],p={class:"name"},h={class:"identify"},w={class:"desc"};var f={__name:"SingerDetail",setup(s){let a=(0,i.yj)(),n=a.params.id,f=(0,c.iH)({}),D=(0,c.iH)({}),k=(0,c.qj)([]);return(0,t.bv)((()=>{(0,l.ty)(n).then((s=>{f.value=s.data.data.artist,D.value=s.data.data.identify})).catch((s=>{console.log("歌手信息获取失败")})),(0,l.to)(n).then((s=>{k.push(...s.data.songs)})).catch((s=>{console.log("歌手歌曲获取失败")}))})),(s,a)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(r.Z),(0,t._)("div",u,[(0,t._)("div",d,[(0,t._)("img",{class:"a-cover",src:(0,c.SU)(f).cover,alt:(0,c.SU)(f).name},null,8,g),(0,t._)("div",m,[(0,t._)("div",v,[(0,t._)("img",{src:(0,c.SU)(f).cover,alt:(0,c.SU)(f).name},null,8,_)]),(0,t._)("h2",p,(0,e.zw)((0,c.SU)(f).name),1),(0,t._)("p",h,(0,e.zw)((0,c.SU)(D).imageDesc),1),(0,t._)("p",w,(0,e.zw)((0,c.SU)(f).briefDesc),1)])]),(0,t.Wm)(o.Z,{songsData:(0,c.SU)(k)},null,8,["songsData"])])],64))}},D=n(465);const k=(0,D.Z)(f,[["__scopeId","data-v-243eb196"]]);var b=k}}]);
//# sourceMappingURL=420.1e3a68f7.js.map