import Table from "../blocks/Table";

export default function Home() {
    return (
        <div className="m-10 flex flex-col gap-6">
            <h1 className="text-3xl font-medium">Product</h1>
            <Table />
        </div>
    );
}