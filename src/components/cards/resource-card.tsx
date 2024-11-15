import { ExternalLink, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUpvote } from "@/hooks/use-upvote";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ResourceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
}

export function ResourceCard({ id, title, description, category, url, className, ...props }: ResourceCardProps) {
  const { votes, hasVoted, handleVote } = useUpvote(id);

  return (
    <div 
      className={cn(
        "group rounded-lg border bg-card p-6 transition-all hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium uppercase text-muted-foreground">
                {category}
              </span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={(e) => {
                        e.preventDefault();
                        handleVote();
                      }}
                      disabled={hasVoted}
                    >
                      <ThumbsUp 
                        className={cn(
                          "h-4 w-4",
                          hasVoted ? "fill-primary text-primary" : "text-muted-foreground"
                        )} 
                      />
                      <span className="ml-1 text-xs">{votes}</span>
                      <span className="sr-only">Upvote</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {hasVoted ? "Already voted" : "Upvote this resource"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <h3 className="font-semibold leading-none tracking-tight">
              {title}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
        </a>
      </div>
    </div>
  );
}