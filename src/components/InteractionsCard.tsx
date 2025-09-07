import { useEffect, useState } from "react";
import { Phone, MessageSquare, Video, Mail, Calendar } from "lucide-react";

interface Interaction {
  id: string;
  type: "call" | "text" | "email" | "meeting" | "video";
  title: string;
  date: string;
  time: string;
  duration?: string;
  summary: string;
  nextSteps?: {
    action: string;
    date: string;
    time: string;
  };
}

const interactionIconsLucide = {
  call: Phone,
  text: MessageSquare,
  email: Mail,
  meeting: Calendar,
  video: Video,
};

interface InteractionsCardProps {
  selectedInteraction: string | null;
  onSelectInteraction: (id: string | null) => void;
}

export default function InteractionsCard({
  selectedInteraction,
  onSelectInteraction,
}: InteractionsCardProps) {
  const [interactions, setInteractions] = useState<Interaction[]>(interactionsData);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInteractions([...fakeData, ...interactions]);
      console.log(interactions);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="crm-card flex flex-col h-full overflow-hidden">
      <h2 className="text-lg font-semibold mb-4">Recent Interactions</h2>
      <div className="space-y-3 overflow-y-auto pr-2">
        {interactions.map((interaction) => {
          const IconComponent = interactionIconsLucide[interaction.type];
          const isSelected = selectedInteraction === interaction.id;

          return (
            <div
              key={interaction.id}
              className={`p-3 rounded-lg cursor-pointer transition ${
                isSelected ? "bg-blue-100" : "bg-white/70 hover:bg-gray-50"
              }`}
              onClick={() =>
                onSelectInteraction(isSelected ? null : interaction.id)
              }
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                    <IconComponent className="w-4 h-4 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium">{interaction.title}</p>
                    <p className="text-xs text-gray-500">
                      {interaction.date} • {interaction.time}
                    </p>
                  </div>
                </div>
                {interaction.duration && (
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {interaction.duration}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const fakeData = [
  {
    id: "120",
    type: "call",
    title: "Contract Discussion with Zane",
    date: "Sep 7, 2025",
    time: "10:30 AM",
    duration: "5 min",
    summary:
      "Discuss we're good to go with the contract. Will meet up next week to finalize contract.",
    nextSteps: {
      action: "Schedule Meeting",
      date: "Sep 14, 2025",
      time: "10:30 AM",
    },
  }
];


// ✅ Export the data so SummaryCard can reuse it
export const interactionsData: Interaction[] = [
  {
    id: "1",
    type: "call",
    title: "Product Demo Discussion",
    date: "Sep 7, 2025",
    time: "3:45 PM",
    duration: "25 min",
    summary:
      "Discussed the new product features and pricing options. Sarah showed strong interest in the enterprise package and asked about implementation timeline. Follow-up scheduled for next week.",
    nextSteps: {
      action: "Schedule Follow Up",
      date: "Sep 13, 2025",
      time: "10:00 AM",
    },
  },
  {
    id: "2",
    type: "email",
    title: "Contract Questions",
    date: "Sep 5, 2025",
    time: "11:20 AM",
    summary:
      "Sarah sent detailed questions about the contract terms, specifically regarding data security and compliance requirements. Provided comprehensive answers and additional documentation.",
  },
  {
    id: "3",
    type: "text",
    title: "Meeting Confirmation",
    date: "Sep 4, 2025",
    time: "2:15 PM",
    summary:
      "Quick text exchange to confirm tomorrow's meeting time and location. Sarah confirmed and mentioned bringing her technical team lead.",
  },
  {
    id: "4",
    type: "meeting",
    title: "Initial Consultation",
    date: "Sep 2, 2025",
    time: "10:00 AM",
    duration: "45 min",
    summary:
      "First meeting to understand Sarah's company needs. Discussed current pain points with their existing solution and how our platform could help. Very positive initial response.",
  },
  {
    id: "5",
    type: "video",
    title: "Technical Demo",
    date: "Aug 30, 2025",
    time: "4:30 PM",
    duration: "30 min",
    summary:
      "Conducted a technical demonstration of the platform's core features. Sarah's team asked technical questions about API integration and scalability. Provided technical documentation.",
  },
];
