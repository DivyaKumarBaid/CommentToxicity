import React from 'react'

export const commentReload = React.createContext();
export const useCommentReload = () => React.useContext(commentReload);

const CommentProvider = ({ children }) => {

    const [boolState, setBoolState] = React.useState(false);
    const [output, setOutput] = React.useState();

    return (
        <commentReload.Provider value={{ boolState, setBoolState, output, setOutput }}>
            {children}
        </commentReload.Provider>
    )
}

export default CommentProvider