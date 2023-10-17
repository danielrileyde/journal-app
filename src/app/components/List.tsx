import { Entry } from "../App";
import "../styles/List.css";
import { ListItem } from "./ListItem";

interface ListProps {
  items: Entry[];
}

export const List = ({ items }: ListProps) => {
  return (
    <ul className="List">
      {items.map((item) => {
        return <ListItem item={item} />;
      })}
    </ul>
  );
};
