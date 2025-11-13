import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/Logo";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const liveIssues = [
  { id: 1, title: "Glass on bike lane", where: "Market & 5th", since: "cleared", ago: "3h", tag: "cleared" },
  { id: 2, title: "Streetlight A17E out", where: "Elm & 9th", since: "open", ago: "2d", tag: "open" },
  { id: 3, title: "Alley flooding", where: "Ward 4", since: "in progress", ago: "1d", tag: "progress" },
  { id: 4, title: "Pothole cluster", where: "Maple Ave", since: "scheduled", ago: "5d", tag: "scheduled" },
];

const mapDots = [
  { left: "18%", top: "22%" },
  { left: "34%", top: "40%" },
  { left: "36%", top: "44%" },
  { left: "62%", top: "28%" },
  { left: "72%", top: "62%" },
  { left: "24%", top: "70%" },
];

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const el = document.createElement("div");
    el.className = "cv-cursor";
    document.body.appendChild(el);
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest(".cv-hoverable")) el.classList.add("cv-hover");
    };
    const out = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest(".cv-hoverable")) el.classList.remove("cv-hover");
    };
    const down = () => el.classList.add("cv-down");
    const up = () => el.classList.remove("cv-down");
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.body.removeChild(el);
    };
  }, []);

  return (
    <div className="cv-landing min-h-screen bg-cv-c2 text-cv-c1">
      <aside className="fixed left-0 top-0 h-screen border-r border-[hsl(var(--cv-c1)/0.18)] bg-[hsl(var(--cv-c2))] w-20 md:w-56 px-4 py-6 flex flex-col gap-8">
        <div className="flex items-center justify-center md:justify-start">
          <Logo />
        </div>
        <nav className="mt-2 text-sm tracking-wide">
          <ul className="flex flex-col gap-4">
            <li><a href="#report" className="cv-hoverable flex items-center gap-3 font-display"><span className="hidden md:inline text-[hsl(var(--cv-c1)/0.5)]">01</span><span>Report</span></a></li>
            <li><a href="#stories" className="cv-hoverable flex items-center gap-3 font-display"><span className="hidden md:inline text-[hsl(var(--cv-c1)/0.5)]">02</span><span>Stories</span></a></li>
            <li><a href="#live" className="cv-hoverable flex items-center gap-3 font-display"><span className="hidden md:inline text-[hsl(var(--cv-c1)/0.5)]">03</span><span>Live</span></a></li>
            <li><a href="#map" className="cv-hoverable flex items-center gap-3 font-display"><span className="hidden md:inline text-[hsl(var(--cv-c1)/0.5)]">04</span><span>Map</span></a></li>
          </ul>
        </nav>
      </aside>

      <main className="ml-20 md:ml-56">
        <section id="report" className="relative overflow-hidden">
          <div className="mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20">
            <div className="max-w-[1100px] ml-auto">
              <div className="bg-cv-c2 border border-[hsl(var(--cv-c1)/0.18)] rounded-2xl cv-shadow-soft">
                <div className="relative p-8 md:p-14">
                  <Badge className="bg-[hsl(var(--cv-c1))] text-[hsl(var(--cv-c2))] border-0 mb-6">CivicVoice</Badge>
                  <h1 className="font-display text-[64px] leading-[0.9] md:text-[104px] md:leading-[0.9] tracking-tight">
                    Report once.
                    <br />
                    Watch it move.
                  </h1>
                  <p className="mt-6 max-w-xl text-[18px] text-[hsl(var(--cv-c1)/0.8)]">
                    Streetlight out for nine nights? Pothole that keeps coming back? Tell us once. Track the fix without chasing anyone.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                    <Button onClick={() => navigate("/report")} className="cv-hoverable squish bg-cv-c3 text-cv-c2 hover:opacity-90 text-base px-6 py-6 rounded-xl">
                      Report an issue
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" onClick={() => navigate("/dashboard")} className="cv-hoverable squish border-[hsl(var(--cv-c1)/0.2)] text-[hsl(var(--cv-c1))] bg-[hsl(var(--cv-c2)/0.4)] backdrop-blur hover:bg-[hsl(var(--cv-c2)/0.6)] rounded-xl">
                      See the dashboard
                    </Button>
                  </div>
                  <div className="absolute -right-24 top-8 h-[180%] w-64 rotate-12 cv-diagonal opacity-60 hidden md:block" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stories" className="pt-8 md:pt-0 pb-12 md:pb-24">
          <div className="mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
              <Card className="relative overflow-hidden bg-[hsl(var(--cv-c2)/0.7)] backdrop-blur border-[hsl(var(--cv-c1)/0.18)] p-8 md:p-12 cv-shadow-soft">
                <div className="font-serif-cv text-[28px] md:text-[36px] leading-tight text-[hsl(var(--cv-c1))]">
                  “I filed the alley flooding once. Streets marked it, and I watched the work order tick from scheduled to done. No calls. No guessing.”
                </div>
                <div className="mt-6 text-sm text-[hsl(var(--cv-c1)/0.6)]">Ward 4 · neighbor since 2012</div>
              </Card>
              <div className="h-full rounded-2xl border border-[hsl(var(--cv-c1)/0.18)] bg-[hsl(var(--cv-c2)/0.5)] tilt cv-shadow-soft p-8 flex flex-col justify-between">
                <div className="text-sm uppercase tracking-widest text-[hsl(var(--cv-c1)/0.6)]">This week on your block</div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="font-display">Crews cleared glass in the bike lane</div>
                    <Badge className="bg-[hsl(var(--cv-c3))] text-white border-0">cleared</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-display">Two new reports near the library</div>
                    <Badge variant="outline" className="border-[hsl(var(--cv-c1)/0.2)] text-[hsl(var(--cv-c1))]">cluster</Badge>
                  </div>
                </div>
                <div className="mt-10 text-sm text-[hsl(var(--cv-c1)/0.7)]">Marked for Streets · work order #4812</div>
              </div>
            </div>
          </div>
        </section>

        <section id="live" className="py-12 md:py-20">
          <div className="mx-auto px-6 md:px-12">
            <div className="flex items-end justify-between mb-8 md:mb-12">
              <h2 className="font-display text-[44px] md:text-[64px] leading-[0.95]">What neighbors just reported</h2>
              <Button variant="outline" onClick={() => navigate("/issues")} className="cv-hoverable squish border-[hsl(var(--cv-c1)/0.2)]">View all</Button>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {liveIssues.map(item => (
                <Card key={item.id} className="p-6 bg-[hsl(var(--cv-c2)/0.7)] backdrop-blur border-[hsl(var(--cv-c1)/0.18)] hover:cv-shadow-bold transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[hsl(var(--cv-c1)/0.6)]">{item.since}</div>
                    <Badge className={
                      item.tag === "cleared" ? "bg-[hsl(var(--cv-c3))] text-[hsl(var(--cv-c2))] border-0" :
                      item.tag === "open" ? "bg-[hsl(var(--cv-c1))] text-[hsl(var(--cv-c2))] border-0" :
                      "bg-[hsl(var(--cv-c1)/0.8)] text-[hsl(var(--cv-c2))] border-0"
                    }>{item.tag}</Badge>
                  </div>
                  <div className="mt-4 font-display text-lg">{item.title}</div>
                  <div className="mt-2 flex items-center gap-2 text-[hsl(var(--cv-c1)/0.7)]"><MapPin className="h-4 w-4" /><span>{item.where}</span></div>
                  <div className="mt-1 flex items-center gap-2 text-[hsl(var(--cv-c1)/0.7)]"><Clock className="h-4 w-4" /><span>{item.ago} ago</span></div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="map" className="pb-24">
          <div className="mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-stretch">
              <div className="relative h-64 md:h-96 rounded-2xl border border-[hsl(var(--cv-c1)/0.18)] bg-[hsl(var(--cv-c2)/0.6)] overflow-hidden">
                <div className="absolute inset-0 cv-diagonal-strong opacity-70" />
                {mapDots.map((d, i) => (
                  <div key={i} className="absolute w-3 h-3 rounded-full bg-[hsl(var(--cv-c3))] shadow" style={{ left: d.left, top: d.top }} />
                ))}
                <div className="absolute bottom-4 left-4 bg-[hsl(var(--cv-c1))] text-[hsl(var(--cv-c2))] px-3 py-2 rounded-md text-sm">Three reports clustered near the library; likely recurring.</div>
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="font-display text-[36px] md:text-[48px] leading-[0.95]">See what got fixed this week</h3>
                <p className="text-[18px] text-[hsl(var(--cv-c1)/0.8)] max-w-prose">Pothole or missed pickup? Tap once, we nudge the right crew. Come back to see photo proof when it’s done.</p>
                <div className="mt-6">
                  <Button onClick={() => navigate("/report")} className="cv-hoverable squish bg-cv-c1 text-[hsl(var(--cv-c2))] hover:opacity-90">Start now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
