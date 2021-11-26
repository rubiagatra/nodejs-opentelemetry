"use strict";

const { NodeTracerProvider } = require("@opentelemetry/node");
const { SimpleSpanProcessor } = require("@opentelemetry/tracing");
const { ZipkinExporter } = require("@opentelemetry/exporter-zipkin");

const provider = new NodeTracerProvider({});

provider.register();

provider.addSpanProcessor(
  new SimpleSpanProcessor(
    new ZipkinExporter({
      serviceName: "getting-started",
      // If you are running your tracing backend on another host,
      // you can point to it using the `url` parameter of the
      // exporter config.
    })
  )
);
