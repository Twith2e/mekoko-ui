"use client";

import api from "@/lib/api";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useWaitListedCount } from "../_lib/hooks/useWaitlist";

export default function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { data, isLoading } = useWaitListedCount();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      setSubmitting(false);
      return;
    }

    try {
      const resp = await api.post("/v1/waitlist/join", { email });
      if (resp.status != 200 || resp.data.status !== "success") {
        setError("Something went wrong. Please try again later.");
        return;
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      return;
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }

    setError("");
  }

  if (submitted && !error) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-2xl border border-sage/30 bg-sage/10 px-6 py-4 text-sage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 shrink-0"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm font-semibold">
          You&apos;re on the list! We&apos;ll be in touch.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder="Enter your email"
          aria-label="Email address"
          className="min-w-0 flex-1 rounded-full border-2 border-sand bg-white px-5 py-3 text-sm text-warm-dark placeholder:text-warm-dark/30 outline-none transition-colors focus:border-terracotta"
          required
        />
        <button
          type="submit"
          className="rounded-full bg-fluorescent-fire px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-fluorescent-fire/85 active:scale-95"
        >
          {submitting ? (
            <div className="flex items-center justify-center">
              <Loader className="h-5 w-5 animate-spin" />
            </div>
          ) : (
            "Join Waitlist"
          )}
        </button>
      </div>
      <div className="mt-6 italic text-sm text-elkhound">
        {!isLoading && (
          <span>{`Join ${data} crochet lovers awaiting our launch`}</span>
        )}
      </div>
      {error && (
        <p role="alert" className="mt-2 pl-5 text-xs text-red-500">
          {error}
        </p>
      )}
    </form>
  );
}
