import { Calendar, ArrowRightCircle } from "lucide-react";
import { interactionsData, fakeData } from "./InteractionsCard";

interface SummaryCardProps {
  selectedInteraction: string | null;
}

export default function SummaryCard({ selectedInteraction }: SummaryCardProps) {
  const interaction = [...fakeData, ...interactionsData].find((i) => i.id === selectedInteraction);

  if (!interaction) {
    return (
      <div className="crm-card h-full flex flex-col items-center justify-center text-center text-gray-500">
        <div className="text-4xl mb-2">💬</div>
        <p className="font-medium">No Interaction Selected</p>
        <p className="text-sm text-gray-400">
          Click on an interaction to view its summary and details.
        </p>
      </div>
    );
  }

  return (
    <div className="crm-card flex flex-col h-full">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">Interaction Summary</h2>

      {/* Interaction Info Block */}
      <div className="p-3 mb-4 rounded-lg bg-white/70">
        <p className="font-medium">{interaction.title}</p>
        <p className="text-xs text-gray-500">
          {interaction.date} • {interaction.time}{" "}
          {interaction.duration ? `· ${interaction.duration}` : ""}
        </p>
      </div>

      {/* Summary Text */}
      <div>
        <h3 className="font-semibold mb-2">Summary</h3>
        <p className="text-sm text-gray-700">{interaction.summary}</p>
      </div>

      {/* Next Steps Block */}
      {interaction.nextSteps && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Next Steps</h3>
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/70 shadow-sm">
            {/* Action Info */}
            <div>
              <p className="font-medium">{interaction.nextSteps.action}</p>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gray-500" />
                {interaction.nextSteps.date} • {interaction.nextSteps.time}
              </p>
            </div>

            {/* Green Arrow Button on the right */}
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white">
              <ArrowRightCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
