console.log('this is event file');

 // 2nd js
 function makeYollow(){
    document.body.style.backgroundColor='yellow'
}

 // 3rd prothom
        // const makeKalus =document.getElementById('kalu')
        // makeKalus.onclick = makeKalu;
        // function makeKalu(){
        //     document.body.style.backgroundColor='black'
        // }
        // 3rd ditio
        const makeKalus =document.getElementById('kalu')
        makeKalus.onclick =function makeKalu(){
            document.body.style.backgroundColor='black'
        }
     // 4rth
     const makeOrg = document.getElementById('orange')
     makeOrg.addEventListener('click', makeOrange)
     function makeOrange() {
      document.body.style.backgroundColor = 'orange';
     }
    //  4rth onather
    const makePink = document.getElementById('pink')
      makePink.addEventListener('click',function pinks(){
        document.body.style.backgroundColor ='pink'
      })
    //    4rth final
    document.getElementById('blue').addEventListener('click',function(){
        document.body.style.backgroundColor ='blue'
    })
        

