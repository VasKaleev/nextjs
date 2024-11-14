// 'use client';
// import { usePosts } from '@/store'
// import Link from 'next/link'
// import { useEffect } from 'react';
// import { shallow } from 'zustand/shallow';

// const Posts = () => {
//     const [posts, loading, getAllPosts] = usePosts(
//     (state) => [state.posts, state.loading, state.getAllPosts],
//     shallow
//   );

//   useEffect(() => {
//     getAllPosts();
//   }, [getAllPosts]);

//   return (loading ? <h3>Loading...</h3>:
//     <div>
//          <ul>
//           {posts.map((post:any)=>(
//             <li key={post.id}>
//               <Link href={`/blog/${post.id}`}>{post.title}</Link>
//             </li>
//           ))}
//         </ul>
//     </div>
//   )
// }
// export {Posts}
"use client";
import useSWR from "swr";
// import { shallow } from "zustand/shallow";
// import { usePosts } from "@/store";
import Link from "next/link";
import { getAllPosts } from "@/services/getPosts";
// import { useEffect } from "react";

const Posts = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);

  return isLoading ? (
    <h3>Loading... </h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };