import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home'
import "./app.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';

function App() {
  return (
      <Router>
          <Topbar />
          <div className="container">
              <Sidebar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/users">
                  <UserList />
                </Route>
                <Route path="/user/:id">
                  <User />
                </Route>
                <Route path="/newUser">
                  <NewUser />
                </Route>
                <Route path="/products">
                  <ProductList />
                </Route>
                <Route exact path="/products/:productsId">
                  <ProductList />
                </Route>
                <Route path="/newproduct">
                  <ProductList />
                </Route>
              </Switch>
          </div>
      </Router>
  )
}

export default App;
