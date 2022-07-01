import { createApp } from "vue";
// import { setupUI } from "./ui/";
import { setupRouter } from "./router/";
import { setupStore } from "./store/";
import { setupHttp } from "./http/";
import { setupI18n } from "./i18n/";
import { setupGloablErrorHandle } from "./error/";

import type { App } from "vue";
import type { ViteEnv, FrameworkConfig } from "./types/"


export class Setaria {

  config: FrameworkConfig;
  app: App<Element>

  constructor(config: FrameworkConfig, envParmas: ViteEnv, outterApp?: App<Element>) {
    // console.log("init Framework start");
    let app;
    if (outterApp) {
      app = outterApp;
    } else {
      app = createApp(config.render);
    }

    setupStore(app);

    setupHttp(config);

    setupRouter(app, config, envParmas);

    setupHttp(config);

    setupI18n(app, config);

    setupGloablErrorHandle(app, config);

    this.config = config;
    this.app = app;

  }

  mount() {
    this.app.mount(this.config.el);
  }
}


export { http } from "./http/";
export { store } from "./store/";
export { router } from "./router/";
export { i18n } from "./i18n/";
export { ServiceError } from "./error/ServiceError";
export { ApplicationError } from "./error/ApplicationError";
export type { ViteEnv, FrameworkConfig, HttpConfig, InterceptorRaw } from "./types/";


