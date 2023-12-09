import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import moment from "moment";

export default function Table() {

    const navigate = useNavigate();

    // const [count, setCount] = useState(0);
    // const [currentTime, setCurrentTime] = useState(moment().format('h:mm:ss a'));

    // const waktu = useState('6:03:00 pm');
    // const waktu2 = useState('6:05:00 pm');

    // useEffect(() => {

    //     setTimeout(() => {
    //         setCount((count) => count + 1);
    //         setCurrentTime(moment().format('h:mm:ss a'));
    //         console.log(currentTime);
    //         if(currentTime === waktu2){
    //             console.log('Waktunya Fetch API!');
    //         }
    //     }, 1000);
    // });

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState();

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/api/books',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [deleted, data]);

    function deleteHandler(id) {
        setLoading(true);
        setDeleted(id);

        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `http://127.0.0.1:8000/api/books/${id}`,
            headers: {}
        };

        axios.request(config)
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="relative overflow-x-auto">
            {loading ?
                <Loading />
                :
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Author
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Publish Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Updated At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b"
                            >
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item.author}
                                </td>
                                <td className="px-6 py-4">
                                    {moment(item.publish_date).format('YYYY MMMM DD')}
                                </td>
                                <td className="px-6 py-4">
                                    {moment(item.created_at).format('YYYY MMMM DD')}
                                </td>
                                <td className="px-6 py-4">
                                    {moment(item.updated_at).format('YYYY MMMM DD')}
                                </td>
                                <td className="px-6 py-4 flex flex-row gap-x-2">
                                    <button
                                        onClick={() => deleteHandler(item.id)}
                                        type="button"
                                        className="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => navigate(`/update/${item.id}`)}
                                        type="button"
                                        className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
}