import React from 'react'
import 'bulma/css/bulma.css'


const links = [
	{ title: "GitHub", link: "https://github.com/kevin-fang"},
	{ title: "LinkedIn", link: "https://linkedin.com/in/kevin-fang"},
	{ title: "Email", link: "mailto:kevinzfang@gmail.com"}
]

export default class Toolbar extends React.Component {

	generateNav = (link) => {
		return (
			<a class='nav-item' href={link.link} target="_blank">
				{link.title}
			</a>
		)
	}
	getHeader = () => {
		return (
			<div class='hero-head'>
				<div class="nav-right nav-menu">
					{ links.map(this.generateNav) }
				</div>
			</div>
		)
	}
	getBody = () => {
		return (
			<div class='hero-body'>
				<h1 class="title">
					Kevin Fang
				</h1>
				<h2 class="subtitle">
					Commonwealth School Class of 2018
				</h2>
			</div>
		)
	}

	render() {
		return (
			<section class='hero is-primary is-small'>
				{this.getHeader()}
				{this.getBody()}
			</section>
			)
	}
}