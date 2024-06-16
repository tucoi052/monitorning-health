import { logout } from '@common';
import {
  CODE_SUCCESS,
  CODE_TIME_OUT,
  ERROR_NETWORK_CODE,
  RESULT_CODE_PUSH_OUT,
  STATUS_TIME_OUT,
} from '@config/api';
import { ParamsNetwork, ResponseBase } from '@config/type';
import { translate } from '@utils/i18n/translate';
import { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';

export const handleErrorApi = (status: number) => {
  const result = { status: false, code: status, msg: '' };

  result.msg = 'error:' + status;

  return result;
};

const responseDefault = {
  code: -500,
  status: false,
  msg: translate('error:-100'),
};

export const onPushLogout = async () => {
  logout();
  /**
   * do something when logout
   */
};

export const handleResponseAxios = <T = Record<string, unknown>>(
  res: AxiosResponse<T>,
): ResponseBase<T> => {
  if (res.data || res.status === 200 || res.status === 201) {
    return { code: CODE_SUCCESS, status: true, data: res.data };
  }

  return responseDefault as ResponseBase<T>;
};

export const handleErrorAxios = (error: AxiosError) => {
  if (error.code === STATUS_TIME_OUT) {
    // timeout
    return handleErrorApi(CODE_TIME_OUT);
  }

  if (error.response) {
    if (error.response.status === RESULT_CODE_PUSH_OUT) {
      onPushLogout();

      return handleErrorApi(RESULT_CODE_PUSH_OUT);
    } else {
      return handleErrorApi(error.response.status);
    }
  }

  return handleErrorApi(ERROR_NETWORK_CODE);
};

export const handlePath = (url: string, path: ParamsNetwork['path']) => {
  if (!path || Object.keys(path).length <= 0) {
    return url;
  }

  let resUrl = url;
  Object.keys(path).forEach(k => {
    resUrl = resUrl.replaceAll(`{${k}}`, String(path[k]));

    resUrl = resUrl.replaceAll(`:${k}`, String(path[k]));
  });

  return resUrl;
};

export const handleParameter = <T extends ParamsNetwork>(
  props: T,
  method: Method,
): AxiosRequestConfig => {
  const { url, body, path, params } = props;

  return {
    ...props,
    method,
    url: handlePath(url, path),
    data: body,
    params,
  };
};
