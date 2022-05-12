import React from 'react';

import './useState.css';

/* eslint-disable */

export const Page = () => {

  return (
    <article>
      <section>
        <h2>useState</h2>
        <p>
          The <code>useState()</code> React Hook is on of the many Hooks React offers for managing variables.
        </p>
        <p>
          By using <code>const [state, setState] = useState([initialStateValue])</code> you can initialize the state value.
          <br />
          As the use of hooks is limited to the body of the react function, declaring a hook is not possible inside another function.
          <br />
          In fact the usage of a hook can become very confusing if done in a manner that this hook doesnt support.
          <br />
          One good instance of this is by declaring a setState with a modiied state value.
          <br />
          <code>
          const [state, setState] = useState([initialStateValue])

          var counter = 0

          useEffect(() =&gt; {setState(counter + 1)}, [counter])
          </code>
          <br />
          Since setState actually returns the old state, calling <code>setState(state)</code> can be problematic as useState might use the old value.
          This can lead to bugs around useState
          <br />
          <code>
          const [state, setState] = useState([initialStateValue])

          var counter = 0

          useEffect(() =&gt; {setState(oldStatevalue => counter + 1)}, [counter])
          </code>
          <br />
          A better coding convention to adhere to is to make sure to set the State with a function and to pass the previous state value into said function.
        </p>
        <p>
          Note: The React team has planned for the simplifying of this Hook in React 18.
        </p>
      </section>
    </article>
  );
};
