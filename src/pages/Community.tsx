import CVLayout from "@/components/CVLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import {
  Trophy,
  Star,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

const leaderboard = [
  { name: "Sarah Johnson", reports: 47, verified: 42, rank: 1, badge: "Champion", avatar: "SJ" },
  { name: "Michael Chen", reports: 39, verified: 35, rank: 2, badge: "Hero", avatar: "MC" },
  { name: "Emily Rodriguez", reports: 34, verified: 31, rank: 3, badge: "Hero", avatar: "ER" },
  { name: "David Kim", reports: 28, verified: 25, rank: 4, badge: "Advocate", avatar: "DK" },
  { name: "Lisa Anderson", reports: 23, verified: 21, rank: 5, badge: "Advocate", avatar: "LA" },
];

const badges = [
  { name: "First Reporter", description: "Report your first issue", icon: Star, earned: true },
  { name: "Civic Champion", description: "50+ verified reports", icon: Trophy, earned: false },
  { name: "Community Hero", description: "25+ verified reports", icon: Award, earned: true },
  { name: "Active Citizen", description: "Report 10 issues", icon: CheckCircle2, earned: true },
  { name: "Verifier", description: "Verify 20 resolutions", icon: Users, earned: false },
  { name: "Neighborhood Watch", description: "Report issues in 5+ areas", icon: TrendingUp, earned: true },
];

const Community = () => {
  const navigate = useNavigate();

  return (
    <CVLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">Community Leaderboard</h1>
          <p className="text-lg text-muted-foreground">
            Recognizing our most active civic participants
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="p-6 tilt hover:cv-shadow-bold transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="h-6 w-6 text-accent" />
                <h2 className="font-display text-2xl font-bold text-foreground">Top Contributors</h2>
              </div>

              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`p-4 rounded-lg transition-all ${
                      user.rank <= 3
                        ? "bg-gradient-to-r from-primary-light to-accent-light"
                        : "bg-muted/30 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`text-2xl font-bold ${
                        user.rank === 1 ? "text-accent" :
                        user.rank === 2 ? "text-primary" :
                        user.rank === 3 ? "text-secondary" :
                        "text-muted-foreground"
                      }`}>
                        #{user.rank}
                      </div>

                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-foreground">{user.name}</h3>
                          <Badge className="bg-gradient-success text-white border-0">
                            {user.badge}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{user.reports} reports</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4 text-secondary" />
                            <span>{user.verified} verified</span>
                          </div>
                        </div>
                      </div>

                      {user.rank <= 3 && (
                        <Trophy className={`h-8 w-8 ${
                          user.rank === 1 ? "text-accent" :
                          user.rank === 2 ? "text-primary" :
                          "text-secondary"
                        }`} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 mb-6 tilt hover:cv-shadow-bold transition-shadow">
              <div className="text-center mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">12</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Your Rank</h3>
                <p className="text-sm text-muted-foreground">Out of 8,923 citizens</p>
              </div>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Reports</span>
                  <span className="font-bold text-foreground">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Verified</span>
                  <span className="font-bold text-secondary">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Impact Score</span>
                  <span className="font-bold text-accent">847</span>
                </div>
              </div>

              <Button variant="hero" className="w-full mt-6 squish" onClick={() => navigate("/report")}>
                Improve Your Rank
              </Button>
            </Card>

            <Card className="p-6 bg-gradient-success text-white tilt hover:cv-shadow-bold transition-shadow">
              <h3 className="text-xl font-bold mb-2">Your Community Impact</h3>
              <p className="text-white/90 text-sm mb-4">
                You've helped resolve 15 issues, making your neighborhood safer and cleaner!
              </p>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>+24% this month</span>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-6 tilt hover:cv-shadow-bold transition-shadow">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Achievement Badges</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  badge.earned
                    ? "border-primary bg-primary-light"
                    : "border-border bg-muted/30 opacity-60"
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  badge.earned ? "bg-gradient-hero" : "bg-muted"
                }`}>
                  <badge.icon className={`h-6 w-6 ${badge.earned ? "text-white" : "text-muted-foreground"}`} />
                </div>
                <div className="font-semibold text-sm mb-1">{badge.name}</div>
                <div className="text-xs text-muted-foreground">{badge.description}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </CVLayout>
  );
};

export default Community;
