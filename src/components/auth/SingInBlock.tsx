"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
// import { showError, showSuccess } from "@/utils/styles/toast-utils";
// import { useAuthStore } from "../../../store/authStore";
import { useEffect, useState } from "react";
import PrimaryButton from "../customs/PrimaryButton";

const SingInBlock = () => {
  const router = useRouter();

  //   const user = useAuthStore((state) => state.user);
  // const token = useAuthStore((state) => state.token);
  //   const setUser = useAuthStore((state) => state.setUser);
  const [loading, setLoading] = useState<boolean>(false);

  const formSchema = z.object({
    phone: z
      .string()
      .nonempty({ message: "Số điện thoại không được để trống." })
      .regex(/^0\d{9}$/, {
        message: "Số điện thoại phải bắt đầu bằng số 0 và có đúng 10 chữ số.",
      }),
    password: z.string().nonempty({ message: "Mật khẩu không được để trống." }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ): Promise<void> => {
    // const loginInfo = values;
    // setLoading(true);
    // await axiosInstance
    //   .post("/login", loginInfo)
    //   .then(async (res) => {
    //     setLoading(false);
    //     setUser({
    //       id: res.data.id,
    //       username: res.data.username,
    //       role: res.data.role,
    //     });
    //     // await setAuthToken(res.data.access_token);
    //     showSuccess("Đăng nhập thành công");
    //     router.push("/");
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.log(error);
    //     showError("Đăng nhập thất bại hãy thử lại");
    //   });

    console.log(values);
  };

  return (
    <div className="flex w-full justify-center mt-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full min-w-[300px]"
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2 text-[lg]">Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Phone"
                    {...field}
                    autoComplete="current-phone"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2 text-[lg]">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Password"
                    {...field}
                    type="password"
                    autoComplete="current-password"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <PrimaryButton content="Sign in" type="submit" />
        </form>
      </Form>
    </div>
  );
};

export default SingInBlock;
