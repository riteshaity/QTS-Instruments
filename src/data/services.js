import temperatureImage from "../assets/thermal.jpg";
import humidityImage from "../assets/humidity.jpg";
import thermalMappingImage from "../assets/temperature-mapping.png";

// Single source of truth for the 3 service lines. The original live site had
// its card titles/hrefs cross-wired against the wrong images+descriptions
// (e.g. the "/thermal" card showed sensor-calibration copy, the "/temperature"
// card showed mapping copy). Every consumer (home cards, detail pages, nav)
// reads from here so that mismatch can't happen again.
export const services = [
  {
    slug: "temperature",
    icon: "Thermometer",
    title: "Temperature Calibration",
    shortTitle: "Temperature",
    image: temperatureImage,
    summary:
      "We offer a variety of temperature sensors, including thermocouples, RTD's, and SPRT's. We provide calibration services for temperature and humidity data loggers, temperature controllers, and various other instruments such as ovens, furnaces, stability chambers, and autoclaves.",
    coverage: [
      "Thermocouples",
      "RTDs",
      "SPRTs",
      "Temperature data loggers",
      "Temperature controllers",
      "Ovens & furnaces",
      "Stability chambers",
      "Autoclaves",
    ],
  },
  {
    slug: "humidity",
    icon: "Droplets",
    title: "Humidity Calibration",
    shortTitle: "Humidity",
    image: humidityImage,
    summary:
      "We offer calibration services for a range of humidity measuring instruments, stability chambers, humidity data loggers, and other similar instruments. Our calibration services help improve the overall performance of these instruments and ensure that they are working effectively.",
    coverage: [
      "Humidity measuring instruments",
      "Stability chambers",
      "Humidity data loggers",
      "Humidity & temperature transmitters",
    ],
  },
  {
    slug: "thermal",
    icon: "Warehouse",
    title: "Thermal Mapping",
    shortTitle: "Thermal Mapping",
    image: thermalMappingImage,
    summary:
      "We offer on-site temperature mapping services for temperature-controlled environments and equipment throughout India. Our team ensures that products are maintained within the required temperature range, providing end-to-end services with ongoing support.",
    coverage: [
      "Warehouses & cold storage",
      "Stability & environmental chambers",
      "Cold rooms & walk-in coolers",
      "Vehicles & cold-chain transport",
    ],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
