// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = 4001;
let isWeekday = "Friday";
let hasBoughtProductFromITCategory = "No Product From IT Category";
let hasAttendedDiscountEvent = "Attended Discount Evenet 2";
let isPlatinum = "Gold";

let hasPromotion = lastMonthPaidMoreThan4000 && isWeekday && hasBoughtProductFromITCategory && !hasAttendedDiscountEvent || !isPlatinum;

console.log(hasPromotion);
