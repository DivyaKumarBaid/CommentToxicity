import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { enqueueSnackbar } from 'notistack';
import { useCommentReload } from '../context/CommentProvider';

const PrevComments = () => {

    const [comments, setComments] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const useBoolState = useCommentReload();

    React.useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_BASE_URL}/comment`)
            .then(res => {
                if (res.status != 200 && res.status != 201)
                    throw Error("Something Went Wrong!")
                return res.json()
            })
            .then(data => {
                setComments(data)
            })
            .catch(err => enqueueSnackbar(err.message, { variant: "error" }))
        setLoading(false)
    }, [useBoolState.boolState])

    return (
        <div className='md:w-[45%] md:mt-0 mt-4 w-[100%] h-[100%] flex flex-col gap-2'>
            <div className="text-xl tracking-widest text-[var(--base-theme)] font-bold">Previous Comments</div>
            <div className="text-sm tracking-widest text-[var(--base-theme)] font-bold">Hover to see the blurred ones since they were detected by model</div>
            <div className="w-[100%] h-[90%] rounded-md shadow-md flex items-center flex-col">
                {loading ? <div className="h-[100%] w-[100%] flex justify-center items-center"><CircularProgress color="secondary" /></div> :
                    <div className='w-[100%] max-h-[65vh] overflow-y-auto flex flex-col gap-2'>
                        {comments.map((item, idx) => {
                            return (
                                <>
                                    <div className={`cursor-pointer hover:blur-none w-[100%] h-[100%] rounded flex flex-col gap-2 md:p-4 p-2 md:pb-1 pb-1 shadow border`} key={"com" + idx} onClick={() => useBoolState.setOutput(item)}>
                                        <div className={`${item.visible && "blur-sm"} text-lg  hover:blur-none tracking-widest font-['DM_SANS'] text-[var(--text-theme)] w-[100%]`}>{item.comment}</div>
                                        <div className="w-[100%] opacity-60 text-[var(--text-theme)] text-right text-sm">{item.time}</div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default PrevComments