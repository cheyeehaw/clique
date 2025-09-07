// src/pages/Index.tsx
import { useState } from "react";
import ContactCard from "@/components/ContactCard";
import InteractionsCard from "@/components/InteractionsCard";
import SummaryCard from "@/components/SummaryCard";

export default function Index() {
  const [selectedInteraction, setSelectedInteraction] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-6 flex">
      <div className="mx-auto max-w-7xl w-full grid place-content-center gap-6">
        {/* 2×2 grid → now 2×1 since UpcomingCard is removed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left column */}
          <div className="glass h-full rounded-2xl p-4">
            <ContactCard />
          </div>
          {/* Right column */}
          <div className="glass h-full rounded-2xl p-4">
            <InteractionsCard
              selectedInteraction={selectedInteraction}
              onSelectInteraction={setSelectedInteraction}
            />
          </div>
          {/* Summary spans full width below */}
          <div className="glass h-full rounded-2xl p-4 lg:col-span-2">
            <SummaryCard selectedInteraction={selectedInteraction} />
          </div>
        </div>
      </div>
    </div>
  );
}
