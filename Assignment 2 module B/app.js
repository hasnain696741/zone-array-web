
    let arr = [
{
    Camera: '12MP',
    Ram: '64GB',
    Rom: '4GB',
    Price: 30000,
  },
  {
    Camera: '16MP',
    Ram: '128GB',
    Rom: '6GB',
    Price: 45000,
  },
  {
    Camera: '16MP',
    Ram: '64GB',
    Rom: '6GB',
    Price: 60000,
    
    },
  
  {
    Camera: '32MP',
    Ram: '128GB',
    Rom: '6GB',
    Price: 100000,
    
  },
  {
    Camera: '48MP',
    Ram: '256GB',
    Rom: '8GB',
    Price: 250000,
    
  },
  {
    Camera: '12MP ultra wide',
    Ram: '256GB',
    Rom: '8GB',
    Price: 400000,
    
  },
];

function subEvent(){
let getselect = document.getElementById('abc').value;
let getinp1 = document.getElementById('inp1');
let getinp2 = document.getElementById('inp2');
let displaydiv = document.getElementById('div');
getinp1.value = getselect;

}
subEvent(); 


function Add_Task(){
  let getselect = document.getElementById('abc').value;
  let getinp1 = document.getElementById('inp1').value;
  let getinp2 = document.getElementById('inp2').value;
  let displaydiv = document.getElementById('divdisplay');
  displaydiv.innerText = getselect;
  let arr2 = arr.filter((x,i,abc) => {
    if(getinp1 == 'Samsung' && getinp2 == 'A10' || getinp1 == 'Oppo' && getinp2 == 'f11' || getinp1 == 'Vivo' && getinp2 == 'S1'){
      return i === 0;
      
    }
   else if(getinp1 == 'Samsung' && getinp2 == 'A20' || getinp1 == 'Oppo' && getinp2 === 'f12' || getinp1 == 'Oppo' && getinp2 == 'Reno12'){
      return i === 1;
      
    }
    else if(getinp1 == 'Vivo' && getinp2 == 'VivoY23s' || getinp1 == 'IPhone' && getinp2 == 'Xmax'){
      return i === 2;
      
    }
    else if(getinp1 == 'IPhone' && getinp2 == '12' || getinp1 == 'Tecno' && getinp2 == 'Camon12'){
      return i === 3;
      
    }
    else if(getinp1 == 'IPhone' && getinp2 == '14' || getinp1 == 'tecno' && getinp2 == 'X2'){
      return i === 4;
      
    }
   
  
    
  })
  
  if(getinp2 == ''){
    displaydiv.innerText = 'Data Not Found'
    
  }
  else{
    // let x = JSON.stringify(arr2).replace(/[,:"{}\[\]]/g, "");
    // displaydiv.innerText = x
    let output = '';
    arr2.forEach((item) => {
      Object.entries(item).forEach(([key, value]) => {
        output += key + ': ' + value + '<br>';
      });
    }
    )
  displaydiv.innerHTML = output;
  }
  }
  Add_Task(); 
  
  
