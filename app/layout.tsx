import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "文档智能助手",
  description: "双栏聊天与文档编辑体验"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen bg-muted/20">
        {children}
      </body>
    </html>
  );
}
