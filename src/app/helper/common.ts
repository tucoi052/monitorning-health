import { images } from '@assets/image';
import { ENVConfig } from '@config/env';
import moment from 'dayjs';

export const getAvatar = (uri?: string) => {
  if (uri && uri.includes(ENVConfig.CDN)) {
    return { uri };
  } else if (uri && !uri.includes(ENVConfig.CDN)) {
    return { uri: ENVConfig.CDN + uri };
  }

  return images.avatar;
};

export const getImage = (uri?: string) => {
  if (uri && uri.includes(ENVConfig.CDN)) {
    return { uri };
  } else if (uri && !uri.includes(ENVConfig.CDN)) {
    return { uri: ENVConfig.CDN + uri };
  }

  return images.avatar;
};

export const getImageUri = (uri?: string) => {
  if (uri && uri.includes(ENVConfig.CDN)) {
    return uri;
  } else if (uri && !uri.includes(ENVConfig.CDN)) {
    return ENVConfig.CDN + uri;
  }

  return ENVConfig.CDN + uri;
};

export const htmlFormat = (html: string | undefined) => {
  return {
    html: html ? html : '',
  };
};

export const rangeDateFormat = (startDate: string, endDate: string) => {
  const startDay = moment(startDate).date();

  const startMonth = moment(startDate).month() + 1;

  const endDay = moment(endDate).date();

  const endMonth = moment(endDate).month() + 1;

  return `${startDay} tháng ${startMonth} - ${endDay} tháng ${endMonth}`;
};

export const checkHtml = (text: string) => {
  const expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

  const regex = new RegExp(expression);

  return text.match(regex);
};

export const formatCurrency = (coin: string) => {
  const amount = parseFloat(coin);

  return amount.toFixed(0).replace(/(\d)(?=(\d{3})+\b)/g, '$1,');
};

export const tagsStylesHtml = {
  li: {
    color: '#343441',
  },
  ul: {
    color: '#343441',
  },
  p: {
    color: '#343441',
  },
};
