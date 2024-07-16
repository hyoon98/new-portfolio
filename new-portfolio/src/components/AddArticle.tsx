
import Editor from "./Editor";

function AddArticle() {
    return (
        <>
            <div className='h-screen fixed bg-[linear-gradient(20deg,rgba(0,0,0,1),rgba(19,8,106,1),rgba(0,0,0,1))] w-screen -z-50' />
            <div className={`max-sm:p-[50px] px-[150px] py-[72px] w-full flex flex-col vh-screen justify-center items-center`}>
                <div className='bg-slate-900 bg-opacity-65 h-4/5 w-full my-[72px] py-[72px] px-[150px] rounded-3xl '>
                    <h2> Add/Modify Article</h2>
                    <form>
                        <label className='text-2xl flex flex-col py-5'>Title:
                            <input className='text-xl rounded-sm border border-white border-1' type='text' name='title' />
                        </label>
                        <label className='text-2xl py-5'>Content:
                        </label>
                        <div className="h-[300px]">
                            <Editor />
                        </div>
                        <label className='text-2xl flex flex-col py-5'>Slug:
                            <input className='text-xl rounded-sm border border-white border-1' type='text' name='slug' />
                        </label>
                        <div> Cover Image</div>
                        <label className='text-2xl flex flex-col py-5'>Summary:
                            <textarea className='text-xl rounded-sm border border-white border-1' rows={4} name='summary' />
                        </label>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddArticle