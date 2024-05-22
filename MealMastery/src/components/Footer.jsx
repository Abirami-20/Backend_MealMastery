import { FaGithub, FaInstagram, FaMailBulk} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-white py-8 bg_gradient">
            <div className="container mx-auto px-20 lg:px-20 py-8 flex flex-col gap-10 md:flex-row justify-evenly border-t border-slate-800">
                <div className="flex">
                    <p className="font-bold text-center">
                        Meal<span className="text-green-500 text-xl">Mastery</span>
                    </p>
                </div>
                <div className="flex flex-col">
                    <p>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                    <a
                            href='#'
                            className='bg-green-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaGithub size={18} />
                        </a>

                        <a
                            href='#'
                            className='bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaInstagram size={18} />
                        </a>
                       
                        <a
                            href='#'
                            className='bg-red-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaMailBulk size={18} />
                        </a>
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-center py-8">
                <span className="text-gray-400 leading-10">Abirami &copy; 2024</span>
            </div>
        </footer>
    )
}

export default Footer