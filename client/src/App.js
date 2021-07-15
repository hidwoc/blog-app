import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import AddPost from "./screens/AddPost/AddPost"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addpost" component={AddPost} />
      </Switch>
    </div>
  );
}

export default App;
