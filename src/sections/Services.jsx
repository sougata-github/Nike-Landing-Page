import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section
      className="max-container flex justify-center flex-wrap gap-9"
      data-aos="fade-up"
    >
      {services.map((service) => (
        <ServiceCard index={service.label} key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
