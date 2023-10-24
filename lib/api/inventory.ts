import { url } from "../../weburl";

export const fetchInventories = async () => {
  const response = await fetch(`${url}inventories`);
  return response.json();
};



export const AddInventory = async (body) => {

  const response = await fetch(`${url}inventories`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
  });
  return response.json();
};


export const SearchInventory = async (query) => {
  const response = await fetch(`${url}inventories/search/s?query=${query}`);
  return response.json();
};

