


const Fdata = async() => {
   const res = await fetch('https://api.jsonsilo.com/public/6bd3a583-628e-43a1-94e3-38f2d9bb1883')
    return res.json();

}

export default Fdata
