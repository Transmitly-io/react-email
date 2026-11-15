import { render } from "@react-email/render";

/**
 * Render a React Email element to HTML and plain text.
 * @param {import("react").ReactElement} element
 * @returns {Promise<{ html: string, text: string }>}
 */
export async function renderReactEmail(element) {
  const [html, text] = await Promise.all([
    render(element),
    render(element, { plainText: true }),
  ]);
  return { html, text };
}

/**
 * Render a React Email element and send it with @transmitly/sdk.
 * Any html/text in the input is replaced by the rendered parts.
 * @param {{ emails: { send: (input: object) => Promise<unknown> } }} transmitly
 * @param {object} input
 * @param {import("react").ReactElement} element
 */
export async function sendReactEmail(transmitly, input, element) {
  const { html, text } = await renderReactEmail(element);
  return transmitly.emails.send({ ...input, html, text });
}
