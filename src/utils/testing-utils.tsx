import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { render, RenderOptions } from "@testing-library/react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient();

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </BrowserRouter>
    );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
    render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
