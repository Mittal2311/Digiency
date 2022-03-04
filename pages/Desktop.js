import Banner2 from "../component/Benner2";
import Header from "../component/Header";
import Ourcapabilities from "../component/Ourcapabilities";
import Ourcasestudy from "../component/Ourcasestudy";
import Ourservice from "../component/OurService";
import Ourtestimonial from "../component/Ourtestimonial";
import SecoundAboutus from "../component/SecoundAboutus";
import Secoundourblog from "../component/SecoundOurBlog";
import secoundourblog from "../component/SecoundOurBlog";
import Secoundfooter from "../component/Secounfooter";

export default function Desktop() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Banner2 />
      </div>
      <div>
        <Ourservice />
      </div>
      <div>
        <SecoundAboutus />
      </div>
      <div>
        <Ourcasestudy />
      </div>
      <div>
        <Ourtestimonial />
      </div>
      <div>
        <Ourcapabilities />
      </div>
      <div>
        <Secoundourblog /> 
      </div>
      <div>
        <Secoundfooter />
      </div>
    </>
  );
}
