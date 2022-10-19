import Head from "next/head"
import Feed from "../components/Feed"
import Sidebar from "../components/Sidebar"
import Widgets from "../components/Widgets"
import {Tweet} from "../typings"
import{fetchTweets} from "../utils/fetchTweets" 


interface Props{
  tweets: Tweet[]
}

const Home = ({tweets}:Props) => {
  console.log(tweets)
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
