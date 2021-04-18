import React, { useEffect, useState, WheelEvent } from 'react';
import BoxDashboard from './boxDashboard/BoxDashboard';
import Box from './box/Box';
import Layout from './layout/Layout';
import Zoom from './zoom/Zoom';
import { Note } from './providers/models';
import './app.scss';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getNotes } from './providers/data';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [zoom, setZoom] = useState<number>(0);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    let delta = 0.2;
    if (e.deltaY < 0) {
      delta = -0.2;
    }
    setZoom(currentZoom => Math.min(Math.max(currentZoom + delta, 0), 9));
  }
  const handleZoomChange = (event: number) => {
    setZoom(() => event);
  }
  async function loadData ()  {
    const response = await getNotes();
    setNotes(response);
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App layout" onWheel={handleWheel}>
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
                   zoom={typeof zoom === 'string' ? parseInt(zoom) : zoom}
              />
              )
          )}
          <Zoom onZoomChange={handleZoomChange}
                zoom={zoom}
          ></Zoom>
        </BoxDashboard>}
      </Layout>
      <footer></footer>
    </div>
    </DndProvider>
  );
}
export default App
