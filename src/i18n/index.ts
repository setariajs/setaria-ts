import { createI18n } from 'vue-i18n'
import { App } from "vue";
import type { FrameworkConfig } from "../types/"



// 创建实例
export let i18n;


export const setupI18n = function (app: App, config: FrameworkConfig) {
  i18n = createI18n(config.i18n)
  app.use(i18n)
};
