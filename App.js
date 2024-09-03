const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "hello i am h1 tag"),
    React.createElement("h2", {}, "hello i am h2 tag"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", {}, "hello i am h1 tag"),
    React.createElement("h2", {}, "hello i am h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);
