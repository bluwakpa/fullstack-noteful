import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import data from './data'

export default function NoteList() {
    const [notes, setNotes] = useState(data.notes)

    return (
        <main>
            <header>
                <h1>
                NoteList
                </h1>
            </header>
            <section>
                <ul>
                    <Link to="/note">
                        <h3>Note Important</h3>
                    </Link>
                    <Link to="/note">
                        <h3>Note Super</h3>
                    </Link>
                    <Link to="/note">
                        <h3>Note Spangley</h3>
                    </Link>
                </ul>
            </section>
        </main>
    )
}