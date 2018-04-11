class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = '200px';
		this.width = '300px';
		this.bg = 'green';
		this.fontSize = '20px';
		this.textAlign = "center";

	}
	newDiv() {
		let div = document.createElement('div');

		div.innerHTML = "Hello";

		div.style.cssText = `height:${this.height}; width:${this.width}; background-color:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign};`;

		document.body.appendChild(div);

	}
}

let object = new options;

object.newDiv();