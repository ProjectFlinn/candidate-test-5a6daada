import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./types/envVariables";
import "./index.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode!);

const queryClient = new QueryClient();

root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </BrowserRouter>
);
registerServiceWorker();
