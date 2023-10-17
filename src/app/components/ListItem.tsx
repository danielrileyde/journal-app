import { useState } from "react";
import { Entry } from "../App";

interface ListItemProps {
  item: Entry;
}

export const ListItem = ({ item }: ListItemProps) => {
  const [expand, setExpand] = useState(false);
  return (
    <li
      className={`List__item ${expand ? "m-expand" : ""}`}
      key={item.id}
      onClick={() => setExpand(!expand)}
    >
      <h4>{item.title}</h4>
      <p>{new Date(item.date).toDateString()}</p>
      <p>{item.content}</p>
    </li>
  );
};
