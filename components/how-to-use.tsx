import Image from "next/image"

export default function HowToUse() {
  const usages = [
    {
      title: "Landscape Series",
      description: "Light, horizon, and seasons interpreted on canvas",
      image: "/morning-usage.jpg",
    },
    {
      title: "Portrait & Figure",
      description: "Quiet studies that focus on presence and line",
      image: "/sports-usage.jpg",
    },
    {
      title: "Abstract Studies",
      description: "Gesture, texture, and color field explorations",
      image: "/dessert-usage.jpg",
    },
  ]

  return (
    <section id="how-to-use" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Explore the Series</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usages.map((usage, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={usage.image || "/placeholder.svg"}
                  alt={usage.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{usage.title}</h3>
              <p className="text-gray-600">{usage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
