export default function Footer({}) {

    return (
        <div className="flex w-full h-[10%] bg-gray-300 mt-4 justify-evenly">
            <div className="flex flex-col w-1/4 bg-yellow-100 items-center">
                <p>mobile: 07432456400</p>
                <p>email: shreena@veganbites.uk</p>
            </div>
            <div className="flex flex-col w-1/4 bg-yellow-100 items-center">
                <p>vegan bites ltd</p>
                <p>company no.  13675077</p>
            </div>
            <div className="flex flex-col w-1/4 bg-yellow-100 items-center">
                <p>facebook: @veganbites.uk</p>
                <p>instagram: @veganbites.uk</p>
            </div>
        </div>
    )
}