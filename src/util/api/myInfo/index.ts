import instance from "../../request";
import { myInfoType } from "../../../pages/Note/Content/AboutMe/typings";

export const getMyInfo = () =>
  instance({
    url: "/gainMyInfo",
    method: "get",
  })

export const refreshMyInfo = (myInfo: myInfoType) => 
  instance({
    url: "/refreshMyInfo",
    method: "post",
    data:{ myInfo }
  })