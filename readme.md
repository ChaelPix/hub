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

# Tailwind CSS + DaisyUI Setup

1. **Install Node.js with `nvm`**:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
   source ~/.bashrc
   nvm install --lts
   ```

2. **Create a new npm project**:
   ```bash
   mkdir tailwind-daisyui-test && cd tailwind-daisyui-test
   npm init -y
   ```

3. **Install Tailwind CSS**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

4. **Configure `tailwind.config.js`**:
   ```javascript
   module.exports = {
     content: ["./*.html"],
     theme: { extend: {} },
     plugins: [],
   };
   ```

5. **Add DaisyUI**:
   ```bash
   npm install daisyui
   ```
   Update `tailwind.config.js`:
   ```javascript
   plugins: [require("daisyui")],
   ```

6. **Create necessary files**:
   - **`input.css`** (main CSS file):
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```
   - **`index.html`** (test HTML file):
     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link href="output.css" rel="stylesheet">
       <title>Test Tailwind + DaisyUI</title>
     </head>
     <body class="bg-gray-100 text-gray-900">
       <div class="container mx-auto p-4">
         <h1 class="text-4xl font-bold text-center">Hello, Tailwind + DaisyUI!</h1>
         <button class="btn btn-primary mt-4">Click Me</button>
       </div>
     </body>
     </html>
     ```

7. **Compile Tailwind CSS**:
   - Add a `build` script to `package.json`:
     ```json
     "scripts": {
       "build": "npx tailwindcss -i ./input.css -o ./output.css --watch"
     }
     ```
   - Run the build process:
     ```bash
     npm run build
     ```

8. **Test the project**:
   - Open `index.html` in your browser or use a local server:
     ```bash
     npx live-server
     # or
     python3 -m http.server
     ```

    nvm use --lts