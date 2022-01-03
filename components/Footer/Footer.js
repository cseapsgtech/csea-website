import TitleWithLine from "../TitleWithLine"
import Glasscard from "../Glasscard"
import OtherLinksHolder from "./OtherLinksHolder"

const Footer = () => {
    return(
        <div className="mb-6">
            <TitleWithLine title="Contact" styles="text-xl font-bold" />
            <div className="flex flex-col md:flex-row gap-6">
                <OtherLinksHolder />
                <Glasscard styles="bg-green-500 w-full">
                    Address and contact details go here...
                </Glasscard>
                {/* TODO: Insert Google Map here */}
            </div>
        </div>
    )
}

export default Footer