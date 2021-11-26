"use strict";

const { NodeTracerProvider } = require("@opentelemetry/node");
const {
  SimpleSpanProcessor,
  ConsoleSpanExporter,
} = require("@opentelemetry/tracing");

const provider = new NodeTracerProvider({});

provider.register();

provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
