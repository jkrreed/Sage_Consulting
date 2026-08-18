// LIRA projection model — tables + engine. Rates approximate; see advisor assumptions panel.
// Individual inventory: [gender M/F, age, health P/S, discount, DB per $5,000,000 premium]
export const DB_TABLE = [["M",55,"P",0.59204,19600000],["M",55,"S",0.57192,18230000],["M",56,"P",0.594463,18450000],["M",56,"S",0.576974,17220000],["M",57,"P",0.59514,17380000],["M",57,"S",0.580198,16270000],["M",58,"P",0.592827,16360000],["M",58,"S",0.579538,15350000],["M",59,"P",0.590337,15420000],["M",59,"S",0.578715,14500000],["M",60,"P",0.594419,14750000],["M",60,"S",0.588466,14010000],["M",61,"P",0.603665,14120000],["M",61,"S",0.603052,13540000],["M",62,"P",0.611427,13520000],["M",62,"S",0.615907,13080000],["M",63,"P",0.617547,12930000],["M",63,"S",0.627239,12620000],["M",64,"P",0.619401,12350000],["M",64,"S",0.633001,12130000],["M",65,"P",0.604024,11450000],["M",65,"S",0.616853,11230000],["M",66,"P",0.599495,10620000],["M",66,"S",0.61126,10400000],["M",67,"P",0.594113,9850000],["M",67,"S",0.604367,9620000],["M",68,"P",0.587076,9140000],["M",68,"S",0.596542,8910000],["M",69,"P",0.580344,8490000],["M",69,"S",0.588214,8250000],["M",70,"P",0.574171,7910000],["M",70,"S",0.581723,7680000],["M",71,"P",0.570169,7420000],["M",71,"S",0.577759,7200000],["M",72,"P",0.563936,6960000],["M",72,"S",0.571823,6760000],["M",73,"P",0.556182,6550000],["M",73,"S",0.563238,6360000],["M",74,"P",0.546898,6170000],["M",74,"S",0.553718,5990000],["M",75,"P",0.618118,6760000],["M",75,"S",0.613818,6420000],["F",55,"P",0.653662,20830000],["F",55,"S",0.627984,19320000],["F",56,"P",0.652219,19600000],["F",56,"S",0.629671,18230000],["F",57,"P",0.64879,18450000],["F",57,"S",0.629146,17220000],["F",58,"P",0.64333,17380000],["F",58,"S",0.62616,16270000],["F",59,"P",0.636752,16360000],["F",59,"S",0.62163,15350000],["F",60,"P",0.629713,15420000],["F",60,"S",0.616348,14500000],["F",61,"P",0.638438,14750000],["F",61,"S",0.630793,14010000],["F",62,"P",0.645798,14120000],["F",62,"S",0.643776,13540000],["F",63,"P",0.652722,13520000],["F",63,"S",0.656341,13080000],["F",64,"P",0.657004,12930000],["F",64,"S",0.666077,12620000],["F",65,"P",0.660234,12350000],["F",65,"S",0.67376,12130000],["F",66,"P",0.665564,11450000],["F",66,"S",0.678201,11230000],["F",67,"P",0.66778,10620000],["F",67,"S",0.679861,10400000],["F",68,"P",0.666941,9850000],["F",68,"S",0.677453,9620000],["F",69,"P",0.664259,9140000],["F",69,"S",0.674294,8910000],["F",70,"P",0.660296,8490000],["F",70,"S",0.668609,8250000],["F",71,"P",0.655771,7910000],["F",71,"S",0.663714,7680000],["F",72,"P",0.651819,7420000],["F",72,"S",0.65938,7200000],["F",73,"P",0.645235,6960000],["F",73,"S",0.652844,6760000],["F",74,"P",0.639326,6550000],["F",74,"S",0.646038,6360000],["F",75,"P",0.632542,6170000],["F",75,"S",0.638815,5990000]];
// Survivorship inventory (priced male/female): [primary age, secondary age, primary health, secondary health, discount, DB per $5,000,000]
export const SURV_TABLE = [[55,55,"P","P",0.677945,34200000],[55,55,"P","S",0.669118,28700000],[55,55,"S","P",0.670723,29100000],[55,55,"S","S",0.665361,25800000],[55,60,"P","P",0.676467,29200000],[55,60,"P","S",0.668832,25600000],[55,60,"S","P",0.66793,24900000],[55,60,"S","S",0.664077,22300000],[55,65,"P","P",0.675721,25300000],[55,65,"P","S",0.668813,23600000],[55,65,"S","P",0.666122,21300000],[55,65,"S","S",0.662281,19800000],[55,70,"P","P",0.672827,22800000],[55,70,"P","S",0.669183,21700000],[55,70,"S","P",0.663008,18700000],[55,70,"S","S",0.661513,17800000],[55,75,"P","P",0.671038,21100000],[55,75,"P","S",0.668684,20600000],[55,75,"S","P",0.661915,16600000],[55,75,"S","S",0.661045,16300000],[55,80,"P","P",0.668912,20300000],[55,80,"P","S",0.666341,19900000],[55,80,"S","P",0.66009,15800000],[55,80,"S","S",0.658321,15600000],[60,55,"P","P",0.674125,30000000],[60,55,"P","S",0.666418,25400000],[60,55,"S","P",0.668875,26400000],[60,55,"S","S",0.663895,22900000],[60,60,"P","P",0.676703,26100000],[60,60,"P","S",0.668888,22800000],[60,60,"S","P",0.669277,22500000],[60,60,"S","S",0.664346,19600000],[60,65,"P","P",0.681056,22100000],[60,65,"P","S",0.674623,20400000],[60,65,"S","P",0.66971,18900000],[60,65,"S","S",0.66369,17000000],[60,70,"P","P",0.681188,19600000],[60,70,"P","S",0.679003,18400000],[60,70,"S","P",0.669806,16500000],[60,70,"S","S",0.665741,14900000],[60,75,"P","P",0.68182,17400000],[60,75,"P","S",0.676097,17100000],[60,75,"S","P",0.666532,14200000],[60,75,"S","S",0.66436,13500000],[60,80,"P","P",0.675984,16500000],[60,80,"P","S",0.674035,16200000],[60,80,"S","P",0.664004,13000000],[60,80,"S","S",0.663631,12400000],[65,55,"P","P",0.673045,27200000],[65,55,"P","S",0.664851,23200000],[65,55,"S","P",0.667924,24900000],[65,55,"S","S",0.660895,21300000],[65,60,"P","P",0.678959,23000000],[65,60,"P","S",0.672507,20000000],[65,60,"S","P",0.670598,20900000],[65,60,"S","S",0.665006,17700000],[65,65,"P","P",0.681407,19000000],[65,65,"P","S",0.674949,17000000],[65,65,"S","P",0.672218,16800000],[65,65,"S","S",0.665306,14500000],[65,70,"P","P",0.686744,16300000],[65,70,"P","S",0.678195,14600000],[65,70,"S","P",0.673914,14100000],[65,70,"S","S",0.66773,12100000],[65,75,"P","P",0.693119,14300000],[65,75,"P","S",0.680197,13400000],[65,75,"S","P",0.673911,11900000],[65,75,"S","S",0.669574,10700000],[65,80,"P","P",0.687243,13100000],[65,80,"P","S",0.674638,12400000],[65,80,"S","P",0.670971,10700000],[65,80,"S","S",0.667675,9700000],[70,55,"P","P",0.672951,25200000],[70,55,"P","S",0.663061,21100000],[70,55,"S","P",0.668594,23500000],[70,55,"S","S",0.659755,19800000],[70,60,"P","P",0.680529,21100000],[70,60,"P","S",0.673386,18000000],[70,60,"S","P",0.672482,19700000],[70,60,"S","S",0.665016,16200000],[70,65,"P","P",0.684623,16800000],[70,65,"P","S",0.674088,14500000],[70,65,"S","P",0.6756,15200000],[70,65,"S","S",0.666791,12600000],[70,70,"P","P",0.684623,16800000],[70,70,"P","S",0.682465,12600000],[70,70,"S","P",0.68163,12800000],[70,70,"S","S",0.671811,10400000],[70,75,"P","P",0.698814,14900000],[70,75,"P","S",0.683018,11300000],[70,75,"S","P",0.684458,10400000],[70,75,"S","S",0.674817,8900000],[70,80,"P","P",0.716937,12500000],[70,80,"P","S",0.677211,10000000],[70,80,"S","P",0.673308,9100000],[70,80,"S","S",0.672561,7800000],[75,55,"P","P",0.656041,8300000],[75,55,"P","S",0.659211,7100000],[75,55,"S","P",0.668101,22700000],[75,55,"S","S",0.665528,11700000],[75,60,"P","P",0.67023,24000000],[75,60,"P","S",0.661088,19700000],[75,60,"S","P",0.672435,18800000],[75,60,"S","S",0.661981,15200000],[75,65,"P","P",0.679194,19600000],[75,65,"P","S",0.668622,16200000],[75,65,"S","P",0.676851,14600000],[75,65,"S","S",0.665528,11700000],[75,70,"P","P",0.69343,15500000],[75,70,"P","S",0.672498,12900000],[75,70,"S","P",0.687968,12300000],[75,70,"S","S",0.67018,9500000],[75,75,"P","P",0.71764,13200000],[75,75,"P","S",0.676795,10700000],[75,75,"S","P",0.674588,9100000],[75,75,"S","S",0.672969,7600000],[75,80,"P","P",0.69085,10000000],[75,80,"P","S",0.675443,8600000],[75,80,"S","P",0.653029,7500000],[75,80,"S","S",0.663545,6300000],[80,55,"P","P",0.632299,7300000],[80,55,"P","S",0.650003,5900000],[80,55,"S","P",0.666724,22200000],[80,55,"S","S",0.657901,18300000],[80,60,"P","P",0.668331,23400000],[80,60,"P","S",0.657561,19200000],[80,60,"S","P",0.667759,18300000],[80,60,"S","S",0.659355,14500000],[80,65,"P","P",0.67284,19000000],[80,65,"P","S",0.664069,15400000],[80,65,"S","P",0.672031,13900000],[80,65,"S","S",0.663878,10900000],[80,70,"P","P",0.683931,14700000],[80,70,"P","S",0.668126,11900000],[80,70,"S","P",0.679291,11400000],[80,70,"S","S",0.668846,8600000],[80,75,"P","P",0.696943,12200000],[80,75,"P","S",0.670881,9500000],[80,75,"S","P",0.657039,7900000],[80,75,"S","S",0.666014,6500000],[80,80,"P","P",0.660719,8600000],[80,80,"P","S",0.662259,7200000],[80,80,"S","P",0.638244,6500000],[80,80,"S","S",0.65517,5300000]];
export function lookupIndividual(gender, age, health) {
  const row = DB_TABLE.find(r => r[0] === gender && r[1] === age && r[2] === health);
  return row ? { disc: row[3], db5m: row[4] } : null;
}
// Bilinear interpolation across the 5-year survivorship age grid (55-80)
export function lookupSurvivorship(ageP, ageS, hP, hS) {
  const clamp = (a) => Math.min(80, Math.max(55, a));
  const aP = clamp(ageP), aS = clamp(ageS);
  const g = (a) => [Math.min(75, Math.floor(a / 5) * 5), Math.min(80, Math.floor(a / 5) * 5 + 5)];
  const [p0, p1] = g(aP), [s0, s1] = g(aS);
  const cell = (p, s) => SURV_TABLE.find(r => r[0] === p && r[1] === s && r[2] === hP && r[3] === hS);
  const c00 = cell(p0, s0), c10 = cell(p1, s0), c01 = cell(p0, s1), c11 = cell(p1, s1);
  if (!c00 || !c10 || !c01 || !c11) return null;
  const tp = (aP - p0) / 5, ts = (aS - s0) / 5;
  const mix = (i) => (c00[i] * (1 - tp) + c10[i] * tp) * (1 - ts) + (c01[i] * (1 - tp) + c11[i] * tp) * ts;
  return { disc: mix(4), db5m: mix(5) };
}
// SSA period life table, remaining life expectancy (years), ages 55-80
const LE_M = {55:24.4,56:23.6,57:22.8,58:22.0,59:21.3,60:20.5,61:19.8,62:19.0,63:18.3,64:17.6,65:16.9,66:16.2,67:15.5,68:14.8,69:14.1,70:13.5,71:12.8,72:12.2,73:11.6,74:11.0,75:10.5,76:10.0,77:9.5,78:9.0,79:8.5,80:8.1};
const LE_F = {55:27.9,56:27.1,57:26.2,58:25.4,59:24.5,60:23.7,61:22.9,62:22.1,63:21.3,64:20.5,65:19.7,66:18.9,67:18.1,68:17.4,69:16.6,70:15.9,71:15.1,72:14.4,73:13.7,74:13.0,75:12.3,76:11.7,77:11.0,78:10.4,79:9.8,80:9.2};
export function lifeExpectancyYears(gender, age) {
  const t = gender === 'M' ? LE_M : LE_F;
  return t[Math.min(80, Math.max(55, Math.round(age)))] ?? 15;
}
// IRS Uniform Lifetime Table divisors (2022+)
const ULT = {73:26.5,74:25.5,75:24.6,76:23.7,77:22.9,78:22.0,79:21.1,80:20.2,81:19.4,82:18.5,83:17.7,84:16.8,85:16.0,86:15.2,87:14.4,88:13.7,89:12.9,90:12.2,91:11.5,92:10.8,93:10.1,94:9.5,95:8.9,96:8.4,97:7.8,98:7.3,99:6.8,100:6.4,101:6.0,102:5.6,103:5.2,104:4.9,105:4.6};
export function rmdDivisor(age) { return ULT[Math.min(105, age)] ?? null; }
export function rmdStartAge(birthYear) { return birthYear >= 1960 ? 75 : 73; }
// Top marginal state income tax rates (approx., 2026)
export const STATE_RATES = {AL:5.0,AK:0,AZ:2.5,AR:3.9,CA:13.3,CO:4.4,CT:6.99,DE:6.6,DC:10.75,FL:0,GA:5.19,HI:11.0,ID:5.695,IL:4.95,IN:3.0,IA:3.8,KS:5.58,KY:4.0,LA:3.0,ME:7.15,MD:5.75,MA:9.0,MI:4.25,MN:9.85,MS:4.4,MO:4.7,MT:5.9,NE:5.2,NV:0,NH:0,NJ:10.75,NM:5.9,NY:10.9,NC:4.25,ND:2.5,OH:3.5,OK:4.75,OR:9.9,PA:3.07,RI:5.99,SC:6.2,SD:0,TN:0,TX:0,UT:4.55,VT:8.75,VA:5.75,WA:0,WV:4.82,WI:7.65,WY:0};
export const STATE_NAMES = {AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',DE:'Delaware',DC:'District of Columbia',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming'};
export const FED_TOP_RATE = 0.37;
export const FED_ESTATE_EXEMPTION = 15000000; // 2026, per person
export const FED_ESTATE_RATE = 0.40;

