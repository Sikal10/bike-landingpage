import Header from "./Header";
import {useState} from "react";

const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIcon = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Header isOpen={isOpen} toggleIcon={toggleIcon} />
            <main className={`md:block ${isOpen && "fixed"}`}>{children}</main>
        </>
    );
};

export default Layout;