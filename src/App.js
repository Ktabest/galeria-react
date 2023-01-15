import Header from './Header';
import Card from './Card';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
function App() {
  return (
    
  <div className='App'>
    <Header title="Galería de imágenes con React" />
    <div className='row'>
    <Card
    title='Ramo rosas' 
    description='Ramo de rosas rojas' 
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-Ckq4vl1IdAEHj_GLfQEloV9FHyakNUdoA&usqp=CAU'/>
     <Card
    title='Ramo Gerberas' 
    description='Ramo de gerberas rosas' 
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCJiZ_k__cSIOJNEJ_cLwjNHsCKkG1PVVWw&usqp=CAU'/>
     <Card
    title='Ramo Liliums' 
    description='Ramo de liliums diferentes colores' 
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1ZKaMP-myDcQ16p82NdoxnhPPBr5Xl7aQQ&usqp=CAU'/>
     <Card
    title='Ramo rosas y girasoles' 
    description='Ramo mezcla de rosas rojas y girasoles' 
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0qXZFjgufOGXCexqJOF-9F1IFCxLnEprBKXVYu6FcRby8rI5XxGMIJ8v5FLlFYVPEBU&usqp=CAU'/>  
   </div>
   <Footer description= 'Flores para toda ocasión'/>
  </div>
 
  )
}

export default App;
