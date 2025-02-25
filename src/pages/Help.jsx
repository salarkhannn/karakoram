import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import allFAQ from "../data/helpText";


export default function Help(){
    return (
        <>
            <Navbar />
            <div className="help font-['Neue'] max-w-[fit-content] mt-[20px] mb-[100px] ml-auto mr-auto">
                <p className="help-title mb-10 text-center font-medium text-[35px] tracking-[-1px]">Frequently Asked Questions (FAQ)</p>
                <ul className="help-list px-5">
                    {allFAQ.map((faqCategory) => (
                        <li className="" key={faqCategory.faqTitle}>
                            <p className="help-title2 mb-5 font-medium text-[32px] tracking-[-1px]">{faqCategory.faqTitle}</p>
                            <ul>
                                {faqCategory.faq.map((item, index) => (
                                    <li className="mb-3" key={index}>
                                        <p className="faq-question font-medium tracking-[0px] text-[15px]">{item.title}</p>
                                        <p className="faq-answer text-[15px]">{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    )
}