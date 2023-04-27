import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

import { useState } from "react";

function App() {
  let items = ["Mumbai", "Delhi", "Patna", "Varanasi", "Hyderabad"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [visible, setVisibility] = useState(false);

  return (
    <div>
      {visible && (
        <Alert
          onClose={() => {
            setVisibility(false);
          }}
        >
          {" "}
          Hello World{" "}
        </Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setVisibility(true);
        }}
      >
        My Button
      </Button>

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
