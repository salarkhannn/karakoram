import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import allFAQ from "../data/helpText";


export default function Help(){
    return (
        <>
            <Navbar />
            <div className="help mb-20 font-['Neue'] max-w-[fit-content] mt-[100px] mb-[100px] ml-auto mr-auto">
                <p className="help-title mb-10 text-center text-[48px] font-medium">Frequently Asked Questions (FAQ)</p>
                <ul className="help-list">
                    {allFAQ.map((faqCategory) => (
                        <li className="" key={faqCategory.faqTitle}>
                            <p className="help-title2 mb-5 text-[36px] font-medium">{faqCategory.faqTitle}</p>
                            <ul>
                                {faqCategory.faq.map((item, index) => (
                                    <li className="mb-3" key={index}>
                                        <p className="faq-question font-medium tracking-[0px]">{item.title}</p>
                                        <p className="faq-answer">{item.description}</p>
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