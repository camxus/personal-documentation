import React from 'react';

import './Positioning.css';

export const Page = () => {

  return (
    <article>
      <section>
        <h2>Relative Positioning</h2>
        <p>
            Good CSS and HTML come hand-in-hand. One does not work without the other. Both good CSS and HTML attempt to guarantee staying in-line with the DOM.
            <br />
            A tendency developers often make is to use margin and padding properties to position their DOM elements.
            <br />
            This is bad practice. Using margin and padding to position elements tends to push elements outside of their DOM containers. When a page becomes larger and more convoluted this leads to slow navigation of elements using Inspect Tools.
            <br />
            Margins and Paddings should be used sparingly. (Only when increasing margin or padding size, <strong>not when positioning</strong>)
        </p>
        <h3>Dangers of position: absolute</h3>
        <p>
            Absolute positioning is a tool used to remove elements from the DOM and position elsewhere. This attibute searches for the next parent element in the DOM witht the property <code>{`position: relative`}</code>.
            <br />
            All the positionings as well as the size properties (width, height) will then be done in relation to that element.
        </p>
        <p>
            Because absolute positioning removes elements from the DOM this can break the DOM if used improperly.
            <br />
            Absolute positioning is mainly used for element positioned over others and oftentimes used in combination with a z-Index property.
        </p>
        <h3>display: flex</h3>
        <p>
            Previously using display grid and <code>{`position: absolute; top: [value]; left: [value]; right: [value]: bottom: [value]: transform: translate([anti-value], [anti-value])`}</code> was the preferred method of positioning elements from left to right.
        </p>
        <p>
            But there has been a shift from this to <code>{`display: flex; justify-content: center|space-between|evenly; align-items: center`}</code> as this allows for a more concise and uniform way of placing elements.
        </p>
        <p>
            Further benefit of this comes when using tools like Bootstrap or TailwindCSS as they only need a clessname of <code>{`d-flex justify-content-center align-items-center`}</code> to completely center an element and grow the div by its body content. Using margins and paddings 
        </p>
      </section>
    </article>
  );
};
