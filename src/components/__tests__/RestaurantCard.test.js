import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RestaurantCard from "../RestaurantCard";

import MOCK_DATA from "../mocks/restaurantCard.mock.json";

describe("RestaurantCard Component test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After all");
  // });

  // afterEach(() => {
  //   console.log("After each");
  // });

  test("Should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();
  });

  // test("Should render RestaurantCard component with PROMOTED label", () => {
  //   // test Higher Order Component: withPromotedLabel()
  // });
});
