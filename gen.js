



function yes() {

}
 



function readLines() {
    const textArea = document.getElementById('input');
    const lines = textArea.value.split('\n');
    console.log(lines);
    for (i = 0; i < 15; i++) {
        if (lines[i] == '') {
            lines[i] = '\\n';
        }
        if (lines[i] == undefined) {
            lines[i] = '\\n';
        }
    }
    console.log(lines);
    document.getElementById('output').value = '{title:"' + lines[0] + lines[1] + lines[2] + '",page_content:["' + lines[3] + '\\n","' + lines[4] + '\\n","' + lines[5] + '\\n","' + lines[6] + '\\n","' + lines[7] + '\\n","' + lines[8] + '\\n","' + lines[9] + '\\n","' + lines[10] + '\\n","' + lines[11] + '\\n","' + lines[12] + '\\n","' + lines[13] + '\\n","' + lines[14] + '\\n"' + ']}';
}


// {title:"Shadowforms\n\n",page_content:["they're so cool\n","you would not\n","believe how cool\n","they are\n","look at this image!\n"],image:"\ua001"}