import React from 'react';

import './EmmetAbbreviations.css';

export const Page = () => {

  return (
    <article>
      <section>
        <h2>Emmet Abbreviations</h2>
        <p>
          Emmet Abbreviations is a handy tool built into Visual Studio Code and other IDEs, that is often times overlooked by developers, even though using themn effetively can greaty increase speed and productivity when writing HTML.
        </p>
        <p>
          Emmet Abbreviaitons can be used to print entire HTML elemnts, including element contents, classnames, properties and body elements.
        </p>
        <p>
          Getting used to making use of this feature might take a few minutes to get used to, but in reality its relatively simple.
        </p>
        <p>
          The simplest use case is to print divs with classnames. This can be especially useful when used in combination with classname based stylesheets sucha s Bootstrap and TailwindCSS.
          <br />
          <hr />
            <code>.this-classname.d-flex.justify-content-center.align-items-center.w-100</code>
          <hr />
          <p>
            A short line like this can quickly create a div with its classname attributes.
          </p>
          <img className="w-full" src={require("./assets/div-with-content-center.png")} alt='div with content center'/>
          <p>
            By default Emmet Abbreviations print div elemnts. They can be prefixed with any element designation such as 
            <hr />
              <code>p.this-classname.d-flex.justify-content-center.align-items-center.w-100</code>
            <hr />
            or
            <hr />
              <code>h1.this-classname.d-flex.justify-content-center.align-items-center.w-100</code>
            <hr />
          </p>
          <p>
            Furthermore you can use Emmet Abbreviations in combination with CSS Selectors such as "+", "-", and "{`>`}" to print Cascaded HTML elements. Somehting like 
            <hr />
              <code>{`p.classname>.d-flex.justify-content.center>h1.another-classname{content}`}</code>
            <hr />
            will print
            <img className="w-full" src={require("./assets/cascaded-body.png")} alt='Cascaded body'/>
          </p>
        </p>
        <p>
          More reading can be done at <a href="https://docs.emmet.io/">Emmet Abbreviations Docs</a>
        </p>
      </section>
    </article>
  );
};
