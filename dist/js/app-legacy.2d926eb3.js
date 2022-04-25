(function(){"use strict";var s={3577:function(s,e,t){t(6992),t(8674),t(9601),t(7727);var r=t(8935),o=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{attrs:{id:"app"}},[s.showWelcome?t("WelcomeTip"):s._e(),t("router-view")],1)},n=[],i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("h1",[s._v("三子棋")]),t("p",[s._v("uploaded by Zyz")]),t("router-link",{staticClass:"start-game",attrs:{to:"/order?show=false"}},[s._v("开始游戏")])],1)},a=[],c={name:"WelcomeTip",methods:{}},h=c,l=t(1001),u=(0,l.Z)(h,i,a,!1,null,"42d930ab",null),d=u.exports,p={name:"App",components:{WelcomeTip:d},data:function(){return{showWelcome:!0}},methods:{closeWelcomeTip:function(){this.showWelcome=!1}},mounted:function(){this.$bus.$on("closeWelcomeTip",this.closeWelcomeTip)}},f=p,m=(0,l.Z)(f,o,n,!1,null,null,null),v=m.exports,B=t(2809),C=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("h1",[s._v("选择顺序")]),t("router-link",{staticClass:"btn-select",attrs:{to:"/chessboard?first=true"}},[s._v("先手")]),t("router-link",{staticClass:"btn-select",attrs:{to:"/chessboard?first=false"}},[s._v("后手")])],1)},w=[],$={name:"WelcomeTip",methods:{selectOrder:function(){}},mounted:function(){this.$bus.$emit("closeWelcomeTip")}},_=$,b=(0,l.Z)(_,C,w,!1,null,"28966da2",null),g=b.exports,y=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"chess-board"},[t("div",{staticClass:"row"},[t("ChessCell",{attrs:{cellId:0}}),t("ChessCell",{attrs:{cellId:1}}),t("ChessCell",{attrs:{cellId:2}})],1),t("div",{staticClass:"row"},[t("ChessCell",{attrs:{cellId:3}}),t("ChessCell",{attrs:{cellId:4}}),t("ChessCell",{attrs:{cellId:5}})],1),t("div",{staticClass:"row"},[t("ChessCell",{attrs:{cellId:6}}),t("ChessCell",{attrs:{cellId:7}}),t("ChessCell",{attrs:{cellId:8}})],1)])},O=[],Z=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"cell",on:{"~click":function(e){return s.clickCell.apply(null,arguments)}}},[s._v(s._s(s.chess))])},E=[],P={name:"ChessCell",props:["cellId"],data:function(){return{chess:""}},methods:{clickCell:function(){this.$store.dispatch("move"),this.chess=this.$store.state.stepsCount%2===0?"X":"O",this.$store.commit("CHANGEBOARD",{index:this.cellId,chess:this.chess}),this.$store.state.stepsCount>4&&(this.chessBoard[0]===this.chessBoard[1]&&this.chessBoard[0]===this.chessBoard[2]?(this.$router.push({name:"win",params:{winPlayer:this.chessBoard[0]}}),console.log("游戏结束")):this.chessBoard[3]===this.chessBoard[4]&&this.chessBoard[3]===this.chessBoard[5]?(this.$router.push({name:"win",params:{winPlayer:this.chessBoard[3]}}),console.log("游戏结束")):this.chessBoard[6]===this.chessBoard[7]&&this.chessBoard[6]===this.chessBoard[8]?(this.$router.push({name:"win",params:{winPlayer:this.chessBoard[6]}}),console.log("游戏结束")):this.chessBoard[0]===this.chessBoard[4]&&this.chessBoard[0]===this.chessBoard[8]?(this.$router.push({name:"win",params:{winPlayer:this.chessBoard[0]}}),console.log("游戏结束")):this.chessBoard[2]===this.chessBoard[4]&&this.chessBoard[2]===this.chessBoard[6]?(this.$router.push({name:"win",params:{winPlayer:this.chessBoard[2]}}),console.log("游戏结束")):this.chessBoard[0]===this.chessBoard[3]&&this.chessBoard[0]===this.chessBoard[6]?(this.$router.push({name:"win",params:{winPlayer:this.chessBoard[0]}}),console.log("游戏结束")):this.chessBoard[1]===this.chessBoard[4]&&this.chessBoard[1]===this.chessBoard[7]?(this.$router.push({name:"win",params:{winPlayer:this.chessBoard[1]}}),console.log("游戏结束")):this.chessBoard[2]===this.chessBoard[5]&&this.chessBoard[2]===this.chessBoard[8]?(this.$router.push({name:"win",params:{winPlayer:this.chessBoard[2]}}),console.log("游戏结束")):9===this.$store.state.stepsCount&&(this.$router.push({name:"win",params:{winPlayer:"平局"}}),console.log("游戏结束")))}},computed:{chessBoard:function(){return this.$store.state.chessBoard}},mounted:function(){console.log("cell挂载")}},T=P,x=(0,l.Z)(T,Z,E,!1,null,"2503fabc",null),W=x.exports,k={name:"ChessBoard",components:{ChessCell:W},mounted:function(){this.$store.commit("SETORDER",this.first)}},I=k,j=(0,l.Z)(I,y,O,!1,null,"1ba55e6f",null),R=j.exports,A=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("h1",[s._v(s._s(s.msg))]),t("a",{attrs:{href:"https://zyzdevr.github.io/three-chess-game/dist/index.html"}},[s._v("再来一局")])])},D=[],z={name:"WinTip",computed:{msg:function(){return"平局"===this.$route.params.winPlayer?"平局":"玩家"+this.$route.params.winPlayer+"获胜"}}},M=z,S=(0,l.Z)(M,A,D,!1,null,"1e19b51e",null),G=S.exports,H=new B.Z({routes:[{path:"/order",component:g},{path:"/chessboard",component:R},{name:"win",path:"/win",component:G}]}),N=H,V=t(4665);r.Z.use(V.ZP);var F={first:!0,stepsCount:0,chessBoard:[1,2,3,4,5,6,7,8,9]},X={},q={move:function(s){s.commit("MOVE")}},J={MOVE:function(s){s.stepsCount++},CHANGEBOARD:function(s,e){s.chessBoard[e.index]=e.chess},SETORDER:function(s,e){s.first=e}},K=new V.ZP.Store({actions:q,mutations:J,state:F,getter:X});r.Z.config.productionTip=!1,r.Z.use(B.Z),new r.Z({render:function(s){return s(v)},router:N,store:K,beforeCreate:function(){r.Z.prototype.$bus=this}}).$mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return s[r](n,n.exports,t),n.exports}t.m=s,function(){var s=[];t.O=function(e,r,o,n){if(!r){var i=1/0;for(l=0;l<s.length;l++){r=s[l][0],o=s[l][1],n=s[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&n||i>=n)&&Object.keys(t.O).every((function(s){return t.O[s](r[c])}))?r.splice(c--,1):(a=!1,n<i&&(i=n));if(a){s.splice(l--,1);var h=o();void 0!==h&&(e=h)}}return e}n=n||0;for(var l=s.length;l>0&&s[l-1][2]>n;l--)s[l]=s[l-1];s[l]=[r,o,n]}}(),function(){t.n=function(s){var e=s&&s.__esModule?function(){return s["default"]}:function(){return s};return t.d(e,{a:e}),e}}(),function(){t.d=function(s,e){for(var r in e)t.o(e,r)&&!t.o(s,r)&&Object.defineProperty(s,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"===typeof window)return window}}()}(),function(){t.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)}}(),function(){var s={143:0};t.O.j=function(e){return 0===s[e]};var e=function(e,r){var o,n,i=r[0],a=r[1],c=r[2],h=0;if(i.some((function(e){return 0!==s[e]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(e&&e(r);h<i.length;h++)n=i[h],t.o(s,n)&&s[n]&&s[n][0](),s[n]=0;return t.O(l)},r=self["webpackChunkthree_chess_game"]=self["webpackChunkthree_chess_game"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3577)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.2d926eb3.js.map