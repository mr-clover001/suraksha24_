"use client";

import dynamic from "next/dynamic";

// Code-split the chat widget out of the main bundle and skip SSR for it —
// it's a fixed-position helper with no SEO-relevant content, so deferring it
// until after hydration shaves JS off the critical path with no visual cost
// (position: fixed means its later appearance can't shift other layout).
const ChatBot = dynamic(() => import("@/components/layout/ChatBot"), {
  ssr: false,
});

export default function ChatBotLoader() {
  return <ChatBot />;
}
