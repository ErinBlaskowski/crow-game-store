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
        <section class="header">
            <section class="login">
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
                <li><a id="home" href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/store">Store</a></li>
                <li><a href="/events">Events</a></li>
            </ul>
        </nav>
        <h1 id="title">CrowPing Games</h1>

        
    <Outlet />
    </>
  )
};

export default Layout;