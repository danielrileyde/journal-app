"use client";
import "./App.css";
import { List } from "./components/List";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { Form } from "./components/Form";
import { signIn, signOut, useSession } from "next-auth/react";
import useSWR from "swr";

export type Entry = {
  id: string;
  date: Date;
  title: string;
  content: string;
};

export default function Home() {
  const { status } = useSession();

  const { data, mutate } = useSWR("/api/home");
  const isLoggedIn = status === "authenticated";

  const [showForm, setShowForm] = useState(false);
  if (!data) return;

  return (
    <div className="app">
      <header>
        <h1>jrnl.</h1>
        <div className="header__buttons">
          <button
            className="header__buttons--contrast"
            onClick={() => {
              document.documentElement.classList.toggle("m-dark");
            }}
          >
            Contrast
          </button>
          <button
            className="header__buttons--add"
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            Add Entry
          </button>
          <button
            className="header__buttons--signOut"
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
        <button onClick={() => signIn()}>Sign up/in</button>
      )}

      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <Form onSubmit={() => setShowForm(false)} mutate={mutate} />
        </Modal>
      )}
    </div>
  );
}
