"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Loader2, Send, AlertCircle } from "lucide-react";
import { CLASSES } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-cream/15 bg-night/60 px-4 py-3.5 text-sm text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-marigold/60 focus:bg-night";
const labelCls = "mb-2 block text-[0.68rem] tracking-[0.18em] text-cream/50 uppercase";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [note, setNote] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Hold on to the form: `e.currentTarget` is null once the handler yields.
    const form = e.currentTarget;
    setStatus("sending");
    setErrors({});

    const data = Object.fromEntries(new FormData(form).entries());

    let res: Response;
    let json: { ok?: boolean; message?: string; error?: string; errors?: Record<string, string> };

    try {
      res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      json = await res.json();
    } catch {
      setNote("Could not reach the shaala just now. Please call us instead.");
      setStatus("error");
      return;
    }

    if (!res.ok) {
      setErrors(json.errors ?? {});
      setNote(json.error ?? "Please check the highlighted fields.");
      setStatus("error");
      return;
    }

    setNote(json.message ?? "Received — we will be in touch shortly.");
    setStatus("sent");
    form.reset();
  }

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-7 sm:p-9">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-14 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
              className="from-saffron to-lotus text-night mx-auto grid size-16 place-items-center rounded-full bg-gradient-to-br"
            >
              <Check className="size-8" />
            </motion.span>
            <h3 className="font-display mt-6 text-3xl">Namaste 🙏</h3>
            <p className="text-cream/60 mx-auto mt-3 max-w-sm leading-relaxed">{note}</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="text-marigold mt-7 text-sm tracking-wider uppercase"
            >
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={onSubmit}
            noValidate
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelCls}>
                  Your name
                </label>
                <input id="name" name="name" className={field} placeholder="Ananya Sharma" />
                <FieldError msg={errors.name} />
              </div>
              <div>
                <label htmlFor="phone" className={labelCls}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={field}
                  placeholder="+91 98765 43210"
                />
                <FieldError msg={errors.phone} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelCls}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={field}
                placeholder="you@example.com"
              />
              <FieldError msg={errors.email} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="batch" className={labelCls}>
                  Preferred batch
                </label>
                <select id="batch" name="batch" defaultValue="Morning" className={field}>
                  <option>Morning (5:00 – 11:00 AM)</option>
                  <option>Evening (4:30 – 9:15 PM)</option>
                  <option>Either — advise me</option>
                  <option>Online only</option>
                </select>
              </div>
              <div>
                <label htmlFor="interest" className={labelCls}>
                  Interested in
                </label>
                <select id="interest" name="interest" className={field}>
                  {CLASSES.map((c) => (
                    <option key={c.slug}>{c.name}</option>
                  ))}
                  <option>200-Hour Teacher Training</option>
                  <option>Himalayan Retreat</option>
                  <option>Corporate / group yoga</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelCls}>
                Anything we should know?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`${field} resize-none`}
                placeholder="Injuries, medical conditions, how long you have practised, questions…"
              />
            </div>

            {status === "error" && note && (
              <p className="text-lotus flex items-center gap-2 text-sm">
                <AlertCircle className="size-4" /> {note}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group from-saffron to-lotus text-night flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r py-4 font-medium transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send enquiry
                  <Send className="size-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="text-cream/35 text-center text-xs">
              We reply within one working day. Your details are never shared.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-lotus mt-1.5 text-xs">{msg}</p>;
}
