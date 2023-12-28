// src/mirage/routes/documentRoutes.ts
import { Server } from "miragejs";
import {
  DocumentPageResult,
  DocumentHandleResult,
  Document,
} from "@/interface/document"; // 调整路径以匹配你的项目结构

export default function setupDocumentRoutes(server: Server) {
  server.get("/docs", (): DocumentPageResult => {
    return {
      items: [
        {
          title: "Spark中广播变量的使用: When,Why,How",
          content:
            "在Spark中，广播变量（Broadcast Variables）是一种用于将大型数据集或对象有效传",
          doc_id: "6557055f05a7cfeb4861271a",
          owner_id: "650c0e3b2578fde0f386eaea",
          created_at: "2023-11-17 14:17:03",
          updated_at: "2023-11-17 16:34:35",
        },
        {
          title: "使用dokcer镜像快速搭建ntp服务器实现时间同步",
          content:
            "使用镜像搭建ntp服务器，并在客户端调用进行定时时间同步。\n# 一、 ntp服务器搭建\n查询到有现成",
          doc_id: "65572aa905a7cfeb4861271b",
          owner_id: "650c0e3b2578fde0f386eaea",
          created_at: "2023-11-17 16:56:09",
          updated_at: "2023-11-17 16:56:09",
        },
      ],
      total: 10,
      page: 1,
      page_size: 10,
    };
  });

  server.post("/docs", (): Document => {
    return {
      title: "New Title",
      content: "content..",
      doc_id: "65572aa905a7cfeb4861271b",
      owner_id: "650c0e3b2578fde0f386eaea",
      created_at: "2023-11-17 16:56:09",
      updated_at: "2023-11-17 16:56:09",
    };
  });

  server.get("/docs/:id", (): Document => {
    return {
      title: "Spark中广播变量的使用: When,Why,How",
      content:
        '在Spark中，广播变量（Broadcast Variables）是一种用于将大型数据集或对象有效传递给所有集群节点的机制。本文将介绍如何使用广播变量以及何时应该使用它们，还将讨论如何在数据库连接池中使用广播变量。\n\n## 1. 如何使用广播变量？（以PySpark为例）\n\n广播变量的使用非常简单，以下是使用PySpark的示例：\n\n```python\nfrom pyspark import SparkContext\n\n# 创建SparkContext\nsc = SparkContext("local", "BroadcastExample")\n\n# 要广播的数据\ndata_to_broadcast = [1, 2, 3, 4, 5]\n\n# 广播数据\nbroadcast_data = sc.broadcast(data_to_broadcast)\n\n# 在集群上使用广播数据\nrdd = sc.parallelize([6, 7, 8, 9, 10])\nresult = rdd.map(lambda x: x + broadcast_data.value)\n\n# 停止SparkContext\nsc.stop()\n```\n\n上述示例中，我们创建了一个SparkContext，然后使用`sc.broadcast`方法广播了一个数据集，最后在集群上使用广播数据。\n\n## 2. 何时应该使用广播变量，何时不应该使用？\n\n**广播变量在以下情况下非常有用**：\n\n- 当您有一个大型数据集或对象需要在集群节点之间共享时，以避免在每个节点上复制数据（broadcast存储在集群中每个节点的内存中，确保分配了足够的内存来存储它）。\n- 当数据是只读的，不需要修改时。\n\n\n**不应该使用广播变量的情况包括**：\n\n- 当数据集较小，可以容易地复制到每个节点时，广播变量可能会引入不必要的开销。\n- 当需要在节点之间共享可变状态时，广播变量不适用。\n\n**如何更新广播变量**：\n- 一般来说需要频繁更新的变量不适合广播，若一定需要更新广播变量，你需要创建并引用一个新的广播变量值，并再次广播。\n\n**注意**：广播变量会被序列化后发送到集群的每个节点，注意该数据是否可被默认的序列化器支持。\n## 3. 数据库连接池如何使用广播变量？\n一般情况下，我们可以直接使用spark-数据库连接器实现数据交互，但如果连接器不适用时，我们可以考虑创建数据库连接池并广播的方式来使用数据库连接。\n在使用数据库连接池时，广播变量可以用于有效地共享连接池实例，以避免在每个任务中创建新的连接池。这可以提高性能和资源利用率。\n\n示例代码：\n\n```python\nfrom pyspark import SparkContext\nfrom pyspark.sql import SparkSession\n\n# 创建SparkContext和SparkSession\nsc = SparkContext("local", "DatabaseConnectionExample")\nspark = SparkSession(sc)\n\n# 创建数据库连接池\nconnection_pool = create_database_connection_pool()\n\n# 广播数据库连接池\nbroadcast_connection_pool = sc.broadcast(connection_pool)\n\n# 在Spark任务中使用广播连接池\ndef process_data(data):\n    # 从广播变量中获取数据库连接池\n    pool = broadcast_connection_pool.value\n    connection = pool.get_connection()\n    # 执行数据库操作\n    result = execute_database_query(connection, data)\n    # 释放连接\n    pool.release_connection(connection)\n    return result\n\n# 使用广播连接池处理数据\ndata_rdd = sc.parallelize(data)\nresults = data_rdd.map(process_data)\n\n# 停止SparkContext和SparkSession\nsc.stop()\n```\n\n在上述示例中，我们广播了数据库连接池，然后在Spark任务中使用广播连接池来获取数据库连接，执行操作并释放连接。\n\n',
      doc_id: "6557055f05a7cfeb4861271a",
      owner_id: "650c0e3b2578fde0f386eaea",
      created_at: "2023-11-17 14:17:03",
      updated_at: "2023-11-17 16:34:35",
    };
  });

  server.put("/docs/:id", (): DocumentHandleResult => {
    return {
      doc_id: "6557055f05a7cfeb4861271a",
      success: true,
      msg: "success",
    };
  });

  server.delete("/docs/:id", (): DocumentHandleResult => {
    return {
      doc_id: "6557055f05a7cfeb4861271a",
      success: true,
      msg: "success",
    };
  });
}
