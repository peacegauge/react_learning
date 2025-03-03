import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(true);
  const items = ["Paris", "New York", "Denver"];
  const [like, setLike] = useState(false);

  return (
    <div>
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Submit
      </Button> */}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={(item) => console.log(item)}
      /> */}
      {like ? (
        <Like like={like} color="pink" onLike={() => setLike(false)} />
      ) : (
        <Like like={like} color="black" onLike={() => setLike(true)} />
      )}
    </div>
  );
}

export default App;
