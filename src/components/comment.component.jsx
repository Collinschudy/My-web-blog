import useEffect from 'react';
import { commentBox } from 'commentbox.io';

const Comment = () => {
    useEffect(() => {
        const removeCommentBox = commentBox('5635068789784576-proj')
        return () => {
            removeCommentBox()
        }
    })


    return (
        <div className="commentbox" />
    )
}

export default Comment;