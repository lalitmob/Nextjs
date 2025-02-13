declare module "grapesjs" {
    export interface Editor {
      destroy: () => void;
    }
  
    export default function grapesjs(config: {
      container: string;
      height?: string;
      storageManager?: boolean;
      fromElement?: boolean;
    }): Editor;
  }
  