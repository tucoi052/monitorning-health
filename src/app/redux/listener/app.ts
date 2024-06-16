import {
  checkKeyInObject,
  // STORAGE_KEY_APP_THEME,
  // STORAGE_KEY_TOKEN,
} from '@common';
import { takeLatestListeners } from '@listener';
import { ApiConstants, NetWorkService } from '@networking';
import { loadString } from '@utils/storage';
import { appActions } from '../action-slice/app';

takeLatestListeners()({
  actionCreator: appActions.startLoadApp,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(appActions.endLoadApp());
  },
});
