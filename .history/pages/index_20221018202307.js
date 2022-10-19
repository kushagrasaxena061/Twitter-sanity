import Head from "next/head"
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar.tsx"


const Home = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
      </Head>
      <main>
        <Sidebar/>
        <Feed/>
      </main>
    </div>
  );
}

export default Home
