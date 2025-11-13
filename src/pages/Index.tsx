import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Users, 
  TrendingUp,
  Camera,
  MessageSquare,
  BarChart3,
  Shield,
  Megaphone,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("report");

  const stats = [
    { label: "Issues Reported", value: "2,847", icon: AlertCircle, color: "text-primary" },
    { label: "Issues Resolved", value: "2,156", icon: CheckCircle2, color: "text-secondary" },
    { label: "Active Citizens", value: "8,923", icon: Users, color: "text-accent" },
    { label: "Avg Response Time", value: "3.2 days", icon: Clock, color: "text-primary" },
  ];

  const categories = [
    { name: "Potholes & Roads", icon: MapPin, count: 342 },
    { name: "Street Lights", icon: AlertCircle, count: 189 },
    { name: "Graffiti", icon: Camera, count: 156 },
    { name: "Public Safety", icon: Shield, count: 98 },
    { name: "Parks & Recreation", icon: Users, count: 234 },
    { name: "Waste Management", icon: TrendingUp, count: 167 },
  ];

  const recentIssues = [
    {
      id: 1,
      title: "Large pothole on Main Street",
      category: "Roads",
      status: "In Progress",
      reported: "2 days ago",
      location: "Main St & 5th Ave",
      statusColor: "bg-accent",
    },
    {
      id: 2,
      title: "Broken streetlight near park",
      category: "Lighting",
      status: "Scheduled",
      reported: "5 days ago",
      location: "Oak Park entrance",
      statusColor: "bg-primary",
    },
    {
      id: 3,
      title: "Graffiti on public building",
      category: "Vandalism",
      status: "Resolved",
      reported: "1 week ago",
      location: "City Hall west wall",
      statusColor: "bg-secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Megaphone className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">CivicVoice</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#report" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Report Issue
            </a>
            <a href="#dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button variant="hero" size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Citizens engaging with their community" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary-light text-primary border-0">
              Aethra Global Ideathon 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Voice.<br />Your Community.<br />Real Change.
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Report local issues, track government response in real-time, and hold your city accountable. 
              Transforming civic engagement from frustration to empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Report an Issue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How CivicVoice Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to make your community better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-6">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">1. Report Issues</h3>
              <p className="text-muted-foreground mb-4">
                Snap a photo, select a category, and submit. GPS automatically tags your location. 
                Works via app, web, SMS, or voice call.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Automatic location tagging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Multiple reporting channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Works offline</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-secondary-light flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">2. Track Progress</h3>
              <p className="text-muted-foreground mb-4">
                Get real-time status updates and expected resolution timelines. See photo proof when issues are fixed.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Live status dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Push notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Photo verification</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">3. Hold Accountable</h3>
              <p className="text-muted-foreground mb-4">
                Access transparent metrics on response times and budget allocation. Community verification prevents premature closures.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Hyperlocal budget data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Performance metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Community verification</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Issue Categories */}
      <section className="py-20 bg-muted/30" id="report">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Can You Report?
            </h2>
            <p className="text-lg text-muted-foreground">
              From infrastructure to safety concerns, we track it all
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1"
              >
                <category.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="font-semibold text-sm text-foreground mb-1">{category.name}</div>
                <div className="text-xs text-muted-foreground">{category.count} reports</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Issues Dashboard */}
      <section className="py-20" id="dashboard">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Recent Community Reports
              </h2>
              <p className="text-lg text-muted-foreground">
                Real-time transparency on local issues
              </p>
            </div>
            <Button variant="outline">
              View All Issues
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentIssues.map((issue) => (
              <Card key={issue.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="text-xs">
                      {issue.category}
                    </Badge>
                    <Badge className={`${issue.statusColor} text-white border-0`}>
                      {issue.status}
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-foreground mb-2">{issue.title}</h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{issue.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Reported {issue.reported}</span>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-3 bg-muted/50 border-t">
                  <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    View Details →
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Make Your Voice Heard?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join thousands of citizens transforming their communities through transparent, 
            accountable civic engagement.
          </p>
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
            Start Reporting Issues
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Megaphone className="h-5 w-5 text-primary" />
                <span className="font-bold text-foreground">CivicVoice</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming civic engagement through transparency and accountability.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Report Issue</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 CivicVoice. Aethra Global Ideathon 2025 Submission. Built with transparency and community trust.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
