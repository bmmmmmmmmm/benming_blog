import { UPDATEMYINFO } from "../constant";
import { myInfoType } from "../../pages/Note/Content/AboutMe/typings";
import { MyInfoActionType } from "../actions/typings";

export const MyInfoInitState: myInfoType = {
  name: 'kbm',
  portrait: '',
  GitHub: 'https://github.com/bmmmmmmmmm',
  QQ: '157371849',
  WeChat: 'koubenming',
  email: 'www.koubenming@koubenming.com',
  AliPay: '',
  WeChatPay: '',
}
export default function myInfoReducer( preState=MyInfoInitState, action: MyInfoActionType) {
  const { type, data } = action;
  switch (type) {
    case UPDATEMYINFO:
      return data;
    default:
      return preState;
  }
}