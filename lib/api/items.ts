import { url } from "../../weburl";

export const fetchItems = async () => {
  const response = await fetch(`${url}items`);
  return response.json();
};


export const fetchOneItem = async (id) => {
  const response = await fetch(`${url}items/${id}`);
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


export const SearchItem = async (query) => {
  const response = await fetch(`${url}items/search/search?keyword=${query}`);
  return response.json();
};

