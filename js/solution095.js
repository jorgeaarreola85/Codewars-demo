function maskify(cc) {
  //let result = cc.slice(-4)
  //let x = cc.slice(0,-4)
  let result = "";
  let final = cc.slice(-4);
  for (let i = 0; i < cc.length - 4; i++) {
    result += "#";
  }
  return result + final;
}
