import { useState } from "react";
import { Calendar, Phone, Video, MessageSquare, Clock } from "lucide-react";

interface UpcomingEvent {
  id: string;
  type: "call" | "meeting" | "message" | "video";
  title: string;
  date: string;
  time: string;
  description: string;
}

const eventIcons = {
  call: "📞",
  meeting: "📅", 
  message: "💬",
  video: "🎥"
};

const eventIconsLucide = {
  call: Phone,
  meeting: Calendar,
  message: MessageSquare,
  video: Video
};

export const UpcomingCard = () => {
  const [events] = useState<UpcomingEvent[]>([
    {
      id: "1",
      type: "call",
      title: "Product Demo Call",
      date: "Sep 8, 2025",
      time: "2:30 PM",
      description: "Quarterly product review discussion"
    },
    {
      id: "2", 
      type: "meeting",
      title: "Contract Negotiation",
      date: "Sep 10, 2025",
      time: "10:00 AM",
      description: "Annual contract renewal meeting"
    },
    {
      id: "3",
      type: "video",
      title: "Team Introduction",
      date: "Sep 12, 2025", 
      time: "1:00 PM",
      description: "Introduce new team members"
    }
  ]);

  return (
    <div className="crm-card bounce-hover h-fit">
      <div className="text-reveal">
        <h2 className="text-xl font-semibold text-foreground mb-6 gradient-text">
          Upcoming Events
        </h2>
      </div>
      
      <div className="space-y-4">
        {events.map((event, index) => {
          const IconComponent = eventIconsLucide[event.type];
          return (
            <div 
              key={event.id} 
              className={`text-reveal text-reveal-delay-${index + 1} p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/20 transition-all duration-300`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground flex items-center">
                      <span className="mr-2">{eventIcons[event.type]}</span>
                      {event.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-4 mt-1">
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {event.date}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {event.time}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        
        {events.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Calendar className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No upcoming events</p>
          </div>
        )}
      </div>
    </div>
  );
};