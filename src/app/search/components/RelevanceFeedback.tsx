"use client";

import { ThumbsDown, ThumbsUp } from "lucide-react";
import { relevanceFeedback } from "../actions";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface RelevanceFeedbackProps {
  query: string;
}

export default function RelevanceFeedback({ query }: RelevanceFeedbackProps) {
  const [sentFeedback, setSentFeedback] = useState(false);
  const { toast } = useToast();
  const handleFeedback = async (query: string, feedback: -1 | 1) => {
    setSentFeedback(true);
    const result = await relevanceFeedback(query, feedback);
    if (result) {
      toast({
        title: "Feedback",
        description: "Received feedback. Thank you!",
      });
    } else {
      toast({
        title: "Feedback",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full p-2 flex justify-center items-center gap-6">
      {!sentFeedback ? (
        <>
          <p className="text-white font-sans text-lg">
            Are the search results relevant ?
          </p>
          <ThumbsUp
            onClick={() => {
              void handleFeedback(query, 1);
            }}
            className="text-white h-6 w-6 cursor-pointer"
          />
          <ThumbsDown
            onClick={() => {
              void handleFeedback(query, -1);
            }}
            className="text-white h-6 w-6 cursor-pointer"
          />
        </>
      ) : null}
    </div>
  );
}
