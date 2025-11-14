import CVLayout from "@/components/CVLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
  Users,
  MapPin,
  DollarSign,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Issues Reported", value: "2,847", icon: AlertCircle, color: "text-primary", change: "+12%" },
    { label: "Issues Resolved", value: "2,156", icon: CheckCircle2, color: "text-secondary", change: "+8%" },
    { label: "Active Citizens", value: "8,923", icon: Users, color: "text-accent", change: "+24%" },
    { label: "Avg Response Time", value: "3.2 days", icon: Clock, color: "text-primary", change: "-15%" },
  ];

  const neighborhoods = [
    { name: "Downtown", issues: 234, resolved: 189, budget: "$45K", responseTime: "2.8 days" },
    { name: "Oak Park", issues: 156, resolved: 142, budget: "$32K", responseTime: "3.1 days" },
    { name: "Riverside", issues: 198, resolved: 167, budget: "$38K", responseTime: "3.5 days" },
    { name: "Hillside", issues: 142, resolved: 118, budget: "$28K", responseTime: "4.2 days" },
  ];

  const departmentPerformance = [
    { name: "Public Works", avgTime: "2.5 days", resolved: 87, efficiency: 92 },
    { name: "Parks & Recreation", avgTime: "3.8 days", resolved: 156, efficiency: 85 },
    { name: "Code Enforcement", avgTime: "5.2 days", resolved: 98, efficiency: 78 },
    { name: "Waste Management", avgTime: "1.9 days", resolved: 234, efficiency: 95 },
  ];

  return (
    <CVLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">Community Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Real-time transparency and accountability metrics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 tilt hover:cv-shadow-bold transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <div className={`text-xs font-semibold px-2 py-1 rounded ${
                  stat.change.startsWith("+") ? "bg-secondary-light text-secondary" : 
                  stat.change.startsWith("-") && stat.label.includes("Time") ? "bg-secondary-light text-secondary" :
                  "bg-destructive/10 text-destructive"
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 tilt hover:cv-shadow-bold transition-shadow">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">Neighborhood Performance</h2>
            </div>
            <div className="space-y-4">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood.name} className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-foreground">{neighborhood.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span>{neighborhood.budget}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1">Issues</div>
                      <div className="font-semibold">{neighborhood.issues}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Resolved</div>
                      <div className="font-semibold text-secondary">{neighborhood.resolved}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Avg Time</div>
                      <div className="font-semibold">{neighborhood.responseTime}</div>
                    </div>
                  </div>
                  <div className="mt-3 bg-background rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-success h-full transition-all"
                      style={{ width: `${(neighborhood.resolved / neighborhood.issues) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 tilt hover:cv-shadow-bold transition-shadow">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">Department Efficiency</h2>
            </div>
            <div className="space-y-4">
              {departmentPerformance.map((dept) => (
                <div key={dept.name} className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-foreground">{dept.name}</h3>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-semibold text-secondary">{dept.efficiency}%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <div className="text-muted-foreground mb-1">Avg Response</div>
                      <div className="font-semibold">{dept.avgTime}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Resolved</div>
                      <div className="font-semibold">{dept.resolved}</div>
                    </div>
                  </div>
                  <div className="bg-background rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-hero h-full transition-all"
                      style={{ width: `${dept.efficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-hero text-white tilt hover:cv-shadow-bold transition-shadow">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Your Impact Matters</h2>
            <p className="text-lg mb-6 text-white/90">
              Every report helps build a better community. Join thousands of citizens making a difference.
            </p>
            <Button variant="hero" size="lg" onClick={() => navigate("/report")} className="bg-white text-primary hover:bg-white/90 squish">
              Report Your First Issue
            </Button>
          </div>
        </Card>
      </div>
    </CVLayout>
  );
};

export default Dashboard;
