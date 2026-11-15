import type { ReactElement } from "react";

export interface RenderedEmail {
  html: string;
  text: string;
}

export function renderReactEmail(element: ReactElement): Promise<RenderedEmail>;

export function sendReactEmail(
  transmitly: { emails: { send: (input: Record<string, unknown>) => Promise<unknown> } },
  input: Record<string, unknown>,
  element: ReactElement,
): Promise<unknown>;
