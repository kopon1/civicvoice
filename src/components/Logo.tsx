import { Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo = ({ className = "", showText = true }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full"></div>
        <div className="relative bg-gradient-hero p-2 rounded-xl shadow-lg">
          <Megaphone className="h-6 w-6 text-white" />
        </div>
      </div>
      {showText && (
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          CivicVoice
        </span>
      )}
    </Link>
  );
};
