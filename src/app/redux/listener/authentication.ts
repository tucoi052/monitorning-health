import { showSnack } from '@components';
import { takeLatestListeners } from '@listener';
import { ApiConstants, NetWorkService } from '@networking';

import { authenticationActions } from '../action-slice/authentication';

takeLatestListeners(true)({
  actionCreator: authenticationActions.login,
  effect: async (action, listenerApi) => {
    const { body } = action.payload;

    await listenerApi.delay(50);

    const params = {
      url: ApiConstants.LOGIN,
      body,
    };

    const response = await NetWorkService.Post(params, false, true);

    if (response?.code === 401) {
      showSnack({
        msg: 'Sai tên tài khoản mật khẩu',
        interval: 3000,
        type: 'error',
      });

      return;
    }
  },
});

takeLatestListeners(true)({
  actionCreator: authenticationActions.signUp,
  effect: async (action, listenerApi) => {
    const { body, onSucceeded } = action.payload;

    await listenerApi.delay(50);

    const params = {
      url: ApiConstants.SIGNUP,
      body,
    };

    const response = await NetWorkService.Post(params, false, true);

    if (response?.status) {
      onSucceeded?.(response);
    } else {
      showSnack({
        msg: 'Người dùng đã tồn tại!',
        interval: 3000,
        type: 'error',
      });
    }
  },
});
