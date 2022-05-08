import { FC } from "react";

export interface HistoryStateI {
  hash: string,
  key: string,
  pathname: string,
  search: string,
  from: string,
}

type RouterMapNameT<N extends string = string> = N;

type RouterMapNameLinksMapT<N extends string = string, L extends string = string> = {
  [key in RouterMapNameT<N>]: L;
};

export type RouterMapT<M extends RouterMapNameLinksMapT = RouterMapNameLinksMapT> = {
  [key in keyof M]: {
    link: M[key];
    Component: FC;
    isAuthRequired: boolean;
  }
};
