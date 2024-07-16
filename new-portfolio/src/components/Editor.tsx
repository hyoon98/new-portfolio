import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon, BoldIcon, Code2Icon, Heading1Icon, Heading2Icon, Heading3Icon, ItalicIcon, Link2Icon, ListIcon, ListOrderedIcon, UnderlineIcon } from 'lucide-react';
import { useCallback } from 'react';

// define your extension array

const extensions = [StarterKit.configure({
    codeBlock: {
        HTMLAttributes: {
            class: 'block whitespace-pre overflow-x-scroll bg-black text-white'
        }
    }
}), Link.configure({ openOnClick: false }), Underline, TextAlign.configure({ types: ['heading', 'paragraph'] })]

const content = '<p>Hello World!</p>'

function MenuBar(): React.ReactNode {
    const { editor } = useCurrentEditor();

    const toggleLink = useCallback(() => {

        const previousUrl = editor?.getAttributes('link').href
        if (previousUrl) {
            editor?.chain().focus().extendMarkRange('link').unsetLink().run()
            return
        }

        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor?.chain().focus().extendMarkRange('link').unsetLink()
                .run()

            return
        }

        // update link
        editor?.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run()
    }, [editor])

    if (!editor) {
        return null;
    }
    return (
        <div className='flex gap-2 mb-2 bg-slate-200 justify-evenly flex-row rounded-sm' >
            <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className='py-2 px-1 text-slate-700'><Heading1Icon /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className='py-2 px-1 text-slate-700'><Heading2Icon /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className='py-2 px-1 text-slate-700'><Heading3Icon /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className='py-2 px-1 text-slate-700'><BoldIcon /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className='py-2 px-1 text-slate-700'><ItalicIcon /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className='py-2 px-1 text-slate-700'><UnderlineIcon /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleCodeBlock().run()} className='py-2 px-1 text-slate-700'><Code2Icon /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className='py-2 px-1 text-slate-700'><ListIcon /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className='py-2 px-1 text-slate-700'><ListOrderedIcon /></button>
            <button type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()} className='py-2 px-1 text-slate-700'><AlignLeftIcon /></button>
            <button type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()} className='py-2 px-1 text-slate-700'><AlignCenterIcon /></button>
            <button type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()} className='py-2 px-1 text-slate-700'><AlignRightIcon /></button>
            <button type="button" onClick={toggleLink} className='py-2 px-1 text-slate-700'><Link2Icon /></button>
        </div>
    )
}

const Editor = () => {
    return (
        <EditorProvider extensions={extensions} content={content} slotBefore={<MenuBar />}>
        </EditorProvider>
    )
}

export default Editor