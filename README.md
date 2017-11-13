## Development/Usage:

1. Open a terminal window
2. Navigate to where you would like to store the folder
3. Type git clone https://github.com/mdinh7/blackjack.git
4. After it is done, run npm install
5. If you don't have npm/node you can install it through homebrew: https://brew.sh/ (by typing brew install node)
6. If you plan on developing on top of this, you need to run "webpack" in your terminal after javascript changes.
7. You can run the game by typing "open index.html" or just opening the html file.

## Testing:

Some Jasmine tests are written, but I was unable to get them to work due to writing the classes in ES6, and Jasmine not playing so nice with node for me.

Ideally they would be able to run by typing "npm test" like here: https://gist.github.com/mauvm/172878a9646095d03fd7


## Random Notes/Bugs:

It is definitely not the cleanest, especially in my DOM manipulation it would have been cleaner to split that portion off into its own class, as well as have player and dealer inherit properties/functions from a main player class, as they each have their own small differences.

- Will send multiple alerts when you say you are done.
- Buttons misalign when starting new round.


