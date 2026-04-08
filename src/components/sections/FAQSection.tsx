"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getWhatsAppUrl } from "@/lib/utils";
import { FAQS } from "@/lib/data/faqs";

export default function FAQSection() {
  return (
    <section id="faq" className="bg-rice py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.15em] text-imperial uppercase">
            Preguntas Frecuentes
          </p>

          {/* 2. CORRECCIÓN: Acentos añadidos */}
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Lo que más nos preguntan
          </h2>
          
          {/* 3. CORRECCIÓN: Acentos añadidos y enlace real para evitar fricción */}
          <p className="mt-6 text-lg leading-relaxed text-ink-light">
            Si tu pregunta no está aquí, siéntete libre de{" "}
            <a 
              href={getWhatsAppUrl("Información")}
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-jade underline decoration-jade/30 underline-offset-4 transition-colors hover:decoration-jade"
            >
              contactarnos por WhatsApp
            </a>.
          </p>
        </div>

        {/* 4. CORRECCIÓN: Restringimos el ancho a max-w-3xl para que no parezca un excel estirado y subimos a mt-16 */}
        <div className="mx-auto mt-16 max-w-3xl">
  <Accordion type="single" collapsible className="w-full">
    {FAQS.map((faq, idx) => (

      <AccordionItem 
        key={idx} 
        value={`faq-${idx}`}
        className="group border-b border-imperial/20 px-4 transition-all duration-500 ease-in-out data-[state=open]:border-transparent data-[state=open]:bg-white data-[state=open]:shadow-md data-[state=open]:rounded-2xl"
      >
        <AccordionTrigger className="text-left font-serif text-lg py-6 transition-all duration-300 hover:text-imperial data-[state=open]:text-imperial active:scale-[0.98] md:text-xl">
          {faq.question}
        </AccordionTrigger>
        
        <AccordionContent className="text-base leading-relaxed text-ink-light pb-6">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
</div>
      </div>
    </section>
  );
}
