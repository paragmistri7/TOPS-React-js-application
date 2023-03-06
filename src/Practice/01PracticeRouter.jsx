import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Practice01 from './03 practice01';
import Intropractice from './02 intropractice';
import Practice02 from './04 practice 02 ';
import Practice03 from './05 importexport';
import Cardprops from './07 cardprops ';
import Slotmachine from './13 slotmachine ';
import Gettime from './14 gettime ';
import Digitalclock from './15 digitalclock ';
import Formcontrolled from './16 form controlled ';
import Formcontroll02 from './17 formcontroll ';
import Formspread from './18 form spread ';
import Todolist from './19 todolist ';
import IncreDecre from './21 incre-decrement ';
import Todolist02 from './22 todolist02 ';
import Questionanswers01 from './24 questionanswer ';
import Note from './26 mainnote01 ';
import UsecontextAPI from './31 usecontextAPI ';
import Useeffect from './35 useeffect ';
import CovidApi from './36 covidApi ';
import PokemanAxios from './37 pokemanAxios ';
import UseParam01 from './38 useParam';
import SearchAny from './39 searchAny ';
import Errorpage from '../component/errorpage ';
import Updatedtodo from './40 todolist ';
import Usereducer40 from './41 usereducer ';
import File1 from './42 File1 ';
import UpdatedTodols from './updated todo ';
import Usecallback01 from './45 usecallback01 ';
import Usememos from './47 usememo ';


class PracticeRouter extends Component {
    render() {
        return (
            <Routes>
                 <Route path="/" element={<Intropractice/>}>
                   <Route path='practice01' element = {<Practice01 />} />
                   <Route path='practice02' element = {<Practice02/>} />
                   <Route path='practice03' element = {<Practice03/>} />
                   <Route path='cardprpos' element = {<Cardprops/>} />
                   <Route path='slotmachine' element = {<Slotmachine/>} />
                   <Route path='gettime' element = {<Gettime/>} />
                   <Route path='digitalclock' element = {<Digitalclock/>} />
                   <Route path='formcontroll' element = {<Formcontrolled/>} />
                   <Route path='formcontroll02' element = {<Formcontroll02/>} />
                   <Route path='formspread' element = {<Formspread/>} />
                   <Route path='todolist' element = {<Todolist/>} />
                   <Route path='incredecre' element = {<IncreDecre/>} />
                   <Route path='todolist02' element = {<Todolist02/>} />
                   <Route path='questionanswer01' element = {<Questionanswers01/>} />
                   <Route path='notes' element = {<Note/>} />
                   <Route path='contextapi' element = {<UsecontextAPI/>} />
                   <Route path='useeffect' element = {<Useeffect/>} />
                   <Route path='covidapi' element = {<CovidApi/>} />
                   <Route path='pokemanaxios' element = {<PokemanAxios/>} />
                   <Route path='useparam/:fname/:lname' element = {<UseParam01/>} />
                    <Route path='searchany' element={<SearchAny />} />
                    <Route path='updatedtodo' element={<Updatedtodo />} />
                    <Route path='usereducer40' element={<Usereducer40/>} />
                    <Route path='usecontext44' element={<File1/>} />
                    <Route path='UpdatedTodols' element={<UpdatedTodols/>} />
                    <Route path='usecallback01' element={<Usecallback01/>} />
                    <Route path='Usememos' element={<Usememos/>} />
                    
                    <Route path='*' element={<Errorpage />} />
                
                    
                </Route>
            </Routes>
        );
    }
}

export default PracticeRouter;