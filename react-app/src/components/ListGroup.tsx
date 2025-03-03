import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: ListGroupProps) {
  const [selectIndex, setSelectIndex] = useState(-1);

  return (
    <>
      <h1>City name</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectIndex(index);
              onSelectedItem(item);
            }}
            className={
              index === selectIndex
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
