# WYSIWYG-JS
JS WYSIWYG editor (hopefully).

### How to use it
1. Click the "Code" button:  
   ![image](https://user-images.githubusercontent.com/79176077/142972576-a73758c7-998d-4227-8877-03ba150cdbfd.png)
2. Click "Download ZIP":  
   ![image](https://user-images.githubusercontent.com/79176077/142972597-1b489c09-f560-4204-9ae9-02e6625d3038.png)
3. Extract all files:  
   ![image](https://user-images.githubusercontent.com/79176077/142972656-63a61e93-2a80-4098-8cdc-25e2404aea44.png)  
   ![image](https://user-images.githubusercontent.com/79176077/142972696-dea7c631-57bc-40ee-bd07-1045d661b3f3.png)  
   ![image](https://user-images.githubusercontent.com/79176077/142972726-d34d2ff0-8a5a-41ae-91ae-bd00e41cf28f.png)
4. Delete all files except CSS and JS:  
   ![image](https://user-images.githubusercontent.com/79176077/142972790-3535b59d-df23-406a-a810-df81f0786c62.png)
5. Use the following code:
```html
<html>
  <head>
    <title>Title</title>
	<link rel="stylesheet" href="path/to/js_wysiwyg.css" />
  </head>
  <body>
    <div id="container" class="editor"></div>
	<script src="path/to/js_wysiwyg.js"></script>
	<script>initEditor(document.querySelector('#container'));</script>
  </body>
</html>
```
6. Open it. No PHP required.
7. ![image](https://user-images.githubusercontent.com/79176077/142972861-463447f5-43de-4c0f-ad53-1622cbfc2a83.png)
