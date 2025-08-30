import Header from "@/components/header"
import Image from "next/image"

export default function GalleryPage() {
  const paintings = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=800&width=600&query=abstract%20painting%20${i + 1}`,
    title: `Painting ${i + 1}`,
    size: "Acrylic on canvas, 50×70 cm",
    year: 2025,
  }))

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Header />
      <section className="pt-28 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Gallery</h1>
            <p className="text-gray-600 mt-2">Selected works from Maatrika Art</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paintings.map((p) => (
              <figure key={p.id} className="bg-white rounded-xl shadow overflow-hidden">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={p.src || "/placeholder.svg"}
                    alt={`${p.title} — ${p.size} (${p.year})`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={p.id <= 3}
                  />
                </div>
                <figcaption className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{p.title}</h3>
                    <span className="text-sm text-gray-500">{p.year}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{p.size}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
