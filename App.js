const parant = React.createElement("div", { id: "parant" }, [
    React.createElement("div", { id: "child 1" }, [
        React.createElement("h1", { id: "children 01" }, "I am from h1 tag"),
        React.createElement("h2", { id: "children02" }, "Namaste react 🚀")]), 
    
    
    React.createElement("div", { id: "child 2" }, 
    [React.createElement("h1", { id: "children3" }, "I am also h1 tag"),
    React.createElement("h2", { id: "children4" }, "I am from div 2")])]

)
console.log(parant);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parant);
