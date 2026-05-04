import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "Contact",
  description:
    "Kennedy McArthur — Animal & One Health Executive Search. London and Glasgow.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Begin a <em className="text-[var(--color-forest)]">conversation.</em>
          </>
        }
        intro="The fastest way to start is by writing to us. We respond personally — every brief is read by a partner."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-20 lg:py-32 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <p className="km-eyebrow text-stone-500 mb-6">Direct</p>
            <a
              href="mailto:info@kennedymcarthur.com"
              className="km-display block text-[clamp(2rem,5.5vw,5rem)] text-ink leading-[0.95]"
            >
              info@<wbr />kennedymcarthur.com
            </a>
            <p className="mt-10 text-stone-600 max-w-xl">
              We treat every inbound brief as confidential. Tell us the seat,
              the timeframe, and what success looks like — we&rsquo;ll come back
              with a partner introduction within two business days.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9 space-y-12">
            <div>
              <p className="km-eyebrow text-stone-500 mb-3">London</p>
              <p className="text-lg text-stone-700">
                Kennedy McArthur Ltd
                <br />
                London, United Kingdom
              </p>
            </div>
            <div>
              <p className="km-eyebrow text-stone-500 mb-3">Glasgow</p>
              <p className="text-lg text-stone-700">
                Kennedy McArthur Ltd
                <br />
                Glasgow, United Kingdom
              </p>
            </div>
            <div className="pt-8 border-t border-stone-200">
              <p className="km-eyebrow text-stone-500 mb-3">Reach</p>
              <p className="text-stone-600 leading-relaxed">
                Mandates delivered across Europe, North America, and
                Asia-Pacific.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
