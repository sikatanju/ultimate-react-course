import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Rest/Form";

import ExpenseTrackerList from "./components/ExpenseTracker_Mine/ExpenseTrackerList";
import ExpenseTrackerForm from "./components/ExpenseTracker_Mine/ExpenseTrackerForm";

import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";

import "./index.css";

export const categories = ["Groceries", "Electricity", "Entertainment"];

function App() {
    const [selectedCategory, setSelectedCategory] = useState("");

    const [expenseList, setExpenseList] = useState([
        { id: 1, description: "Bread", amount: 5, category: "Groceries" },
        {
            id: 2,
            description: "Electricity",
            amount: 55,
            category: "Utilities",
        },
        {
            id: 3,
            description: "Youtube Preimum",
            amount: 10,
            category: "Entertainment",
        },
    ]);

    const handleSubmit = (data: any) => {
        console.log(data);
        const newExpenseList = [
            ...expenseList,
            {
                id: expenseList.length + 1,
                description: data.description,
                amount: data.amount,
                category: data.category,
            },
        ];
        setExpenseList([
            ...expenseList,
            {
                id: expenseList.length + 1,
                description: data.description,
                amount: data.amount,
                category: data.category,
            },
        ]);
    };

    const handleDeleteExpense = (index: any) => {
        setExpenseList(expenseList.filter((exp) => exp.id != index));
    };

    const visibleExpense = selectedCategory
        ? expenseList.filter((exp) => exp.category === selectedCategory)
        : expenseList;

    return (
        <div>
            <div className="mb-5">
                <ExpenseForm
                    expenseForm={(expense) =>
                        setExpenseList([
                            ...expenseList,
                            { ...expense, id: expenseList.length + 1 },
                        ])
                    }
                ></ExpenseForm>
            </div>
            <div className="mb-3">
                {expenseList.length !== 0 && (
                    <ExpenseFilter
                        onSelectCategory={(category) =>
                            setSelectedCategory(category)
                        }
                    ></ExpenseFilter>
                )}
            </div>
            <br /> <br />
            <div className="mb-3">
                <ExpenseList
                    expenses={visibleExpense}
                    onDelete={handleDeleteExpense}
                ></ExpenseList>
            </div>
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
