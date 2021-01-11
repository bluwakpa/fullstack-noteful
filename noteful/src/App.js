import React, { useState } from 'react';
import data from './data'
import { Route, Link } from 'react-router-dom'
import FolderNav from './FolderNav'
import NoteList from './NoteList.js'
import Note from './Note'
import FilteredNotes from './FilteredNotes'

console.log(data)

function App() {
  const [folders, setFolders] = useState(data.folders)
  const [notes, setNotes] = useState(data.notes)
  return (
    <main>
      <header>
        <h1>
          <Link to="/">Noteful</Link>
        </h1>
      </header>
      <section style={{display:"flex"}}>
        <Route exact path="/" component={FolderNav} />
        <Route exact path="/" component={NoteList} />
      </section>
      <section style={{display:"flex"}}>
        <Route exact path="/folder/:folderId" component={FolderNav} />
        <Route exact path="/folder/:folderId" component={NoteList} />
      </section>
      <section>
        <Route exact path="/note/:noteId" component={Note} />
      </section>
    </main>
  );
}

export default App;