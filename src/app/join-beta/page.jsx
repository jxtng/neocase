import Header from "@/components/header";
import { Button } from "@/ui/button";
import { Card, CardContent, CardFooter } from "@/ui/card";
import { Checkbox } from "@/ui/checkbox";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import Link from "next/link";
import React from "react";

const JoinBeta = () => {
  return (
    <div className="flex min-h-screen">
      <div className="mx-auto flex grow flex-col basis-0">
        <Header hideLinks />
        <h1 className="text-5xl my-auto font-bold max-w-[500px] mx-auto text-center">
          Join our beta test to get
          <span className="text-primary"> early & unique </span>
          access!
        </h1>
      </div>

      <div className="signup-form grow basis-0 flex justify-center items-center bg-[url('/images/bg-signup.png')] bg-cover bg-no-repeat bg-center">
        <Card className="form p-6 mx-2 w-fit">
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <div className="firstname grow">
                <Label htmlFor="firstname">First Name</Label>
                <Input id="firstname" type="text" />
              </div>
              <div className="lastname grow">
                <Label htmlFor="lastname">Last Name</Label>
                <Input id="lastname" type="text" />
              </div>
            </div>

            <div className="form-group">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" placeholder="eg +1 234 567 890" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="subscribe"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Yes, send me news and updates from Neocase.
              </label>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button asChild>
              <Link href="/thank-you">Join our private beta</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default JoinBeta;
