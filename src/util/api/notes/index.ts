import instance from "../../request";

export const getNotes = () =>
  instance({
    url: "/showNote",
    method: "GET"
  })