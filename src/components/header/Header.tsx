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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import PrimaryButton from "../customs/PrimaryButton";
import TransparentButton from "../customs/TransparentButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AuthBlock from "../auth/AuthBlock";

const Header = () => {
  const [language, setLanguage] = useState<{
    label: string;
    value: string;
    logo: string;
  }>({
    label: "English",
    value: "Eng",
    logo: "/us_uk_logo.jpg",
  });

  const languages = [
    {
      label: "Tiếng Việt",
      value: "Vi",
      logo: "/vn_logo.jpg",
    },

    {
      label: "English",
      value: "Eng",
      logo: "/us_uk_logo.jpg",
    },
  ];

  const [hoverOpen, setHoverOpen] = useState(false);
  const [dialogOpenSignIn, setDialogOpenSignIn] = useState(false);
  const [dialogOpenSignUp, setDialogOpenSignUp] = useState(false);

  const handleSignIn = () => {};

  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-[1230px] h-[68px] flex items-center justify-between">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={220} height={40} />
        </Link>

        <div className="w-[calc(100%_-_700px)] flex border border-[#ccc] rounded-[10px] items-center">
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

        <div className="flex justify-between w-[340px]">
          <div className="text-[12px] flex flex-col cursor-pointer items-center leading-relaxed text-[var(--text)]">
            <Bell color="#646464" className="mb-1 " />
            Notification
          </div>

          <div className="text-[12px] flex flex-col cursor-pointer items-center leading-relaxed text-[var(--text)]">
            <ShoppingCart color="#646464" className="mb-1 " />
            My Cart
          </div>

          <DropdownMenu open={hoverOpen} onOpenChange={setHoverOpen}>
            <DropdownMenuTrigger asChild>
              <div className="text-[12px] flex flex-col cursor-pointer items-center leading-relaxed text-[var(--text)]">
                <User color="#646464" className="mb-1 " />
                My Account
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] px-4 py-2">
              <div className="flex flex-col justify-between  gap-4">
                <Dialog
                  open={dialogOpenSignIn}
                  onOpenChange={(v) => setDialogOpenSignIn(v)}
                >
                  <DialogTrigger asChild>
                    <Button className="flex items-center justify-center w-full gap-2 px-4 py-2 bg-[#e11d48] hover:bg-[#be123c] rounded-lg text-white transition-colors cursor-pointer">
                      <span>Sign In</span>
                    </Button>
                  </DialogTrigger>

                  <AuthBlock mode={true} />
                </Dialog>

                <Dialog
                  open={dialogOpenSignUp}
                  onOpenChange={(v) => setDialogOpenSignUp(v)}
                >
                  <DialogTrigger asChild>
                    <Button
                      className="flex items-center justify-center w-full gap-2 px-4 py-2 border border-[#e11d48] rounded-lg bg-white text-[#e11d48]
           hover:scale-105 hover:bg-white transition-transform duration-300 ease-in-out cursor-pointer"
                    >
                      <span>Sign up</span>
                    </Button>
                  </DialogTrigger>

                  <AuthBlock mode={false} />
                </Dialog>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="text-[var(--text)] text-[14px] w-[100px] flex justify-center items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className=" bg-white cursor-pointer">
                  <Image
                    src={language.logo}
                    alt={language.label}
                    width={20}
                    height={14}
                    className="rounded-sm"
                  />
                  <span> {language.label}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => {
                      setLanguage(lang);
                    }}
                    className="cursor-pointer"
                  >
                    <Image
                      src={lang.logo}
                      alt={lang.label}
                      width={20}
                      height={14}
                      className="rounded-sm"
                    />
                    <span> {lang.label}</span>
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
