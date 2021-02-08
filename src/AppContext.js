import React from "react";
import axios from 'axios';


export const PeopleContext = React.createContext(
    {
        
        people: [],
        handlePeopleChange: async(person) => {
            const reponse= await axios.post('localhost:3000/persona', person );
            if (reponse.status==200) {
                console.log(reponse);
                return('OK');
            }
        },

        bringPeople: async()=>{
            const reponse=await axios.get(`localhost:3000/personas`);
            return reponse;

        },

        bringAPerson: async(id)=>{
            const reponse=await axios.get(`localhost:3000/personas/${id}`);
            return reponse;
        }

    }
);

export const CategoriesContext = React.createContext(
   
    { 
        handleCategoryChange: async(categoria)=>{
            const reponse= await axios.post('localhost:3000/categoria', categoria );
            if (reponse.status==200) {
                console.log(reponse);
                return('OK');
            }
        },

        bringCategories: async()=>{
            const reponse= await axios.get('localhost:3000/categoria');
            return reponse;
        }
    }

);

export const BooksContext = React.createContext(
    {
        
        books: [],
        handleBooksChange: async(book) => {
            const reponse= await axios.post('localhost:3000/libro', book );
            if (reponse.status==200) {
                console.log(reponse);
                return('OK');
            }
        },

        bringBook: async()=>{
            const reponse=await axios.get(`localhost:3000/personas`);
            return reponse;

        },

        bringABook: async(id)=>{
            const reponse=await axios.get(`localhost:3000/personas/${id}`);
            return reponse;
        }

    }
);