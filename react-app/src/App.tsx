import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(true);
  const items = ["Paris", "New York", "Denver"];

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
      <Like
        onClick={() => {
          console.log("clicked");
        }}
      />
    </div>
  );
}

export default App;
