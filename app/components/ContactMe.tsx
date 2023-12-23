"use client";

import ContactUsValidator from "@/lib/ContactUsValidator";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

type Props = {
  message: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    message: string;
  };
};

const ContactMe = ({ message }: Props) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof ContactUsValidator>>({
    resolver: zodResolver(ContactUsValidator),
    defaultValues: message,
  });

  const onSubmit = (values: z.infer<typeof ContactUsValidator>, e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // @ts-ignore
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          from_name: values.firstName,
          to_name: "Duncan Moyo",
          from_email: values.email,
          to_email: "duncanfmoyo@gmail.com",
          message: values.message,
        },
        process.env.NEXT_PUBLIC_USER_ID
      )

      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          form.reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="flex flex-col min-h-screen justify-center pt-20 md:pt-0 my-0 mx-4 md:mx-auto h-full max-w-full md:max-w-6xl items-start">
      <div className="flex justify-center items-center mb-5">
        <h2 className="font-firaSansFont text-largePlus md:text-DELarge font-bold text-lightNavy">
          <span className="mr-3 font-firaSansFont text-green">04. </span>Contact
          Me
        </h2>
        <hr className="hidden md:block border border-t-1 border-green w-44 md:w-96 ml-3" />
      </div>
      <div className="flex justify-around my-6 mx-auto">
        <p className="font-robotoFont text-medium text-lightNavy">
          My inbox is always open. Whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </p>
      </div>
      <div className="w-full pb-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex-col md:flex md:flex-row">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full px-2 my-3">
                    <FormLabel className="text-lightestNavy">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full px-2 my-3">
                    <FormLabel className="text-lightestNavy">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-col md:flex md:flex-row">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="w-full px-2 my-3">
                    <FormLabel className="text-lightestNavy ">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        className=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full px-2 my-3">
                    <FormLabel className="text-lightestNavy">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full px-2 my-3">
                  <FormLabel className="text-lightestNavy">Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Message" className="text-slate" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full mt-4 h-[60px]"
              type="submit"
              variant={"default"}
            >
              <p className="uppercase text-lighNavy">
                {loading ? <Loader2 /> : "submit"}
              </p>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactMe;
