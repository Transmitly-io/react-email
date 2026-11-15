# @transmitly/react-email

Render [React Email](https://react.email) components and send them with Transmitly.

```bash
npm install @transmitly/react-email @react-email/render react
```

```tsx
import { Html, Head, Body, Container, Heading, Text } from "@react-email/components";
import { Transmitly } from "@transmitly/sdk";
import { sendReactEmail } from "@transmitly/react-email";

const tx = new Transmitly({ apiKey: process.env.TRANSMITLY_KEY });

await sendReactEmail(
  tx,
  {
    from: "Notify <notify@mail.acme.com>",
    to: ["ada@example.net"],
    subject: "Your workspace is ready",
    stream: "transactional",
    tags: { flow: "onboarding" },
  },
  <Html>
    <Head />
    <Body>
      <Container>
        <Heading>Welcome, Ada</Heading>
        <Text>Your workspace is ready.</Text>
      </Container>
    </Body>
  </Html>,
);
```

`renderReactEmail(element)` returns `{ html, text }` if you want to preview or send through the raw API. `sendReactEmail` renders both parts and replaces any `html`/`text` in the input.
