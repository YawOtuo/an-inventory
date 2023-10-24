import { url } from "../../weburl";

export const fetchItems = async () => {
  const response = await fetch(`${url}items`);
  return response.json();
};



export const AddItems = async (body) => {
  
  const response = await fetch(`${url}items`, {
    method: "POST",
    body: JSON.stringify(body),
    mode: "cors",
    headers: new Headers({'content-type': 'application/json'}),

  });
  return response.json();
};


export const SearchInventory = async (query) => {
  const response = await fetch(`${url}inventories/search/s?query=${query}`);
  return response.json();
};

