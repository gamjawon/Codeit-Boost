import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodeitBoost from './codeitBoost/CodeitBoost';

const Router =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CodeitBoost/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;