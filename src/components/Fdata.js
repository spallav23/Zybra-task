


const Fdata = async() => {
   const res = await fetch('http://universities.hipolabs.com/search?country=United+States')
    return res.json();

}

export default Fdata
