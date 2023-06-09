
const Topin = ({ title, extraPrice }) => {
    const extraLabel = extraPrice ? ' +' + (extraPrice) : '';
    return (
        <div className='py-1 px-2'>
            <div className='rounded-xl shadow whitespace-nowrap px-2 py-1'>
                <p className='text-xl'>{title + extraLabel}</p>
            </div>
        </div>
    );
}


const MenuItem = ({ title, description, imgUri, topins = [] }) => {
    return (
        <div className="sm:w-full md:w-auto lg:w-2/4 p-2 lg:max-w-xl">
            <div className="bg-white p-5 rounded-xl shadow">
                {/* INFO SECTION */}
                <div className=' overflow-hidden flex-1 xl:max-w-xl lg:max-w-xl flex flex-col items-center justify-center'>
                    <h4 className='text-3xl font-bold'>{title}</h4>
                    <div>
                        <img className='object-cover w-full max-h-96' src={imgUri} />
                    </div>
                </div>
                {/* TOPINS SECTION */}
                <div className='flex-1 m-4'>
                    <p className='text-xl'>{description}</p>
                    <div className='mt-10'>
                        <p className='text-xl'>Guisos</p>
                        <div className='flex flex-wrap xl:content-start lg:content-start'>
                            {topins.map((t, index) => <Topin key={'topin-' + index} {...t} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;