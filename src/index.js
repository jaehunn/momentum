const r = React;
const rd = ReactDOM;
const e = r.createElement;

document.addEventListener("DOMContentLoaded", () => {
  rd.render(e(App), document.getElementById("root"));
});

const App = () => {
  const [state, setState] = r.useState(initialState);
  const nextId = r.useRef(3);
  const { notes, activeId } = state;

  const activeNote = notes.find((note) => note.id === activeId);

  const onClick = (id) => {
    setState({
      notes,
      activeId: id,
    });
  };

  const onChange = (e) => {
    const newNotes = [...notes];
    const note = newNotes.find((note) => note.id === activeId);
    note[e.target.name] = e.target.value;

    setState({
      activeId,
      notes: newNotes,
    });
  };

  const onCreate = () => {
    const newNote = {
      id: nextId.current,
      title: "",
      contents: "",
    };

    setState({
      activeId: nextId.current,
      notes: notes.concat(newNote),
    });

    nextId.current += 1;
  };

  const onRemove = () => {
    const newNotes = notes.filter((note) => note.id !== activeId);

    setState({
      notes: newNotes,
      activeId: newNotes.length ? newNotes[0].id : null,
    });
  };

  return e(
    "div",
    { className: "app" },
    e(Header, { onCreate, onRemove }),
    e(
      "div",
      { className: "container" },
      e(List, { notes, activeId, onClick }),
      notes.length && e(Note, { activeNote, onChange })
    )
  );
};

const Header = ({ onCreate, onRemove }) => {
  return e(
    "header",
    {},
    e(
      "div",
      { className: "title" },
      e("a", { href: "#", target: "_blank" }, e("img", { className: "logo", src: "./src/logo.png" })),
      e("span", {}, "Simple Note")
    ),
    e(
      "div",
      { className: "btns-group" },
      e("button", { onClick: () => onCreate() }, "ADD"),
      e("button", { onClick: () => onRemove() }, "DELETE")
    )
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

const Note = ({ activeNote, onChange }) => {
  const { title, contents } = activeNote;

  return e(
    "div",
    { className: "note" },
    e("input", { className: "title", name: "title", value: title, onChange: (e) => onChange(e) }),
    e("textarea", { className: "note-contents", name: "contents", value: contents, onChange: (e) => onChange(e) })
  );
};
