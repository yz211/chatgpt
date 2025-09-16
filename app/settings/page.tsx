import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">模型配置</h1>
        <Link href="/" className="text-sm text-primary hover:underline">
          返回主页
        </Link>
      </div>
      <p className="rounded-lg border bg-card p-6 text-muted-foreground">
        模型配置表单将在后续里程碑中完成。
      </p>
    </div>
  );
}
