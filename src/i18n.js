import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
         addList: "Add to the list",
         searchBoxLabel: "Search movie by name:",
         searchBoxPlaceHolder: "For example, Shawshank Redemption",
         searchButton: "Search",
         saveButton: "Save list",
         list: "List",
         pleaseEnterName: "Enter a list name:"
        }
      },
      az: {
        translation: {
         addList: "Siyahıya əlavə edin",
         searchBoxLabel: "Filmin adını yazın:",
         searchBoxPlaceHolder: "Məsələn, Shawshank Redemption",
         searchButton: "Axtar",
         saveButton: "Siyahını yadda saxla",
         list: "Siyahı",
         pleaseEnterName: "Siyahı adını daxil edin:"

        }
      },
      ru: {
        translation: {
         addList: "Добавить в список",
         searchBoxLabel: "Искать фильм по названию:",
         searchBoxPlaceHolder: "Например, Shawshank Redemption",
         searchButton: "Искать",
         saveButton: "Сохранить список",
         list: "Список",
         pleaseEnterName: "Вставить имя списка:"
        }
      },
    }
  });

export default i18n;