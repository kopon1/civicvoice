import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  MapPin,
  Camera,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Shield,
  Trees,
  Trash2,
} from "lucide-react";

const categories = [
  { name: "Potholes & Roads", icon: MapPin, color: "bg-primary-light text-primary" },
  { name: "Street Lights", icon: Lightbulb, color: "bg-accent-light text-accent" },
  { name: "Graffiti", icon: Camera, color: "bg-secondary-light text-secondary" },
  { name: "Public Safety", icon: Shield, color: "bg-destructive/10 text-destructive" },
  { name: "Parks & Recreation", icon: Trees, color: "bg-secondary-light text-secondary" },
  { name: "Waste Management", icon: Trash2, color: "bg-primary-light text-primary" },
];

const Report = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCategory || !title || !description || !location) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Issue reported successfully! Redirecting to dashboard...");
    
    setTimeout(() => {
      navigate("/issues");
    }, 1500);
  };

  const handleGetLocation = () => {
    toast.info("Getting your location...");
    setTimeout(() => {
      setLocation("Main St & 5th Ave, City Center");
      toast.success("Location detected!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <Button variant="outline" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Report an Issue</h1>
            <p className="text-lg text-muted-foreground">
              Help make your community better. Your report will be tracked in real-time.
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  1. Select Category *
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      type="button"
                      onClick={() => setSelectedCategory(category.name)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedCategory === category.name
                          ? "border-primary bg-primary-light"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center mx-auto mb-2`}>
                        <category.icon className="h-5 w-5" />
                      </div>
                      <div className="text-sm font-medium text-center">{category.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="title" className="text-base font-semibold">
                  2. Issue Title *
                </Label>
                <Input
                  id="title"
                  placeholder="Brief description of the issue"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-base font-semibold">
                  3. Detailed Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Provide more details about the issue..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="location" className="text-base font-semibold">
                  4. Location *
                </Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="location"
                    placeholder="Address or intersection"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="button" variant="outline" onClick={handleGetLocation}>
                    <MapPin className="h-4 w-4 mr-2" />
                    Use GPS
                  </Button>
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold mb-2 block">
                  5. Add Photo (Optional)
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" variant="hero" className="flex-1">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Submit Report
                </Button>
                <Button type="button" variant="outline" onClick={() => navigate("/")}>
                  Cancel
                </Button>
              </div>
            </form>
          </Card>

          <div className="mt-6 p-4 bg-muted/30 rounded-lg flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Privacy Notice:</strong> Your report will be publicly visible 
              to help the community track local issues. Personal information will remain confidential.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
