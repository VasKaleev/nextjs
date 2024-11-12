'use client';
export default function ErrorWripper({error}: {error: Error}) {
  return <h1>Oops!!! {error.message}</h1>
}