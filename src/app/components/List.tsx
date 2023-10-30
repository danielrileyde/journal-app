import { Entry } from "../page";
import "../styles/List.css";
import { ListItem } from "./ListItem";

interface ListProps {
  items: Entry[];
}

export const List = ({ items }: ListProps) => {
  console.log("Items: ", items);
  const reversedOrder = items
    .slice()
    //@ts-ignore
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  console.log("reversedOrder: ", reversedOrder);

  return (
    <ul className="List">
      {reversedOrder.map((item) => {
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
