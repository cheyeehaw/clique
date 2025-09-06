import { useState } from "react";
import { ContactCard } from "@/components/ContactCard";
import { UpcomingCard } from "@/components/UpcomingCard";
import { InteractionsCard } from "@/components/InteractionsCard";
import { SummaryCard } from "@/components/SummaryCard";

const Index = () => {
  const [selectedInteraction, setSelectedInteraction] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-reveal mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">
            CRM Profile Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage client relationships and track interactions
          </p>
        </div>

        {/* Dashboard Grid - 2x2 layout like iCloud */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          {/* Contact Info - Top Left */}
          <div className="h-full">
            <ContactCard />
          </div>

          {/* Upcoming Events - Top Right */}
          <div className="h-full">
            <UpcomingCard />
          </div>

          {/* Interactions - Bottom Left */}
          <div className="h-full">
            <InteractionsCard 
              selectedInteraction={selectedInteraction}
              onSelectInteraction={setSelectedInteraction}
            />
          </div>

          {/* Summary - Bottom Right */}
          <div className="h-full">
            <SummaryCard selectedInteraction={selectedInteraction} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
