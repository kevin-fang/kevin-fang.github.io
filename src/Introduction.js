import React from 'react'
import 'bulma/css/bulma.css'

const studentjobs = {
	title: "Student Jobs Finder",
	content: "Allows students to locate which lunch clean up job they have",
	link: "https://cws-student-jobs.surge.sh"
}

const cwsgooglecal = {
	title: "CWS Google Scheduler",
	content: "Allows students to schedule their classes on Google Calendar",
	link: "https://kevin-fang.github.io/cws-google-calendar"
}

const convertr = {
	title: "Convertr for Crypto",
	content: "Converts the value of cryptocurrencies to other cryptocurrencies/fiat",
	link: "https://kevin-fang.github.io/crypto-calc"
}

const cwschronicle = {
	title: "CWS Chronicle Site",
	content: "Currently in progress: a website for the school newspaper",
	link: "https://github.com/kevin-fang/cws-chronicle"
}

const projects = [studentjobs, cwsgooglecal, convertr, cwschronicle]

export default class Introduction extends React.Component {

	buildCard = (project) => {
		return (
			<div class='card' style={{marginLeft: 12, marginRight: 12}}>
				<header class='card-header'>
				 	<p class='card-header-title'>{project.title}</p>
				</header>
				<div class='card-content'>
					<div class='content'>
						{project.content}
					</div>
				</div>
				<footer class='card-footer has-text-cnetered'>
					<a href={project.link} target='_blank' style={{margin: 12}}>Visit</a>
				</footer>
			</div>
		)
	}

	getExtraProjects = () => {
		return (
			<div class='columns'>
				{ projects.map((project) => {
					return (
						<div class='column'>
							{this.buildCard(project)}
						</div>
					)
				}) }
			</div>
		)
	}

	render() {
		return (
			<section style={{margin: 12}}>
				<div class='container' style={{marginTop: 18}}>
					<h1 class='title'>About Me</h1>
					<h2 class="subtitle">
						A Brief Introduction
					</h2>
					<div class='body'>
						I am currently a high school senior at Commonwealth School. 
						I have several years of experience working in computer science 
						and data science, but I am also deeply interested in the fields
						of physics, biology, and math.
						<br/><br/>
						I was a data scientist at Curoverse (now owned by Veritas Genetics) 
						for the past two summers, developing big-data analytical tools for
						genomic data using machine learning, with an emphasis on reproducible 
						work using technologies such as Arvados and Docker. I worked with
						support vector machines to locate specific single nucleotide 
						polymorphisms responsible for phenotypic expression.
						<br/>
						<a href="https://doi.org/10.5281/zenodo.844927"> <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.844927.svg" alt="DOI"/> </a>
						<a href="https://doi.org/10.5281/zenodo.843580"> <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.843580.svg" alt="DOI"/> </a>
						<br/><br/>

						I've interned with the MIT Whitehead Institute, working with NCBI 
						BLAST (Basic Local Alignment Search Tool) and Needleman-Wunsch 
						alignment scripts and writing parsers, as well as an automation
						system for database updating. I've also interned at the Tufts 
						CEEO (Center for Engineering Education and Outreach), working 
						with robotics and 3D printers. 
						<br/><br/>
						In my free time, I do full stack development, write Android 
						applications, and work with microcontrollers such as the Raspberry Pi and Arduino. 
						I've published an application to the Google Play Store, 
						called <a href="https://play.google.com/store/apps/details?id=com.kfang.fenceme">FenceMe! 
						Fencing Scorekeeper</a>, as an alternative, well-designed way of keeping track of 
						fencing bouts for referees.
						I have also done some minor web projects:<br/><br/>
						{this.getExtraProjects()}
						If you're looking for an enthusiastic and dedicated student intern, 
						please get in touch with me at <a href="mailto:kevinzfang@gmail.com">kevinzfang@gmail.com</a>
						<br/><br/>
					</div>
				</div>
			</section>
		)
	}
}