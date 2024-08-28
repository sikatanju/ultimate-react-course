// import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { Component, useState } from "react";

function App() {
    // let cities = ["New York", "LA", "Dhaka", "Dublin", "London"];
    // const handleCity = (city: string) => {
    //     console.log(city);
    // };
    let primary = "primary";
    let secondary = "secondary";
    const [alertVisible, setAlertVisibility] = useState(false);
    return (
        <div>
            {alertVisible && (
                <Alert
                    onClick={() => {
                        setAlertVisibility(false);
                    }}
                >
                    Alert !!!
                </Alert>
            )}
            <Button
                onClick={() => {
                    setAlertVisibility(true);
                }}
            >
                Button Primary
            </Button>
        </div>
    );
}

export default App;

/* <ListGroup
                cities={cities}
                heading={"Citis"}
                onSelectItem={handleCity}
            ></ListGroup> */
/* <Alert>
                Hello<span> World</span>
            </Alert> */
