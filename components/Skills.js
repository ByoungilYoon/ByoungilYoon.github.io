export default function Skills() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">내가 할 수 있는 일</h1>
                        <p className="leading-relaxed text-base">보유한 스킬은 FORONT END, 약간의 BACK END가 가능하며, NEXT JS를 이용한 웹페이지 개발, TAILWIND CSS를 활용한 스타일 작업이 가능합니다.</p>
                    </div>
                    <div className="flex flex-col md:w-1/2 md:pl-12">
                        <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">Skills</h2>
                        <nav className="flex flex-wrap list-none -mb-1">
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">HTML5</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">CSS</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">JAVASCRIPT</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">NEXT JS</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">TAILWIND CSS</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">REACT JS</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">NODE JS</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">GITHUB</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}
