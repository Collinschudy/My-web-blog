import BookOrder from "../../components/book-order/bookorder.component";
import Introduction from "../../components/introduction/introduction.component";
import AboutSection from "../../components/aboutSection/aboutsecton.component";
import SampleBlog from "../../components/sample-blogs/samples.component";


import './homepage.css';
import Footer from "../../components/footer-section/footer.component";

const HomePage = () => {
    return (
        <div className="homepage">
            <Introduction />
            <BookOrder />
            <SampleBlog />
            <AboutSection />
            <Footer />
        </div>
    )
}

export default HomePage;