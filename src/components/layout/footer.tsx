import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-8 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold">Design & AI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Design & AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}