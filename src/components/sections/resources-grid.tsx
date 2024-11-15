import { ResourceCard } from "@/components/cards/resource-card";

const resources = [
  {
    id: "midjourney",
    category: "AI Tools",
    title: "Midjourney",
    description: "Create stunning artwork and illustrations using advanced AI image generation.",
    url: "https://midjourney.com",
  },
  {
    id: "figma-community",
    category: "Design Resources",
    title: "Figma Community",
    description: "Access free design resources, templates, and plugins for your next project.",
    url: "https://figma.com/community",
  },
  {
    id: "coursera-ai",
    category: "Learning",
    title: "Coursera AI for Design",
    description: "Learn how to integrate AI tools into your design workflow with expert-led courses.",
    url: "https://coursera.org",
  },
  {
    id: "behance",
    category: "Inspiration",
    title: "Behance",
    description: "Discover creative work from top designers and agencies worldwide.",
    url: "https://behance.net",
  },
  {
    id: "chatgpt",
    category: "AI Tools",
    title: "ChatGPT",
    description: "Generate creative content and get assistance with design-related tasks.",
    url: "https://chat.openai.com",
  },
  {
    id: "unsplash",
    category: "Design Resources",
    title: "Unsplash",
    description: "High-quality, free images for your design projects and inspiration.",
    url: "https://unsplash.com",
  },
];

export function ResourcesGrid() {
  return (
    <section className="container px-4 py-16 sm:px-8">
      <h2 className="mb-8 text-2xl font-medium">Popular Resources</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>
    </section>
  );
}