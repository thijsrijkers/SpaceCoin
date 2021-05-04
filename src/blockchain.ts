import { createHash } from "https://deno.land/std@0.91.0/hash/mod.ts";

type Block = {
    data: string;
    prev: string;
    token: string;
    hash: string;
  };
  type Agent = {
    addAgent(agent: Agent): void;
    receiveBlock(block: Block): void;
    addData(data: Block["data"]): void;
  };
  
const hashOf = (str: string) => createHash("md5")
  .update(str)
  .toString();

const magicPrefix = Array(5).fill("0").join("");

const createAgent = (): Agent => {
    const chain: Block[] = [{
      data: "",
      prev: "",
      token: "",
      hash: hashOf(""),
    }];
    const agents: Agent[] = [];
    return {
      addAgent(agent) {},
      addData(data) {},
      receiveBlock(block) {},
    };
};
  

  
  
  