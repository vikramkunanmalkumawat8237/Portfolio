"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { profile, socials } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Please add a short subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // No backend wired up yet — opens a pre-filled email client as a reliable fallback.
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)}`;
    window.location.href = mailto;
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-pad container-px border-t border-line">
      <Reveal>
        <p className="acct-label mb-4">ACCT / 008 — CONTACT</p>
      </Reveal>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
              Let's close the loop on an opportunity.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
              Open to full-time roles and conversations across finance, FP&amp;A, audit, and finance-technology.
              Reach out directly — I reply personally, usually within a day.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 space-y-4">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-ink hover:text-emerald">
                <Mail className="h-4 w-4 text-emerald" /> {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-ink hover:text-emerald">
                <Phone className="h-4 w-4 text-emerald" /> {profile.phone}
              </a>
              <p className="flex items-center gap-3 text-sm text-ink-muted">
                <MapPin className="h-4 w-4 text-emerald" /> {profile.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="rounded-full border border-line-strong px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted transition-colors hover:border-emerald hover:text-emerald"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className="mt-2 w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-emerald"
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="mt-2 w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-emerald"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                Subject
              </label>
              <input
                id="subject"
                {...register("subject")}
                className="mt-2 w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-emerald"
                placeholder="FP&A Analyst opening at..."
                aria-invalid={!!errors.subject}
              />
              {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className="mt-2 w-full resize-none rounded-lg border border-line-strong bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-emerald"
                placeholder="Tell me a bit about the role or opportunity..."
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>}
            </div>

            <MagneticButton
              as="button"
              variant="solid"
              className="w-full sm:w-auto"
              ariaLabel="Send message"
            >
              {isSubmitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
            </MagneticButton>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-emerald"
              >
                <CheckCircle2 className="h-4 w-4" /> Opening your email client to send this now.
              </motion.p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
