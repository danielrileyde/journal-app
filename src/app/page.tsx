"use client";
// import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { List } from "./components/List";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { Form } from "./components/Form";
import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import useSWR from "swr";

export type Entry = {
  id: string;
  date: Date;
  title: string;
  content: string;
};

export default function Home({ session }: { session: Session }) {
  const { status } = useSession();
  console.log("Session: ", session);
  // const [entries] = useLocalStorageState("entries", {
  //   defaultValue: [],
  // });

  const { data } = useSWR("/api/home");
  console.log("data", data);

  const isLoggedIn = status === "authenticated";

  const [showForm, setShowForm] = useState(false);
  if (!data) return;

  return (
    <div className="app">
      <header>
        <h1>jrnl.</h1>
        <div className="header__buttons">
          <button
            onClick={() => {
              document.documentElement.classList.toggle("m-dark");
            }}
          >
            Dark Theme
          </button>
          <button
            className="header__butoons--add"
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            Add Entry
          </button>
          <button
            className="header__butoons--signOut"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      </header>
      {isLoggedIn ? (
        <List items={data} />
      ) : (
        <button onClick={() => signIn()}>log in</button>
      )}

      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <Form onSubmit={() => setShowForm(false)} />
        </Modal>
      )}
    </div>
  );
}
