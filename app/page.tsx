import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import Chat from "@/components/Chat";
import Editor from "@/components/Editor";
import TopBar from "@/components/TopBar";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <TopBar />
      <div className="flex flex-1 overflow-hidden p-4">
        <PanelGroup direction="horizontal" className="flex w-full overflow-hidden rounded-2xl border bg-card shadow-sm">
          <Panel
            defaultSize={35}
            minSize={25}
            className="flex flex-col overflow-hidden border-r bg-card"
          >
            <Chat />
          </Panel>
          <PanelResizeHandle className="w-1.5 cursor-col-resize bg-border transition-colors hover:bg-primary/30" />
          <Panel defaultSize={65} minSize={35} className="flex flex-col overflow-hidden bg-card">
            <Editor />
          </Panel>
        </PanelGroup>
      </div>
    </main>
  );
}
