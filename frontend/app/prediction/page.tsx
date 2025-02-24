// pages/index.tsx
"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/header/navbar";

interface Vote {
  character: string;
  voteType: "yes" | "no";
  voteValue: number;
}

export default function Home() {
  const [question, setQuestion] = useState("Will Bitcoin exceed $100K this year?");
  const [votes, setVotes] = useState<Vote[]>([]);
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [yesPrice, setYesPrice] = useState(50);
  const [noPrice, setNoPrice] = useState(50);
  const [loading, setLoading] = useState(false);

  const handleVote = async () => {
    setLoading(true);
    try {
      console.log("📡 Sending vote request...");

      const response = await fetch("/api/llm-vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Received votes:", data);

      if (data.votes && Array.isArray(data.votes)) {
        setVotes(data.votes);

        let newYesVotes = 0;
        let newNoVotes = 0;
        let newTotalVotes = 0;

        data.votes.forEach((vote: Vote) => {
          newTotalVotes += vote.voteValue;
          if (vote.voteType === "yes") {
            newYesVotes += vote.voteValue;
          } else {
            newNoVotes += vote.voteValue;
          }
        });

        setYesVotes(newYesVotes);
        setNoVotes(newNoVotes);
        setTotalVotes(newTotalVotes);
        setYesPrice(newTotalVotes > 0 ? (newYesVotes / newTotalVotes) * 100 : 50);
        setNoPrice(newTotalVotes > 0 ? (newNoVotes / newTotalVotes) * 100 : 50);
      } else {
        console.warn("⚠️ API returned unexpected data format.");
      }
    } catch (error) {
      console.error("❌ Error in voting process:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-10 max-w-lg mx-auto">
      <Navbar />
      <h1 className="text-3xl font-bold">Prediction Market</h1>
      <input 
        type="text" 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)}
        className="mt-4 px-3 py-2 border border-gray-300 rounded-md w-full"
        placeholder="Enter your prediction question"
      />
      
      <div className="w-full max-w-md h-6 bg-gray-300 rounded-full mt-4 relative overflow-hidden flex">
        <div
          className="h-6 bg-green-500"
          style={{ width: `${yesPrice}%`, transition: "width 0.5s ease-in-out" }}
        ></div>
        <div
          className="h-6 bg-red-500"
          style={{ width: `${noPrice}%`, transition: "width 0.5s ease-in-out" }}
        ></div>
      </div>
      <div className="flex justify-between w-full max-w-md mt-2">
        <span className="text-green-600">YES {totalVotes > 0 ? yesPrice.toFixed(2) : "0.00"}%</span>
        <span className="text-red-600">NO {totalVotes > 0 ? noPrice.toFixed(2) : "0.00"}%</span>
      </div>
      
      <div className="flex space-x-4 mt-6">
        <button
          onClick={handleVote}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          disabled={loading}
        >
          {loading ? "Voting..." : "Let LLM Decide"}
        </button>
      </div>

      <div className="mt-6 w-full max-w-md">
        <h2 className="text-xl font-semibold">Vote Results</h2>
        <ul className="mt-2 space-y-2">
          {votes.map((vote, index) => (
            <li key={index} className="border p-2 rounded-md">
              <strong>{vote.character}:</strong> {vote.voteType.toUpperCase()} ({vote.voteValue})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
