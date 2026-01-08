npx create-vite@latest
- . (dot) for installing all vite files in the already created folder not creating new folder

npm install tailwindcss @tailwingcss/vite 

than in vite.config.js 
- import tailwindcss from `@tailwindcss/vite`
- plugins:[react(), tailwindcss()]

**how to go back to root by just typing (setting to by default) "@/"?**
vite.config.js
- import path from `path`
- below plugins 
```
resolve:{
    alias:{
        "@":path.resolve(__dirname, "./src")
    }
}
```
delete App.css because we are going to create our new one from scratch in index.css
- define the custom colors for like text or tags

- npm i lucide-react    : icon library

**EMAIL JS**
npm i @emailjs/browser
connect to gmail account
copy the service id and paste it in env file
public key : emailjs -> account -> public key
template id : emailjs -> email templates -> create new -> contact us (choose) -> create template
template id : then -> contacts us-> settings -> template id
- you can also design the content of the message in contact us -> content -> edit content -> save it

**Getting SVG path of tech**
https://simpleicons.org/?q=interne
anyway asked gpt to find it.

