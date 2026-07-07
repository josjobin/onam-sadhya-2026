import React from "react";

// Standardized nutritional data and ingredients for the 21 items.
// Allergens MUST be bolded per EU/Swedish regulations.
const NUTRITION_DATA = [
  {
    name: "Avial",
    ingredientsEn: "Mixed vegetables (carrot, ash gourd, raw banana, drumstick, yam), coconut, yogurt (Milk), coconut oil, green chilli, cumin, curry leaves, salt.",
    ingredientsSv: "Blandade grönsaker (morot, vaxpumpa, rå banan, drumstick, jams), kokos, yoghurt (Mjölk), kokosolja, grön chili, spiskummin, curryblad, salt.",
    allergensEn: "Milk",
    allergensSv: "Mjölk",
    nutrition: { energy: "120 kcal / 502 kJ", fat: "8.0g", satFat: "6.0g", carbs: "10.0g", sugars: "2.0g", protein: "2.0g", salt: "0.8g" }
  },
  {
    name: "Sambar",
    ingredientsEn: "Toor dal (pigeon peas), mixed vegetables, tamarind extract, sambar powder (coriander, chilli, fenugreek, asafoetida), mustard seeds, coconut oil, salt.",
    ingredientsSv: "Toor dal (duvärtor), blandade grönsaker, tamarindextrakt, sambarpulver (koriander, chili, bockhornsklöver, dyvelsträck), senapsfrön, kokosolja, salt.",
    allergensEn: "Mustard. May contain traces of Gluten (Asafoetida).",
    allergensSv: "Senap. Kan innehålla spår av Gluten (Dyvelsträck).",
    nutrition: { energy: "95 kcal / 397 kJ", fat: "3.5g", satFat: "2.0g", carbs: "12.0g", sugars: "1.5g", protein: "4.0g", salt: "1.2g" }
  },
  {
    name: "Parippu Curry",
    ingredientsEn: "Moong dal (split green gram), coconut, cumin, garlic, green chilli, coconut oil, mustard seeds, salt.",
    ingredientsSv: "Moong dal (mungbönor), kokos, spiskummin, vitlök, grön chili, kokosolja, senapsfrön, salt.",
    allergensEn: "Mustard",
    allergensSv: "Senap",
    nutrition: { energy: "140 kcal / 585 kJ", fat: "5.0g", satFat: "4.0g", carbs: "18.0g", sugars: "0.5g", protein: "6.0g", salt: "1.0g" }
  },
  {
    name: "Ada Pradhaman",
    ingredientsEn: "Rice flakes (ada), jaggery, coconut milk, cashew nuts, raisins, cardamom, ghee (Milk).",
    ingredientsSv: "Risflingor (ada), jaggery (rörsocker), kokosmjölk, cashewnötter, russin, kardemumma, ghee (Mjölk).",
    allergensEn: "Milk, Tree Nuts (Cashew)",
    allergensSv: "Mjölk, Trädnötter (Cashew)",
    nutrition: { energy: "280 kcal / 1171 kJ", fat: "12.0g", satFat: "9.5g", carbs: "40.0g", sugars: "25.0g", protein: "3.0g", salt: "0.1g" }
  },
  {
    name: "Parippu Payasam",
    ingredientsEn: "Moong dal, jaggery, coconut milk, ghee (Milk), cashew nuts, cardamom.",
    ingredientsSv: "Mungbönor, jaggery (rörsocker), kokosmjölk, ghee (Mjölk), cashewnötter, kardemumma.",
    allergensEn: "Milk, Tree Nuts (Cashew)",
    allergensSv: "Mjölk, Trädnötter (Cashew)",
    nutrition: { energy: "290 kcal / 1213 kJ", fat: "14.0g", satFat: "11.0g", carbs: "38.0g", sugars: "22.0g", protein: "4.5g", salt: "0.1g" }
  },
  {
    name: "Pineapple Pachadi",
    ingredientsEn: "Pineapple, yogurt (Milk), coconut, mustard seeds, green chilli, cumin, salt, sugar.",
    ingredientsSv: "Ananas, yoghurt (Mjölk), kokos, senapsfrön, grön chili, spiskummin, salt, socker.",
    allergensEn: "Milk, Mustard",
    allergensSv: "Mjölk, Senap",
    nutrition: { energy: "110 kcal / 460 kJ", fat: "4.5g", satFat: "3.5g", carbs: "15.0g", sugars: "12.0g", protein: "2.0g", salt: "0.6g" }
  },
  {
    name: "Olan",
    ingredientsEn: "Ash gourd, black-eyed peas, coconut milk, green chilli, coconut oil, salt.",
    ingredientsSv: "Vaxpumpa, svartögda bönor, kokosmjölk, grön chili, kokosolja, salt.",
    allergensEn: "None",
    allergensSv: "Inga",
    nutrition: { energy: "90 kcal / 376 kJ", fat: "6.0g", satFat: "5.0g", carbs: "8.0g", sugars: "1.0g", protein: "2.5g", salt: "0.5g" }
  },
  {
    name: "Koottu Curry",
    ingredientsEn: "Yam, raw banana, black chickpeas, roasted coconut, black pepper, jaggery, coconut oil, mustard seeds, salt.",
    ingredientsSv: "Jams, rå banan, svarta kikärtor, rostad kokos, svartpeppar, jaggery (rörsocker), kokosolja, senapsfrön, salt.",
    allergensEn: "Mustard",
    allergensSv: "Senap",
    nutrition: { energy: "160 kcal / 669 kJ", fat: "7.0g", satFat: "5.5g", carbs: "20.0g", sugars: "3.0g", protein: "4.0g", salt: "0.9g" }
  },
  {
    name: "Erissery",
    ingredientsEn: "Pumpkin, red cowpeas, coconut, cumin, garlic, coconut oil, mustard seeds, dried red chilli, salt.",
    ingredientsSv: "Pumpa, röda bönor, kokos, spiskummin, vitlök, kokosolja, senapsfrön, torkad röd chili, salt.",
    allergensEn: "Mustard",
    allergensSv: "Senap",
    nutrition: { energy: "135 kcal / 564 kJ", fat: "6.5g", satFat: "5.0g", carbs: "16.0g", sugars: "2.5g", protein: "4.0g", salt: "0.8g" }
  },
  {
    name: "Achinga Thoran",
    ingredientsEn: "Long beans, grated coconut, turmeric, garlic, cumin, coconut oil, mustard seeds, salt.",
    ingredientsSv: "Långbönor, riven kokos, gurkmeja, vitlök, spiskummin, kokosolja, senapsfrön, salt.",
    allergensEn: "Mustard",
    allergensSv: "Senap",
    nutrition: { energy: "85 kcal / 355 kJ", fat: "5.0g", satFat: "4.0g", carbs: "7.0g", sugars: "1.5g", protein: "2.5g", salt: "0.7g" }
  },
  {
    name: "Angamaly Mango Curry",
    ingredientsEn: "Raw mango, coconut milk, green chilli, ginger, turmeric, coconut oil, mustard seeds, salt.",
    ingredientsSv: "Rå mango, kokosmjölk, grön chili, ingefära, gurkmeja, kokosolja, senapsfrön, salt.",
    allergensEn: "Mustard",
    allergensSv: "Senap",
    nutrition: { energy: "105 kcal / 439 kJ", fat: "8.0g", satFat: "7.0g", carbs: "9.0g", sugars: "3.5g", protein: "1.0g", salt: "1.0g" }
  },
  {
    name: "Puli Inchi",
    ingredientsEn: "Ginger, tamarind, jaggery, green chilli, coconut oil, mustard seeds, fenugreek, salt.",
    ingredientsSv: "Ingefära, tamarind, jaggery (rörsocker), grön chili, kokosolja, senapsfrön, bockhornsklöver, salt.",
    allergensEn: "Mustard",
    allergensSv: "Senap",
    nutrition: { energy: "180 kcal / 753 kJ", fat: "4.0g", satFat: "3.0g", carbs: "35.0g", sugars: "25.0g", protein: "1.5g", salt: "1.5g" }
  },
  {
    name: "Mango Pickle",
    ingredientsEn: "Raw mango, chilli powder, sesame oil, mustard seeds, fenugreek, asafoetida, salt.",
    ingredientsSv: "Rå mango, chilipulver, sesamolja, senapsfrön, bockhornsklöver, dyvelsträck, salt.",
    allergensEn: "Sesame, Mustard. May contain traces of Gluten (Asafoetida).",
    allergensSv: "Sesam, Senap. Kan innehålla spår av Gluten (Dyvelsträck).",
    nutrition: { energy: "150 kcal / 627 kJ", fat: "10.0g", satFat: "1.5g", carbs: "12.0g", sugars: "2.0g", protein: "1.0g", salt: "4.5g" }
  },
  {
    name: "Lemon Pickle",
    ingredientsEn: "Lemon, chilli powder, sesame oil, mustard seeds, fenugreek, asafoetida, salt.",
    ingredientsSv: "Citron, chilipulver, sesamolja, senapsfrön, bockhornsklöver, dyvelsträck, salt.",
    allergensEn: "Sesame, Mustard. May contain traces of Gluten.",
    allergensSv: "Sesam, Senap. Kan innehålla spår av Gluten.",
    nutrition: { energy: "140 kcal / 585 kJ", fat: "9.0g", satFat: "1.2g", carbs: "11.0g", sugars: "1.5g", protein: "1.0g", salt: "4.5g" }
  },
  {
    name: "Banana Chips",
    ingredientsEn: "Raw plantain (Nendran), coconut oil, salt, turmeric.",
    ingredientsSv: "Rå kokbanan (Nendran), kokosolja, salt, gurkmeja.",
    allergensEn: "None",
    allergensSv: "Inga",
    nutrition: { energy: "520 kcal / 2175 kJ", fat: "30.0g", satFat: "25.0g", carbs: "60.0g", sugars: "1.0g", protein: "2.0g", salt: "1.2g" }
  },
  {
    name: "Sharkkara Varatty",
    ingredientsEn: "Raw plantain, jaggery, ginger powder, cardamom, cumin, coconut oil.",
    ingredientsSv: "Rå kokbanan, jaggery (rörsocker), ingefärapulver, kardemumma, spiskummin, kokosolja.",
    allergensEn: "None",
    allergensSv: "Inga",
    nutrition: { energy: "480 kcal / 2008 kJ", fat: "15.0g", satFat: "13.0g", carbs: "80.0g", sugars: "45.0g", protein: "2.5g", salt: "0.1g" }
  },
  {
    name: "Rasam",
    ingredientsEn: "Tamarind extract, tomato, black pepper, cumin, garlic, coriander leaves, mustard seeds, salt.",
    ingredientsSv: "Tamarindextrakt, tomat, svartpeppar, spiskummin, vitlök, korianderblad, senapsfrön, salt.",
    allergensEn: "Mustard",
    allergensSv: "Senap",
    nutrition: { energy: "40 kcal / 167 kJ", fat: "1.0g", satFat: "0.1g", carbs: "7.0g", sugars: "2.0g", protein: "1.0g", salt: "1.5g" }
  },
  {
    name: "Pappadam",
    ingredientsEn: "Urad dal flour, rice flour, salt, coconut oil (for frying), baking soda.",
    ingredientsSv: "Urad dal-mjöl (svarta linser), rismjöl, salt, kokosolja (för fritering), bikarbonat.",
    allergensEn: "None (Manufactured in a facility that may process wheat/gluten).",
    allergensSv: "Inga (Tillverkas i en anläggning som kan hantera vete/gluten).",
    nutrition: { energy: "320 kcal / 1338 kJ", fat: "20.0g", satFat: "17.0g", carbs: "25.0g", sugars: "0g", protein: "10.0g", salt: "2.0g" }
  },
  {
    name: "Kondattam",
    ingredientsEn: "Sun-dried chillies, yogurt (Milk), salt, oil for frying.",
    ingredientsSv: "Soltorkad chili, yoghurt (Mjölk), salt, olja för fritering.",
    allergensEn: "Milk",
    allergensSv: "Mjölk",
    nutrition: { energy: "250 kcal / 1046 kJ", fat: "15.0g", satFat: "8.0g", carbs: "20.0g", sugars: "3.0g", protein: "5.0g", salt: "3.5g" }
  },
  {
    name: "Salt / Salt",
    ingredientsEn: "Refined edible salt.",
    ingredientsSv: "Raffinerat matsalt.",
    allergensEn: "None",
    allergensSv: "Inga",
    nutrition: { energy: "0 kcal", fat: "0g", satFat: "0g", carbs: "0g", sugars: "0g", protein: "0g", salt: "99.0g" }
  },
  {
    name: "Banana Leaf / Bananblad (from SAS)",
    ingredientsEn: "Natural banana leaf. Food-grade packaging material. Not for consumption.",
    ingredientsSv: "Naturligt bananblad. Livsmedelsgodkänt förpackningsmaterial. Ej för konsumtion.",
    allergensEn: "N/A",
    allergensSv: "N/A",
    nutrition: { energy: "N/A", fat: "N/A", satFat: "N/A", carbs: "N/A", sugars: "N/A", protein: "N/A", salt: "N/A" }
  }
];

