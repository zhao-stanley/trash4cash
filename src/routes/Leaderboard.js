import Navbar from "../components/Navbar";

const Leaderboard = () => {
    return (
        <>
            <Navbar current={2} />
            <div className="bg-gray-800 h-screen w-full flex flex-col items-center justify-center font-[Inter]">
                <h1 className="text-white">Leaderboard</h1>
            </div>
        </>
    )
}

export default Leaderboard;