export default function Page() {
    return (
      <>
      <h1 className="text-3xl mr-5"> Final Exam</h1>
     
      <form>
        <label htmlFor="product" className='ml-5'>Product Description</label>
        <br />
        <label htmlFor="cars">Choose a car:</label>

        <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
     
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">HTML</label><br />
         <input type="radio" id="css" name="fav_language" value="CSS" />
         <label htmlFor="css">CSS</label><br>
         <input type="radio" id="javascript" name="fav_language" value="JavaScript">
         <label htmlFor="javascript">JavaScript</label>
        <input type="text" name="product" id="product" className="ml-5 text-black bg-blue-400"/>
      
      
        <button className="m-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" type="submit">Save</button>
      </form>
      </>
    )
  }
