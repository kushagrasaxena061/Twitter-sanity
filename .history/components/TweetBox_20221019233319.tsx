import React, { useRef,Dispatch,MouseEvent,SetStateAction,useState,globalThisMouseEvent } from 'react'
import {CalendarIcon,EmojiHappyIcon,LocationMarkerIcon,PhotographIcon,SearchCircleIcon} from "@heroicons/react/outline"
import {useSession} from "next-auth/react"
import {Tweet,TweetBody} from "../typings"

interface Props{
    setTweets: Dispatch<SetStateAction<Tweet[]>>
}

export default function TweetBox({setTweets}:Props) {
    const [input,setInput] = useState<string>("")
    const [image,setImage] = useState<string>("")
    const imageInputRef = useRef<HTMLInputElement>(null)
    const [imageUrlBoxIsOpen,setImageUrlBoxIsOpen] = useState<boolean>(false)
    const addImageToTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!imageInputRef.current?.value) return;
        setImage(imageInputRef.current.value);
        imageInputRef.current.value="";
        setImageUrlBoxIsOpen(false)
    };
    const postTweet = async () => {
        const tweetBody: TweetBody = {
            text:input,
            username:session?.user?.name || 'Unknown User',
            profileImg:session?.user?.image || "https://links.papareact.com/gll",
            image:image
        }
        const result = await fetch(`/api/addTweet`,{
            body: JSON.stringify(tweetBody), method:"POST"
        })
        const json = await result.json()
    }
    const handleSubmit = (
      e: React.MouseEvent<HTMLButtonElement, globalThisMouseEvent>
    ) => {
        e.preventDefault()
        postTweet()
    };
  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 object-cover rounded-full mt-4"
        src="https://links.papareact.com/gll"
        alt="no photo tweetbox"
      />
      <div className="flex flex-1 items-center pl-2 ">
        <form className="flex-1 flex flex-col">
          <input
            ref={imageInputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-24 w-full text-xl outline-none placeholder:text:xl"
            type="text"
            placeholder="What's Happening?"
          />
          <div className="flex items-center ">
            <div className="flex flex-1 space-x-4 text-[#00ADED]">
              <PhotographIcon
                onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
                className="h-5 w-5 cursor-pointer transition-transformm duration-150 ease-out hover:scale-150"
              />
              <SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transformm duration-150 ease-out hover:scale-150" />
              <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transformm duration-150 ease-out hover:scale-150" />
              <CalendarIcon className="h-5 w-5 cursor-pointer transition-transformm duration-150 ease-out hover:scale-150" />
              <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transformm duration-150 ease-out hover:scale-150" />
            </div>
            <button
                onClick={handleSubmit}
              disabled={!input}
              className="bg-[#00ADED] px-5 py-2 font-bold disabled:opacity-40 text-white rounded-full"
            >
              Tweet
            </button>
          </div>
          {imageUrlBoxIsOpen && (
            <form className="mt-5 flex rounded-lg bg-[#00ADED]/80 py-2 px-4">
              <input
                ref={imageInputRef}
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                type="text"
                placeholder="Enter Image URL..."
              />
              <button
                onClick={(e) => addImageToTweet}
                type="submit"
                className="font-bold text-white"
              >
                Add Image
              </button>
            </form>
          )}
          {image && (
            <img
              className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
              src={image}
              alt=""
            />
          )}
        </form>
      </div>
    </div>
  );
}
