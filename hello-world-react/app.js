const placeholder=document.getElementById("placeholder");
const headerStyle={
  border:"1px solid red",
  padding:"5px"
};
const titleStyle={
  color:"blue"
};

const re=React.createElement();

const content=re("div",{},
re("h1",{},"Home Page"),
re("p",{},"Welcome to React web Application")
)

const navStyle={textDecoration:"none",fontweigth:"bold"};
const Title=re("h1",{style:titleStyle},"Welcome to React")
const reactDocs=re("a",
{href:"/",target:"_blank",style:navStyle},
"Hello World")



const app=re("div",null,content,Title,reactDocs);

ReactDOM.render(app,placeholder);


