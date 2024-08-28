import { MouseEvent, useState } from "react";

interface Props {
    cities: string[];
    heading: string;
    onSelectItem: (city: string) => void;
}

function ListGroup({ cities, heading, onSelectItem }: Props) {
    // let cities = ["New York", "LA", "Dhaka", "Dublin", "London"];
    const [selectedItem, setSelectedItem] = useState(-1);
    return (
        <>
            <h1>{heading}</h1>
            {cities.length === 0 && <p>No item found!</p>}
            <ul className="list-group">
                {cities.map((city, index) => (
                    <li
                        className={
                            selectedItem === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={city}
                        onClick={() => {
                            setSelectedItem(index);
                            onSelectItem(city);
                        }}
                    >
                        {city}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;

/* {cities.map((city) => ( */
// onClick={() => console.log(city, index)}
// onClick={(event) => console.log(event)}
// onClick={handleClick}
// cities = [];

// const message = cities.length == 0 ? <p>No item found!</p> : null;
// const getMessage = () => {};
/*
    if (cities.length == 0)
    return (
    <>
    <h1>List</h1>
    <p>No item found!</p>
    </>
    );*/

// Event Handler
// const handleClick = (event: MouseEvent) => console.log(event);
// const handleClick = (event: MouseEvent) => (selectedItem = index);

// let selectedItem = 0;
// const arr = useState(-1);
// arr[0] -> contains variable, arr[1] -> contains function
/*
return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                <li className="list-group-item disabled" aria-disabled="true">
                    A disabled item
                </li>
                <li className="list-group-item">A second item</li>

                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </>
    );
 */
