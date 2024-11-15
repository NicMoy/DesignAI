import { ResourceCard } from "@/components/cards/resource-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const learningResources = [
  {
    id: "coursera-designers",
    category: "Course",
    title: "AI for Designers - Coursera",
    description: "Comprehensive course on integrating AI into design workflows.",
    url: "https://coursera.org/learn/ai-for-designers",
  },
  {
    id: "youtube-fundamentals",
    category: "YouTube",
    title: "Design + AI Fundamentals",
    description: "Learn the basics of AI in design with practical examples.",
    url: "https://www.youtube.com/watch?v=example1",
  },
  {
    id: "book-designing",
    category: "Book",
    title: "Designing with AI",
    description: "Essential guide for designers working with AI tools.",
    url: "https://example.com/book",
  },
];

const designResources = [
  {
    id: "figma-system",
    category: "UI Kit",
    title: "Figma Design System",
    description: "Professional design system with AI-generated components.",
    url: "https://figma.com/community",
  },
  {
    id: "noun-project",
    category: "Icons",
    title: "The Noun Project",
    description: "Massive collection of icons with AI search capabilities.",
    url: "https://thenounproject.com",
  },
  {
    id: "google-fonts",
    category: "Typography",
    title: "Google Fonts",
    description: "Free fonts with AI-powered font pairing suggestions.",
    url: "https://fonts.google.com",
  },
];

const communityResources = [
  {
    id: "designer-news",
    category: "Community",
    title: "Designer News",
    description: "Stay updated with the latest in design and AI.",
    url: "https://www.designernews.co",
  },
  {
    id: "discord-ai",
    category: "Forum",
    title: "Design AI Discord",
    description: "Join discussions about AI in design.",
    url: "https://discord.gg/example",
  },
  {
    id: "weekly-newsletter",
    category: "Newsletter",
    title: "Design + AI Weekly",
    description: "Weekly curated content about AI in design.",
    url: "https://example.com/newsletter",
  },
];

export function Resources() {
  return (
    <main className="container px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-[800px] text-center">
        <h1 className="text-3xl font-medium sm:text-4xl">Design Resources</h1>
        <p className="mt-4 text-muted-foreground">
          Curated resources to help you learn, create, and grow as a designer in the AI era.
        </p>
      </div>

      <Tabs defaultValue="learning" className="mt-16">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>
        <TabsContent value="learning" className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learningResources.map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="design" className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {designResources.map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="community" className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communityResources.map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}