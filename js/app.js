const e_division = document.querySelector("#division");
const e_district = document.querySelector("#district");
const e_result = document.querySelector("#result");
const e_overlay = document.querySelector("#e-overlay");
const e_popup_img = document.querySelector("#e-popup-img");
const e_popup = document.querySelector("#e-popup");

let divisionName = "";
let districtName = "";

const banglaDigits = new Map([
  [0, "০"],
  [1, "১"],
  [2, "২"],
  [3, "৩"],
  [4, "৪"],
  [5, "৫"],
  [6, "৬"],
  [7, "৭"],
  [8, "৮"],
  [9, "৯"],
]);

const dhakaDistricts = [
  "-- জেলা --",
  "ঢাকা",
  "গাজীপুর",
  "কিশোরগঞ্জ",
  "মানিকগঞ্জ",
  "মুন্সীগঞ্জ",
  "নারায়নগঞ্জ",
  "নরসিংদী",
  "টাঙ্গাইল",
  "ফরিদপুর",
  "গোপালগঞ্জ",
  "মাদারীপুর",
  "রাজবাড়ী",
  "শরীয়তপুর",
];

const chittagongDistrict = [
  "-- জেলা --",
  "ব্রাহ্মণবাড়িয়া",
  "কুমিল্লা",
  "চাঁদপুর",
  "লক্ষ্মীপুর",
  "নোয়াখালী",
  "ফেনী",
  "খাগড়াছড়ি",
  "রাঙ্গামাটি",
  "বান্দরবান",
  "চট্টগ্রাম",
  "কক্সবাজার",
];

const rajshahiDistrict = [
  "-- জেলা --",
  "বগুড়া",
  "জয়পুরহাট",
  "নওগাঁ",
  "নাটোর",
  "পাবনা",
  "রাজশাহী",
  "সিরাজগঞ্জ",
  "চাঁপাইনবাবগঞ্জ",
  "পঞ্চগড়",
];

const barishalDistrict = [
  "-- জেলা --",
  "বরিশাল",
  "ভোলা",
  "বরগুনা",
  "ঝালকাঠি",
  "পটুয়াখালী",
  "পিরোজপুর",
];

const khulnaDistrict = [
  "-- জেলা --",
  "বাগেরহাট",
  "চুয়াডাঙ্গা",
  "যশোর",
  "ঝিনাইদহ",
  "খুলনা",
  "কুষ্টিয়া",
  "মাগুরা",
  "মেহেরপুর",
  "নড়াইল",
  "সাতক্ষীরা",
];

const sylhetDistrict = [
  "-- জেলা --",
  "সিলেট",
  "মৌলভীবাজার",
  "হবিগঞ্জ",
  "সুনামগঞ্জ",
];

const rangpurDistrict = [
  "-- জেলা --",
  "পঞ্চগড়",
  "দিনাজপুর",
  "গাইবান্ধা",
  "কুড়িগ্রাম",
  "লালমনিরহাট",
  "নীলফামারী",
  "পঞ্চগড়",
  "রংপুর",
  "ঠাকুরগাঁও",
];

const mymensinghDistrict = [
  "-- জেলা --",
  "শেরপুর",
  "ময়মনসিংহ",
  "জামালপুর",
  "নেত্রকোনা",
];

//   dhaka district seats
const dhakaSeats = [
  "ঢাকা-১",
  "ঢাকা-২",
  "ঢাকা-৩",
  "ঢাকা-৪",
  "ঢাকা-৫",
  "ঢাকা-৬",
  "ঢাকা-৭",
  "ঢাকা-৮",
  "ঢাকা-৯",
  "ঢাকা-১০",
  "ঢাকা-১১",
  "ঢাকা-১২",
  "ঢাকা-১৩",
  "ঢাকা-১৪",
  "ঢাকা-১৫",
  "ঢাকা-১৬",
  "ঢাকা-১৭",
  "ঢাকা-১৮",
  "ঢাকা-১৯",
  "ঢাকা-২০",
];

const gazipurSeats = ["গাজীপুর-১", "গাজীপুর-২", "গাজীপুর-৩"];

const kishorganjSeats = [
  "কিশোরগঞ্জ-১",
  "কিশোরগঞ্জ-২",
  "কিশোরগঞ্জ-৩",
  "কিশোরগঞ্জ-৪",
  "কিশোরগঞ্জ-৫",
  "কিশোরগঞ্জ-৬",
];

const manikganjSeats = ["মানিকগঞ্জ-১", "মানিকগঞ্জ-২", "মানিকগঞ্জ-৩"];

const munshiganjSeats = ["মুন্সীগঞ্জ-১", "মুন্সীগঞ্জ-২", "মুন্সীগঞ্জ-৩"];

const naraonganjSeats = [
  "নারায়নগঞ্জ-১",
  "নারায়নগঞ্জ-২",
  "নারায়নগঞ্জ-৩",
  "নারায়নগঞ্জ-৪",
  "নারায়নগঞ্জ-৫",
];

const norshingdiSeats = [
  "নরসিংদী-১",
  "নরসিংদী-২",
  "নরসিংদী-৩",
  "নরসিংদী-৪",
  "নরসিংদী-৫",
];

const tangailSeats = [
  "টাঙ্গাইল-১",
  "টাঙ্গাইল-২",
  "টাঙ্গাইল-৩",
  "টাঙ্গাইল-৪",
  "টাঙ্গাইল-৫",
  "টাঙ্গাইল-৬",
  "টাঙ্গাইল-৭",
  "টাঙ্গাইল-৮",
];

const faridpurSeats = ["ফরিদপুর-১", "ফরিদপুর-২", "ফরিদপুর-৩", "ফরিদপুর-৪"];

const gopalganjSeats = ["গোপালগঞ্জ-১", "গোপালগঞ্জ-২", "গোপালগঞ্জ-৩"];

const madaripurSeats = ["মাদারীপুর-১", "মাদারীপুর-২", "মাদারীপুর-৩"];

const rajbariSeats = ["রাজবাড়ী-১", "রাজবাড়ী-২"];

const sharishabariSeats = ["শরীয়তপুর-১", "শরীয়তপুর-২", "শরীয়তপুর-৩"];

//   chittagong district seats

const brahmanbariaSeats = [
  "ব্রাহ্মণবাড়িয়া-১",
  "ব্রাহ্মণবাড়িয়া-২",
  "ব্রাহ্মণবাড়িয়া-৩",
  "ব্রাহ্মণবাড়িয়া-৪",
  "ব্রাহ্মণবাড়িয়া-৫",
  "ব্রাহ্মণবাড়িয়া-৬",
];

const comillaSeats = [
  "কুমিল্লা-১",
  "কুমিল্লা-২",
  "কুমিল্লা-৩",
  "কুমিল্লা-৪",
  "কুমিল্লা-৫",
  "কুমিল্লা-৬",
  "কুমিল্লা-৭",
  "কুমিল্লা-৮",
  "কুমিল্লা-৯",
  "কুমিল্লা-১০",
];

const chandpurSeats = [
  "চাঁদপুর-১",
  "চাঁদপুর-২",
  "চাঁদপুর-৩",
  "চাঁদপুর-৪",
  "চাঁদপুর-৫",
];

const lakshmipurSeats = [
  "লক্ষ্মীপুর-১",
  "লক্ষ্মীপুর-২",
  "লক্ষ্মীপুর-৩",
  "লক্ষ্মীপুর-৪",
];

const noakhaliSeats = [
  "নোয়াখালী-১",
  "নোয়াখালী-২",
  "নোয়াখালী-৩",
  "নোয়াখালী-৪",
  "নোয়াখালী-৫",
  "নোয়াখালী-৬",
];

const feniSeats = ["ফেনী-১", "ফেনী-২", "ফেনী-৩"];

const khagrachariSeats = ["খাগড়াছড়ি"];

const rangamatiSeats = ["রাঙ্গামাটি"];

const bandarbanSeats = ["বান্দরবান"];

const chittagongSeats = [
  "চট্টগ্রাম-১",
  "চট্টগ্রাম-২",
  "চট্টগ্রাম-৩",
  "চট্টগ্রাম-৪",
  "চট্টগ্রাম-৫",
  "চট্টগ্রাম-৬",
  "চট্টগ্রাম-৭",
  "চট্টগ্রাম-৮",
  "চট্টগ্রাম-৯",
  "চট্টগ্রাম-১০",
  "চট্টগ্রাম-১১",
  "চট্টগ্রাম-১২",
  "চট্টগ্রাম-১৩",
  "চট্টগ্রাম-১৪",
  "চট্টগ্রাম-১৫",
  "চট্টগ্রাম-১৬",
];

const coxsbazarSeats = [
  "কক্সবাজার-১",
  "কক্সবাজার-২",
  "কক্সবাজার-৩",
  "কক্সবাজার-৪",
];

//   rajshahi district seats

const boguraSeats = [
  "বগুড়া-১",
  "বগুড়া-২",
  "বগুড়া-৩",
  "বগুড়া-৪",
  "বগুড়া-৫",
  "বগুড়া-৬",
  "বগুড়া-৭",
];

const joypurhatSeats = ["জয়পুরহাট-১", "জয়পুরহাট-২"];

const naogaonSeats = [
  "নওগাঁ-১",
  "নওগাঁ-২",
  "নওগাঁ-৩",
  "নওগাঁ-৪",
  "নওগাঁ-৫",
  "নওগাঁ-৬",
];

const natoreSeats = ["নাটোর-১", "নাটোর-২", "নাটোর-৩", "নাটোর-৪"];

const pabnaSeats = ["পাবনা-১", "পাবনা-২", "পাবনা-৩", "পাবনা-৪", "পাবনা-৫"];

