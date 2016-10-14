# The most simple 'nodejs' project in Visual Studio Code

Inspired by [this](https://code.visualstudio.com/Docs/runtimes/nodejs) article. Purpose of this repo is to have something increadibly simple to showcase how simple a NodeJS project can start.

## Starting the project

- Install NodeJS, you can download it from [here](https://nodejs.org/en/download/)
- Install the latest VS Code version, you can downlaod it from [here](https://code.visualstudio.com/download)
- Clone the repo `git clone https://github.com/VladimirAmiorkov/nodejs-vs-code-sample.git`
- Open it in VS Code

```
$ cd nodejs-vs-code-sample
$ code .
```

- As the project usesd TypeScript, transpile the .ts files to JavaScript via the VS Code built-in task by pressing
	- On Mac: `Cmd + Shift + B`
	- On Window: `Ctrl + Shift + B`
- All that is left is to run your first NodeJS "program", open the VS Code built-in terminal ``Ctrl + ` ``
	- Run the command: `$ node app.js`, after that you should see `3 + 2 = 5` in the terminal 