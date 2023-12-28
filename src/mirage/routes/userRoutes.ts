import { Server } from "miragejs";
import {
  Role,
  User,
  LoginParams,
  LoginResult,
  LogoutParams,
  RegisterParams,
  RegisterResult,
  RequestVerifyTokenParams,
  VerifyParams,
  UserInfo,
  UserPageResult,
  UserUpdateData,
} from "@/interface/user/login";

export default function setupUserRoutes(server: Server) {
  // 登录接口
  server.post("/auth/jwt/login", (schema, request) => {
    // 根据params.username和params.password进行验证...
    // 返回登录结果
    const result: LoginResult = {
      access_token: "mocked-token",
      token_type: "bearer",
    };
    return result;
  });

  // 登出接口
  server.post("/auth/jwt/logout", (schema, request) => {
    // 处理登出逻辑...
    return {};
  });

  // 注册接口
  server.post("/auth/register", (schema, request) => {
    const params: RegisterParams = JSON.parse(request.requestBody);
    // 处理注册逻辑...
    const result: RegisterResult = {
      id: "mocked-id",
      email: params.email,
      is_active: true,
      is_superuser: false,
      is_verified: false,
    };
    return result;
  });

  // 请求验证Token接口
  server.post("/auth/request-verify-token", (schema, request) => {
    const params: RequestVerifyTokenParams = JSON.parse(request.requestBody);
    // 处理请求验证逻辑...
    console.log("mock send token to email Success");
    return {};
  });

  // 验证接口
  server.post("/auth/verify", (schema, request) => {
    const params: VerifyParams = JSON.parse(request.requestBody);
    // 处理验证逻辑...
    console.log("mock verify token from email Success");
    return {}; // 返回相应的验证结果
  });

  // 获取用户信息
  server.get("/users/me", () => {
    // 返回模拟的用户信息
    const userInfo: UserInfo = {
      id: "mocked-id",
      email: "user1@example.com",
      is_active: true,
      is_superuser: true,
      is_verified: true,
    };
    return userInfo;
  });

  // 列出用户
  server.get("/users", (schema, request) => {
    // 返回用户分页结果
    const pageResult: UserPageResult = {
      total: 1,
      page: 1,
      page_size: 10,
      items: [
        {
          id: "mocked-id-1",
          email: "user1@example.com",
          is_active: true,
          is_superuser: true,
          is_verified: true,
        },
        {
          id: "mocked-id-2",
          email: "user2@xample.com",
          is_active: true,
          is_superuser: false,
          is_verified: true,
        },
        {
          id: "mocked-id-3",
          email: "user3@xample.com",
          is_active: true,
          is_superuser: false,
          is_verified: false,
        },
      ],
    };
    return pageResult;
  });

  // 更新用户
  server.patch("/users/:id", (schema, request) => {
    const id = request.params.id;
    const data: UserUpdateData = JSON.parse(request.requestBody);
    // 更新用户逻辑...
    return {}; // 返回更新后的用户信息
  });

  // 删除用户
  server.delete("/users/:id", (schema, request) => {
    const id = request.params.id;
    // 删除用户逻辑...
    return {}; // 返回204无内容响应
  });
}
