"use client";

import { useActionState } from "react";
import { sendEmail } from "@/app/actions/send-email";

const initialState = {
  success: false,
  message: "",
  errors: {},
  inputs: {
    name: "",
    email: "",
    phone: "",
    message: "",
  },
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);

  if (state.success) {
    return (
      <div className="text-center py-8 animate-fade-in-up">
        <div className="w-16 h-16 bg-[#c9a87c] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl text-[#2d2d2d] mb-2">¡Mensaje enviado!</h3>
        <p className="text-[#6b6b6b]">{state.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 text-sm text-[#c9a87c] hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <input
          type="text"
          name="name"
          defaultValue={state.inputs?.name}
          placeholder="Tu nombre"
          required
          className="w-full px-4 py-3 border border-[#e8e4df] bg-white text-[#4a4a4a] placeholder:text-[#999] focus:border-[#c9a87c] transition-colors outline-none"
        />
        {state.errors?.name && (
          <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          defaultValue={state.inputs?.email}
          placeholder="Tu email"
          required
          className="w-full px-4 py-3 border border-[#e8e4df] bg-white text-[#4a4a4a] placeholder:text-[#999] focus:border-[#c9a87c] transition-colors outline-none"
        />
        {state.errors?.email && (
          <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          defaultValue={state.inputs?.phone}
          placeholder="Tu teléfono (opcional)"
          className="w-full px-4 py-3 border border-[#e8e4df] bg-white text-[#4a4a4a] placeholder:text-[#999] focus:border-[#c9a87c] transition-colors outline-none"
        />
      </div>

      <div>
        <textarea
          name="message"
          defaultValue={state.inputs?.message}
          placeholder="Tu mensaje"
          rows={5}
          required
          className="w-full px-4 py-3 border border-[#e8e4df] bg-white text-[#4a4a4a] placeholder:text-[#999] focus:border-[#c9a87c] transition-colors resize-none outline-none"
        />
        {state.errors?.message && (
          <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>
        )}
      </div>

      {state.message && !state.success && (
        <p className="text-red-500 text-sm text-center">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isPending ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}

