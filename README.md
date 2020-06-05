# [Famous Soda Website](https://www.famoussodaco.com/)

This is a private repository for famous soda website

## Preview

[![Website Preview](https://github.com/b3bb0/famous-soda-website/raw/master/screenshot.png)](https://www.famoussodaco.com/)

## Download and Installation

To modify/edit/play with this website follow this simple procedure

- [Download and install node 12.x](https://nodejs.org/it/download/)
- Open a Terminal
- Clone this repository: `git clone https://github.com/b3bb0/famous-soda-website.git`


## Usage

### Basic Usage

After downloading, feel free to edit any file in the `public` directory. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Advanced Usage

Clone the source files of the theme and navigate into the theme's root directory. Run `npm install` and then run `npm start` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved.
To apply changes permanently to the project edit the files in `src` and run `npm build` to update the `public` folder **any previous changes to the public folder are going to be destroyed**
use `npm start` and visit [http://localhost:3000/](http://localhost:3000/)

#### Even More Advanced

- `npm run build` builds the project - this builds assets, HTML, JS, and CSS into `dist`
- `npm run build:assets` copies the files in the `src/assets/` directory into `dist`
- `npm run build:pug` compiles the Pug located in the `src/pug/` directory into `dist`
- `npm run build:scripts` brings the `src/js/scripts.js` file into `dist`
- `npm run build:scss` compiles the SCSS files located in the `src/scss/` directory into `dist`
- `npm run clean` deletes the `dist` directory to prepare for rebuilding the project
- `npm run start:debug` runs the project in debug mode
- `npm start` or `npm run start` runs the project, launches a live preview in your default browser, and watches for changes made to files in `src`

You must have npm installed in order to use this build environment.


#### New to git?

- [Download and install git](https://sourceforge.net/projects/git-osx-installer/files/)
- Open **`Terminal`**
- make sure that git is installed properly with: **`git --version`**
     should give you something like **git version 2.24.2 (Apple Git-127)**
- then proceeded with the following commands:
	```
	cd ~/Desktop
	rm -fR famous-soda-website
	git clone https://github.com/b3bb0/famous-soda-website.git
	cd famous-soda-website
	```

- now you have a folder on your desktop called **famous-soda-website**

- you can add/remove/modify files in that folder and once done
- to push the changes to the server execute:
	```
	cd ~/Desktop/famous-soda-website
	git add .
	git commit -m "!!!put what changes are you committing here!!!"
	git push
	```

- please replace  **!!!put what changes are you committing here!!!**  with a comment about the file/changes you are applying