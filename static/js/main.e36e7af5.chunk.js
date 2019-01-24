(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){e.exports=a(603)},168:function(e,t,a){},170:function(e,t,a){},172:function(e,t,a){},174:function(e,t,a){},176:function(e,t,a){},178:function(e,t,a){},603:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(162),l=a.n(r),s=(a(168),a(12)),i=a(13),o=a(15),u=a(14),d=a(16),m=(a(170),a(172),function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"headerContainer"},c.a.createElement("h1",null,"Student Toolkit"),c.a.createElement("h2",null,this.props.show))}}]),t}(c.a.Component)),h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={displayed:a.props.val},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"link",onClick:function(){return e.props.onClick(e.state.displayed)}},this.props.val)}}]),t}(c.a.Component),p=(a(174),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",null,c.a.createElement(h,{val:"Calculator",onClick:this.props.onClick}),c.a.createElement(h,{val:"GPA Calculator",onClick:this.props.onClick}),c.a.createElement(h,{val:"Class Grade Calculator",onClick:this.props.onClick}))}}]),t}(c.a.Component)),E=(a(176),function(e){return"="===e}),v=function(e){return c.a.createElement("div",{style:(t=e.children,"="===t?{backgroundColor:"cornflowerblue"}:"+"===t||"-"===t||"*"===t||"/"===t?{backgroundColor:"dimgrey"}:void 0),className:"button ".concat(E(e.children)?"double":null),onClick:function(){return e.handleClick(e.children)}},e.children);var t},f=(a(178),function(e){return c.a.createElement("div",{className:"inputContainer"},c.a.createElement("div",{className:"input"},e.input))}),C=a(104),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).addNumber=function(e){a.setState({input:a.state.input+e}),a.setState({clicked:!1})},a.addOperator=function(e){a.state.clicked||(a.setState({input:a.state.input+e}),a.setState({clicked:!0}))},a.handleClear=function(){a.setState({input:""})},a.handleEqual=function(){a.setState({input:C.round(C.eval(a.state.input),4)})},a.state={input:"",clicked:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"calc",style:this.props.style},c.a.createElement(f,{input:this.state.input}),c.a.createElement("div",{className:"row"},c.a.createElement(v,{handleClick:this.addNumber},"7"),c.a.createElement(v,{handleClick:this.addNumber},"8"),c.a.createElement(v,{handleClick:this.addNumber},"9"),c.a.createElement(v,{handleClick:this.addOperator},"/")),c.a.createElement("div",{className:"row"},c.a.createElement(v,{handleClick:this.addNumber},"4"),c.a.createElement(v,{handleClick:this.addNumber},"5"),c.a.createElement(v,{handleClick:this.addNumber},"6"),c.a.createElement(v,{handleClick:this.addOperator},"*")),c.a.createElement("div",{className:"row"},c.a.createElement(v,{handleClick:this.addNumber},"1"),c.a.createElement(v,{handleClick:this.addNumber},"2"),c.a.createElement(v,{handleClick:this.addNumber},"3"),c.a.createElement(v,{handleClick:this.addOperator},"+")),c.a.createElement("div",{className:"row"},c.a.createElement(v,{handleClick:this.addOperator},"."),c.a.createElement(v,{handleClick:this.addNumber},"0"),c.a.createElement(v,{handleClick:function(){return e.handleClear()}},"AC"),c.a.createElement(v,{handleClick:this.addOperator},"-")),c.a.createElement("div",{className:"row"},c.a.createElement(v,{handleClick:this.addNumber},"("),c.a.createElement(v,{handleClick:this.addNumber},")"),c.a.createElement(v,{handleClick:function(){return e.handleEqual()}},"=")))}}]),t}(c.a.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).change=function(e){"SELECT"===e.target.nodeName?a.setState({grade:e.target.value},function(){this.setState({gradePoints:(this.state.grade*this.state.credits).toPrecision(3)})}):"INPUT"===e.target.nodeName&&a.setState({credits:e.target.value},function(){this.setState({gradePoints:(this.state.grade*this.state.credits).toPrecision(3)})})},a.state={gradePoints:0,grade:0,credits:0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"class "+this.props.id},c.a.createElement("div",{className:"name"},c.a.createElement("p",null,"Class Name"),c.a.createElement("input",{type:"text"})),c.a.createElement("div",{className:"grade"},c.a.createElement("p",null,"Grade"),c.a.createElement("select",{onChange:this.change},c.a.createElement("option",{value:"",default:!0}),c.a.createElement("option",{value:"4"},"A"),c.a.createElement("option",{value:"3.66"},"A-"),c.a.createElement("option",{value:"3.33"},"B+"),c.a.createElement("option",{value:"3"},"B"),c.a.createElement("option",{value:"2.66"},"B-"),c.a.createElement("option",{value:"2.33"},"C+"),c.a.createElement("option",{value:"2"},"C"),c.a.createElement("option",{value:"1.66"},"C-"),c.a.createElement("option",{value:"1.33"},"D+"),c.a.createElement("option",{value:"1"},"D"))),c.a.createElement("div",{className:"credits"},c.a.createElement("p",null,"Credits"),c.a.createElement("input",{type:"number",min:"0",onChange:this.change})),c.a.createElement("div",{className:"gradePoints"},c.a.createElement("p",null,"Grade Points"),c.a.createElement("div",null,this.state.gradePoints)))}}]),t}(c.a.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){var e=a.state.classes.length+1;a.setState({classes:a.state.classes.concat([e])})},a.changeGpa=function(){for(var e=0,t=0,n=0;n<a.state.classes.length;n++)e+=parseFloat(a.myRef[n+1].state.gradePoints),t+=parseFloat(a.myRef[n+1].state.credits);a.setState({gpa:(e/t).toPrecision(3)})},a.state={classes:[1],gpa:0},a.myRef={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"classWrapper"},this.state.classes.map(function(t){return c.a.createElement(g,{id:t,ref:function(a){return e.myRef[t]=a},key:t})}),c.a.createElement("button",{className:"add",onClick:this.handleClick},"Add Another"),c.a.createElement("div",{className:"gpa"},"Cumulative GPA: ",this.state.gpa,c.a.createElement("button",{className:"compute",onClick:this.changeGpa},"Compute"))))}}]),t}(c.a.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).changeGrade=function(e){a.setState({grade:e.target.value})},a.changePercentage=function(e){a.setState({percentage:e.target.value})},a.state={grade:0,percentage:0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"assignment"},c.a.createElement("div",{className:"name"},c.a.createElement("p",null,"Assignment"),c.a.createElement("input",{type:"text"})),c.a.createElement("div",{className:"grade"},c.a.createElement("p",null,"Grade"),c.a.createElement("input",{type:"number",min:"0",max:"100",onChange:this.changeGrade})),c.a.createElement("div",{className:"weight"},c.a.createElement("p",null,"Percentage of Total"),c.a.createElement("input",{type:"number",min:"0",max:"100",onChange:this.changePercentage}),"%"))}}]),t}(c.a.Component),j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleClick=function(){var t=e.state.assignments.length+1;e.setState({assignments:e.state.assignments.concat(t)})},e.calcGrade=function(){for(var t=0,a=0;a<e.state.assignments.length;a++){t+=e.myRef[a+1].state.grade*e.myRef[a+1].state.percentage/100}e.setState({totalGrade:t})},e.state={assignments:[1],totalGrade:0},e.myRef={},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"classWrapper"},this.state.assignments.map(function(t){return c.a.createElement(O,{id:t,key:t,ref:function(a){return e.myRef[t]=a}})}),c.a.createElement("button",{className:"add",onClick:this.handleClick},"Add Another"),c.a.createElement("div",{className:"grade"},"Class Grade: ",this.state.totalGrade,"%",c.a.createElement("button",{className:"compute",onClick:this.calcGrade},"Compute")))}}]),t}(c.a.Component),N=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return"GPA Calculator"===this.props.show?c.a.createElement(k,null):"Class Grade Calculator"===this.props.show?c.a.createElement(j,null):"Calculator"===this.props.show?c.a.createElement("div",{class:"calculator"},c.a.createElement(b,{styles:this.calcStyles,show:this.props.show})):void 0}}]),t}(c.a.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleClick=function(t){e.setState({show:t})},e.state={show:"Calculator"},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(m,{show:this.state.show}),c.a.createElement(N,{show:this.state.show}),c.a.createElement(p,{onClick:this.handleClick}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[163,2,1]]]);
//# sourceMappingURL=main.e36e7af5.chunk.js.map