"use client"
import Link from '@/node_modules/next/link'
import Image from 'next/image'
import { useState } from 'react';
import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import axios from 'axios';

export default function Home() {
  // const link = "https://notes.andymatuschak.org/z2huUCj3ko99HdzFcmEDfZD"
  const link = "https://caleb-d0.netlify.app/notes/2s5s0oltg02uyq4dl3wnshy/"
  const slug = "/notes/2s5s0oltg02uyq4dl3wnshy/"

  const [data, setData] = useState("");
  const handleMouseover = async () => {

    // const response = await fetch(link, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // })

    // const response = await fetch('/api/getlink/', {
    //   method: 'GET',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // })

    axios.get(link)
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('Axios error:', error);
    });

    // console.log(response.text())/

    // const _data  = await response.text()
    // console.log(_data);
    // setData(_data);

    // fetch(link)
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const _data  = response.text()
    //     setData(_data); // Use .json() to parse JSON response
    //   })
    //   .then(data => {
    //     // Handle the response data here
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error('Fetch error:', error);
    //   });
  }
  // const isHovered = useState(setHover, 0);
  // const [isHovered, setHovered] = useState(0);

  // const popBeside = 

  return (
    <main className="flex min-h-screen flex-col items-center pt-6">
    {/* <Link href={"https://caleb-d0.netlify.app/notes/2s5s0oltg02uyq4dl3wnshy/"}> External Link </Link>
    <a className='underline underline-offset-4 text-blue-600 hover:underline-offset-8'
      href="https://caleb-d0.netlify.app/notes/2s5s0oltg02uyq4dl3wnshy/"
      onMouseOver={()=>{setHovered(1)}}
      >
      https://caleb-d0.netlify.app/notes/2s5s0oltg02uyq4dl3wnshy/</a>
      {isHovered && <div>Hello Hi this is a big card text hovering</div>} */}

      <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <a
              onMouseOver={()=>{handleMouseover()}}
              className='underline underline-offset-4 text-blue-600 hover:underline-offset-8'
              href={link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link}
            </a>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content
              className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
              sideOffset={5}
            >
              <div className="flex flex-col gap-[7px]">
                Hello, Hi!
                {data}
              </div>

              <HoverCard.Arrow className="fill-white" />
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
    </main>
  )
}
