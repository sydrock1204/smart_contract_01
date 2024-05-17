const { expect } = require("chai");

describe("Counter", function () {
  let counter;

  this.beforeEach(async function () {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
  });

  it("should start with a count of 0", async function () {
    expect(await counter.get()).to.equal(0);
  });

  it("Should increment the count by 1", async function () {
    await counter.inc();
    expect(await counter.get()).to.equal(1);
  });

  it("should decrement the count by 1", async function () {
    await counter.inc();
    await counter.dec();
    expect(await counter.get()).to.equal(0);
  });

  it("should fail to decrement the count below 0", async function () {
    await expect(counter.dec()).to.be.revertedWith("underflow");
  });
});
