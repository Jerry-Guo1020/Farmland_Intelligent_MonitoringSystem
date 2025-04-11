// import React from "react";
// import { House, Diameter,ClipboardPenLine,ChartColumnIncreasing,MonitorCheck,MessageCircleMore } from "lucide-react";

// const page = () => {
//   return (
//     <div className="flex bg-blue-300 h-20 p-6">
//       <p className="font-bold text-2xl pr-15 text-center">智农慧眼•慧眼智控

//       </p>

//       <div className="px-5 rounded-xl border-solid">
//         <div className="flex text-center px-10 py-2 ">

//           <div className="flex items-center px-5">
//             <House />
//             <a className="px-3 font-semibold " href="/">
//               首页
//             </a>
//           </div>


//           <div className="flex items-center px-8">
//             <Diameter />
//             <a className="px-3 font-semibold" href="checkenvironment">
//               环境数据监测
//             </a>
//           </div>  



//           <div className="flex items-center px-8">
//           <MonitorCheck />
//           <a className="px-3 font-semibold" href="decision">
//             智慧农业决策
//           </a>
//           </div>

//           <div className="flex items-center px-8">
//           <ClipboardPenLine />
//           <a className="px-3 font-semibold" href="manage">
//             智慧农业管理
//             </a>
//           </div>

//           <div className="flex items-center px-8">

//           <ChartColumnIncreasing />
//           <a className="px-3 font-semibold" href="server">
//             智慧农业服务
//           </a>
//           </div>


//           <div className="flex items-center px-8">
//           <MessageCircleMore />
//           <a className="px-3 font-semibold" href="community">
//             社区分享中心
//           </a>
//           </div>  
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;





//学习内容开始了


import React from "react";
import {
  House,
  Diameter,
  ClipboardPenLine,
  ChartColumnIncreasing,
  MonitorCheck,
  MessageCircleMore,
} from "lucide-react";


const Navbaritem =[
  {icon: <House /> , label: "首页" ,href: "/"},
  {icon: <Diameter /> , label: "环境数据监测" ,href: "/checkenvironment"},
  {icon: <MonitorCheck /> , label: "智慧农业决策" ,href: "/decision"},
  {icon: <ClipboardPenLine /> , label: "智慧农业管理" ,href: "/manage"},
  {icon: <ChartColumnIncreasing /> , label: "智慧农业服务" ,href: "/server"},
  {icon: <MessageCircleMore /> , label: "社区分享中心" ,href: "/community"},
]


const NavbarPage = () => {
return (
<div className="flex items-center justify-between bg-blue-300 h-20 p-6 shadow-md">
<p className="font-bold text-2xl pr-15 text-center">智农慧眼•慧眼智控</p>
<div className="flex justufy-between items-center space-x-6">
  {Navbaritem.map((item,index) =>(
    <a key={index}
    href={item.href}
    className="flex items-center px-5 py-2"
    >
{item.icon}
<span className="px-3 font-semibold">{item.label}</span>
    </a>
  ))}
</div>
</div>
);
};

export default NavbarPage;
