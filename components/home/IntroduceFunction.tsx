'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from '../ui/card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { useTheme } from "next-themes"
  import { SunIcon, MoonIcon, BellIcon } from '@heroicons/react/24/solid'
import { Button } from "@/components/ui/button"

const navigation = [
    { name: '首页', href: '#' },
    { name: '环境数据监测', href: 'checkenvironment' },
    { name: '智慧农业决策', href: 'decision' },
    { name: '智慧农业管理', href: 'manage' },
    { name: '智慧农业服务', href: 'server' },
    { name: '社区分享中心', href: 'community' },

]


export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { setTheme } = useTheme()
    
    return (
        <div className="bg-green-200 dark:bg-emerald-700 text-gray-900 dark:text-gray-100">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        
                        {/* 左上角的图标 */}
                        <a href="#" className="">
                            <span className="sr-only">wohenshuai</span>

                            <Avatar>
                                <AvatarImage src="/image/logo.png" />
                                <AvatarFallback></AvatarFallback>
                            </Avatar>
                        </a>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.6 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>

                    
                    {/* 导航栏内容 */}
                    <div className="hidden lg:flex lg:gap-x-12  ">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className=" text-sm/6 font-semibold text-gray-900 lg:text-base">
                                {item.name}
                            </a>
                        ))}
                        
                   
                        </div>
                        
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
                </nav>



                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only text-gray-900 ">智农慧眼•慧眼智控</span>
                                <img
                                    alt=""
                                    src="/image/logo.png"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500">
                                <div className="space-y-2 py-6 ">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>


                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-60">
                    
                    <div className="text-center">
                        <button className='text-center bg-gray-400 dark:bg-gray-600 py-2 px-4 rounded-md lg:mb-5 text-xl' >
                            农田智能监测与决策支持系统 </button>

                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl select-none ">
                            智农慧眼•慧眼智控

                        </h1>

                        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-300 sm:text-xl/8 select-none">
                            以科技之名，精准洞察农田每一寸生机，
                            <br></br>智能决策开启丰收新篇，让农业更智慧，让大地更丰饶！
                            <br></br>

                        </p>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-6.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                开始使用
                            </a>
                            <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                了解更多 <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
