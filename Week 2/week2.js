const readline = require("readline");

function calculateMotorcycle(hours) {
  let biaya = 0;
  switch (true) {
    case hours > 0:
      biaya = 2000;
      if (hours > 1) {
        biaya += (hours - 1) * 1000;
      }
      break;
    default:
      biaya = 0;
  }
  return biaya;
}

function calculateCar(hours) {
  let biaya = 0;
  switch (true) {
    case hours > 0:
      biaya = 5000;
      if (hours > 1) {
        biaya += (hours - 1) * 2000;
      }
      break;
    default:
      biaya = 0;
  }
  return biaya;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) =>
    rl.question(query, (answer) => resolve(answer))
  );
}

async function main() {
  let total = 0;

  const motorCount = parseInt(await askQuestion("Masukkan jumlah motor: "));
  for (let i = 0; i < motorCount; i++) {
    const jam = parseInt(
      await askQuestion(`Lama parkir motor ke-${i + 1} (jam): `)
    );
    total += calculateMotorcycle(jam);
  }

  const carCount = parseInt(await askQuestion("Masukkan jumlah mobil: "));
  for (let i = 0; i < carCount; i++) {
    const jam = parseInt(
      await askQuestion(`Lama parkir mobil ke-${i + 1} (jam): `)
    );
    total += calculateCar(jam);
  }

  console.log("Total Pendapatan Parkir: Rp" + total);
  rl.close();
}

main();
