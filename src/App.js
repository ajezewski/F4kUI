import React, {Component} from 'react';
import BoxDashboard from './boxDashboard/BoxDashboard.tsx';
import Box from './box/Box';
import AsidePane from './asidePane/AsidePane';
import './App.css';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>Header</header>
        <AsidePane expandWidth="1fr" position="left"/>
        <BoxDashboard hideSourceOnDrag={true}>
          <Box id="b1" title="Simple title"
               tags={['task', 'fun']}
               priority={10}
               content="Proin libero risus, <a href='#'>convallis in gravida at</a>, suscipit sit amet metus. Integer iaculis ipsum non finibus dapibus. Vivamus at molestie nunc."/>
          <Box id="b2" title="Long title"
               tags={['note', 'book']}
               priority={3}
               content="Integer iaculis ipsum non finibus dapibus."/>
          <Box id="b3" title="title"
               tags={['task', 'book']}
               priority={1}
               content="Cras auctor rutrum lacus quis rutrum. Praesent consequat vitae justo ac viverra."/>
          <Box id="b4" title="title vitae justo"
               priority={10}
               content="Quisque viverra euismod nulla, at porttitor libero tempus a. In accumsan nisl mauris, vel sodales ligula dictum vel. Aliquam a orci lobortis, varius nunc at, viverra nisl. "/>
          <Box id="b5" title="title"
               priority={5}
               content="<p>Donec consequat:</p> <ul><li>dui vel molestie pellentesque,</li><li>ex ligula ullamcorper risus,</li><li>id commodo nisl ligula eget nibh.</li></ul> "/>
          <Box id="b6" title="Very long title"
               priority={9}
               content="Duis ut augue egestas, tempor libero non, ultrices nibh."/>
          <Box id="b7" title="Long title"
               priority={10}
               content="Empty"/>
          <Box id="b8" title="Donsectetur adipiscing elit"
               priority={10}
               content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet odio lacus. Nunc ultricies in sem id ultricies. Nulla quis posuere lorem. Quisque vehicula porttitor iaculis."/>
          <Box id="b9" title="Title"
               priority={8}
               content="Donec eget imperdiet urna, eget placerat metus. Pellentesque vulputate urna vel neque tempor suscipit."/>
          <Box id="b10" title="Neque tempor suscipit title"
               content="Shows buttons"
               priority={9}
          />
          <Box id="b11" title="Molestie pellentesquee"
               priority={3}
               content="Donec consequat, dui vel molestie pellentesque, ex ligula ullamcorper risus, id commodo nisl ligula eget nibh. "/>
          <Box id="b12" title="Title"
               priority={4}
               content="Nullam fermentum pellentesque ex, sit amet efficitur nunc porttitor sodales. Morbi varius ex sit amet condimentum faucibus."/>
          <Box id="b13" title=""
               priority={8}
               content="Morbi tempor ullamcorper turpis, in porta lacus. Etiam facilisis velit in ante tincidunt cursus."/>
          <Box id="b14" title="title"
               priority={10}
               content="Curabitur at libero tellus. Integer mattis id metus ac hendrerit. Aenean non tellus nisi."/>
          <Box id="b15" title="Non tellus nis"
               priority={6}
               content="Nam ac pretium velit, vitae scelerisque orci. Vestibulum feugiat urna quam, quis interdum dui ornare et."/>
          <Box id="b16" title="Title"
               priority={3}
               content="Quisque viverra euismod nulla, at porttitor libero tempus a. Duis sed placerat magna, vitae efficitur erat. In accumsan nisl mauris, vel sodales ligula dictum vel. Aliquam a orci lobortis, varius nunc at, viverra nisl."/>
          <br/><br/>
        </BoxDashboard>
        <AsidePane expandWidth="1fr" position="right"/>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
