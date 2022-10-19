import Head from "next/head"
import Sidebar from "../components/Sidebar.js"


const Home = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
      </Head>
      <main>
        <Sidebar/>
      </main>
    </div>
  );
}

export default Home
