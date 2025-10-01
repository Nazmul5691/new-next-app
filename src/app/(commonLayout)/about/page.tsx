import { Metadata } from 'next';
import styles from './About.module.css'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'This is about us page'
    
}

export default function AboutPage() {
    return (
        <div>
            <h1 className={styles.text_style}>This is About Page </h1>
        </div>
    );
}