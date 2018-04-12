class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;

	}
	newDiv() {
		let div = document.createElement('div');

		setTimeout(function(){
			div.textContent = prompt('How are you?', '');
		}, 300);

		div.style.cssText = `height:${this.height}; width:${this.width}; background-color:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign};`;

		document.body.appendChild(div);

	}
}

let object = new options("200px", "300px", 'blue', "20px", "center");

object.newDiv();

