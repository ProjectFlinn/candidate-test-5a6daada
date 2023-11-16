import React from "react";
import { App } from "./App";
import { render, screen } from "utils/testing-utils";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { testData } from "../utils/testData";
import "@testing-library/jest-dom";

jest.mock("axios");

beforeEach(() => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: testData });
});

it("renders without crashing", () => {
    render(<App />);
});

it("allows the user to filter by category", async () => {
    render(<App />);

    const selectElement = screen.getByRole("combobox", { name: /category/i }) as HTMLSelectElement;
    await userEvent.selectOptions(selectElement, "wizard");
    expect(selectElement.value).toBe("wizard");

    let ganfalfText: HTMLElement | null = screen.getByText(/gandalf the grey/i);
    expect(ganfalfText).toBeInTheDocument();

    let gimliText = screen.queryByText(/gimli/i);
    expect(gimliText).not.toBeInTheDocument();

    await userEvent.selectOptions(selectElement, "dwarf");
    expect(selectElement.value).toBe("dwarf");

    ganfalfText = screen.queryByText(/gandalf the grey/i);
    expect(ganfalfText).not.toBeInTheDocument();

    gimliText = screen.queryByText(/gimli/i);
    expect(gimliText).toBeInTheDocument();
});
