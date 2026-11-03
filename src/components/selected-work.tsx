import React from "react";
import "./selected-work.scss";

export default function SelectedWork() {
  return <section id="selected-work" className="page-shell selected-work" aria-labelledby="selected-work-title">
    <header className="selected-work__intro">
      <h2 id="selected-work-title">Selected work</h2>
      <p>Recent examples of business analysis, integration planning and product delivery at Shoalter.</p>
    </header>
    <article id="partner-integration" className="selected-work__case" aria-labelledby="partner-integration-title">
      <p className="selected-work__context">Shoalter · Integration planning and delivery</p>
      <h3 id="partner-integration-title">Partner login and commerce integration</h3>
      <p>A partner login and commerce journey crossed OAuth, the e-commerce backend and checkout. The flow needed coordinated requirements and testing across these systems.</p>
      <p>I authored the integration plan and documented design decisions, coordinated UAT and investigated a production sign-in regression with a system-level workaround.</p>
      <details>
        <summary>My contribution and validation</summary>
        <p>My contribution was integration planning, requirements analysis and delivery coordination. Engineering teams implemented the services. I worked across system boundaries to clarify the flow and follow up on sign-in behaviour through UAT and production investigation.</p>
        <p>The integration plan and recorded decisions supported cross-team implementation and UAT. The production investigation also involved a system-level workaround for sign-in behaviour.</p>
      </details>
    </article>
    <article id="pickup-recommendation" className="selected-work__case" aria-labelledby="pickup-recommendation-title">
      <p className="selected-work__context">Shoalter · Business rules and acceptance criteria</p>
      <h3 id="pickup-recommendation-title">Pickup-point recommendation workflow</h3>
      <p>A pickup-point recommendation workflow needed filtering rules and consistent behaviour across backend, checkout, address service and mobile app.</p>
      <p>I specified six filtering dimensions and ten acceptance scenarios, and coordinated twelve implementation tickets across the affected systems.</p>
      <details>
        <summary>My contribution and validation</summary>
        <p>I translated the workflow into functional requirements, filtering rules and testable acceptance scenarios, then coordinated the implementation dependencies. My contribution was specification and delivery coordination; engineering teams implemented the workflow.</p>
        <p>The deliverables were the workflow specification, acceptance scenarios and cross-system implementation tickets. The acceptance scenarios made the filtering rules explicit for implementation and testing across the affected systems.</p>
      </details>
    </article>
    <p className="selected-work__more"><a href="#journey">Read the full experience and project timeline ↓</a></p>
  </section>;
}
