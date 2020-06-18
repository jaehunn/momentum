const r = React;
const rd = ReactDOM;
const e = r.createElement;

document.addEventListener("DOMContentLoaded", () => {
  rd.render(e(App), document.getElementById("root"));
});

const App = () => {
  const [state, setState] = r.useState(initialState);
  const { notes, activeId } = state;

  const activeNote = notes.filter((note) => note.id === activeId)[0];

  const onClick = (id) => {
    setState({
      ...state,
      activeId: id,
    });
  };

  return e(
    "div",
    { className: "app" },
    e(Header),
    e("div", { className: "container" }, e(List, { notes, activeId, onClick }), notes.length && e(Note, { activeNote }))
  );
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

const List = ({ notes, activeId, onClick }) => {
  return e(
    "div",
    { className: "list" },
    notes.map(({ id, title, contents }) => {
      return e(ListItem, { key: id, id, active: activeId === id, title, contents, onClick: () => onClick(id) });
    })
  );
};

const ListItem = ({ id, active, title, contents, onClick }) => {
  return e(
    "div",
    { className: active ? "list-item active" : "list-item", onClick },
    e("div", { className: "title" }, title || "Title"),
    e("div", { className: "list-contents" }, contents || "Contents")
  );
};

const Note = ({ activeNote }) => {
  const { title, contents } = activeNote;

  return e(
    "div",
    { className: "note" },
    e("input", { className: "title", value: title }),
    e("textarea", { className: "note-contents", value: contents })
  );
};
