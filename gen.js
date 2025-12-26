function readLines() {
    const textArea = document.getElementById('input');
    const lines = textArea.value.split('\n');
    console.log(lines);
    for (i = 0; i < 15; i++) {
        if (i == 0 || i == 1 || i == 2) {
            if(lines[i] == '' || lines[i] == undefined) {
                lines[i] = '\\n';
            }
            continue;
        }
        if (lines[i] == '' || lines[i] == undefined) {
            lines[i] = '';
        }
    }
    console.log(lines);
    document.getElementById('output').value = '{title:"' + lines[0] + lines[1] + lines[2] + '",page_content:["' + lines[3] + '\\n","' + lines[4] + '\\n","' + lines[5] + '\\n","' + lines[6] + '\\n","' + lines[7] + '\\n","' + lines[8] + '\\n","' + lines[9] + '\\n","' + lines[10] + '\\n","' + lines[11] + '\\n","' + lines[12] + '\\n","' + lines[13] + '\\n","' + lines[14] + '\\n"' + ']}';
}


// {title:"Shadowforms\n\n",page_content:["they're so cool\n","you would not\n","believe how cool\n","they are\n","look at this image!\n"],image:"\ua001"}

var keynum, lines = 1;

function limitLines(obj, e) {
    // IE
    if(window.event) {
        keynum = e.keyCode;
    // Netscape/Firefox/Opera
    } else if(e.which) {
        keynum = e.which;
    }

    if(keynum == 13) {
        if(lines == obj.rows) {
        return false;
        }else{
        lines++;
        }
    }
}