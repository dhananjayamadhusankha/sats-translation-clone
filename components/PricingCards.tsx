import { Check } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

function PricingCards({ redirect }: { redirect: boolean }) {
  const tiers = [
    {
      name: "Starter",
      id: null,
      href: "#",
      priceMonthly: null,
      description: "Get chatting right away with anyone, anywhere!",
      features: [
        "20 Message Chat Limit in Chats",
        "2 Participant limit in Chat",
        "3 Chat Rooms limit",
        "Supports 2 languages",
        "48-hour support response time",
      ],
    },
    {
      name: "Pro",
      id: "si_OnlcsLNQYbMVzV",
      href: "#",
      priceMonthly: "£5.99",
      description: "Unlock the Full Potential with Pro!",
      features: [
        "Unlimited Messages in Chats",
        "Unlimited Participants in Chats",
        "Unlimited Chat Rooms",
        "Supports up to 10 languages",
        "Multimedia support in chats (coming soon)",
        "1-hour, dedicated support response time",
        "Early access to New Features",
      ],
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-md gap-8 lg:max-w-4xl">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col text-gray-900 justify-between bg-white rounded-3xl shadow-xl p-8 ring-1 ring-gray-900/10 sm:p-10"
          >
            <div>
              <h3
                id={tier.id + tier.name}
                className="text-base font-semibold text-indigo-600 leading-7"
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex gap-x-2 items-baseline">
                {tier.priceMonthly ? (
                  <>
                    <span className="text-5xl font-bold tracking-tight">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-base font-semibold text-gray-600 leading-7">
                      /month
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold tracking-tight">
                    Free
                  </span>
                )}
              </div>

              <p className="text-base mt-6 leading-7 text-gray-600">
                {tier.description}
              </p>
              <ul
                role="list"
                className="flex flex-col mt-10 space-y-4 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li className="flex gap-x-3">
                    <Check
                      className="text-indigo-600 h-6 w-5 flex-none"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {redirect ? (
              <Link
                href="/register"
                className="mt-8 bg-indigo-600 rounded-md text-center py-2 text-white font-semibold leading-6 cursor-pointer shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-80 block"
              >
                Get Started Today
              </Link>
            ) : (
              <div><CheckoutButton /></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
