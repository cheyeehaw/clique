import { useState } from "react";
import { Phone, MessageSquare, Video, Mail, Calendar } from "lucide-react";

interface Interaction {
  id: string;
  type: "call" | "text" | "email" | "meeting" | "video";
  title: string;
  date: string;
  time: string;
  duration?: string;
  summary: string;
}

const interactionIcons = {
  call: "📞",
  text: "💬",
  email: "📧", 
  meeting: "📅",
  video: "🎥"
};

const interactionIconsLucide = {
  call: Phone,
  text: MessageSquare,
  email: Mail,
  meeting: Calendar,
  video: Video
};

interface InteractionsCardProps {
  selectedInteraction: string | null;
  onSelectInteraction: (id: string | null) => void;
}

export const InteractionsCard = ({ selectedInteraction, onSelectInteraction }: InteractionsCardProps) => {
  const [interactions] = useState<Interaction[]>([
    {
      id: "1",
      type: "call",
      title: "Product Demo Discussion",
      date: "Sep 6, 2025",
      time: "3:45 PM",
      duration: "25 min",
      summary: "Discussed the new product features and pricing options. Sarah showed strong interest in the enterprise package and asked about implementation timeline. Follow-up scheduled for next week."
    },
    {
      id: "2",
      type: "email",
      title: "Contract Questions",
      date: "Sep 5, 2025", 
      time: "11:20 AM",
      summary: "Sarah sent detailed questions about the contract terms, specifically regarding data security and compliance requirements. Provided comprehensive answers and additional documentation."
    },
    {
      id: "3",
      type: "text",
      title: "Meeting Confirmation",
      date: "Sep 4, 2025",
      time: "2:15 PM",
      summary: "Quick text exchange to confirm tomorrow's meeting time and location. Sarah confirmed and mentioned bringing her technical team lead."
    },
    {
      id: "4",
      type: "meeting",
      title: "Initial Consultation",
      date: "Sep 2, 2025",
      time: "10:00 AM",
      duration: "45 min",
      summary: "First meeting to understand Sarah's company needs. Discussed current pain points with their existing solution and how our platform could help. Very positive initial response."
    },
    {
      id: "5",
      type: "video",
      title: "Technical Demo",
      date: "Aug 30, 2025",
      time: "4:30 PM", 
      duration: "30 min",
      summary: "Conducted a technical demonstration of the platform's core features. Sarah's team asked technical questions about API integration and scalability. Provided technical documentation."
    }
  ]);

  return (
    <div className="crm-card bounce-hover h-full flex flex-col">
      <div className="text-reveal">
        <h2 className="text-xl font-semibold text-foreground mb-6 gradient-text">
          Recent Interactions
        </h2>
      </div>
      
      <div className="space-y-3 max-h-96 overflow-y-auto flex-1">
        {interactions.map((interaction, index) => {
          const IconComponent = interactionIconsLucide[interaction.type];
          const isSelected = selectedInteraction === interaction.id;
          
          return (
            <div 
              key={interaction.id}
              className={`text-reveal text-reveal-delay-${Math.min(index + 1, 3)} interaction-item ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectInteraction(isSelected ? null : interaction.id)}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isSelected ? 'bg-primary/20' : 'bg-muted/50'
                  }`}>
                    <IconComponent className={`h-4 w-4 ${
                      isSelected ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-foreground flex items-center">
                      <span className="mr-2">{interactionIcons[interaction.type]}</span>
                      {interaction.title}
                    </h3>
                    {interaction.duration && (
                      <span className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded">
                        {interaction.duration}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <p className="text-xs text-muted-foreground">
                      {interaction.date} • {interaction.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Export the interactions data for the summary card
export const getInteractionsData = () => [
  {
    id: "1",
    type: "call" as const,
    title: "Product Demo Discussion",
    date: "Sep 6, 2025",
    time: "3:45 PM",
    duration: "25 min",
    summary: "Discussed the new product features and pricing options. Sarah showed strong interest in the enterprise package and asked about implementation timeline. Follow-up scheduled for next week."
  },
  {
    id: "2",
    type: "email" as const,
    title: "Contract Questions",
    date: "Sep 5, 2025", 
    time: "11:20 AM",
    summary: "Sarah sent detailed questions about the contract terms, specifically regarding data security and compliance requirements. Provided comprehensive answers and additional documentation."
  },
  {
    id: "3",
    type: "text" as const,
    title: "Meeting Confirmation",
    date: "Sep 4, 2025",
    time: "2:15 PM",
    summary: "Quick text exchange to confirm tomorrow's meeting time and location. Sarah confirmed and mentioned bringing her technical team lead."
  },
  {
    id: "4",
    type: "meeting" as const,
    title: "Initial Consultation",
    date: "Sep 2, 2025",
    time: "10:00 AM",
    duration: "45 min",
    summary: "First meeting to understand Sarah's company needs. Discussed current pain points with their existing solution and how our platform could help. Very positive initial response."
  },
  {
    id: "5",
    type: "video" as const,
    title: "Technical Demo",
    date: "Aug 30, 2025",
    time: "4:30 PM", 
    duration: "30 min",
    summary: "Conducted a technical demonstration of the platform's core features. Sarah's team asked technical questions about API integration and scalability. Provided technical documentation."
  }
];