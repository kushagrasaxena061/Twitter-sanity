import Head from "next/head"
import Feed from "../components/Feed.tsx";
import Sidebar from "../components/Sidebar.tsx"
import Widgets from "../components/Widgets.tsx";


const Home = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
      </Head>
      <main>
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </main>
    </div>
  );
}

export default Home
