import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function SuggestionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 pt-24">
      <div className="container mx-auto px-4 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Suggestions</h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Share an idea for a commission, a theme you’d like to see, or feedback about the work. Your input helps shape
          future series.
        </p>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Send a suggestion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="e.g., Commission idea, Series request" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell me more about your idea…" />
            </div>
            <Button className="w-full">Submit</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