const rajshahiSeats = [
  "রাজশাহী-১",
  "রাজশাহী-২",
  "রাজশাহী-৩",
  "রাজশাহী-৪",
  "রাজশাহী-৫",
  "রাজশাহী-৬",
];

const sirajganjSeats = [
  "সিরাজগঞ্জ-১",
  "সিরাজগঞ্জ-২",
  "সিরাজগঞ্জ-৩",
  "সিরাজগঞ্জ-৪",
  "সিরাজগঞ্জ-৫",
  "সিরাজগঞ্জ-৬",
];

const chapainawabganjSeats = [
  "চাঁপাইনবাবগঞ্জ-১",
  "চাঁপাইনবাবগঞ্জ-২",
  "চাঁপাইনবাবগঞ্জ-৩",
];

//   barishal district seats

const barishalSeats = [
  "বরিশাল-১",
  "বরিশাল-২",
  "বরিশাল-৩",
  "বরিশাল-৪",
  "বরিশাল-৫",
  "বরিশাল-৬",
];

const bholaSeats = ["ভোলা-১", "ভোলা-২", "ভোলা-৩", "ভোলা-৪"];

const bargunaSeats = ["বরগুনা-১", "বরগুনা-২"];

const jhalokathiSeats = ["ঝালকাঠি-১", "ঝালকাঠি-২"];

const patuakhaliSeats = [
  "পটুয়াখালী-১",
  "পটুয়াখালী-২",
  "পটুয়াখালী-৩",
  "পটুয়াখালী-৪",
];

const pirojpurSeats = ["পিরোজপুর-১", "পিরোজপুর-২", "পিরোজপুর-৩"];

//   khulna district seats

const bagerhatSeats = ["বাগেরহাট-১", "বাগেরহাট-২", "বাগেরহাট-৩", "বাগেরহাট-৪"];

const chuadangaSeats = ["চুয়াডাঙ্গা-১", "চুয়াডাঙ্গা-২"];

const jessoreSeats = [
  "যশোর-১",
  "যশোর-২",
  "যশোর-৩",
  "যশোর-৪",
  "যশোর-৫",
  "যশোর-৬",
];

const jhenaidahSeats = ["ঝিনাইদহ-১", "ঝিনাইদহ-২", "ঝিনাইদহ-৩", "ঝিনাইদহ-৪"];

const khulnaSeats = [
  "খুলনা-১",
  "খুলনা-২",
  "খুলনা-৩",
  "খুলনা-৪",
  "খুলনা-৫",
  "খুলনা-৬",
];

const kushtiaSeats = [
  "কুষ্টিয়া-১",
  "কুষ্টিয়া-২",
  "কুষ্টিয়া-৩",
  "কুষ্টিয়া-৪",
];

const maguraSeats = ["মাগুরা-১", "মাগুরা-২"];

const meherpurSeats = ["মেহেরপুর-১", "মেহেরপুর-২"];

const narailSeats = ["নড়াইল-১", "নড়াইল-২"];

const satkhiraSeats = [
  "সাতক্ষীরা-১",
  "সাতক্ষীরা-২",
  "সাতক্ষীরা-৩",
  "সাতক্ষীরা-৪",
];

//   sylhet district seats

const sylhetSeats = [
  "সিলেট-১",
  "সিলেট-২",
  "সিলেট-৩",
  "সিলেট-৪",
  "সিলেট-৫",
  "সিলেট-৬",
];

const maulvibazarSeats = [
  "মৌলভীবাজার-১",
  "মৌলভীবাজার-২",
  "মৌলভীবাজার-৩",
  "মৌলভীবাজার-৪",
];

const habiganjSeats = ["হবিগঞ্জ-১", "হবিগঞ্জ-২", "হবিগঞ্জ-৩", "হবিগঞ্জ-৪"];

const sunamganjSeats = [
  "সুনামগঞ্জ-১",
  "সুনামগঞ্জ-২",
  "সুনামগঞ্জ-৩",
  "সুনামগঞ্জ-৪",
  "সুনামগঞ্জ-৫",
];

//   rangpur district seats
const panchagarhSeats = ["পঞ্চগড়-১", "পঞ্চগড়-২"];

const dinajpurSeats = [
  "দিনাজপুর-১",
  "দিনাজপুর-২",
  "দিনাজপুর-৩",
  "দিনাজপুর-৪",
  "দিনাজপুর-৫",
  "দিনাজপুর-৬",
];

const gaibandhaSeats = [
  "গাইবান্ধা-১",
  "গাইবান্ধা-২",
  "গাইবান্ধা-৩",
  "গাইবান্ধা-৪",
  "গাইবান্ধা-৫",
];

const kurigramSeats = [
  "কুড়িগ্রাম-১",
  "কুড়িগ্রাম-২",
  "কুড়িগ্রাম-৩",
  "কুড়িগ্রাম-৪",
];

const lalmonirhatSeats = ["লালমনিরহাট-১", "লালমনিরহাট-২", "লালমনিরহাট-৩"];

const nilphamariSeats = [
  "নীলফামারী-১",
  "নীলফামারী-২",
  "নীলফামারী-৩",
  "নীলফামারী-৪",
];

const thakurgaonSeats = ["ঠাকুরগাঁও-১", "ঠাকুরগাঁও-২", "ঠাকুরগাঁও-৩"];

const rangpurSeats = [
  "রংপুর-১",
  "রংপুর-২",
  "রংপুর-৩",
  "রংপুর-৪",
  "রংপুর-৫",
  "রংপুর-৬",
];

//   mymensingh district seats

const sherpurSeats = ["শেরপুর-১", "শেরপুর-২", "শেরপুর-৩"];

const mymensinghSeats = [
  "ময়মনসিংহ-১",
  "ময়মনসিংহ-২",
  "ময়মনসিংহ-৩",
  "ময়মনসিংহ-৪",
  "ময়মনসিংহ-৫",
  "ময়মনসিংহ-৬",
  "ময়মনসিংহ-৭",
  "ময়মনসিংহ-৮",
  "ময়মনসিংহ-৯",
  "ময়মনসিংহ-১০",
  "ময়মনসিংহ-১১",
];

const jamalpurSeats = [
  "জামালপুর-১",
  "জামালপুর-২",
  "জামালপুর-৩",
  "জামালপুর-৪",
  "জামালপুর-৫",
];

const netrokonaSeats = [
  "নেত্রকোনা-১",
  "নেত্রকোনা-২",
  "নেত্রকোনা-৩",
  "নেত্রকোনা-৪",
  "নেত্রকোনা-৫",
];

const placeDistrict = (distName) => {
  e_district.classList.add("active");
  e_district.innerHTML = "";
  distName.forEach((district) => {
    const option = document.createElement("option");
    option.value = district;
    option.innerText = district;
    document.querySelector("#district").appendChild(option);
  });
  e_district.options[0].disabled = true;
  e_district.options[0].selected = true;
};

function toBanglaNum(englishNum) {
  if (typeof englishNum !== "string") {
    englishNum = englishNum.toString();
  }
  return englishNum.replace(/[0-9]/g, (digit) => {
    return banglaDigits.get(Math.abs(Number(digit)));
  });
}

const getSeatLength = (distSeats) => {
  const totalSeats = distSeats.length;
  return toBanglaNum(totalSeats) + "  টি";
};

