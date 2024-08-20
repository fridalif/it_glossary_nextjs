import styles from './ContentBubble.module.css'
import { MdDownload } from 'react-icons/md'
import { FaEye } from "react-icons/fa";
import axios from 'axios'
import { saveAs } from 'file-saver'


export function DocumentBubble({documentId, documentName, downloadsCount}){
    const downloadDocument = ()=>{
        axios
            .get(`http://127.0.0.1:8000/api/download/${documentId}/`, { responseType: 'blob' })
            .then(response => {
                let extension = response.headers['content-type'].split('/').slice(-1)[0];
                let blob = new Blob([response.data], { type: `application/${extension}` });
                saveAs(blob, `${documentName}.${extension}`);
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
            <div className={styles.documentContent}>
                <div className={styles.lawBubbleDownloadsCount}>
                    <FaEye /> {downloadsCount}
                </div>
                <div className={styles.lawBubbleDownloadButton} id={documentId} onClick={()=>downloadDocument(documentId)}>
                    <MdDownload/>
                </div>
            </div>
        </div>
    )
}

export function TermBubble({term, definition, documentName,documentId,termId}){
    const downloadDocument = ()=>{
    axios
        .get(`http://127.0.0.1:8000/api/download/${documentId}/`, { responseType: 'blob' })
        .then(response => {
            let extension = response.headers['content-type'].split('/').slice(-1)[0];
            let blob = new Blob([response.data], { type: `application/${extension}` });
            saveAs(blob, `${documentName}.${extension}`);
        })
        .catch(error => {
            alert('Что-то пошло не так');
        });
    }

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
            <div className={styles.termsBubbleDownloadButton} id={documentId} onClick={()=>downloadDocument(documentId)}>
                <MdDownload/>
            </div>
        </div>
    )
}