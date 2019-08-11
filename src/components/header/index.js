import React from 'react';
import Searchbox from "./searchbox";
import Login from "./login";
const Header = () => {
    return (<div><div className="appName">Movie Catalog </div> <Searchbox/><Login/></div>);
}
export default Header;