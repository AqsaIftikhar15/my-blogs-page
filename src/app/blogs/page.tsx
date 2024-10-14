import Image from "next/image";
import image from "../../../images/image.png";
import image2 from "../../../images/image2.jpg";
import image3 from "../../../images/image3.jpg";
import image4 from "../../../images/image4.webp";
import image5 from "../../../images/image5.png";
import image6 from "../../../images/image6.png"; 

export default function BlogsPage() {
  return (
    <div className="parentdiv">
        <h1 className="blog-heading">Check Out Our Recent Blogs</h1>
          <div className="child fade-in">
          <div className="blog-box">
            <div className="imageContainer">
              <Image className="blogpics" src={image} alt="depression" width={300} height={200} />
            </div>
            <h4 className="title">Depression</h4>
            <p className="description">If you are going through depression, this information is definitely going to help you!</p>
            <a href="https://psychescoop1.blogspot.com/2024/07/depression.html" target="_blank" rel="noopener noreferrer">
              <button className="transparent-button">Visit Site</button>
            </a>
          </div>

          <div className="blog-box">
            <div className="imageContainer">
              <Image className="blogpics" src={image2} alt="trauma" width={300} height={200} />
            </div>
            <h4 className="title">Trauma</h4>
            <p className="description">Understanding Trauma and how to cope with it effectively.</p>
            <a href="https://psychescoop1.blogspot.com/2024/07/coping-with-trauma.html" target="_blank" rel="noopener noreferrer">
              <button className="transparent-button">Visit Site</button>
            </a>
          </div>

          <div className="blog-box">
            <div className="imageContainer">
              <Image className="blogpics" src={image3} alt="happies" width={300} height={200} />
            </div>
            <h4 className="title">Science of Happiness</h4>
            <p className="description">Learn how to be happy in daily chores.</p>
            <a href="https://psychescoop1.blogspot.com/2024/07/science-of-happiness.html" target="_blank" rel="noopener noreferrer">
              <button className="transparent-button">Visit Site</button>
            </a>
          </div>

          <div className="blog-box">
            <div className="imageContainer">
              <Image className="blogpics" src={image4} alt="parenting" width={300} height={200} />
            </div>
            <h4 className="title">Parenting Tips</h4>
            <p className="description">Explore parenting tips for child development.</p>
            <a href="https://psychescoop1.blogspot.com/2024/07/parenting-tips-for-child-development.html" target="_blank" rel="noopener noreferrer">
              <button className="transparent-button">Visit Site</button>
            </a>
          </div>

          <div className="blog-box">
            <div className="imageContainer">
              <Image className="blogpics" src={image5} alt="Self-Care Tips" width={300} height={200} />
            </div>
            <h4 className="title">Anxiety Tips</h4>
            <p className="description">Simple practices and meditations to manage anxiety.</p>
            <a href="https://psychescoop1.blogspot.com/2024/07/how-to-manage-anxiety.html" target="_blank" rel="noopener noreferrer">
              <button className="transparent-button">Visit Site</button>
            </a>
          </div>

          <div className="blog-box">
            <div className="imageContainer">
              <Image className="blogpics" src={image6} alt="Overcoming Challenges" width={300} height={200} />
            </div>
            <h4 className="title">Overcoming Narcissism</h4>
            <p className="description">Strategies for overcoming and dealing with narcissistic personality.</p>
            <a href="https://psychescoop1.blogspot.com/2024/07/dealing-with-narcissistic-personality.html" target="_blank" rel="noopener noreferrer">
              <button className="transparent-button">Visit Site</button>
            </a>
          </div>
          </div>

        </div>
  );
}


