import Image from 'next/image';
export default function Example() {
    return (
        <div className="min-h-screen overflow-y-auto select-none">
            <div className="bg-white">
                <div>
                    <div className="relative isolate overflow-hidden bg-emerald-600 -sm:px-0 md:pt-60 lg:flex lg:gap-x-20 ">
                           
                        
                        <div className="max-w-md text-center lg:mx-15 lg:flex-auto lg:py-3 lg:text-left">
                            
                            <h2 className=" font-semibold tracking-tight  text-white sm:text-4xl select-none">
                            智农慧眼•慧眼智控
                            </h2>
                            <h2 className=" font-semibold tracking-tight  text-white-500 sm:text-3xl md:pt-3 ">
                                农田智能监测与决策支持系统
                            </h2>
                            <p className="mt-5 text-lg/9 text-pretty text-gray">
                                农业是人类赖以生存的基础，是农民的生命之源.<br></br>以科技之名，精准洞察农田每一寸生机.<br></br>智能决策开启丰收新篇，
                                <br></br>让农业更智慧，让大地更丰饶！
                            </p>
                            <div className="mt-15  flex items-center justify-center gap-x-10 lg:justify-start">
                                <a
                                    href="#"
                                    className="rounded-md bg-white px-10 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    开始使用
                                </a>
                                <a href="#" className="text-sm/6 font-semibold text-white">
                                    了解更多 
                                    <span aria-hidden="true">
                                        →</span>
                                </a>

                            </div>
                        </div>
                        <div className="relative mt-200 h-148 lg:-mt-35  lg:mb-35">
                            <img
                                alt="App screenshot"
                                src="/image/one.png"
                                width={1824}
                                height={1080}
                                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}