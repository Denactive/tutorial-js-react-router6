// godlike ts
// https://stackoverflow.com/questions/45251664/typescript-derive-union-type-from-tuple-array-values

// export const AppRoutingList = {
//   'Main':  ['/',    'Главная'],
//   'About': ['/about', 'О нас'],
//   'Auth':  ['/login',  'Вход'],
// } as const;


// //////////////////////////////////////////////////////
//
//              Конфиг приложения: Header
//                   [Основной конфиг]
//
// //////////////////////////////////////////////////////

export const AppRouitingList = {
  'Main': {
    link: '/',
    headerSign: 'Главная',
    headerDefaultDisplay: true,
  },
  'About': {
    link: '/about',
    headerSign: 'О нас',
    headerDefaultDisplay: true,
  },
  'Auth': {
    link: '/login',
    headerSign: 'Вход',
    headerDefaultDisplay: false,
  }
} as const;

export type AppPageNameT = keyof typeof AppRouitingList;
export type AppLinksT = typeof AppRouitingList[AppPageNameT]['link'];
export type AppHeaderSignsT = typeof AppRouitingList[AppPageNameT]['headerSign'];
export type NameLinksMapT = {
  [key in AppPageNameT]: typeof AppRouitingList[key]['link'];
};
export const AppDefaultHeaderLinks = (Object.keys(AppRouitingList) as AppPageNameT[])
    .filter((key) => AppRouitingList[key]['headerDefaultDisplay']);
