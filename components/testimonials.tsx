import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">What collectors are saying</h2>
          <p className="text-gray-600 leading-relaxed">Stories from homes and spaces where these paintings now live.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KZxMVixr7qeQLP1cObvOpD5bHHv6o1.png"
              alt="Woman drinking Fermy"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-900 font-medium italic">
              "The piece transforms our living room. The colors shift beautifully throughout the day."
            </blockquote>
            <div>
              <p className="font-bold text-gray-900">M. Sato</p>
              <p className="text-gray-600">Collector / Tokyo</p>
            </div>
          </div>
        </div>

        {/* 追加のレビュー */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              comment: "We commissioned a portrait and it became an heirloom instantly.",
              name: "K. Tanaka",
              role: "Collector",
              period: "Since 2022",
            },
            {
              comment: "Rich textures and a calm palette—exactly what our studio needed.",
              name: "Y. Yamada",
              role: "Art Director",
              period: "Since 2023",
            },
            {
              comment: "Professional process from inquiry to delivery. Highly recommended.",
              name: "M. Suzuki",
              role: "Designer",
              period: "Since 2024",
            },
          ].map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{review.comment}"</p>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">
                  {review.role} / {review.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
