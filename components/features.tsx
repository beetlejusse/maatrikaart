import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function GalleryHighlights() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">GALLERY HIGHLIGHTS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Curated selections:
            <br />
            Four facets of the work
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Explore signature qualities across series—materials, themes, and process—presented with clarity and care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GbYQwUVU7qAINjv4Z5H8OlhqsoT3sK.png"
              alt="Electron micrograph of lactic acid bacteria"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Studio-Grade Materials</h3>
              <p className="text-gray-600 leading-relaxed">
                Archival paints and grounds chosen for colorfastness and longevity. Each piece is sealed and ready to
                live beautifully on your walls.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Original works on canvas and panel",
                "Archival, museum-quality materials",
                "Certificate of authenticity included",
                "Worldwide shipping available",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-800 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NyQbxH7hgpo48PWQccxxwnvpUSE8fI.png"
                alt="Enjoying Fermy"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Inviting, lived-with color</h4>
            <p className="text-gray-600">
              A balanced palette with quiet contrasts—made to feel warm and contemporary in any space.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uvTlVqL6zdl3rxG3ValUpgRBIBKT0z.png"
                alt="Nature of Amami Oshima"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Place and memory</h4>
            <p className="text-gray-600">
              Subjects rooted in landscape and everyday forms. No additives—just paint and time.
            </p>
          </div>

          <div className="relative lg:col-span-1 md:col-span-2 lg:mt-0 md:mt-8">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fmxw27mFWpKqjlfYZppsqTfJsFNryU.png"
                alt="Sunset in Amami Oshima"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Tradition and process</h4>
            <p className="text-gray-600">Methods refined over years to serve the image and its story.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
