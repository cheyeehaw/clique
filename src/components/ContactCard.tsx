import { useState } from "react";
import { Phone, Mail, Building, Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ContactData {
  name: string;
  job: string;
  company: string;
  phone: string;
  email: string;
  notes: string;
  avatar: string;
  initials: string;
}

export default function ContactCard() {
  const [contact, setContact] = useState<ContactData>({
    name: "Zane Smith",
    job: "Senior Product Manager",
    company: "TechFlow Solutions",
    phone: "+1 (555) 234-5678",
    email: "zane.smith@techflow.com",
    notes: "Likes the Golden Warriors, do not call on Tuesdays, hates cats, only have Chey call him.",
    avatar: "",
    initials: "ZS",
  });

  const [editingField, setEditingField] = useState<string | null>(null);

  const handleChange = (field: keyof ContactData, value: string) => {
    setContact((prev) => ({ ...prev, [field]: value }));
  };

  const renderEditableField = (
    field: keyof ContactData,
    value: string,
    className?: string
  ) => {
    if (editingField === field) {
      return (
        <input
          type="text"
          value={value}
          autoFocus
          onChange={(e) => handleChange(field, e.target.value)}
          onBlur={() => setEditingField(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setEditingField(null);
          }}
          className={`border-b border-gray-400 bg-transparent outline-none text-sm w-full ${className}`}
        />
      );
    }
    return (
      <span
        onClick={() => setEditingField(field)}
        className={`cursor-pointer ${className}`}
      >
        {value}
      </span>
    );
  };

  return (
    <div className="crm-card bounce-hover h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Contact Information</h2>

      <div className="flex items-center space-x-4 mb-6">
        {/* Avatar */}
        <Avatar className="h-20 w-20 border-2 border-primary/20">
          <AvatarImage src={contact.avatar} alt={contact.name} className="object-cover" />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
            {contact.initials}
          </AvatarFallback>
        </Avatar>
        {/* Info */}
        <div>
          <h3 className="text-base font-semibold">
            {renderEditableField("name", contact.name)}
          </h3>
          <p className="text-sm text-muted-foreground">
            {renderEditableField("job", contact.job)}
          </p>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <Building className="h-3 w-3 mr-1" />
            {renderEditableField("company", contact.company)}
          </p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="space-y-3">
        {/* Phone */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
          <div className="flex items-center space-x-3">
            <Phone className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              {renderEditableField("phone", contact.phone, "text-xs text-muted-foreground")}
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
          <div className="flex items-center space-x-3">
            <Mail className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-medium">Email</p>
              {renderEditableField("email", contact.email, "text-xs text-muted-foreground")}
            </div>
          </div>
        </div>

        {/* ⭐ Notes */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
          <div className="flex items-center space-x-3">
            <Star className="h-4 w-4 text-yellow-500" />
            <div className="flex-1">
              <p className="text-sm font-medium">Notes</p>
              {renderEditableField("notes", contact.notes, "text-xs text-muted-foreground")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
