import { useState } from "react"
import Markdown from 'react-markdown'

// import remarkGfm from 'remark-gfm'

export const TextBox = () => {

    const [textNow, setTextNow] = useState()

    const handleText = (e) => {
        setTextNow(e.target.value)
    }


    return (
        <div>
            <div className="box">
                <h1>Editor</h1>
                <textarea id="editor" className="box-teks" name="editText" onChange={handleText} cols="500" rows="500
            " charswidth="23"></textarea>

            </div>
            <div>
                <h1>Preview</h1>
                <div id="preview" className="box-view box">

                    <Markdown>{textNow}</Markdown>
                </div>
            </div>

        </div >

    )
}