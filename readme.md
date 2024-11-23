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

Install NPM & Tailwind with DaisyUI:

```sh
sudo apt install nodejs npm -y
npm init -y
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