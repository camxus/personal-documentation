import React from 'react';

import './VSCode.css';

export const Page = () => {

  return (
    <article>
      <section>
        <h2>Calling APIs</h2>
        <p>
          A good usage of APIs catches and handles all Errors once called.
          A simple way to make sure this is achieved is by effectively making use of <code>try{}, catch(){}</code> and <code>throw()</code>-
        </p>
        <p>
          Making sure both the API Call and the function calling the API are wrapped in <code>try{}, catch(){}</code> allows for greater error handling.
        </p>
        {/* <img className="w-full" src={require("./assets/getAPI.png")} alt=''/> */}
        <p>
          Inorder for a <code>try{}, catch(){}</code> in the caller function to work as intended, make sure to use <code>resolve</code> and <code>reject</code> in the API function. If resolve is used for the rejection, the API Call will <strong>not</strong> return an error function. This means that the caller function will not recieve a handled error to catch.
        </p>
        {/* <img className="w-full" src={require("./assets/wrapAPI.png")} alt=''/> */}
        <p>
          By wrapping the API call in another <code>try{}, catch(){}</code> errors of multiple APIs can be caught and handled in a single line of code.
          Errors can be manually triggered by using <code>throw(e)</code> anywhere in the <code>try{}</code> function.
        </p>
      </section>
    </article>
  );
};
