import React from 'react';

import './Git_VSCode.css';

export const Page = () => {

  return (
    <article>
      <section>
        <h2>Git and VS Code</h2>
        <p>Navigating Git from Visual Studio Code is by far the fastes and most efficient method to traverse Git.</p>
        <img className="w-full" src={require("./assets/full_window.png")} alt=''/>
        <p>
          Using git from VS Code allows for a relatively secure workflow in the sense that everything you need can be accessed by a single window or view.
        </p>
        <img className="w-full" src={require("./assets/branch_selector.png")} alt=''/>
        <p>
          Changing a branch is made easy by clicking the current branch button which is displayed in the bottom left corner.
          <br />
          Upon clicking the button, a window pops up allowing for quickly checking out to another branch
        </p>
        <img className="w-full" src={require("./assets/branch_selection_window.png")} alt=''/>
        <p>
          A variety of other windows can be accessed by using Git Commands through the Integrated Terminal in Visual Studio Code.
          <br />
          Of course the decision on which git commands are most efficient to trigger via button vs. enter into the shell is personal preference.
          <br />
          Note: The shell is always verbose, whereas GUI isnt. Finding way through difficulties in Git is always simpler in the shell as more information is always available in the shell.
        </p>
        <p>
          Furthermore Git in Visual Studio Code can be extended by a variety of Extentions.
        </p>
        <p>
          GitLens and GitGraph are very useful. 
        </p>
        <p>
          GitGraph provides a very extensive visual Guide of the git history which is not native to Git. Various alternatives to this exists, both as extension and as standalone programs.
          <br />
          GitGraph allows for quick and precise checking out of branches and reseting commits.
        </p>
        <p>
          GitLens is a very extensive tool, that comes both in a free and pro version.
          The Plugin allows another plethora of unique functionalities, which are neither native to Git nor VS Code (eg. traversing single file commit histories, displaying the User and Date of a Line Change)
        </p>
        <p>
          <img src={require("./assets/gitLens_file history_buttons.png")} alt=''/>
          By making use of the three file history icons in that GitLens adds to the top right corner of Visual Studio Code, you can navigate single file changes.
          <br />
          This makes the revising of files easy as you will not necesitate looking for the commit change anymore.
          <br />
          <img src={require("./assets/compare_files.png")} alt=''/>
        </p>
      </section>
    </article>
  );
};
