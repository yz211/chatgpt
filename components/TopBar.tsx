import Link from "next/link";
import { Settings2, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div>
          <h1 className="text-lg font-semibold">文档智能助手</h1>
          <p className="text-sm text-muted-foreground">左侧对话、右侧写作，后续里程碑将解锁全部能力。</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" className="gap-2" disabled>
            <Upload className="h-4 w-4" />
            导入 .docx
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/settings">
              <Settings2 className="h-4 w-4" />
              设置
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
