export interface LLMConfig {
  baseURL?: string;
  apiKey?: string;
  model?: string;
  temperature?: number;
}

export function createClient(_config: LLMConfig) {
  // 具体实现将在后续里程碑中补充
  return {
    async chat() {
      throw new Error("LLM client not implemented yet");
    }
  };
}
