import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Table() {

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
    
    const [data, setData] = useState([]);

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/api/books',
            headers: { }
        };

        axios.request(config)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="relative overflow-x-auto">
            <h1 className="hidden">Kementrian</h1>
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
                                {item.publish_date}
                            </td>
                            <td className="px-6 py-4">
                                {item.created_at}
                            </td>
                            <td className="px-6 py-4">
                                {item.updated_at}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}