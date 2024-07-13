const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const MomoModule = buildModule('MomoModule', (m) => {
  const momo = m.contract('Momo');
  return { momo };
});

module.exports = MomoModule;
// contract address = 0x149c884E3A728b88A72FbdA284a949f997325CB3