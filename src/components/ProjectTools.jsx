
import { useMemo, useState } from "react";
import {
  Calculator,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  ClipboardCheck,
  Layers3,
  Search,
} from "lucide-react";

const projectTypes = [
  { value: "business", label: "Business website", base: 15000 },
  { value: "hospitality", label: "Hotel, lodge or restaurant", base: 20000 },
  { value: "store", label: "Online store", base: 30000 },
  { value: "finance", label: "Finance or professional services", base: 20000 },
  { value: "custom", label: "Custom web application", base: 40000 },
];

const featureOptions = [
  { value: "forms", label: "Contact and enquiry forms", cost: 2000 },
  { value: "booking", label: "Booking or appointment requests", cost: 5000 },
  { value: "payments", label: "Payment integration", cost: 8000 },
  { value: "accounts", label: "Customer accounts", cost: 10000 },
  { value: "cms", label: "Content management", cost: 8000 },
];

const pageOptions = [
  { value: 1, label: "1–2 pages", cost: 0 },
  { value: 5, label: "3–5 pages", cost: 5000 },
  { value: 8, label: "6–8 pages", cost: 10000 },
  { value: 12, label: "9+ pages", cost: 18000 },
];

const budgetOptions = [
  "Under KSh 15,000",
  "KSh 15,000–30,000",
  "KSh 30,000–60,000",
  "KSh 60,000+",
  "Not sure yet",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
        <span className="h-px w-7 bg-cyan-300" />
        {eyebrow}
      </div>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function ProjectTools() {
  const [projectType, setProjectType] = useState("business");
  const [pageCount, setPageCount] = useState(5);
  const [features, setFeatures] = useState([]);
  const [budget, setBudget] = useState("Not sure yet");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [reviewGoal, setReviewGoal] = useState("Improve design and usability");
  const [reviewError, setReviewError] = useState("");
  const [reviewSummary, setReviewSummary] = useState("");

  const estimate = useMemo(() => {
    const type = projectTypes.find((item) => item.value === projectType);
    const pages = pageOptions.find((item) => item.value === Number(pageCount));

    const extras = features.reduce((total, feature) => {
      const option = featureOptions.find((item) => item.value === feature);
      return total + (option?.cost || 0);
    }, 0);

    const total = (type?.base || 15000) + (pages?.cost || 0) + extras;

    return {
      minimum: Math.round((total * 0.9) / 500) * 500,
      maximum: Math.round((total * 1.15) / 500) * 500,
    };
  }, [projectType, pageCount, features]);

  const toggleFeature = (value) => {
    setFeatures((current) =>
      current.includes(value)
        ? current.filter((feature) => feature !== value)
        : [...current, value]
    );
  };

  const formatKsh = (amount) =>
    `KSh ${amount.toLocaleString("en-KE")}`;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const prepareEstimate = () => {
    const type = projectTypes.find((item) => item.value === projectType);
    const pages = pageOptions.find((item) => item.value === Number(pageCount));
    const selectedFeatures = featureOptions
      .filter((item) => features.includes(item.value))
      .map((item) => item.label);

    const summary = [
      "NEXORA WEBSITE PROJECT ENQUIRY",
      `Project type: ${type?.label}`,
      `Pages: ${pages?.label}`,
      `Features: ${selectedFeatures.length ? selectedFeatures.join(", ") : "Standard website features"}`,
      `Estimated range: ${formatKsh(estimate.minimum)} – ${formatKsh(estimate.maximum)}`,
      `Budget: ${budget}`,
      "Please confirm the final scope and quotation.",
    ].join("\n");

    try {
      sessionStorage.setItem("nexora_project_enquiry", summary);
    } catch {
      // The estimate still works if browser storage is unavailable.
    }

    scrollToContact();
  };

  const prepareReviewRequest = (event) => {
    event.preventDefault();
    setReviewError("");
    setReviewSummary("");

    let parsedUrl;

    try {
      const normalisedUrl = /^https?:\/\//i.test(websiteUrl.trim())
        ? websiteUrl.trim()
        : `https://${websiteUrl.trim()}`;

      parsedUrl = new URL(normalisedUrl);

      if (
        !["http:", "https:"].includes(parsedUrl.protocol) ||
        !parsedUrl.hostname.includes(".")
      ) {
        throw new Error("Invalid website URL");
      }
    } catch {
      setReviewError("Enter a valid website address, such as example.com.");
      return;
    }

    const summary = [
      "NEXORA WEBSITE REVIEW REQUEST",
      `Website: ${parsedUrl.href}`,
      `Main goal: ${reviewGoal}`,
      "Please review the website and advise on possible improvements.",
    ].join("\n");

    try {
      sessionStorage.setItem("nexora_review_request", summary);
    } catch {
      // Keep the request usable if session storage is unavailable.
    }

    setReviewSummary(summary);
  };

  return (
    <div className="bg-[#07090d] text-white">
      <section
        id="estimator"
        className="scroll-mt-24 border-y border-white/[0.07] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Project estimator"
                title="Start with an idea. Leave with a clearer plan."
                description="Choose the type of website you need and the features you have in mind. Get an indicative budget range before requesting a quotation."
              />

              <div className="mt-8 flex items-start gap-3 rounded-xl border border-cyan-200/15 bg-cyan-200/[0.05] p-4">
                <Calculator
                  size={20}
                  className="mt-0.5 shrink-0 text-cyan-200"
                />
                <p className="text-xs leading-6 text-white/60">
                  This is an initial planning estimate, not a binding quote.
                  Final pricing depends on requirements, content, integrations,
                  hosting and project scope.
                </p>
              </div>

              <div className="mt-10 space-y-5">
                {[
                  ["01", "Choose your project", "Tell us what you want to build."],
                  ["02", "Select the essentials", "Add pages and useful features."],
                  ["03", "Request a quotation", "Discuss the final scope with NEXORA."],
                ].map(([number, title, description]) => (
                  <div key={number} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-xs font-bold text-cyan-200">
                      {number}
                    </span>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm text-white/45">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101319] p-5 sm:p-8">
              <label className="block text-sm font-semibold">
                What type of website do you need?
              </label>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {projectTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setProjectType(type.value)}
                    className={`rounded-xl border p-4 text-left text-sm transition ${
                      projectType === type.value
                        ? "border-cyan-200/60 bg-cyan-200/10 text-white"
                        : "border-white/10 text-white/60 hover:border-white/25"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      {type.label}
                      {projectType === type.value && (
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-cyan-200"
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-7">
                <label
                  htmlFor="nexora-pages"
                  className="block text-sm font-semibold"
                >
                  How many pages do you need?
                </label>
                <select
                  id="nexora-pages"
                  value={pageCount}
                  onChange={(event) => setPageCount(Number(event.target.value))}
                  className="mt-3 w-full rounded-xl border border-white/10 bg-[#090c11] px-4 py-3 text-sm text-white outline-none focus:border-cyan-200/60"
                >
                  {pageOptions.map((page) => (
                    <option key={page.value} value={page.value}>
                      {page.label}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset className="mt-7">
                <legend className="text-sm font-semibold">
                  Which features would you like?
                </legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {featureOptions.map((feature) => (
                    <label
                      key={feature.value}
                      className="flex cursor-pointer items-start gap-3 text-sm text-white/65"
                    >
                      <input
                        type="checkbox"
                        checked={features.includes(feature.value)}
                        onChange={() => toggleFeature(feature.value)}
                        className="mt-1 accent-cyan-300"
                      />
                      <span>{feature.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-7">
                <label
                  htmlFor="nexora-budget"
                  className="block text-sm font-semibold"
                >
                  Your approximate budget
                </label>
                <select
                  id="nexora-budget"
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                  className="mt-3 w-full rounded-xl border border-white/10 bg-[#090c11] px-4 py-3 text-sm text-white outline-none focus:border-cyan-200/60"
                >
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-8 rounded-xl border border-cyan-200/20 bg-cyan-200/[0.06] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-cyan-200/75">
                  Indicative project range
                </div>
                <div className="mt-3 text-2xl font-bold sm:text-3xl">
                  {formatKsh(estimate.minimum)}
                </div>
                <div className="mt-1 text-sm text-white/50">
                  to {formatKsh(estimate.maximum)}
                </div>
                <p className="mt-3 text-xs leading-5 text-white/40">
                  The final quote may differ after we discuss your requirements.
                  Third-party fees, hosting and domain costs may be separate.
                </p>
              </div>

              <button
                type="button"
                onClick={prepareEstimate}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-cyan-200 px-6 py-4 text-sm font-bold text-[#071014] transition hover:bg-white"
              >
                Discuss this estimate <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="project-journey"
        className="scroll-mt-24 border-b border-white/[0.07] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="A clear process. No guesswork."
            description="From the first conversation to launch day, each project follows a practical sequence. The exact steps depend on the work involved."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "01",
                title: "Discovery",
                body: "We discuss your business, customers, goals and requirements.",
              },
              {
                n: "02",
                title: "Scope & quotation",
                body: "We agree on the pages, features, deliverables, timeline and price.",
              },
              {
                n: "03",
                title: "Design",
                body: "We establish the visual direction and structure for your website.",
              },
              {
                n: "04",
                title: "Development",
                body: "We build the agreed features and responsive layouts.",
              },
              {
                n: "05",
                title: "Review & testing",
                body: "We check the agreed functionality and address feedback.",
              },
              {
                n: "06",
                title: "Launch & handover",
                body: "We deploy the approved website and explain the agreed handover.",
              },
            ].map((step) => (
              <article
                key={step.n}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-200/25"
              >
                <span className="text-xs font-bold tracking-widest text-cyan-200">
                  STEP {step.n}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="website-review"
        className="scroll-mt-24 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Website review request"
              title="Already have a website? Find your next improvement."
              description="Tell us which website you want reviewed and what you would most like to improve. We'll prepare a request you can send through the contact form."
            />

            <div className="mt-8 flex items-start gap-3 text-sm leading-6 text-white/50">
              <ClipboardCheck
                size={19}
                className="mt-0.5 shrink-0 text-cyan-200"
              />
              <p>
                This form prepares a review request; it does not automatically
                scan the website or generate a technical audit. A genuine audit
                requires separate checks and server-side implementation.
              </p>
            </div>
          </div>

          <form
            onSubmit={prepareReviewRequest}
            className="rounded-2xl border border-white/10 bg-[#101319] p-5 sm:p-8"
          >
            <label
              htmlFor="review-url"
              className="block text-sm font-semibold"
            >
              Website address
            </label>
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-[#090c11] px-4 focus-within:border-cyan-200/60">
              <Globe size={18} className="shrink-0 text-white/35" />
              <input
                id="review-url"
                type="text"
                value={websiteUrl}
                onChange={(event) => setWebsiteUrl(event.target.value)}
                placeholder="example.com"
                required
                className="min-w-0 flex-1 bg-transparent py-4 text-sm text-white outline-none placeholder:text-white/25"
              />
            </div>

            <label
              htmlFor="review-goal"
              className="mt-6 block text-sm font-semibold"
            >
              What would you most like to improve?
            </label>
            <select
              id="review-goal"
              value={reviewGoal}
              onChange={(event) => setReviewGoal(event.target.value)}
              className="mt-3 w-full rounded-xl border border-white/10 bg-[#090c11] px-4 py-4 text-sm text-white outline-none focus:border-cyan-200/60"
            >
              <option>Improve design and usability</option>
              <option>Improve mobile experience</option>
              <option>Improve search visibility</option>
              <option>Improve performance</option>
              <option>Get more customer enquiries</option>
              <option>Understand possible new features</option>
            </select>

            {reviewError && (
              <p role="alert" className="mt-4 text-sm text-red-300">
                {reviewError}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold transition hover:border-cyan-200/40 hover:text-cyan-200"
            >
              Prepare review request <Search size={16} />
            </button>

            {reviewSummary && (
              <div className="mt-5 rounded-xl border border-cyan-200/20 bg-cyan-200/[0.05] p-4">
                <p className="text-sm font-semibold text-cyan-200">
                  Your review request is ready
                </p>
                <pre className="mt-3 whitespace-pre-wrap break-words text-xs leading-6 text-white/60">
                  {reviewSummary}
                </pre>
                <button
                  type="button"
                  onClick={() => {
                    if (navigator.clipboard?.writeText) {
                      navigator.clipboard.writeText(reviewSummary);
                    }
                  }}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-200"
                >
                  Copy request <ArrowUpRight size={15} />
                </button>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="mt-4 block text-sm font-semibold text-cyan-200 hover:text-white"
                >
                  Go to contact form →
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
