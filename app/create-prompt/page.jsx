"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Form from "@components/Form";

function CreatePrompt(props) {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true); /*will give it loader later*/

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        console.log("Prompt created successfully, redirecting to homepage.");
        router.push("/");
      } else {
        console.error(
          "Failed to create prompt, response status:",
          response.status,
        );
      }
    } catch (e) {
      console.error("Error creating prompt:", e);
      // return new Response("Failed to create a new prompt", { status: 500 });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    ></Form>
  );
}

export default CreatePrompt;
