import './App.css';

import { PostList } from "./components/Post/PostList/PostList";
import { PostFacebookList } from "./components/PostFacebook/PostFacebookList/PostFacebookList";
import { BannerList } from "./components/Banner/BannerList/BannerList";

function App() {
  return (
    <div>
      <PostList />
      <PostFacebookList />
      <BannerList />
    </div>
  );
}

export default App;
