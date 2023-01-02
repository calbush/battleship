import { testForJest } from "./index";

test("jest test", ()=> {
    expect(testForJest("Caleb")).toBe("What's up Caleb")
})