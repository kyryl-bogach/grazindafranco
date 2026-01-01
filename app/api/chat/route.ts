
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
   try {
      const { messages } = await req.json();

      // System prompt
      const systemPrompt = `You are an expert assistant for Grazinda Franco, a professional makeup artist and dermopharmacy expert in Orihuela, Alicante, Spain.

**Your Goal:**
Provide helpful, accurate information based *strictly* on the content below. Answer questions about services, philosophy, and location directly.
**ONLY** suggest contacting via WhatsApp if the user questions for booking, availability, or something NOT covered here.

---

**OFFICIAL WEBSITE CONTENT (Sources of Truth):**

**1. Philosophy & About Me:**
*   **Who is she?** Pharmacist and Dermopharmacy expert passionate about makeup and skin care.
*   **Approach:** "Less is more". Perfection within imperfection. Enhancing natural beauty, self-confidence, and healthy, radiant skin.
*   **Goal:** A natural look, full of life, where the client is the canvas.

**2. Services & Pricing:**
*   **Maquillaje Social (70€ | 1h):** For guests, day/night events, graduations. Includes skin prep, long-lasting makeup. *Optional: Individual false lashes (+10€).*
*   **Maquillaje a Domicilio (120€ | 1h):** Exclusive home service with full kit. Comfort of your own home. (Consult zone for travel).
*   **Curso Automaquillaje Individual (150€ | 3h):** Intensive, personalized class. Learn professional techniques adapted to your face/style. Includes bag analysis, guided practice, high-quality material.
*   **Curso Automaquillaje Grupal (100€/person | 3h):** Minimum 3 people. Fun afternoon with friends learning tricks and techniques. Includes guided practice and materials.
*   **Pack Novia Completo:** Servicio integral para novias. **Consulta el dossier completo en: https://grazindafranco.com/dossier-novias**
    *   *Incluye 3 partes:*
        *   **Entrevista Previa:** Consulta para conocerte, analizar tu piel y crear rutina dermocosmética personalizada.
        *   **Prueba de Maquillaje (150€):** En el estudio de Orihuela. Pruebas de diferentes estilos hasta encontrar el perfecto. Segunda prueba: 100€.
        *   **Día de la Boda (350€):** Desplazamiento incluido (hasta 5km), preparación completa, maquillaje + pestañas postizas, kit de retoque.
    *   *Servicios Adicionales:*
        *   **Familiares/Invitadas:** 90€/persona (duración: 1h por persona).
    *   *Importante:* Es imprescindible incluir al menos el maquillaje de una amiga o familiar si el desplazamiento es fuera de Orihuela y alrededores.
    *   *Reserva:* Pago anticipado de 150€ (prueba) no reembolsable. Plazo: 5 días desde recepción del dossier.

**3. Location & Contact:**
*   **Address:** C. San Agustín, 7, 1º, 03300 Orihuela, Alicante.
*   **Email:** grazinda.franco@gmail.com
*   **Instagram:** @grazindafranco
*   **Phone:** +34 620 00 61 67

---

**INSTRUCTIONS:**

1.  **Answer Directly:** If the user asks "How much is the bridal pack?" or "Where are you located?", ANSWER IT using the info above. Do not fallback to WhatsApp for these factual questions.
2.  **Booking & Availability:** If the user asks "Can I book for Saturday?" or "Are you free?", then use the fallback.
3.  **Unknown Info:** If asked about something not listed, use the fallback.
4.  **Tone:** Professional, warm, welcoming. Spanish language by default.

**WhatsApp Fallback Logic:**
*   Link: https://wa.me/34620006167
*   Link Text: \`wa.me\` (Short link only)
*   Message: "No puedo confirmar esa información/disponibilidad directamente aquí. Por favor escribe a Grazinda por WhatsApp:"

**Examples:**
*   *User:* "¿Qué precio tiene el curso individual?"
    *   *You:* "El Curso de Automaquillaje Individual cuesta 150€ y tiene una duración de 3 horas. Incluye análisis de neceser, práctica guiada y material."
*   *User:* "¿Haces bodas?"
    *   *You:* "¡Sí! El servicio de novia incluye entrevista previa, prueba de maquillaje (150€) y el día de tu boda (350€) con desplazamiento hasta 5km, pestañas postizas y kit de retoque. También puedes contratar maquillaje para familiares e invitadas (90€/persona). Puedes ver todos los detalles en el dossier completo: https://grazindafranco.com/dossier-novias"
*   *User:* "¿Me puedes explicar el pack de novia?"
    *   *You:* "Claro! El Pack de Novia incluye 3 partes: 1) Entrevista previa para conocerte y analizar tu piel, 2) Prueba de maquillaje en el estudio (150€), donde probamos diferentes estilos, y 3) El día de la boda (350€) con todo incluido: desplazamiento, preparación, maquillaje, pestañas y kit de retoque. Para ver toda la información detallada, consulta el dossier: https://grazindafranco.com/dossier-novias"
*   *User:* "¿Tienes libre este sábado?"
    *   *You:* "No tengo acceso a la agenda en tiempo real. Por favor, consulta la disponibilidad por WhatsApp: https://wa.me/34620006167"`;

      // Manually construct the conversation history with system prompt first
      const conversationMessages = [
         { role: 'system', content: systemPrompt },
         ...messages.map((m: any) => {
            // Flatten content to ensure it is always a string
            let content = m.content;
            if (typeof content !== 'string') {
               if (Array.isArray(content)) {
                  content = content
                     .map((c: any) => (typeof c === 'string' ? c : c.text || JSON.stringify(c)))
                     .join('');
               } else {
                  content = String(content || '');
               }
            }
            return { role: m.role, content };
         })
      ];

      console.log('Sending to OpenRouter:', JSON.stringify(conversationMessages.map((m: any) => ({ role: m.role, content: m.content.substring(0, 50) + '...' })), null, 2));

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
         method: 'POST',
         headers: {
            'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
            // Optional: Identify app to OpenRouter
            'HTTP-Referer': 'https://grazindafranco.com',
            'X-Title': 'Grazinda Franco Chatbot',
         },
         body: JSON.stringify({
            model: 'deepseek/deepseek-chat',
            messages: conversationMessages,
            stream: true,
         }),
      });

      if (!response.ok) {
         const errorText = await response.text();
         console.error('OpenRouter API Error:', response.status, errorText);
         return new Response(`Error from AI provider: ${response.status}`, { status: 500 });
      }

      // Create a transform stream to parse SSE events and extract text deltas
      // OpenRouter returns standard OpenAI SSE format: data: {"choices":[{"delta":{"content":"..."}}]}
      const stream = new ReadableStream<Uint8Array>({
         async start(controller) {
            const reader = response.body?.getReader();
            if (!reader) {
               controller.close();
               return;
            }
            const decoder = new TextDecoder();
            const encoder = new TextEncoder();
            let buffer = '';

            try {
               while (true) {
                  const { done, value } = await reader.read();
                  if (done) break;

                  buffer += decoder.decode(value, { stream: true });
                  const lines = buffer.split('\n');
                  buffer = lines.pop() || ''; // Keep the last partial line

                  for (const line of lines) {
                     if (line.trim() === '') continue;
                     if (line.trim() === 'data: [DONE]') continue;
                     if (line.startsWith('data: ')) {
                        try {
                           const json = JSON.parse(line.slice(6));
                           const text = json.choices[0]?.delta?.content;
                           if (text) {
                              controller.enqueue(encoder.encode(text));
                           }
                        } catch (e) {
                           console.error('Error parsing SSE line:', line.substring(0, 50), e);
                        }
                     }
                  }
               }
            } catch (err) {
               console.error('Stream reading error:', err);
               controller.error(err);
            } finally {
               controller.close();
            }
         }
      });

      return new Response(stream, {
         headers: {
            'Content-Type': 'text/plain; charset=utf-8',
         },
      });

   } catch (error) {
      console.error('API Route Error:', error);
      return new Response('Internal Server Error', { status: 500 });
   }
}
