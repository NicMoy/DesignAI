import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-8">
        <nav className="flex flex-1 items-center gap-6 text-sm">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-semibold">Design & AI</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/resources">
              <Button 
                variant="ghost" 
                className={cn(
                  "text-muted-foreground hover:text-foreground",
                  location.pathname === "/resources" && "text-foreground"
                )}
              >
                Resources
              </Button>
            </Link>
            <Link to="/inspiration">
              <Button 
                variant="ghost" 
                className={cn(
                  "text-muted-foreground hover:text-foreground",
                  location.pathname === "/inspiration" && "text-foreground"
                )}
              >
                Inspiration
              </Button>
            </Link>
            <Link to="/tools">
              <Button 
                variant="ghost" 
                className={cn(
                  "text-muted-foreground hover:text-foreground",
                  location.pathname === "/tools" && "text-foreground"
                )}
              >
                Tools
              </Button>
            </Link>
          </div>
        </nav>
        <Button variant="outline">Submit Resource</Button>
      </div>
    </header>
  );
}