export default function Create() {
    return (
        <div className="m-10 flex flex-col gap-6">
            <h1 className="text-3xl font-medium">Create Book</h1>
            <form>
                <div className="mb-5">
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                </div>
                <div className="mb-5">
                    <label for="author" classauthor="block mb-2 text-sm font-medium text-gray-900">author</label>
                    <input type="text" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Create</button>
            </form>

        </div>
    )
}