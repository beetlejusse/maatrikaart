 import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JoinUs() {
  const IG_URL = process.env.NEXT_PUBLIC_IG_URL || "#";
  const FB_URL = process.env.NEXT_PUBLIC_FB_URL || "#";
  const YT_URL = process.env.NEXT_PUBLIC_YT_URL || "#";
  const EMAIL_URL = process.env.NEXT_PUBLIC_EMAIL_URL || "#";
  const TEL_URL = process.env.NEXT_PUBLIC_CONTACT_NUMBER
    ? `tel:${process.env.NEXT_PUBLIC_CONTACT_NUMBER}`
    : undefined;

  return (
    <section id="join-us" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Join the Maatrika Art community
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Exhibition updates, new work, and behind-the-scenes notes.
        </p>

        {/* Socials */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-8">
          {IG_URL && (
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Instagram className="h-4 w-4" />
                Instagram
              </Button>
            </a>
          )}
          {FB_URL && (
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Facebook className="h-4 w-4" />
                Facebook
              </Button>
            </a>
          )}
          {YT_URL && (
            <a href={YT_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Youtube className="h-4 w-4" />
                YouTube
              </Button>
            </a>
          )}
          {EMAIL_URL && (
            <a href={EMAIL_URL} aria-label="Email">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </a>
          )}
        </div>

        <div className="max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Button className="w-full">Subscribe to Maatrika Art</Button>
        </div>
      </div>
    </section>
  );
}
