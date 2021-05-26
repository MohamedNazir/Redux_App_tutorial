import "./App.css";
import Posts from "./components/posts.js";
import PostForm from "./components/postform.js";
import { Provider } from "react-redux";
import store from "./store.js";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr></hr>
        <Posts></Posts>
      </div>
    </Provider>
  );
}

export default App;
