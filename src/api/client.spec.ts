import axios, { AxiosResponse } from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("products unit tests", () => {
  test("should return product list", async () => {
    const products = [
      {
        id: 1,
        title: "Product 1",
        description: "Description 1",
        price: "1.00",
      },
      {
        id: 2,
        title: "Product 2",
        description: "Description 2",
        price: "2.00",
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({
      data: products,
    } as AxiosResponse);

    const result = await axios.get("products");

    expect(result.data).toEqual(products);
  });

  test("should return error", async () => {
    const error = new Error("Error");

    mockedAxios.get.mockRejectedValueOnce(error);

    try {
      await axios.get("products");
    } catch (e) {
      expect(e).toEqual(error);
    }
  });

  test("should return error if response status is not 200", async () => {
    const error = new Error("Error");

    mockedAxios.get.mockResolvedValueOnce({
      status: 500,
      data: {
        error: "Error",
      },
    } as AxiosResponse);

    try {
      await axios.get("products");
    } catch (e) {
      expect(e).toEqual(error);
    }
  });

  test("should post a new product", async () => {
    const product = {
      title: "Product 1",
      description: "Description 1",
      price: "1.00",
    };

    mockedAxios.post.mockResolvedValueOnce({
      data: product,
    } as AxiosResponse);

    const result = await axios.post("products", product);

    expect(result.data).toEqual(product);
  });
});
