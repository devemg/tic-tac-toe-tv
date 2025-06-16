export type LanguageOption = { language: string; code: string };


export const supportedLanguages: { [key: string]: string } = {
  'en': "English",
  'es': "Español",
}

export const languageOptions: LanguageOption[] = Object.keys(supportedLanguages).map((lang) => ({
  language: supportedLanguages[lang],
  code: lang,
}));
