import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import PageTitle from "./components/EventBoard/PageTitle/PageTitle";
import EventBoard from "./components/EventBoard/EventBoard";
import PostList from "./components/PostList/PostList";
import MainMenu from "./components/MainMenu/MainMenu";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import upcomingEvents from "./data/upcoming-event.json";
import posts from "./data/posts.json";
import menu from "./data/mainMenuItems.json";

function App() {
  return (
    <>
      {/* <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      /> */}
      {/* <FriendList friends={friends} /> */}
      {/* <TransactionHistory items={transactions} /> */}
      {/* <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} /> */}
      {/* <PostList posts={posts} /> */}
      <MainMenu items={menu} />
    </>
  );
}

export default App;
