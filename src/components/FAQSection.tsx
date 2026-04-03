"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "¿Necesito conocimientos previos de chino para empezar?",
    answer: "En absoluto. Nuestro primer nivel está diseñado meticulosamente para estudiantes que parten de cero. Te llevamos de la mano desde tus primeros trazos y tonos, hasta que seas capaz de mantener tus primeras conversaciones básicas con total confianza.",
  },
  {
    question: "¿Las clases son en vivo o grabadas?",
    answer: "Todas nuestras clases son 100% en vivo. El chino mandarín es un idioma tonal, por lo que la retroalimentación inmediata es crucial. Nuestros profesores expertos corrigen tu pronunciación y gramática en tiempo real, asegurando que aprendas correctamente desde el primer día.",
  },
  {
    question: "¿Tengo que comprar libros o material extra?",
    answer: "No. Tu inscripción incluye acceso a todo el material digital necesario, audios de práctica y ejercicios interactivos. Solo necesitas una computadora o tablet con conexión a internet estable y el compromiso de asistir a tus sesiones.",
  },
  {
    question: "¿Cómo es el proceso para inscribirme y asegurar mi lugar?",
    answer: "Es muy rápido. Al hacer clic en 'Inscribirse', te dirigiremos a nuestro WhatsApp oficial para resolver cualquier última duda. Por ahí te compartiremos los métodos de pago (transferencia o tarjeta) y, una vez confirmado, recibirás inmediatamente tus accesos y el enlace para tu primera clase.",
  },
  {
    question: "¿Qué pasa si por trabajo o un imprevisto falto a una clase en vivo?",
    answer: "Entendemos que tu agenda puede ser impredecible. Por eso, todas las sesiones en vivo quedan grabadas y disponibles para ti en nuestra plataforma. Podrás repasar la lección a tu propio ritmo para no atrasarte y estar listo para la siguiente sesión.",
  },
  {
    question: "¿Este curso me prepara para una certificación oficial?",
    answer: "Sí. Nuestro plan de estudios está estructurado con base en los estándares internacionales. Al avanzar en nuestros niveles, estarás preparándote directamente para presentar y aprobar el examen oficial HSK (Hanyu Shuiping Kaoshi), validando tu nivel en cualquier parte del mundo.",
  },
  {
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer: "Aceptamos transferencias bancarias (SPEI), depósitos y pagos con tarjeta de crédito/débito. Si necesitas facilidades de pago, no dudes en consultarlo con nuestro equipo de admisiones al momento de agendar tu lugar.",
  }
];

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
              href="https://wa.me/tu-numero-aqui" 
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
