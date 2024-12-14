export default function Page() {
    return (
      <>
      <h1 className="text-3xl mr-5"> Final Exam</h1>
       <br />
      <form>
        <label htmlFor="product" className='ml-5'>Product Description</label>
        <input type="text" name="product" id="product" className="ml-5 text-black bg-blue-400"/>
        <br />

        <br />
        <label htmlFor="bunnies" className="mxl-5">Choose a Bunny:</label>
        <br />

        <select name="bunnies" id="bunnies">
        <option value="HollandHop">Holland Hop</option>
        <option value="AmericanFuzzyHop">American Fuzzy Hop</option>
        <option value="MinniLop">Minni Lop</option>
        <option value="CashmereLop">Cashmere Lop</option>
        </select>
        
        
        <div className="ml-6 mt-6">
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">HTML</label><br />
         <input type="radio" id="css" name="fav_language" value="CSS" />
         <label htmlFor="css">CSS</label><br />
         <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
         <label htmlFor="javascript">JavaScript</label>
        </div>

        <div className="ml-2 mt-2">
        <input type="checkbox" id="q1" name="q1" value="Food" />
        <label htmlFor="q1"> Questions regarding food</label><br />
        <input type="checkbox" id="q2" name="q2" value="Items" />
        <label htmlFor="q2"> Questions regarding necessary items</label><br />
        <input type="checkbox" id="q3" name="q3" value="Other" />
        <label htmlFor="q2"> Other </label><br />
        </div>
        
        <br/ >

        <button className="m-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" type="submit">Save</button>
     
      </form>
      </>
    )
  }
