import React from "react";
import { renderReactEmail } from "./index.js";

const element = React.createElement("div", null,
  React.createElement("h1", null, "Hello Ada"),
  React.createElement("p", null, "Your workspace is ready."),
);
const { html, text } = await renderReactEmail(element);
if (!html.includes("Hello Ada") || !html.includes("workspace")) throw new Error("html missing content");
if (!text.toLowerCase().includes("hello ada")) throw new Error("text missing content");
console.log("ok", html.length, text.length);
