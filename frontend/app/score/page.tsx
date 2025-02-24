"use client";

import { useState } from "react";
import Navbar from "@/components/header/navbar";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [scores, setScores] = useState<{ label: string; score: number }[]>([]);
  const [feedback, setFeedback] = useState("");

  const handleScore = async () => {
    const response = await fetch("/api/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [{ role: "user", content: inputText }] }),
    });
    const data = await response.json();
    setScores(data.scores);
    setFeedback(data.feedback);
  };

  return (
    <div className="p-6">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">AI Scoring System</h1>
      <textarea
        className="w-full p-2 border rounded"
        rows={4}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your project details here..."
      />
      <button
        onClick={handleScore}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Get Score
      </button>
      <table className="mt-4 w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Criteria</th>
            <th className="border p-2">Score (out of 10)</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((s, index) => (
            <tr key={index}>
              <td className="border p-2">{s.label}</td>
              <td className="border p-2 text-center">{s.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {feedback && (
        <div className="mt-4 p-2 border rounded bg-gray-100">
          <strong>Feedback:</strong> {feedback}
        </div>
      )}
    </div>
  );
}
