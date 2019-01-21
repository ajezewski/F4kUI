import React, { Component } from 'react';
import BoxDashboard from './boxDashboard/BoxDashboard.tsx';
import Box from './box/Box';
import Button from './button/Button.tsx';
import AsidePane from './asidePane/AsidePane';
import './App.css';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header>Header</header>
                <AsidePane expandWidth="1fr" position="left"/>
                <BoxDashboard hideSourceOnDrag={ true }>
                    <Box id="b1" title="Simple title"
                         tags={['task', 'fun']}
                         content="Proin libero risus, convallis in gravida at, suscipit sit amet metus. Integer iaculis ipsum non finibus dapibus. Vivamus at molestie nunc."/>
                    <Box id="b2" title="Long title"
                         tags={['note', 'book']}
                         content="Integer iaculis ipsum non finibus dapibus."/>
                    <Box id="b3" title="title"
                         tags={['task', 'book']}
                         content="Cras auctor rutrum lacus quis rutrum. Praesent consequat vitae justo ac viverra."/>
                    <Box id="b4" title="title vitae justo"
                         content="Quisque viverra euismod nulla, at porttitor libero tempus a. In accumsan nisl mauris, vel sodales ligula dictum vel. Aliquam a orci lobortis, varius nunc at, viverra nisl. "/>
                    <Box id="b5" title="title"
                         content="Sodales ligula duis sed placerat magna, vitae efficitur erat."/>
                    <Box id="b6" title="Very long title"
                         content="Duis ut augue egestas, tempor libero non, ultrices nibh."/>
                    <Box id="b7" title="Long title"
                         content="Empty"/>
                    <Box id="b8" title="Donsectetur adipiscing elit"
                         content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet odio lacus. Nunc ultricies in sem id ultricies. Nulla quis posuere lorem. Quisque vehicula porttitor iaculis."/>
                    <Box id="b9" title="Title"
                         content="Donec eget imperdiet urna, eget placerat metus. Pellentesque vulputate urna vel neque tempor suscipit."/>
                    <Box id="b10" title="Neque tempor suscipit title"
                         content="Shows buttons"
                         footer={
                             <div>
                                 <Button btnType="alert" value="x" className="alert" />
                                 <Button btnType="accept" value="&#x2713;" className="accept" />
                                 <Button btnType="info" value="i" className="info" />
                                 <Button btnType="more" value=">" className="more" />
                             </div>
                         }
                    />
                    <Box id="b11" title="Molestie pellentesquee"
                         content="Donec consequat, dui vel molestie pellentesque, ex ligula ullamcorper risus, id commodo nisl ligula eget nibh. "/>
                    <Box id="b12" title="Title"
                         content="Nullam fermentum pellentesque ex, sit amet efficitur nunc porttitor sodales. Morbi varius ex sit amet condimentum faucibus."/>
                    <Box id="b13" title=""
                         content="Morbi tempor ullamcorper turpis, in porta lacus. Etiam facilisis velit in ante tincidunt cursus."/>
                    <Box id="b14" title="title"
                         content="Curabitur at libero tellus. Integer mattis id metus ac hendrerit. Aenean non tellus nisi."/>
                    <Box id="b15" title="Non tellus nis"
                         content="Nam ac pretium velit, vitae scelerisque orci. Vestibulum feugiat urna quam, quis interdum dui ornare et."/>
                    <Box id="b16" title="Title"
                         content="Quisque viverra euismod nulla, at porttitor libero tempus a. Duis sed placerat magna, vitae efficitur erat. In accumsan nisl mauris, vel sodales ligula dictum vel. Aliquam a orci lobortis, varius nunc at, viverra nisl."/>
                    <br/><br/>
                </BoxDashboard>
                <AsidePane expandWidth="1fr" position="right" />
                <footer>Footer</footer>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(App);
