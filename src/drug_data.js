

export const antidepressantClasses = [
  {tag: "MDD", id: "TCA", measure1: "NNT", m1:8.5, info: "http://www.publish.csiro.au/hc/pdf/HC16008" },
  {tag: "MDD", id: "SSRI", measure1: "NNT", m1:6, info: "http://www.publish.csiro.au/hc/pdf/HC16008" },
  {tag: "MDD", id: "SNRI", measure1: "NNT", m1:6.5, info: "http://www.publish.csiro.au/hc/pdf/HC16008" },
]
export const anticoagulants = [
  {tag: "AFib", id: "Warfarin", measure1: "% of pts helped by preventing 1 stroke compared to placebo:", m1:.04, info: "compared to Placebo: http://www.thennt.com/nnt/warfarin-for-atrial-fibrillation-stroke-prevention/" },
  {tag: "AFib", id: "Warfarin", measure1: "% of pts helped by preventing 1 stroke compared to Aspirin:", m1:.16, info: "compared to Aspirin: http://www.thennt.com/nnt/warfarin-vs-aspirin-for-atrial-fibrillation-stroke-prevention/" }
]

export const statinPrimaryCVD = [
  {tag: "1ary CVD prevention", id: "Statin for 5 yrs", measure1:"saw no benefit", m1:.96, info:"http://www.thennt.com/nnt/statins-for-heart-disease-prevention-with-known-heart-disease/"},
  {tag: "1ary CVD prevention", id: "Statin for 5 yrs", measure1:"save from death", m1:.01, info:"http://www.thennt.com/nnt/statins-for-heart-disease-prevention-with-known-heart-disease/"},
  {tag: "1ary CVD prevention", id: "Statin for 5 yrs", measure1:"preventing repeat MI", m1:.03, info:"http://www.thennt.com/nnt/statins-for-heart-disease-prevention-with-known-heart-disease/"},
  {tag: "1ary CVD prevention", id: "Statin for 5 yrs", measure1:"preventing stroke", m1:.01, info:"http://www.thennt.com/nnt/statins-for-heart-disease-prevention-with-known-heart-disease/"}
]

//force bubbleChart

export const statin = [
  {id: "Overall NNT", measure1: "To prevent cardiovascular death over 3.9 yrs", m1: "500", info:"http://www.pulsetoday.co.uk/clinical/clinical-specialties/prescribing/nnts-for-common-conditions/20033555.article"},
  {id: "Overall NNT", measure1: "To prevent non-fatal MI 3.4 yrs", m1: "142", info:"http://www.pulsetoday.co.uk/clinical/clinical-specialties/prescribing/nnts-for-common-conditions/20033555.article" },
  {id: "Overall NNT", measure1: "To prevent death over 3.2 yrs", m1: "188", info:"http://www.pulsetoday.co.uk/clinical/clinical-specialties/prescribing/nnts-for-common-conditions/20033555.article" },
  {id: "Overall NNT", measure1: "To prevent stroke over 3.7 yrs", m1: "265", info:"http://www.pulsetoday.co.uk/clinical/clinical-specialties/prescribing/nnts-for-common-conditions/20033555.article" },
  {id: "Annual NNT", measure1: "To prevent death", m1:"595", info:"http://www.pulsetoday.co.uk/clinical/clinical-specialties/prescribing/nnts-for-common-conditions/20033555.article"},
  {id: "Annual NNT", measure1: "To prevent cardiovascular death", m1:"1949", info:"http://www.pulsetoday.co.uk/clinical/clinical-specialties/prescribing/nnts-for-common-conditions/20033555.article" },
  {id: "Annual NNT", measure1: "To prevent non-fatal MI", m1:"483", info:"http://www.pulsetoday.co.uk/clinical/clinical-specialties/prescribing/nnts-for-common-conditions/20033555.article" },
  {id: "Annual NNT", measure1: "To prevent stroke", m1: "981", info:"http://www.pulsetoday.co.uk/clinical/clinical-specialties/prescribing/nnts-for-common-conditions/20033555.article" }
]

//will probably need to pass in a x100 modifier
export const antidepressantDetail = [
  {id: "TCA", measure1: "NNT", m1:"8.5", info: "http://www.publish.csiro.au/hc/pdf/HC16008" },
  {id: "SSRI", measure1: "NNT", m1:"6", info: "http://www.publish.csiro.au/hc/pdf/HC16008" },
  {id: "Amitriptyline", measure1: "NNT", m1:"5", info: "http://www.publish.csiro.au/hc/pdf/HC16008" },
  {id: "Sertraline", measure1: "NNT", m1:"6", info: "http://www.publish.csiro.au/hc/pdf/HC16008" },
  {id: "Escitalopram", measure1: "NNT", m1:"8.5", info: "http://www.publish.csiro.au/hc/pdf/HC16008" },
  {id: "Venlafaxine", measure1: "NNT", m1:"6", info: "http://www.publish.csiro.au/hc/pdf/HC16008" }
]

// //bar graph
// export const statinNNTH = [ {measure1: "developing diabetes", m1: "2%", info:"http://www.thennt.com/nnt/statins-for-heart-disease-prevention-with-known-heart-disease/" },
//   {measure1: "rhabdomyolysis", m1: "10%", info:"http://www.thennt.com/nnt/statins-for-heart-disease-prevention-with-known-heart-disease/" } ]

