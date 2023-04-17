import React from 'react'
import { useSnackbar } from 'notistack'

const CommentTextBox = () => {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const [value, setValue] = React.useState("");
    const [output, setOutput] = React.useState(null);

    const handleSubmit = () => {
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
                    }
                    else {
                        throw Error("Something went wrong")
                    }
                    return res.json();
                })
                .then(data => setOutput(data))
                .catch(err => enqueueSnackbar(err.message, { variant: "error" }))
        }
        catch (err) {
            enqueueSnackbar(err, { variant: "error" })
        }
    }

    console.log(output)

    return (
        <div className="md:w-[45%] w-[100%] flex flex-col gap-2">
            <div className="text-xl tracking-widest text-[var(--base-theme)] font-bold">Comment</div>
            <textarea
                rows={10}
                className="w-[100%] bg-[var(--light-base-theme)] border-2 rounded-md outline-none focus:border-[var(--base-theme)] md:p-2 tracking-wider"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div
                className='text-center px-4 py-2 text-md font-["Montserrat"] text-[var(--text-theme)] bg-[var(--shadow)] rounded shadow cursor-pointer'
                onClick={() => handleSubmit()}
            >
                Send
            </div>
        </div>
    )
}

export default CommentTextBox