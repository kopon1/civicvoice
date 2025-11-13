import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Clock,
  Search,
  Filter,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Calendar,
} from "lucide-react";

const mockIssues = [
  {
    id: 1,
    title: "Large pothole on Main Street",
    category: "Roads",
    status: "In Progress",
    reported: "2 days ago",
    location: "Main St & 5th Ave",
    statusColor: "bg-accent",
    priority: "High",
    estimatedResolution: "5 days",
  },
  {
    id: 2,
    title: "Broken streetlight near Oak Park",
    category: "Lighting",
    status: "Scheduled",
    reported: "5 days ago",
    location: "Oak Park entrance",
    statusColor: "bg-primary",
    priority: "Medium",
    estimatedResolution: "7 days",
  },
  {
    id: 3,
    title: "Graffiti on City Hall west wall",
    category: "Vandalism",
    status: "Resolved",
    reported: "1 week ago",
    location: "City Hall west wall",
    statusColor: "bg-secondary",
    priority: "Low",
    estimatedResolution: "Completed",
  },
  {
    id: 4,
    title: "Overflowing trash bins at Central Park",
    category: "Waste Management",
    status: "Under Review",
    reported: "1 day ago",
    location: "Central Park, Section B",
    statusColor: "bg-primary",
    priority: "Medium",
    estimatedResolution: "3 days",
  },
  {
    id: 5,
    title: "Damaged playground equipment",
    category: "Parks",
    status: "In Progress",
    reported: "4 days ago",
    location: "Riverside Park playground",
    statusColor: "bg-accent",
    priority: "High",
    estimatedResolution: "10 days",
  },
  {
    id: 6,
    title: "Fallen tree blocking sidewalk",
    category: "Public Safety",
    status: "Resolved",
    reported: "2 weeks ago",
    location: "Elm Street sidewalk",
    statusColor: "bg-secondary",
    priority: "High",
    estimatedResolution: "Completed",
  },
];

const Issues = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredIssues = mockIssues.filter((issue) => {
    const matchesSearch = issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         issue.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || issue.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
            <Button variant="hero" onClick={() => navigate("/report")}>
              Report Issue
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Community Issues</h1>
          <p className="text-lg text-muted-foreground">
            Track all reported issues in real-time
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by title or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {["All", "In Progress", "Scheduled", "Resolved"].map((status) => (
              <Button
                key={status}
                variant={statusFilter === status ? "default" : "outline"}
                onClick={() => setStatusFilter(status)}
                size="sm"
              >
                {status}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIssues.map((issue) => (
            <Card key={issue.id} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="text-xs">
                    {issue.category}
                  </Badge>
                  <Badge className={`${issue.statusColor} text-white border-0`}>
                    {issue.status}
                  </Badge>
                </div>

                <h3 className="font-bold text-foreground mb-4">{issue.title}</h3>

                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{issue.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 flex-shrink-0" />
                    <span>Reported {issue.reported}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span>Est. resolution: {issue.estimatedResolution}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <AlertCircle className={`h-4 w-4 ${
                    issue.priority === "High" ? "text-destructive" :
                    issue.priority === "Medium" ? "text-accent" : "text-secondary"
                  }`} />
                  <span className="text-xs font-medium text-muted-foreground">
                    {issue.priority} Priority
                  </span>
                </div>
              </div>

              <div className="px-6 py-3 bg-muted/50 border-t flex items-center justify-between">
                <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  View Details →
                </button>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
            </Card>
          ))}
        </div>

        {filteredIssues.length === 0 && (
          <Card className="p-12 text-center">
            <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-bold text-foreground mb-2">No issues found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Issues;
