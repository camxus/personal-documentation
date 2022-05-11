import React from 'react';

import './Git.css';

export const Page = () => {

  return (
    <article>
      <section>
        <h2>Git</h2>
        <p>
          Git can be made to use very quickly and efficiently by using the shell to trigger commmands.
        </p>
        <p>
          Certain commands such as <code>git commit --amend</code> and <code>git rebase --interactive</code> are exclusive to the terminal. Learning and getting used to these commands can be very rewarding when it comes to speed and understanding the functionalities of git.
        </p>
        <h3>Commands</h3>
        <ul>
        <li><code>git pull</code> - pull from upstream branch ( origin branch name )</li>
        <li><code>git pull origin main</code> - (pull from remote main branch)</li>
        <li><code>git push</code> - push branch to upstream</li>
        <li><code>git push -f</code> - force push branch to upstream</li>
        <li><code>git checkout -b "branchname"</code> -  make new branch</li>
        <li><code>git checkout "branchname"</code> - change to branch name</li>
        <li><code>git branch -D "branchname"</code> - delete branchname</li>
        <li><code>git commit -m "message"</code> - commit with message</li>
        <li><code>git commit --amend -m "message"</code> - edit latest commit (you can add files to the commit, change the commit message)</li>
        <li><code>git rebase --abort/--continue</code> - (abort/continue) rebase after merge conflict</li>
        <li><code>git merge --abort/--continue</code> - (abort/continue) merge after merge conflict</li>
        </ul>
      </section>
    </article>
  );
};
