const Home = () => { 
    return (
        <div className="w-full h-screen">
            {/* Header */}
            <div className="bg-green-800 h-[10%]">Header</div>

            {/* Main Layout */}
            <div className="bg-yellow-400 h-[90%]">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="mb-4 text-8xl font-semibold font-sora text-green-600">Hello Umnafass!</h1>
                        <div className="flex gap-3">
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                            <a href="/store">Store</a>
                        </div>
                    </div>
                </div>
        </div>
    )
 }


 export default Home;