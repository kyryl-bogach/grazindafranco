"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
    email: z.string().email("Email inválido").max(255),
    phone: z.string().max(20).optional(),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(2000),
});

type EmailState = {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
    inputs?: {
        name: string;
        email: string;
        phone: string;
        message: string;
    };
};

function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function sendEmail(prevState: EmailState | null, formData: FormData): Promise<EmailState> {
    const phoneValue = formData.get("phone");
    const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: phoneValue && phoneValue.toString().trim() ? phoneValue : undefined,
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Por favor, revisa los campos del formulario.",
            inputs: {
                name: formData.get("name") as string,
                email: formData.get("email") as string,
                phone: formData.get("phone") as string,
                message: formData.get("message") as string,
            }
        };
    }

    const { name, email, phone, message } = validatedFields.data;

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_EMAIL) {
        console.error("❌ SMTP credentials or CONTACT_EMAIL are missing. Please check .env.local");
        return {
            success: false,
            message: "Error de configuración del servidor (faltan credenciales SMTP).",
        };
    }

    const smtpPort = process.env.SMTP_PORT ? Number.parseInt(process.env.SMTP_PORT, 10) : 465;
    if (Number.isNaN(smtpPort)) {
        console.error("❌ SMTP_PORT is not a valid number");
        return {
            success: false,
            message: "Error de configuración del servidor (puerto SMTP inválido).",
        };
    }

    try {
        const isSecure = smtpPort === 465;
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: smtpPort,
            secure: isSecure,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            ...(process.env.NODE_ENV === "development" && {
                tls: {
                    rejectUnauthorized: false,
                },
            }),
        });

        const escapedName = escapeHtml(name);
        const escapedEmail = escapeHtml(email);
        const escapedPhone = phone ? escapeHtml(phone) : "No proporcionado";
        const escapedMessage = escapeHtml(message);

        const mailOptions = {
            from: `"${escapedName}" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `Nuevo mensaje de contacto: ${escapedName}`,
            text: `
Nombre: ${name}
Email: ${email}
Teléfono: ${phone || "No proporcionado"}

Mensaje:
${message}
      `,
            html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Teléfono:</strong> ${escapedPhone}</p>
        <br/>
        <p><strong>Mensaje:</strong></p>
        <p>${escapedMessage.replace(/\n/g, "<br>")}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        console.log(`✅ Email sent successfully from ${email} to ${process.env.CONTACT_EMAIL}`);

        return {
            success: true,
            message: "¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.",
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            message: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
        };
    }
}
