import SectionWrapper from "~/components/section-wrapper";
import { Timeline } from "~/components/timeline";
import styles from "~/constants/styles";

const data = [
  {
    title: "Westminster City Council",
    content: (
      <div className="prose dark:prose-invert">
        <p>
          My first responsibilities at Westminster City Council were to work on
          an existing react application developed by a tenderer. We started 2
          more web applications while I was there. One of which was bootstrapped
          entirely by me. All 3 were wizard-like form sites as part of the
          Westminster City Council site revamp. I did some really interesting
          work while there. What was there before had very little in terms of
          CI/CD. We migrated to GitHub so that we could start using GitHub
          actions. We also switched from CRA to Vite and introduced Tailwind and
          Docker, much of that work was done by me. I also wrote unit tests and
          e2e tests in playwright. We deployed to Azure.
        </p>

        <p>I worked in SCRUM and used Jira for tracking tickets.</p>

        <p>
          The best success I had was as a result of the person doing DevOps
          steadfastly refused to build the static frontend for each individual
          environment so we had to find some way of forcing a framework that
          inject env vars at build time to instead inject them at run time. We
          did this using a library called @import-meta-env/cli. This approach
          could theoretically work for all vite apps I work with going forward.
          And it still takes env vars from a .env. It still remained idiomatic.
        </p>

        <p>
          I was responsible for a lot of the configuration for the new setup. I
          also wrote a template to bootstrap new applications faster in future.
          I also tried to setup form components in such a way they remained
          simple to use, having composed components that in turn were singularly
          responsible for label or error messages while still allowing
          react-hook-form to take control of the error message management.
          Before <a href="https://ui.shadcn.com/">shadch/ui</a> provided a much
          a better pattern to do the same. This pattern can be seen in this
          portfolio's simple form project.
        </p>

        <p>
          I suggested introducing tailwindcss which allowed us to make spacing
          changes more easily and take advantage of the benefits of the
          preflight css reset.
        </p>

        <p>
          I implemented the Authentication using the example from{" "}
          <a href="https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/react-router-sample">
            @azure/msal
          </a>
          . This included a redirect check on a protected route for a page
          refresh using a{" "}
          <a href="https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/samples/msal-react-samples/react-router-sample/src/utils/NavigationClient.js">
            NavigationClient
          </a>
          .
        </p>

        <p>
          I handled a lot of nginx configuration, including removing{" "}
          <a href="https://github.com/dsm23/frontend-template/blob/72c6ba3395a326eae1d41aaaad603956c68e75a9/Dockerfile#L26C1-L34C44">
            root access
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: "DigiVault",
    content: (
      <div className="prose dark:prose-invert">
        <p>
          DigiVault was a crypto-asset custodian. The task was to develop a new
          website portal for their clients to transfer assets. The previous
          portal was developed by contractors, written with create-react-app and
          used a heavy use of redux-observable to handling application state.
          The core dev team of DigiVault was backend Java developers. They knew
          basic HTML and basic JS so the use of redux-observable and rxjs was a
          lot of cognitive and code overload for their team. Also they weren't
          fans of JSX. They opted to build a new portal using Svelte with the
          same current features as the legacy portal.
        </p>

        <p>
          I got to use a broad range of technologies at this role. The backend
          was written in Java using a framework called gradle that was heavily
          inspired by Express.js. They used BDD tests written in python and
          behave for integration testing. The idea was to use a simple scripting
          language that both frontend and backend developers could understand
          and share a common module. For integration tests on the frontend we
          used the playwright library.
        </p>

        <p>
          Svelte was an interesting framework. Very similar to React. Custom
          hooks were much harder to make without a `useEffect` hook. I took on
          the role to force myself to rely more on underlying web standards than
          the off-the-shelf react component libraries. What I discovered was
          svelte that was by design well-suited towards animations. I gained
          familiarity with svelte's built in tweened and flip functions and have
          been extracting them for use within react and solid.
        </p>
      </div>
    ),
  },
  {
    title: "IMH Technologies",
    content: (
      <div className="prose dark:prose-invert">
        <p>
          Replacing a legacy website. This was required to reflect a new deal
          with a business partner. An initial deadline was pretty tight so I
          started with react-bootstrap but then later realised that having
          third-party react components was getting in the way of how I wanted to
          use purgecss so I later replaced all bootstrap with tailwind. The
          website was initially done with gatsby but that was later replaced
          with next.js after realising that was simpler than setting up a
          pipeline with webhooks for updated content. The site fetched data from
          a Contentful free tier. Full disclosure, this is my parent's company.
        </p>
      </div>
    ),
  },
  {
    title: "ShipServ Ltd.",
    content: (
      <div className="prose dark:prose-invert">
        <p>
          ShipServ was a company that eleviated the red tape around container
          shipping both in the documentation and buy space on ships. They were
          in the ongoing process of updating their client facing domains with
          react SPAs and Next.js for domains that are asking to be crawled by
          search engines. I worked mainly with the Next.js based domains.
        </p>

        <p>
          Shipserv was my first commercial experience with TypeScript. It has
          become my default frontend language. They encouraged suggestions and
          were prepared to try my suggestions around the monorepo tool nx and
          the unofficial material react library: MUI. Those two didn't work out
          so well. I have since decided to move away from using libraries such
          as MUI or Mantine and rely on mostly on web-standards in most cases
          unless a third party component will get us over to line for a MVP.
        </p>

        <p>Worked in a Kanban setup tracked with Asana.</p>
      </div>
    ),
  },
  {
    title: "Ageas Insurance Ltd.",
    content: (
      <div className="prose dark:prose-invert">
        <p>
          Ageas car insurance website was a form based portal. The legacy site
          included an iframe within which the Worldpay checkout took place which
          come January 2020 was no longer PCI compliant. The web portal was
          being replaced with a react razzle site that met the compliance.
        </p>

        <p>
          They worked in a Scrum setup tracked by Jira. Everyone in the team was
          free to express themsleves in that setup. I think it will be the
          purest example of Agile that I'll ever work with. That methodology was
          being coached by a company called AND Digital.
        </p>
      </div>
    ),
  },

  {
    title: "Smarter Click",
    content: (
      <div className="prose dark:prose-invert">
        <p>
          Smarter Click makes custom modals that appear after a delay during a
          checkout to encourage the completion of the transaction. At the time
          their biggest customer was Hotel Chocolat if you want to see one in
          the wild. I personally came across one while buying an exercise
          massage gun from Renpho. They wanted a new react-based dashboard for
          internal use, initially.
        </p>

        <p>
          Their dashboard was bootstrapped with CRA with redux and thunks for
          handling data loading. The dashboard had been the responsiblity of one
          single developer but that was being handed over to me when that
          developer started his new role elsewhere.
        </p>

        <p>
          I think about this role a lot. The repo handed to me had 9,000+ lines
          of JavaScript in the src/ folder along with 32,000 lines of copied
          sass and collectively 6000+ lines of HTML from 6 files that I suspect
          may have been font files. The nature that the .html file name was
          being used to deliver fonts was causing CORB issues in the Chrome
          browser. This was a newly added feature to the Chrome browser at the
          time following the publication of the Spectre and Meltdown exploits.
          The CORB issues resulted in tensions between my team lead and myself
          along with very frustrating redux middleware so I ended it short. But
          this is a case of if I knew then what I know now. I wonder what I
          could do now to fix similar codebases
        </p>

        <p>Worked in a Kanban setup tracked with Jira.</p>
      </div>
    ),
  },
  {
    title: "QA Consulting Ltd.",
    content: (
      <div className="prose dark:prose-invert">
        <p>Consultant work for the Home Office</p>
        <ul>
          <li>First experience with the React library</li>

          <li>
            Worked on converting the gov design system into CSSinJS components:
            https://github.com/govuk-react/govuk-react
          </li>

          <li>Focused on writing forms and data fetching</li>

          <li>Wrote unit (jest) and integration (selenium) tests</li>

          <li>Some experience of redux before migrating to Context API</li>

          <li>Worked within Scaled Agile (SAFe) process</li>

          <li>
            Employed by QAConsulting, the client was HODDaT within the Home
            Office
          </li>
        </ul>
      </div>
    ),
  },
];

const Experience = () => (
  <SectionWrapper id="experience" className="w-full text-foreground">
    <Timeline data={data}>
      <div>
        <p className={styles.sectionSubText}>What I've done so far</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </div>
    </Timeline>
  </SectionWrapper>
);

export default Experience;
