const placeholder=document.getElementById("placeholder");
const headerStyle={
    color:"red",
    //textdecoration:"underline"
}

placeholder.innerHTML="App Hello";

const headerTitle=React.createElement("span",{className:"headerTitle"},"Welcome to React");

const headerMenu=React.createElement('ul', {className:"menuItems"},
      [
        React.createElement('li', {key:"ReactDocs"}, React.createElement('a', {href:"/"}, 'React Docs')),
        React.createElement('li', {key:"About"}, React.createElement('a', {href:"/"}, 'About'))
      ]
    )

const headerSection=React.createElement('ul', {className:"menuItems"},[headerTitle,headerMenu]);

const body=React.createElement("h4",{className:"body"},"Home Page");
const bodyDesc=React.createElement("span",{className:"bodyDesc"},"Welcome to React Web Application!");

const allItems=React.createElement("div",{className:"dataDiv"},[headerTitle,headerMenu,body,bodyDesc])

ReactDOM.render(allItems,placeholder);

