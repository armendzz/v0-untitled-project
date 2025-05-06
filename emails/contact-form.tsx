import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

interface ContactFormEmailProps {
  name: string
  email: string
  phone: string
  message: string
}

export const ContactFormEmail = ({
  name,
  email,
  phone,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Neue Kontaktanfrage von {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Neue Kontaktanfrage</Heading>
          <Section style={section}>
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Telefon:</strong> {phone}
            </Text>
            <Text style={text}>
              <strong>Nachricht:</strong>
            </Text>
            <Text style={message}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ContactFormEmail

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
}

const section = {
  padding: "24px",
  backgroundColor: "#f6f9fc",
  borderRadius: "8px",
}

const h1 = {
  color: "#1a1a1a",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.3",
  margin: "16px 0",
}

const text = {
  color: "#1a1a1a",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "8px 0",
}

const message = {
  color: "#1a1a1a",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "8px 0",
  whiteSpace: "pre-wrap",
} 