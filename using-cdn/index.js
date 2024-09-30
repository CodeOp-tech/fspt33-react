// create h1 and h2
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Title"),
    React.createElement("h2", {}, "Sub title"),
  ]);
};

root.render(App());
