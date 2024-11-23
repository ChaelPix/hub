```
python3 -m pip install -r requirements.txt
```

Build the documentation

```sh
cd docs/
make clean html
```


```sh
firefox build/html/index.html
```

Install NPM, NodeJs, & Tailwind with DaisyUI:

```sh
sudo apt install npm -y
npm init -y

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install --lts

nvm use --lts
nvm alias default lts
```

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

ailwind.config.js :
```js
module.exports = {
  content: ["./src/**/*.{html,js}"], // HTML/JS
  theme: {
    extend: {}, 
  },
  plugins: [require("daisyui")],
};
```

```sh
npm install daisyui
```

src/styles.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```