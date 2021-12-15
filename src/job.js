import React, {UseState, UseEffect} from "react";

function data(){

    const[people,setJob] = UseState(null);

    UseEffect(() =>{
if(localStorage){
    const people = JSON.parse(localStorage.getItem('people'));
    if(people){
        setJob(people);
    }
}
    }, []);

    function resetJob(){
        // save the seed data and save it to local storage
        const peopleInfo = [{
            "job": "Recruiter",
            "firstName": "Townsend",
            "lastName": "Mollison"
          }, {
            "job": "Sales Associate",
            "firstName": "Noni",
            "lastName": "Olliver"
          }, {
            "job": "Pharmacist",
            "firstName": "Haskell",
            "lastName": "McGreil"
          }, {
            "job": "Financial Advisor",
            "firstName": "Ericha",
            "lastName": "Tyne"
          }, {
            "job": "Associate Professor",
            "firstName": "Massimiliano",
            "lastName": "Alabone"
          }, {
            "job": "Community Outreach Specialist",
            "firstName": "Barnabas",
            "lastName": "Sellek"
          }, {
            "job": "Chief Design Engineer",
            "firstName": "Iolanthe",
            "lastName": "Tackley"
          }, {
            "job": "Structural Engineer",
            "firstName": "Norah",
            "lastName": "Donner"
          }, {
            "job": "Senior Quality Engineer",
            "firstName": "Valentina",
            "lastName": "Mell"
          }, {
            "job": "Engineer IV",
            "firstName": "Rodrique",
            "lastName": "Shutt"
          }, {
            "job": "Paralegal",
            "firstName": "Eleonora",
            "lastName": "Radband"
          }, {
            "job": "Financial Analyst",
            "firstName": "Shaun",
            "lastName": "Wetton"
          }, {
            "job": "Staff Accountant III",
            "firstName": "Tomi",
            "lastName": "Romaines"
          }, {
            "job": "Recruiter",
            "firstName": "Sissie",
            "lastName": "Spick"
          }, {
            "job": "Structural Analysis Engineer",
            "firstName": "Inez",
            "lastName": "Pinnick"
          }, {
            "job": "GIS Technical Architect",
            "firstName": "Sylvan",
            "lastName": "Giametti"
          }, {
            "job": "Administrative Officer",
            "firstName": "Blondy",
            "lastName": "Aldus"
          }, {
            "job": "Geologist IV",
            "firstName": "Robinet",
            "lastName": "Norcock"
          }, {
            "job": "Research Nurse",
            "firstName": "Julie",
            "lastName": "Norcop"
          }, {
            "job": "Civil Engineer",
            "firstName": "Paddy",
            "lastName": "Dell 'Orto"
          }]
          setJob(peopleInfo);
          if(localStorage) {
              localStorage.setItem('people',JSON.stringify(peopleInfo));
              console.log('seed data saved to local storage');
          }
    };

    return (
        <div className="container">
        <p>people data</p>
        <ul>
           {!people && <button className="btn btn-lg btn-success" onClick={resetJob}>Reset</button>}
           {people && people.map((people, index) => {
               return <li key = {index}>{people.lastName} {people.firstName} {people.job}</li>

           })}
        </ul>
        {/* // <button  className="btn btn-lg btn-warning"  onClick ></button> */}
        </div>
    );

}

export default data;