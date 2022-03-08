import Bloghomepage from "../component/BlogDesign/Bloghomepage";
import Blogpart from "../component/BlogDesign/Blogpart";
import Footer from "../component/BlogDesign/Footer";
import Navbar2 from "../component/BlogDesign/Navbar2";

export default function Blog() {
  return (
    <>
      <div>
        <Navbar2 />
      </div>
      <div>
        <Bloghomepage />
      </div>
      <Blogpart />
      <div>
        <Footer />
      </div>
    </>
  );
}
