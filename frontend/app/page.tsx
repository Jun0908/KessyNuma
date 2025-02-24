
import Link from "next/link"; // Import Link to enable routing
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Coins,
  Users2,
  Calculator,
  LineChart,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/header/navbar";

export default function SimulationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        {/* Simulation Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              Simulation
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tools and models for testing decision-making mechanisms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Prediction Market",
                description:
                  "Use market-based forecasting to simulate proposal outcomes before implementation.",
                icon: <Coins className="w-6 h-6 text-purple-500" />,
                href: "/prediction", // <--- Link to /predict
              },
              {
                title: "Grants Review",
                description:
                  "Evaluate different grant proposals through simulation models for funding decisions.",
                icon: <Users2 className="w-6 h-6 text-blue-500" />,
                href: "/score", // <--- Link to /score
              },
            ].map((item, index) => (
              <Link key={index} href={item.href} className="block">
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader className="space-y-1">
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Contracts Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-cyan-600 mb-4">
              Contracts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              On-chain contracts for decentralized governance operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Prediction Market",
                description:
                  "Smart contracts that settle outcomes based on market signals.",
                icon: <LineChart className="w-6 h-6 text-cyan-500" />,
                href: "/predictionMarket", // <--- Link to /predictionMarket
              },
              {
                title: "Quadratic Voting",
                description:
                  "On-chain Quadratic Voting mechanism to ensure fair representation.",
                icon: <Calculator className="w-6 h-6 text-teal-500" />,
                href: "/quadraticVoting", // <--- Link to /quadraticVoting
              },
            ].map((item, index) => (
              <Link key={index} href={item.href} className="block">
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader className="space-y-1">
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-yellow-600 mb-4">
              Other
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Additional tools and integrations for extended governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "LLM Conversation",
                description:
                  "Engage in natural language dialogues with an AI to explore proposals or governance strategies.",
                icon: <MessageSquare className="w-6 h-6 text-pink-500" />,
                href: "/conversation", // <--- Link to /conversation
              },
            ].map((item, index) => (
              <Link key={index} href={item.href} className="block">
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader className="space-y-1">
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

