import React from 'react';

const dummyPosts = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Healthy for Diabetics',
  },
  {
    id: 2,
    image:
      'https://m.media-amazon.com/images/I/61f0XAJtJnL.UF1000,1000_QL80.jpg',
    link: 'https://instagram.com',
    caption: 'Keto Diet',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Delicious Pizza',
  },
  {
    id: 4,
    image:
      'https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2021/items-promoting-healthy-weight.jpg?sc_lang=en&hash=9C54C2EEB9D5163EC0823F673962A339',
    link: 'https://instagram.com',
    caption: 'Balanced Weight Reduction',
  },
  {
    id: 5,
    image:
      'https://drbest.in/wp-content/uploads/2019/07/001.jpg',
    link: 'https://instagram.com',
    caption: 'Essential Health Boosters',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Nourishing Munchies',
  },
  {
    id: 7,
    image:
      'https://www.makeaheadmealmom.com/wp-content/uploads/2019/09/EasyBreakfastPastries_FeaturedImage_Compressed.jpg',
    link: 'https://instagram.com',
    caption: 'Guiltfree Pastries',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Wholesome Nibbles',
  },
];

const DummyInstagramFeed = () => {
  return (
    <div style={{ padding: "5rem 0 7rem", backgroundColor: "#f9f9f9" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            marginBottom: "1.5rem",
            fontSize: "2rem",
            color: "#a020f0",
          }}
        >
          Follow Us on Instagram
        </h2>
        <div className="container">
          <div className="grid-container">
            {dummyPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item"
              >
                <img src={post.image} alt={post.caption} className="post-image" />
                <div className="caption">{post.caption}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          .grid-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 35px;
            justify-content: center;
            align-items: center;
          }

          .grid-item {
            display: block;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
            width: 100%;
            height: 200px;
          }

          .grid-item:hover {
            transform: scale(1.05);
          }

          .post-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            border-radius: 8px;
          }

          .caption {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(160, 32, 240, 0.7);
            color: #fff;
            padding: 0.5rem;
            text-align: center;
            font-size: 0.9rem;
          }

          @media (max-width: 1024px) {
            .grid-container {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 768px) {
            .grid-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}
      </style>
    </div>
  );
};

export default DummyInstagramFeed;
