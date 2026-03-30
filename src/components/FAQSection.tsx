"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "¿Necesito experiencia previa con el idioma chino?",
    answer:
      "No. Tenemos un nivel introductorio diseñado para quienes parten de cero. No necesitas saber nada de chino, ni de caracteres, ni de tonos. Empezamos desde lo más básico y avanzamos a tu ritmo.",
  },
  {
    question: "¿Cuántos alumnos hay por clase?",
    answer:
      "Cada grupo tiene entre 3 y 6 alumnos. Este tamaño permite que la profesora dedique atención individual a la pronunciación de cada estudiante, algo que en grupos grandes es imposible.",
  },
  {
    question: "¿Qué plataforma usan para las clases en línea?",
    answer:
      "Usamos Zoom o Google Meet, según la preferencia del grupo. Además, compartimos materiales y tareas a través de un grupo privado donde puedes consultar dudas entre clase y clase.",
  },
  {
    question: "¿Cuánto dura cada curso y cuál es la frecuencia?",
    answer:
      "Cada nivel tiene una duración aproximada de 3 meses con dos sesiones semanales de 90 minutos. Al completar un nivel, puedes continuar al siguiente o pausar y retomar más adelante.",
  },
  {
    question: "¿Las profesoras hablan español?",
    answer:
      "Sí. Todas nuestras profesoras son nativas de China y hablan español con fluidez. Esto facilita las explicaciones gramaticales y culturales, sobre todo en los niveles iniciales.",
  },
  {
    question: "¿Ofrecen algún tipo de certificación?",
    answer:
      "Entregamos un certificado de participación al completar cada nivel. Además, preparamos a nuestros alumnos para el examen oficial HSK si desean obtener la certificación internacional reconocida por el gobierno chino.",
  },
  {
    question: "¿Cuál es el costo de las clases?",
    answer:
      "El costo varía según el nivel y la modalidad. Contáctanos por WhatsApp o correo electrónico para recibir la información actualizada de precios y promociones vigentes.",
  },
];

export default function FAQSection() {
  return (
    <section id="preguntas" className="bg-rice py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-imperial uppercase">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Lo que más nos preguntan
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-light">
            Si tu pregunta no aparece aquí, escríbenos sin compromiso.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
