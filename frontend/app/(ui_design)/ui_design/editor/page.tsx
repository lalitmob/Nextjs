"use client";

import { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import type { Editor } from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

export default function DesignEditor() {
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!editorRef.current) {
      editorRef.current = grapesjs.init({
        container: "#editor",
        height: "100vh",
        fromElement: true,
        storageManager: false,
      });
    }

    return () => {
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  return <div id="editor"></div>;
}
