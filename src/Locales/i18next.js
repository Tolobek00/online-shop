import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./en/translition.json"
import translationKy from "./ky/translition.json"
import translationRu from "./ru/translition.json"

i18n.use(initReactI18next).init({
    resources: {
        en:{
            translation: translationEn
        },
        ru: {
            translation:translationRu
        },
        ky: {
            translation:translationKy
        }
    }, 
    lng: 'ky'
})

export default i18n