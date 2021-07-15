import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  return (
    <div className="layout"> 
      <Navbar />
      <div className="layout-children">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;