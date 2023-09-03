import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Body from "../Body";

import MOCK_DATA from "../mocks/restaurantsList.mock.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Body Component test cases", () => {
  test("Should search Restaurants List for 'pizza' text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    // Checking before search
    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    // Checking after search
    const searchButton = screen.getByRole("button", { name: "Search" });

    // const searchInput = screen.getByPlaceholderText("Search for restaurants");
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "pizza" } });

    fireEvent.click(searchButton);

    // Screen should load 3 cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(3);
  });

  test("Should filter Top Rated Restaurants from Restaurants List", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    // Checking before search
    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    // Checking after search
    const topRatedButton = screen.getByRole("button", {
      name: "Top rated restaurants",
    });

    fireEvent.click(topRatedButton);

    // Screen should load 3 cards
    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(12);
  });

  test("Should filter Veg Restaurants from Restaurants List", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    // Checking before search
    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    // Checking after search
    const vegResButton = screen.getByRole("button", {
      name: "Veg restaurants",
    });

    fireEvent.click(vegResButton);

    // Screen should load 3 cards
    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(7);
  });
});
