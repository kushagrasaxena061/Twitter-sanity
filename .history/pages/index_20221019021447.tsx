import Head from "next/head"
import Feed from "../components/Feed.tsx";
import Sidebar from "../components/Sidebar.tsx"
import Widgets from "../components/Widgets.tsx";
import {Tweet} from "../typings"
import{fetchTweets} from "../utils" 


interface Props{
  tweets: Tweet[]
}

const Home: NextPage = (props:Props) => {
  return (
    <div className='lg:max-w-6xl mx-auto max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter</title>
      </Head>
      <main className="grid grid-cols-9 col-span-2">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </main>
    </div>
  );
}

export default Home



export const getServerSideProps: GetServerSideProps = async (context) =>{
  const tweets = await fetchTweets();
  return {
    props:{
      tweets
    }
  }
}