const calculateTotalSeats = (distSeats) => {
  const totalSeats = getSeatLength(distSeats);
  const e_total_seats = document.createElement("div");

  e_total_seats.classList.add("total-seats");
  e_total_seats.innerHTML = `
        <h5>বিভাগ: ${divisionName} || জেলা: ${districtName}</h5>
        <h3>মোট আসন: ${totalSeats}</h3>
        <h4 class="mt-5">আসন বিন্যাস</h4>
        <div class="line"></div>
        <ul>
          ${distSeats
            .map((seat) => `<li><a class="seat-name">${seat}</a></li>`)
            .join("")}
        </ul>`;

  e_result.innerHTML = "";
  e_result.appendChild(e_total_seats);

  const e_seat_name = document.querySelectorAll(".seat-name");
  e_seat_name.forEach((seat) => {
    seat.addEventListener("click", () => {
      e_popup.classList.add("active");
      e_overlay.classList.add("active");

      e_popup_img.src = "";

      // bogura seats
      if (seat.innerText === "বগুড়া-১") {
        e_popup_img.src = "https://i.ibb.co/5c2qqcZ/Bogra-1.jpg";
      } else if (seat.innerText === "বগুড়া-২") {
        e_popup_img.src = "https://i.ibb.co/rtXyMzW/Bogra-2.jpg";
      } else if (seat.innerText === "বগুড়া-৩") {
        e_popup_img.src = "https://i.ibb.co/kQx3TQg/Bogra-3.jpg";
      } else if (seat.innerText === "বগুড়া-৪") {
        e_popup_img.src = "https://i.ibb.co/bbYkXBm/Bogra-4.jpg";
      } else if (seat.innerText === "বগুড়া-৫") {
        e_popup_img.src = "https://i.ibb.co/djMsR9f/Bogra-5.jpg";
      } else if (seat.innerText === "বগুড়া-৬") {
        e_popup_img.src = "https://i.ibb.co/9Y2bT7V/Bogra-6.jpg";
      } else if (seat.innerText === "বগুড়া-৭") {
        e_popup_img.src = "https://i.ibb.co/86tJSQY/Bogra-7.jpg";
      }

      // chapai seats
      else if (seat.innerText === "চাঁপাইনবাবগঞ্জ-১") {
        e_popup_img.src = "https://i.ibb.co/DK35qvT/Chapai-1.jpg";
      } else if (seat.innerText === "চাঁপাইনবাবগঞ্জ-২") {
        e_popup_img.src = "https://i.ibb.co/6gLMgJc/Chapai-2.jpg";
      } else if (seat.innerText === "চাঁপাইনবাবগঞ্জ-৩") {
        e_popup_img.src = "https://i.ibb.co/MZQ95Xt/Chapai-3.jpg";
      }

      // dinajpur seats
      else if (seat.innerText === "দিনাজপুর-১") {
        e_popup_img.src = "https://i.ibb.co/7bL0TDd/Dinajpur-1.jpg";
      } else if (seat.innerText === "দিনাজপুর-২") {
        e_popup_img.src = "https://i.ibb.co/QcM3GcF/Dinajpur-2.jpg";
      } else if (seat.innerText === "দিনাজপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/31Cchrs/Dinajpur-3.jpg";
      } else if (seat.innerText === "দিনাজপুর-৪") {
        e_popup_img.src = "https://i.ibb.co/Jd0mL9h/Dinajpur-4.jpg";
      } else if (seat.innerText === "দিনাজপুর-৫") {
        e_popup_img.src = "https://i.ibb.co/SVCFLTC/Dinajpur-5.jpg";
      } else if (seat.innerText === "দিনাজপুর-৬") {
        e_popup_img.src = "https://i.ibb.co/h2VNJT8/Dinajpur-6.jpg";
      }

      // gaibandha seats
      else if (seat.innerText === "গাইবান্ধা-১") {
        e_popup_img.src = "https://i.ibb.co/MGbgWLx/Gaibandha-1.jpg";
      } else if (seat.innerText === "গাইবান্ধা-২") {
        e_popup_img.src = "https://i.ibb.co/MnT6H6x/Gaibandha-2.jpg";
      } else if (seat.innerText === "গাইবান্ধা-৩") {
        e_popup_img.src = "https://i.ibb.co/r3fHQrK/Gaibandha-3.jpg";
      } else if (seat.innerText === "গাইবান্ধা-৪") {
        e_popup_img.src = "https://i.ibb.co/ryQXH8c/Gaibandha-4.jpg";
      } else if (seat.innerText === "গাইবান্ধা-৫") {
        e_popup_img.src = "https://i.ibb.co/thYCZs0/Gaibandha-5.jpg";
      }

      // jaipurhat seats
      else if (seat.innerText === "জয়পুরহাট-১") {
        e_popup_img.src = "https://i.ibb.co/xLxXyKz/Jaypurhat-1.jpg";
      } else if (seat.innerText === "জয়পুরহাট-২") {
        e_popup_img.src = "https://i.ibb.co/ZxKGMFm/Jaypurhat-2.jpg";
      }

      // kurigram seats
      else if (seat.innerText === "কুড়িগ্রাম-১") {
        e_popup_img.src = "https://i.ibb.co/yYpx6jX/Kurigram-1.jpg";
      } else if (seat.innerText === "কুড়িগ্রাম-২") {
        e_popup_img.src = "https://i.ibb.co/Ry285zy/Kurigram-2.jpg";
      } else if (seat.innerText === "কুড়িগ্রাম-৩") {
        e_popup_img.src = "https://i.ibb.co/PN60mhH/Kurigram-3.jpg";
      } else if (seat.innerText === "কুড়িগ্রাম-৪") {
        e_popup_img.src = "https://i.ibb.co/FB1gzDt/Kurigram-4.jpg";
      }

      // lalmonirhat seats
      else if (seat.innerText === "লালমনিরহাট-১") {
        e_popup_img.src = "https://i.ibb.co/2Ys3ZfK/lalmonirhat-1.jpg";
      } else if (seat.innerText === "লালমনিরহাট-২") {
        e_popup_img.src = "https://i.ibb.co/kc3M7rx/lalmonirhat-2.jpg";
      } else if (seat.innerText === "লালমনিরহাট-৩") {
        e_popup_img.src = "https://i.ibb.co/NNXCgcj/lalmonirhat-3.jpg";
      }

      // natore seats
      else if (seat.innerText === "নাটোর-১") {
        e_popup_img.src = "https://i.ibb.co/Jv9hYKS/Nator-1.jpg";
      } else if (seat.innerText === "নাটোর-২") {
        e_popup_img.src = "https://i.ibb.co/pdz0HQt/Nator-2.jpg";
      } else if (seat.innerText === "নাটোর-৩") {
        e_popup_img.src = "https://i.ibb.co/zxCFRm1/Nator-3.jpg";
      } else if (seat.innerText === "নাটোর-৪") {
        e_popup_img.src = "https://i.ibb.co/rk9kGxs/Nator-4.jpg";
      }

      // nilphamari seats
      else if (seat.innerText === "নীলফামারী-১") {
        e_popup_img.src = "https://i.ibb.co/28dkVHb/Nilphamari-1.jpg";
      } else if (seat.innerText === "নীলফামারী-২") {
        e_popup_img.src = "https://i.ibb.co/vdrkZr2/Nilphamari-2.jpg";
      } else if (seat.innerText === "নীলফামারী-৩") {
        e_popup_img.src = "https://i.ibb.co/g7tQNpx/Nilphamari-3.jpg";
      } else if (seat.innerText === "নীলফামারী-৪") {
        e_popup_img.src = "https://i.ibb.co/0cPSdM4/Nilphamari-4.jpg";
      }

      // naogaon seats
      else if (seat.innerText === "নওগাঁ-১") {
        e_popup_img.src = "https://i.ibb.co/YLVrSmQ/Nowgao-1.jpg";
      } else if (seat.innerText === "নওগাঁ-২") {
        e_popup_img.src = "https://i.ibb.co/TRttqDR/Postponed.jpg";
      } else if (seat.innerText === "নওগাঁ-৩") {
        e_popup_img.src = "https://i.ibb.co/RCksqvB/Nowgao-3.jpg";
      } else if (seat.innerText === "নওগাঁ-৪") {
        e_popup_img.src = "https://i.ibb.co/qC0Scn0/Nowgao-4.jpg";
      } else if (seat.innerText === "নওগাঁ-৫") {
        e_popup_img.src = "https://i.ibb.co/0fLH3Qx/Nowgao-5.jpg";
      } else if (seat.innerText === "নওগাঁ-৬") {
        e_popup_img.src = "https://i.ibb.co/r49nMny/Nowgao-6.jpg";
      }

      // panchagar seats
      else if (seat.innerText === "পঞ্চগড়-১") {
        e_popup_img.src = "https://i.ibb.co/txGS1rz/Panchagar-1.jpg";
      } else if (seat.innerText === "পঞ্চগড়-২") {
        e_popup_img.src = "https://i.ibb.co/1rL4xFc/Panchagar-2.jpg";
      }

      // rajshahi seats
      else if (seat.innerText === "রাজশাহী-১") {
        e_popup_img.src = "https://i.ibb.co/mHD8zLT/Rajshahi-1.jpg";
      } else if (seat.innerText === "রাজশাহী-২") {
        e_popup_img.src = "https://i.ibb.co/zRM8CyB/Rajshahi-2.jpg";
      } else if (seat.innerText === "রাজশাহী-৩") {
        e_popup_img.src = "https://i.ibb.co/f9GdFv0/Rajshahi-3.jpg";
      } else if (seat.innerText === "রাজশাহী-৪") {
        e_popup_img.src = "https://i.ibb.co/TTPYTyL/Rajshahi-4.jpg";
      } else if (seat.innerText === "রাজশাহী-৫") {
        e_popup_img.src = "https://i.ibb.co/n6tQ3vk/Rajshahi-5.jpg";
      } else if (seat.innerText === "রাজশাহী-৬") {
        e_popup_img.src = "https://i.ibb.co/WDqDdpV/Rajshahi-6.jpg";
      }

      // rangpur seats
      else if (seat.innerText === "রংপুর-১") {
        e_popup_img.src = "https://i.ibb.co/jZ161sp/rangpur-1.jpg";
      } else if (seat.innerText === "রংপুর-২") {
        e_popup_img.src = "https://i.ibb.co/CVn8FKS/rangpur-2.jpg";
      } else if (seat.innerText === "রংপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/7jdz5xK/rangpur-3.jpg";
      } else if (seat.innerText === "রংপুর-৪") {
        e_popup_img.src = "https://i.ibb.co/Vg7hNRx/rangpur-4.jpg";
      } else if (seat.innerText === "রংপুর-৫") {
        e_popup_img.src = "https://i.ibb.co/mR3tq91/rangpur-5.jpg";
      } else if (seat.innerText === "রংপুর-৬") {
        e_popup_img.src = "https://i.ibb.co/ZxLhvsB/rangpur-6.jpg";
      }

      // thakurgaon seats
      else if (seat.innerText === "ঠাকুরগাঁও-১") {
        e_popup_img.src = "https://i.ibb.co/84GFnsW/Thakurgao-1.jpg";
      } else if (seat.innerText === "ঠাকুরগাঁও-২") {
        e_popup_img.src = "https://i.ibb.co/jvMvsVB/Thakurgao-2.jpg";
      } else if (seat.innerText === "ঠাকুরগাঁও-৩") {
        e_popup_img.src = "https://i.ibb.co/pXnJTSP/Thakurgao-34.jpg";
      }

      // bagerhat seats
      else if (seat.innerText === "বাগেরহাট-১") {
        e_popup_img.src = "https://i.ibb.co/QQzjHgH/Bagerhat-1.jpg";
      } else if (seat.innerText === "বাগেরহাট-২") {
        e_popup_img.src = "https://i.ibb.co/z5tRBfd/Bagerhat-2.jpg";
      } else if (seat.innerText === "বাগেরহাট-৩") {
        e_popup_img.src = "https://i.ibb.co/6rmS8w4/Bagerhat-3.jpg";
      } else if (seat.innerText === "বাগেরহাট-৪") {
        e_popup_img.src = "https://i.ibb.co/M5c0XPG/Bagerhat-4.jpg";
      }

      // bandarban
      else if (seat.innerText === "বান্দরবান") {
        e_popup_img.src = "https://i.ibb.co/3vmSFzC/Bandarban.jpg";
      }

      // barisal seats
      else if (seat.innerText === "বরিশাল-১") {
        e_popup_img.src = "https://i.ibb.co/VLmwhVx/Barishal-1.jpg";
      } else if (seat.innerText === "বরিশাল-২") {
        e_popup_img.src = "https://i.ibb.co/mbWJbRC/Barishal-2.jpg";
      } else if (seat.innerText === "বরিশাল-৩") {
        e_popup_img.src = "https://i.ibb.co/bHhK5b7/Barishal-3.jpg";
      } else if (seat.innerText === "বরিশাল-৪") {
        e_popup_img.src = "https://i.ibb.co/g4wpxqx/Barishal-4.jpg";
      } else if (seat.innerText === "বরিশাল-৫") {
        e_popup_img.src = "https://i.ibb.co/Y2PTn65/Barishal-5.jpg";
      } else if (seat.innerText === "বরিশাল-৬") {
        e_popup_img.src = "https://i.ibb.co/BfjLq1D/Barishal-6.jpg";
      }

      // barguna seats
      else if (seat.innerText === "বরগুনা-১") {
        e_popup_img.src = "https://i.ibb.co/dDy3Vz3/Borguna-1.jpg";
      } else if (seat.innerText === "বরগুনা-২") {
        e_popup_img.src = "https://i.ibb.co/mShMttg/Borguna-2.jpg";
      }

      // chattagram seats
      else if (seat.innerText === "চট্টগ্রাম-১") {
        e_popup_img.src = "https://i.ibb.co/xDdVW6k/Chattagram-1.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-২") {
        e_popup_img.src = "https://i.ibb.co/tsszk4g/Chattagram-2.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৩") {
        e_popup_img.src = "https://i.ibb.co/6m72Zw3/Chattagram-3.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৪") {
        e_popup_img.src = "https://i.ibb.co/CBrYgZ7/Chattagram-4.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৫") {
        e_popup_img.src = "https://i.ibb.co/zfdhZpm/Chattagram-5.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৬") {
        e_popup_img.src = "https://i.ibb.co/Qr9k0Jr/Chattagram-6.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৭") {
        e_popup_img.src = "https://i.ibb.co/7yYBLKV/Chattagram-7.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৮") {
        e_popup_img.src = "https://i.ibb.co/t3rX4Yb/Chattagram-8.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৯") {
        e_popup_img.src = "https://i.ibb.co/nkz4kW7/Chattagram-9.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১০") {
        e_popup_img.src = "https://i.ibb.co/27VXNpn/Chattagram-10.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১১") {
        e_popup_img.src = "https://i.ibb.co/YbVpFkw/Chattagram-11.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১২") {
        e_popup_img.src = "https://i.ibb.co/qr0SK4x/Chattagram-12.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১৩") {
        e_popup_img.src = "https://i.ibb.co/gw0RDHY/Chattagram-13.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১৪") {
        e_popup_img.src = "https://i.ibb.co/xHTsxG4/Chattagram-14.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১৫") {
        e_popup_img.src = "https://i.ibb.co/YDq7NpY/Chattagram-15.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১৬") {
        e_popup_img.src = "https://i.ibb.co/JQSvJYN/Chattagram-16.jpg";
      }

      // chuadanga seats
      else if (seat.innerText === "চুয়াডাঙ্গা-১") {
        e_popup_img.src = "https://i.ibb.co/Xth30mg/Chuadanga-1.jpg";
      } else if (seat.innerText === "চুয়াডাঙ্গা-২") {
        e_popup_img.src = "https://i.ibb.co/8XJG0Kt/Chuadanga-2.jpg";
      }

      // coxbazar seats
      else if (seat.innerText === "কক্সবাজার-১") {
        e_popup_img.src = "https://i.ibb.co/Q68KPZ0/Cox-1.jpg";
      } else if (seat.innerText === "কক্সবাজার-২") {
        e_popup_img.src = "https://i.ibb.co/6rj5VdL/Cox-2.jpg";
      } else if (seat.innerText === "কক্সবাজার-৩") {
        e_popup_img.src = "https://i.ibb.co/nk5zcv0/Cox-3.jpg";
      } else if (seat.innerText === "কক্সবাজার-৪") {
        e_popup_img.src = "https://i.ibb.co/KVF0Xyc/Cox-4.jpg";
      }

      // jessore seats
      else if (seat.innerText === "যশোর-১") {
        e_popup_img.src = "https://i.ibb.co/wLj1z72/Jessore-1.jpg";
      } else if (seat.innerText === "যশোর-২") {
        e_popup_img.src = "https://i.ibb.co/KWSH4Bk/Jessore-2.jpg";
      } else if (seat.innerText === "যশোর-৩") {
        e_popup_img.src = "https://i.ibb.co/cyzctx5/Jessore-3.jpg";
      } else if (seat.innerText === "যশোর-৪") {
        e_popup_img.src = "https://i.ibb.co/Mf2xFG9/Jessore-4.jpg";
      } else if (seat.innerText === "যশোর-৫") {
        e_popup_img.src = "https://i.ibb.co/9qTL8vS/Jessore-5.jpg";
      } else if (seat.innerText === "যশোর-৬") {
        e_popup_img.src = "https://i.ibb.co/mq3fTY7/Jessore-6.jpg";
      }

      // jhalakathi seats
      else if (seat.innerText === "ঝালকাঠি-১") {
        e_popup_img.src = "https://i.ibb.co/SB3Kt9T/Jhalkathi-1.jpg";
      } else if (seat.innerText === "ঝালকাঠি-২") {
        e_popup_img.src = "https://i.ibb.co/rxn2wzZ/Jhalkathi-2.jpg";
      }

      // jhenidah seats
      else if (seat.innerText === "ঝিনাইদহ-১") {
        e_popup_img.src = "https://i.ibb.co/880NQt5/Jhinaidah-1.jpg";
      } else if (seat.innerText === "ঝিনাইদহ-২") {
        e_popup_img.src = "https://i.ibb.co/2yjbpkZ/Jhinaidah-2.jpg";
      } else if (seat.innerText === "ঝিনাইদহ-৩") {
        e_popup_img.src = "https://i.ibb.co/Y85DCLg/Jhinaidah-3.jpg";
      } else if (seat.innerText === "ঝিনাইদহ-৪") {
        e_popup_img.src = "https://i.ibb.co/JRP880F/Jhinaidah-4.jpg";
      }

      // khagrachhari
      else if (seat.innerText === "খাগড়াছড়ি") {
        e_popup_img.src = "https://i.ibb.co/TMtv8mV/Khagrachori.jpg";
      }

      // khulna seats
      else if (seat.innerText === "খুলনা-১") {
        e_popup_img.src = "https://i.ibb.co/dJrp8G9/Khulna-1.jpg";
      } else if (seat.innerText === "খুলনা-২") {
        e_popup_img.src = "https://i.ibb.co/8NhfY9m/Khulna-2.jpg";
      } else if (seat.innerText === "খুলনা-৩") {
        e_popup_img.src = "https://i.ibb.co/fNLQNGS/Khulna-3.jpg";
      } else if (seat.innerText === "খুলনা-৪") {
        e_popup_img.src = "https://i.ibb.co/f9YxVjn/Khulna-4.jpg";
      } else if (seat.innerText === "খুলনা-৫") {
        e_popup_img.src = "https://i.ibb.co/KXhgt6g/Khulna-5.jpg";
      } else if (seat.innerText === "খুলনা-৬") {
        e_popup_img.src = "https://i.ibb.co/qxwMVyk/Khulna-6.jpg";
      }

      // kushtia seats
      else if (seat.innerText === "কুষ্টিয়া-১") {
        e_popup_img.src = "https://i.ibb.co/RBg4MPF/Kustia-1.jpg";
      } else if (seat.innerText === "কুষ্টিয়া-২") {
        e_popup_img.src = "https://i.ibb.co/pJqnnMx/Kustia-2.jpg";
      } else if (seat.innerText === "কুষ্টিয়া-৩") {
        e_popup_img.src = "https://i.ibb.co/kggXLTW/Kustia-3.jpg";
      } else if (seat.innerText === "কুষ্টিয়া-৪") {
        e_popup_img.src = "https://i.ibb.co/FXK8RQT/Kustia-4.jpg";
      }

      // magura seats
      else if (seat.innerText === "মাগুরা-১") {
        e_popup_img.src = "https://i.ibb.co/CKwy0jh/Magura-1.jpg";
      } else if (seat.innerText === "মাগুরা-২") {
        e_popup_img.src = "https://i.ibb.co/4gs2W1R/Magura-2.jpg";
      }

      // meherpur seats
      else if (seat.innerText === "মেহেরপুর-১") {
        e_popup_img.src = "https://i.ibb.co/2jyfcdP/Meherpur-1.jpg";
      } else if (seat.innerText === "মেহেরপুর-২") {
        e_popup_img.src = "https://i.ibb.co/LvJTWYk/Meherpur-2.jpg";
      }

      // narail seats
      else if (seat.innerText === "নড়াইল-১") {
        e_popup_img.src = "https://i.ibb.co/YbD4zTm/Narail-1.jpg";
      } else if (seat.innerText === "নড়াইল-২") {
        e_popup_img.src = "https://i.ibb.co/47XBGSp/Narail-2.jpg";
      }

      // pabna seats
      else if (seat.innerText === "পাবনা-১") {
        e_popup_img.src = "https://i.ibb.co/ySJtQVs/Pabna-1.jpg";
      } else if (seat.innerText === "পাবনা-২") {
        e_popup_img.src = "https://i.ibb.co/n1z4pWX/Pabna-2.jpg";
      } else if (seat.innerText === "পাবনা-৩") {
        e_popup_img.src = "https://i.ibb.co/fp7f6Lb/Pabna-3.jpg";
      } else if (seat.innerText === "পাবনা-৪") {
        e_popup_img.src = "https://i.ibb.co/zH9VVxS/Pabna-4.jpg";
      } else if (seat.innerText === "পাবনা-৫") {
        e_popup_img.src = "https://i.ibb.co/5W81zY9/Pabna-5.jpg";
      }

      // pirojpur seats
      else if (seat.innerText === "পিরোজপুর-১") {
        e_popup_img.src = "https://i.ibb.co/wymbwRL/Pirojpur-1.jpg";
      } else if (seat.innerText === "পিরোজপুর-২") {
        e_popup_img.src = "https://i.ibb.co/nBh0Ymy/Pirojpur-2.jpg";
      } else if (seat.innerText === "পিরোজপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/r6xMrKW/Pirojpur-3.jpg";
      }

      // remaining

      // patuakhali seats
      else if (seat.innerText === "পটুয়াখালী-১") {
        e_popup_img.src = "https://i.ibb.co/Rz9Zbty/Potuakhali-1.jpg";
      } else if (seat.innerText === "পটুয়াখালী-২") {
        e_popup_img.src = "https://i.ibb.co/L8f7HcN/Potuakhali-2.jpg";
      } else if (seat.innerText === "পটুয়াখালী-৩") {
        e_popup_img.src = "https://i.ibb.co/mBsL31y/Potuakhali-3.jpg";
      } else if (seat.innerText === "পটুয়াখালী-৪") {
        e_popup_img.src = "https://i.ibb.co/L50wbbW/Potuakhali-4.jpg";
      }

      // rangamati
      else if (seat.innerText === "রাঙ্গামাটি") {
        e_popup_img.src = "https://i.ibb.co/W3VCXJF/Rangamati.jpg";
      }

      // shatkhira seats
      else if (seat.innerText === "সাতক্ষীরা-১") {
        e_popup_img.src = "https://i.ibb.co/QPZvZcS/Satkhira-1.jpg";
      } else if (seat.innerText === "সাতক্ষীরা-২") {
        e_popup_img.src = "https://i.ibb.co/BgpJ9px/Satkhira-2.jpg";
      } else if (seat.innerText === "সাতক্ষীরা-৩") {
        e_popup_img.src = "https://i.ibb.co/Hdht1xv/Satkhira-3.jpg";
      } else if (seat.innerText === "সাতক্ষীরা-৪") {
        e_popup_img.src = "https://i.ibb.co/wyBVDfY/Satkhira-4.jpg";
      }

      // sirajganj seats
      else if (seat.innerText === "সিরাজগঞ্জ-১") {
        e_popup_img.src = "https://i.ibb.co/BrrCznB/Sirajganj-1.jpg";
      } else if (seat.innerText === "সিরাজগঞ্জ-২") {
        e_popup_img.src = "https://i.ibb.co/t3p2S16/Sirajganj-2.jpg";
      } else if (seat.innerText === "সিরাজগঞ্জ-৩") {
        e_popup_img.src = "https://i.ibb.co/wy3kXCT/Sirajganj-3.jpg";
      } else if (seat.innerText === "সিরাজগঞ্জ-৪") {
        e_popup_img.src = "https://i.ibb.co/Mkv2Yy0/Sirajganj-4.jpg";
      } else if (seat.innerText === "সিরাজগঞ্জ-৫") {
        e_popup_img.src = "https://i.ibb.co/c6yL7Vj/Sirajganj-5.jpg";
      } else if (seat.innerText === "সিরাজগঞ্জ-৬") {
        e_popup_img.src = "https://i.ibb.co/W5vcRTP/Sirajganj-6.jpg";
      }

      // bhola seats
      else if (seat.innerText === "ভোলা-১") {
        e_popup_img.src = "https://i.ibb.co/XC82VB9/Vola-1.jpg";
      } else if (seat.innerText === "ভোলা-২") {
        e_popup_img.src = "https://i.ibb.co/MpjDBNz/Vola-2.jpg";
      } else if (seat.innerText === "ভোলা-৩") {
        e_popup_img.src = "https://i.ibb.co/Gt3WnYW/Vola-3.jpg";
      } else if (seat.innerText === "ভোলা-৪") {
        e_popup_img.src = "https://i.ibb.co/ykD2YKt/Vola-4.jpg";
      }

      // faridpur seats
      else if (seat.innerText === "ফরিদপুর-১") {
        e_popup_img.src = "https://i.ibb.co/DfdvJdB/Faridpur-1.jpg";
      } else if (seat.innerText === "ফরিদপুর-২") {
        e_popup_img.src = "https://i.ibb.co/hCfWB5b/Faridpur-2.jpg";
      } else if (seat.innerText === "ফরিদপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/N9f0Skd/Faridpur-3.jpg";
      } else if (seat.innerText === "ফরিদপুর-৪") {
        e_popup_img.src = "https://i.ibb.co/q5sf0s2/Faridpur-4.jpg";
      }

      // gazipur seats
      else if (seat.innerText === "গাজীপুর-১") {
        e_popup_img.src = "https://i.ibb.co/hDR61cf/Gazipur-1.jpg";
      } else if (seat.innerText === "গাজীপুর-২") {
        e_popup_img.src = "https://i.ibb.co/HdrJcQV/Gazipur-2.jpg";
      } else if (seat.innerText === "গাজীপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/ZhQ2bHV/Gazipur-3.jpg";
      } else if (seat.innerText === "গাজীপুর-৪") {
        e_popup_img.src = "https://i.ibb.co/ZGd1yMS/Gazipur-4.jpg";
      } else if (seat.innerText === "গাজীপুর-৫") {
        e_popup_img.src = "https://i.ibb.co/dLXvKMn/Gazipur-5.jpg";
      }

      // gopalganj seats
      else if (seat.innerText === "গোপালগঞ্জ-১") {
        e_popup_img.src = "https://i.ibb.co/5j7wLpB/Gopalganj-1.jpg";
      } else if (seat.innerText === "গোপালগঞ্জ-২") {
        e_popup_img.src = "https://i.ibb.co/sVmtQvM/Gopalganj-2.jpg";
      } else if (seat.innerText === "গোপালগঞ্জ-৩") {
        e_popup_img.src = "https://i.ibb.co/mRpwCsk/Gopalganj-3.jpg";
      }

      // jamalpur seats
      else if (seat.innerText === "জামালপুর-১") {
        e_popup_img.src = "https://i.ibb.co/LtSkkpt/Jamalpur-1.jpg";
      } else if (seat.innerText === "জামালপুর-২") {
        e_popup_img.src = "https://i.ibb.co/4mnhDsw/Jamalpur-2.jpg";
      } else if (seat.innerText === "জামালপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/fpCJ5TL/Jamalpur-3.jpg";
      } else if (seat.innerText === "জামালপুর-৪") {
        e_popup_img.src = "https://i.ibb.co/pPBv5FM/Jamalpur-4.jpg";
      } else if (seat.innerText === "জামালপুর-৫") {
        e_popup_img.src = "https://i.ibb.co/pRKSYZH/Jamalpur-5.jpg";
      }

      // kishoreganj seats
      else if (seat.innerText === "কিশোরগঞ্জ-১") {
        e_popup_img.src = "https://i.ibb.co/DCF2SZR/Kisorganj-1.jpg";
      } else if (seat.innerText === "কিশোরগঞ্জ-২") {
        e_popup_img.src = "https://i.ibb.co/5jHnfcT/Kisorganj-2.jpg";
      } else if (seat.innerText === "কিশোরগঞ্জ-৩") {
        e_popup_img.src = "https://i.ibb.co/pxZzLmd/Kisorganj-3.jpg";
      } else if (seat.innerText === "কিশোরগঞ্জ-৪") {
        e_popup_img.src = "https://i.ibb.co/qL68vQD/Kisorganj-4.jpg";
      } else if (seat.innerText === "কিশোরগঞ্জ-৫") {
        e_popup_img.src = "https://i.ibb.co/KNPBGgT/Kisorganj-5.jpg";
      } else if (seat.innerText === "কিশোরগঞ্জ-৬") {
        e_popup_img.src = "https://i.ibb.co/hRgXxmx/Kisorganj-6.jpg";
      }

      // madaripur seats
      else if (seat.innerText === "মাদারীপুর-১") {
        e_popup_img.src = "https://i.ibb.co/TqmZV2p/Madaripur-1.jpg";
      } else if (seat.innerText === "মাদারীপুর-২") {
        e_popup_img.src = "https://i.ibb.co/5GBSR79/Madaripur-2.jpg";
      } else if (seat.innerText === "মাদারীপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/1XrdDPz/Madaripur-3.jpg";
      }

      // manikganj seats
      else if (seat.innerText === "মানিকগঞ্জ-১") {
        e_popup_img.src = "https://i.ibb.co/bL4Xrkf/Manikganj-1.jpg";
      } else if (seat.innerText === "মানিকগঞ্জ-২") {
        e_popup_img.src = "https://i.ibb.co/2FpQ6rb/Manikganj-2.jpg";
      } else if (seat.innerText === "মানিকগঞ্জ-৩") {
        e_popup_img.src = "https://i.ibb.co/JxMjcmK/Manikganj-3.jpg";
      }

      // munshiganj seats
      else if (seat.innerText === "মুন্সীগঞ্জ-১") {
        e_popup_img.src = "https://i.ibb.co/3rhtGB7/Munsiganj-1.jpg";
      } else if (seat.innerText === "মুন্সীগঞ্জ-২") {
        e_popup_img.src = "https://i.ibb.co/GthL3sP/Munsiganj-2.jpg";
      } else if (seat.innerText === "মুন্সীগঞ্জ-৩") {
        e_popup_img.src = "https://i.ibb.co/zhBfyTD/Munsiganj-3.jpg";
      }

      // mymensingh seats
      else if (seat.innerText === "ময়মনসিংহ-১") {
        e_popup_img.src = "https://i.ibb.co/wQhJ4hm/Mymnsing-1.jpg";
      } else if (seat.innerText === "ময়মনসিংহ-২") {
        e_popup_img.src = "https://i.ibb.co/BPs278g/Mymnsing-2.jpg";
      } else if (seat.innerText === "ময়মনসিংহ-৩") {
        e_popup_img.src = "https://i.ibb.co/TRttqDR/Postponed.jpg";
      } else if (seat.innerText === "ময়মনসিংহ-৪") {
        e_popup_img.src = "https://i.ibb.co/R4Mdyq0/Mymnsing-4.jpg";
      } else if (seat.innerText === "ময়মনসিংহ-৫") {
        e_popup_img.src = "https://i.ibb.co/YRqry3d/Mymnsing-5.jpg";
      } else if (seat.innerText === "ময়মনসিংহ-৬") {
        e_popup_img.src = "https://i.ibb.co/5BC4bNg/Mymnsing-6.jpg";
      } else if (seat.innerText === "ময়মনসিংহ-৭") {
        e_popup_img.src = "https://i.ibb.co/DC54xHW/Mymnsing-7.jpg";
      } else if (seat.innerText === "ময়মনসিংহ-৮") {
        e_popup_img.src = "https://i.ibb.co/KWCs04w/Mymnsing-8.jpg";
      } else if (seat.innerText === "ময়মনসিংহ-৯") {
        e_popup_img.src = "https://i.ibb.co/0tYP5Tf/Mymnsing-9.jpg";
      } else if (seat.innerText === "ময়মনসিংহ-১০") {
        e_popup_img.src = "https://i.ibb.co/n82FDtY/Mymnsing-10.jpg";
      } else if (seat.innerText === "ময়মনসিংহ-১১") {
        e_popup_img.src = "https://i.ibb.co/dKGn42v/Mymnsing-11.jpg";
      }

      // narayanganj seats
      else if (seat.innerText === "নারায়নগঞ্জ-১") {
        e_popup_img.src = "https://i.ibb.co/nRbwpkD/Narayanganj-1.jpg";
      } else if (seat.innerText === "নারায়নগঞ্জ-২") {
        e_popup_img.src = "https://i.ibb.co/ZYKQ9pF/Narayanganj-2.jpg";
      } else if (seat.innerText === "নারায়নগঞ্জ-৩") {
        e_popup_img.src = "https://i.ibb.co/vHWf0Vp/Narayanganj-3.jpg";
      } else if (seat.innerText === "নারায়নগঞ্জ-৪") {
        e_popup_img.src = "https://i.ibb.co/tzSDZsR/Narayanganj-4.jpg";
      } else if (seat.innerText === "নারায়নগঞ্জ-৫") {
        e_popup_img.src = "https://i.ibb.co/hCc2zD4/Narayanganj-5.jpg";
      }

      // narshingdi seats
      else if (seat.innerText === "নরসিংদী-১") {
        e_popup_img.src = "https://i.ibb.co/wST4C5c/Narsingdi-1.jpg";
      } else if (seat.innerText === "নরসিংদী-২") {
        e_popup_img.src = "https://i.ibb.co/LYTTcdb/Narsingdi-2.jpg";
      } else if (seat.innerText === "নরসিংদী-৩") {
        e_popup_img.src = "https://i.ibb.co/NZmkDps/Narsingdi-3.jpg";
      } else if (seat.innerText === "নরসিংদী-৪") {
        e_popup_img.src = "https://i.ibb.co/RNbkfcT/Narsingdi-4.jpg";
      } else if (seat.innerText === "নরসিংদী-৫") {
        e_popup_img.src = "https://i.ibb.co/qFFgT1G/Narsingdi-5.jpg";
      }

      // netrokona seats
      else if (seat.innerText === "নেত্রকোনা-১") {
        e_popup_img.src = "https://i.ibb.co/hW4LrJH/Netrokona-1.jpg";
      } else if (seat.innerText === "নেত্রকোনা-২") {
        e_popup_img.src = "https://i.ibb.co/JFDrGJb/Netrokona-2.jpg";
      } else if (seat.innerText === "নেত্রকোনা-৩") {
        e_popup_img.src = "https://i.ibb.co/VYND720/Netrokona-3.jpg";
      } else if (seat.innerText === "নেত্রকোনা-৪") {
        e_popup_img.src = "https://i.ibb.co/bFvkK2x/Netrokona-4.jpg";
      } else if (seat.innerText === "নেত্রকোনা-৫") {
        e_popup_img.src = "https://i.ibb.co/pjq2ykN/Netrokona-5.jpg";
      }

      // rajbari seats
      else if (seat.innerText === "রাজবাড়ী-১") {
        e_popup_img.src = "https://i.ibb.co/yNBFWcN/Rajbari-1.jpg";
      } else if (seat.innerText === "রাজবাড়ী-২") {
        e_popup_img.src = "https://i.ibb.co/zV5NRX9/Rajbari-2.jpg";
      }

      // sherpur seats
      else if (seat.innerText === "শেরপুর-১") {
        e_popup_img.src = "https://i.ibb.co/gJ8Dw9z/Sherpur-1.jpg";
      } else if (seat.innerText === "শেরপুর-২") {
        e_popup_img.src = "https://i.ibb.co/pj5wjHc/Sherpur-2.jpg";
      } else if (seat.innerText === "শেরপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/SntbdyW/Sherpur-3.jpg";
      }

      // tangail seats
      else if (seat.innerText === "টাঙ্গাইল-১") {
        e_popup_img.src = "https://i.ibb.co/31nj2f1/tangail-1.jpg";
      } else if (seat.innerText === "টাঙ্গাইল-২") {
        e_popup_img.src = "https://i.ibb.co/0Y3fb3v/tangail-2.jpg";
      } else if (seat.innerText === "টাঙ্গাইল-৩") {
        e_popup_img.src = "https://i.ibb.co/JFHFyy2/tangail-3.jpg";
      } else if (seat.innerText === "টাঙ্গাইল-৪") {
        e_popup_img.src = "https://i.ibb.co/xMbRWmS/tangail-4.jpg";
      } else if (seat.innerText === "টাঙ্গাইল-৫") {
        e_popup_img.src = "https://i.ibb.co/7tXYn7x/tangail-5.jpg";
      } else if (seat.innerText === "টাঙ্গাইল-৬") {
        e_popup_img.src = "https://i.ibb.co/NSLDmms/tangail-6.jpg";
      } else if (seat.innerText === "টাঙ্গাইল-৭") {
        e_popup_img.src = "https://i.ibb.co/bmc9YvG/tangail-7.jpg";
      } else if (seat.innerText === "টাঙ্গাইল-৮") {
        e_popup_img.src = "https://i.ibb.co/gZ9NX9t/tangail-8.jpg";
      }

      // brahmanbaria seats
      else if (seat.innerText === "ব্রাহ্মণবাড়িয়া-১") {
        e_popup_img.src = "https://i.ibb.co/0cRWPpb/Bramnbaria-1.jpg";
      } else if (seat.innerText === "ব্রাহ্মণবাড়িয়া-২") {
        e_popup_img.src = "https://i.ibb.co/g3KYPrk/Bramnbaria-2.jpg";
      } else if (seat.innerText === "ব্রাহ্মণবাড়িয়া-৩") {
        e_popup_img.src = "https://i.ibb.co/9ZRMw0x/Bramnbaria-3.jpg";
      } else if (seat.innerText === "ব্রাহ্মণবাড়িয়া-৪") {
        e_popup_img.src = "https://i.ibb.co/HVSdjvC/Bramnbaria-4.jpg";
      } else if (seat.innerText === "ব্রাহ্মণবাড়িয়া-৫") {
        e_popup_img.src = "https://i.ibb.co/3TWv64g/Bramnbaria-5.jpg";
      } else if (seat.innerText === "ব্রাহ্মণবাড়িয়া-৬") {
        e_popup_img.src = "https://i.ibb.co/59HDvvc/Bramnbaria-6.jpg";
      }

      // habiganj seats
      else if (seat.innerText === "হবিগঞ্জ-১") {
        e_popup_img.src = "https://i.ibb.co/C24HJj9/Hobiganj-1.jpg";
      } else if (seat.innerText === "হবিগঞ্জ-২") {
        e_popup_img.src = "https://i.ibb.co/Kx4kfsg/Hobiganj-2.jpg";
      } else if (seat.innerText === "হবিগঞ্জ-৩") {
        e_popup_img.src = "https://i.ibb.co/qnjJkgp/Hobiganj-3.jpg";
      } else if (seat.innerText === "হবিগঞ্জ-৪") {
        e_popup_img.src = "https://i.ibb.co/MVwmdyx/Hobiganj-4.jpg";
      }

      // moulvibazar seats
      else if (seat.innerText === "মৌলভীবাজার-১") {
        e_popup_img.src = "https://i.ibb.co/Yj1tbFG/Moulovibazar-2.jpg";
      } else if (seat.innerText === "মৌলভীবাজার-২") {
        e_popup_img.src = "https://i.ibb.co/y4xCMfQ/Moulovibazar-2.jpg";
      } else if (seat.innerText === "মৌলভীবাজার-৩") {
        e_popup_img.src = "https://i.ibb.co/hDtFrQP/Moulovibazar-3.jpg";
      } else if (seat.innerText === "মৌলভীবাজার-৪") {
        e_popup_img.src = "https://i.ibb.co/DLNctb8/Moulovibazar-4.jpg";
      }

      // shariatpur seats
      else if (seat.innerText === "শরীয়তপুর-১") {
        e_popup_img.src = "https://i.ibb.co/7Yzv5VF/Shariatpur-1.jpg";
      } else if (seat.innerText === "শরীয়তপুর-২") {
        e_popup_img.src = "https://i.ibb.co/4P60PN6/Shariatpur-2.jpg";
      } else if (seat.innerText === "শরীয়তপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/Y3yNfdM/Shariatpur-3.jpg";
      }

      // sunamganj seats
      else if (seat.innerText === "সুনামগঞ্জ-১") {
        e_popup_img.src = "https://i.ibb.co/dmGkQr7/Sunamganj-1.jpg";
      } else if (seat.innerText === "সুনামগঞ্জ-২") {
        e_popup_img.src = "https://i.ibb.co/XjwzMyd/Sunamganj-2.jpg";
      } else if (seat.innerText === "সুনামগঞ্জ-৩") {
        e_popup_img.src = "https://i.ibb.co/mybfwNB/Sunamganj-3.jpg";
      } else if (seat.innerText === "সুনামগঞ্জ-৪") {
        e_popup_img.src = "https://i.ibb.co/MkhCwMC/Sunamganj-4.jpg";
      } else if (seat.innerText === "সুনামগঞ্জ-৫") {
        e_popup_img.src = "https://i.ibb.co/2Wv4XR2/Sunamganj-5.jpg";
      }

      // sylhet seats
      else if (seat.innerText === "সিলেট-১") {
        e_popup_img.src = "https://i.ibb.co/0qgp7HK/Sylhet-1.jpg";
      } else if (seat.innerText === "সিলেট-২") {
        e_popup_img.src = "https://i.ibb.co/7nJH9th/Sylhet-2.jpg";
      } else if (seat.innerText === "সিলেট-৩") {
        e_popup_img.src = "https://i.ibb.co/Q9X0qTF/Sylhet-3.jpg";
      } else if (seat.innerText === "সিলেট-৪") {
        e_popup_img.src = "https://i.ibb.co/Df5tSxy/Sylhet-4.jpg";
      } else if (seat.innerText === "সিলেট-৫") {
        e_popup_img.src = "https://i.ibb.co/RjbrQN1/Sylhet-5.jpg";
      } else if (seat.innerText === "সিলেট-৬") {
        e_popup_img.src = "https://i.ibb.co/TLXw0d1/Sylhet-6.jpg";
      }

      // chadpur seats
      else if (seat.innerText === "চাঁদপুর-১") {
        e_popup_img.src = "https://i.ibb.co/gZmdXQL/Chadpur-1.jpg";
      } else if (seat.innerText === "চাঁদপুর-২") {
        e_popup_img.src = "https://i.ibb.co/CvQBR35/Chadpur-2.jpg";
      } else if (seat.innerText === "চাঁদপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/x66bcJd/Chadpur-3.jpg";
      } else if (seat.innerText === "চাঁদপুর-৪") {
        e_popup_img.src = "https://i.ibb.co/7bhwvdD/Chadpur-4.jpg";
      } else if (seat.innerText === "চাঁদপুর-৫") {
        e_popup_img.src = "https://i.ibb.co/QHpHfPP/Chadpur-5.jpg";
      }

      // comilla seats
      else if (seat.innerText === "কুমিল্লা-১") {
        e_popup_img.src = "https://i.ibb.co/LJkYP6z/Comilla-1.jpg";
      } else if (seat.innerText === "কুমিল্লা-২") {
        e_popup_img.src = "https://i.ibb.co/K0bymPY/Comilla-2.jpg";
      } else if (seat.innerText === "কুমিল্লা-৩") {
        e_popup_img.src = "https://i.ibb.co/VTwK8Rp/Comilla-3.jpg";
      } else if (seat.innerText === "কুমিল্লা-৪") {
        e_popup_img.src = "https://i.ibb.co/B2mWG2H/Comilla-4.jpg";
      } else if (seat.innerText === "কুমিল্লা-৫") {
        e_popup_img.src = "https://i.ibb.co/M2vyWmf/Comilla-5.jpg";
      } else if (seat.innerText === "কুমিল্লা-৬") {
        e_popup_img.src = "https://i.ibb.co/hM4KrHp/Comilla-6.jpg";
      } else if (seat.innerText === "কুমিল্লা-৭") {
        e_popup_img.src = "https://i.ibb.co/LSWSXjh/Comilla-7.jpg";
      } else if (seat.innerText === "কুমিল্লা-৮") {
        e_popup_img.src = "https://i.ibb.co/S5bYGWM/Comilla-8.jpg";
      } else if (seat.innerText === "কুমিল্লা-৯") {
        e_popup_img.src = "https://i.ibb.co/X4Q9rVN/Comilla-9.jpg";
      } else if (seat.innerText === "কুমিল্লা-১০") {
        e_popup_img.src = "https://i.ibb.co/8BgZ1S6/Comilla-10.jpg";
      } else if (seat.innerText === "কুমিল্লা-১১") {
        e_popup_img.src = "https://i.ibb.co/tQLp14m/Comilla-11.jpg";
      }

      // feni seats
      else if (seat.innerText === "ফেনী-১") {
        e_popup_img.src = "https://i.ibb.co/symrP24/Feni-1.jpg";
      } else if (seat.innerText === "ফেনী-২") {
        e_popup_img.src = "https://i.ibb.co/g6yZ0Cs/Feni-2.jpg";
      } else if (seat.innerText === "ফেনী-৩") {
        e_popup_img.src = "https://i.ibb.co/ZK47P1d/Feni-3.jpg";
      }

      // lakshmipur seats
      else if (seat.innerText === "লক্ষ্মীপুর-১") {
        e_popup_img.src = "https://i.ibb.co/87vgNr9/LAksmipur-1.jpg";
      } else if (seat.innerText === "লক্ষ্মীপুর-২") {
        e_popup_img.src = "https://i.ibb.co/7CLvs44/LAksmipur-2.jpg";
      } else if (seat.innerText === "লক্ষ্মীপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/4m9D9ff/LAksmipur-3.jpg";
      } else if (seat.innerText === "লক্ষ্মীপুর-৪") {
        e_popup_img.src = "https://i.ibb.co/N3yH3QH/LAksmipur-4.jpg";
      }

      // noakhali seats
      else if (seat.innerText === "নোয়াখালী-১") {
        e_popup_img.src = "https://i.ibb.co/k32s4x7/Noakhali-1.jpg";
      } else if (seat.innerText === "নোয়াখালী-২") {
        e_popup_img.src = "https://i.ibb.co/K07qhh4/Noakhali-2.jpg";
      } else if (seat.innerText === "নোয়াখালী-৩") {
        e_popup_img.src = "https://i.ibb.co/1bS1x6Y/Noakhali-3.jpg";
      } else if (seat.innerText === "নোয়াখালী-৪") {
        e_popup_img.src = "https://i.ibb.co/KqZyYZ2/Noakhali-4.jpg";
      } else if (seat.innerText === "নোয়াখালী-৫") {
        e_popup_img.src = "https://i.ibb.co/q1MHvwZ/Noakhali-5.jpg";
      } else if (seat.innerText === "নোয়াখালী-৬") {
        e_popup_img.src = "https://i.ibb.co/2k7SZZ4/Noakhali-6.jpg";
      }

      // dhaka seats
      else if (seat.innerText === "ঢাকা-১") {
        e_popup_img.src = "https://i.ibb.co/DkrGWPp/Dhaka-1.jpg";
      } else if (seat.innerText === "ঢাকা-২") {
        e_popup_img.src = "https://i.ibb.co/vBz3DsJ/Dhaka-2.jpg";
      } else if (seat.innerText === "ঢাকা-৩") {
        e_popup_img.src = "https://i.ibb.co/zbkXLXr/Dhaka-3.jpg";
      } else if (seat.innerText === "ঢাকা-৪") {
        e_popup_img.src = "https://i.ibb.co/gTzddW9/Dhaka-4.jpg";
      } else if (seat.innerText === "ঢাকা-৫") {
        e_popup_img.src = "https://i.ibb.co/X4WsZqK/Dhaka-5.jpg";
      } else if (seat.innerText === "ঢাকা-৬") {
        e_popup_img.src = "https://i.ibb.co/LPZWCC5/Dhaka-6.jpg";
      } else if (seat.innerText === "ঢাকা-৭") {
        e_popup_img.src = "https://i.ibb.co/pxDCWtG/Dhaka-7.jpg";
      } else if (seat.innerText === "ঢাকা-৮") {
        e_popup_img.src = "https://i.ibb.co/hHxSwrL/Dhaka-8.jpg";
      } else if (seat.innerText === "ঢাকা-৯") {
        e_popup_img.src = "https://i.ibb.co/D4jpwnt/Dhaka-9.jpg";
      } else if (seat.innerText === "ঢাকা-১০") {
        e_popup_img.src = "https://i.ibb.co/YZM0QH7/Dhaka-10.jpg";
      } else if (seat.innerText === "ঢাকা-১১") {
        e_popup_img.src = "https://i.ibb.co/Ch0624Z/Dhaka-11.jpg";
      } else if (seat.innerText === "ঢাকা-১২") {
        e_popup_img.src = "https://i.ibb.co/sPnmhyc/Dhaka-12.jpg";
      } else if (seat.innerText === "ঢাকা-১৩") {
        e_popup_img.src = "https://i.ibb.co/zfQWS2F/Dhaka-13.jpg";
      } else if (seat.innerText === "ঢাকা-১৪") {
        e_popup_img.src = "https://i.ibb.co/KL2zTDz/Dhaka-14.jpg";
      } else if (seat.innerText === "ঢাকা-১৫") {
        e_popup_img.src = "https://i.ibb.co/2FqVbch/Dhaka-15.jpg";
      } else if (seat.innerText === "ঢাকা-১৬") {
        e_popup_img.src = "https://i.ibb.co/Y80hxg7/Dhaka-16.jpg";
      } else if (seat.innerText === "ঢাকা-১৭") {
        e_popup_img.src = "https://i.ibb.co/Ykn3sTh/Dhaka-17.jpg";
      } else if (seat.innerText === "ঢাকা-১৮") {
        e_popup_img.src = "https://i.ibb.co/MZv15Ls/Dhaka-18.jpg";
      } else if (seat.innerText === "ঢাকা-১৯") {
        e_popup_img.src = "https://i.ibb.co/CJgm4bx/Dhaka-19.jpg";
      } else if (seat.innerText === "ঢাকা-২০") {
        e_popup_img.src = "https://i.ibb.co/vh3ZkFC/Dhaka-20.jpg";
      }
    });
  });
};

