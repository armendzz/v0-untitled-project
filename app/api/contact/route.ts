import { Resend } from "resend"
import { z } from "zod"
import { ContactFormEmail } from "@/emails/contact-form"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().min(10, "Telefonnummer muss mindestens 10 Zeichen lang sein"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = contactFormSchema.parse(body)

    const data = await resend.emails.send({
      from: "FSG Bau AG <kontakt@fsgbau.ch>",
      to: ["info@fsgbau.ch"],
      subject: `Neue Kontaktanfrage von ${name}`,
      react: ContactFormEmail({ name, email, phone, message }),
      replyTo: email,
    })

    return Response.json({ success: true, data })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { success: false, error: error.errors },
        { status: 400 }
      )
    }

    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
} 