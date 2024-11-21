import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt, mollitia!
            </p>
            <div>
                <Link to="/users">users</Link>
            </div>
            {/* <a href="/users">Users</a> */}
            <div>
                <Link to="/contact">contact</Link>
            </div>
        </>
    );
};

export default HomePage;
