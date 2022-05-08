import {FC, ReactNode} from 'react';

import Header from "../components/header/headerComponent";

import {AppRouitingList, AppDefaultHeaderLinks} from '../routing/headerMap';

interface RootPageProps {
  nameOfActive: string;
  children?: ReactNode;
}


// //////////////////////////////////////////////////////
//
//        Стандартная страница приложения
//        Все вложенные элементы обернуты
//        в блок .page__content
//
// //////////////////////////////////////////////////////


const RootPage: FC<RootPageProps> = ({nameOfActive, children}) => {
  return (
    <>
    <Header headerLinksMap={AppRouitingList} displayedNames={AppDefaultHeaderLinks} nameOfActive={nameOfActive}/>
      <div className='page__content'>
        {children}
      </div>
    </>
  )
}

export default RootPage;