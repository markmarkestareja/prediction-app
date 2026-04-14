"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!inputValue.trim()) return;
    router.push(`/prediction/${inputValue}`);
  }
  return (
    <div className="w-auto flex flex-col gap-12 items-center bg-light-color rounded-xl p-9 drop-shadow-lg">
      <div>
        <h1 className="text-dark-color font-black text-2xl md:text-4xl lg:text-6xl whitespace-nowrap">PREDICTION APP</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <input 
          type="text" 
          placeholder="Type Your Name..."  
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="text-base md:text-xl w-full p-4 italic text-center bg-lighter-color rounded"
        />
        <button type="submit" className="bg-dark-color py-4 px-12 text-lighter-color text-lg md:text-2xl lg:text-3xl rounded w-auto">Predict Data</button>
      </form>
    </div>
  );
}
