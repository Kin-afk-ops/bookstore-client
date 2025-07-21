"use client";
import { Bell, ChartBarBig, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState<{
    label: string;
    value: string;
  }>({
    label: "English",
    value: "Eng",
  });

  const languages = [
    {
      label: "Tiếng Việt",
      value: "Vi",
    },

    {
      label: "English",
      value: "Eng",
    },
  ];
  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-[1230px] h-[68px] flex items-center justify-between">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={220} height={40} />
        </Link>
        <div className="">
          <ChartBarBig color="#646464" size={30} />
        </div>

        <div className="w-[calc(100%_-_619px)] flex border border-[#ccc] rounded-[10px] items-center">
          <input
            placeholder="book"
            className="h-[40px] w-[85%] outline-0 border-0 pl-4"
          />
          <Button
            variant="default"
            className="bg-[#e11d48] hover:bg-[#be123c] cursor-pointer w-[15%] "
          >
            <Search />
          </Button>
        </div>

        <div className="flex justify-between w-[320px]">
          <div className="text-[12px] flex flex-col items-center leading-relaxed text-[var(--text)]">
            <Bell color="#646464" className="mb-1" />
            Notification
          </div>

          <div className="text-[12px] flex flex-col items-center leading-relaxed text-[var(--text)]">
            <ShoppingCart color="#646464" className="mb-1" />
            Notification
          </div>

          <div className="text-[12px] flex flex-col items-center leading-relaxed text-[var(--text)]">
            <User color="#646464" className="mb-1" />
            My Account
          </div>
          <div className="text-[var(--text)] text-[14px] w-[100px] flex justify-center items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" className=" bg-white cursor-pointer">
                  {language.label}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => {
                      setLanguage(lang);
                    }}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
