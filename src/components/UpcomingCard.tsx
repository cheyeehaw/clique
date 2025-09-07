import { CalendarDays, Clock, PhoneCall, FileText } from "lucide-react";

const EventItem = (props: {
  icon: React.ReactNode;
  title: string;
  date: string;
  time: string;
  note?: string;
}) => (
  <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
    <div className="flex items-start gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-100">
        {props.icon}
      </div>
      <div className="flex-1">
        <div className="font-medium text-slate-900">{props.title}</div>
        <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" />
            {props.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {props.time}
          </span>
        </div>
        {props.note && (
          <div className="mt-2 text-sm text-slate-600">{props.note}</div>
        )}
      </div>
    </div>
  </div>
);

export const UpcomingCard = () => {
  return (
    <div className="p-4 space-y-4">
      <EventItem
        icon={<PhoneCall className="h-5 w-5 text-sky-600" />}
        title="Product Demo Call"
        date="Sep 8, 2025"
        time="2:30 PM"
        note="Quarterly product review discussion"
      />
      <EventItem
        icon={<FileText className="h-5 w-5 text-indigo-600" />}
        title="Contract Negotiation"
        date="Sep 10, 2025"
        time="10:00 AM"
        note="Annual contract renewal meeting"
      />
    </div>
  );
};
