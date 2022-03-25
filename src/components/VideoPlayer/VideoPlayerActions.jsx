import Comment from "../Icons/Comment"
import { Heart } from "../Icons/Heart"
import Share from "../Icons/Share"

import styles from './styles.module.css'

export default function VideoPlayerActions ({ likes = 12, comments = 12, shares = 12, hearted = false }) {
    
    const handleLike = () => {
        alert('like')
    }

    const handleComment = () => {
        alert('comment')
    }

    const handleShare = () => {
        alert('share')
    }
    
    return (
        <aside className={styles.actions}>
            <button className={styles.action} onClick={handleLike}>
                <Heart width='45' />
                <span title="like">{likes}</span>
            </button>
            <button className={styles.action} onClick={handleComment}>
                <Comment width='45' />
                <span title="comments">{comments}</span>
            </button>
            <button className={styles.action} onClick={handleShare}>
                <Share width='45' />
                <span title="shares">{shares}</span>
            </button>
        </aside>
    )
}