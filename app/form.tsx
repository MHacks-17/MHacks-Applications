"use client"

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
} from "@/components/ui/pagination";

import "./ProfileForm.css";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  secondName: z.string().min(1, { message: "Second name is required." }),
  dob: z.string().min(1, { message: "Date of Birth is required." }), // Assuming DOB as a string in YYYY-MM-DD format, want to make this more dynamic
  question1: z.string().min(1, { message: "This field is required." }),
  question2: z.string().min(1, { message: "This field is required." }),
  num_hackathons: z.number().int().positive({ message: "This field is required." }),
});

export function ProfileForm() {
  const [currentPage, setCurrentPage] = useState(1);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      secondName: "",
      dob: "",
      question1: "",
      question2: "",
      num_hackathons: 0,
    },
  });

  function onSubmit(values: any) { // placeholder until we setup ATS.
    console.log(values);
  }

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
      <Form {...form} aria-label="Profile Form">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-lg mx-auto">
        {currentPage === 1 && (
          <>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="firstName">First Name</FormLabel> 
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="secondName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="secondName">Second Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your second name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="dob">Date of Birth</FormLabel> 
                <FormControl>
                  <Input type="date" id="dob" {...field} /> 
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </>
        )}

        {currentPage === 2 && (
          <>
            <FormField
              control={form.control}
              name="question1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="question1">What do you want to build at MHacks 17?</FormLabel>
                  <FormControl>
                    <Input placeholder="Answer for question 1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="question2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="question2">Why MHacks?</FormLabel>
                  <FormControl>
                    <Input placeholder="Answer for question 2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="num_hackathons"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="num_hackathons">How Many Hackathons have you attended?</FormLabel>
                  <FormControl>
                  <Input
                    type="number"
                    placeholder="0"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                    value={field.value === 0 ? '' : field.value}
                  />
                  </FormControl>
                  <FormDescription>No worries if it's none! MHacks is really excited to have you join us.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </>
        )}

        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious onClick={handlePrevious} />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink>{currentPage}</PaginationLink>
            </PaginationItem>
            {currentPage < 2 && (
              <PaginationItem>
                <PaginationNext onClick={handleNext} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </form>
    </Form>
  );
}
