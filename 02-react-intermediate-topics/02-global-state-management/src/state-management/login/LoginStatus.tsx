import useLoginStore from "./loginStore";

const LoginStatus = () => {
    const { username, login, logout } = useLoginStore();
    if (username)
        return (
            <>
                <div>
                    <span className="mx-2">{username}</span>
                    <a onClick={() => logout()} href="#">
                        Logout
                    </a>
                </div>
            </>
        );
    return (
        <div>
            <a onClick={() => login("sikatanju")} href="#">
                Login
            </a>
        </div>
    );
};

export default LoginStatus;
