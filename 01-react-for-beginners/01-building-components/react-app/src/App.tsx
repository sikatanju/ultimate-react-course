// import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { Component, useState } from "react";
import Like from "./components/Like/Like";
import { FaGamepad } from "react-icons/fa";

function App() {
    let cities = ["New York", "LA", "Dhaka", "Dublin", "London"];
    const handleCity = (city: string) => {
        console.log(city);
    };
    return (
        <div>
            <Like onClick={() => {}}></Like>
        </div>
        // <div>
        //     <ListGroup
        //         cities={cities}
        //         heading="City List"
        //         onSelectItem={() => {}}
        //     ></ListGroup>
        // </div>
    );
}

export default App;

// function App() {
//     // let cities = ["New York", "LA", "Dhaka", "Dublin", "London"];
//     // const handleCity = (city: string) => {
//     //     console.log(city);
//     // };
//     let primary = "primary";
//     let secondary = "secondary";
//     const [alertVisible, setAlertVisibility] = useState(false);
//     return (
//         <div>
//             {alertVisible && (
//                 <Alert
//                     onClick={() => {
//                         setAlertVisibility(false);
//                     }}
//                 >
//                     Alert !!!
//                 </Alert>
//             )}
//             <Button
//                 onClick={() => {
//                     setAlertVisibility(true);
//                 }}
//             >
//                 Button Primary
//             </Button>
//         </div>
//     );
// }

/* <ListGroup
                cities={cities}
                heading={"Citis"}
                onSelectItem={handleCity}
            ></ListGroup> */
/* <Alert>
                Hello<span> World</span>
            </Alert> */
