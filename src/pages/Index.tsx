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

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Contact Info - Takes 1 column */}
          <div className="xl:col-span-1">
            <ContactCard />
          </div>

          {/* Upcoming Events - Takes 1 column */}
          <div className="xl:col-span-1">
            <UpcomingCard />
          </div>

          {/* Interactions - Takes 1 column */}
          <div className="xl:col-span-1">
            <InteractionsCard 
              selectedInteraction={selectedInteraction}
              onSelectInteraction={setSelectedInteraction}
            />
          </div>

          {/* Summary - Takes 1 column */}
          <div className="xl:col-span-1">
            <SummaryCard selectedInteraction={selectedInteraction} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
