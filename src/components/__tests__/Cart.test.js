import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";

import appStore from "../../redux/appStore";

import MOCK_DATA from "../mocks/restaurantMenu.mock.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("", () => {
  test("Should load Restaurant Menu component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Dessert (3)");

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    const addButton = screen.getAllByRole("button", { name: "Add +" });

    expect(screen.getByText("cart 0")).toBeInTheDocument();

    fireEvent.click(addButton[0]);

    expect(screen.getByText("cart 1")).toBeInTheDocument();

    fireEvent.click(addButton[2]);

    expect(screen.getByText("cart 2")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    fireEvent.click(screen.getByRole("button", { name: "Clear cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    expect(screen.getByText("Cart is empty")).toBeInTheDocument();
  });
});
