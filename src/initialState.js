const codes = [
  'FRAM','ASGR','WFSD','SDFSF','SDFSF','ERVV','TNYF','SGHB','STEW','CFVF',
  'AFGR','BTJJ','IHUU','DSE','JIY','KHY','JYI','TNK','RED','RDJ',
  'JYE','NHTR','LIY','GRY','HYF','KUY','JYT','JAU','ASDA','SADD'
];
const companies = [
  'FRAMGIA',' HITECH',' DTT',' QUANTEDGE', 'AHUHU',
  'VINCOM',' TELECOM',' VIETTEL',' NIGHTFURY',' HTC',
  'GOOGLE',' ALIBABA',' AMAZON',' ANEO',' MBOX',
  'BACKPACKING',' IWAY',' FDS',' HKT',' DKT',
  'TRUONGPHAT',' GIATHANH',' HANEL',' FACEBOOK',' VIETTIN',
  'AGRIBANK',' TECHCOM',' FUTURE',' YAMAHA','SAMSUNG'
];


let lists = [];

for (const [index, codeValue] of codes.entries()){
  lists.push({
    code: `${codeValue}.AX`,
    company: companies[index],
    totalChangeValue: 0,
    percentChangePrice: 0,
    price: 100*Math.random(),
    volume: Math.round(1000 + 999000*Math.random()),
  })
}
export const initialState = {
  lists,
  filter: 'SHOW_ALL'
};


