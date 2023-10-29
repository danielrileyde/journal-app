import { FormEvent } from "react";
import useSWR from "swr";

interface FormProps {
  onSubmit: () => void;
  mutate: () => void;
}

//@ts-ignore
export const Form = ({ onSubmit, mutate }: FormProps) => {
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
        <label htmlFor="title">Title</label>
        <input required name="title" id="title"></input>
        <label htmlFor="content">Content</label>
        <textarea
          required
          id="content"
          rows={15}
          cols={70}
          maxLength={2500}
        ></textarea>
        <button className="form__submit--button">Create Entry</button>
      </form>
    </>
  );
};
