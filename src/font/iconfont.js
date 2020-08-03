import { createGlobalStyle } from "styled-components";

export const FontSizeStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1596185766045'); /* IE9 */
    src: url('./iconfont.eot?t=1596185766045#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAR8AAsAAAAACNgAAAQwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEaIQkATYCJAMUCwwABCAFhG0HVxu/B8gekiRCIAEFCigAHCGOh69l6/2enmWql5hViCqH8iiERKFQYBTZmXR3xp/PRnD1m/4SqUBdqBmpqZH0SIjRITxX+6o+M28x0ud///+9019bP1jr2rNAUl1rW3mfOgFGEyigMaZHxZMLKABuGLuJOIz9BIppobDz3OJqMJGBYYG4ZpU0mMTMcgkeGl0rZ26GeACpJk0RdQP37vfjP6yGCUjqCsDYi6ucDkj/FfrcRDz6/2jNFANJf05Ii6iwAmTiJtd9TeynV4gV43cSx0DRSNKv0Gexz0Y/N/k/pnxF2gLTVJLx54kWAHUnSzvOZH6FYkTFr1hE4tdoRPDbRHpj1DWnLVz2DSC6WdrMGUmWpFEnExN7wtGMMlWWX7tet2ih3RWw5tWK8vlL7IlpizBs4ca6qqtXqucvcLzOXP9aZdWipQ741PkArxss8VqzalxDNDQu9MCXO9XTx4hpACXw0/jUXmxMXd0YfGpyzf7NMHoLMe0chimuXavt3Xn9ak1fE+xrFizf71DrcPxK5fXrdbkdrlypvnpVU1N7uBhjyaTjbTeHLr9qX1234HrSKplj3BfFCl3mubRbXb6etvCBaupG19ufA/Z/MHxJBk3cK66PHlKR4VU7wGlu8NRYUmlYvc94ifE+PHbHgiWZ7cS9ooYylneN4DhPMOZ94DSTdzEw+yKy+M/ZNXVqWY0oU86mXpf8TjUIF+JlmDSD4oJqWfMWoig98UlrndDlbP/bxe+jnwecGsVjWya5cA5c6zkmUiW7HJlXn92E3cxt8N6968TYwNu7dnuvVfqO0opmzRIRhVYUsvLwTuHtGuvGwJK3UucJCbrWDvd5KcLAET778ibvmksV72oIbWjP2n3cHPsuHQKzZAvOTMI2xZ1+MwRbHp1Z0ghDF9pa5Rms2O/hY5tKcbfcbtxcj4hbcAv0q/ZEqwG+rn6I4/id2JqUNv4H6ecPrx7QZpn81YS4MlU/C/5ucINfSaCeGt6yRm3J7yCpWZJNGbDUWS/GYt1T24qYJaOq4Cfw97vXj3aodj6hMRRC0mEKKo0ZUqatQK1tHVoaR1Asy1vcNoAnFtkUWDKBgdBrFyTdvkOlVw8p0+5CbdhbaOkNMRSXYbtm21yweBaPaAF1kPIhJKvg9AyyCbhXWImUA7Q0H5W5rFrEG9gYGUGFJ3N5SI/4PiYYBiojBYEhGZ7TkbnMYUir5chOnlMjhUCpBKEzUSZj8i5EKTgd4M7wEJoA6UCSG4LEUuDoMbSyAE99vhKiNIAWjS8hNPhrITwDtnVSBEp4DVKeWl+LcC6dDQZSiiQQMPwgBo+jQ8plnYgWpjmkzvxeaoiCgKJqkeyUSMaVY+qqqfG1umvcBAXYpA4RJsYkmBQzgr7bAbR+qIqQ2hRyZ/sIUQZtVIVoXqEiypHeMGSAjubkLAA=') format('woff2'),
    url('./iconfont.woff?t=1596185766045') format('woff'),
    url('./iconfont.ttf?t=1596185766045') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1596185766045#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`