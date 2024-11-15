import { ResourceCard } from "@/components/cards/resource-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const imageTools = [
  {
    id: "midjourney-tool",
    category: "Image Generation",
    title: "Midjourney",
    description: "Create stunning artwork and illustrations using advanced AI.",
    url: "https://midjourney.com",
  },
  {
    id: "firefly",
    category: "Image Editing",
    title: "Adobe Firefly",
    description: "AI-powered creative tools integrated with Adobe Creative Cloud.",
    url: "https://firefly.adobe.com",
  },
  {
    id: "upscayl",
    category: "Image Enhancement",
    title: "Upscayl",
    description: "AI image upscaling for higher resolution outputs.",
    url: "https://upscayl.github.io",
  },
];

const uiTools = [
  {
    id: "galileo",
    category: "UI Design",
    title: "Galileo AI",
    description: "Generate UI designs from natural language descriptions.",
    url: "https://usegalileo.ai",
  },
  {
    id: "figma-tool",
    category: "Prototyping",
    title: "Figma",
    description: "Collaborative interface design tool with AI features.",
    url: "https://figma.com",
  },
  {
    id: "builder",
    category: "Design System",
    title: "Builder.io",
    description: "AI-powered visual development platform.",
    url: "https://builder.io",
  },
];

const productivityTools = [
  {
    id: "chatgpt-tool",
    category: "Writing",
    title: "ChatGPT",
    description: "AI assistant for content creation and ideation.",
    url: "https://chat.openai.com",
  },
  {
    id: "notion",
    category: "Project Management",
    title: "Notion AI",
    description: "AI-enhanced workspace for design documentation.",
    url: "https://notion.so",
  },
  {
    id: "perplexity",
    category: "Research",
    title: "Perplexity AI",
    description: "AI-powered research assistant for designers.",
    url: "https://perplexity.ai",
  },
];

export function Tools() {
  return (
    <main className="container px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-[800px] text-center">
        <h1 className="text-3xl font-medium sm:text-4xl">AI Design Tools</h1>
        <p className="mt-4 text-muted-foreground">
          Discover powerful AI tools to enhance your design workflow.
        </p>
      </div>

      <Tabs defaultValue="image" className="mt-16">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="image">Image</TabsTrigger>
          <TabsTrigger value="ui">UI/UX</TabsTrigger>
          <TabsTrigger value="productivity">Productivity</TabsTrigger>
        </TabsList>
        <TabsContent value="image" className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {imageTools.map((tool) => (
              <ResourceCard key={tool.id} {...tool} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ui" className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {uiTools.map((tool) => (
              <ResourceCard key={tool.id} {...tool} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="productivity" className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productivityTools.map((tool) => (
              <ResourceCard key={tool.id} {...tool} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}