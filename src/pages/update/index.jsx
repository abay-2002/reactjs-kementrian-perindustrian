import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
    const navigate = useNavigate();

    const { id } = useParams();

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [inputName, setInputName] = useState(null);
    const [inputAuthor, setInputAuthor] = useState(null);

    useEffect(() => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://127.0.0.1:8000/api/books/${id}`,
          headers: { }
        };
        
        axios.request(config)
        .then((response) => {
            setName(response.data.name);
            setAuthor(response.data.author);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    function updateHandler() {
        let data = JSON.stringify({
            "name": inputName,
            "author": inputAuthor
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://127.0.0.1:8000/api/books/${id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert("Data berhasil terubah!");
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className="m-10 flex flex-col gap-6">
            <h1 className="text-3xl font-medium">Update Book</h1>
            <div>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input
                        onChange={(e) => setInputName(e.target.value)}
                        placeholder={name}
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="author" classauthor="block mb-2 text-sm font-medium text-gray-900">author</label>
                    <input
                        onChange={(e) => setInputAuthor(e.target.value)}
                        placeholder={author}
                        type="text"
                        id="author"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                {(inputName !== null) && (inputAuthor !== null) ?
                    <button
                        onClick={() => updateHandler()}
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Update
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