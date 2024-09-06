let arr =[
  
     "https://m.media-amazon.com/images/I/61ak7uYvTSL.jpg",

     "https://m.media-amazon.com/images/I/71tVFSyC8rL._AC_UF1000,1000_QL80_.jpg",

     "https://m.media-amazon.com/images/I/71rHCll4X-L.jpg",

     "https://t3.ftcdn.net/jpg/06/90/88/00/360_F_690880022_A57zkO3JTpMgW2BvlvWSMW04m69ZKPiR.jpg",

     "https://i.pinimg.com/736x/87/33/1b/87331b7699bc95e5d3bc984ce24cb836.jpg"


]

let dc=0;

function but1(){

    dc++ ;

    if(dc == arr.length){
        dc=0
    }

    
    document.getElementById("box").innerHTML=`<img src ="${arr[dc]}">`
}

function but2(){
  

    dc-- ;

    if(dc < 0){
        dc=arr.length-1;
    }

      document.getElementById("box").innerHTML=`<img src ="${arr[dc]}">`
}

document.getElementById(but1())