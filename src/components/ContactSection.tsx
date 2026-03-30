"use client";

import { useState, type FormEvent } from "react";
import { Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Solicitud de información — Chunfengbeibei"
    );
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\n\nMensaje:\n${formData.mensaje}`
    );
    window.location.href = `mailto:contacto@chunfengbeibei.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contacto" className="bg-rice py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold tracking-wide text-imperial uppercase">
              Contacto
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Da el primer paso
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-light">
              Escríbenos para resolver tus dudas, conocer los precios
              actualizados o reservar tu plaza en el próximo grupo.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-jade/15 bg-jade/5 p-4 transition-all hover:border-jade/30 hover:bg-jade/8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-jade text-white">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">WhatsApp</p>
                  <p className="text-sm text-ink-muted">
                    Respuesta en menos de 24 horas
                  </p>
                </div>
              </a>

              <a
                href="mailto:contacto@chunfengbeibei.com"
                className="flex items-center gap-4 rounded-xl border border-imperial/15 bg-imperial/5 p-4 transition-all hover:border-imperial/30 hover:bg-imperial/8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-imperial text-white">
                  <Send className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Correo electrónico</p>
                  <p className="text-sm text-ink-muted">
                    contacto@chunfengbeibei.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border-subtle bg-white p-7 shadow-sm md:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-ink"
                  >
                    Nombre <span className="text-imperial" aria-label="requerido">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-lg border border-border-light bg-rice/50 px-4 py-2.5 text-base text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-imperial/40 focus:ring-2 focus:ring-imperial/10"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-ink"
                  >
                    Email <span className="text-imperial" aria-label="requerido">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-lg border border-border-light bg-rice/50 px-4 py-2.5 text-base text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-imperial/40 focus:ring-2 focus:ring-imperial/10"
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-ink"
                >
                  Teléfono <span className="text-imperial" aria-label="requerido">*</span>
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                  className="mt-1.5 w-full rounded-lg border border-border-light bg-rice/50 px-4 py-2.5 text-base text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-imperial/40 focus:ring-2 focus:ring-imperial/10"
                  placeholder="+52 55 1234 5678"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-ink"
                >
                  Mensaje <span className="text-imperial" aria-label="requerido">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  className="mt-1.5 w-full resize-y rounded-lg border border-border-light bg-rice/50 px-4 py-2.5 text-base text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-imperial/40 focus:ring-2 focus:ring-imperial/10"
                  placeholder="Cuéntanos qué nivel te interesa, tu experiencia previa o cualquier duda que tengas."
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-imperial px-7 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-imperial-dark hover:shadow-md sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Enviar mensaje
              </button>

              <p className="mt-4 text-xs text-ink-muted">
                Al enviar este formulario, se abrirá tu cliente de correo
                con los datos completados. No almacenamos información personal.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
