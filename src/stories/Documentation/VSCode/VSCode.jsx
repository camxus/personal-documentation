import React from 'react';

import './VSCode.css';

export const Page = () => {

  return (
    <article>
      <section>
        <h2>Visual Studio Code</h2>
        <p>
         Visual Studio Code is an IDE that offers extensive editing of Docuemnts with features ranging from Multiline Editing using Keyboard Shortcuts, to Extensions for document linting.
        </p>
        <h2>Keyboard Shortcuts</h2>
        <p>
          Making use of the various Keyboard Shortcuts VS Code makes available, editing and navigating documents can be made very efficient and quick.
        </p>
        <p>
          Along with the usual Text Editing Shortcuts native to most Operating Systems (e.g. <kbd>Cmd</kbd> + <kbd>Left/Right</kbd> (Beginning/End of Line) and <kbd>Cmd</kbd> + <kbd>Backspace</kbd> (Delete Line)) 
        </p>
        <p>
          VS Code natively allows editing tools such as Emmet Abbreviations <code>h1.classname</code> and multiline editing <kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>Up/Down</kbd> 
        </p>
        <img className="w-full" src={require("./assets/multiline_editing.png")} alt='Multiline Editing'/>
        <p>
          Useful Keyboard Shortcuts in Visual Studio Code include:
          <h3>Multiline Editing</h3>
          <ul>
            <li><kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>Up/Down</kbd> - Add Cursor in the Line Above/Below</li>
            <li><kbd>Alt</kbd> + <kbd>Up/Down</kbd> - Move Line Above/Below</li>
            <li><kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Up/Down</kbd> - Duplicate Line Above/Below</li>
            <li><code>Select</code> + <kbd>Cmd</kbd> + <kbd>D</kbd> - Add Cursor to next [Selection] in Document</li>
            <li><code>Select</code> + <kbd>Cmd</kbd> + <kbd>L</kbd> - Add Cursor to all of [Selection] in Document</li>
          </ul>
          <h3>File Traversing</h3>
          <ul>
            <li><kbd>Alt</kbd> + <kbd>G</kbd> - Go To Line in Document</li>
            <li><kbd>Cmd</kbd> + <kbd>P</kbd> - Go To File</li>
            <li><kbd>Alt</kbd> + <kbd>Z</kbd> - Wrap Document</li>
            <li><kbd>Cmd</kbd> + <kbd>Shit</kbd> + <kbd>W</kbd> - Close Tab</li>
            <li><kbd>Cmd</kbd> + <kbd>Shit</kbd> + <kbd>T</kbd> - Open Previously Closed Tab</li>
          </ul>
          <h3>Document Traversing</h3>
          <ul>
            <li>
              <p>
                <kbd>Cmd</kbd> + <code>Click</code> - Find/Go To/Show Definition/Implementation
              </p>
              <p>
                Note: <kbd>Cmd</kbd> + <code>Click</code> is very powerful as it also allows for the navigation of links both in the editor and in the terminal
              </p>
            </li>
          </ul>
        </p>
      </section>
    </article>
  );
};
