

import { useEffect, useState } from "react"
import Editor, { EditorContentChanged } from "./Editor"
import Viewer from "./Viewer"


const initialMarkdownContent = ''

export default function App() {
  const [editorMarkdownValue, setEditorMarkdownValue] = useState("")
  const [text, setText] = useState("")
  const [hit, setHit] = useState(false)

  const onEditorContentChanged = (content: EditorContentChanged) => {
    console.log('Re-Render: ')

    setEditorMarkdownValue(content.markdown)
  }

  useEffect(() => {
    if (hit) {
      setHit(false)
    }
  }, [editorMarkdownValue, hit])

  const handleKeyPress = (event: any) => {
    if (event.event.key === 'Enter') {
      setHit(true)
    }
  }
  const handleClick = () => {
    setText(editorMarkdownValue)
  }

  return (
    <div style={{ margin: '100px' }}>
      <Editor
        value={initialMarkdownContent}
        onChange={onEditorContentChanged}
        onKeyDown={handleKeyPress}
      />

      <button onClick={handleClick}>Send</button>

      <div className="viewer" >
        <Viewer
          value={text}
        />
      </div>

    </div>
  )
}
