"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    push(`/prediction/${inputValue}`);
  }
  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form action="">
        <input 
          type="text" 
          placeholder="Type Your Name..."  
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
