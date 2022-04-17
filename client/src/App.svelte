<script>
  import { Router, Link, Route } from "svelte-navigator";
  import { toasts, ToastContainer, FlatToast }  from "svelte-toasts";
  import Home from './Pages/Home.svelte';
  import Cart from './Pages/Cart.svelte';
  import Login from './Pages/Login.svelte';
  import Contact from './Pages/Contact.svelte';
  import PrivateRoute from "./Components/PrivateRoute.svelte";
  import { user } from "./Components/stores";

  export const logout = () => {
    user.set(null);
  }

</script>

<main>

  <Router>
    <nav>
      <ul>
        <li><img src="" alt="Logo" /></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {#if !$user}
          <li class="nav-item">
              <Link to="/login" class="nav-anchors">Log in</Link>
          </li>
        {:else}
          <li class="nav-item">
              <Link to="/" class="nav-anchors" on:click={ () => {
                  logout();
                  toasts.warning("logged out");
                  }}>Log out</Link>
          </li>
        {/if} 
      </ul>
    </nav>

    <div>
      <Route path="/" primary={false}>
        <Home />
      </Route>
      <Route path="/cart" primary={false}>
        <Cart />
      </Route>
      <Route path="/login" primary={false}>
        <Login />
      </Route>
      <PrivateRoute path="/contact" let:location>
        <Contact />
      </PrivateRoute>
    </div>
  </Router>

  <ToastContainer placement="bottom-right" let:data={data}>
    <FlatToast {data} /> <!-- Provider template for your toasts -->
  </ToastContainer>

</main>

<style>
 main {
   min-height: 100vh;
 }
 nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #1D1D1F;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-decoration: none;
    list-style-type: none;
    width: 80%;
    padding: 10px;
  }
  li {
    color: white;
    padding: 10px;
  }
  li:first-child{
    margin-right: auto;
  }
  li:last-child{
    margin-left: auto;
  }
</style>
