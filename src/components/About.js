// import logo from "../assets/logo";

const About = ({image = "https://via.placeholder.com/215", about= "About this blog"}) => (
    <>
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>

        </aside>
    </>
);

export default About;