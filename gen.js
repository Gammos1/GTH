function readLines() {
    document.getElementById('placeholder_text').innerText = document.getElementById('input_image').value;
    const textArea = document.getElementById('input');
    const lines = textArea.value.split('\n');
    console.log(lines);
    for (i = 0; i < 15; i++) {
        if (lines[i] == '' || lines[i] == undefined) {
            lines[i] = '';
        }
    }
    var seperator_after = '';
    var seperator = false;
    var image_italic = true;
    var image_color = document.getElementById('00028').value;
    var image_after = '\\n';
    var image_font = document.getElementById('00018').value;
    if(lines[1] == '') {
        document.getElementById('seperator').style.zIndex = "5";
        lines[1] = 'noxicon.sforms.seperator';
        seperator = false;
        seperator_after = '';
    } else {document.getElementById('seperator').style.zIndex = "-5";seperator = true;seperator_after = '\\n';}
    console.log(lines);
    if (document.getElementById('input_image').value != '') {
        document.getElementById('image_placeholder').style.zIndex = "5";
        image_italic = false;
        image_color = 'white';
        image_after = '';
        image_font = 'noxicon:images';
        lines[7] = document.getElementById('input_image').value;
    } else {document.getElementById('image_placeholder').style.zIndex = "-5";image_italic = true;image_color = document.getElementById('00028').value;image_after = '\\n';image_font = document.getElementById('00018').value;}
    document.getElementById('output').value = '{page_content:['
        + '{' + document.getElementById('00001').value + ':"' + lines[0] + '\\n",font:"' + document.getElementById('00011').value + '",color:"' + document.getElementById('00021').value + '",shadow_color:0,italic:false},'
        + '{' + document.getElementById('00002').value + ':"' + lines[1] + seperator_after + '",font:"' + document.getElementById('00012').value + '",color:"' + document.getElementById('00022').value + '",shadow_color:0,italic:' + seperator + '},'
        + '{' + document.getElementById('00003').value + ':"' + lines[2] + '\\n",font:"' + document.getElementById('00013').value + '",color:"' + document.getElementById('00023').value + '",shadow_color:0,italic:true},'
        + '{' + document.getElementById('00004').value + ':"' + lines[3] + '\\n",font:"' + document.getElementById('00014').value + '",color:"' + document.getElementById('00024').value + '",shadow_color:0,italic:true},'
        + '{' + document.getElementById('00005').value + ':"' + lines[4] + '\\n",font:"' + document.getElementById('00015').value + '",color:"' + document.getElementById('00025').value + '",shadow_color:0,italic:true},'
        + '{' + document.getElementById('00006').value + ':"' + lines[5] + '\\n",font:"' + document.getElementById('00016').value + '",color:"' + document.getElementById('00026').value + '",shadow_color:0,italic:true},'
        + '{' + document.getElementById('00007').value + ':"' + lines[6] + '\\n",font:"' + document.getElementById('00017').value + '",color:"' + document.getElementById('00027').value + '",shadow_color:0,italic:true},'
        + '{' + document.getElementById('00008').value + ':"' + lines[7] + image_after + '",font:"' + image_font + '",color:"' + image_color + '",shadow_color:0,italic:' + image_italic + '},'
        + '{' + document.getElementById('00009').value + ':"' + lines[8] + '\\n",font:"' + document.getElementById('00019').value + '",color:"' + document.getElementById('00029').value + '",shadow_color:0,italic:true},'
        + '{' + document.getElementById('000010').value + ':"' + lines[9] + '\\n",font:"' + document.getElementById('000110').value + '",color:"' + document.getElementById('000210').value + '",shadow_color:0,italic:true},'
        + '{' + document.getElementById('000011').value + ':"' + lines[10] + '\\n",font:"' + document.getElementById('000111').value + '",color:"' + document.getElementById('000211').value + '",shadow_color:0,italic:true},'
        + '{' + document.getElementById('000012').value + ':"' + lines[11] + '\\n",font:"' + document.getElementById('000112').value + '",color:"' + document.getElementById('000212').value + '",shadow_color:0,italic:true},'
        + '{' + document.getElementById('000013').value + ':"' + lines[12] + '\\n",font:"' + document.getElementById('000113').value + '",color:"' + document.getElementById('000213').value + '",shadow_color:0,italic:true},'
        + '{' + document.getElementById('000014').value + ':"' + lines[13] + '\\n",font:"' + document.getElementById('000114').value + '",color:"' + document.getElementById('000214').value + '",shadow_color:0,italic:true},'
        + '{' + document.getElementById('000015').value + ':"' + lines[14] + '\\n",font:"' + document.getElementById('000115').value + '",color:"' + document.getElementById('000215').value + '",shadow_color:0,italic:true}'
        + ']}';
}


// {title:"Shadowforms\n\n",page_content:["they're so cool\n","you would not\n","believe how cool\n","they are\n","look at this image!\n"],image:"\ua001"}
// {page_content:[{text:"Shadowforms",font:"noxicon:body_text",color:"#bfaa8c",shadow_color:0},"\n","\n","they're so cool\n","you would not\n","believe how cool\n","they are\n","look at this image!\n"],image:"\ua001"}
// {page_content:["Shadowforms","\n","\n","they're so cool\n","you would not\n","believe how cool\n","they are\n","look at this image!\n"],image:"\ua001"}

// {text:"\ua001\n\n\n",font:"noxicon:pages",shadow_color:0}
// {text:"",font:"noxicon:body_text",color:"#bfaa8c",shadow_color:0}

// var keynum, lines = 1;

// function limitLines(obj, e) {
//     // IE
//     if(window.event) {
//         keynum = e.keyCode;
//     // Netscape/Firefox/Opera
//     } else if(e.which) {
//         keynum = e.which;
//     }

//     if(keynum == 13) {
//         if(lines == obj.rows) {
//         return false;
//         }else{
//         lines++;
//         }
//     }
// }