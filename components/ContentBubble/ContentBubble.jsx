import { Component } from 'react'
import styles from './ContentBubble.module.css'
import { MdDownload } from 'react-icons/md'
import { FaEye } from "react-icons/fa";

export class ContentBubble extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: this.props.mode
        }
    }
    render() {
        return (
            <div className={styles.contentBubble} id='contentBubble'>
                {(this.state.mode === 'Documents' || this.state.mode === 'Home')?
                <>
                    <div className={styles.lawBubbleName}>
                        Федеральный закон от 26 июля 2017 г. N 187-ФЗ
                    </div>
                    <div className={styles.lawBubbleDownloadsCount}>
                    <FaEye /> 0 
                    </div>
                    <div className={styles.lawBubbleDownloadButton}>
                        <MdDownload/>
                    </div>
                </>
                :
                <>
                    <div className={styles.termsBubbleName}>
                    </div>
                    <div className={styles.termsBubbleDefinition}>
                    </div>
                    <div className={styles.termsBubbleDocument}>
                    </div>
                    <div className={styles.termsBubbleDownloadButton}>
                        <MdDownload/>
                    </div>
                </>
                }
            </div>
        )
    }
}
