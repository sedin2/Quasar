import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { LocalStorage } from 'quasar';
import messages from 'src/i18n';

// const messages = {
//   'en-US': {
//     productName: 'Quasar App',
//   },
//   'ko-KR': {
//     productName: '퀘이사 앱',
//   },
// };

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  const locale = LocalStorage.getItem('lang') || 'ko-KR';
  const i18n = createI18n({
    locale,
    legacy: false,
    messages,
  });

  app.use(i18n);
});
