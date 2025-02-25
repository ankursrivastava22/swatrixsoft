import React, { forwardRef } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const TextEditorWrapper = forwardRef((props, ref) => {
  return <JoditEditor {...props} forwardRef={ref} />;
});

export default TextEditorWrapper;
