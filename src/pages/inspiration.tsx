import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const aiArtworks = [
  {
    title: "AI-Generated Landscapes",
    image: "https://images.unsplash.com/photo-1706126233415-13ca2114673c",
    author: "Midjourney Artist",
    url: "https://example.com/artwork1",
  },
  {
    title: "Abstract Patterns",
    image: "https://images.unsplash.com/photo-1704989374960-4dd7f3e1a0db",
    author: "DALL-E Creator",
    url: "https://example.com/artwork2",
  },
  {
    title: "Digital Characters",
    image: "https://images.unsplash.com/photo-1698778573682-346d219402b5",
    author: "Stable Diffusion Artist",
    url: "https://example.com/artwork3",
  },
];

const uiDesigns = [
  {
    title: "AI-Powered Dashboard",
    image: "https://images.unsplash.com/photo-1705600958243-feb3d1898302",
    author: "UI Designer",
    url: "https://example.com/ui1",
  },
  {
    title: "Mobile App Interface",
    image: "https://images.unsplash.com/photo-1705577930554-d2dba40e6752",
    author: "App Designer",
    url: "https://example.com/ui2",
  },
  {
    title: "Web Application",
    image: "https://images.unsplash.com/photo-1705267631561-7aa6f0ed9d86",
    author: "Web Designer",
    url: "https://example.com/ui3",
  },
];

function InspirationCard({ title, image, author, url }: {
  title: string;
  image: string;
  author: string;
  url: string;
}) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
          <div className="p-4">
            <h3 className="font-medium group-hover:text-primary">{title}</h3>
            <p className="text-sm text-muted-foreground">by {author}</p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

export function Inspiration() {
  return (
    <main className="container px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-[800px] text-center">
        <h1 className="text-3xl font-medium sm:text-4xl">Design Inspiration</h1>
        <p className="mt-4 text-muted-foreground">
          Explore amazing artworks and designs created with AI tools.
        </p>
      </div>

      <Tabs defaultValue="artworks" className="mt-16">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="artworks">AI Artworks</TabsTrigger>
          <TabsTrigger value="ui">UI Designs</TabsTrigger>
        </TabsList>
        <TabsContent value="artworks" className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiArtworks.map((artwork, index) => (
              <InspirationCard key={index} {...artwork} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ui" className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {uiDesigns.map((design, index) => (
              <InspirationCard key={index} {...design} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}