


const Fdata = async() => {
   const res = await fetch('https://api.jsonbin.io/v3/b/676c5741e41b4d34e46b17a0')
    return res.json();

}

export default Fdata
