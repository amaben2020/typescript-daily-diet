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

type TNasaData = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: "v1";
  title: string;
  url: string;
};

class Nasa extends Logger {
  token: string;
  constructor(name: string) {
    super(name); // must be called to use derived props
    this.token = TOKEN;
  }
  public async getApod(): Promise<void> {
    const { data: info }: Awaited<{ data: TNasaData }> = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${this.token}`,
    );

    console.log("Name inside logger from derived Logger class", this.name);

    this.log(info);
    // console.log("Data", data);
  }
}

const nasa = new Nasa("Amalachukwu");

// console.log("APOD", nasa.getApod());

class RenderData {
  key: keyof TNasaData;
  constructor(keyToDisplay: keyof TNasaData) {
    this.key = keyToDisplay;
  }
}
class NasaFetcher extends RenderData {
  token: string;
  constructor(token: string) {
    super("title");
    this.token = token;
  }

  async displayData() {
    try {
      const { data }: Awaited<{ data: TNasaData }> = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${this.token}`,
      );

      console.log(data[this.key]);
    } catch (error) {
      console.log(error);
    }
  }
}

const nasa2 = new NasaFetcher(TOKEN);
console.log(nasa2.displayData());
