import { PolicyLayout } from "@/components/policy-layout";
import { STORE } from "@/lib/store-info";

const ACCEPT: [string, string[]][] = [
  ["Clothing & shoes", ["Men's, women's and children's clothing", "All types of footwear"]],
  ["Accessories", ["Hats, mittens, scarves, ties", "Purses, wallets, backpacks", "Socks and belts"]],
  ["Small electronics", ["Toasters, radios, irons", "Blenders, mixers, stereos", "Lamps and humidifiers"]],
  ["Sports & toys", ["Golf accessories, sports equipment", "Exercise equipment, skis", "Toys, games, puzzles"]],
  ["Kitchen items", ["Pots, pans, utensils", "China, dishes, cutlery", "Glassware and stemware"]],
  ["Decorative items", ["Jewellery, crafts, candles", "Pictures, frames, baskets", "Ornaments and hand tools"]],
  ["Media & books", ["Books and magazines", "Records, CDs, DVDs", "Computer software"]],
  ["Textiles", ["Towels, sheets, blankets", "Pillows and curtains", "Tablecloths"]],
];

const CANNOT_ACCEPT = [
  "Automobile parts (tires, mufflers, fenders)",
  "Beds and bedding parts (mattresses, box springs, cribs)",
  "Construction materials (lumber, pipes, carpet)",
  "Damaged furniture (torn, soiled, or needing repair)",
  "Hazardous materials (batteries, paints, chemicals)",
  "Flammable products (gas cans, propane, barbecues)",
  "Infant car seats and cribs (restricted by law)",
  "Large appliances (refrigerators, dishwashers, stoves)",
  "Marine vessels (boats, canoes, kayaks)",
  "CRT televisions and computer monitors",
  "Weapons (firearms, ammunition, explosives)",
  "Swing sets, food, and animals",
];

export default function Donations() {
  return (
    <PolicyLayout title="Donation Guide">
      <p className="mt-4">
        Donating to Second Spin gives pre-loved items a second life, keeps them out of landfill and supports our local
        community. Bring your items inside the store during business hours ({STORE.hoursLong.toLowerCase()}) at{" "}
        {STORE.street}, Trenton.
      </p>

      <h2>Items we accept</h2>
      <div className="grid sm:grid-cols-2 gap-x-8">
        {ACCEPT.map(([category, items]) => (
          <div key={category}>
            <h3 className="font-semibold text-brand-navy dark:text-gray-100 mb-1">{category}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Items we cannot accept</h2>
      <p>For safety and legal reasons, we cannot accept:</p>
      <ul>
        {CANNOT_ACCEPT.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        <strong>Note:</strong> We do accept LCD, LED and plasma flat screen TVs. Some construction items, like decorative
        hardware, light fixtures and stained glass windows, may be acceptable.
      </p>

      <h2>Questions?</h2>
      <p>
        Call us at <a href={STORE.phoneHref}>{STORE.phone}</a> or email{" "}
        <a href={`mailto:${STORE.email}`}>{STORE.email}</a>.
      </p>
    </PolicyLayout>
  );
}
