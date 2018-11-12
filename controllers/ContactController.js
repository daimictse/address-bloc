const inquirer = require("inquirer");
const Contact = require("../db/models").Contact; // connect to the Contact model

module.exports = class ContactController {

	constructor(){
		this.contacts = [];
		this.addContactQuestions = [
		   {
			type: "input",
			name: "name",
			message: "Contact's name - ",
			validate(val) {
				return val !== "";
		   	}
		   },
		   {
			type: "input",
			name: "phone",
			message: "Contact's phone number - ",
			validate(val) {
				return val !== "";
			}
		   },
		   {
			type: "input",
			name: "email",
			message: "Contact's email - ",
			validate(val) {
				return val !== "";
			}
		   }
		];
	}

	addContact(name, phone, email) {
		// create is a method of the Contact model
		return Contact.create({name, phone, email});
	}
}
