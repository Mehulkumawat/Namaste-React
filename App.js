
const parent = React.createElement(
    "div",
    {id: "parent", xyz: "abc"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement(
            "h1",
            {id:"children"},
            [
                React.createElement("h1", {id:"child1"}, "Hello from children"),
                React.createElement("h1", {id:"child2"}, "Hello from children 2 ")
            ]
        )
    )
    );
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);