// Project an IRA forward: growth, RMDs (net of client tax) into a side fund.
// Returns a per-year trace with every sub-calculation exposed.
function runIRA(start, years, ownerAgeNow, startRMD, r, clientRate) {
  let bal = start, side = 0, totalRMD = 0, totalRmdTax = 0;
  const rows = [];
  for (let i = 1; i <= years; i++) {
    const a = ownerAgeNow + i;
    const begin = bal;
    const growth = bal * r;
    bal = begin + growth;
    const afterGrowth = bal;
    const sideBegin = side;
    const sideGrowth = side * r;
    side = sideBegin + sideGrowth;
    let divisor = null, rmd = 0, rmdTax = 0, rmdNet = 0;
    if (a >= startRMD) {
      divisor = rmdDivisor(a);
      rmd = bal / divisor;
      bal -= rmd;
      rmdTax = rmd * clientRate;
      rmdNet = rmd - rmdTax;
      side += rmdNet;
      totalRMD += rmd; totalRmdTax += rmdTax;
    }
    rows.push({ year: i, age: a, begin, growth, afterGrowth, divisor, rmd, rmdTax, rmdNet, sideBegin, sideGrowth, sideEnd: side, iraEnd: bal });
  }
  return { bal, side, totalRMD, totalRmdTax, rows };
}

