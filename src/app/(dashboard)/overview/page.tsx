import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <>
      <div
        x-chunk="An empty state showing no socials with a heading, description and a call to action to add a social."
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
      >
        <div className="flex flex-col items-center gap-1 text-center p-2">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no socials
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start publishing as soon as you add a social.
          </p>
          <Button className="mt-4">Add Social</Button>
        </div>
      </div>
    </>
  );
}
