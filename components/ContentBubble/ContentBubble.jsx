import styles from './ContentBubble.module.css'
import { MdDownload } from 'react-icons/md'
import { FaEye } from "react-icons/fa";
import axios from 'axios'

export function DocumentBubble({documentId, documentName, downloadsCount}){
    const downloadDocument = ()=>{
        axios
            .get(`http://127.0.0.1:8000/api/download/${documentId}/`)
            .then(response => {
                console.log(response);
                alert('Файл успешно загружен');
            })
            .catch(error => {
                alert('Что-то пошло не так');
            });
    }
    return(
        <div className={styles.contentBubble} id={documentId}>
            <div className={styles.lawBubbleName}>
                {documentName}
            </div>
            <div className={styles.lawBubbleDownloadsCount}>
                <FaEye /> {downloadsCount}
            </div>
            <div className={styles.lawBubbleDownloadButton} id={documentId} onClick={()=>downloadDocument()}>
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