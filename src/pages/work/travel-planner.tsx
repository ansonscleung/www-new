import * as React from "react";
import { Link } from "gatsby";
import Seo from "../../components/seo";
import "../styles.scss";
import "./travel-planner.scss";

const processSteps = [
  [
    "Problem",
    "Family trips break down when one generic itinerary ignores different ages, mobility needs, energy levels, stairs and meal routines.",
  ],
  [
    "Constraints",
    "Capture pace, accessibility, children and elders, meal preferences, and practical travel limits before suggesting a route.",
  ],
  [
    "Planner",
    "Turn research and positioning into PRDs and a domain architecture that gives these constraints a first-class place.",
  ],
  [
    "Editable itinerary",
    "Start with a structured draft, then let people use manual CRUD and reordering, plus import or export, to make the itinerary their own.",
  ],
  [
    "Validation",
    "Test the MVP with families, learn from use, and keep validating the product rather than treating launch as the finish line.",
  ],
];

const TravelPlannerPage: React.FC = () => (
  <>
    <main className="travel-case">
      <div className="travel-case__shell">
        <nav className="travel-case__nav" aria-label="Case study navigation">
          <Link to="/#selected-work">← Back to selected work</Link>
          <Link to="/">Anson Leung</Link>
        </nav>
        <header className="travel-case__hero">
          <p className="travel-case__eyebrow">Product × Engineering case study</p>
          <h1>Travel Planner</h1>
          <p className="travel-case__lede">
            Constraint-aware travel planning for families moving at different paces.
          </p>
        </header>
        <section className="travel-case__section" aria-labelledby="context-title">
          <h2 id="context-title">The product question</h2>
          <p>
            How might a family plan a trip that works for elders, children,
            mobility needs, pace, stairs, meals and the ordinary compromises of
            travelling together?
          </p>
          <p>
            The answer was not another fixed itinerary. It was a planning
            workflow where people could see the constraints, start with structure
            and remain in control of every change.
          </p>
        </section>
        <section className="travel-case__section" aria-labelledby="flow-title">
          <h2 id="flow-title">From constraints to validation</h2>
          <ol className="travel-case__flow">
            {processSteps.map(([title, detail]) => (
              <li key={title}>
                <article>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>
        <section
          className="travel-case__section travel-case__two-column"
          aria-labelledby="mvp-title"
        >
          <div>
            <h2 id="mvp-title">A tested, editable MVP</h2>
            <p>
              The core experience is an editable structured itinerary: people
              can create, update and remove items manually, reorder plans, and
              import or export travel data without losing their own judgment.
            </p>
            <p>
              Local and cloud persistence, authentication and traveller profiles
              support continued planning across sessions. An AI draft can help
              begin the work; the itinerary remains explicitly editable.
            </p>
          </div>
          <aside className="travel-case__stack" aria-label="Technology stack">
            <h2>Built with</h2>
            <ul>
              <li>Next.js 16 · React 19 · TypeScript</li>
              <li>Supabase for authentication and persistence</li>
              <li>OpenAI and Gemini for AI-assisted drafts</li>
              <li>Vitest and Playwright for tested product behaviour</li>
            </ul>
          </aside>
        </section>
        <section className="travel-case__section" aria-labelledby="learning-title">
          <h2 id="learning-title">Ongoing validation</h2>
          <p>
            This is a continuing product practice: research informs positioning,
            positioning informs PRDs, and the architecture keeps family
            constraints visible as the MVP is tested and refined.
          </p>
        </section>
      </div>
    </main>
    <footer className="travel-case__footer">
      <div className="travel-case__shell">
        © {new Date().getFullYear()} Anson S.C. Leung
      </div>
    </footer>
  </>
);

export const Head = () => (
  <Seo
    title="Travel Planner Case Study | Anson S.C. Leung"
    description="A product and engineering case study on constraint-aware family travel planning."
    pathname="/work/travel-planner/"
  />
);
export default TravelPlannerPage;
