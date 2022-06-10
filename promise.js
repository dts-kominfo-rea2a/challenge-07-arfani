const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async emosi => {
  const dataFilm1 = await promiseTheaterIXX()
  const dataFilm2 = await promiseTheaterVGC()
  let res = 0

  const dataFilm = [...dataFilm1, ...dataFilm2]
  new Promise(
    (resolve, reject) => {
      dataFilm.forEach(el => {
        if(emosi == el.hasil){
          res++;
        }
      });
  }
)
return res
};

module.exports = {
  promiseOutput,
};
