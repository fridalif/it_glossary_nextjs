import { Component } from 'react'
import styles from './ContentBubble.module.css'
import { MdDownload } from 'react-icons/md'
import { FaEye } from "react-icons/fa";

export class ContentBubble extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: this.props.mode,
            element: this.props.element
        }
    }
    render() {
        return (
            <div className={styles.contentBubble} id='contentBubble'>
                {(this.state.mode === 'Documents' || this.state.mode === 'Home')?
                <>
                    <div className={styles.lawBubbleName}>
                        {this.state.element.name}
                    </div>
                    <div className={styles.lawBubbleDownloadsCount}>
                    <FaEye /> {this.state.element.downloads}
                    </div>
                    <div className={styles.lawBubbleDownloadButton}>
                        <MdDownload/>
                    </div>
                </>
                :
                <>
                    <div className={styles.termsBubbleName}>
                        {this.state.element.term}
                    </div>
                    <div className={styles.termsBubbleDefinition}>
                        {this.state.element.definition}
                    </div>
                    <div className={styles.termsBubbleDocument}>
                        {this.state.element.document_name}
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
