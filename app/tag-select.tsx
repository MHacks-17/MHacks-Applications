import React from "react";
import {
  FormLabel,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,

} from "@/components/ui/card"

function TagSelection({ selectedTags, onChange }: { selectedTags: string[], onChange: (tags: string[]) => void }) {
  const availableTags = ["Tag1", "Tag2", "Tag3", "Tag4"]; // placeholder until we decide on tracks.

  const handleTagChange = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];

    onChange(updatedTags);
  };

  return (
    <div>
      <FormLabel>Select Tracks</FormLabel>
      <Card className="container-card">
        <CardContent>
            {/* This is a placeholder container-- we want multiselect, right? */}
        </CardContent>
      </Card>
    </div>
  );
}

export default TagSelection;