// inputs: {age, gender, health, joint, age2, gender2, health2, balance, ror, clientState, heirState, netWorth, dbInEstate, exemption}
export function project(inp) {
  const year = new Date().getFullYear();
  const birthYear = year - inp.age;
  const startRMD = rmdStartAge(birthYear);
  const r = inp.ror;
  const clientRate = FED_TOP_RATE + (STATE_RATES[inp.clientState] ?? 0) / 100;
  const heirRate = FED_TOP_RATE + (STATE_RATES[inp.heirState] ?? 0) / 100;
  const exemption = inp.exemption ?? FED_ESTATE_EXEMPTION;
  const le1 = lifeExpectancyYears(inp.gender, inp.age);
  const le2 = inp.joint ? lifeExpectancyYears(inp.gender2, inp.age2) : 0;
  const years = Math.round(Math.max(le1, le2));
  const deathAge = inp.age + years;
  // pricing
  const q = inp.joint ? lookupSurvivorship(inp.age, inp.age2, inp.health, inp.health2) : lookupIndividual(inp.gender, inp.age, inp.health);
  if (!q) return null;
  const db = (inp.balance / 5000000) * q.db5m;
  const buyout = inp.balance * (1 - q.disc);
  // current plan
  const cur = runIRA(inp.balance, years, inp.age, startRMD, r, clientRate);
  // LIRA residual: trust buyout payment returns to the retirement account and compounds as before
  const res = runIRA(buyout, years, inp.age, startRMD, r, clientRate);
  const otherAssets = Math.max(0, inp.netWorth - inp.balance);
  // Estate tax on the modeled dollars: taxable estate = other assets + modeled assets − exemption,
  // 40% applied only to the modeled portion above the exemption.
  const estateDetail = (assets) => {
    const combined = otherAssets + assets;
    const taxableEstate = Math.max(0, combined - exemption);
    const taxableModeled = Math.min(assets, taxableEstate);
    return { assets, otherAssets, combined, exemption, taxableEstate, taxableModeled, tax: FED_ESTATE_RATE * taxableModeled };
  };
  const estTax = (assets) => estateDetail(assets).tax;
  const scen = (bal, side, extraOutside) => {
    // extraOutside: estate-included dollars that owe no income tax (LIRA DB when inside estate)
    const est = estateDetail(bal + side + extraOutside);
    const estateTax = est.tax;
    const incomeTax = bal * heirRate;
    return { gross: bal + side, estateTax, incomeTax, net: bal + side - estateTax - incomeTax,
      taxTotal: estateTax + incomeTax, taxPct: (estateTax + incomeTax) / Math.max(1, bal + side + extraOutside),
      estateDetail: est };
  };
  // A: RMDs spent (side excluded); B: RMDs saved in side fund
  const A = scen(cur.bal, 0, 0);
  const B = scen(cur.bal, cur.side, 0);
  const dbEstateAssets = inp.dbInEstate ? db : 0;
  const mkLira = (side) => {
    const s = scen(res.bal, side, dbEstateAssets);
    const dbEstateTax = inp.dbInEstate ? estTax(res.bal + side + db) - estTax(res.bal + side) : 0;
    return { ...s, db, dbEstateTax, net: s.net + db - dbEstateTax };
  };
  const liraA = mkLira(0);
  const liraB = mkLira(res.side);
  const useB = B.net >= A.net;
  const current = useB ? B : A;
  const lira = useB ? liraB : liraA;
  return { birthYear, startRMD, years, deathAge, deathYear: year + years, clientRate, heirRate, exemption, joint: !!inp.joint,
    disc: q.disc, db5m: q.db5m, buyout, db, premium: inp.balance, otherAssets,
    curBal: cur.bal, curSide: cur.side, resBal: res.bal, resSide: res.side,
    curTotalRMD: cur.totalRMD, curTotalRmdTax: cur.totalRmdTax, resTotalRMD: res.totalRMD, resTotalRmdTax: res.totalRmdTax,
    A, B, liraA, liraB, useB, current, lira,
    trace: { current: cur.rows, residual: res.rows },
    bestCurrent: current.net, advantage: lira.net - current.net };
}
export function fmtMoney(n) { if (n == null || isNaN(n)) return '—'; const neg = n < 0; const v = Math.round(Math.abs(n)); return (neg ? '\u2212$' : '$') + v.toLocaleString('en-US'); }
export function fmtPct(x) { return Math.round(x * 100) + '%'; }
