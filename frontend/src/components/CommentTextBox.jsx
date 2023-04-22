import React from 'react'
import { useSnackbar } from 'notistack'
import { useCommentReload } from '../context/CommentProvider';
import { CircularProgress } from '@mui/material';

export const statesOfOutput = [
    "toxic",
    "severe_toxic",
    "obscene",
    "threat",
    "insult",
    "identity_hate",
]

const CommentTextBox = () => {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const [value, setValue] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const useBoolState = useCommentReload();

    const handleSubmit = () => {
        setLoading(true);
        if (value.trim() == "") {
            enqueueSnackbar("Input field is empty", { variant: "error" })
            setLoading(false);
            return
        }
        const data = {
            "input": value
        }
        try {
            fetch(`${import.meta.env.VITE_BASE_URL}/comment/generate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then(res => {
                    if (res.status === 201) {
                        enqueueSnackbar("Successfully added", { variant: "success" })
                        setValue("");
                        useBoolState.setBoolState(old => !old)

                    }
                    else {
                        throw Error("Something went wrong")
                    }
                    return res.json();
                })
                .then(data => useBoolState.setOutput(data))
                .catch(err => enqueueSnackbar(err.message, { variant: "error" })).finally(() => setLoading(false))
        }
        catch (err) {
            enqueueSnackbar(err, { variant: "error" })
        }
    }

    return (
        <div className="md:w-[45%] w-[100%] flex flex-col gap-2">
            <div className="text-xl tracking-widest text-[var(--base-theme)] font-bold">Comment</div>
            <textarea
                rows={10}
                className="w-[100%] bg-[var(--light-base-theme)] border-2 border-transparent rounded-md outline-none focus:border-[var(--border-theme)] text-[var(--text-theme)] opacity-95 md:p-2 tracking-wider"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div
                className='text-center px-4 py-2 text-md font-["Montserrat"] text-[var(--text-theme)] bg-[var(--shadow)] rounded shadow cursor-pointer w-[100%] justify-center items-center'
                onClick={() => !loading && handleSubmit()}
            >
                {!loading ? <span>Send</span> : <div className="flex justify-center items-center"><CircularProgress color="inherit" className='!w-[25px] !h-[25px]' /></div>}
            </div>
            <div className="text-xl tracking-widest text-[var(--base-theme)] mt-4 font-bold">Output</div>
            {useBoolState.output && <div className="text-sm tracking-widest text-[var(--base-theme)] font-bold">Comment : {useBoolState.output.comment}</div>}
            <div className="w-[100%] h-[20vh] bg-[var(--light-output-theme)] shadow rounded flex p-4 gap-6 flex-wrap">
                {statesOfOutput.map((item, idx) => {
                    return (

                        useBoolState.output && <div className="flex text-md gap-2 items-center">
                            <div className="text-bold capitalize text-[var(--text-theme)]">{item}</div>
                            <div className={`${useBoolState.output[item] ? "!text-[rgba(195,23,23)]" : "!text-[rgba(23,195,23)]"}`}>{useBoolState.output[item] ? "True" : "False"}</div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default CommentTextBox