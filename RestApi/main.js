import React from 'react';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Post from './post';
import Get from './get';
import Update from './put';
import Delete from './delete';
import '../style/main.css'

function Main(){
    return (
        <div className='App'>
                 <Router>
                    <div class='nav'>
                        <div class='nav-link'>
                    <Link to='/'><button><b>MAIN</b></button></Link>
                    <Link to='/get'><button><b>VIEW</b></button></Link>
                    <Link to='/update'><button><b>UPDATE</b></button></Link>
                    <Link to='/delete'><button><b>DELETE</b></button></Link>
                    </div>
                    </div>
                   
                <Routes>
                
                <Route path='/' element={<Post/>}/>
                <Route path='/get' element={<Get/>}/>
                <Route path='/update' element={<Update/>}/>
                <Route path='/delete' element={<Delete/>}/>

                </Routes>
                </Router>

        </div>
    )
}

export default Main;