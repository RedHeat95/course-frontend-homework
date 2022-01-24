import './App.css';

import { PostList } from "./components/post/postList/PostList";
import { PostFacebookList } from "./components/postFacebook/postFacebookList/PostFacebookList";
import { BannerList } from "./components/banner/bannerList/BannerList";

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
