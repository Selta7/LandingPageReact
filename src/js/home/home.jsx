import React from "react";
import NavBar from "../component/navBar";
import Jumbotron from "../component/jumbotron";
import Card from "../component/card";
import Button from "../component/button";
import Footer from "../component/footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<NavBar />
		<Jumbotron title="A Warm Welcome" description="This text is using the proptypes so its easier to be moldable in the future"/>
		<div className="card-group">
			<Card title="Card Title" description="This text is using the proptypes so its easier to be moldable in the future" />
			<Card title="Card Title" description="This text is using the proptypes so its easier to be moldable in the future" />
			<Card title="Card Title" description="This text is using the proptypes so its easier to be moldable in the future" />
			<Card title="Card Title" description="This text is using the proptypes so its easier to be moldable in the future" />

		</div>
		<Footer copyright="Copyright © 2023 :" website=" Your Website" />

		</>
	);
};

export default Home;
