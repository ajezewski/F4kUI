import React, { useEffect, useState } from 'react';
import BoxDashboard from './boxDashboard/BoxDashboard.tsx';
import Box from './box/Box.tsx';
import Layout from './layout/Layout';
import Zoom from './zoom/Zoom';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getNotes } from './providers/data';

function App() {
  const [notes, setNotes] = useState([]);
  const [zoom, setZoom] = useState();

  async function loadData ()  {
    const response = await getNotes();
    setNotes(response);
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App layout">
      <header></header>
      <Layout>
        {
       notes && notes.length && <BoxDashboard hideSourceOnDrag={true}>{
          notes.map((note, index) => (
              <Box id={'b' + index}
                   key={index}
                   tags={note.tags}
                   title={note.name}
                   priority={note.important}
                   content={note.description}
                   zoom={zoom}
              />
              )
          )}
          <Zoom onZoomChange={setZoom}></Zoom>
        </BoxDashboard>}
      </Layout>
      <footer></footer>
    </div>
    </DndProvider>
  );
}
export default App
