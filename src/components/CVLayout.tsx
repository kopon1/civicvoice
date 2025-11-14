import { ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { useIsMobile } from "@/hooks/use-mobile";
import { BarChart3, Users, AlertCircle, MapPin } from "lucide-react";

interface CVLayoutProps {
  children: ReactNode;
}

export default function CVLayout({ children }: CVLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!isMobile && (
        <aside className="fixed left-0 top-0 h-screen border-r border-border bg-card w-20 md:w-56 px-4 py-6 flex flex-col gap-8">
          <div className="flex items-center justify-center md:justify-start">
            <Logo />
          </div>
          <nav className="mt-2 text-sm tracking-wide">
            <ul className="flex flex-col gap-3">
              <li>
                <NavLink to="/report" className="cv-hoverable flex items-center gap-3 font-display" activeClassName="text-primary">
                  <span className="hidden md:inline text-muted-foreground">01</span>
                  <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Report</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/issues" className="cv-hoverable flex items-center gap-3 font-display" activeClassName="text-primary">
                  <span className="hidden md:inline text-muted-foreground">02</span>
                  <span className="flex items-center gap-2"><AlertCircle className="h-4 w-4" /> Issues</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className="cv-hoverable flex items-center gap-3 font-display" activeClassName="text-primary">
                  <span className="hidden md:inline text-muted-foreground">03</span>
                  <span className="flex items-center gap-2"><BarChart3 className="h-4 w-4" /> Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/community" className="cv-hoverable flex items-center gap-3 font-display" activeClassName="text-primary">
                  <span className="hidden md:inline text-muted-foreground">04</span>
                  <span className="flex items-center gap-2"><Users className="h-4 w-4" /> Community</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      )}

      <main className={isMobile ? "pb-16" : "ml-20 md:ml-56"}>{children}</main>

      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border h-16 grid grid-cols-4">
          <NavLink to="/report" className="cv-hoverable flex flex-col items-center justify-center text-xs" activeClassName="text-cv-c1">
            <MapPin className="h-5 w-5 mb-1" /> Report
          </NavLink>
          <NavLink to="/issues" className="cv-hoverable flex flex-col items-center justify-center text-xs" activeClassName="text-cv-c1">
            <AlertCircle className="h-5 w-5 mb-1" /> Issues
          </NavLink>
          <NavLink to="/dashboard" className="cv-hoverable flex flex-col items-center justify-center text-xs" activeClassName="text-cv-c1">
            <BarChart3 className="h-5 w-5 mb-1" /> Dashboard
          </NavLink>
          <NavLink to="/community" className="cv-hoverable flex flex-col items-center justify-center text-xs" activeClassName="text-cv-c1">
            <Users className="h-5 w-5 mb-1" /> Community
          </NavLink>
        </nav>
      )}
    </div>
  );
}
