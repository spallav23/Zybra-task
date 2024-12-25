


const Fdata = async() => {
   const res = await fetch('https://api.jsonbin.io/v3/b/676c5741e41b4d34e46b17a0')
   const data = await res.json();
   console.log(data);
    return data;

}

export default Fdata
