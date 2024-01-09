'use client'

import Link from "next/link"

 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="w-full h-full bg-bg text-hover flex flex-col items-center justify-center">
      <h2 className="font-bold text-2xl">Something went wrong!</h2>
      <div className="w-fit h-fit bg-dark-bg p-2 px-4 rounded-xl flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button onClick={() => reset()} className="text-text hover:text-hover">Try again</button>
        <Link href="/" className="text-text hover:text-hover">Home</Link>
      </div>
    </div>
  )
}