import { createI18n } from "vue-i18n";
import { App } from "vue";
import type { FrameworkConfig } from "../types/";
import type { I18nOptions } from "vue-i18n";
// 创建实例
export let i18n;

export const setupI18n = function (app: App, config: FrameworkConfig) {
  if (config?.i18n) {
    i18n = createI18n(config?.i18n as I18nOptions);
    app.use(i18n);
  }
};
