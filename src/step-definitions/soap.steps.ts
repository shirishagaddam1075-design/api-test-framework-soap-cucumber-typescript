import {When} from "@cucumber/cucumber";
import * as fs from "fs";
import { callSoapAPI } from "../helpers/soapHelper";

const actions: Record<string, string> = require("../config/soapActions.json");

When("user sends {string} SOAP request", async function(requestName:string) {
    const xml = fs.readFileSync(`test-data/requests/${requestName}.xml`, "utf-8");
    const action = actions[requestName];
    const response = await callSoapAPI(xml, action);
    console.log(response);
    
})