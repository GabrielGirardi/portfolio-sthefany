import Router from "@/routes/router";

function Content() {
    return (
        <div className="flex max-w-[90%] md:max-w-[80%] mx-auto bg-contain w-full mt-6 md:mt-24 2xl:mt-48">
            { Router() }
        </div>
    )
}

export default Content;