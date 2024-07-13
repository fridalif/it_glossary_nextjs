import styles from './ContentBubble.module.css'
import { MdDownload } from 'react-icons/md'
import { FaEye } from "react-icons/fa";

export function DocumentBubble({documentId, documentName, downloadsCount}){
    return(
        <div className={styles.contentBubble} id={documentId}>
            <div className={styles.lawBubbleName}>
                {documentName}
            </div>
            <div className={styles.lawBubbleDownloadsCount}>
                <FaEye /> {downloadsCount}
            </div>
            <div className={styles.lawBubbleDownloadButton} id={documentId}>
                <MdDownload/>
            </div>
        </div>
    )
}

export function TermBubble({term, definition, documentName,documentId,termId}){
    return(
        <div className={styles.contentBubble} id={`term_${termId}`}>
            <div className={styles.termsBubbleName} id={termId}>
                {term}
            </div>
            <div className={styles.termsBubbleDefinition}>
                {definition}
            </div>
            <div className={styles.termsBubbleDocument}>
                {documentName}
            </div>
            <div className={styles.termsBubbleDownloadButton} id={documentId}>
                <MdDownload/>
            </div>
        </div>
    )
}