(window.webpackJsonplisten=window.webpackJsonplisten||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},16:function(e,t,a){},17:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),s=a.n(l),c=(a(16),a(2)),i=a(3),o=a(6),u=a(5),h=a(7),p=a(4);a(17),a(9);var m=function(){return r.a.createElement("div",{class:"header"},r.a.createElement("a",{href:"#default",class:"logo"},"Octavo"),r.a.createElement("div",{class:"header-right"},r.a.createElement("a",{href:"#about"},"About")))},d=a(1),g=a.n(d),b=(a(23),[12,13,14,15,16,17,18]),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={url:a.props.url,playing:a.props.playing,loop:a.props.loop,speed:a.props.speed,isPlaying:a.props.playing===g.a.status.PLAYING,buttonValue:a.props.isPlaying?"Pause":"Play",interval:12,score:a.props.score},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.props.onScoreChange(e)}},{key:"render",value:function(){var e=this,t=this.props.score;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"Score: ",t)),r.a.createElement("div",null,r.a.createElement("button",{className:"special",onClick:function(){return e.state.isPlaying?e.setState({playing:g.a.status.PAUSED,isPlaying:!1,buttonValue:"Play"}):e.setState({playing:g.a.status.PLAYING,isPlaying:!0,buttonValue:"Pause"})}},this.state.buttonValue)),r.a.createElement("div",null,r.a.createElement("button",{className:"special",onClick:function(){return e.handleChange(t+1)}},"Change Score!")),r.a.createElement("div",null,r.a.createElement("button",{className:"special",onClick:function(){return e.setState({interval:b[Math.floor(Math.random()*b.length)],url:"https://raw.githubusercontent.com/matthewlee626/listen/master/src/music/"+e.state.interval+".mp3"})}},"New Interval!")),r.a.createElement(g.a,{url:this.state.url,playStatus:this.state.playing,loop:this.state.loop,playbackRate:this.state.speed}))}}]),t}(r.a.Component);var f=function(){return r.a.createElement("div",{class:"header"},r.a.createElement("a",{href:"#index"},"Matthew Lee \xa9 2019"),r.a.createElement("div",{class:"header-right"},r.a.createElement("a",{href:"https://matthewlee.xyz",target:"_blank",rel:"noopener noreferrer"},"matthewlee.xyz")))},y={color:"black"},E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={playing:g.a.status.PAUSED,renderWhich:0,score:0},a.handleScoreChange=a.handleScoreChange.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleScoreChange",value:function(e){this.setState({score:e})}},{key:"returnMain",value:function(){var e=this.state.score;return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{style:y},"What interval is this?"),r.a.createElement(v,{url:"https://raw.githubusercontent.com/matthewlee626/listen/master/src/music/12.mp3",playing:this.state.playing,loop:!0,speed:1,score:e,onScoreChange:this.handleScoreChange}))),r.a.createElement(f,null))}},{key:"render",value:function(){if(0===this.state.renderWhich)return this.returnMain()}}]),t}(r.a.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E,null)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.e60641f9.chunk.js.map