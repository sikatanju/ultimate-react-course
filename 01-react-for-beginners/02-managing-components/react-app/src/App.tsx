import produce, { produceWithPatches } from "immer";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {
    // const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
    // const [game, setGame] = useState({
    //     id: 1,
    //     players: [
    //         { id: 1, title: "Product1", quantity: 1 },
    //         { id: 2, title: "Product2", quantity: 1 },
    //     ],
    // });

    const handleClick = () => {};

    return (
        <div>
            <ExpandableText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                libero assumenda sunt vel dolorum ab, molestiae sint accusantium
                doloribus, iure culpa officia soluta quaerat fugit nostrum non
                quia. Consequatur, quo. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et laborum cupiditate, sapiente laboriosam,
                alias mollitia accusamus ducimus rem magnam minima obcaecati
                minus. Quasi, aut dolores veritatis consequuntur aspernatur
                distinctio perferendis.
            </ExpandableText>
        </div>
    );
}

export default App;

//* Simplifying update with immer
/*
const [item, setItem] = useState([
        { id: 1, title: "update_api", fixed: false },
        { id: 2, title: "update_ui", fixed: false },
    ]);
    const handleClick = () => {
        setItem(
            produce((draft) => {
                const tempItem = draft.find((item) => item.id === 1);
                if (tempItem) {
                    tempItem.fixed = true;
                }
            })
        );
    };
    return (
        <div>
            <br />
            <br />
            {item.map((item) => (
                <p key={item.id}>
                    {item.title} {item.fixed ? "fixed" : "new"}
                </p>
            ))}
            <br />
            <br />
            <button onClick={handleClick}>Button</button>
        </div>
    );
*/

// *Updating an array of objects:
/*
const [item, setItem] = useState([
    { id: 1, title: "update_api", fixed: false },
    { id: 2, title: "update_ui", fixed: false },
]);
const handleClick = () => {
    console.log(item[0].id + " -- " + item[0].fixed);


    //* Updating an item:
    setItem([
        ...item.map((tempItem) =>
            tempItem.id === 1 ? { ...tempItem, title: "updated_api" } : tempItem
        ),
    ]);
    console.log(item[0].id + " -- " + item[0].fixed);
};
return (
    <div>
        <br />
        <br />
        {item[0].title}
        <br />
        <br />
        <button onClick={handleClick}>Button</button>
    </div>
);
*/

//* Updating an array:
/*const [arr, setArr] = useState(["hello", "happy", "sad", "anxious"]);
const handleClick = () => {
    //* Adding an item
    // setArr([...arr, "excited"]);
    //* Removing an item:
    // setArr([...arr.filter((temp) => temp !== "hello")]);
    //* Updating an item:
    // setArr([...arr.map((temp) => (temp === "hello" ? "bye" : temp))]);
};
*/

// * Updating a nested object:
/*
function App() {
    const [person, setPerson] = useState({
        name: "Jim Halpert",
        address: {
            city: "Scranton, USA",
            zip: 111111,
        },
    });
    const handleClick = () => {
        const newPerson = {
            ...person,
            address: {
                ...person.address,
                zip: person.address.zip + 1,
            },
        };
        setPerson(newPerson);
    };
    return (
        <div>
            {person.address.city}
            <br />
            <br />
            {person.address.zip}
            <br />
            <br />
            <button onClick={handleClick}>Button</button>
        </div>
    );
}
*/

//* Updating an object:
/* 
function App() {
    const [shoes, setShoes] = useState({
        title: "Nike Air",
        price: 100,
    });

    const handleClick = () => {
        const newShoes = {
            // title: shoes.title,
            ...shoes,
            price: shoes.price + 1,
        };
        setShoes(newShoes);

        // or we could just do this: 
        setShoes({...shoes, price:shoes.price+1})
    };
    return (
        <div>
            {shoes.title} -- {shoes.price}
            <button onClick={handleClick}>Button</button>
        </div>
    );
}
*/

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
