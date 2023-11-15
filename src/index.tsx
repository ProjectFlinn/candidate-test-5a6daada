import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { App } from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode!);

const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
    </QueryClientProvider>
);
registerServiceWorker();
