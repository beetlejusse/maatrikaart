import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-800 font-medium tracking-wider">
              ART COMMISSIONS & INQUIRIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Bring original art into your everyday
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start a commission or inquire about available works. Thoughtful
              process, archival materials.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Original Painting (50×70cm)
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-green-800">
                    $1,500
                  </span>
                  <span className="ml-2 text-gray-500 line-through">
                    $1,800
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Archival oils or acrylics on canvas
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Certificate of authenticity
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Worldwide insured shipping
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Timeline typically 4–8 weeks
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="w-full bg-green-800 hover:bg-green-900 text-white"
                >
                  Request an Art
                </Button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Custom sizes and framing available on request
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbQp5FxeGuiKOmwMpVkqvFO28tXwIY.png"
                  alt="Featured artwork"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/10" />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
