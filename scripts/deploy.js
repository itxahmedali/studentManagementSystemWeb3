const hre = require("hardhat");

async function main() {
  const ToDoList = await hre.ethers.getContractFactory("StudentContract");
  const toDoList = await ToDoList.deploy();

  await toDoList.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp deployed to ${toDoList.address}`
  );
  // console.log(toDoList)
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
