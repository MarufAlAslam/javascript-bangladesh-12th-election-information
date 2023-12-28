const e_division = document.querySelector("#division");
const e_district = document.querySelector("#district");
const e_result = document.querySelector("#result");
const e_overlay = document.querySelector("#e-overlay");
const e_popup_img = document.querySelector("#e-popup-img");
const e_popup = document.querySelector("#e-popup");

let divisionName = "";
let districtName = "";

const BENGALI_DIGITS = new Map([
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
  // distLabel.classList.add("active");
  distName.forEach((district) => {
    const option = document.createElement("option");
    option.value = district;
    option.innerText = district;
    document.querySelector("#district").appendChild(option);
  });
  e_district.options[0].disabled = true;
  e_district.options[0].selected = true;
};

// Converts English digits to Bengali digits.
function toBengali(english_number) {
  if (typeof english_number !== "string") {
    english_number = english_number.toString();
  }

  return english_number.replace(/[0-9]/g, (digit) => {
    // Prevent traversal crash due to negative value of "digit".
    return BENGALI_DIGITS.get(Math.abs(Number(digit)));
  });
}

const getSeatLength = (distSeats) => {
  const totalSeats = distSeats.length;
  return toBengali(totalSeats) + "  টি";
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
        e_popup_img.src = "https://i.ibb.co/q0mcN8k/Bogra-1.jpg";
      } else if (seat.innerText === "বগুড়া-২") {
        e_popup_img.src = "https://i.ibb.co/dDtHVMb/Bogra-2.jpg";
      } else if (seat.innerText === "বগুড়া-৩") {
        e_popup_img.src = "https://i.ibb.co/cYKtWFP/Bogra-3.jpg";
      } else if (seat.innerText === "বগুড়া-৪") {
        e_popup_img.src = "https://i.ibb.co/3TjCbth/Bogra-4.jpg";
      } else if (seat.innerText === "বগুড়া-৫") {
        e_popup_img.src = "https://i.ibb.co/jbmGvZy/Bogra-5.jpg";
      } else if (seat.innerText === "বগুড়া-৬") {
        e_popup_img.src = "https://i.ibb.co/0Qr9BvG/Bogra-6.jpg";
      } else if (seat.innerText === "বগুড়া-৭") {
        e_popup_img.src = "https://i.ibb.co/qxgTVyw/Bogra-7.jpg";
      }

      // chapai seats
      else if (seat.innerText === "চাঁপাইনবাবগঞ্জ-১") {
        e_popup_img.src = "https://i.ibb.co/XbFVMXk/Chapai-1.jpg";
      } else if (seat.innerText === "চাঁপাইনবাবগঞ্জ-২") {
        e_popup_img.src = "https://i.ibb.co/KL6w4Cq/Chapai-2.jpg";
      } else if (seat.innerText === "চাঁপাইনবাবগঞ্জ-৩") {
        e_popup_img.src = "https://i.ibb.co/VN6qxX2/Chapai-3.jpg";
      }

      // dinajpur seats
      else if (seat.innerText === "দিনাজপুর-১") {
        e_popup_img.src = "https://i.ibb.co/PCMmBPs/Dinajpur-1.jpg";
      } else if (seat.innerText === "দিনাজপুর-২") {
        e_popup_img.src = "https://i.ibb.co/mCGSGqc/Dinajpur-2.jpg";
      } else if (seat.innerText === "দিনাজপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/D502MmH/Dinajpur-3.jpg";
      } else if (seat.innerText === "দিনাজপুর-৪") {
        e_popup_img.src = "https://i.ibb.co/HBtTFNS/Dinajpur-4.jpg";
      } else if (seat.innerText === "দিনাজপুর-৫") {
        e_popup_img.src = "https://i.ibb.co/DPBfLT4/Dinajpur-5.jpg";
      } else if (seat.innerText === "দিনাজপুর-৬") {
        e_popup_img.src = "https://i.ibb.co/9HvXqrK/Dinajpur-6.jpg";
      }

      // gaibandha seats
      else if (seat.innerText === "গাইবান্ধা-১") {
        e_popup_img.src = "https://i.ibb.co/RjCP9Jd/Gaibandha-1.jpg";
      } else if (seat.innerText === "গাইবান্ধা-২") {
        e_popup_img.src = "https://i.ibb.co/825BJDV/Gaibandha-2.jpg";
      } else if (seat.innerText === "গাইবান্ধা-৩") {
        e_popup_img.src = "https://i.ibb.co/xzjGSsS/Gaibandha-3.jpg";
      } else if (seat.innerText === "গাইবান্ধা-৪") {
        e_popup_img.src = "https://i.ibb.co/3BbSWp8/Gaibandha-4.jpg";
      } else if (seat.innerText === "গাইবান্ধা-৫") {
        e_popup_img.src = "https://i.ibb.co/02Y5HNq/Gaibandha-5.jpg";
      }

      // jaipurhat seats
      else if (seat.innerText === "জয়পুরহাট-১") {
        e_popup_img.src = "https://i.ibb.co/7gZCR73/Jaypurhat-1.jpg";
      } else if (seat.innerText === "জয়পুরহাট-২") {
        e_popup_img.src = "https://i.ibb.co/DDVMsWg/Jaypurhat-2.jpg";
      }

      // kurigram seats
      else if (seat.innerText === "কুড়িগ্রাম-১") {
        e_popup_img.src = "https://i.ibb.co/jW7vQLg/Kurigram-1.jpg";
      } else if (seat.innerText === "কুড়িগ্রাম-২") {
        e_popup_img.src = "https://i.ibb.co/98Sm2V3/Kurigram-2.jpg";
      } else if (seat.innerText === "কুড়িগ্রাম-৩") {
        e_popup_img.src = "https://i.ibb.co/18GB4Sj/Kurigram-3.jpg";
      } else if (seat.innerText === "কুড়িগ্রাম-৪") {
        e_popup_img.src = "https://i.ibb.co/LpBv6n4/Kurigram-4.jpg";
      }

      // lalmonirhat seats
      else if (seat.innerText === "লালমনিরহাট-১") {
        e_popup_img.src = "https://i.ibb.co/jgkWgx4/Lalmonirhat-1.jpg";
      } else if (seat.innerText === "লালমনিরহাট-২") {
        e_popup_img.src = "https://i.ibb.co/Ry7GWtL/Lalmonirhat-2.jpg";
      } else if (seat.innerText === "লালমনিরহাট-৩") {
        e_popup_img.src = "https://i.ibb.co/yYb2YLG/Lalmonirhat-3.jpg";
      }

      // natore seats
      else if (seat.innerText === "নাটোর-১") {
        e_popup_img.src = "https://i.ibb.co/1X6dQ0W/Nator-1.jpg";
      } else if (seat.innerText === "নাটোর-২") {
        e_popup_img.src = "https://i.ibb.co/khkqLNc/Nator-2.jpg";
      } else if (seat.innerText === "নাটোর-৩") {
        e_popup_img.src = "https://i.ibb.co/XC83RhX/Nator-3.jpg";
      } else if (seat.innerText === "নাটোর-৪") {
        e_popup_img.src = "https://i.ibb.co/gFP5rv4/Nator-4.jpg";
      }

      // nilphamari seats
      else if (seat.innerText === "নীলফামারী-১") {
        e_popup_img.src = "https://i.ibb.co/yBHNKm2/Nilphamari-1.jpg";
      } else if (seat.innerText === "নীলফামারী-২") {
        e_popup_img.src = "https://i.ibb.co/4msnPLd/Nilphamari-2.jpg";
      } else if (seat.innerText === "নীলফামারী-৩") {
        e_popup_img.src = "https://i.ibb.co/88RpJVx/Nilphamari-3.jpg";
      } else if (seat.innerText === "নীলফামারী-৪") {
        e_popup_img.src = "https://i.ibb.co/98fwxk0/Nilphamari-4.jpg";
      }

      // naogaon seats
      else if (seat.innerText === "নওগাঁ-১") {
        e_popup_img.src = "https://i.ibb.co/s6BBrhq/Nowgao-1.jpg";
      } else if (seat.innerText === "নওগাঁ-২") {
        e_popup_img.src = "https://i.ibb.co/jykYQtc/Nowgao-2.jpg";
      } else if (seat.innerText === "নওগাঁ-৩") {
        e_popup_img.src = "https://i.ibb.co/qNtWdTN/Nowgao-3.jpg";
      } else if (seat.innerText === "নওগাঁ-৪") {
        e_popup_img.src = "https://i.ibb.co/ngw27Lh/Nowgao-4.jpg";
      } else if (seat.innerText === "নওগাঁ-৫") {
        e_popup_img.src = "https://i.ibb.co/ynkfZt5/Nowgao-5.jpg";
      } else if (seat.innerText === "নওগাঁ-৬") {
        e_popup_img.src = "https://i.ibb.co/VVfhL7q/Nowgao-6.jpg";
      }

      // panchagar seats
      else if (seat.innerText === "পঞ্চগড়-১") {
        e_popup_img.src = "https://i.ibb.co/5M1873k/Panchagar-1.jpg";
      } else if (seat.innerText === "পঞ্চগড়-২") {
        e_popup_img.src = "https://i.ibb.co/NKCWrmq/Panchagar-2.jpg";
      }

      // rajshahi seats
      else if (seat.innerText === "রাজশাহী-১") {
        e_popup_img.src = "https://i.ibb.co/z5f2YFx/Rajshahi-1.jpg";
      } else if (seat.innerText === "রাজশাহী-২") {
        e_popup_img.src = "https://i.ibb.co/Kbph7Z7/Rajshahi-2.jpg";
      } else if (seat.innerText === "রাজশাহী-৩") {
        e_popup_img.src = "https://i.ibb.co/0qwfcbh/Rajshahi-3.jpg";
      } else if (seat.innerText === "রাজশাহী-৪") {
        e_popup_img.src = "https://i.ibb.co/HnpFP9r/Rajshahi-4.jpg";
      } else if (seat.innerText === "রাজশাহী-৫") {
        e_popup_img.src = "https://i.ibb.co/yfqrhHs/Rajshahi-5.jpg";
      } else if (seat.innerText === "রাজশাহী-৬") {
        e_popup_img.src = "https://i.ibb.co/wy7LJZn/Rajshahi-6.jpg";
      }

      // rangpur seats
      else if (seat.innerText === "রংপুর-১") {
        e_popup_img.src = "https://i.ibb.co/ZL7pdgw/Rangpur-1.jpg";
      } else if (seat.innerText === "রংপুর-২") {
        e_popup_img.src = "https://i.ibb.co/yyKCWyy/Rangpur-2.jpg";
      } else if (seat.innerText === "রংপুর-৩") {
        e_popup_img.src = "https://i.ibb.co/5RLYGTp/Rangpur-3.jpg";
      } else if (seat.innerText === "রংপুর-৪") {
        e_popup_img.src = "https://i.ibb.co/FDfp6Ty/Rangpur-4.jpg";
      } else if (seat.innerText === "রংপুর-৫") {
        e_popup_img.src = "https://i.ibb.co/r6c1qw0/Rangpur-5.jpg";
      } else if (seat.innerText === "রংপুর-৬") {
        e_popup_img.src = "https://i.ibb.co/FbfX1tD/Rangpur-6.jpg";
      }

      // thakurgaon seats
      else if (seat.innerText === "ঠাকুরগাঁও-১") {
        e_popup_img.src = "https://i.ibb.co/8xDS46G/Thakurgao-1.jpg";
      } else if (seat.innerText === "ঠাকুরগাঁও-২") {
        e_popup_img.src = "https://i.ibb.co/JzgQ7yS/Thakurgao-2.jpg";
      } else if (seat.innerText === "ঠাকুরগাঁও-৩") {
        e_popup_img.src = "https://i.ibb.co/NTcgQNc/Thakurgao-3.jpg";
      }

      // bagerhat seats
      else if (seat.innerText === "বাগেরহাট-১") {
        e_popup_img.src = "https://i.ibb.co/wrYXg4k/Bagerhat-1.jpg";
      } else if (seat.innerText === "বাগেরহাট-২") {
        e_popup_img.src = "https://i.ibb.co/BTMQ8NG/Bagerhat-2.jpg";
      } else if (seat.innerText === "বাগেরহাট-৩") {
        e_popup_img.src = "https://i.ibb.co/m6TMmVw/Bagerhat-3.jpg";
      } else if (seat.innerText === "বাগেরহাট-৪") {
        e_popup_img.src = "https://i.ibb.co/JQJwvXK/Bagerhat-4.jpg";
      }

      // bandarban
      else if (seat.innerText === "বান্দরবান") {
        e_popup_img.src = "https://i.ibb.co/GVzQ4xd/Bandarban.jpg";
      }

      // barisal seats
      else if (seat.innerText === "বরিশাল-১") {
        e_popup_img.src = "https://i.ibb.co/HPHt6Zq/Barishal-1.jpg";
      } else if (seat.innerText === "বরিশাল-২") {
        e_popup_img.src = "https://i.ibb.co/wN4F7kz/Barishal-2.jpg";
      } else if (seat.innerText === "বরিশাল-৩") {
        e_popup_img.src = "https://i.ibb.co/pbHpqG1/Barishal-3.jpg";
      } else if (seat.innerText === "বরিশাল-৪") {
        e_popup_img.src = "https://i.ibb.co/Sxmr1c8/Barishal-4.jpg";
      } else if (seat.innerText === "বরিশাল-৫") {
        e_popup_img.src = "https://i.ibb.co/WVpXKX0/Barishal-5.jpg";
      } else if (seat.innerText === "বরিশাল-৬") {
        e_popup_img.src = "https://i.ibb.co/mvbvW3M/Barishal-6.jpg";
      }

      // barguna seats
      else if (seat.innerText === "বরগুনা-১") {
        e_popup_img.src = "https://i.ibb.co/s3sZNy7/Borguna-1.jpg";
      } else if (seat.innerText === "বরগুনা-২") {
        e_popup_img.src = "https://i.ibb.co/DLRhX20/Borguna-2.jpg";
      }

      // chattagram seats
      else if (seat.innerText === "চট্টগ্রাম-১") {
        e_popup_img.src = "https://i.ibb.co/Dky5Mc1/Chattagram-1.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-২") {
        e_popup_img.src = "https://i.ibb.co/W29pDJt/Chattagram-2.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৩") {
        e_popup_img.src = "https://i.ibb.co/tcTQZP9/Chattagram-3.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৪") {
        e_popup_img.src = "https://i.ibb.co/NKFNSy1/Chattagram-4.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৫") {
        e_popup_img.src = "https://i.ibb.co/qJYDnJz/Chattagram-5.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৬") {
        e_popup_img.src = "https://i.ibb.co/djgwWkk/Chattagram-6.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৭") {
        e_popup_img.src = "https://i.ibb.co/TMgmFzf/Chattagram-7.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৮") {
        e_popup_img.src = "https://i.ibb.co/7JHJjdw/Chattagram-8.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-৯") {
        e_popup_img.src = "https://i.ibb.co/ypmfZTy/Chattagram-9.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১০") {
        e_popup_img.src = "https://i.ibb.co/m4J1Xv9/Chattagram-10.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১১") {
        e_popup_img.src = "https://i.ibb.co/cgZSJRH/Chattagram-11.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১২") {
        e_popup_img.src = "https://i.ibb.co/2jCxDvT/Chattagram-12.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১৩") {
        e_popup_img.src = "https://i.ibb.co/vYXjFjp/Chattagram-13.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১৪") {
        e_popup_img.src = "https://i.ibb.co/251hW8w/Chattagram-14.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১৫") {
        e_popup_img.src = "https://i.ibb.co/hZ55BtQ/Chattagram-15.jpg";
      } else if (seat.innerText === "চট্টগ্রাম-১৬") {
        e_popup_img.src = "https://i.ibb.co/QdqXRb1/Chattagram-16.jpg";
      }

      // chuadanga seats
      else if (seat.innerText === "চুয়াডাঙ্গা-১") {
        e_popup_img.src = "https://i.ibb.co/bHPKLbH/Chuadanga-1.jpg";
      } else if (seat.innerText === "চুয়াডাঙ্গা-২") {
        e_popup_img.src = "https://i.ibb.co/G7SnzTM/Chuadanga-2.jpg";
      }

      // coxbazar seats
      else if (seat.innerText === "কক্সবাজার-১") {
        e_popup_img.src = "https://i.ibb.co/W2sMr96/Coxbazar-1.jpg";
      } else if (seat.innerText === "কক্সবাজার-২") {
        e_popup_img.src = "https://i.ibb.co/LrpwkxB/Coxbazar-2.jpg";
      } else if (seat.innerText === "কক্সবাজার-৩") {
        e_popup_img.src = "https://i.ibb.co/61BcNxT/Coxbazar-3.jpg";
      } else if (seat.innerText === "কক্সবাজার-৪") {
        e_popup_img.src = "https://i.ibb.co/yRt2zXy/Coxbazar-4.jpg";
      }

      // jessore seats
      else if (seat.innerText === "যশোর-১") {
        e_popup_img.src = "https://i.ibb.co/nc0M57B/Jessor-1.jpg";
      } else if (seat.innerText === "যশোর-২") {
        e_popup_img.src = "https://i.ibb.co/YcgymZb/Jessor-2.jpg";
      } else if (seat.innerText === "যশোর-৩") {
        e_popup_img.src = "https://i.ibb.co/cyPcgHR/Jessor-3.jpg";
      } else if (seat.innerText === "যশোর-৪") {
        e_popup_img.src = "https://i.ibb.co/c3PdzC7/Jessor-4.jpg";
      } else if (seat.innerText === "যশোর-৫") {
        e_popup_img.src = "https://i.ibb.co/g9njjFL/Jessor-5.jpg";
      } else if (seat.innerText === "যশোর-৬") {
        e_popup_img.src = "https://i.ibb.co/kKdSVJy/Jessor-6.jpg";
      }

      // jhalakathi seats
      else if (seat.innerText === "ঝালকাঠি-১") {
        e_popup_img.src = "https://i.ibb.co/41W6xqs/Jhalkathi-1.jpg";
      } else if (seat.innerText === "ঝালকাঠি-২") {
        e_popup_img.src = "https://i.ibb.co/PrgSDQq/Jhalkathi-2.jpg";
      }

      // jhenidah seats
      else if (seat.innerText === "ঝিনাইদহ-১") {
        e_popup_img.src = "https://i.ibb.co/QnLjkzx/Jhinaidah-1.jpg";
      } else if (seat.innerText === "ঝিনাইদহ-২") {
        e_popup_img.src = "https://i.ibb.co/zFMnxZt/Jhinaidah-2.jpg";
      } else if (seat.innerText === "ঝিনাইদহ-৩") {
        e_popup_img.src = "https://i.ibb.co/jVXdXTq/Jhinaidah-3.jpg";
      } else if (seat.innerText === "ঝিনাইদহ-৪") {
        e_popup_img.src = "https://i.ibb.co/zJh0MWK/Jhinaidah-4.jpg";
      }

      // khagrachhari
      else if (seat.innerText === "খাগড়াছড়ি") {
        e_popup_img.src = "https://i.ibb.co/p3XRQTd/Khagrachori-1.jpg";
      }

      // khulna seats
      else if (seat.innerText === "খুলনা-১") {
        e_popup_img.src = "https://i.ibb.co/1QYZwFS/Khulna-1.jpg";
      } else if (seat.innerText === "খুলনা-২") {
        e_popup_img.src = "https://i.ibb.co/fk5X365/Khulna-2.jpg";
      } else if (seat.innerText === "খুলনা-৩") {
        e_popup_img.src = "https://i.ibb.co/McQNkzp/Khulna-3.jpg";
      } else if (seat.innerText === "খুলনা-৪") {
        e_popup_img.src = "https://i.ibb.co/f18fhPC/Khulna-4.jpg";
      } else if (seat.innerText === "খুলনা-৫") {
        e_popup_img.src = "https://i.ibb.co/2YhBCkn/Khulna-5.jpg";
      } else if (seat.innerText === "খুলনা-৬") {
        e_popup_img.src = "https://i.ibb.co/6cKvGH6/Khulna-6.jpg";
      }

      // kushtia seats
      else if (seat.innerText === "কুষ্টিয়া-১") {
        e_popup_img.src = "https://i.ibb.co/VJR16Y1/Kustia-1.jpg";
      } else if (seat.innerText === "কুষ্টিয়া-২") {
        e_popup_img.src = "https://i.ibb.co/XzkXzYv/Kustia-2.jpg";
      } else if (seat.innerText === "কুষ্টিয়া-৩") {
        e_popup_img.src = "https://i.ibb.co/bdxRLVj/Kustia-3.jpg";
      } else if (seat.innerText === "কুষ্টিয়া-৪") {
        e_popup_img.src = "https://i.ibb.co/hmKT1tq/Kustia-4.jpg";
      }

      // magura seats
      else if (seat.innerText === "মাগুরা-১") {
        e_popup_img.src = "https://i.ibb.co/2NNQWC4/Magura-1.jpg";
      } else if (seat.innerText === "মাগুরা-২") {
        e_popup_img.src = "https://i.ibb.co/kJhPzRM/Magura-2.jpg";
      }

      // meherpur seats
      else if (seat.innerText === "মেহেরপুর-১") {
        e_popup_img.src = "https://i.ibb.co/6rPsvXF/Meherpur-1.jpg";
      } else if (seat.innerText === "মেহেরপুর-২") {
        e_popup_img.src = "https://i.ibb.co/wQcYV2D/Meherpur-2.jpg";
      }

      // narail seats
      else if (seat.innerText === "নড়াইল-১") {
        e_popup_img.src = "https://i.ibb.co/1qng42Y/Narail-1.jpg";
      } else if (seat.innerText === "নড়াইল-২") {
        e_popup_img.src = "https://i.ibb.co/8MPdjj3/Narail-2.jpg";
      }

      // pabna seats
      else if (seat.innerText === "পাবনা-১") {
        e_popup_img.src = "https://i.ibb.co/Y0LwSNK/Pabna-1.jpg";
      } else if (seat.innerText === "পাবনা-২") {
        e_popup_img.src = "https://i.ibb.co/kgL8spj/Pabna-2.jpg";
      } else if (seat.innerText === "পাবনা-৩") {
        e_popup_img.src = "https://i.ibb.co/Kb4Jm0H/Pabna-3.jpg";
      } else if (seat.innerText === "পাবনা-৪") {
        e_popup_img.src = "https://i.ibb.co/GPF2fkx/Pabna-4.jpg";
      } else if (seat.innerText === "পাবনা-৫") {
        e_popup_img.src = "https://i.ibb.co/G9gDmGx/Pabna-5.jpg";
      }

      // pirojpur seats
      else if (seat.innerText === "পিরোজপুর-১") {
        e_popup_img.src = "https://i.ibb.co/WV5rzBP/Pirojpur-1.jpg";
      }

      // remaining

      // patuakhali seats
      else if (seat.innerText === "পটুয়াখালী-১") {
        e_popup_img.src = "https://i.ibb.co/wzsnsZ9/Potuakhali-1.jpg";
      } else if (seat.innerText === "পটুয়াখালী-২") {
        e_popup_img.src = "https://i.ibb.co/zhcZfwn/Potuakhali-2.jpg";
      } else if (seat.innerText === "পটুয়াখালী-৩") {
        e_popup_img.src = "https://i.ibb.co/SNgZPjL/Potuakhali-3.jpg";
      } else if (seat.innerText === "পটুয়াখালী-৪") {
        e_popup_img.src = "https://i.ibb.co/pPj3X4D/Potuakhali-4.jpg";
      }

      // rangamati
      else if (seat.innerText === "রাঙ্গামাটি") {
        e_popup_img.src = "https://i.ibb.co/crQQ0G2/Rangamati.jpg";
      }

      // shatkhira seats
      else if (seat.innerText === "সাতক্ষীরা-১") {
        e_popup_img.src = "https://i.ibb.co/mCxN11z/Satkhira-1.jpg";
      } else if (seat.innerText === "সাতক্ষীরা-২") {
        e_popup_img.src = "https://i.ibb.co/Vxrdfww/Satkhira-2.jpg";
      } else if (seat.innerText === "সাতক্ষীরা-৩") {
        e_popup_img.src = "https://i.ibb.co/mv4z4Mj/Satkhira-3.jpg";
      } else if (seat.innerText === "সাতক্ষীরা-৪") {
        e_popup_img.src = "https://i.ibb.co/PFMSLYM/Satkhira-4.jpg";
      }

      // sirajganj seats
      else if (seat.innerText === "সিরাজগঞ্জ-১") {
        e_popup_img.src = "https://i.ibb.co/Pm6WcTb/Sirajganj-1.jpg";
      } else if (seat.innerText === "সিরাজগঞ্জ-২") {
        e_popup_img.src = "https://i.ibb.co/h2YWM52/Sirajganj-2.jpg";
      } else if (seat.innerText === "সিরাজগঞ্জ-৩") {
        e_popup_img.src = "https://i.ibb.co/XVgzWmj/Sirajganj-3.jpg";
      } else if (seat.innerText === "সিরাজগঞ্জ-৪") {
        e_popup_img.src = "https://i.ibb.co/8jygwwS/Sirajganj-4.jpg";
      } else if (seat.innerText === "সিরাজগঞ্জ-৫") {
        e_popup_img.src = "https://i.ibb.co/sFcZH8n/Sirajganj-5.jpg";
      } else if (seat.innerText === "সিরাজগঞ্জ-৬") {
        e_popup_img.src = "https://i.ibb.co/6t5mxRZ/Sirajganj-6.jpg";
      }

      // bhola seats
      else if (seat.innerText === "ভোলা-১") {
        e_popup_img.src = "https://i.ibb.co/9YQrXs3/Vola-1.jpg";
      } else if (seat.innerText === "ভোলা-২") {
        e_popup_img.src = "https://i.ibb.co/WzSp3S3/Vola-2.jpg";
      } else if (seat.innerText === "ভোলা-৩") {
        e_popup_img.src = "https://i.ibb.co/Kz2Gjy8/Vola-3.jpg";
      } else if (seat.innerText === "ভোলা-৪") {
        e_popup_img.src = "https://i.ibb.co/fvWVpNb/Vola-4.jpg";
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
    e_result.innerHTML = "No data found";
  }
});