e_overlay.addEventListener("click", () => {
  e_popup_img.src = "";
  e_popup.classList.remove("active");
  e_overlay.classList.remove("active");
});

e_division.addEventListener("change", (e) => {
  const selectedDivision = e.target.value;
  divisionName = selectedDivision;
  if (selectedDivision === "ঢাকা") {
    placeDistrict(dhakaDistricts);
  } else if (selectedDivision === "চট্টগ্রাম") {
    placeDistrict(chittagongDistrict);
  } else if (selectedDivision === "রাজশাহী") {
    placeDistrict(rajshahiDistrict);
  } else if (selectedDivision === "বরিশাল") {
    placeDistrict(barishalDistrict);
  } else if (selectedDivision === "খুলনা") {
    placeDistrict(khulnaDistrict);
  } else if (selectedDivision === "সিলেট") {
    placeDistrict(sylhetDistrict);
  } else if (selectedDivision === "রংপুর") {
    placeDistrict(rangpurDistrict);
  } else if (selectedDivision === "ময়মনসিংহ") {
    placeDistrict(mymensinghDistrict);
  } else {
    e_district.classList.remove("active");
  }
});
e_district.addEventListener("change", (e) => {
  const selectedDistrict = e.target.value;
  districtName = selectedDistrict;
  e_result.classList.add("active");

  if (selectedDistrict === "ঢাকা") {
    calculateTotalSeats(dhakaSeats);
  } else if (selectedDistrict === "গাজীপুর") {
    calculateTotalSeats(gazipurSeats);
  } else if (selectedDistrict === "কিশোরগঞ্জ") {
    calculateTotalSeats(kishorganjSeats);
  } else if (selectedDistrict === "মানিকগঞ্জ") {
    calculateTotalSeats(manikganjSeats);
  } else if (selectedDistrict === "মুন্সীগঞ্জ") {
    calculateTotalSeats(munshiganjSeats);
  } else if (selectedDistrict === "নারায়নগঞ্জ") {
    calculateTotalSeats(naraonganjSeats);
  } else if (selectedDistrict === "নরসিংদী") {
    calculateTotalSeats(norshingdiSeats);
  } else if (selectedDistrict === "টাঙ্গাইল") {
    calculateTotalSeats(tangailSeats);
  } else if (selectedDistrict === "ফরিদপুর") {
    calculateTotalSeats(faridpurSeats);
  } else if (selectedDistrict === "গোপালগঞ্জ") {
    calculateTotalSeats(gopalganjSeats);
  } else if (selectedDistrict === "মাদারীপুর") {
    calculateTotalSeats(madaripurSeats);
  } else if (selectedDistrict === "রাজবাড়ী") {
    calculateTotalSeats(rajbariSeats);
  } else if (selectedDistrict === "শরীয়তপুর") {
    calculateTotalSeats(sharishabariSeats);
  } else if (selectedDistrict === "ব্রাহ্মণবাড়িয়া") {
    calculateTotalSeats(brahmanbariaSeats);
  } else if (selectedDistrict === "কুমিল্লা") {
    calculateTotalSeats(comillaSeats);
  } else if (selectedDistrict === "চাঁদপুর") {
    calculateTotalSeats(chandpurSeats);
  } else if (selectedDistrict === "লক্ষ্মীপুর") {
    calculateTotalSeats(lakshmipurSeats);
  } else if (selectedDistrict === "নোয়াখালী") {
    calculateTotalSeats(noakhaliSeats);
  } else if (selectedDistrict === "ফেনী") {
    calculateTotalSeats(feniSeats);
  } else if (selectedDistrict === "খাগড়াছড়ি") {
    calculateTotalSeats(khagrachariSeats);
  } else if (selectedDistrict === "রাঙ্গামাটি") {
    calculateTotalSeats(rangamatiSeats);
  } else if (selectedDistrict === "বান্দরবান") {
    calculateTotalSeats(bandarbanSeats);
  } else if (selectedDistrict === "চট্টগ্রাম") {
    calculateTotalSeats(chittagongSeats);
  } else if (selectedDistrict === "কক্সবাজার") {
    calculateTotalSeats(coxsbazarSeats);
  } else if (selectedDistrict === "বগুড়া") {
    calculateTotalSeats(boguraSeats);
  } else if (selectedDistrict === "জয়পুরহাট") {
    calculateTotalSeats(joypurhatSeats);
  } else if (selectedDistrict === "নওগাঁ") {
    calculateTotalSeats(naogaonSeats);
  } else if (selectedDistrict === "নাটোর") {
    calculateTotalSeats(natoreSeats);
  } else if (selectedDistrict === "পাবনা") {
    calculateTotalSeats(pabnaSeats);
  } else if (selectedDistrict === "রাজশাহী") {
    calculateTotalSeats(rajshahiSeats);
  } else if (selectedDistrict === "সিরাজগঞ্জ") {
    calculateTotalSeats(sirajganjSeats);
  } else if (selectedDistrict === "চাঁপাইনবাবগঞ্জ") {
    calculateTotalSeats(chapainawabganjSeats);
  } else if (selectedDistrict === "বরিশাল") {
    calculateTotalSeats(barishalSeats);
  } else if (selectedDistrict === "ভোলা") {
    calculateTotalSeats(bholaSeats);
  } else if (selectedDistrict === "বরগুনা") {
    calculateTotalSeats(bargunaSeats);
  } else if (selectedDistrict === "ঝালকাঠি") {
    calculateTotalSeats(jhalokathiSeats);
  } else if (selectedDistrict === "পটুয়াখালী") {
    calculateTotalSeats(patuakhaliSeats);
  } else if (selectedDistrict === "পিরোজপুর") {
    calculateTotalSeats(pirojpurSeats);
  } else if (selectedDistrict === "বাগেরহাট") {
    calculateTotalSeats(bagerhatSeats);
  } else if (selectedDistrict === "চুয়াডাঙ্গা") {
    calculateTotalSeats(chuadangaSeats);
  } else if (selectedDistrict === "যশোর") {
    calculateTotalSeats(jessoreSeats);
  } else if (selectedDistrict === "ঝিনাইদহ") {
    calculateTotalSeats(jhenaidahSeats);
  } else if (selectedDistrict === "খুলনা") {
    calculateTotalSeats(khulnaSeats);
  } else if (selectedDistrict === "কুষ্টিয়া") {
    calculateTotalSeats(kushtiaSeats);
  } else if (selectedDistrict === "মাগুরা") {
    calculateTotalSeats(maguraSeats);
  } else if (selectedDistrict === "মেহেরপুর") {
    calculateTotalSeats(meherpurSeats);
  } else if (selectedDistrict === "নড়াইল") {
    calculateTotalSeats(narailSeats);
  } else if (selectedDistrict === "সাতক্ষীরা") {
    calculateTotalSeats(satkhiraSeats);
  } else if (selectedDistrict === "সিলেট") {
    calculateTotalSeats(sylhetSeats);
  } else if (selectedDistrict === "মৌলভীবাজার") {
    calculateTotalSeats(maulvibazarSeats);
  } else if (selectedDistrict === "হবিগঞ্জ") {
    calculateTotalSeats(habiganjSeats);
  } else if (selectedDistrict === "সুনামগঞ্জ") {
    calculateTotalSeats(sunamganjSeats);
  } else if (selectedDistrict === "পঞ্চগড়") {
    calculateTotalSeats(panchagarhSeats);
  } else if (selectedDistrict === "দিনাজপুর") {
    calculateTotalSeats(dinajpurSeats);
  } else if (selectedDistrict === "গাইবান্ধা") {
    calculateTotalSeats(gaibandhaSeats);
  } else if (selectedDistrict === "কুড়িগ্রাম") {
    calculateTotalSeats(kurigramSeats);
  } else if (selectedDistrict === "লালমনিরহাট") {
    calculateTotalSeats(lalmonirhatSeats);
  } else if (selectedDistrict === "নীলফামারী") {
    calculateTotalSeats(nilphamariSeats);
  } else if (selectedDistrict === "ঠাকুরগাঁও") {
    calculateTotalSeats(thakurgaonSeats);
  } else if (selectedDistrict === "রংপুর") {
    calculateTotalSeats(rangpurSeats);
  } else if (selectedDistrict === "শেরপুর") {
    calculateTotalSeats(sherpurSeats);
  } else if (selectedDistrict === "ময়মনসিংহ") {
    calculateTotalSeats(mymensinghSeats);
  } else if (selectedDistrict === "জামালপুর") {
    calculateTotalSeats(jamalpurSeats);
  } else if (selectedDistrict === "নেত্রকোনা") {
    calculateTotalSeats(netrokonaSeats);
  } else {
    e_result.innerHTML = "দুঃখিত, কোনো তথ্য পাওয়া যায় নি";
  }
});
