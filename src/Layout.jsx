import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    {/*
        const [menuUopen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        }

        in return in main nav: 

        <button>Menu</button>
        
        */}

  return (
    <>
        <section className="header">
            <section className="login">
                <h2>Sign In</h2>
                <h3 id="input">Enter Username</h3>
                <h3 id="input">Enter Password</h3>
            </section>
            <section id="cart">
                <h4>Your Cart</h4>
            </section>
        </section>
        <nav id="main-nav">
            <ul>
                <li><Link id="home" to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/store">Store</Link></li>
                <li><Link to="/events">Events</Link></li>
            </ul>
        </nav>
        <h1 id="title">CrowPing Games</h1>

        
    <Outlet />
    </>
  )
};

export default Layout;