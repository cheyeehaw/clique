import { useState } from "react";
import ContactCard from "../components/ContactCard";
import InteractionsCard from "../components/InteractionsCard";
import SummaryCard from "../components/SummaryCard";

export default function Dashboard() {
  const [selectedInteraction, setSelectedInteraction] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-start justify-center p-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Contact Info */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6">
            <ContactCard />
          </div>

          {/* Interactions */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col h-[400px]">
            <InteractionsCard
              selectedInteraction={selectedInteraction}
              onSelectInteraction={setSelectedInteraction}
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col h-full min-h-[600px]">
          <SummaryCard selectedInteraction={selectedInteraction} />
        </div>
      </div>
    </div>
  );
}
