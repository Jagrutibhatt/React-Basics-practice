import { MouseEvent, ReactNode, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //* State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] = variable = selectedIndex
  // arr[2]=function updater = setSelectedIndex

  return (
    // <> informing react to use fragment to all the children
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>No items found🫤</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
