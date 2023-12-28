import { createServer } from "miragejs";

import setupMockRoutes from "./routes";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api"; // 根据实际API的命名空间调整

      // 设置Document相关路由
      setupMockRoutes(this);
    },
  });

  return server;
}
