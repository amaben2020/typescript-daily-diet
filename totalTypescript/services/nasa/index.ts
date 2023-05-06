// https://api.nasa.gov/

import axios from "axios";

const TOKEN = "7voLHITAIb26SYr93DVjUAjAFliKu39AwpHZjLZ8";

// Objective: implements, extends, abstract, super

class Logger {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  log(data: any) {
    return console.log(data);
  }
}

class Nasa extends Logger {
  token: string;

  constructor(name: string) {
    super(name); // must be called to use derived props
    this.token = TOKEN;
  }

  public async getApod() {
    const { data: info } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${this.token}`,
    );

    console.log("Name inside logger from derived Logger class", this.name);

    this.log(info);
    // console.log("Data", data);
  }
}

const nasa = new Nasa("Amalachukwu");

console.log("APOD", nasa.getApod());

const items = [
  {
    line_id: "{{line_id}}",
    // "qty_fulfilled": {{"qty_shipped": ""}}
  },
];
