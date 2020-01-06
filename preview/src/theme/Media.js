const size = {
  lgMin: '1200px',
  mdMax: '1199px',
  mdMin: '992px',
  smMax: '991px',
  smMin: '768px',
  xsMax: '767px',
  xsMin: '576px',
  mlMax: '575px',
  mlMin: '375px',
};

export const device = {
  lgMin: `(min-width: ${size.lgMin})`,
  mdMax: `(max-width: ${size.mdMax})`,
  mdMin: `(min-width: ${size.mdMin})`,
  smMax: `(max-width: ${size.smMax})`,
  smMin: `(min-width: ${size.smMin})`,
  xsMax: `(max-width: ${size.xsMax})`,
  xsMin: `(min-width: ${size.xsMin})`,
  mlMax: `(max-width: ${size.mlMax})`,
  mlMin: `(min-width: ${size.mlMin})`,
};

export default device;
