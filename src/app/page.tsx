"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const closeSidebar = () => {
    setSidebarOpened(false);
  };

  const handleClearConversations = () => {};

  const handleNewChat = () => {};

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>
      <section className="flex flex-col w-full">
        <button onClick={() => setSidebarOpened(true)}>Abrir Sidebar</button>
      </section>
    </main>
  );
};

export default Page;
