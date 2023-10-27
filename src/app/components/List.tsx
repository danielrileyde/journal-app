import { Entry } from "../page";
import "../styles/List.css";
import { ListItem } from "./ListItem";

interface ListProps {
  items: Entry[];
}

export const List = ({ items }: ListProps) => {
  return (
    <ul className="List">
      {items.map((item) => {
        return (
          <ListItem
            key={(item.content, item.date, item.id, item.title)}
            item={item}
          />
        );
      })}
    </ul>
  );
};
