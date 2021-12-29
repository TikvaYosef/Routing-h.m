import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Student from "../student/Student";
import Teacher from "../teacher/Teacher";
import Parent from "../parent/Parent";



const Router = () => {

    return (
      
            <Routes>
             <Route exact path ="/" elemen = {<HomePage/>}/>
             <Route  path ="/student" elemen = {<Student/>}/>
             <Route  path ="/teacher" elemen = {<Teacher/>}/>
             <Route  path ="/parent" elemen = {<Parent/>}/>
            </Routes>
      

    )
};

export default Router;
