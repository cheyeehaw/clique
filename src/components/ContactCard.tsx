import { useState } from "react";
import { Phone, Mail, Building, User, Edit } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ContactData {
  name: string;
  job: string;
  company: string;
  phone: string;
  email: string;
  nickname: string;
  avatar: string;
  initials: string;
}

export const ContactCard = () => {
  const [contact] = useState<ContactData>({
    name: "Sarah Chen",
    job: "Senior Product Manager",
    company: "TechFlow Solutions",
    phone: "+1 (555) 234-5678",
    email: "sarah.chen@techflow.com",
    nickname: "Sarah",
    avatar: "",
    initials: "SC"
  });

  return (
    <div className="crm-card bounce-hover h-full flex flex-col">
      <div className="text-reveal">
        <h2 className="text-xl font-semibold text-foreground mb-6 gradient-text">
          Contact Information
        </h2>
      </div>
      
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="text-reveal text-reveal-delay-1 flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-primary/20">
            <AvatarImage src={contact.avatar} alt={contact.name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
              {contact.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">{contact.name}</h3>
            <p className="text-muted-foreground text-sm">{contact.job}</p>
            <p className="text-muted-foreground text-xs flex items-center mt-1">
              <Building className="h-3 w-3 mr-1" />
              {contact.company}
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <div className="text-reveal text-reveal-delay-2">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="text-xs text-muted-foreground">{contact.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-reveal text-reveal-delay-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground">{contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-reveal text-reveal-delay-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex items-center space-x-3">
                <User className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Nickname</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-xs text-muted-foreground">{contact.nickname}</p>
                    <Edit className="h-3 w-3 text-muted-foreground hover:text-primary cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};