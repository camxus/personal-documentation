import React from 'react';

import './Redux_Toolkit.css';

/* eslint-disable */

export const Page = () => {

  return (
    <article>
      <section>
        <h2>Redux Toolkit</h2>
        <p>
          Redux allows for the managing of States on a website level. Different than <code>useState()</code>, Redux States can be called in any Component or Page. Redux States liken React's <code>useContext()</code> API but a far mor extensive.
        </p>
        <p>
          <br />
          <code>
            const dipatch = useDipatch()
          </code>
          <br />
          <img className="w-full" src={require("./assets/redux_reducer.png")} alt=''/>
          Redux States have an Action and a Reducer. Using the <code>dispatch()</code> function and the <code>useDipatch()</code> Hook provided by redux you can pass an Action for Redux to Reduce. Differing from React-redux, Action functions are defined in the Reducerfunctions and exported from the file.
        </p>
        <p>
          Calling the State can be done using the <code>useSelector()</code> Hook. <code>useSelector()</code> returns a stateValue of the entire redux object. (Note: In TypeScript this value needs to be typed)
          <br />
          <code>  
            const selectData = useSelector((state: any) =&gt; state.States.selectedDataState)
          </code>
          <br />
          Note: Often times, here proves to be a good usage case of object destructuring, because doing this allows for the upkeep of the same state name as a variable
          <br />
          <code>  
            const {selectedDataState} = useSelector((state: any) =&gt; state.States)
          </code>
        </p>
        <p>
          <strong>Note: Personally I am unsure about naming conventions for Redux, but i have found it smart to name Redux similar to <code>useState()</code> only to call the action function <code>setActionNameAction()</code> and the state value <code>actionName</code></strong> 
        </p>
        <p>
          <strong>Note: Make sure to install the Redux Devtools extension for the viewing of States. This Extension is not available on Safari</strong>
        </p>
      </section>
    </article>
  );
};
