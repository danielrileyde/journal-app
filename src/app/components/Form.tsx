import { FormEvent } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { Entry } from "../App";

interface FormProps {
  onSubmit: () => void;
}

export const Form = ({ onSubmit }: FormProps) => {
  const [entries, setEntries] = useLocalStorageState<Entry[]>("entries", {
    defaultValue: [],
  });
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Step 1; Capture user inputs
    onSubmit();
    const newEntry = {
      id: uid(),
      date: new Date(),
      title: event.target.elements.title.value,
      content: event.target.elements.content.value,
    };
    // Step 2; Store the information in the localStorage
    setEntries([...entries, newEntry]);
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <h3>Add New Entry</h3>
      <label htmlFor="title">Title</label>
      <input name="title" id="title"></input>
      <label htmlFor="content">Content</label>
      <input id="content"></input>
      <button className="submit__button">Submit</button>
    </form>
  );
};
