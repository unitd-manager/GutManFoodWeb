import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bloggrid from './../Pages/Bloggrid';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
// import SimpleReactLightbox from 'simple-react-lightbox';
// import { SRLWrapper } from 'simple-react-lightbox';
import api from "../../constants/api"; // Ensure you have your API setup

var img = require('./../../images/banner/bnr1.jpg');

const Bloggridrightsidebar = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // Fetch all published blogs
  useEffect(() => {
    api.get('/blog/getBlogPublish')
      .then(response => {
        setBlogs(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  // Handle search by keyword
  const handleSearch = (keyword) => {
    api.post('/blog/getBlogBySearch', { keyword })
      .then(response => {
        setSearchResults(response.data.data);
      })
      .catch(error => {
        console.error('Error searching blogs:', error);
      });
  };

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: `url(${img})` }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Blog</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li><Link to={'/'}>Home</Link></li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-inner section-full">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <Bloggrid blogs={blogs} searchResults={searchResults} />
              </div>
              <div className="col-lg-4 sticky-top">
                <aside className="side-bar">
                  <div className="widget">
                    <div className="search-bx style-2">
                      <form
                        role="search"
                        method="post"
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSearch(e.target.keyword.value);
                        }}
                      >
                        <div className="input-group">
                          <input
                            name="keyword"
                            className="form-control"
                            placeholder="Enter your keywords..."
                            type="text"
                          />
                          <span className="input-group-btn">
                            <button type="submit" className="btn btnhover primary">
                              Search
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Other widgets */}
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bloggridrightsidebar;