import axios from "axios";
import { useEffect, useState } from "react";

export default function Create() {

    const [inputName, setInputName] = useState('');
    const [inputAuthor, setInputAuthor] = useState(''); 

    // == Event Handler ==
    function postHandler() {       
        let data = JSON.stringify({
            "name": "Hello From React",
            "author": "angkasa",
            "publish_date": "2023-12-5"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/api/books',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                alert('Berhasil Menambah Data!')
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="m-10 flex flex-col gap-6">
            <h1 className="text-3xl font-medium">Create Book</h1>
            <div>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input
                        onChange={(event) => setInputName(event.target.value)}
                        type="text" 
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="author" classauthor="block mb-2 text-sm font-medium text-gray-900">author</label>
                    <input
                        onChange={(e) => setInputAuthor(e.target.value)}
                        type="text" 
                        id="author" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    />
                </div>
                {(inputName !== '')&&(inputAuthor !== '') ?
                    <button
                        onClick={() => postHandler()}
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Create
                    </button>
                    :
                    <button
                        className="cursor-not-allowed text-white bg-gray-700  focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        disabled
                    >
                        Create
                    </button>
                }
            </div>
        </div>
    )
}