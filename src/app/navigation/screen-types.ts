import { HealthEnum } from '@common';
export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  VERIFY = 'VERIFY',
  SEARCH = 'SEARCH',
  DETAIL_OUTSTANDING = 'DETAIL_OUTSTANDING',

  BOTTOM_TAB = 'BOTTOM_TAB',

  AUTHORIZE = 'AUTHORIZE',
  COMMUNITY_RULE = 'COMMUNITY_RULE',
  LINK_DETAIL = 'LINK_DETAIL',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  CREATE_NEW_PASSWORD = 'CREATE_NEW_PASSWORD',

  //home stack
  HOME_STACK = 'HOME_STACK',
  HOME = 'HOME',
  INFO = 'INFO',
  DETAIL = 'DETAIL',
  IDOL = 'IDOL',
  AGENCY = 'AGENCY',
  NEWS = 'NEWS',
  POSTS = 'POSTS',
  NOTIFICATION = 'NOTIFICATION',
  NOTIFICATION_DETAIL = 'NOTIFICATION_DETAIL',
  POST_DETAILS = 'POST_DETAILS',
  SEARCH_POST = 'SEARCH_POST',
  SEARCH_CONVERSATION = 'SEARCH_CONVERSATION',
  STORE = 'STORE',
  ABOUT_HP = 'ABOUT_HP',
  ABOUT_APP = 'ABOUT_APP',
  DETAIL_DOMESTIC = 'DETAIL_DOMESTIC',

  //chat stack
  MESSAGE_STACK = 'MESSAGE_STACK',
  MESSAGE = 'MESSAGE',
  MESSAGE_DETAILS = 'MESSAGE_DETAILS',

  //sound stack
  SOUND_STACK = 'SOUND_STACK',
  SOUND = 'SOUND',

  //setting stack
  SETTING_STACK = 'SETTING_STACK',
  SETTING = 'SETTING',
  PROFILE = 'PROFILE',
  EVENT_MANAGER = 'EVENT_MANAGER',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  POLICY = 'POLICY',

  //live call stack
  LIVE_CALL = 'LIVE_CALL',
  LIVE_CALL_DETAIL = 'LIVE_CALL_DETAIL',
  CALL_MANAGE = 'CALL_MANAGE',

  RANK_VOTE = 'RANK_VOTE',
}

export type UnAuthorizeParamsList = {
  [APP_SCREEN.LOGIN]: undefined;
  [APP_SCREEN.REGISTER]: undefined;
  [APP_SCREEN.SPLASH]: undefined;
  [APP_SCREEN.BOTTOM_TAB]: undefined;
  [APP_SCREEN.VERIFY]: { email: string; type: 'FORGOT' | 'SIGN_UP' };
  [APP_SCREEN.COMMUNITY_RULE]: undefined;
  [APP_SCREEN.FORGOT_PASSWORD]: undefined;
  [APP_SCREEN.CREATE_NEW_PASSWORD]: { email: string; code: string };
};

export type AuthorizeParamsList = {
  [APP_SCREEN.HOME]: undefined;
  [APP_SCREEN.INFO]: {
    peripheralData: any;
    peripheral: any;
  };
  [APP_SCREEN.DETAIL]: { type?: HealthEnum };
  [APP_SCREEN.IDOL]: undefined;
  [APP_SCREEN.AGENCY]: undefined;
  [APP_SCREEN.NEWS]: undefined;
  [APP_SCREEN.POSTS]: undefined;
  [APP_SCREEN.SOUND]: undefined;
  [APP_SCREEN.SETTING]: undefined;
  [APP_SCREEN.MESSAGE]: undefined;
  [APP_SCREEN.MESSAGE_DETAILS]: {
    conversationId: number;
    type: string;
  };
  [APP_SCREEN.LINK_DETAIL]: { url: string; onShowVoting?: () => void };
  [APP_SCREEN.PROFILE]: undefined;
  [APP_SCREEN.EVENT_MANAGER]: undefined;
  [APP_SCREEN.CHANGE_PASSWORD]: undefined;
  [APP_SCREEN.POLICY]: undefined;
  [APP_SCREEN.NOTIFICATION]: undefined;
  [APP_SCREEN.SEARCH]: undefined;
  [APP_SCREEN.POST_DETAILS]: { postId: number };
  [APP_SCREEN.SEARCH_POST]: undefined;
  [APP_SCREEN.SEARCH_CONVERSATION]: undefined;
  [APP_SCREEN.STORE]: undefined;
  [APP_SCREEN.ABOUT_HP]: undefined;
  [APP_SCREEN.ABOUT_APP]: undefined;
  [APP_SCREEN.LIVE_CALL_DETAIL]: undefined;
  [APP_SCREEN.CALL_MANAGE]: undefined;
  [APP_SCREEN.LIVE_CALL]: undefined;
  [APP_SCREEN.RANK_VOTE]: undefined;
};

export type RootStackParamList = {
  [APP_SCREEN.UN_AUTHORIZE]: undefined;
  [APP_SCREEN.AUTHORIZE]: undefined;
} & UnAuthorizeParamsList &
  AuthorizeParamsList;
