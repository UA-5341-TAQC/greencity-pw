import { Language, MenuItem } from './header.types';

export interface HeaderI18n {
  navigation: Record<MenuItem, string>;
  signIn: string;
  signUp: string;
  signOut: string;
  personalAccount: string;
}

export const HEADER_I18N: Record<Language, HeaderI18n> = {
  [Language.En]: {
    navigation: {
      [MenuItem.EcoNews]: 'Eco News',
      [MenuItem.Events]: 'Events',
      [MenuItem.Places]: 'Places',
      [MenuItem.AboutUs]: 'About Us',
      [MenuItem.MySpace]: 'My Space',
    },
    signIn: 'Sign in',
    signUp: 'Sign up',
    signOut: 'Sign out',
    personalAccount: 'Personal account',
  },
  [Language.Uk]: {
    navigation: {
      [MenuItem.EcoNews]: 'Еко Новини',
      [MenuItem.Events]: 'Події',
      [MenuItem.Places]: 'Карта',
      [MenuItem.AboutUs]: 'Про Нас',
      [MenuItem.MySpace]: 'Мій Кабінет',
    },
    signIn: 'Увійти',
    signUp: 'Зареєструватися',
    signOut: 'Вийти',
    personalAccount: 'Особистий кабінет',
  },
};
