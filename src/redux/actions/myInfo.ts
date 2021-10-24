import { MyInfoActionType } from "./typings";
import { myInfoType } from "../../pages/Note/Content/AboutMe/typings";
import { UPDATEMYINFO } from "../constant";

export const createUpdateMyInfoAction:Function = (data:myInfoType):MyInfoActionType=> ({ type:UPDATEMYINFO, data })
