import { Application } from "https://deno.land/x/oak/mod.ts";

function table99()
{
    let table = ["<table>"]
    var x =0
    if(x == 0){
        table.push(`<tr><th>.</th>`)
    }
    for ( x=1; x<=9; x++){
        let header = `<th>${x}</th>`
            table.push(header)
    }
    for (var i=1; i<=9; i++){
        let row = `<tr><th>${i}</th>  `
        for (let j=1; j<=9; j++){
            row += `<td>${i*j}</td>  `
        }
        row +="</tr>"
        table.push(row)
    }
    return table.join('\n')+"</table>"
}

const app = new Application();

app.use((ctx) => {
  ctx.response.body = 
  `
  <!DOCTYPE html>
<html>
    <style>
        table{
            width:500px;
            height:500px;
            border:solid 1px;
            border-collapse: collapse;
            font-size:20px;}
        th{
            text-align:left;
            background-color: DodgerBlue;
            width:50px;}
        td{
            border-width: 1px;
            background-color:beige;
        }
    </style>
    <body>
    <pre>
    ${table99()}
    </pre>
    </body>
</html>
  `
  
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });