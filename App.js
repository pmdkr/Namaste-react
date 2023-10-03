const parant = React.createElement("div",{id : "parant"},
React.createElement("div",{id:"child"},"I am a child")

)
console.log(parant);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parant);
