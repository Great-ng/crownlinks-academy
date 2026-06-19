import SectionHeading from "./SectionHeading";
import AccreditationCard from "./card/AccreditationCard";
import { accreditations } from "../data/homeData";

const AccreditationSection = () => {
  return (
    <section className="bg-[linear-gradient(180deg,#F7F8FC_0%,#FFFFFF_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Global Accreditations"
          title="Trusted certifications that support your growth"
          description="CrownLinks Academy is officially accredited by leading UK awarding bodies, ensuring every qualification meets the highest professional standards."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {accreditations.map((item) => (
            <AccreditationCard key={item.id} accreditation={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
