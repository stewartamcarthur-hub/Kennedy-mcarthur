import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "Partners",
  description:
    "Kennedy McArthur Partners — a forthcoming program for ongoing relationships with investors and operators in Animal Health and One Health.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners — Dormant"
        title={
          <>
            A program in <em className="text-[var(--color-forest)]">development.</em>
          </>
        }
        intro="The Kennedy McArthur Partners program will formalize ongoing relationships with investors, operators, and stakeholders across Animal Health and One Health. It is not yet live."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24 lg:py-36 grid lg:grid-cols-12 gap-10 items-start">
          <Reveal className="lg:col-span-6">
            <p className="km-eyebrow text-stone-500 mb-6">In the meantime</p>
            <p className="km-display text-[clamp(1.75rem,3.5vw,3rem)]">
              If you are a sponsor, operator, or executive we have worked with —{" "}
              <em>we already consider you a partner.</em>
            </p>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg text-stone-700 leading-relaxed">
              For now, the most useful conversations begin one mandate at a
              time. When the Partners program launches, those who have been on
              the journey with us will hear first.
            </p>
            <a
              href="mailto:info@kennedymcarthur.com?subject=Partners%20program"
              className="km-link mt-8 inline-flex text-ink"
            >
              Register interest <span aria-hidden className="arrow">↗</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
