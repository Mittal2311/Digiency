import React from "react";
import BlogBanner from "../component/BlogBanner";
import BlogContent from "../component/BlogContent";
import Footer from "../component/Footer";
import Header from "../component/Header";

const Blog = () => {
    return(
        <>
          {/* <Header />
         <Footer/> */}
         
            {/* banner section start */}
             <BlogBanner />
             {/* banner section end */}

             {/* Blog content section start  */}
             
            <BlogContent />
             {/* Blog content section end  */}

        </>
    )
}
export default Blog;