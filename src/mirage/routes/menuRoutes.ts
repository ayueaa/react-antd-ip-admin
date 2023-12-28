import { MenuList } from "@/interface/layout/menu.interface";
import { Notice } from "@/interface/layout/notice.interface";
import { Server } from "miragejs";

export default function setupMenuRoutes(server: Server) {
  // Visable数据概览
  server.get(
    "/user/menu",
    (): MenuList => [
      {
        code: "dashboard",
        label: {
          zh_CN: "首页",
          en_US: "Dashboard",
        },
        icon: "dashboard",
        path: "/dashboard",
      },
      {
        code: "documentation",
        label: {
          zh_CN: "文档",
          en_US: "Documentation",
        },
        icon: "documentation",
        path: "/documentation",
      },
      {
        code: "users",
        label: {
          zh_CN: "用户管理",
          en_US: "User Manage",
        },
        icon: "users",
        path: "/users",
      },
      {
        code: "guide",
        label: {
          zh_CN: "引导",
          en_US: "Guide",
        },
        icon: "guide",
        path: "/guide",
      },
      {
        code: "search",
        label: {
          zh_CN: "搜索",
          en_US: "Search",
        },
        icon: "search",
        path: "/search",
      },
      {
        code: "permission",
        label: {
          zh_CN: "权限",
          en_US: "Permission",
        },
        icon: "permission",
        path: "/permission",
        children: [
          {
            code: "routePermission",
            label: {
              zh_CN: "路由权限",
              en_US: "Route Permission",
            },
            path: "/permission/route",
          },
          {
            code: "notFound",
            label: {
              zh_CN: "404",
              en_US: "404",
            },
            path: "/permission/404",
          },
        ],
      },
      {
        code: "component",
        label: {
          zh_CN: "组件",
          en_US: "Component",
        },
        icon: "permission",
        path: "/component",
        children: [
          {
            code: "componentForm",
            label: {
              zh_CN: "表单",
              en_US: "Form",
            },
            path: "/component/form",
          },
          {
            code: "componentTable",
            label: {
              zh_CN: "表格",
              en_US: "Table",
            },
            path: "/component/table",
          },
          {
            code: "componentSearch",
            label: {
              zh_CN: "查询",
              en_US: "Search",
            },
            path: "/component/search",
          },
          {
            code: "componentAside",
            label: {
              zh_CN: "侧边栏",
              en_US: "Aside",
            },
            path: "/component/aside",
          },
          {
            code: "componentTabs",
            label: {
              zh_CN: "选项卡",
              en_US: "Tabs",
            },
            path: "/component/tabs",
          },
          {
            code: "componentRadioCards",
            label: {
              zh_CN: "单选卡片",
              en_US: "Radio Cards",
            },
            path: "/component/radio-cards",
          },
        ],
      },
    ]
  );
  server.get("/user/notice", (): Notice<"all">[] => [
    {
      id: "000000001",
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "你收到了 14 份新周报",
      datetime: "2017-08-09",
      type: "notification",
    },
    {
      id: "000000002",
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
      title: "你推荐的 曲妮妮 已通过第三轮面试",
      datetime: "2017-08-08",
      type: "notification",
    },
    {
      id: "000000003",
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
      title: "这种模板可以区分多种通知类型",
      datetime: "2017-08-07",
      read: true,
      type: "notification",
    },
    {
      id: "000000004",
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
      title: "左侧图标用于区分不同的类型",
      datetime: "2017-08-07",
      type: "notification",
    },
    {
      id: "000000005",
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "内容不要超过两行字，超出时自动截断",
      datetime: "2017-08-07",
      type: "notification",
    },
    {
      id: "000000006",
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
      title: "曲丽丽 评论了你",
      description: "描述信息描述信息描述信息",
      datetime: "2017-08-07",
      type: "message",
      clickClose: true,
    },
    {
      id: "000000007",
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
      title: "朱偏右 回复了你",
      description: "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像",
      datetime: "2017-08-07",
      type: "message",
      clickClose: true,
    },
    {
      id: "000000008",
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
      title: "标题",
      description: "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像",
      datetime: "2017-08-07",
      type: "message",
      clickClose: true,
    },
    {
      id: "000000009",
      title: "任务名称",
      description: "任务需要在 2017-01-12 20:00 前启动",
      extra: "未开始",
      status: "todo",
      type: "event",
    },
    {
      id: "000000010",
      title: "第三方紧急代码变更",
      description: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",
      extra: "马上到期",
      status: "urgent",
      type: "event",
    },
    {
      id: "000000011",
      title: "信息安全考试",
      description: "指派竹尔于 2017-01-09 前完成更新并发布",
      extra: "已耗时 8 天",
      status: "doing",
      type: "event",
    },
    {
      id: "000000012",
      title: "ABCD 版本发布",
      description: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",
      extra: "进行中",
      status: "processing",
      type: "event",
    },
  ]);
}
