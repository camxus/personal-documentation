import React from 'react'
import "./ConventionalCommits.css"

function ConventionalCommits() {
  return (
    <article>
      <section>
      <h2>Conventional Commits</h2>
      <p>
        <span>taken from <a href='https://www.conventionalcommits.org/en/v1.0.0/'>Conventional Commits</a></span>
      </p>
      <h3>Summary</h3>
      <p>The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with <a href="http://semver.org">SemVer</a>, by describing the features, fixes, and breaking changes made in commit messages.</p>
      <p>The commit message should be structured as follows:</p>
      <hr />
      <><code>&lt;type&gt;[optional scope]: &lt;description&gt;
      </code></>
      <hr />
      <p> The commit contains the following structural elements, to communicate intent to the consumers of your library:</p>
      <ol>
      <li><strong>fix:</strong> a commit of the <em>type</em> <code>fix</code> patches a bug in your codebase (this correlates with <a href="http://semver.org/#summary"><code>PATCH</code></a> in Semantic Versioning).</li>
      <li><strong>feat:</strong> a commit of the <em>type</em> <code>feat</code> introduces a new feature to the codebase (this correlates with <a href="http://semver.org/#summary"><code>MINOR</code></a> in Semantic Versioning).</li>
      <li><strong>BREAKING CHANGE:</strong> a commit that has a footer <code>BREAKING CHANGE:</code>, or appends a <code>!</code> after the type/scope, introduces a breaking API change (correlating with <a href="http://semver.org/#summary"><code>MAJOR</code></a> in Semantic Versioning). A BREAKING CHANGE can be part of commits of any <em>type</em>.</li>
      <li><em>types</em> other than <code>fix:</code> and <code>feat:</code> are allowed, for example <a href="https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional">@commitlint/config-conventional</a> (based on the <a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines">the Angular convention</a>) recommends <code>build:</code>, <code>chore:</code>, <code>ci:</code>, <code>docs:</code>, <code>style:</code>, <code>refactor:</code>, <code>perf:</code>, <code>test:</code>, and others.</li>
      <li><em>footers</em> other than <code>BREAKING CHANGE: &lt;description&gt;</code> may be provided and follow a convention similar to <a href="https://git-scm.com/docs/git-interpret-trailers">git trailer format</a>.</li>
      </ol>
      <p>Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE). A scope may be provided to a commit&rsquo;s type, to provide additional contextual information and is contained within parenthesis, e.g., <code>feat(parser): add ability to parse arrays</code>.</p>
      <h3>Examples</h3>
      <h3>Commit message with description and breaking change footer</h3>
      <p><code>feat: allow provided config object to extend other configs
      BREAKING CHANGE: `extends` key in config file is now used for extending other config files
      </code></p>
      <h3>Commit message with <code>!</code> to draw attention to breaking change</h3>
      <p><code>feat!: send an email to the customer when a product is shipped
      </code></p>
      <h3>Commit message with scope and <code>!</code> to draw attention to breaking change</h3>
      <p><code>feat(api)!: send an email to the customer when a product is shipped
      </code></p>
      <h3>Commit message with both <code>!</code> and BREAKING CHANGE footer</h3>
      <p><code>chore!: drop support for Node 6
      BREAKING CHANGE: use JavaScript features not available in Node 6.
      </code></p>
      <h3>Commit message with no body</h3>
      <p><code>docs: correct spelling of CHANGELOG
      </code></p>
      <h3>Commit message with scope</h3>
      <p><code>feat(lang): add Polish language
      </code></p>
      <h3>Commit message with multi-paragraph body and multiple footers</h3>
      <p><code>fix: prevent racing of requests
      Introduce a request id and a reference to latest request. Dismiss
      incoming responses other than from latest request.
      Remove timeouts which were used to mitigate the racing issue but are
      obsolete now.
      Reviewed-by: Z
      Refs: #123
      </code></p>
      <h3>Specification</h3>
      <p>The key words &ldquo;MUST&rdquo;, &ldquo;MUST NOT&rdquo;, &ldquo;REQUIRED&rdquo;, &ldquo;SHALL&rdquo;, &ldquo;SHALL NOT&rdquo;, &ldquo;SHOULD&rdquo;, &ldquo;SHOULD NOT&rdquo;, &ldquo;RECOMMENDED&rdquo;, &ldquo;MAY&rdquo;, and &ldquo;OPTIONAL&rdquo; in this document are to be interpreted as described in <a href="https://www.ietf.org/rfc/rfc2119.txt">RFC 2119</a>.</p>
      <ol>
      <li>Commits MUST be prefixed with a type, which consists of a noun, <code>feat</code>, <code>fix</code>, etc., followed by the OPTIONAL scope, OPTIONAL <code>!</code>, and REQUIRED terminal colon and space.</li>
      <li>The type <code>feat</code> MUST be used when a commit adds a new feature to your application or library.</li>
      <li>The type <code>fix</code> MUST be used when a commit represents a bug fix for your application.</li>
      <li>A scope MAY be provided after a type. A scope MUST consist of a noun describing a section of the codebase surrounded by parenthesis, e.g., <code>fix(parser):</code></li>
      <li>A description MUST immediately follow the colon and space after the type/scope prefix. The description is a short summary of the code changes, e.g., <em>fix: array parsing issue when multiple spaces were contained in string</em>.</li>
      <li>A longer commit body MAY be provided after the short description, providing additional contextual information about the code changes. The body MUST begin one blank line after the description.</li>
      <li>A commit body is free-form and MAY consist of any number of newline separated paragraphs.</li>
      <li>One or more footers MAY be provided one blank line after the body. Each footer MUST consist of a word token, followed by either a <code>:&lt;space&gt;</code> or <code>&lt;space&gt;#</code> separator, followed by a string value (this is inspired by the <a href="https://git-scm.com/docs/git-interpret-trailers">git trailer convention</a>).</li>
      <li>A footer&rsquo;s token MUST use <code>-</code> in place of whitespace characters, e.g., <code>Acked-by</code> (this helps differentiate the footer section from a multi-paragraph body). An exception is made for <code>BREAKING CHANGE</code>, which MAY also be used as a token.</li>
      <li>A footer&rsquo;s value MAY contain spaces and newlines, and parsing MUST terminate when the next valid footer token/separator pair is observed.</li>
      <li>Breaking changes MUST be indicated in the type/scope prefix of a commit, or as an entry in the footer.</li>
      <li>If included as a footer, a breaking change MUST consist of the uppercase text BREAKING CHANGE, followed by a colon, space, and description, e.g., <em>BREAKING CHANGE: environment variables now take precedence over config files</em>.</li>
      <li>If included in the type/scope prefix, breaking changes MUST be indicated by a <code>!</code> immediately before the <code>:</code>. If <code>!</code> is used, <code>BREAKING CHANGE:</code> MAY be omitted from the footer section, and the commit description SHALL be used to describe the breaking change.</li>
      <li>Types other than <code>feat</code> and <code>fix</code> MAY be used in your commit messages, e.g., <em>docs: updated ref docs.</em></li>
      <li>The units of information that make up Conventional Commits MUST NOT be treated as case sensitive by implementors, with the exception of BREAKING CHANGE which MUST be uppercase.</li>
      <li>BREAKING-CHANGE MUST be synonymous with BREAKING CHANGE, when used as a token in a footer.</li>
      </ol>
      <h3>Why Use Conventional Commits</h3>
      <ul>
      <li>Automatically generating CHANGELOGs.</li>
      <li>Automatically determining a semantic version bump (based on the types of commits landed).</li>
      <li>Communicating the nature of changes to teammates, the public, and other stakeholders.</li>
      <li>Triggering build and publish processes.</li>
      <li>Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history.</li>
      </ul>
      <h3>FAQ</h3>
      <h3>How should I deal with commit messages in the initial development phase?</h3>
      <p>We recommend that you proceed as if you&rsquo;ve already released the product. Typically <em>somebody</em>, even if it&rsquo;s your fellow software developers, is using your software. They&rsquo;ll want to know what&rsquo;s fixed, what breaks etc.</p>
      <h3>Are the types in the commit title uppercase or lowercase?</h3>
      <p>Any casing may be used, but it&rsquo;s best to be consistent.</p>
      <h3>What do I do if the commit conforms to more than one of the commit types?</h3>
      <p>Go back and make multiple commits whenever possible. Part of the benefit of Conventional Commits is its ability to drive us to make more organized commits and PRs.</p>
      <h3>Doesn&rsquo;t this discourage rapid development and fast iteration?</h3>
      <p>It discourages moving fast in a disorganized way. It helps you be able to move fast long term across multiple projects with varied contributors.</p>
      <h3>Might Conventional Commits lead developers to limit the type of commits they make because they&rsquo;ll be thinking in the types provided?</h3>
      <p>Conventional Commits encourages us to make more of certain types of commits such as fixes. Other than that, the flexibility of Conventional Commits allows your team to come up with their own types and change those types over time.</p>
      <h3>How does this relate to SemVer?</h3>
      <p><code>fix</code> type commits should be translated to <code>PATCH</code> releases. <code>feat</code> type commits should be translated to <code>MINOR</code> releases. Commits with <code>BREAKING CHANGE</code> in the commits, regardless of type, should be translated to <code>MAJOR</code> releases.</p>
      <h3>How should I version my extensions to the Conventional Commits Specification, e.g. <code>@jameswomack/conventional-commit-spec</code>?</h3>
      <p>We recommend using SemVer to release your own extensions to this specification (and encourage you to make these extensions!)</p>
      <h3>What do I do if I accidentally use the wrong commit type?</h3>
      <h4>When you used a type that&rsquo;s of the spec but not the correct type, e.g. <code>fix</code> instead of <code>feat</code></h4>
      <p>Prior to merging or releasing the mistake, we recommend using <code>git rebase -i</code> to edit the commit history. After release, the cleanup will be different according to what tools and processes you use.</p>
      <h4>When you used a type <em>not</em> of the spec, e.g. <code>feet</code> instead of <code>feat</code></h4>
      <p>In a worst case scenario, it&rsquo;s not the end of the world if a commit lands that does not meet the Conventional Commits specification. It simply means that commit will be missed by tools that are based on the spec.</p>
      <h3>Do all my contributors need to use the Conventional Commits specification?</h3>
      <p>No! If you use a squash based workflow on Git lead maintainers can clean up the commit messages as they&rsquo;re merged&mdash;adding no workload to casual committers. A common workflow for this is to have your git system automatically squash commits from a pull request and present a form for the lead maintainer to enter the proper git commit message for the merge.</p>
      <h3>How does Conventional Commits handle revert commits?</h3>
      <p>Reverting code can be complicated: are you reverting multiple commits? if you revert a feature, should the next release instead be a patch?</p>
      <p>Conventional Commits does not make an explicit effort to define revert behavior. Instead we leave it to tooling authors to use the flexibility of <em>types</em> and <em>footers</em> to develop their logic for handling reverts.</p>
      <p>One recommendation is to use the <code>revert</code> type, and a footer that references the commit SHAs that are being reverted:</p>
      <><code>revert: let us never again speak of the noodle incident
      Refs: 676104e, a215868
      </code></>
      </section>
    </article>
  )
}

export default ConventionalCommits