import React from "react";
import { House } from "lucide-react";

const page = () => {
  return (
    <div className="flex bg-blue-300 h-20 p-6">
      <p className="font-bold text-3xl pr-15">智农慧眼•慧眼智控</p>

      <div className="px-5 rounded-xl border-solid">
      <div className="flex text-center px-10 py-2 ">
      <House />
        <a className="px-8 font-semibold " href="/">首页</a>
        
        <a className="px-8 font-semibold" href="checkenvironment">环境数据监测</a>
        <a className="px-8 font-semibold" href="decision">智慧农业决策</a>
        <a className="px-8 font-semibold" href="manage">智慧农业管理</a>
        <a className="px-8 font-semibold" href="server">智慧农业服务</a>
        <a className="px-8 font-semibold" href="community">社区分享中心</a>
        
      </div>
      </div>
    </div>
  );
};

export default page;
