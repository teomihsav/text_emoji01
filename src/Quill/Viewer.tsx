


import ReactMarkdown from "react-markdown"


export interface ViewerProps {
    value: string
}

export default function Viewer(props: ViewerProps) {


    return <div style={{ border: '1px solid grey' }}>
        <ReactMarkdown >
            {props.value}
        </ReactMarkdown>
    </div>
}
