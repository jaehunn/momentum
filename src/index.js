const r = React;
const rd = ReactDOM;
const e = r.createElement;

document.addEventListener("DOMContentLoaded", () => {
  rd.render(e(App), document.getElementById("root"));
});

const App = () => {
  return e("div", { className: "app" }, e(Header), e("div", { className: "container" }, e(List), e(Note)));
};

const Header = () => {
  return e(
    "header",
    {},
    e(
      "div",
      { className: "title" },
      e("a", { href: "#", target: "_blank" }, e("img", { className: "logo", src: "./src/logo.png" })),
      e("span", {}, "Simple Note")
    ),
    e("div", { className: "btns-group" }, e("button", {}, "ADD"), e("button", {}, "DELETE"))
  );
};

const List = () => {
  return e("div", { className: "list" }, e(ListItem), e(ListItem));
};

const ListItem = () => {
  return e(
    "div",
    { className: "list-item" },
    e("div", { className: "title" }, "Title"),
    e("div", { className: "list-contents" }, "Contents")
  );
};

const Note = () => {
  return e(
    "div",
    { className: "note" },
    e("input", { className: "title" }),
    e("textarea", { className: "note-contents" })
  );
};
