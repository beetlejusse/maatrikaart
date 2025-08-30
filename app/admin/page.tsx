import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 pt-24">
      <div className="container mx-auto px-4 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Admin Panel</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Add Artwork</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Title" />
              <Input placeholder="Medium (e.g., Oil on canvas)" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Size (e.g., 50×70cm)" />
                <Input placeholder="Year" />
              </div>
              <Input placeholder="Image URL" />
              <Textarea placeholder="Description" />
              <Button className="w-full">Save Artwork</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Artworks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-gray-600">No artworks yet. Saved items will appear here.</div>
              <div className="grid grid-cols-1 gap-4">
                {/* Placeholder for artwork list */}
                <div className="rounded-lg border p-4">
                  <div className="font-semibold">Sample Artwork</div>
                  <div className="text-sm text-gray-600">Oil on canvas • 50×70cm • 2024</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
