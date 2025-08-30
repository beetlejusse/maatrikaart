import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Do you accept commissions?",
      answer: "Yes. Please share your idea, preferred size, palette, and timeline via the Suggestions page.",
    },
    {
      question: "Are works framed and ready to hang?",
      answer: "Originals ship unframed by default to protect the surface. Framing options are available upon request.",
    },
    {
      question: "Do you offer prints or licensing?",
      answer: "Limited edition prints and licensing are available for select works. Contact for details.",
    },
    {
      question: "What about shipping and insurance?",
      answer: "Worldwide shipping with insured carriers. Each artwork includes a certificate of authenticity.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
