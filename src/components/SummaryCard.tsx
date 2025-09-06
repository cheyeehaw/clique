import { MessageSquare, Clock, User } from "lucide-react";
import { getInteractionsData } from "./InteractionsCard";

interface SummaryCardProps {
  selectedInteraction: string | null;
}

export const SummaryCard = ({ selectedInteraction }: SummaryCardProps) => {
  const interactions = getInteractionsData();
  const selectedData = selectedInteraction 
    ? interactions.find(interaction => interaction.id === selectedInteraction)
    : null;

  return (
    <div className="crm-card bounce-hover h-full flex flex-col">
      <div className="text-reveal">
        <h2 className="text-xl font-semibold text-foreground mb-6 gradient-text">
          Interaction Summary
        </h2>
      </div>
      
      {selectedData ? (
        <div className="text-reveal text-reveal-delay-1 space-y-4">
          {/* Header */}
          <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="font-semibold text-foreground flex items-center mb-2">
              <MessageSquare className="h-4 w-4 mr-2 text-primary" />
              {selectedData.title}
            </h3>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {selectedData.date} • {selectedData.time}
              </span>
              {selectedData.duration && (
                <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                  {selectedData.duration}
                </span>
              )}
            </div>
          </div>

          {/* Summary Content */}
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0 mt-1">
                <User className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-foreground mb-2">Summary</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedData.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Action Items (if any) */}
          <div className="p-3 rounded-lg bg-muted/30">
            <h4 className="text-sm font-medium text-foreground mb-2">Next Steps</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                Follow up with technical documentation
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                Schedule contract review meeting
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-reveal text-reveal-delay-1 text-center py-12">
          <MessageSquare className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
          <h3 className="text-sm font-medium text-foreground mb-2">No Interaction Selected</h3>
          <p className="text-xs text-muted-foreground">
            Click on an interaction from the list to view its summary and details.
          </p>
        </div>
      )}
    </div>
  );
};