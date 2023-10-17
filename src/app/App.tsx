import useLocalStorageState from "use-local-storage-state";
import { List } from "./components/List";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { Form } from "./components/Form";
import "./App.css";

export type Entry = {
  id: string;
  date: Date;
  title: string;
  content: string;
};

function App() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [],
  });

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="app">
      <header>
        <h1>Journal.</h1>
        <div className="header__buttons">
          <button
            onClick={() => {
              document.documentElement.classList.toggle("m-dark");
            }}
          >
            Dark Theme
          </button>
          <button
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            Add Entry
          </button>
        </div>
      </header>
      <List items={entries} />
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <Form onSubmit={() => setShowForm(false)} />
        </Modal>
      )}
    </div>
  );
}

export default App;

// how to toggle the showForm variable.
