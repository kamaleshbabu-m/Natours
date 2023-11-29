const fs = require('fs');
const axios=require('axios');
const superagent=require('superagent');

const readFilePro= file =>{
  return new Promise((resolve,reject) =>{

    fs.readFile(file,'utf8',(err, data) => {
    if(err) reject('File cannot Read ');   
    resolve(data);

    
})
  })
}

const writeFilePro=(file,msg)=>{
  return new Promise((resolve,reject) =>{
    fs.writeFile(file,msg,err => {
      if(err) reject('File not written ');
      resolve('img saved successfully');
    })
  })
}

// readFilePro('./dog.txt').then(data =>{
//           return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//       })
//       .then((res)=>{
//           console.log(res.body.message);
//           return  writeFilePro('dog-img.txt',res.body.message);
//       })
//       .then((data) =>{
//           console.log(data);
//       })
//       .catch((err)=>{
//           console.log(err);
//       });


const readRes= async(fileName) =>{

  try{
  const data =await readFilePro(fileName); //'./dog.txt'
  console.log(`Breed: ${data}`);
 
  const res1 = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  const res2 = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  const res3 = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);

  const resAll= await Promise.all([res1,res2,res3]);
  
  
  const links=resAll.map(res => res.body.message);
  console.log(links);
  
  // links.map(link =>{
  
  // console.log(link);
  // const msg=writeFilePro('dog-img.txt',link);
  // console.log(msg);
  // })
 
  const msg=await writeFilePro('dog-img.txt',links.join('\n'));
  console.log(msg);
  }
  catch(err){
    console.log(err);
    throw 'error da 💮nda'
  }
return 'Mass thala 🤟';
}


// console.log('1: Reading breed');
// const x=readRes().then((x)=>{
//   console.log(x);
//   console.log('3: Done Reading breed');
// });


(async() =>{
  try{
    const x=await readRes('./dog.txt');
    console.log(x);
  } catch(err){
    console.log(err);
  }
})();



  

      
 










 
