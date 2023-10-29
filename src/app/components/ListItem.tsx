import { useState } from "react";
import { Entry } from "../page";

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
      <div className="List__item--heading">
        <p className="List__item--date">{new Date(item.date).toDateString()}</p>
        <p className="List__item--title">{item.title}</p>
      </div>
      <p className="List__item--content">{item.content}</p>
    </li>
  );
};
