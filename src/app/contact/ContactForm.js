import React from 'react'
import styles from './page.module.css'
import { quicksand } from "@/lib/fonts";

export default function ContactForm() {
    return (
        <form className={styles.contact} name="contact" action="/success" method="POST" data-netlify="true">
            <label>Your Name: <input className={quicksand.className} type="text" name="name" /></label>
            <label>Your Email: <input className={quicksand.className} type="email" name="email" /></label>
            <label>Your Role: <select className={quicksand.className} name="role[]">
                <option value="Customer">Customer</option>
                <option value="Employer">Employer</option>
            </select></label>
            <label>Message: <textarea className={quicksand.className} name="message"></textarea></label>
            <button type="submit">Send</button>
        </form>
    )
}
