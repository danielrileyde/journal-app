"use client";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { useState } from "react";

export type Entry = {
  id: string;
  date: Date;
  title: string;
  content: string;
};

export default function signUpAndLogIn() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [],
  });

  return (
    <div className="signAndLog">
      <header>
        <h1>jrnl.</h1>
        <p>Sign up or log in to jrnl.</p>
      </header>
    </div>
  );
}
