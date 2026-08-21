import {
  HiOutlineClock,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const officeHours = [
  {
    day: "Monday - Friday",
    time: "9:00 AM - 6:00 PM",
  },
  {
    day: "Saturday",
    time: "10:00 AM - 4:00 PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

const OfficeHours = () => {
  return (
    <div className="rounded-[28px] border border-[var(--brand-line)] bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">

      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[var(--brand-blue)]">
          <HiOutlineClock className="text-3xl" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#17263D]">
            Office Hours
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            We're available during the following hours.
          </p>
        </div>

      </div>

      {/* Hours */}

      <div className="mt-8 space-y-5">

        {officeHours.map((item) => (
          <div
            key={item.day}
            className="flex items-center justify-between border-b border-dashed border-slate-200 pb-4"
          >
            <span className="font-medium text-[#17263D]">
              {item.day}
            </span>

            <span
              className={`font-semibold ${
                item.time === "Closed"
                  ? "text-red-500"
                  : "text-[var(--brand-blue)]"
              }`}
            >
              {item.time}
            </span>
          </div>
        ))}

      </div>

      {/* Response Time */}

      <div className="mt-8 rounded-2xl bg-[#F5F8FF] p-5">

        <div className="flex items-start gap-3">

          <HiOutlineCheckCircle className="mt-1 text-2xl text-green-500" />

          <div>

            <h4 className="font-semibold text-[#17263D]">
              Average Response Time
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              We usually respond to all enquiries within
              <span className="font-semibold text-[#17263D]">
                {" "}
                24 business hours.
              </span>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default OfficeHours;