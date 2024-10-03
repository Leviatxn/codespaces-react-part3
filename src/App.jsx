import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Posts from './Posts';
import Shop from './Shop';
function App() {
  return (<BrowserRouter>
  <div>
    <ul>
      <li><Link to = "/"> Home</Link></li>
      <li> <Link to = "/posts"> All posts</Link></li>
      <li> < Link to = "/posts/1"> detail item1</Link></li>
      <li>< Link to  = "/posts?fname=Akaratorn &lname=Tapporn">Akaratorn</Link></li>
 
      <li><Link to = "/about"> About</Link></li>
       
      <li><Link to = "/shop">Shop</Link></li>
    </ul>
  </div>
  <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/posts" element = {<Posts/>}/>
    <Route path = "postd/:id" element = {<Posts/>}/>
    <Route path = "/about" element = {<About/>}/>
    <Route path="/shop" element = {<Shop/>}/>
   
  </Routes>
  </BrowserRouter>);
}
 
export default App;
