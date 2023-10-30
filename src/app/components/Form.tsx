import { FormEvent, useState } from "react";
import useSWR from "swr";

interface FormProps {
  onSubmit: () => void;
  mutate: () => void;
}

//@ts-ignore
export const Form = ({ onSubmit, mutate }: FormProps) => {
  const [inputLength, setInputLength] = useState(0);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Step 1; Capture user inputs
    onSubmit();
    const newEntry = {
      //@ts-ignore
      title: event.target.elements.title.value,
      //@ts-ignore
      content: event.target.elements.content.value,
      create_at: new Date(),
    };
    const response = await fetch("/api/home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });
    console.log("Response: ", response);
    if (response.ok) {
      mutate();
    }
  };
  return (
    <>
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <h3 className="form__heading">Create a jrnl entry</h3>
        <label className="title" htmlFor="title">
          Title
        </label>
        <input
          required
          className="title--input"
          name="title"
          id="title"
        ></input>
        <label className="content" htmlFor="content">
          Content
        </label>
        <textarea
          className="textArea"
          required
          id="content"
          rows={15}
          cols={70}
          maxLength={2500}
          minLength={10}
          placeholder="Remember, you cannot edit or delete!"
          onInput={(e) => setInputLength(e.currentTarget.textLength)}
        ></textarea>
        <div className="character__counter">
          <span id="typed--characters">{inputLength}</span>
          <span id="forward--slash">/</span>
          <span id="maximum--characters">2500</span>
        </div>
        <button className="form__submit--button">Create Entry</button>
      </form>
    </>
  );
};
