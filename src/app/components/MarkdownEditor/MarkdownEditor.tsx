import MarkdownIt from "markdown-it";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

MdEditor.unuse(Plugins.FontUnderline);

const parser = new MarkdownIt();

export interface MarkdownEditorProps {
  onChange: (text: string) => any;
}

export function MarkdownEditor({ onChange }: MarkdownEditorProps) {
  return (
    <MdEditor
      onChange={({text}) => onChange(text)}
      style={{ height: "300px" }} 
      renderHTML={(text) => parser.render(text)}
    />
  );
}
