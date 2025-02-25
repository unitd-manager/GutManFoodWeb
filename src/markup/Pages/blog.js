import React, { useEffect, useState } from 'react';
import api from '../../constants/api';
import { Link } from "react-router-dom";
import imageBase from "../../constants/imageBase";

const BlogScreen = () => {
    const [blogNews, setBlog] = useState([]);

    const getBlog = async () => {
        try {
            const res = await api.get('/content/getBlog');
            console.log("API Response:", res.data);
            const data = res.data.data.map((el) => ({
                ...el,
                images: String(el.images).split(","),
            }));
            setBlog(data);
        } catch (error) {
            console.error("Error fetching blog posts:", error);
        }
    };

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <div className="container content-inner"> 
        <div className="row">
            <div className="col-lg-12">
                <div className="section-head text-center">
                    <div className="icon-bx icon-bx-xl">
                        <img src={require('./../../images/cake1.jpg')} alt="" />
                    </div>
                    <h3>From The Blog</h3>
                    <p>Latest news and updates</p>
                </div>
            </div>
        </div>
        <div className="row">
        {blogNews&&blogNews.map((item, index) => (
        <div className="col-lg-4 col-md-6" key={index}>
            <div className="blog-post blog-grid blog-rounded">
                <div className="dlab-post-media dlab-img-effect"> 
                    <Link to={'/blog-single-sidebar'}>
                        {item.images?.length > 0 && (
                            <img
                                src={`${imageBase}${encodeURIComponent(item.images[0].trim())}`}
                                alt={item.title || "Product Image"}
                                style={{ width: "100%", height: "250px"}}
                                />
                        )}
                    </Link> 
                </div>
                        <div className="dlab-info p-a25">
                            <div className="dlab-post-title">
                                <h4 className="post-title"><Link to={'/blog-single-sidebar'}>{item.title}</Link></h4>
                            </div>
                            <div className="dlab-post-meta">
                                <p className="main-text" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            
        </div>
    </div>  
    );
};
export default BlogScreen;