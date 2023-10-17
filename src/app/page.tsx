"use client";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { List } from "./components/List";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { Form } from "./components/Form";

export type Entry = {
  id: string;
  date: Date;
  title: string;
  content: string;
};

export default function Home() {
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
