import React from 'react'

export default function Login() {
  return (
    <div>
        <div class="bg-[#F9FAFB] h-screen w-screen flex items-center">
        <div class="h-max mx-auto flex flex-col items-center">
            <img class="h-[40px] w-[47px] mb-5" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
            <h1 class="text-xl font-bold text-center pb-10">Sign in to your account</h1>
            <div class="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
                <div>
                    <label class="text-gray-600 font-bold inline-block pb-2" for="email">Email</label>
                    <input class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="mehedi@jaman.com"/>
                </div>
                <div>
                    <label class="text-gray-600 font-bold inline-block pb-2" for="password">Password</label>
                    <input class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******"/>
                </div>
                <div class="flex">
                    <div class="w-1/2">
                        <input type="checkbox" name="remeberMe"/>
                        <label for="remeberMe">Remeber me</label>
                    </div>
                    <div class="w-1/2">
                        <a class="font-bold text-blue-600" href="">Forgot password ?</a>
                    </div>
                </div>
                <div>
                    <input class="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" value="Login" />
                </div>
                <div>
                    <p class="text-center">Or continue with</p>
                </div>
                <div class="flex gap-4">
                    <button class="bg-[#1D9BF0] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">Twitter</button>
                    <button class="bg-[#24292F] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">Github</button>
                </div>
            </div>
            <p class="text-sm text-gray-500 mt-10">Not a member? <a href="#" class="text-[#4F46E5] font-bold">Start a 14 day free trial</a></p>
        </div>
    </div>
    </div>
  )
}