export default function NutritionPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 font-sans py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-950">
            Nutrition & Allergens
          </h1>
          <h2 className="text-2xl text-neutral-500 font-medium">
            Närings- och allergeninformation
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mt-6"></div>
          
          <div className="max-w-3xl mx-auto mt-8 bg-amber-50 border border-amber-200 text-amber-900 p-6 rounded-2xl text-left text-sm md:text-base leading-relaxed">
            <p className="font-bold mb-2">Important Notice / Viktigt meddelande:</p>
            <p className="mb-2">
              The values provided below are calculated estimates based on standard traditional recipes for the Flavournest Onam Sadhya. All nutritional values are measured <strong>per 100g</strong>. Ingredients causing allergies or intolerances are highlighted in <strong>bold</strong>.
            </p>
            <p className="italic text-amber-800">
              Värdena nedan är beräknade uppskattningar baserade på standardrecept för Flavournest Onam Sadhya. Alla näringsvärden mäts <strong>per 100g</strong>. Ingredienser som orsakar allergier eller intoleranser är markerade i <strong>fetstil</strong>.
            </p>
          </div>
        </div>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {NUTRITION_DATA.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-emerald-900 text-white px-6 py-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
              </div>
              
              <div className="p-6 space-y-6">
                
                {/* Ingredients & Allergens */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-emerald-700 uppercase mb-1">Ingredients / Ingredienser</h4>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-2">
                      <span className="font-semibold">EN:</span> {item.ingredientsEn}
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed italic">
                      <span className="font-semibold not-italic">SV:</span> {item.ingredientsSv}
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border border-red-100 p-3 rounded-xl">
                    <h4 className="text-xs font-bold tracking-widest text-red-700 uppercase mb-1">Allergens / Allergener</h4>
                    <p className="text-sm text-red-900 font-medium">EN: <strong>{item.allergensEn}</strong></p>
                    <p className="text-sm text-red-800 font-medium italic mt-1">SV: <strong>{item.allergensSv}</strong></p>
                  </div>
                </div>

                {/* Nutritional Table */}
                {item.name !== "Banana Leaf / Bananblad (from SAS)" && (
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-2">Nutrition per 100g / Näringsvärde per 100g</h4>
                    <div className="bg-neutral-50 rounded-xl border border-neutral-100 p-4 text-sm">
                      <div className="flex justify-between border-b border-neutral-200 py-1.5">
                        <span className="text-neutral-600">Energy / Energi</span>
                        <span className="font-semibold text-neutral-900">{item.nutrition.energy}</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-200 py-1.5">
                        <span className="text-neutral-600">Fat / Fett</span>
                        <span className="font-semibold text-neutral-900">{item.nutrition.fat}</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-200 py-1.5 pl-4 text-xs">
                        <span className="text-neutral-500">- of which saturates / varav mättat</span>
                        <span className="font-medium text-neutral-700">{item.nutrition.satFat}</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-200 py-1.5">
                        <span className="text-neutral-600">Carbohydrates / Kolhydrater</span>
                        <span className="font-semibold text-neutral-900">{item.nutrition.carbs}</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-200 py-1.5 pl-4 text-xs">
                        <span className="text-neutral-500">- of which sugars / varav sockerarter</span>
                        <span className="font-medium text-neutral-700">{item.nutrition.sugars}</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-200 py-1.5">
                        <span className="text-neutral-600">Protein / Protein</span>
                        <span className="font-semibold text-neutral-900">{item.nutrition.protein}</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span className="text-neutral-600">Salt / Salt</span>
                        <span className="font-semibold text-neutral-900">{item.nutrition.salt}</span>
                      </div>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}