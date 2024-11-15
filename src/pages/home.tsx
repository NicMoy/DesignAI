import { Hero } from '@/components/sections/hero';
import { ResourcesGrid } from '@/components/sections/resources-grid';

export function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <ResourcesGrid />

      <section className="border-t bg-secondary/50">
        <div className="container px-4 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="text-2xl font-medium sm:text-3xl">
              Have a Resource to Share?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Help the community grow by contributing your favorite design and
              AI resources.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
