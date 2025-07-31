function run() {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = document.getElementById('cssCode').value;
    const jsCode = document.getElementById('jsCode').value;
    const output = document.getElementById('output').contentDocument || document.getElementById('output').contentWindow.document;

    output.open();
    output.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>
                ${jsCode}
            <\/script>
        </body>
        </html>
    `);
    output.close();
}