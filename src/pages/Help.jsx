import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import allFAQ from "../data/helpText";


export default function Help(){
    return (
        <>
            <Navbar />
            <div className="help mb-10">
                <p className="help-title2">Frequently Asked Questions (FAQ)</p>
                <ul className="help-list">
                    {allFAQ.map((faqCategory) => (
                        <li key={faqCategory.faqTitle}>
                            <p className="help-title3">{faqCategory.faqTitle}</p>
                            <ul>
                                {faqCategory.faq.map((item, index) => (
                                    <li key={index}>
                                        <p className="faq-question">{item.title}</p>
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