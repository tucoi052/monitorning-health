export type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
  ? { screen: K; params?: ParamList[K] }
  : { screen: K; params: ParamList[K] };
}[keyof ParamList];

export type IncludeMatchingProperties<T, V> = Pick<
  T,
  { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T]
>;

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

export interface IRenderItemProps<T> {
  item: T;
  index: number;
}

export type ActionBase<T = undefined> = T extends undefined
  ? {
    type: string;
  }
  : {
    type: string;
    payload: T;
  };

export type ReOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
