(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(61)},29:function(e,t,a){},31:function(e,t,a){},52:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),u=a.n(r),s=(a(29),a(18)),o=a(19),c=a(20),m=a(22),i=a(21),h=a(23),d=(a(31),a(63)),p=a(65),E=a(64),g=a(8),b=a.n(g),f=(a(52),a(62)),v=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"SIGN IN"),l.a.createElement(f.a,{to:"/signup"},"Go to sign up"),l.a.createElement("form",null,l.a.createElement("label",null,"Email"),l.a.createElement("br",null),l.a.createElement("input",{value:e.username,onChange:e.handleChange,name:"username",type:"email",placeholder:"example@email.com"}),l.a.createElement("br",null),l.a.createElement("label",null,"Password"),l.a.createElement("br",null),l.a.createElement("input",{name:"password",type:"password",value:e.password,onChange:e.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",name:"/auth/signin",onClick:e.handleSubmit},"Sign In")))},w=(a(56),function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"SIGN UP"),l.a.createElement(f.a,{to:"/"},"Go to sign in"),l.a.createElement("form",null,l.a.createElement("label",null,"Email"),l.a.createElement("br",null),l.a.createElement("input",{value:e.username,onChange:e.handleChange,name:"username",type:"email",placeholder:"example@email.com"}),l.a.createElement("br",null),l.a.createElement("label",null,"Password"),l.a.createElement("br",null),l.a.createElement("input",{name:"password",type:"password",value:e.password,onChange:e.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",name:"/auth/signup",onClick:e.handleSubmit},"Sign Up")))}),C=(a(58),function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"You should only see this if you are logged in!"),l.a.createElement("p",null,e.auth.username),l.a.createElement("button",{onClick:e.handleLogout},"Log Out"))}),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",auth:{userId:"",username:"",isAuthenticated:!1}},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(s.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault();var t={username:a.state.username,password:a.state.password};a.setState({username:"",password:""});var n=e.target.name;b.a.post(n,t).then(function(e){if(e.data.isAuthenticated){var t=e.data,n=t.userId,l=t.isAuthenticated,r=t.username;a.setState({auth:{userId:n,isAuthenticated:l,username:r}})}})},a.handleLogout=function(e){e.preventDefault(),b.a.get("/auth/logout").then(function(e){a.setState({auth:{userId:"",username:"",isAuthenticated:!1}})})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;b.a.get("/auth/isAuthenticated").then(function(t){var a=t.data,n=a.userId,l=a.isAuthenticated,r=a.username;e.setState({auth:{userId:n,isAuthenticated:l,username:r}})})}},{key:"render",value:function(){var e=this,t=this.state.auth.isAuthenticated;return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(p.a,{exact:!0,path:"/",render:function(){return t?l.a.createElement(E.a,{to:"/home"}):l.a.createElement(v,{handleChange:e.handleChange,handleSubmit:e.handleSubmit,email:e.state.email,password:e.state.password})}}),l.a.createElement(p.a,{exact:!0,path:"/signup",render:function(){return t?l.a.createElement(E.a,{to:"/home"}):l.a.createElement(w,{handleChange:e.handleChange,handleSubmit:e.handleSubmit,email:e.state.email,password:e.state.password})}}),l.a.createElement(p.a,{exact:!0,path:"/home",render:function(){return t?l.a.createElement(C,{handleLogout:e.handleLogout,auth:e.state.auth}):l.a.createElement(E.a,{to:"/"})}})))}}]),t}(n.Component);u.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.b9db7845.chunk.js.map