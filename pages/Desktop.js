import Banner2 from "../component/Benner2";
import Header from "../component/Header";
import Ourservice from "../component/OurService";
import SecoundAboutus from "../component/SecoundAboutus";
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
        <Secoundfooter />
      </div>
    </>
  );
}
