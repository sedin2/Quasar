import { boot } from 'quasar/wrappers';
import { Dark, LocalStorage } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // darkMode setting
  const init = () => {
    const darkMode = LocalStorage.getItem('darkMode');
    Dark.set(darkMode);
  };
  init();
});
