// // 'use client';
// import { getAllPosts } from '@/services/getPosts';
// import {  Posts } from '@/components/Posts';
// // import type { Metadata } from 'next'
// // import { useEffect, useState } from 'react';
// import { PostSearch } from '@/components/PostSearch';
// import { usePosts } from '@/store';
// import { shallow } from 'zustand/shallow';
// // import { useEffect } from 'react';


// export default  function Blog() {
  
//     return (
//       <>
//         <h1>Blog page</h1>
//         <PostSearch />
//         <Posts />
//       </>
//       );
// }
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  );
}