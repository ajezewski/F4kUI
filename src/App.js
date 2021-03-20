import React, {useEffect, useState} from 'react';
import BoxDashboard from './boxDashboard/BoxDashboard.tsx';
import Box from './box/Box.tsx';
import Layout from './layout/Layout';
import './App.css';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { getNotes } from './providers/data';

function App() {
  const [notes, setNotes] = useState([]);

  async function loadData ()  {
    const response = await getNotes();
    setNotes(response);
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="App layout">
      <header></header>
      <Layout>
        {
       notes && notes.length && <BoxDashboard hideSourceOnDrag={true}>{
          notes && notes.map((note, index) => (
              <Box id={'b' + index}
                   key={index}
                   tags={note.tags}
                   title={note.name}
                   priority={note.important}
                   content={note.description} />
              )
          )}
        </BoxDashboard>}
      </Layout>
      <footer></footer>
    </div>
  );
}

export default DragDropContext(HTML5Backend)(App);
