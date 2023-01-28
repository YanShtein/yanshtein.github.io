import Project from './Project';

export default function Projects() {
  return (
    <>
			<Project 
				img={require('../../assets/images/littleLemon.JPG')}
				codecamp={'META front end developer project'}
				featured={'Featured Project'}
				url="https://yanshtein.github.io/little_lemon/"
				repo_url="https://github.com/YanShtein/little_lemon"
				title='Little Lemon'
				description={
					`Final project of the front end developer certification.
					The website uses responsive design, and functionalities such as booking option and a simple ordering system.
					The Website was prototyped using Figma.
					`
				}
				techs={
					['Figma', 'React', 'Context API', 'Hooks', 'Jest']
				}
			/>
			<Project 
				img={require('../../assets/images/expenseTracker.JPG')}
				featured={'Featured Project'}
				url="https://yanshtein.github.io/expense_tracker/"
				repo_url="https://github.com/YanShtein/expense_tracker"
				title='Expense Tracker'
				description={
					`The project uses React hooks, Context API & Reducer to show balance, income & expense, as well as history of transactions.
					Add & delete transactions will affect balance, income & expense amount.`
				}
				techs={
					['React', 'Context API', 'Reducer', 'CSS', 'gh-pages']
				}
			/>
			<Project 
				img={require('../../assets/images/hangman.JPG')}
				featured={'Featured Project'}
				url="https://yanshtein.github.io/hangman_game/"
				repo_url="https://github.com/YanShtein/hangman_game"
				title='Hangman game'
				description={
					`React guess the word game, each time an incorrect letter is guessed, the player loses one life, and the hangman
					2D drawing pieces are shown one by one until game is over. The player can choose between different categories.
					The game also has keyboard support.`
				}
				techs={
					['React', '2D canvas', 'CSS', 'VS code', 'gh-pages']
				}
			/>
			<Project 
				img={require('../../assets/images/notes.JPG')}
				featured={'Featured Project'}
				url="https://yanshtein.github.io/react_notes_app/"
				repo_url="https://github.com/YanShtein/react_notes_app"
				title='Notes App'
				description={
					`Notes app enables to create edit & delete notes.
					The app also makes use of local storage to keep track of edited and deleted notes.`
				}
				techs={
					['React', 'CSS', 'VS code', 'gh-pages']
				}
			/>
			<Project 
				img={require('../../assets/images/form.JPG')}
				featured={'Featured Project'}
				url="https://yanshtein.github.io/react_form/"
				repo_url="https://github.com/YanShtein/react_form"
				title='Form App'
				description={
					`A React form project with login and registration. 
					Using Formik library for form handling, 
					and Yup library that allows validation of field inputs through a 
					validation schema.`
				}
				techs={
					['React', 'Formik', 'Yup', 'CSS', 'VS code', 'gh-pages']
				}
			/>
			<Project 
				img={require('../../assets/images/youShop.png')}
				url="https://yanshtein.github.io/shopping-cart-react/"
				repo_url="https://github.com/YanShtein/shopping-cart-react"
				title='React Shopping site'
				description={
					`A simple responsive React shopping cart app.
					You can search the items, add items to cart, and change items quantity in cart.
					The checkout button will perform calculations on items prices and show total price.`
				}
				techs={
					['React', 'JS', 'CSS', 'VS code', 'gh-pages']
				}
			/>
			<Project 
				img={require('../../assets/images/youShop.png')}
				url="https://yanshtein.github.io/shopping-cart-react-redux/"
				repo_url="https://github.com/YanShtein/shopping-cart-react-redux"
				title='React Redux Shopping cart'
				description={
					`Responsive React-Redux shopping cart app.
					You can search the items and add items to cart.
					The cart page shows total price, items quantity can changed, and items can be removed.`
				}
				techs={
					['React', 'Redux', 'React Router', 'JS', 'CSS', 'VS code', 'gh-pages']
				}
			/>
			<Project 
				img={require('../../assets/images/loginform.PNG')}
				url="https://codepen.io/yansht/pen/rNdaGYL"
				repo_url="https://github.com/YanShtein/LoginFormReact"
				title='Login form'
				description={
					`Login form project uses React hooks to check for valid credentials against a function that simulates an Async request to the server.
						If credentials are correct you will be connected, else Promise will trigger a reject Error.`
				}
				techs={
					['React', 'JS', 'CSS', 'VS code', 'CodePen']
				}
			/>
			<Project 
				img={require('../../assets/images/calc.PNG')}
				codecamp={'FreeCodeCamp project'}
				url="https://codepen.io/yansht/pen/MWVyMbd"
				repo_url="https://github.com/YanShtein/ReactCalculator"
				title='React Calculator'
				description={
					`React calculator project with keyboard input, uses formula logic and observes order of operation precedence.
					The calculator is built to specifications for the FreeCodeCamp Calculator project.`
				}
				techs={
					['React', 'JS', 'CSS', 'VS code', 'CodePen']
				}
			/>
			<Project 
				img={require('../../assets/images/findbyR.PNG')}
				url="https://yanshtein.github.io/findby/"
				repo_url="https://github.com/YanShtein/findby"
				title='Ads site'
				description={
					`The idea of this responsive ads project, is that you login or sign up to be able to favorite ads, 
					and see contact details.
					items can be filtered by fields, clicked images show full description in modal box, and you can search the site.`
				}
				techs={
					['JS', 'CSS', 'VS code']
				}
			/>
			<Project 
				img={require('../../assets/images/reactdrum.PNG')}
				codecamp={'FreeCodeCamp project'}
				url="https://codepen.io/yansht/pen/GRQaJQr"
				repo_url="https://github.com/YanShtein/ReactDrumMachine"
				title='Drum Machine'
				description={
					`This project uses React to build a drum which consists of audio keyboard pads and volume controller, 
					the drum has on/off states.`
				}
				techs={
					['React', 'JS', 'CSS', 'VS code', 'CodePen']
				}
			/>
			<Project 
				img={require('../../assets/images/markdown.PNG')}
				codecamp={'FreeCodeCamp project'}
				url="https://codepen.io/yansht/pen/vYdvoNO"
				repo_url="https://github.com/YanShtein/ReactMarkdownPreviewer"
				title='Markdown Previewer'
				description={
					`This project uses React and Markdown parser library to parse html syntax.
					It consists of an editor which is predefined with some text and a preview to show in real time the parsed text.`
				}
				techs={
					['React', 'JS', 'CSS','Markedjs', 'VS code', 'CodePen']
				}
			/>
			<Project 
				img={require('../../assets/images/quotes.PNG')}
				codecamp={'FreeCodeCamp project'}
				url="https://codepen.io/yansht/pen/gOvZOGp"
				repo_url="https://github.com/YanShtein/RandomQuoteMachine"
				title='Random Quote Machine'
				description={
					`This project uses jQuery and AJAX to pull random quotes from JSON DB file, 
					and loading the quotes & related author presenting in UI. 
					Current quote can also be tweeted by pressing the twitter icon.`
				}
				techs={
					['jQuery', 'AJAX', 'JS', 'CSS', 'VS code', 'CodePen']
				}
			/>
			<Project 
				img={require('../../assets/images/movies.PNG')}
				url="https://github.com/YanShtein/Movie_directors_d3js"
				repo_url="https://github.com/YanShtein/Movie_directors_d3js"
				title='Top movies Wordle'
				description={
					`As the final project of the Python for everybody course, 
					this project performs SQL operations on a DB file and using d3 library, 
					it visualizes the top ranked movies by text and size in the browser.`
				}
				techs={
					['Python', 'D3js', 'Sqlite3', 'JSON', 'Pycharm', 'JS']
				}
			/>
  	</>
  )
};
